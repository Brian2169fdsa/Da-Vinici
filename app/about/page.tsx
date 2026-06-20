import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PhotoFrame } from "@/components/photo-frame";
import { CtaBand } from "@/components/cta-band";
import { ImageBanner } from "@/components/image-banner";
import { Newsletter } from "@/components/newsletter";
import { CircleSquare } from "@/components/proportion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Da Vinci Consulting Services delivers expert consulting for behavioral healthcare compliance, Medicaid credentialing, and operational excellence since 2016. Founded by Tony Renello, MS, LISAC.",
};

const CREDS = ["MS Psychology, Capella", "LISAC, AZBBHE", "VP, ABCAC", "13+ Years in Behavioral Health"];

const TEAM = [
  { role: "Credentialing Specialists", focus: "Medicaid provider enrollment and facility certification.", img: "/assets/boardroom.png" },
  { role: "Compliance & Accreditation", focus: "Joint Commission prep, audits, and survey readiness.", img: "/assets/excellence.png" },
  { role: "Operations & Leadership", focus: "Facility management, workflows, and leadership coaching.", img: "/assets/hero-team.png" },
];

const HISTORY = [
  { year: "2016", text: "Founded to bring order and proportion to behavioral health compliance, rooted in substance-abuse treatment expertise." },
  { year: "Today", text: "Trusted compliance consultants supporting 50+ facilities across Arizona and beyond." },
  { year: "Ahead", text: "Helping organizations build sustainable systems grounded in ethical leadership and strong infrastructure." },
];

