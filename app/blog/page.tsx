import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { BlogGrid } from "@/components/blog-grid";
import { ImageBanner } from "@/components/image-banner";
import { Newsletter } from "@/components/newsletter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Industry updates, trends, and tips for behavioral health leaders, regulatory excellence, professional collaboration, seamless operations, and innovation in leadership.",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHero
        img="/assets/hero-team.png"
        alt="Behavioral health professionals collaborating"
        priority
        eyebrow={
          <span className="flex items-center gap-3.5">
            <span className="inline-block h-px w-8 bg-gold-bright" />
            Resources
          </span>
        }
        title={
          <>
            Industry updates, trends, and{" "}
            <span className="italic text-gold-bright">tips.</span>
          </>
        }
        lead="Insight for behavioral health leaders navigating compliance, credentialing, and operational excellence."
      />

      <section className="px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <BlogGrid />
      </section>

      <ImageBanner
        img="/assets/hero-team.png"
        eyebrow="Stay informed"
        heading="Insight for behavioral health leaders."
        body="Regulatory updates, accreditation tips, and operational strategy for your organization."
        cta="Schedule a Consultation"
        href="/contact"
      />
      <Newsletter />
    </SiteShell>
  );
}
