import { NextResponse } from "next/server";
import { isEmail } from "@/lib/forms";
import { insertSubmission } from "../_insert";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Record<string, string>;
  const { firstName, lastName, email, phone, serviceType, comment } = body;

  if (!firstName?.trim() || !lastName?.trim()) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!isEmail(email ?? "")) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  return insertSubmission("contact_submissions", {
    first_name: firstName.trim(),
    last_name: lastName.trim(),
    email: email.trim(),
    phone: phone?.trim() ?? null,
    service_type: serviceType?.trim() ?? null,
    comment: comment?.trim() ?? null,
    created_at: new Date().toISOString(),
  });
}
