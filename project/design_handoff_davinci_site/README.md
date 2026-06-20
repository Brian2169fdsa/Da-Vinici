# Handoff: Da Vinci Consulting Services — Full Website

## Overview
A complete, multi-page marketing website for **Da Vinci Consulting Services**, a behavioral-healthcare compliance, Medicaid-credentialing, Joint Commission accreditation, state-licensing, and operational-leadership consultancy based in Phoenix, AZ. The site's single job: make a stressed behavioral-health operator feel that one expert team can take the regulatory weight off their shoulders, then book a consultation.

The brand thesis is **"Renaissance precision for behavioral healthcare"** — gold, ink, parchment, and a recurring Vitruvian *circle-inscribed-in-square* proportion motif. The signature idea is **proportion creates confidence**: bold in the hero, quiet everywhere else.

This package contains **14 page templates + 4 shared components**, fully designed and content-complete with the client's real copy.

---

## About the Design Files
The files in this bundle (`*.dc.html`) are **design references** — high-fidelity HTML prototypes that show the intended look, content, and behavior. **They are not production code to ship directly.**

They are authored in a lightweight in-house component format ("Design Components"): each file has an HTML template, an optional `class Component extends DCLogic` logic block (React-like: `state`, `setState`, `renderVals()`, lifecycle), and `{{ }}` data holes. A runtime called `support.js` renders them in the browser. **You do not need that runtime.** Read these files as a precise spec: the markup is the layout, the inline styles are the exact tokens, and the logic class is the data + interaction behavior.

**Your task:** recreate these designs in a real codebase. The client has stated the intended stack (below). Build it there using that stack's idioms — do not port the `.dc.html` files verbatim.

### Target stack (client-specified)
- **Next.js (App Router)** + **React** + **TypeScript**
- **Tailwind CSS** (define the tokens below in `tailwind.config.ts` + CSS variables — never hardcode hex in components)
- **Framer Motion** for the animations described in *Interactions & Behavior*
- **Supabase** for form submissions + newsletter (and later, the blog CMS)
- **Vercel** for hosting, **GitHub** for source
- Self-host **Fraunces**, **Inter**, **IBM Plex Mono** via `next/font/google`

---

## Fidelity
**High-fidelity.** Final colors, typography, spacing, motion, and copy are all locked. Recreate the UI faithfully using the target stack's libraries. Exact hex values, the type scale, spacing scale, radii, and shadows are all enumerated in *Design Tokens*. Where the design uses placeholder image frames (striped boxes labeled `[ ... ]`), those are **intentional slots for the client's real photography** — see *Assets*.

---

## Architecture (important — build it this way)

The prototypes are deliberately structured for a clean Next.js port:

1. **Shared chrome → components.** `SiteHeader` and `SiteFooter` are used on every page. Build them once as `<SiteHeader />` / `<SiteFooter />`. The header includes the desktop nav, the **Services mega-menu**, the **Call Now** + **Schedule a Consultation** buttons, and a full-screen mobile overlay menu.

2. **Service pages are data-driven.** All **8 service detail pages** share ONE template (`ServiceDetail.dc.html`) keyed by a `slug`. The 8 wrapper files (`Medicaid-Credentialing.dc.html`, etc.) just mount that template with a slug. **Recreate this as a single dynamic route** `app/services/[slug]/page.tsx` driven by a `services` data file (`lib/services.ts`). The full content for all 8 lives in the `DATA` object inside `ServiceDetail.dc.html`'s logic class — lift it directly. Each service object has: `crumb, title, h1, lead, cta, problemTitle, problem, risks[] {title, desc}, steps[] {num, title, desc}, closing, tquote, tname`.

3. **Reusable `ImageBanner`** — a full-bleed photo band with right-aligned text + CTA, used near the bottom of most pages. Props: `img, eyebrow, heading, body, cta, href`.

4. **Reusable `BlogPost`** template — drives `app/blog/[slug]/page.tsx`.

