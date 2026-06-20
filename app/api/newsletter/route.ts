import { NextResponse } from "next/server";
import { isEmail } from "@/lib/forms";
import { insertSubmission } from "../_insert";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Record<string, string>;
  const { email } = body;

  if (!isEmail(email ?? "")) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  return insertSubmission("newsletter_subscribers", {
    email: email.trim(),
    created_at: new Date().toISOString(),
  });
}
