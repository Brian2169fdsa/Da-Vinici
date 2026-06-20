import { PARTNERS } from "@/lib/site";

/** "Measured by the same standards you are." + partner names (text for now). */
export function TrustStrip() {
  return (
    <section className="border-y border-tan-line bg-tan">
      <div className="container-1200 flex flex-wrap items-center justify-between gap-x-12 gap-y-6 py-[26px]">
        <p className="flex-none font-mono text-xs uppercase tracking-[.1em] text-text-muted">
          Measured by the same
          <br />
          standards you are.
        </p>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3.5">
          {PARTNERS.map((p) => (
            <span
              key={p}
              className="font-display text-[clamp(15px,1.6vw,18px)] font-medium tracking-[-.01em] text-text-muted opacity-85"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
