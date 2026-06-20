import { SiteShell } from "@/components/site-shell";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { Excellence } from "@/components/home/excellence";
import { FeaturedServices } from "@/components/home/featured-services";
import { Balance } from "@/components/home/balance";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { StatBand } from "@/components/home/stat-band";
import { GetExpertHelp } from "@/components/home/get-expert-help";
import { HomeTestimonial } from "@/components/home/testimonial";
import { FounderTeaser } from "@/components/home/founder-teaser";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { FaqAccordion } from "@/components/faq-accordion";
import { ImageBanner } from "@/components/image-banner";
import { CtaBand } from "@/components/cta-band";
import { Newsletter } from "@/components/newsletter";
import { HOME_FAQS } from "@/lib/site";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <TrustStrip />
      <Excellence />
      <FeaturedServices />
      <Balance />
      <ProcessTimeline />
      <StatBand />
      <GetExpertHelp />
      <HomeTestimonial />
      <FounderTeaser />

      {/* FAQ */}
      <section className="section-y px-[clamp(20px,5vw,56px)]">
        <div className="mx-auto max-w-[880px]">
          <Reveal className="mb-12 text-center">
            <Eyebrow className="justify-center before:hidden">Frequently asked questions</Eyebrow>
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
        img="/assets/boardroom.png"
        eyebrow="Your next step"
        heading="Hand the regulatory weight to one expert team."
        body="From credentialing to accreditation, we carry the complexity so your team can focus on care."
        cta="Schedule a Consultation"
        href="/contact"
      />
      <CtaBand />
      <Newsletter />
    </SiteShell>
  );
}
