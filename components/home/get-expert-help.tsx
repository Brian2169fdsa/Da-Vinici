import { Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LeadForm } from "@/components/lead-form";
import { SITE } from "@/lib/site";

export function GetExpertHelp() {
  return (
    <section className="section-y px-[clamp(20px,5vw,56px)]">
      <div className="mx-auto grid max-w-[1100px] items-center gap-[clamp(40px,6vw,72px)] lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Get expert help</Eyebrow>
          <h2 className="mb-[18px] font-display text-[clamp(28px,3.8vw,42px)] font-medium leading-[1.1] tracking-[-.005em] text-ink">
            Get expert help with compliance or credentialing.
          </h2>
          <p className="mb-7 max-w-[440px] text-[17px] leading-[1.65] text-text">
            Fast response from a senior consultant. No pressure, just clarity on your
            path forward.
          </p>
          <div className="flex flex-col gap-3.5">
            <a href={SITE.phoneHref} className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[11px] border border-card-line bg-white shadow-[0_4px_14px_rgba(33,28,24,.06)]">
                <Phone className="h-[18px] w-[18px] text-gold" strokeWidth={1.6} aria-hidden />
              </span>
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[.1em] text-[#A8997F]">
                  Call
                </span>
                <span className="block text-base font-semibold text-ink">{SITE.phone}</span>
              </span>
            </a>
            <a href={SITE.emailHref} className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[11px] border border-card-line bg-white shadow-[0_4px_14px_rgba(33,28,24,.06)]">
                <Mail className="h-[18px] w-[18px] text-gold" strokeWidth={1.6} aria-hidden />
              </span>
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[.1em] text-[#A8997F]">
                  Email
                </span>
                <span className="block break-all text-[15px] font-semibold text-ink">{SITE.email}</span>
              </span>
            </a>
          </div>
          <span className="mt-[26px] inline-block rounded-pill border border-[#D8CDB6] px-4 py-2 font-mono text-[11px] tracking-[.12em] text-gold-deep">
            EST. {SITE.foundedYear} · PHOENIX, AZ
          </span>
        </Reveal>

        <Reveal delay={100}>
          <LeadForm variant="full" source="home" submitLabel="Request a Callback" />
        </Reveal>
      </div>
    </section>
  );
}
