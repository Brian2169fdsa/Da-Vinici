import Link from "next/link";
import { ShieldCheck, ClipboardCheck, GraduationCap, FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

const FEATURED = [
  {
    name: "Medicaid Credentialing",
    Icon: ShieldCheck,
    blurb:
      "End-to-end support for provider ID applications and federal/state compliance, fast, accurate submissions that secure your Medicaid status.",
    cta: "Start credentialing",
    slug: "medicaid-credentialing",
  },
  {
    name: "Joint Commission Prep",
    Icon: ClipboardCheck,
    blurb:
      "Mock surveys, compliance reviews, and corrective action plans so your facility meets every standard without last-minute surprises.",
    cta: "Prep for accreditation",
    slug: "joint-commission-prep",
  },
  {
    name: "Compliance Training",
    Icon: GraduationCap,
    blurb:
      "Customized programs on behavioral health regulations that reduce risk, improve outcomes, and build a culture of accountability.",
    cta: "Customize training",
    slug: "compliance-training",
  },
  {
    name: "State Licensing",
    Icon: FileCheck2,
    blurb:
      "We manage the full workflow, from application to approval, so you launch or expand faster, with fewer headaches.",
    cta: "Simplify licensing",
    slug: "state-licensing",
  },
];

export function FeaturedServices() {
  return (
    <section className="section-y border-t border-tan-line bg-tan px-[clamp(20px,5vw,56px)]">
      <div className="mx-auto max-w-content">
        <Reveal className="mb-[52px] flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-[620px]">
            <p className="eyebrow mb-4">Core services</p>
            <h2 className="mb-3 font-display text-[clamp(28px,4vw,42px)] font-medium leading-[1.1] tracking-[-.005em] text-ink">
              Certified. Compliant. Trusted.
            </h2>
            <p className="text-[17px] leading-[1.6] text-text-muted">
              We work to the same standards your facility is measured by.
            </p>
          </div>
          <Link href="/services" className="whitespace-nowrap text-[15px] font-semibold text-gold-deep">
            View all services →
          </Link>
        </Reveal>

        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map(({ name, Icon, blurb, cta, slug }, i) => (
            <Reveal key={slug} delay={i * 60}>
              <Link
                href={`/services/${slug}`}
                className="group relative flex h-full flex-col rounded-card border border-card-line bg-white p-[30px_26px_28px] shadow-card-rest transition-all duration-200 ease-smooth hover:-translate-y-[5px] hover:border-gold hover:shadow-card-hover-pop"
              >
                <span className="absolute left-2.5 top-2.5 h-[9px] w-[9px] border-l border-t border-gold" />
                <span className="absolute right-2.5 top-2.5 h-[9px] w-[9px] border-r border-t border-gold" />
                <span className="mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-[10px] border border-line bg-cream">
                  <Icon className="h-[22px] w-[22px] text-gold" strokeWidth={1.5} aria-hidden />
                </span>
                <span className="mb-[9px] block font-display text-xl font-semibold leading-tight text-ink">
                  {name}
                </span>
                <span className="mb-[18px] block flex-1 text-[14.5px] leading-[1.55] text-text-muted">
                  {blurb}
                </span>
                <span className="text-sm font-semibold text-gold-deep">{cta} →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
