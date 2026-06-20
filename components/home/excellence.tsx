import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CornerTicks } from "@/components/proportion";

const PILLARS = [
  { num: "01", title: "Compliance Strategies", desc: "Align operations with state and federal standards." },
  { num: "02", title: "Medicaid Credentialing", desc: "Secure provider status and streamline enrollment." },
  { num: "03", title: "Operational Consulting", desc: "Improve efficiency, workflows, and outcomes." },
  { num: "04", title: "Leadership Development", desc: "Equip executives with tools to lead change." },
];

export function Excellence() {
  return (
    <section className="section-y px-[clamp(20px,5vw,56px)]">
      <div className="mx-auto grid max-w-content items-center gap-[clamp(44px,6vw,84px)] lg:grid-cols-2">
        <Reveal>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mb-[22px] font-display text-[clamp(28px,4vw,44px)] font-medium leading-[1.08] tracking-[-.01em] text-ink">
            Empowering behavioral healthcare{" "}
            <span className="text-gold-deep">excellence.</span>
          </h2>
          <p className="mb-[18px] text-[clamp(16px,1.2vw,17px)] leading-[1.65] text-text">
            At Da Vinci Consulting Services, we help behavioral health organizations
            thrive by delivering clear, results-driven solutions.
          </p>
          <p className="mb-8 text-[clamp(16px,1.2vw,17px)] leading-[1.65] text-text">
            With over <strong className="text-ink">13 years of experience</strong>,
            we&apos;ve supported facilities through accreditation, growth, and
            regulatory success. Every solution strengthens care delivery, enhances
            compliance, and drives sustainable performance.
          </p>
          <div className="flex flex-col">
            {PILLARS.map((p) => (
              <div key={p.num} className="flex items-start gap-[18px] border-b border-line px-1 py-5">
                <span className="w-[30px] flex-none font-display text-xl font-semibold text-gold">
                  {p.num}
                </span>
                <span>
                  <span className="mb-1 block text-[17px] font-semibold text-ink">{p.title}</span>
                  <span className="block text-[14.5px] leading-[1.5] text-text-muted">{p.desc}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-frame border border-line">
            <Image
              src="/assets/excellence.png"
              alt="Behavioral health leadership team mapping operational workflows on a whiteboard"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <CornerTicks />
        </Reveal>
      </div>
    </section>
  );
}
