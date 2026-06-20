import { NextResponse } from "next/server";
import { getServiceClient } from "@/lib/supabase/server";

/**
 * Shared insert used by the contact/lead/newsletter route handlers.
 * If Supabase isn't configured (no env vars), the submission is logged
 * server-side and still treated as success so the UX works in any
 * environment — wire env vars to persist for real.
 */
export async function insertSubmission(
  table: string,
  row: Record<string, unknown>,
) {
  const supabase = getServiceClient();

  if (!supabase) {
    console.info(
      `[forms] Supabase not configured — would insert into "${table}":`,
      row,
    );
    return NextResponse.json({ ok: true, persisted: false });
  }

  const { error } = await supabase.from(table).insert(row);
  if (error) {
    console.error(`[forms] insert into ${table} failed:`, error.message);
    return NextResponse.json(
      { ok: false, error: "We couldn't save your message. Please try again." },
      { status: 500 },
    );
  }
  return NextResponse.json({ ok: true, persisted: true });
}
