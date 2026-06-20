import Link from "next/link";
import { SITE, NAV, SERVICES_MENU } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-footer-ink px-[clamp(20px,5vw,56px)] pb-9 pt-[clamp(56px,7vw,88px)] text-cream-muted">
      {/* Faint Vitruvian proportion watermark, bottom-right. */}
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -bottom-[120px] -right-20 h-[400px] w-[400px] opacity-[.05]"
        aria-hidden
      >
        <rect x="70" y="70" width="260" height="260" fill="none" stroke="#B68B3C" strokeWidth="1" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="#B68B3C" strokeWidth="1" />
        <line x1="200" y1="60" x2="200" y2="340" stroke="#B68B3C" strokeWidth=".6" />
        <line x1="60" y1="200" x2="340" y2="200" stroke="#B68B3C" strokeWidth=".6" />
      </svg>

      <div className="container-1200 relative grid gap-10 nav:grid-cols-[1.6fr_1fr_1.2fr_1.2fr]">
        <div className="min-w-[240px]">
          <div className="mb-[22px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-white.png"
              alt={SITE.name}
              className="block h-[46px] w-auto"
            />
          </div>
          <p className="mb-5 max-w-[300px] text-[14.5px] leading-relaxed text-footer-muted">
            Compliance, credentialing, and operational consulting for behavioral
            health organizations, Phoenix-based, serving Arizona and beyond.
          </p>
          <a
            href={SITE.phoneHref}
            className="font-mono text-[13px] tracking-[.06em] text-gold-bright"
          >
            CALL · {SITE.phone}
          </a>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] tracking-[.14em] text-footer-faint">
            NAVIGATION
          </p>
          <div className="flex flex-col gap-[11px] text-[14.5px]">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-cream-muted transition-colors hover:text-cream"
              >
                {item.label === "About" ? "About Us" : item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] tracking-[.14em] text-footer-faint">
            SERVICES
          </p>
          <div className="flex flex-col gap-[11px] text-sm">
            {SERVICES_MENU.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="text-cream-muted transition-colors hover:text-cream"
              >
                {svc.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-mono text-[11px] tracking-[.14em] text-footer-faint">
            CONTACT
          </p>
          <p className="mb-3.5 text-sm leading-relaxed text-footer-muted">
            {SITE.address.street}
            <br />
            {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
          </p>
          <a
            href={SITE.emailHref}
            className="mb-5 block break-all text-sm text-cream-muted transition-colors hover:text-cream"
          >
            {SITE.email}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-pill bg-gold px-[22px] py-3 text-sm font-semibold text-ink"
          >
            Schedule a Consultation →
          </Link>
        </div>
      </div>

      <div className="container-1200 relative mt-10 flex flex-wrap justify-between gap-3.5 border-t border-footer-line pt-6 text-[12.5px] text-footer-faint">
        <span>© 2026 {SITE.name}. All Rights Reserved.</span>
        <span className="flex flex-wrap gap-5">
          <Link href="/privacy" className="text-footer-faint transition-colors hover:text-cream-muted">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-footer-faint transition-colors hover:text-cream-muted">
            Terms of Service
          </Link>
          <a
            href={SITE.builtBy.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-footer-faint transition-colors hover:text-cream-muted"
          >
            Built by {SITE.builtBy.label}
          </a>
        </span>
      </div>
    </footer>
  );
}