const DIFFS = [
  { title: "Trusted Expertise", desc: "13+ years leading in Medicaid credentialing, Joint Commission prep, risk mitigation, and operational systems design." },
  { title: "Tailored Support", desc: "Custom strategies designed for your structure, size, and state requirements, no two organizations are the same." },
  { title: "Measurable Results", desc: "We help facilities achieve accreditation, streamline operations, and boost performance with repeatable strategies." },
  { title: "Partnership Over Consulting", desc: "We don't just advise, we embed with your team to build compliant, mission-aligned systems that last." },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        img="/assets/hero-team.png"
        alt="Da Vinci consulting team in a modern facility"
        priority
        eyebrow={
          <span className="flex items-center gap-3.5">
            <span className="inline-block h-px w-8 bg-gold-bright" />
            About us
          </span>
        }
        title={
          <>
            Expert consulting for behavioral healthcare since{" "}
            <span className="italic text-gold-bright">2016.</span>
          </>
        }
        lead="Compliance, Medicaid credentialing, and operational excellence, delivered with integrity, compassion, and results-focused execution."
        cta={{ label: "Schedule a Consultation", href: "/contact" }}
      />

      {/* Philosophy */}
      <section className="px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <div className="mx-auto grid max-w-content items-start gap-[clamp(36px,6vw,72px)] lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Our philosophy</Eyebrow>
            <h2 className="font-display text-[clamp(26px,3.6vw,40px)] font-medium leading-[1.12] text-ink">
              Transforming behavioral healthcare with integrity, compassion, and
              innovation.
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-[18px] text-[17px] leading-[1.7] text-text">
            <p>
              We believe behavioral healthcare organizations thrive when compliance,
              credentialing, and leadership are aligned with purpose. Our philosophy
              is simple: deliver expert support with integrity, compassion, and
              results-focused execution.
            </p>
            <p>
              We help facilities simplify complex regulatory requirements, from
              Medicaid credentialing to Joint Commission preparation, while building
              stronger, more efficient operations behind the scenes. Every strategy is
              tailored to your goals, your state, and your team.
            </p>
            <p>
              Excellence isn&apos;t just about passing audits. It&apos;s about creating
              a culture of accountability, raising the standard of care, and building
              sustainable success.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="border-y border-tan-line bg-tan px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <div className="mx-auto grid max-w-content items-start gap-[clamp(36px,6vw,64px)] lg:grid-cols-2">
          <Reveal>
            <PhotoFrame
              src="/assets/team-experts.png"
              alt="Tony Renello, founder of Da Vinci Consulting Services, meeting with a client"
              aspect="4/5"
              ticks
            />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Our founder</Eyebrow>
            <h2 className="mb-1.5 font-display text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.1] text-ink">
              Tony Renello, MS, LISAC
            </h2>
            <p className="mb-[22px] font-display text-lg italic text-gold-deep">
              From floor support to industry leader.
            </p>
            <div className="space-y-4 text-[16.5px] leading-[1.7] text-text">
              <p>
                Tony brings over 13 years of experience in behavioral health, rising
                from a frontline floor support specialist to a nationally recognized
                leader in compliance, credentialing, and program development.
              </p>
              <p>
                He holds a Master&apos;s in Psychology from Capella University, with a
                focus on clinical and counseling practice, and is a Licensed
                Independent Substance Abuse Counselor (LISAC) through AZBBHE. His
                leadership experience spans founding treatment centers, overseeing
                clinical operations, and guiding organizations through successful Joint
                Commission accreditation.
              </p>
              <p>
                Tony currently serves as Vice President of the Arizona Board for
                Certification of Addiction Counselors (ABCAC), and has held roles from
                Program Manager to Chief Clinical &amp; Compliance Officer.
              </p>
            </div>
            <div className="mt-[26px] flex flex-wrap gap-2.5">
              {CREDS.map((c) => (
                <span
                  key={c}
                  className="rounded-pill border border-[#D8CDB6] bg-parchment px-4 py-2.5 font-mono text-xs tracking-[.04em] text-forest"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <div className="mx-auto max-w-content">
          <Reveal className="mb-12 max-w-[680px]">
            <Eyebrow>The experts behind Da Vinci</Eyebrow>
            <h2 className="mb-[18px] font-display text-[clamp(26px,3.6vw,40px)] font-medium leading-[1.12] text-ink">
              A team dedicated to compliance, credentialing, and operational success.
            </h2>
            <p className="text-[17px] leading-[1.65] text-text">
              With decades of combined experience launching treatment centers, managing
              programs, and securing accreditations, our consultants work
              shoulder-to-shoulder with your team to build compliant, efficient, and
              sustainable systems of care.
            </p>
          </Reveal>
          <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.role} delay={i * 80}>
                <PhotoFrame src={m.img} alt={`Da Vinci ${m.role} team`} aspect="1/1" className="mb-4" />
                <h3 className="mb-1 font-display text-lg font-semibold text-ink">{m.role}</h3>
                <p className="text-[13.5px] leading-[1.5] text-text-muted">{m.focus}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="relative overflow-hidden border-y border-[#E0D4BC] bg-tan px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,116px)]">
        <CircleSquare className="absolute -left-10 -top-[50px] h-[320px] w-[320px] opacity-[.06]" />
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-12 max-w-[680px]">
            <p className="mb-4 font-mono text-[13px] uppercase tracking-[.14em] text-gold-deep">
              Our history
            </p>
            <h2 className="mb-[18px] font-display text-[clamp(26px,3.6vw,40px)] font-medium leading-[1.12] text-ink">
              From substance-abuse treatment roots to trusted compliance consultants.
            </h2>
            <p className="text-[16.5px] leading-[1.65] text-text">
              For over 13 years, our team has helped organizations navigate regulatory
              shifts, changing accreditation standards, and rising demands for
              operational excellence, partnering with programs across Arizona and beyond
              on Medicaid credentialing, state licensure, and Joint Commission
              preparation.
            </p>
          </Reveal>
          <div className="grid gap-7 sm:grid-cols-3">
            {HISTORY.map((h, i) => (
              <Reveal key={h.year} delay={i * 80} className="border-t border-[#D8CDB6] pt-5">
                <div className="mb-2.5 font-display text-[clamp(28px,3.4vw,38px)] font-semibold text-gold-deep">
                  {h.year}
                </div>
                <p className="text-[14.5px] leading-[1.6] text-text-muted">{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="mb-9 max-w-[560px] font-display text-[clamp(26px,3.6vw,40px)] font-medium leading-[1.12] text-ink">
              Why organizations choose Da Vinci.
            </h2>
          </Reveal>
          <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {DIFFS.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="h-full rounded-card border border-line bg-cream p-[28px_24px]">
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
        heading="Build your foundation for long-term success."
        body="Grounded in compliance, clarity, and proven strategy."
        cta="Explore Our Services"
        href="/services"
      />
      <ImageBanner
        img="/assets/hero-team.png"
        eyebrow="Since 2016"
        heading="Bringing order and proportion to behavioral health."
        body="More than 13 years guiding facilities through accreditation, growth, and regulatory success."
        cta="Work With Us"
        href="/contact"
      />
      <Newsletter />
    </SiteShell>
  );
}
