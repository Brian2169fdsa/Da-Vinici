import { NextResponse } from "next/server";
import { isEmail } from "@/lib/forms";
import { insertSubmission } from "../_insert";

/** Home lead form + service-page inline form both post here. */
export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Record<string, string>;
  const { name, email, phone, facility, need, message, source } = body;

  if (!name?.trim()) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!isEmail(email ?? "")) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  return insertSubmission("lead_submissions", {
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() ?? null,
    facility: facility?.trim() ?? null,
    need: need?.trim() ?? null,
    message: message?.trim() ?? null,
    source: source?.trim() ?? "home",
    created_at: new Date().toISOString(),
  });
}
