"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";

const STEPS = [
  { num: "01", title: "Audit", desc: "We surface compliance gaps, billing issues, and workflow risks before they cost you." },
  { num: "02", title: "Strategy", desc: "A prioritized, state-specific plan tailored to your facility's goals and structure." },
  { num: "03", title: "Implement", desc: "Hands-on support, policies, credentialing, training, and survey prep, done with you." },
  { num: "04", title: "Sustain", desc: "Ongoing monitoring and renewals keep you audit-ready as regulations evolve." },
];

export function ProcessTimeline() {
  const reduce = useReducedMotion();

  return (
    <section className="section-y border-y border-tan-line bg-tan px-[clamp(20px,5vw,56px)]">
      <div className="mx-auto max-w-content">
        <Reveal className="mb-[54px] max-w-[620px]">
          <p className="eyebrow mb-4">How we work</p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-medium leading-[1.1] text-ink">
            A measured path from chaos to compliance.
          </h2>
        </Reveal>

        <div className="relative">
          {/* The gold hairline arc draws left→right on scroll-in (desktop only). */}
          <svg
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-[34px] hidden h-20 w-full nav:block"
            aria-hidden
          >
            <motion.path
              d="M 90 60 C 350 0, 850 0, 1110 60"
              fill="none"
              stroke="#B68B3C"
              strokeWidth="1.4"
              strokeOpacity=".6"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>

          <div className="relative grid gap-6 sm:grid-cols-2 nav:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} delay={i * 80} className="text-center">
                <div className="relative z-[1] mx-auto mb-[22px] flex h-[74px] w-[74px] items-center justify-center rounded-full border border-card-line bg-white font-display text-[25px] font-semibold text-gold-deep shadow-step">
                  {s.num}
                </div>
                <h3 className="mb-2 font-display text-[21px] font-semibold text-ink">{s.title}</h3>
                <p className="text-[14.5px] leading-[1.55] text-text-muted">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
