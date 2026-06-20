"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { isEmail, postForm } from "@/lib/forms";
import { LEAD_NEEDS } from "@/lib/site";

type Variant = "full" | "simple";

const inputCls =
  "w-full rounded-[10px] border border-line bg-cream px-[15px] py-[13px] text-[16px] text-ink outline-none focus:border-gold";

const labelCls = "mb-[7px] block text-[13px] font-semibold text-text";

/**
 * Lead capture form. `full` (home) = Name, Facility, Email, Phone, need
 * dropdown, message. `simple` (service pages) = Full Name, Email, Phone,
 * Message. Validates client-side, posts to /api/lead, inline success.
 */
export function LeadForm({
  variant = "full",
  source = "home",
  submitLabel = "Request a Callback",
}: {
  variant?: Variant;
  source?: string;
  submitLabel?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    facility: "",
    email: "",
    phone: "",
    need: LEAD_NEEDS[0],
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit() {
    if (!form.name.trim()) return setError("Please enter your name.");
    if (!isEmail(form.email)) return setError("Please enter a valid email address.");
    setError("");
    setPending(true);
    const res = await postForm("/api/lead", { ...form, source });
    setPending(false);
    if (res.ok) setSent(true);
    else setError(res.error);
  }

  if (sent) {
    return (
      <div className="rounded-frame border border-card-line bg-white p-[56px_32px] text-center shadow-panel">
        <div className="mx-auto mb-5 flex h-[54px] w-[54px] items-center justify-center rounded-full border-[1.5px] border-success">
          <CheckCircle2 className="h-6 w-6 text-success" aria-hidden />
        </div>
        <h3 className="mb-2.5 font-display text-[25px] font-semibold text-ink">
          Thank you, message received.
        </h3>
        <p className="text-[15px] leading-[1.6] text-text-muted">
          A senior consultant will reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-frame border border-card-line bg-white p-[clamp(28px,4vw,40px)] shadow-panel">
      {variant === "full" ? (
        <>
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelCls}>Name</span>
              <input value={form.name} onChange={set("name")} placeholder="Jane Doe" className={inputCls} />
            </label>
            <label className="block">
              <span className={labelCls}>Facility name</span>
              <input value={form.facility} onChange={set("facility")} placeholder="Optional" className={inputCls} />
            </label>
          </div>
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelCls}>Email</span>
              <input value={form.email} onChange={set("email")} type="email" placeholder="jane@facility.org" className={inputCls} />
            </label>
            <label className="block">
              <span className={labelCls}>Phone</span>
              <input value={form.phone} onChange={set("phone")} type="tel" placeholder="480-606-8602" className={inputCls} />
            </label>
          </div>
          <label className="mb-4 block">
            <span className={labelCls}>What do you need help with?</span>
            <select value={form.need} onChange={set("need")} className={`${inputCls} cursor-pointer appearance-none`}>
              {LEAD_NEEDS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </label>
          <label className="mb-2 block">
            <span className={labelCls}>Anything else?</span>
            <textarea
              value={form.message}
              onChange={set("message")}
              rows={3}
              placeholder="Credentialing, accreditation, licensing, a compliance audit…"
              className={`${inputCls} resize-y`}
            />
          </label>
        </>
      ) : (
        <>
          <label className="mb-4 block">
            <span className={labelCls}>Full Name</span>
            <input value={form.name} onChange={set("name")} placeholder="Jane Doe" className={inputCls} />
          </label>
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelCls}>Email Address</span>
              <input value={form.email} onChange={set("email")} type="email" placeholder="jane@facility.org" className={inputCls} />
            </label>
            <label className="block">
              <span className={labelCls}>Phone Number</span>
              <input value={form.phone} onChange={set("phone")} type="tel" placeholder="480-606-8602" className={inputCls} />
            </label>
          </div>
          <label className="mb-2 block">
            <span className={labelCls}>Your Message</span>
            <textarea value={form.message} onChange={set("message")} rows={4} placeholder="Briefly, what's going on?" className={`${inputCls} resize-y`} />
          </label>
        </>
      )}

      {error && <p className="mt-1 text-[13px] text-error">{error}</p>}

      <button
        type="button"
        onClick={submit}
        disabled={pending}
        className="mt-4 w-full rounded-[10px] bg-gold py-4 text-base font-semibold text-ink transition-colors hover:bg-gold-bright disabled:opacity-70"
      >
        {pending ? "Sending…" : submitLabel}
      </button>
    </div>
  );
}
