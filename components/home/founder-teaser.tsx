import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CTA } from "@/components/ui/cta";
import { CornerTicks } from "@/components/proportion";

export function FounderTeaser() {
  return (
    <section className="section-y border-t border-tan-line bg-tan px-[clamp(20px,5vw,56px)]">
      <div className="mx-auto grid max-w-content items-center gap-[clamp(40px,6vw,72px)] lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line">
            <Image
              src="/assets/team-experts.png"
              alt="Da Vinci consultants reviewing compliance documentation together"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <CornerTicks size={18} />
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>The team</Eyebrow>
          <h2 className="mb-5 font-display text-[clamp(26px,3.6vw,40px)] font-medium leading-[1.12] text-ink">
            Meet the experts behind behavioral healthcare success.
          </h2>
          <p className="mb-7 text-[17px] leading-[1.65] text-text">
            Led by founder Tony Renello, MS, LISAC, Vice President of the Arizona
            Board for Certification of Addiction Counselors, our team brings deep
            knowledge of compliance, leadership, and growth strategies across the
            behavioral healthcare landscape.
          </p>
          <CTA href="/about" variant="primary" withArrow>
            Meet the Da Vinci Team
          </CTA>
        </Reveal>
      </div>
    </section>
  );
}
