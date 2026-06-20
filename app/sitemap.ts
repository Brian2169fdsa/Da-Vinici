import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICE_SLUGS } from "@/lib/services";
import { POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticRoutes = ["", "/services", "/about", "/contact", "/blog", "/privacy", "/terms"];
  const services = SERVICE_SLUGS.map((slug) => `/services/${slug}`);
  const posts = POSTS.map((p) => `/blog/${p.slug}`);

  return [...staticRoutes, ...services, ...posts].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
