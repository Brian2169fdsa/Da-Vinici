import Image from "next/image";
import { CTA } from "@/components/ui/cta";
import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  img: string;
  alt: string;
  /** Mono eyebrow or breadcrumb node, shown above the headline. */
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  lead: React.ReactNode;
  cta?: { label: string; href: string };
  priority?: boolean;
};

/** Full-bleed photo hero for inner pages — matches the Home hero language. */
export function PageHero({ img, alt, eyebrow, title, lead, cta, priority }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[clamp(440px,60vh,580px)] items-center overflow-hidden">
      <Image src={img} alt={alt} fill priority={priority} sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,20,16,.90)_0%,rgba(24,20,16,.66)_42%,rgba(24,20,16,.24)_70%,rgba(24,20,16,.02)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,16,12,.55)_0%,rgba(20,16,12,.10)_28%,transparent_52%)]" />
      <div className="container-1200 relative z-[1] py-[clamp(56px,8vw,112px)]">
        <Reveal>
          <div className="mb-[22px] font-mono text-[12.5px] uppercase tracking-[.1em] text-gold-pale">
            {eyebrow}
          </div>
          <h1 className="mb-[22px] max-w-[820px] text-balance font-display text-[clamp(34px,5.2vw,58px)] font-semibold leading-[1.05] tracking-[-.015em] text-cream">
            {title}
          </h1>
          <p className="mb-8 max-w-[620px] text-[clamp(17px,1.4vw,19px)] leading-[1.6] text-cream-body">
            {lead}
          </p>
          {cta && (
            <CTA href={cta.href} variant="primary" withArrow>
              {cta.label}
            </CTA>
          )}
        </Reveal>
      </div>
    </section>
  );
}
