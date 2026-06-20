import Image from "next/image";
import { CTA } from "@/components/ui/cta";
import { Reveal } from "@/components/reveal";

type ImageBannerProps = {
  img: string;
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
  href: string;
};

/**
 * Full-bleed photo band with right-aligned text + CTA. Used near the bottom
 * of most pages. Mirrors the prototype's ImageBanner component.
 */
export function ImageBanner({
  img,
  eyebrow,
  heading,
  body,
  cta,
  href,
}: ImageBannerProps) {
  return (
    <section className="relative flex min-h-[clamp(420px,56vh,560px)] items-center overflow-hidden">
      <Image
        src={img}
        alt={heading}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,16,12,.04)_0%,rgba(20,16,12,.28)_44%,rgba(20,16,12,.86)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(16,12,9,.5)_0%,transparent_46%)]" />
      <div className="container-1200 relative z-[1] flex justify-center py-[clamp(48px,7vw,96px)] nav:justify-end">
        <Reveal className="max-w-[530px] text-center nav:text-right">
          <p className="mb-5 flex items-center justify-center gap-3.5 font-mono text-[12.5px] uppercase tracking-[.16em] text-gold-pale nav:justify-end">
            {eyebrow}
            <span className="inline-block h-px w-8 bg-gold-bright" />
          </p>
          <h2 className="mb-5 text-balance font-display text-[clamp(28px,3.8vw,46px)] font-semibold leading-[1.08] tracking-[-.01em] text-cream">
            {heading}
          </h2>
          <p className="mb-[30px] text-[clamp(16px,1.3vw,18px)] leading-[1.6] text-cream-body">
            {body}
          </p>
          <CTA href={href} variant="primary" withArrow>
            {cta}
          </CTA>
        </Reveal>
      </div>
    </section>
  );
}
