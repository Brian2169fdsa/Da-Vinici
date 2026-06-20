"use client";

import { useState } from "react";
import Link from "next/link";
import { POSTS, CATEGORIES } from "@/lib/blog";

export function BlogGrid() {
  const [active, setActive] = useState<string>("All");
  const visible = active === "All" ? POSTS : POSTS.filter((p) => p.cat === active);

  return (
    <div className="mx-auto max-w-content">
      {/* Category filters */}
      <div className="mb-12 flex flex-wrap gap-2.5">
        {CATEGORIES.map((cat) => {
          const on = cat === active;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={on}
              className={`rounded-pill border px-[18px] py-2.5 text-sm font-medium transition-colors ${
                on
                  ? "border-ink bg-ink text-cream"
                  : "border-line bg-cream text-text-muted hover:border-gold"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <div className="rounded-card border border-dashed border-line bg-cream py-20 text-center">
          <p className="mb-1.5 font-display text-2xl font-medium text-ink">
            No articles in this category yet.
          </p>
          <p className="text-text-muted">New insights are on the way.</p>
        </div>
      ) : (
        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-card border border-line bg-cream transition-all duration-200 ease-smooth hover:-translate-y-1 hover:border-gold hover:shadow-card-hover"
            >
              <div className="relative flex aspect-[3/2] items-center justify-center bg-[repeating-linear-gradient(135deg,#EFE7D6_0_10px,#FBF8F1_10px_20px)]">
                <span className="font-mono text-[11px] uppercase tracking-[.1em] text-[#A8997F]">
                  [ article image ]
                </span>
                <span className="absolute left-3 top-3 rounded-pill bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[.08em] text-cream">
                  {p.cat}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-2.5 font-mono text-[11px] uppercase tracking-[.1em] text-gold-deep">
                  Coming soon
                </span>
                <h3 className="mb-5 flex-1 font-display text-xl font-semibold leading-[1.2] text-ink">
                  {p.title}
                </h3>
                <span className="text-sm font-semibold text-gold-deep">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
