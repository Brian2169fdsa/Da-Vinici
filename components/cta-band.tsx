import { CTA } from "@/components/ui/cta";
import { Reveal } from "@/components/reveal";

type CtaBandProps = {
  heading?: string;
  body?: string;
  cta?: string;
  href?: string;
};

/** Deep-gold gradient band — one big warm moment, cream text. */
export function CtaBand({
  heading = "Let's build a stronger, compliant future together.",
  body = "Fast response from a senior consultant. No pressure, just clarity.",
  cta = "Schedule a Consultation",
  href = "/contact",
}: CtaBandProps) {
  return (
    <section className="px-[clamp(20px,5vw,56px)] py-[clamp(20px,4vw,40px)]">
      <Reveal className="relative mx-auto max-w-content overflow-hidden rounded-[20px] bg-[linear-gradient(120deg,#B68B3C_0%,#876728_100%)] px-[clamp(28px,5vw,72px)] py-[clamp(48px,7vw,88px)] text-center">
        <svg
          viewBox="0 0 300 300"
          className="pointer-events-none absolute -bottom-20 -right-10 h-[300px] w-[300px] opacity-[.14]"
          aria-hidden
        >
          <rect x="50" y="50" width="200" height="200" fill="none" stroke="#FBF8F1" strokeWidth="1.5" />
          <circle cx="150" cy="150" r="100" fill="none" stroke="#FBF8F1" strokeWidth="1.5" />
        </svg>
        <div className="relative mx-auto max-w-[680px]">
          <h2 className="mb-[18px] font-display text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] text-cream">
            {heading}
          </h2>
          <p className="mb-8 text-[17px] leading-[1.6] text-parchment/90">{body}</p>
          <CTA href={href} variant="ink" withArrow>
            {cta}
          </CTA>
        </div>
      </Reveal>
    </section>
  );
}
