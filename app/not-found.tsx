import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { DrawnGeometry } from "@/components/proportion";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden px-[clamp(20px,5vw,56px)] py-[clamp(64px,9vw,120px)]">
        <DrawnGeometry className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-60" />

        <Reveal className="relative max-w-[620px] text-center">
          <p className="font-display text-[clamp(72px,12vw,120px)] font-semibold leading-none text-gold-deep">
            404
          </p>
          <p className="mb-5 mt-2 font-mono text-[13px] uppercase tracking-[.16em] text-text-muted">
            Out of proportion
          </p>
          <h1 className="mb-5 font-display text-[clamp(26px,3.6vw,40px)] font-semibold leading-[1.1] text-ink">
            This page is out of proportion. Let&apos;s get you back.
          </h1>
          <p className="mb-9 text-[17px] leading-[1.65] text-text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Here are
            some helpful places to start.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/"
              className="rounded-pill bg-gold px-8 py-[15px] text-base font-semibold text-ink transition-colors hover:bg-gold-bright"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="rounded-pill border border-ink px-7 py-[15px] text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="rounded-pill border border-ink px-7 py-[15px] text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              Contact
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
