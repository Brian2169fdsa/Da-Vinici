import Image from "next/image";
import { CTA } from "@/components/ui/cta";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-[clamp(560px,80vh,740px)] items-center overflow-hidden">
      <Image
        src="/assets/hero-team.png"
        alt="Behavioral health consulting team walking through a modern facility"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Dual scrim: left-dark for text legibility + bottom "wipe" so the CTAs pop. */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,20,16,.90)_0%,rgba(24,20,16,.66)_42%,rgba(24,20,16,.24)_70%,rgba(24,20,16,.02)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,16,12,.62)_0%,rgba(20,16,12,.12)_28%,transparent_52%)]" />

      <div className="container-1200 relative z-[1] py-[clamp(56px,7vw,104px)]">
        <div className="max-w-[640px]">
          <Reveal>
            <p className="mb-6 flex items-center gap-3.5 font-mono text-[13px] uppercase tracking-[.16em] text-gold-pale">
              <span className="inline-block h-px w-[34px] bg-gold-bright" />
              Behavioral Healthcare Consulting
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mb-6 text-balance font-display text-[clamp(42px,6.2vw,80px)] font-semibold leading-[1.02] tracking-[-.015em] text-cream">
              Helping behavioral health operate with{" "}
              <span className="italic text-gold-bright">confidence.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mb-[38px] max-w-[520px] text-[clamp(17px,1.5vw,20px)] leading-[1.6] text-cream-body">
              Compliance, credentialing, and operational expertise, so a stretched
              team can hand the regulatory weight to one expert partner.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-3.5">
              <CTA href="/contact" variant="primary" withArrow>
                Schedule Your Consultation
              </CTA>
              <CTA href="/services" variant="secondary-on-dark">
                Explore Services
              </CTA>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
