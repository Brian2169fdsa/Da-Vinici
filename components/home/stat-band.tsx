"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { CircleSquare } from "@/components/proportion";

const STATS = [
  { count: 50, suffix: "+", display: "50+", label: "Behavioral health facilities" },
  { count: 98, suffix: "%", display: "98%", label: "Client retention" },
  { count: 15, suffix: "+", display: "15+", label: "Years industry experience" },
  { count: 0, suffix: "", display: "$10M+", label: "Credentialed Medicaid contracts" },
];

/** A number that counts up to its target once it scrolls into view. */
function Counter({ count, suffix, display }: { count: number; suffix: string; display: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(reduce || count === 0 ? display : `0${suffix}`);

  useEffect(() => {
    if (reduce || count === 0) {
      setValue(display);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(el);
          const dur = 1300;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(`${Math.round(count * eased)}${suffix}`);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [count, suffix, display, reduce]);

  return <span ref={ref}>{value}</span>;
}

export function StatBand() {
  return (
    <section className="relative overflow-hidden border-y border-[#E0D4BC] bg-tan px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,116px)] text-text">
      <CircleSquare className="absolute -left-10 -top-[60px] h-[340px] w-[340px] opacity-[.07]" />
      <div className="container-1200 relative grid gap-x-7 gap-y-10 sm:grid-cols-2 nav:grid-cols-4">
        <Reveal className="mb-2 max-w-[640px] sm:col-span-2 nav:col-span-4">
          <p className="mb-3.5 font-mono text-[12.5px] uppercase tracking-[.14em] text-gold-deep">
            Proof, not promises
          </p>
          <h2 className="font-display text-[clamp(26px,3.6vw,38px)] font-medium leading-[1.12] text-ink">
            Trusted by 50+ behavioral health facilities.
          </h2>
        </Reveal>
        {STATS.map((st, i) => (
          <Reveal key={st.label} delay={i * 80}>
            <div className="font-display text-[clamp(42px,5vw,60px)] font-semibold leading-none tracking-[-.01em] text-gold-deep">
              <Counter count={st.count} suffix={st.suffix} display={st.display} />
            </div>
            <div className="mt-3 font-mono text-[12.5px] uppercase tracking-[.08em] text-text-muted">
              {st.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