### Route map
| Route | Source file | Notes |
|---|---|---|
| `/` | `Home.dc.html` | Homepage, full section stack |
| `/services` | `Services.dc.html` | Index of all 8 services |
| `/services/[slug]` | `ServiceDetail.dc.html` (+ 8 wrappers) | One template, 8 slugs |
| `/about` | `About.dc.html` | |
| `/contact` | `Contact.dc.html` | Full form + FAQ |
| `/blog` | `Blog.dc.html` | Filterable index |
| `/blog/[slug]` | `BlogPost.dc.html` | Article template |
| `/privacy` | `Privacy.dc.html` | Legal — counsel review needed |
| `/terms` | `Terms.dc.html` | Legal — counsel review needed |
| `/thank-you` | `ThankYou.dc.html` | Form-success target (noindex) |
| `404` | `NotFound.dc.html` | `app/not-found.tsx` |

**Service slugs** (URL → file): `medicaid-credentialing`, `joint-commission-prep`, `compliance-training`, `state-licensing`, `integrity-audit`, `risk-management`, `policies-procedures`, `leadership-development`.

---

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `--ink` | `#211C18` | Primary dark. Headlines on light, dark sections, footer. Warm near-black — never pure `#000`. |
| `--ink-panel` | `#2C2620` | Raised dark panels (mega-menu feature card, service-page solve callout). |
| `--gold` | `#B68B3C` | Primary accent. Primary buttons, key icons, active nav, links on dark. |
| `--gold-bright` | `#CDA14E` | Hover/active for gold elements; accents on dark. |
| `--gold-deep` | `#876728` | Gold **text on light** backgrounds (contrast-safe for large text), tertiary links. |
| `--gold-pale` | `#E6C98A` | Eyebrow text on dark photo heroes. |
| `--forest` | `#1F3D32` | Secondary. Trust/cert cues, icon chips. ~8% of the palette. |
| `--parchment` | `#F6F1E7` | Default page background. |
| `--cream` | `#FBF8F1` | Lightest cards / raised surfaces on parchment. |
| `--tan` | `#EDE3D0` | **Warm band background** — alternating section grounds (the "brighter" look the client asked for). |
| `--tan-line` | `#E6DBC8` | Hairline borders on tan bands. |
| `--sand` | `#E7DECB` | Tints, chips. |
| `--line` | `#E3D9C6` | Default hairline borders / dividers / proportion lines on light. |
| `--card-line` | `#EBE2D0` | Border on white cards over tan. |
| `--text` | `#3A342C` | Body text on light. |
| `--text-muted` | `#6B6155` | Secondary/caption text, eyebrows on light. |
| `--cream-body` | `#E7DECB` | Body text on dark photo heroes. |
| `--cream-muted` | `#C9C0B0` | Body text on dark sections / footer. |
| `--footer-ink` | `#211C18` | Footer ground (logo goes white here). |
| success green | `#1F8A5B` | Form-success checkmark only. |
| error | `#B4452F` | Form validation errors only. |

**Usage rules**
- Primary CTA = `--gold` fill, `--ink` label, pill radius. Hover → `--gold-bright`.
- Secondary CTA = transparent, 1px `--ink` border on light (or 1px cream border on photo heroes). Hover fills `--ink`.
- **Small gold text on light → use `--gold-deep`**, never `--gold` (contrast). `--gold` only for large display or on dark.
- Section rhythm alternates `--parchment` and `--tan` bands. White (`--cream`/`#FFFFFF`) is reserved for cards that should pop off tan.
- Palette split ≈ 70% ink/neutral · 22% gold · 8% forest.

### Typography
Self-host all three via `next/font`.
| Role | Family / weight | Size (desktop → mobile) | Line-height | Tracking |
|---|---|---|---|---|
| Display / hero H1 | **Fraunces** 600 | 80 → 44px (`clamp(42px,6.2vw,80px)`) | 1.02 | -0.015em |
| H1 (inner pages) | Fraunces 600 | 60 → 34px | 1.04 | -0.015em |
| H2 (section) | Fraunces 550 | 44 → 28px | 1.1 | -0.005em |
| H3 / card title (serif) | Fraunces 600 | 28 → 20px | 1.2 | 0 |
| Card/UI title (sans) | Inter 600 | 20 → 18px | 1.25 | 0 |
| Body large (lead) | Inter 400 | 19 → 17px | 1.6 | 0 |
| Body | Inter 400 | 17 → 16px | 1.6–1.75 | 0 |
| Small / caption | Inter 400 | 14px | 1.5 | 0 |
| Eyebrow / label / data | **IBM Plex Mono** 500 | 12–13px | 1.2 | +0.12–.16em, UPPERCASE |

