import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client used by route handlers to insert form rows.
 * Uses the service-role key so inserts succeed under RLS. NEVER import this
 * into client components.
 *
 * Returns null when env vars are absent so the app builds/runs without a
 * Supabase project; route handlers degrade to a logged no-op in that case.
 */
export function getServiceClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export const isSupabaseConfigured = () =>
  Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
