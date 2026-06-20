# Da Vinci Consulting Services — Website

Production website for **Da Vinci Consulting Services**, a behavioral-healthcare
compliance, Medicaid-credentialing, Joint Commission accreditation, state-licensing,
and operational-leadership consultancy in Phoenix, AZ.

Brand thesis: **"Renaissance precision for behavioral healthcare"** — gold, ink, and
parchment with a recurring Vitruvian *circle-inscribed-in-square* proportion motif.

Built from the Claude Design handoff (the original prototypes live in
[`project/`](./project) and the full build spec in
[`project/design_handoff_davinci_site/README.md`](./project/design_handoff_davinci_site/README.md)).

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** — design tokens in [`tailwind.config.ts`](./tailwind.config.ts)
- **Framer Motion** — scroll reveals, the process-arc draw, hero geometry
- **Supabase** — form submissions + newsletter
- Self-hosted **Fraunces / Inter / IBM Plex Mono** via `next/font`

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Supabase keys (optional for local dev)
npm run dev                  # http://localhost:3000
```

Without Supabase env vars the site runs fully — form submissions are validated
and confirmed in the UI, and logged server-side instead of persisted.

## Routes

| Route | Description |
|---|---|
| `/` | Home — full section stack |
| `/services` | Services index (all 8) |
| `/services/[slug]` | One template, 8 services (data in `lib/services.ts`) |
| `/about` · `/contact` · `/blog` · `/blog/[slug]` | Content pages |
| `/privacy` · `/terms` | Legal (template — route through counsel) |
| `/thank-you` · `not-found` | Form success + 404 (noindex) |

## Forms & Supabase

Three route handlers (`app/api/{contact,lead,newsletter}/route.ts`) validate input
and insert into Supabase using the service-role key.

1. Create a Supabase project.
2. Run [`supabase/schema.sql`](./supabase/schema.sql) in the SQL editor.
3. Set the env vars from [`.env.example`](./.env.example) (`.env.local` locally,
   Project Settings → Environment Variables on Vercel).

## Deploy to Vercel

1. Push this repo to GitHub (already wired to the project remote).
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Next.js is
   auto-detected; no build config needed.
3. Add the three Supabase env vars in the Vercel project settings.
4. Deploy. Set the production domain when ready.

## Project structure

```
app/            routes (App Router) + API handlers + sitemap/robots
components/     shared chrome (header/footer), section components, forms, motion
lib/            site constants, services data, blog data, supabase, form helpers
public/assets/  logos + the four real section photos
supabase/       schema.sql
project/        original Claude Design prototypes + handoff spec (reference)
```

## Still open (client to confirm)

See §"Open questions" in the handoff README. In short: real photography for the
placeholder slots (founder portrait, team cards, blog images), partner-logo display
rights, final FAQ/testimonial approval, the form notification email + newsletter ESP,
and legal review of Privacy/Terms.
