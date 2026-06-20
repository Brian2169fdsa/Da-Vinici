/** Shared validation + types for the site's three forms + newsletter. */

export type FormResult = { ok: true } | { ok: false; error: string };

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export function validateRequired(
  fields: Record<string, string>,
  required: string[],
): string | null {
  for (const key of required) {
    if (!fields[key] || !fields[key].trim()) {
      return `Please complete the ${key} field.`;
    }
  }
  return null;
}

/** POST a JSON body to one of the form endpoints; normalize the response. */
export async function postForm(
  endpoint: string,
  body: unknown,
): Promise<FormResult> {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;
      return {
        ok: false,
        error: data?.error ?? "Something went wrong. Please try again.",
      };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
}
