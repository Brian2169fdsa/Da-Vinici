import { Reveal } from "@/components/reveal";

export function HomeTestimonial() {
  return (
    <section className="section-y px-[clamp(20px,5vw,56px)]">
      <Reveal className="mx-auto max-w-[920px] text-center">
        <span className="mb-2 block font-display text-[72px] leading-[.5] text-gold" aria-hidden>
          &ldquo;
        </span>
        <blockquote className="mb-8 font-display text-[clamp(22px,2.8vw,32px)] font-normal italic leading-[1.4] tracking-[-.01em] text-ink">
          DaVinci Consulting staff were professional, knowledgeable and proficient in
          evaluating my counseling program. They had a fresh perspective and gave me
          tons of information and guidance. It&apos;s great to consult with others in
          the field in this rapidly changing climate to make sure everything is
          correct, in compliance and moving smoothly.
        </blockquote>
        <div className="flex flex-col items-center gap-[3px]">
          <span className="text-base font-semibold text-ink">Katherine Nisbet</span>
          <span className="font-mono text-xs uppercase tracking-[.06em] text-text-muted">
            Chief Clinical Executive
          </span>
        </div>
      </Reveal>
    </section>
  );
}
