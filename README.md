# Risk Iris — Landing Page

Single-page marketing site for [Risk Iris](https://riskiris.com), a London-based risk-intelligence platform.

## Tech Stack

- **Next.js** (App Router) — React, TypeScript
- **Tailwind CSS v4** — `@theme`-based design tokens in `globals.css`
- **next/font** — self-hosted Sora + Outfit (zero CLS)
- **Framer Motion** — scroll reveals and micro-interactions (CSS fallbacks for `prefers-reduced-motion`)

## Getting Started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Build

```bash
pnpm build        # Production build
pnpm start        # Serve production build
```

## Deploy to Vercel

```bash
pnpm vercel       # One-command deploy (free Hobby tier)
```

Or connect this repo to Vercel for automatic deploys.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `WAITLIST_STORAGE` | No | Storage backend: `console` (default), `supabase`, `vercel-kv`, or `resend` |

### If using Supabase

```
SUPABASE_URL=
SUPABASE_ANON_KEY=
```

### If using Vercel KV

```
KV_URL=
KV_REST_TOKEN=
```

### If using Resend

```
RESEND_API_KEY=
RESEND_AUDIENCE_ID=
```

## Customization Points

Search the codebase for the following markers:

- `{/* PLACEHOLDER:` — Replace with actual assets (screenshots, logo, sample PDF, OG image)
- `{/* EDITABLE:` — Update structural numbers when they change
- Waitlist storage adapter: `src/lib/waitlist.ts`

### Assets to replace

1. **Logo** — Replace inline SVG in `src/components/icons.tsx` (`IrisLogo`) with actual brand logo
2. **Product screenshots** — `src/components/Hero.tsx`, `src/components/SeeItInAction.tsx` — replace placeholder text with actual images
3. **Sample PDF** — `src/components/SeeItInAction.tsx` — link to real downloadable report
4. **OG image** — `public/og-image.png` — replace with actual 1200×630 share image
5. **Favicon** — `src/app/favicon.ico` — replace with brand favicon
6. **Login URL** — `src/app/layout.tsx` — replace the `metadataBase` placeholder comment with actual app URL
7. **Contact form** — `src/app/contact/page.tsx` — connect to actual form handler or email service
8. **Stats** — `src/components/StatsBand.tsx` — update numbers as they evolve

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, Nav, Footer
│   ├── page.tsx            # Home page — all sections
│   ├── globals.css         # Tailwind v4 @theme + custom utilities
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── api/waitlist/
│       └── route.ts        # Waitlist registration endpoint
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── OfficialSources.tsx
│   ├── FeatureGrid.tsx
│   ├── HowItWorks.tsx
│   ├── UseCases.tsx
│   ├── ContinuousMonitoring.tsx
│   ├── MatchAccuracy.tsx
│   ├── RiskCategoriesCloud.tsx
│   ├── WhyRiskIris.tsx
│   ├── SecurityDataHandling.tsx
│   ├── SeeItInAction.tsx
│   ├── StatsBand.tsx
│   ├── AboutCompany.tsx
│   ├── EarlyAccessBand.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── WaitlistForm.tsx
│   └── icons.tsx
└── lib/
    └── waitlist.ts         # Swappable storage adapter
```
