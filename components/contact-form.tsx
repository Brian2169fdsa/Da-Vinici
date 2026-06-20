"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { isEmail, postForm } from "@/lib/forms";
import { CONTACT_SERVICE_TYPES } from "@/lib/site";

const inputCls =
  "w-full rounded-[10px] border border-line bg-white px-[15px] py-[13px] text-[16px] text-ink outline-none focus:border-gold";
const labelCls = "mb-[7px] block text-[13px] font-semibold text-text";

export function ContactForm() {
  const [f, setF] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: CONTACT_SERVICE_TYPES[CONTACT_SERVICE_TYPES.length - 1],
    comment: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  async function submit() {
    if (!f.firstName.trim()) return setError("Please enter your first name.");
    if (!isEmail(f.email)) return setError("Please enter a valid email address.");
    setError("");
    setPending(true);
    const res = await postForm("/api/contact", f);
    setPending(false);
    if (res.ok) setSent(true);
    else setError(res.error);
  }

  if (sent) {
    return (
      <div className="rounded-frame border border-card-line bg-white p-[48px_32px] text-center shadow-panel">
        <div className="mx-auto mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-full border-[1.5px] border-success">
          <CheckCircle2 className="h-[22px] w-[22px] text-success" aria-hidden />
        </div>
        <h3 className="mb-2 font-display text-2xl font-semibold text-ink">
          Thank you, message received.
        </h3>
        <p className="text-[15px] text-text-muted">
          A senior consultant will reach out shortly to discuss your needs.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-frame border border-card-line bg-white p-[clamp(28px,4vw,40px)] shadow-panel">
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelCls}>First name</span>
          <input value={f.firstName} onChange={set("firstName")} placeholder="Jane" className={inputCls} />
        </label>
        <label className="block">
          <span className={labelCls}>Last name</span>
          <input value={f.lastName} onChange={set("lastName")} placeholder="Doe" className={inputCls} />
        </label>
      </div>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelCls}>Email</span>
          <input value={f.email} onChange={set("email")} type="email" placeholder="jane@facility.org" className={inputCls} />
        </label>
        <label className="block">
          <span className={labelCls}>Phone number</span>
          <input value={f.phone} onChange={set("phone")} type="tel" placeholder="480-606-8602" className={inputCls} />
        </label>
      </div>
      <label className="mb-4 block">
        <span className={labelCls}>Type of service requested</span>
        <select value={f.serviceType} onChange={set("serviceType")} className={`${inputCls} cursor-pointer appearance-none`}>
          {CONTACT_SERVICE_TYPES.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
      <label className="mb-2 block">
        <span className={labelCls}>Comment</span>
        <textarea value={f.comment} onChange={set("comment")} rows={4} placeholder="Tell us about your facility and goals." className={`${inputCls} resize-y`} />
      </label>
      {error && <p className="mt-1 text-[13px] text-error">{error}</p>}
      <button
        type="button"
        onClick={submit}
        disabled={pending}
        className="mt-4 w-full rounded-[10px] bg-gold py-4 text-base font-semibold text-ink transition-colors hover:bg-gold-bright disabled:opacity-70"
      >
        {pending ? "Sending…" : "Schedule a Consultation"}
      </button>
    </div>
  );
}
