/**
 * Blog content. No real posts exist yet (client copy marked "to be written"),
 * so the index shows "coming soon" cards and one sample article serves as the
 * post-template pattern. Back this with Supabase or MDX later.
 */
import { BLOG_CATEGORIES } from "@/lib/site";

export type BlogPostMeta = { slug: string; title: string; cat: string };

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const titles: { title: string; cat: string }[] = [
  { title: "Preparing for your first Joint Commission survey", cat: "Regulatory Excellence" },
  { title: "What Medicaid credentialing actually requires in Arizona", cat: "Regulatory Excellence" },
  { title: "Building a culture of compliance accountability", cat: "Professional Collaboration" },
  { title: "Streamlining clinical documentation workflows", cat: "Seamless Operations" },
  { title: "Audit-ready: a quarterly compliance checklist", cat: "Seamless Operations" },
  { title: "From clinician to leader: developing your team", cat: "Innovation in Leadership" },
];

export const POSTS: BlogPostMeta[] = titles.map((t) => ({ ...t, slug: slugify(t.title) }));

export const CATEGORIES = ["All", ...BLOG_CATEGORIES] as const;

export type Block =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string };

export type FullPost = BlogPostMeta & {
  date: string;
  read: string;
  excerpt: string;
  blocks: Block[];
};

/** Sample article body — the template pattern for real posts. */
const SAMPLE_BLOCKS: Block[] = [
  { type: "p", text: "For many behavioral health organizations, the first Joint Commission survey feels like the highest-stakes day on the calendar. The standards are rigorous, the documentation is extensive, and the outcome shapes access to contracts and reimbursement for years to come." },
  { type: "h", text: "Start with a gap assessment" },
  { type: "p", text: "Before you prepare for the survey itself, you need an honest picture of where you stand. A structured gap assessment compares your current operations against the applicable standards and surfaces the issues that would become findings on survey day." },
  { type: "p", text: "The goal isn't to pass a practice test. It's to build the habits, documentation, and systems that make compliance the natural state of your organization rather than a scramble before each cycle." },
  { type: "quote", text: "Accreditation isn't a day you survive. It's a standard you operate to, every day." },
  { type: "h", text: "Train the whole team, not just leadership" },
  { type: "p", text: "Surveyors talk to front-line staff. When everyone understands their role in compliance, and can speak to it confidently, your survey reflects the real strength of your program. Mock surveys are the most effective way to build that readiness." },
  { type: "h", text: "Build your plan of correction in advance" },
  { type: "p", text: "Even strong organizations receive findings. What separates a smooth accreditation from a stressful one is having a clear, practiced process for addressing them quickly and demonstrating sustained compliance." },
];

export function getPost(slug: string): FullPost {
  const meta = POSTS.find((p) => p.slug === slug) ?? POSTS[0];
  return {
    ...meta,
    date: "June 2026",
    read: "6 min read",
    excerpt:
      "A first accreditation survey doesn't have to be daunting. With the right preparation, your team can walk in confident and walk out accredited.",
    blocks: SAMPLE_BLOCKS,
  };
}

export function relatedPosts(slug: string): BlogPostMeta[] {
  return POSTS.filter((p) => p.slug !== slug).slice(0, 3);
}
