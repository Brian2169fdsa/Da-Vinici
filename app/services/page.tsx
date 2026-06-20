import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { ImageBanner } from "@/components/image-banner";
import { Newsletter } from "@/components/newsletter";
import { SERVICES, SERVICE_INDEX_ORDER, DIFFERENTIATORS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Core consulting services for behavioral health organizations: Medicaid credentialing, Joint Commission prep, compliance training, state licensing, audits, risk management, policies, and leadership development.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        img="/assets/team-experts.png"
        alt="Da Vinci consultants reviewing compliance documentation"
        priority
        eyebrow="Our services"
        title={
          <>
            Core consulting services for behavioral health{" "}
            <span className="italic text-gold-bright">organizations.</span>
          </>
        }
        lead={
          <>
            <strong className="text-cream">Certified. Compliant. Trusted.</strong> We
            work to the same standards your facility is measured by.
          </>
        }
        cta={{ label: "Schedule a Consultation", href: "/contact" }}
      />

      {/* Service grid (all 8) */}
      <section className="px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <div className="mx-auto grid max-w-content gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_INDEX_ORDER.map((slug, i) => {
            const s = SERVICES[slug];
            return (
              <Reveal key={slug} delay={(i % 3) * 60}>
                <Link
                  href={`/services/${slug}`}
                  className="group relative flex h-full flex-col rounded-card border border-line bg-cream p-[30px_26px] transition-all duration-200 ease-smooth hover:-translate-y-1 hover:border-gold hover:shadow-card-hover"
                >
                  <span className="absolute left-2.5 top-2.5 h-[9px] w-[9px] border-l border-t border-gold" />
                  <span className="absolute right-2.5 top-2.5 h-[9px] w-[9px] border-r border-t border-gold" />
                  <span className="mb-4 flex items-center gap-3.5">
                    <span className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-[10px] border border-line bg-parchment">
                      <span className="block h-[13px] w-[13px] rotate-45 border-[1.6px] border-gold" />
                    </span>
                    <span className="font-mono text-xs tracking-[.08em] text-[#A8997F]">
                      {s.indexNum}
                    </span>
                  </span>
                  <span className="mb-2.5 block font-display text-[21px] font-semibold leading-tight text-ink">
                    {s.title}
                  </span>
                  <span className="mb-5 block flex-1 text-[14.5px] leading-[1.6] text-text-muted">
                    {s.indexBlurb}
                  </span>
                  <span className="text-sm font-semibold text-gold-deep">{s.indexCta} →</span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Why Choose Da Vinci */}
      <section className="border-y border-tan-line bg-tan px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <div className="mx-auto max-w-content">
          <Reveal className="mb-12 max-w-[640px]">
            <p className="eyebrow mb-4">Why Da Vinci</p>
            <h2 className="mb-4 font-display text-[clamp(28px,4vw,42px)] font-medium leading-[1.1] text-ink">
              Partnership over consulting.
            </h2>
            <p className="text-[17px] leading-[1.65] text-text">
              With over 13 years of experience, we deliver tailored, hands-on
              solutions that improve compliance, boost efficiency, and support
              sustainable growth.
            </p>
          </Reveal>
          <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="h-full rounded-card border border-line bg-parchment p-[28px_24px]">
                  <div className="mb-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-forest">
                    <span className="block h-[11px] w-[11px] rotate-45 border-[1.6px] border-gold-bright" />
                  </div>
                  <h3 className="mb-2.5 font-display text-xl font-semibold text-ink">{d.title}</h3>
                  <p className="text-[14.5px] leading-[1.6] text-text-muted">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Let's make your operations smoother, stronger, and fully aligned."
        body="Join our ever-growing list of organizations who have worked with us."
        cta="Let's Talk Strategy"
      />
      <ImageBanner
        img="/assets/team-experts.png"
        eyebrow="One expert team"
        heading="Every regulation, handled in one place."
        body="Compliance, credentialing, licensing, and leadership, delivered by specialists who work to your standards."
        cta="Talk to a Consultant"
        href="/contact"
      />
      <Newsletter />
    </SiteShell>
  );
}
