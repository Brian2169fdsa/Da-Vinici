import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { ImageBanner } from "@/components/image-banner";
import { Newsletter } from "@/components/newsletter";
import { CircleSquare } from "@/components/proportion";
import { SITE, HOME_FAQS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Da Vinci Consulting Services to discuss behavioral healthcare compliance, Medicaid credentialing, and operational efficiency. Phoenix, AZ · 480-606-8602.",
};

const CONTACTS = [
  { Icon: Mail, label: "Email", value: SITE.email, href: SITE.emailHref },
  { Icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
  {
    Icon: MapPin,
    label: "Office",
    value: `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postal}`,
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        img="/assets/team-experts.png"
        alt="A senior consultant meeting with a client"
        priority
        eyebrow={
          <span className="flex items-center gap-3.5">
            <span className="inline-block h-px w-8 bg-gold-bright" />
            Let&apos;s talk
          </span>
        }
        title={
          <>
            Take your organization to the next{" "}
            <span className="italic text-gold-bright">level.</span>
          </>
        }
        lead="Ready to achieve compliance, operational efficiency, and lasting success? Contact us today to discuss how we can help."
        cta={{ label: `Call ${SITE.phone}`, href: SITE.phoneHref }}
      />

      <section className="px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <div className="mx-auto grid max-w-content items-start gap-[clamp(40px,6vw,72px)] lg:grid-cols-2">
          {/* Left: contact details + reassurance */}
          <Reveal>
            <div className="flex flex-col gap-2">
              {CONTACTS.map(({ Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 rounded-card border border-line bg-cream p-4 transition-colors hover:border-gold">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[11px] border border-line bg-parchment">
                    <Icon className="h-[18px] w-[18px] text-gold" strokeWidth={1.6} aria-hidden />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[.1em] text-[#A8997F]">
                      {label}
                    </span>
                    <span className="block text-[15px] font-semibold text-ink">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="relative mt-5 overflow-hidden rounded-card bg-ink-panel p-[clamp(28px,4vw,40px)]">
              <CircleSquare className="absolute -right-4 -top-4 h-[160px] w-[160px] opacity-[.12]" />
              <p className="relative mb-4 font-display text-[clamp(19px,2.2vw,24px)] font-normal italic leading-[1.4] text-cream">
                &ldquo;Fast response from a senior consultant. No pressure, just
                clarity.&rdquo;
              </p>
              <p className="relative font-mono text-[11px] uppercase tracking-[.14em] text-gold-bright">
                EST. {SITE.foundedYear} · PHOENIX, ARIZONA
              </p>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <div className="mx-auto max-w-[880px]">
          <Reveal className="mb-12 text-center">
            <p className="mb-4 font-mono text-[13px] uppercase tracking-[.14em] text-text-muted">
              Frequently asked questions
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,42px)] font-medium leading-[1.1] text-ink">
              Answers, before you ask.
            </h2>
          </Reveal>
          <Reveal>
            <FaqAccordion items={HOME_FAQS} />
          </Reveal>
        </div>
      </section>

      <ImageBanner
        img="/assets/team-experts.png"
        eyebrow="Let's talk"
        heading="A senior consultant is ready to help."
        body="Fast response, no pressure, just clarity on your path to compliance."
        cta={`Call ${SITE.phone}`}
        href={SITE.phoneHref}
      />
      <Newsletter />
    </SiteShell>
  );
}
