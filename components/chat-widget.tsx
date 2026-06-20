"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { SITE } from "@/lib/site";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi! I'm Leo, the Da Vinci assistant. Ask me about Medicaid credentialing, Joint Commission prep, state licensing, or anything else — I'm happy to help.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keep the transcript pinned to the latest message.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  // Focus the input when the panel opens; close on Escape.
  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || sending) return;

    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setSending(true);

    // Placeholder assistant turn we stream into.
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send the conversation minus the greeting (it's UI-only).
        body: JSON.stringify({ messages: next.filter((_, i) => i !== 0) }),
      });

      if (!res.body) throw new Error("no stream");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: "assistant",
            content: copy[copy.length - 1].content + chunk,
          };
          return copy;
        });
      }
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content: `Sorry — I couldn't connect. Please call us at ${SITE.phone} or visit ${SITE.url}/contact.`,
        };
        return copy;
      });
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  }

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with Leo, our AI assistant"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_8px_28px_rgba(33,28,24,.28)] transition-transform duration-150 hover:scale-105 hover:bg-gold-bright focus-visible:scale-105"
      >
        {open ? <X className="h-6 w-6" aria-hidden /> : <MessageCircle className="h-6 w-6" aria-hidden />}
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Da Vinci's AI assistant"
          className="fixed bottom-24 right-5 z-[80] flex h-[min(560px,calc(100dvh-7rem))] w-[min(384px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-[16px] border border-line bg-parchment shadow-[0_24px_60px_rgba(33,28,24,.24)]"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-line bg-ink-panel px-4 py-3.5 text-cream">
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-[#4a4239] bg-ink">
              <span className="block h-3 w-3 rotate-45 border-[1.4px] border-gold" aria-hidden />
            </span>
            <span>
              <span className="block font-display text-[15px] font-semibold leading-tight">Leo</span>
              <span className="block font-mono text-[10.5px] tracking-[.12em] text-cream-muted">
                DA VINCI AI ASSISTANT
              </span>
            </span>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-[14px] rounded-br-[4px] bg-gold px-3.5 py-2.5 text-[14px] leading-[1.5] text-ink"
                      : "max-w-[85%] rounded-[14px] rounded-bl-[4px] border border-line bg-white px-3.5 py-2.5 text-[14px] leading-[1.5] text-ink"
                  }
                >
                  {m.content || (sending && i === messages.length - 1 ? "…" : "")}
                </div>
              </div>
            ))}
          </div>

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-end gap-2 border-t border-line bg-cream px-3 py-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about credentialing, accreditation…"
              aria-label="Type your message"
              className="min-w-0 flex-1 rounded-[10px] border border-line bg-white px-3 py-2.5 text-[16px] text-ink outline-none focus:border-gold"
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              aria-label="Send message"
              className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-[10px] bg-gold text-ink transition-colors hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-[18px] w-[18px]" aria-hidden />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
