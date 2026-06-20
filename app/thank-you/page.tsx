import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting Da Vinci Consulting Services.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <SiteShell>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-[clamp(20px,5vw,56px)] py-[clamp(64px,9vw,120px)]">
        <svg
          viewBox="0 0 600 600"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2"
          aria-hidden
        >
          <rect x="120" y="120" width="360" height="360" fill="none" stroke="#211C18" strokeWidth="1" opacity=".1" />
          <circle cx="300" cy="300" r="180" fill="none" stroke="#B68B3C" strokeWidth="1.2" opacity=".4" />
          <line x1="300" y1="80" x2="300" y2="520" stroke="#B68B3C" strokeWidth=".6" opacity=".2" />
          <line x1="80" y1="300" x2="520" y2="300" stroke="#B68B3C" strokeWidth=".6" opacity=".2" />
        </svg>

        <Reveal className="relative max-w-[620px] text-center">
          <div className="mx-auto mb-7 flex h-[64px] w-[64px] items-center justify-center rounded-full border-[1.5px] border-success">
            <CheckCircle2 className="h-7 w-7 text-success" aria-hidden />
          </div>
          <p className="mb-5 font-mono text-[13px] uppercase tracking-[.16em] text-gold-deep">
            Message received
          </p>
          <h1 className="mb-5 font-display text-[clamp(30px,4.6vw,52px)] font-semibold leading-[1.06] tracking-[-.015em] text-ink">
            Thank you. We&apos;ll be in touch shortly.
          </h1>
          <p className="mb-9 text-[17px] leading-[1.65] text-text-muted">
            A senior consultant will review your message and reach out, usually within
            one business day. Need something sooner? Call us directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={SITE.phoneHref}
              className="rounded-pill bg-gold px-8 py-[15px] text-base font-semibold text-ink transition-colors hover:bg-gold-bright"
            >
              Call {SITE.phone}
            </a>
            <Link
              href="/"
              className="rounded-pill border border-ink px-7 py-[15px] text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Back to Home
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
