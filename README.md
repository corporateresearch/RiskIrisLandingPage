# Marketing site

Multi-page marketing site with one goal: a qualified visitor books a demo.
Built with Next.js (App Router), React and Tailwind CSS v4. No runtime
dependencies beyond Next.js, React and the Supabase client.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional; see "Environment variables"
npm run dev                  # http://localhost:3000
```

```bash
npm run lint
npm run build
npm run start
```

## Renaming the company

A rename plus a palette swap is a two-file change.

1. **`src/lib/site.ts`** holds the brand name, legal name, domain, email,
   company details, booking URL and logo paths. It also holds the product
   facts (languages, risk categories, sanctions lists) and pricing, so no
   number is typed twice.
2. **`src/app/globals.css`** holds the brand colours in the `@theme` block.

Everything else derives from those two files: page copy, metadata, the
footer, structured data, `llms.txt`, the favicon (`/icon.svg`), the Apple
touch icon, the Open Graph image and the downloadable wordmarks on `/press`.

Two things sit outside the repository and need the same update:

- `NOTIFY_FROM` (the sender address for notification emails) in the hosting
  environment.
- The product screenshot in `public/screenshots`, which shows the product's
  own interface and so carries whatever name the product displays.

## Project structure

```
src/
  lib/site.ts            Brand, company details, facts, pricing, feature flags
  lib/theme.ts           Reads colour tokens for generated images
  lib/brand-image.tsx    Shared pieces for the generated wordmark and icons
  lib/forms/             Validation rules, rate limit, shared POST handler
  content/               Page copy: home, FAQ, legal documents, press releases
  components/ui/         Primitives: Button, Container, Section, Card, Badge,
                         IconTile, CheckList, Field, Reveal, PageHeader
  components/layout/     Header, mobile menu, footer, wordmark, legal document
  components/sections/   Home page sections
  components/illustrations/  Coded product illustrations and the screenshot frame
  components/forms/      Demo request and contact forms
  app/                   Routes, API routes, generated icon / OG image / sitemap
supabase/                SQL for the two tables
```

## Product visuals

- Real captures live in `public/screenshots` as WebP and are registered in
  `screenshots` in `src/lib/site.ts` with their true width and height.
- Where no real capture exists, the site shows a coded illustration in
  `src/components/illustrations`, labelled "Illustration". These are a
  temporary stand-in. Their sample data is invented and uses the reserved
  `.example` domain.
- To replace an illustration in the product tour with a real capture, add
  the WebP to `public/screenshots` and add an entry under `screenshots.tour`
  in `site.ts` using the panel key (`search`, `analysis`, `languages`,
  `report`). The panel then shows the capture, labelled "Product screenshot".

Do not add artwork that is not a genuine capture of the product.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `SUPABASE_URL` | For forms | Supabase project URL (server-side only) |
| `SUPABASE_ANON_KEY` | For forms | Supabase anon key (server-side only) |
| `NOTIFY_WEBHOOK_SECRET` | For notifications | Shared secret checked by `/api/notify` |
| `RESEND_API_KEY` | For notifications | API key for the email provider |
| `NOTIFY_FROM` | For notifications | Sender, on a domain verified with the email provider |
| `NEXT_PUBLIC_APP_URL` | No | Product app URL. Shows "Log in" in the navigation and "Sign up" as a secondary link |
| `NEXT_PUBLIC_SHOW_PRICING` | No | `true` shows the pricing section. Default: hidden |

Without the Supabase variables the forms still render. A submission returns
an error and the visitor is shown the direct booking link and the email
address, so the request is not lost silently.

The login and sign-up paths appended to `NEXT_PUBLIC_APP_URL` are set in
`site.app` in `src/lib/site.ts`.

## Demo requests

`POST /api/demo-request` (and `POST /api/contact`) run through one shared
handler in `src/lib/forms/handle-submission.ts`:

- same-origin check and JSON content-type check;
- request body capped at 10 KB, each field capped in length;
- a hidden honeypot field: if it is filled in, the request gets a normal
  success response and nothing is stored;
- a basic rate limit of 5 submissions per IP address per 10 minutes. It is
  held in memory, so on serverless hosting it applies per instance;
- an insert into Supabase with the anon key.

### Database setup

Run both files once in the Supabase SQL editor:

- `supabase/demo_requests.sql`
- `supabase/contact_messages.sql`

Each creates its table with length checks, enables row level security and
adds a single policy that lets the anon role insert. The anon role cannot
read, update or delete rows. Read submissions in the Supabase dashboard.

## Notifications

Every new row sends an email to the address in `site.email`. The path is:
Supabase database webhook, then `POST /api/notify` on this site, then the
email provider's HTTP API.

1. Create an account with the email provider (Resend), verify the sending
   domain, and create an API key.
2. Set `RESEND_API_KEY`, `NOTIFY_FROM` (for example
   `Website <notifications@your-domain>`) and `NOTIFY_WEBHOOK_SECRET` (a long
   random string) in the hosting environment, then redeploy.
3. In Supabase, open Database, Webhooks, and create a webhook:
   - Table: `demo_requests`. Events: Insert.
   - Type: HTTP request. Method: POST.
   - URL: `https://<your-domain>/api/notify`
   - HTTP header: `x-webhook-secret` with the value of
     `NOTIFY_WEBHOOK_SECRET`.
4. Create a second webhook with the same settings for `contact_messages`.
5. Submit the form once and confirm the email arrives. Failed deliveries
   appear in the webhook's log in Supabase.

`/api/notify` rejects requests without the correct secret and ignores
events for any other table.

## Pricing

The pricing section is built from `pricing` in `src/lib/site.ts` and is
hidden by default. Set `NEXT_PUBLIC_SHOW_PRICING=true` to show it on the
home page and add "Pricing" to the navigation.

## Press releases

`/press` renders a release only when an entry in `src/content/press.ts` has
a real founder quote. The file ships empty. Do not add placeholder quotes.

## Accessibility and privacy

- One `h1` per page, ordered headings, visible focus rings, a skip link and
  a focus-trapped mobile menu.
- Scroll animations are disabled when the visitor prefers reduced motion,
  and content is visible without JavaScript.
- The site sets no cookies and loads no third-party scripts. The
  Content-Security-Policy in `next.config.ts` allows same-origin requests
  only.