**Signature type move:** in a Fraunces headline, the operative noun gets `--gold-deep` (on light) or `--gold-bright` italic (on dark photo heroes) while the rest is ink/cream. Once per page max — e.g. hero "operate with *confidence.*", About "since *2016.*", Services "*organizations.*".

### Spacing scale (px)
`4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Section vertical padding: `clamp(56px, 8vw, 128px)` desktop, generous by design ("this brand breathes"). Page horizontal padding: `clamp(20px, 5vw, 56px)`. Max content width **1200px**, centered.

### Radius
- Cards: `14–18px`
- Buttons: **pill** `999px` (primary + secondary CTAs)
- Inputs: `10px`
- Image frames: `16–18px`

### Shadows (warm, never blue)
- Card rest: `0 1px 3px rgba(33,28,24,.05)`
- Card hover: `0 14px 34px rgba(33,28,24,.10)` → on white over tan: `0 18px 42px rgba(33,28,24,.13)`
- White form panels: `0 12px 36px rgba(33,28,24,.08)`
- Header on scroll: `0 4px 24px rgba(33,28,24,.07)`

### The Vitruvian proportion motif (signature)
Hairline, low-opacity, structural — **never shouts**. Implemented as inline SVG:
- **Hero/section backdrops:** a `circle-inscribed-in-square` + center cross-lines at ~0.1–0.5 opacity in `--ink`/`--gold`/`--forest`.
- **Card corner ticks:** small L-shaped registration marks (1px `--gold`) at card corners.
- **Image frames:** gold corner ticks at top-left/bottom-right.
- **Balance diagram (home):** two overlapping rings, *Regulation ∩ Care → Sustainable Compliance*, labeled like a Renaissance schematic.
- **Process timeline (home):** 4 numbered phase circles connected by a hairline **gold arc** (an echo of the Vitruvian circle).
- **Footer + 404:** large faint proportion watermark.

---

## Screens / Views

> Copy is **final and verbatim from the client** unless noted. Pull exact text from the source files. Below is the structure + intent of each page.

### 1. Home (`/`)
1. **Hero** — full-bleed photo (`assets/hero-team.png`), dual dark gradient scrim (90° left-dark + 0° bottom-dark "wipe"), min-height `clamp(560px,80vh,740px)`. Left-aligned: mono eyebrow "BEHAVIORAL HEALTHCARE CONSULTING" + rule, Fraunces H1 "Helping behavioral health operate with *confidence.*", lead, primary "Schedule Your Consultation" + secondary "Explore Services."
2. **Trust strip** — tan band. "Measured by the same standards you are." + partner names (Medicaid, The Joint Commission, AHCCCS, AZ Dept. of Health, ABCAC) as muted Fraunces text. *(Replace with real logos — see Assets.)*
3. **Empowering excellence** — two-col: copy + 4 numbered pillars (Compliance Strategies / Medicaid Credentialing / Operational Consulting / Leadership Development) on the left, **tall photo** (`assets/excellence.png`) with corner ticks on the right.
4. **Core services grid** — tan band, 4 white cards w/ corner ticks (Medicaid Credentialing, Joint Commission Prep, Compliance Training, State Licensing), each icon + blurb + link. "View all services →".
5. **Compliance in balance** — copy + the overlapping-rings **balance diagram** SVG. CTA "Request a Strategy Call".
6. **How we work** — tan band, 4-step process timeline (01 Audit → 02 Strategy → 03 Implement → 04 Sustain) connected by the animated gold arc.
7. **Stat band** — tan, 4 counters: **50+** facilities · **98%** retention · **15+** years · **$10M+** Medicaid contracts (gold Fraunces numbers, mono labels).
8. **Get expert help (lead form)** — two-col: left = heading + call/email shortcuts + "EST. 2016 · PHOENIX, AZ" chip; right = white form card (Name, Facility, Email, Phone, "What do you need help with?" textarea) → validates → inline success.
9. **Testimonial** — centered Fraunces italic quote, **Katherine Nisbet, Chief Clinical Executive**.
10. **Founder/team teaser** — photo (`assets/team-experts.png`) + "Meet the experts behind behavioral healthcare success" + Tony Renello blurb + "Meet the Da Vinci Team →".
11. **FAQ** — 4 accordion rows (one open at a time). *Answer copy was drafted from client material (originally TBD) — confirm with client.*
12. **Image banner** — full-bleed `assets/boardroom.png`, right text "Hand the regulatory weight to one expert team." + Schedule CTA.
13. **CTA band** — deep-gold gradient (`#B68B3C → #876728`), cream text, "Let's build a stronger, compliant future together."
14. **Newsletter strip** + **Footer**.

