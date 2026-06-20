"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { NAV, SERVICES_MENU, SITE } from "@/lib/site";
import { CircleSquare } from "@/components/proportion";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Solid white header always; add a soft shadow once scrolled past 24px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change; lock body scroll while the mobile overlay is open.
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[60] border-b border-line bg-white transition-shadow duration-300"
        style={{ boxShadow: scrolled ? "0 4px 24px rgba(33,28,24,.07)" : "none" }}
      >
        <div className="container-1200 flex h-[74px] items-center justify-between gap-6">
          <Link href="/" className="flex flex-none items-center" aria-label={`${SITE.name} — home`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-davinci.png"
              alt={SITE.name}
              className="block h-[42px] w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 text-[15px] font-medium nav:flex"
            onMouseLeave={() => setMegaOpen(false)}
          >
            {NAV.map((item) =>
              "hasMega" in item && item.hasMega ? (
                <span
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-[9px] text-ink hover:bg-tan"
                    aria-haspopup="true"
                    aria-expanded={megaOpen}
                    onFocus={() => setMegaOpen(true)}
                  >
                    {item.label}
                    <span className="text-[10px] text-gold-deep">▾</span>
                  </Link>
                </span>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3.5 py-[9px] text-ink hover:bg-tan"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden flex-none items-center gap-3.5 nav:flex">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
            >
              <Phone className="h-[15px] w-[15px] text-gold-deep" aria-hidden />
              Call Now
            </a>
            <Link
              href="/contact"
              className="rounded-pill bg-gold px-[22px] py-3 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-gold-bright"
            >
              Schedule a Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-line bg-transparent text-ink nav:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>

        {/* Mega menu */}
        {megaOpen && (
          <div
            className="absolute inset-x-0 top-[74px] hidden border-y border-line bg-cream nav:block"
            style={{ boxShadow: "0 24px 48px rgba(33,28,24,.12)" }}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <div className="container-1200 grid grid-cols-[300px_1fr] items-stretch gap-9 py-7">
              <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[14px] bg-ink-panel p-[26px]">
                <div className="absolute inset-0 animate-ambient bg-[repeating-linear-gradient(135deg,#3a332b_0_2px,transparent_2px_12px)] opacity-50" />
                <CircleSquare className="absolute -right-5 -top-5 h-[140px] w-[140px] opacity-[.18]" />
                <div className="relative">
                  <p className="mb-3.5 font-mono text-[11px] tracking-[.16em] text-gold-bright">
                    FULL-SERVICE SUPPORT
                  </p>
                  <h3 className="mb-3 font-display text-[26px] font-semibold leading-[1.08] text-cream">
                    Every regulation, one expert team.
                  </h3>
                  <p className="mb-[18px] text-[13.5px] leading-[1.55] text-cream-muted">
                    Compliance, credentialing, and leadership in one place.
                  </p>
                  <Link href="/services" className="text-sm font-semibold text-gold-bright">
                    Explore all services →
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {SERVICES_MENU.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="flex items-start gap-3 rounded-[10px] p-[13px] transition-colors hover:bg-[#F2EADA]"
                  >
                    <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-lg border border-line bg-parchment">
                      <span className="block h-[11px] w-[11px] rotate-45 border-[1.4px] border-gold" />
                    </span>
                    <span>
                      <span className="block text-[14.5px] font-semibold leading-tight text-ink">
                        {svc.name}
                      </span>
                      <span className="mt-[3px] block text-[12.5px] text-text-muted">
                        {svc.desc}
                      </span>
                    </span>
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="flex items-center gap-2.5 rounded-[10px] border border-dashed border-[#D8CDB6] p-[13px] text-sm font-semibold text-gold-deep"
                >
                  → View all services
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-ink px-[clamp(20px,6vw,40px)] py-6 text-cream nav:hidden">
          <div className="flex h-[50px] items-center justify-between">
            <span className="font-display text-lg font-semibold">Da Vinci</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#4a4239] text-cream"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-1 font-display text-3xl font-medium">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-footer-line py-3 text-cream"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="mt-7 rounded-pill bg-gold py-4 text-center text-base font-semibold text-ink"
          >
            Schedule a Consultation
          </Link>
          <a
            href={SITE.phoneHref}
            className="mt-3.5 text-center font-mono text-sm tracking-[.08em] text-cream-muted"
          >
            CALL · {SITE.phone}
          </a>
        </div>
      )}
    </>
  );
}
