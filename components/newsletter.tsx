"use client";

import { useState } from "react";
import { isEmail, postForm } from "@/lib/forms";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function subscribe() {
    if (!isEmail(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    const res = await postForm("/api/newsletter", { email });
    if (res.ok) {
      setStatus("done");
    } else {
      setStatus("error");
      setError(res.error);
    }
  }

  return (
    <section className="px-[clamp(20px,5vw,56px)] pb-[clamp(56px,8vw,96px)] pt-[clamp(48px,7vw,88px)]">
      <div className="mx-auto grid max-w-[1000px] items-center gap-7 nav:grid-cols-2 nav:gap-x-12">
        <div>
          <h3 className="mb-2 font-display text-[clamp(22px,2.8vw,30px)] font-medium leading-[1.15] text-ink">
            Don&apos;t miss the latest industry updates.
          </h3>
          <p className="text-[15px] leading-[1.55] text-text-muted">
            Trends, tips, and regulatory insight for behavioral health leaders.
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2.5">
            <label className="sr-only" htmlFor="newsletter-email">
              Your email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              className="min-w-[180px] flex-1 rounded-[10px] border border-line bg-cream px-4 py-3.5 text-[15px] text-ink outline-none"
            />
            <button
              type="button"
              onClick={subscribe}
              disabled={status === "done"}
              className="rounded-[10px] bg-ink px-6 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:bg-ink-panel disabled:opacity-70"
            >
              {status === "done" ? "Subscribed ✓" : "Subscribe"}
            </button>
          </div>
          {status === "error" ? (
            <p className="mt-3 text-[12.5px] text-error">{error}</p>
          ) : (
            <p className="mt-3 text-[12.5px] text-[#A8997F]">
              By subscribing, you accept our Privacy Policy.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
