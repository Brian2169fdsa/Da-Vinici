import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ImageBanner } from "@/components/image-banner";
import { Newsletter } from "@/components/newsletter";
import { LeadForm } from "@/components/lead-form";
import { CircleSquare } from "@/components/proportion";
import { SERVICES, SERVICE_SLUGS, getService } from "@/lib/services";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const sv = getService(params.slug);
  if (!sv) return {};
  return { title: sv.title, description: sv.lead };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const sv = SERVICES[params.slug];
  if (!sv) notFound();

  return (
    <SiteShell>
      <PageHero
        img="/assets/team-experts.png"
        alt={sv.h1}
        priority
        eyebrow={
          <>
            <Link href="/services" className="text-gold-bright">
              Services
            </Link>{" "}
            <span className="text-[#B8AD98]">/</span> {sv.crumb}
          </>
        }
        title={sv.h1}
        lead={sv.lead}
        cta={{ label: sv.cta, href: "/contact" }}
      />

      {/* The Problem */}
      <section className="px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <div className="mx-auto grid max-w-content items-start gap-[clamp(36px,6vw,72px)] lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-[18px]">The problem</p>
            <h2 className="font-display text-[clamp(26px,3.6vw,40px)] font-medium leading-[1.12] text-ink">
              {sv.problemTitle}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-[17px] leading-[1.7] text-text">{sv.problem}</p>
          </Reveal>
        </div>
      </section>

      {/* Potential Risks */}
      <section className="border-y border-tan-line bg-tan px-[clamp(20px,5vw,56px)] py-[clamp(48px,7vw,88px)]">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="mb-9 font-display text-[clamp(24px,3.2vw,34px)] font-medium leading-[1.1] text-ink">
              Potential risks
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sv.risks.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="h-full rounded-[12px] border border-line border-l-[3px] border-l-gold bg-parchment p-[24px_22px]">
                  <div className="mb-3 flex items-center gap-2.5">
                    <AlertTriangle className="h-5 w-5 flex-none text-gold" strokeWidth={1.5} aria-hidden />
                    <h3 className="text-base font-semibold text-ink">{r.title}</h3>
                  </div>
                  <p className="text-sm leading-[1.55] text-text-muted">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How Da Vinci Solves It */}
      <section className="px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <div className="mx-auto max-w-[1100px]">
          <Reveal className="mb-12 max-w-[640px]">
            <p className="eyebrow mb-4">The solution</p>
            <h2 className="font-display text-[clamp(26px,3.6vw,40px)] font-medium leading-[1.12] text-ink">
              How Da Vinci solves it.
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {sv.steps.map((s) => (
              <Reveal key={s.num}>
                <div className="grid grid-cols-[auto_1fr] items-start gap-[clamp(20px,4vw,44px)] border-t border-line py-7">
                  <span className="font-display text-[clamp(34px,4vw,48px)] font-semibold leading-none text-gold">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="mb-2 font-display text-[clamp(19px,2.2vw,23px)] font-semibold text-ink">
                      {s.title}
                    </h3>
                    <p className="max-w-[680px] text-[15.5px] leading-[1.6] text-text-muted">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Closing callout — dark panel */}
          <Reveal className="relative mt-11 overflow-hidden rounded-card bg-ink-panel p-[clamp(32px,5vw,52px)]">
            <CircleSquare className="absolute -right-5 -top-[30px] h-[200px] w-[200px] opacity-10" />
            <p className="relative mb-[26px] max-w-[720px] font-display text-[clamp(19px,2.4vw,26px)] font-normal italic leading-[1.45] text-cream">
              {sv.closing}
            </p>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2.5 rounded-pill bg-gold px-7 py-[15px] text-base font-semibold text-ink transition-colors hover:bg-gold-bright"
            >
              {sv.cta} →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-tan-line bg-tan px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <Reveal className="mx-auto max-w-[900px] text-center">
          <p className="mb-7 font-mono text-[12.5px] uppercase tracking-[.14em] text-text-muted">
            Trusted by · What people say
          </p>
          <blockquote className="mb-7 font-display text-[clamp(20px,2.6vw,28px)] font-normal italic leading-[1.45] tracking-[-.01em] text-ink">
            &ldquo;{sv.tquote}&rdquo;
          </blockquote>
          <span className="text-base font-semibold text-ink">{sv.tname}</span>
        </Reveal>
      </section>

      {/* Inline contact form */}
      <section className="px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <div className="mx-auto max-w-[760px]">
          <Reveal className="mb-10 text-center">
            <h2 className="mb-3 font-display text-[clamp(26px,3.6vw,40px)] font-medium leading-[1.1] text-ink">
              Contact us any time.
            </h2>
            <p className="text-base leading-[1.6] text-text-muted">
              Fast response from a senior consultant. No pressure, just clarity.
            </p>
          </Reveal>
          <Reveal>
            <LeadForm variant="simple" source={`service:${sv.slug}`} submitLabel="Send Message" />
          </Reveal>
        </div>
      </section>

      <ImageBanner
        img="/assets/team-experts.png"
        eyebrow="Ready when you are"
        heading="Let's solve it together."
        body="Talk through your goals with a senior consultant and get a clear, tailored path forward."
        cta="Schedule a Consultation"
        href="/contact"
      />
      <Newsletter />
    </SiteShell>
  );
}
