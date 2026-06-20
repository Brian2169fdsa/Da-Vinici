import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from "@/lib/chat-knowledge";
import { SITE } from "@/lib/site";

// Node runtime (the SDK uses Node streams); allow up to 30s for a reply.
export const runtime = "nodejs";
export const maxDuration = 30;

type ChatMessage = { role: "user" | "assistant"; content: string };

const MODEL = "claude-opus-4-8";
const MAX_TURNS = 12; // cap history sent to the model

function streamText(text: string): Response {
  const encoder = new TextEncoder();
  return new Response(
    new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(text));
        controller.close();
      },
    }),
    { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } },
  );
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as { messages?: unknown };

  // Validate + normalize the conversation.
  const raw = Array.isArray(body.messages) ? body.messages : [];
  const messages: ChatMessage[] = raw
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        typeof m === "object" &&
        (m as ChatMessage).role !== undefined &&
        ["user", "assistant"].includes((m as ChatMessage).role) &&
        typeof (m as ChatMessage).content === "string" &&
        (m as ChatMessage).content.trim().length > 0,
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }))
    .slice(-MAX_TURNS);

  // Drop any leading assistant turns — the API requires the first to be user.
  while (messages.length && messages[0].role === "assistant") messages.shift();

  if (messages.length === 0) {
    return Response.json({ error: "No message provided." }, { status: 400 });
  }

  // Graceful degradation: if no API key is configured, the widget still works
  // (mirrors how the form handlers behave without Supabase).
  if (!process.env.ANTHROPIC_API_KEY) {
    console.info("[chat] ANTHROPIC_API_KEY not configured — returning fallback reply.");
    return streamText(
      `Thanks for reaching out! Our live assistant isn't connected yet, but the ` +
        `Da Vinci team is happy to help directly — call ${SITE.phone} or visit ${SITE.url}/contact.`,
    );
  }

  const client = new Anthropic();

  try {
    const stream = client.messages.stream({
      model: MODEL,
      max_tokens: 1024,
      // Static system prompt → cache it so repeat requests are cheaper + faster.
      system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
      messages,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
        } catch (err) {
          console.error("[chat] stream error:", err);
          controller.enqueue(
            encoder.encode(
              `\n\nSorry — I hit a snag. Please call us at ${SITE.phone} and we'll help right away.`,
            ),
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  } catch (err) {
    console.error("[chat] request error:", err);
    return streamText(
      `Sorry — I'm having trouble right now. Please call us at ${SITE.phone} or visit ${SITE.url}/contact.`,
    );
  }
}
