"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type FaqItem = { q: string; a: string };

/** Hairline-divided accordion, one row open at a time, gold +/− indicator. */
export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = i === open;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 py-6 text-left font-display text-[clamp(18px,2.2vw,22px)] font-medium text-ink"
            >
              {item.q}
              <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full border border-gold text-lg leading-none text-gold-deep">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[680px] pb-[26px] text-base leading-[1.65] text-text-muted">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
