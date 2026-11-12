# Marketing site

Multi-page marketing site with one goal: a qualified visitor books a demo.
Built with Next.js (App Router), React and Tailwind CSS v4, with Motion for
animation and the Supabase client for demo requests.

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
   company details, phone number, booking URL and logo paths. It also holds the
   public product facts, so no number is typed twice.
2. **`src/app/globals.css`** holds the brand colours: the light theme in
   the `@theme` block and the dark theme under `[data-theme="dark"]`.

Everything else derives from those two files: page copy, metadata, the
footer, structured data, `llms.txt`, the favicon (`/icon.svg`), the Apple
touch icon, the Open Graph image and the downloadable wordmarks on `/press`.

One thing sits outside the repository and needs the same update:
`NOTIFY_FROM` (the sender address for notification emails) in the hosting
environment.

## Project structure

```
src/
  lib/site.ts            Brand, company details, contact details, public facts
  lib/theme.ts           Reads colour tokens for generated images
  lib/brand-image.tsx    Shared pieces for the generated wordmark and icons
  lib/forms/             Validation rules, rate limit, shared POST handler
  content/               Copy: home, FAQ, legal, press release, penalties
  components/ui/         Primitives: Button, Container, Section, Card, Badge,
                         IconTile, CheckList, Field, PageHeader
  components/layout/     Header, theme toggle, mobile menu, footer, wordmark
  components/scenes/     Animated scenes for the home page
  components/forms/      Demo request form
  app/                   Routes, API routes, generated icon / OG image / sitemap
supabase/                SQL for the demo_requests table
```

## Home page

Five sections in a fixed order (problem, solution, benefits, proof, call to
action) after the hero, each with its own animated scene in
`src/components/scenes`. "Book a demo" appears in the header and in the
closing section only. Each section ends with a "Next" shortcut; normal
scrolling works throughout.

What the site deliberately does not publish: how the product works, the
lists of languages, risk categories and sanctions sources, pricing, and any
personal names. Only the two counts (languages and risk categories) are
public. Keep new copy within those limits.

### Penalty cases

`src/content/penalties.ts` feeds the proof section. Every case must link to
the regulator's own announcement. Do not add a case without one.

## Themes

Light and dark, switched by the toggle in the header. The first visit
follows the device setting; the choice is then kept in the browser's local
storage. No cookie is set.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `SUPABASE_URL` | For forms | Supabase project URL (server-side only) |
| `SUPABASE_ANON_KEY` | For forms | Supabase anon key (server-side only) |
| `NOTIFY_WEBHOOK_SECRET` | For notifications | Shared secret checked by `/api/notify` |
| `RESEND_API_KEY` | For notifications | API key for the email provider |
| `NOTIFY_FROM` | For notifications | Sender, on a domain verified with the email provider |

Without the Supabase variables the forms still render. A submission returns
an error and the visitor is shown the direct booking link and the email
address, so the request is not lost silently.

## Demo requests

`POST /api/demo-request` runs through the handler in `src/lib/forms/handle-submission.ts`:

- same-origin check and JSON content-type check;
- request body capped at 10 KB, each field capped in length;
- a hidden honeypot field: if it is filled in, the request gets a normal
  success response and nothing is stored;
- a basic rate limit of 5 submissions per IP address per 10 minutes. It is
  held in memory, so on serverless hosting it applies per instance;
- an insert into Supabase with the anon key.

### Database setup

Run `supabase/demo_requests.sql` once in the Supabase SQL editor. It creates
the table with length checks, enables row level security and adds a single
policy that lets the anon role insert. The anon role cannot
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
4. Submit the form once and confirm the email arrives. Failed deliveries
   appear in the webhook's log in Supabase.

`/api/notify` rejects requests without the correct secret and ignores
events for any other table.

## Press releases

Releases live in `src/content/press.ts`. They state facts only: no invented
customers, figures or quotes. Quotes are attributed by role, not by name.

## Accessibility and privacy

- One `h1` per page, ordered headings, visible focus rings, a skip link and
  a focus-trapped mobile menu.
- Animations stop when the visitor prefers reduced motion, and every scene
  has a text description for screen readers.
- The site sets no cookies and loads no third-party scripts. The
  Content-Security-Policy in `next.config.ts` allows same-origin requests
  only.