### 2. Services index (`/services`)
Photo hero (image-style, like all inner pages) → grid of all **8** service cards (long names, numbered 01–08, blurbs, CTAs) → **Why Choose Da Vinci** 2×2 (Trusted Expertise · Tailored Support · Measurable Results · Partnership Over Consulting) → deep-gold CTA band → ImageBanner → newsletter → footer.

### 3. Service detail (`/services/[slug]`) — ONE template, 8 instances
Photo hero (breadcrumb `Services / [name]`, H1, lead, service-specific CTA) → **The Problem** (2-col) → **Potential Risks** (4 risk cards: left gold accent rule + warning icon + name + line) → **How Da Vinci Solves It** (numbered solve-steps, big gold Fraunces numerals) → dark `--ink-panel` closing callout w/ CTA → **Trusted By** testimonial (service-specific) → inline "Contact us any time" form (Full Name, Email, Phone, Message) → ImageBanner → newsletter → footer. **All 8 services' content is in the `DATA` object — port it to `lib/services.ts`.**

### 4. About (`/about`)
Photo hero → **Our Philosophy** (2-col) → **Our Founder** (portrait slot + Tony Renello bio + credential chips: MS Psychology–Capella, LISAC–AZBBHE, VP–ABCAC, 13+ Years) → **The Team** (3 role cards w/ portrait slots) → **Our History** (tan band, 2016 → Today → Ahead) → **Why Choose Us** (4 cards) → deep-gold CTA → ImageBanner → newsletter → footer.

### 5. Contact (`/contact`)
Photo hero → two-col: left = contact details (email/phone/address as tappable rows) + ink reassurance card "Fast response from a senior consultant. No pressure, just clarity." + "EST. 2016 · PHOENIX, ARIZONA"; right = full form (First, Last, Email, Phone, **Type of service requested** dropdown w/ 11 options, Comment) → validates → inline success → **FAQ** (4 rows) → ImageBanner → newsletter → footer.

### 6. Blog index (`/blog`)
Photo hero → category filter chips (All + Regulatory Excellence, Professional Collaboration, Seamless Operations, Innovation in Leadership) → responsive card grid (image slot, category tag, "COMING SOON", title, "Read article →") → empty-state ("No articles in this category yet. New insights are on the way.") → ImageBanner → footer. Cards link to `/blog/[slug]`.

### 7. Blog post (`/blog/[slug]`)
Breadcrumb → Fraunces title → meta (category pill, date, read time) → hero image slot → rich prose (lead paragraph, Fraunces H2s, Inter body, gold left-border pull-quote) → author byline (Tony Renello) → "Continue reading" related grid → ImageBanner → footer. Sample article content is in the file as the pattern.

### 8. Privacy / Terms (`/privacy`, `/terms`)
Single-column legal layout (max-width 760px), mono "Legal" eyebrow, Fraunces H1, "Last updated" line, intro + numbered sections + contact block. **Template copy — must be reviewed by counsel before launch.**

