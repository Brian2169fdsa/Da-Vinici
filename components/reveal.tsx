"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger delay in ms (mirrors the prototype's data-reveal-delay). */
  delay?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "ref">;

/**
 * Scroll-reveal wrapper: content rises translateY(24px)→0 over ~0.75s on
 * enter, once. Respects prefers-reduced-motion (renders fully visible, no
 * transform) so nothing is ever stuck hidden.
 */
export function Reveal({ children, delay = 0, className, ...rest }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className}>{children}</div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
        delay: delay / 1000,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
