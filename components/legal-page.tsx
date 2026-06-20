import { SiteShell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/site";

type Section = { h: string; p: string };

export function LegalPage({
  title,
  intro,
  sections,
  contactHeading,
  contactBody,
}: {
  title: string;
  intro: string;
  sections: Section[];
  contactHeading: string;
  contactBody: React.ReactNode;
}) {
  return (
    <SiteShell>
      <section className="px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <p className="mb-4 font-mono text-[13px] uppercase tracking-[.14em] text-gold-deep">
              Legal
            </p>
            <h1 className="mb-3 font-display text-[clamp(32px,5vw,52px)] font-semibold leading-[1.05] tracking-[-.015em] text-ink">
              {title}
            </h1>
            <p className="font-mono text-[13px] text-text-muted">Last updated: June 2026</p>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <p className="text-[17px] leading-[1.75] text-text">{intro}</p>
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="mb-3 mt-10 font-display text-[clamp(20px,2.4vw,26px)] font-semibold text-ink">
                  {s.h}
                </h2>
                <p className="text-[16.5px] leading-[1.75] text-text">{s.p}</p>
              </div>
            ))}
            <h2 className="mb-3 mt-10 font-display text-[clamp(20px,2.4vw,26px)] font-semibold text-ink">
              {contactHeading}
            </h2>
            <p className="text-[16.5px] leading-[1.75] text-text">{contactBody}</p>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

export const LegalContactLinks = () => (
  <>
    Email{" "}
    <a href={SITE.emailHref} className="font-semibold text-gold-deep underline">
      {SITE.email}
    </a>{" "}
    or call{" "}
    <a href={SITE.phoneHref} className="font-semibold text-gold-deep underline">
      {SITE.phone}
    </a>
    .
  </>
);