### 9. Thank-you (`/thank-you`)
Centered success state: proportion-geometry backdrop, green check, "Thank you. We'll be in touch shortly.", call + home buttons. `noindex`. **Wire form submissions to redirect here.**

### 10. 404 (`not-found.tsx`)
Centered: animated proportion geometry (draws in), giant gold "404", "This page is out of proportion. Let's get you back.", Home/Services/Contact buttons.

---

## Interactions & Behavior
Easing throughout: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out). **Always respect `prefers-reduced-motion`** — disable transforms/draws, keep content fully visible.

- **Scroll reveal:** sections rise `translateY(24px) → 0` over ~0.75s, staggered 60–80ms across children (`data-reveal` + `data-reveal-delay`). *Implementation note: the prototypes reveal with transform only (no opacity-from-0) so content is never invisible — keep that principle; with Framer Motion you can use `whileInView` opacity safely.*
- **Hero proportion draw-in (home + 404):** SVG `stroke-dashoffset` 1→0 over ~1.2–1.9s, staggered, then settles to low opacity. One orchestrated moment, then stillness.
- **Process timeline arc:** the gold hairline arc draws left→right (stroke-dashoffset) when scrolled into view (IntersectionObserver, threshold 0.3).
- **Stat counters:** count up to target once on enter (50+, 98%, 15+; "$10M+" is static). Cubic ease-out, ~1.3s.
- **Balance diagram:** rings gently scale/breathe into overlap on scroll (optional).
- **Card hover:** lift `translateY(-4px to -5px)`, gold border fades in, shadow deepens, corner ticks brighten. 150–180ms.
- **Header:** solid white always; on scroll past 24px add `0 4px 24px rgba(33,28,24,.07)` shadow.
- **Mega menu:** opens on hover (desktop) / lives inside the mobile overlay; fade + 8px drop-in ~180ms. Feature card has a slow ambient stripe animation. **Make it fully keyboard-navigable** with `aria-expanded`.
- **Mobile nav:** hamburger → full-screen `--ink` overlay, Fraunces link list, Schedule button, click-to-call. Breakpoint: 940px (`[data-desktop-nav]` hides ≤940, `[data-mobile-toggle]` shows ≤940).
- **Buttons:** label/arrow nudge ~2px on hover; gold→gold-bright fill 150ms. **`:focus-visible` ring: 2px `--gold`, 2px offset on every interactive element.**
- **Accordions (FAQ):** one open at a time, smooth height; gold `+`/`–` indicator.

## Forms, State & Data Management
The prototypes use local React-style state for instant validation + inline success. In production:

- **Form state:** controlled inputs; on submit validate (name required; email must contain `@`; show error in `--error` voice — "Please enter a valid email address.").
- **Backend:** POST submissions to **Supabase** (table per the fields below) — or a serverless route handler. On success, **redirect to `/thank-you`** (the inline success states in the prototypes are the fallback UX).
- **Forms present:**
  - *Contact* (`/contact`): First name, Last name, Email, Phone, **Type of service requested** (enum, 11 options — see file), Comment.
  - *Home lead form*: Name, Facility (optional), Email, Phone, "What do you need help with?" (text).
  - *Service-page inline form*: Full Name, Email, Phone, Message.
  - *Newsletter strip* (global footer area): Email → Supabase newsletter table. Copy: "Don't miss the latest industry updates." + "By subscribing, you accept our Privacy Policy."
- **Blog:** index filters by the 4 categories client-side. For real content, back the blog with **Supabase** (or MDX) — `posts {slug, title, category, date, read_time, excerpt, hero_image, body}`. The 4 categories are fixed: Regulatory Excellence, Professional Collaboration, Seamless Operations, Innovation in Leadership.
- **Email destination for all forms:** `tony@davinciconsultingservices.com` (confirm whether a notification email + an ESP for the newsletter are wired).

