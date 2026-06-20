"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * The Vitruvian proportion motif — a circle inscribed in a square, drawn as
 * hairlines. Used as a faint structural watermark behind dark sections,
 * the footer, and the 404. Always low-opacity; "one gold line is worth ten."
 */
export function CircleSquare({
  className = "",
  stroke = "#B68B3C",
  withCross = false,
}: {
  className?: string;
  stroke?: string;
  withCross?: boolean;
}) {
  return (
    <svg viewBox="0 0 300 300" className={className} aria-hidden>
      <rect x="50" y="50" width="200" height="200" fill="none" stroke={stroke} strokeWidth="1" />
      <circle cx="150" cy="150" r="100" fill="none" stroke={stroke} strokeWidth="1" />
      {withCross && (
        <>
          <line x1="150" y1="40" x2="150" y2="260" stroke={stroke} strokeWidth=".6" />
          <line x1="40" y1="150" x2="260" y2="150" stroke={stroke} strokeWidth=".6" />
        </>
      )}
    </svg>
  );
}

/** L-shaped registration ticks framing an image or card (top-left + bottom-right). */
export function CornerTicks({ size = 20 }: { size?: number }) {
  const s = `${size}px`;
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute border-l-[1.5px] border-t-[1.5px] border-gold"
        style={{ top: -9, left: -9, width: s, height: s }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute border-b-[1.5px] border-r-[1.5px] border-gold"
        style={{ bottom: -9, right: -9, width: s, height: s }}
      />
    </>
  );
}

/**
 * The animated hero geometry (home + 404): the circle-in-square draws itself
 * via stroke-dashoffset on mount, then rests at low opacity. Reduced-motion
 * shows the settled state with no draw.
 */
export function DrawnGeometry({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <motion.rect
        x="80"
        y="80"
        width="240"
        height="240"
        fill="none"
        stroke="#B68B3C"
        strokeWidth="1.2"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx="200"
        cy="200"
        r="120"
        fill="none"
        stroke="#B68B3C"
        strokeWidth="1.2"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
      <line x1="200" y1="60" x2="200" y2="340" stroke="#B68B3C" strokeWidth=".6" />
      <line x1="60" y1="200" x2="340" y2="200" stroke="#B68B3C" strokeWidth=".6" />
    </svg>
  );
}
