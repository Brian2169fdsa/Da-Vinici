import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CTA } from "@/components/ui/cta";

/** "Compliance in balance" — copy + the overlapping-rings Regulation ∩ Care diagram. */
export function Balance() {
  return (
    <section className="section-y px-[clamp(20px,5vw,56px)]">
      <div className="mx-auto grid max-w-content items-center gap-[clamp(36px,6vw,72px)] lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Compliance in balance</Eyebrow>
          <h2 className="mb-5 font-display text-[clamp(28px,4vw,42px)] font-medium leading-[1.1] tracking-[-.005em] text-ink">
            Customized strategies for behavioral health success.
          </h2>
          <p className="mb-4 text-[17px] leading-[1.65] text-text">
            From Medicaid credentialing to compliance audits, Joint Commission
            preparation, and leadership consulting, we help facilities operate with
            clarity.
          </p>
          <p className="mb-[30px] text-[17px] leading-[1.65] text-text">
            Every strategy is tailored to your goals, meeting licensing requirements,
            boosting efficiency, or preparing for accreditation. Let&apos;s elevate
            your organization together.
          </p>
          <CTA href="/contact" variant="secondary" withArrow>
            Request a Strategy Call
          </CTA>
        </Reveal>

        <Reveal delay={120} className="flex justify-center">
          <svg viewBox="0 0 440 360" className="h-auto w-full max-w-[440px]" role="img" aria-label="Diagram: Regulation overlapping Care equals Sustainable Compliance">
            <circle cx="165" cy="170" r="125" fill="#1F3D32" fillOpacity=".1" stroke="#1F3D32" strokeWidth="1.3" strokeOpacity=".5" />
            <circle cx="275" cy="170" r="125" fill="#B68B3C" fillOpacity=".14" stroke="#B68B3C" strokeWidth="1.3" strokeOpacity=".7" />
            <text x="100" y="120" fontFamily="var(--font-plex-mono), monospace" fontSize="13" letterSpacing="1.5" fill="#1F3D32">REGULATION</text>
            <text x="300" y="120" fontFamily="var(--font-plex-mono), monospace" fontSize="13" letterSpacing="1.5" fill="#876728">CARE</text>
            <text x="220" y="168" textAnchor="middle" fontFamily="var(--font-fraunces), serif" fontSize="16" fontWeight="600" fill="#211C18">Sustainable</text>
            <text x="220" y="190" textAnchor="middle" fontFamily="var(--font-fraunces), serif" fontSize="16" fontWeight="600" fill="#211C18">Compliance</text>
            <text x="220" y="338" textAnchor="middle" fontFamily="var(--font-plex-mono), monospace" fontSize="11" letterSpacing="2" fill="#6B6155">REGULATION ∩ CARE</text>
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