## SEO / Meta (per route)
Each prototype's `<helmet>` has a real `<title>` + meta description — carry these into Next `metadata`. Home includes **JSON-LD `ProfessionalService`** schema (NAP: phone +1 480-606-8602, email, 1141 East Glendale Avenue #1054, Phoenix AZ 85020, foundingDate 2016) — keep and extend with `Service` schema per service page. Add `sitemap.xml`, `robots.txt`, and an OpenGraph image (use the gold proportion geometry). `/thank-you` and `/404` are `noindex`.

## Accessibility (quality floor)
WCAG 2.1 AA. Verified contrast pairs are baked into the tokens (use `--gold-deep` for small gold text on light; cream/white only on dark or large). Risk cards communicate via icon + label, not color alone. Keyboard: visible focus rings, skip-to-content link, fully navigable mega menu (`aria-expanded`), labeled inputs, alt text on all imagery. Tap targets ≥44px. Stat band + forms stack on mobile.

---

## Assets
All real assets are in `./assets/` in this bundle.
| File | Used on | Notes |
|---|---|---|
| `logo-davinci.png` | Header (all pages) | Real client logo, **green**, transparent bg. |
| `logo-white.png` | Footer (all pages) | White-on-transparent version for the dark footer. |
| `hero-team.png` | Home hero, About/Blog heroes, banners | Real photo. |
| `team-experts.png` | Home founder teaser, Services/Contact/Service heroes | Real photo. |
| `excellence.png` | Home "Empowering excellence" | Real photo. |
| `boardroom.png` | Home + Blog image banners | Real photo. |

**Placeholder slots to fill with real photography** (rendered as striped `[ ... ]` frames in the prototypes):
- About: **founder portrait** (Tony Renello), **3 team-member** cards.
- Blog: **article hero + thumbnail** images.
- Optionally page-specific hero photos (currently the 4 real photos are reused across heroes).
- **Partner/accreditor logos** (Medicaid, The Joint Commission, AHCCCS, AZ DHS, ABCAC) — currently rendered as text in the trust strip; confirm display rights and get clean SVGs.

Icons: a thin geometric line set (Lucide, 1.5px stroke), tinted `--gold`/`--forest`, never filled-color. The prototypes draw a few simple icons as inline SVG — replace with Lucide equivalents.

---

## Open questions to confirm with client (carried from the brand brief)
1. **Founding date** — standardized to **2016** across the build (resolves the old "EST. 2022" / "13+ years" conflict). Confirm.
2. **Team beyond Tony** — names, headshots, bios for the About team cards?
3. **Partner logos** — which may be displayed, and clean SVGs.
4. **Testimonials** — confirm names/permission (Katherine Nisbet, Michael Cunningham, Adam Parker, Kristin Glavin, Alan Weaver, ET) and link the Google reviews.
5. **FAQ answers** — drafted from client material; approve final copy (4 on Home, 4 on Contact).
6. **Blog** — migrate existing posts or start fresh? CMS choice (Supabase vs MDX vs Sanity).
7. **Form backend + notification email + newsletter ESP.**
8. **Legal** — Privacy/Terms are templates; route through counsel.
9. **Socials** — which accounts are live for header/footer icons (none wired yet).

---

## Files in this bundle
**Pages:** `Home.dc.html`, `Services.dc.html`, `ServiceDetail.dc.html` (+ 8 wrappers: `Medicaid-Credentialing`, `Joint-Commission-Prep`, `Compliance-Training`, `State-Licensing`, `Integrity-Audit`, `Risk-Management`, `Policies-Procedures`, `Leadership-Development`), `About.dc.html`, `Contact.dc.html`, `Blog.dc.html`, `BlogPost.dc.html`, `Privacy.dc.html`, `Terms.dc.html`, `ThankYou.dc.html`, `NotFound.dc.html`.
**Shared components:** `SiteHeader.dc.html`, `SiteFooter.dc.html`, `ImageBanner.dc.html`.
**Assets:** `./assets/`.

> Each `.dc.html` file = an HTML template + (usually) a `class Component` logic block holding that page's data and interactions. Read the logic block for exact data arrays (services, FAQs, stats, testimonials, form options). The inline styles ARE the spec — copy values precisely.
