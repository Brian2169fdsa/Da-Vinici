import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { PhotoFrame } from "@/components/photo-frame";
import { ImageBanner } from "@/components/image-banner";
import { Newsletter } from "@/components/newsletter";
import { POSTS, getPost, relatedPosts } from "@/lib/blog";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const related = relatedPosts(params.slug);

  return (
    <SiteShell>
      <article className="px-[clamp(20px,5vw,56px)] pt-[clamp(48px,7vw,88px)]">
        <header className="mx-auto max-w-[760px]">
          <Reveal>
            <p className="mb-5 font-mono text-[12.5px] uppercase tracking-[.1em] text-text-muted">
              <Link href="/blog" className="text-gold-deep">
                Resources
              </Link>{" "}
              <span className="text-[#B8AD98]">/</span> {post.cat}
            </p>
            <h1 className="mb-6 text-balance font-display text-[clamp(30px,4.6vw,52px)] font-semibold leading-[1.06] tracking-[-.015em] text-ink">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
              <span className="rounded-pill bg-tan px-3 py-1 font-mono text-[11px] uppercase tracking-[.08em] text-gold-deep">
                {post.cat}
              </span>
              <span>{post.date}</span>
              <span aria-hidden>·</span>
              <span>{post.read}</span>
            </div>
          </Reveal>
        </header>

        <Reveal className="mx-auto mt-10 max-w-[940px]">
          <PhotoFrame src="/assets/hero-team.png" alt={post.title} aspect="16/9" ticks priority />
        </Reveal>

        <div className="mx-auto mt-12 max-w-[720px]">
          <Reveal>
            <p className="mb-7 font-display text-[clamp(19px,2.2vw,23px)] font-normal leading-[1.5] text-ink">
              {post.excerpt}
            </p>
            <div className="space-y-6">
              {post.blocks.map((b, i) =>
                b.type === "h" ? (
                  <h2 key={i} className="pt-2 font-display text-[clamp(22px,2.8vw,30px)] font-semibold leading-[1.15] text-ink">
                    {b.text}
                  </h2>
                ) : b.type === "quote" ? (
                  <blockquote key={i} className="border-l-[3px] border-gold pl-6 font-display text-[clamp(20px,2.4vw,26px)] font-normal italic leading-[1.45] text-gold-deep">
                    {b.text}
                  </blockquote>
                ) : (
                  <p key={i} className="text-[17px] leading-[1.75] text-text">
                    {b.text}
                  </p>
                ),
              )}
            </div>

            <div className="mt-12 flex items-center gap-4 border-t border-line pt-8">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-forest font-display text-base font-semibold text-cream">
                TR
              </div>
              <div>
                <p className="font-semibold text-ink">Tony Renello, MS, LISAC</p>
                <p className="font-mono text-[11px] uppercase tracking-[.1em] text-text-muted">
                  Founder · Da Vinci Consulting
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related */}
      <section className="px-[clamp(20px,5vw,56px)] py-[clamp(56px,8vw,104px)]">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="mb-9 font-display text-[clamp(24px,3.2vw,34px)] font-medium text-ink">
              Continue reading
            </h2>
          </Reveal>
          <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 80}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-card border border-line bg-cream transition-all duration-200 ease-smooth hover:-translate-y-1 hover:border-gold hover:shadow-card-hover"
                >
                  <div className="flex aspect-[3/2] items-center justify-center bg-[repeating-linear-gradient(135deg,#EFE7D6_0_10px,#FBF8F1_10px_20px)]">
                    <span className="font-mono text-[11px] uppercase tracking-[.1em] text-[#A8997F]">
                      [ image ]
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="mb-2 block font-mono text-[11px] uppercase tracking-[.1em] text-gold-deep">
                      {r.cat}
                    </span>
                    <h3 className="font-display text-lg font-semibold leading-[1.2] text-ink">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ImageBanner
        img="/assets/boardroom.png"
        eyebrow="Put it into practice"
        heading="Have a question about your facility?"
        body="Talk it through with a senior consultant, no pressure, just clarity."
        cta="Schedule a Consultation"
        href="/contact"
      />
      <Newsletter />
    </SiteShell>
  );
}
