# Product

Durable product facts for anyone, person or AI agent, doing design work on
this site. Everything here comes from the owner's own answers and reference
document; nothing is inferred. Brand name and company details are not
repeated here: they live in `src/lib/site.ts`.

## Platform

web

## Stack

Next.js (App Router), React, Tailwind CSS v4. Motion for animation and
Three.js for the hero scene.

## Users

Consultancies, due diligence providers, boutique investigation firms and
small in-house compliance teams that research companies and people across
countries and languages. Not large enterprises at first. Markets: the United
Kingdom and the Middle East.

## Product Purpose

Adverse media screening and sanctions screening on companies and people,
used before a contract is signed.

## Positioning

- Evidence, not risk scores. The platform finds and organises the evidence;
  the analyst makes the call.
- Human-centred: technology speeds up the research, a person decides.
- Built multilingual from the start.
- Every finding links to its source.

## Operating Context

The site has one job: a qualified visitor books a 30-minute demo. Visitors
are compliance and investigations professionals, usually at a desk, who are
sceptical of unexplained claims.

## Capabilities and Constraints

What may be said publicly:

- 11 languages and 11 risk categories, as numbers only.
- Spelling and transliteration variants of names are recognised.
- Reports export as PDF and as an editable Word file.
- The product is live; access is granted after onboarding checks.

What must not appear on the site:

- How the product works: no workflow steps, no interface, no screenshots.
- The lists of languages, risk categories or sanctions sources.
- Any search engine, AI provider, data vendor, algorithm or architecture.
- Risk scores, risk levels or accuracy percentages, in copy or imagery.
- Pricing.
- Invented customers, logos, testimonials, usage figures or quotes.
- Personal names. A quote is attributed by role only.
- Artwork presented as a real capture of the product. Coded or generated
  visuals are labelled "Illustration".

## Brand Commitments

- Home page: hero, problem, solution, benefits, proof, call to action, in
  that order.
- Hero headline: "Before you sign a contract, know who you're signing with."
- Closing line: "Screen every name. Defend every decision."
- "Book a demo" appears in the header and in the closing section only.
- Light and dark themes with a toggle.
- No purple, violet or navy.
- Rename-ready: brand details only in `src/lib/site.ts`, colours only in
  `src/app/globals.css`.

## Evidence on Hand

- 2026 regulator penalties for sanctions, bribery and third-party failures,
  each linked to the regulator's announcement (`src/content/penalties.ts`).
- The name-variant example in Arabic and Japanese.
- An illustrative example of 500 articles yielding about 10 findings. It is
  not a measured statistic and is labelled as an example.
- No customers and no measured accuracy figures.

## Product Principles

- Signals, not verdicts: a list match is a possible match; an article can
  describe an allegation.
- A missed risk is worse than a wasted hour.
- Say what is not known rather than present a clean-looking answer.

## Accessibility & Inclusion

WCAG 2.2 AA. One h1 per page, ordered headings, visible focus, text contrast
of at least 4.5:1 in both themes, tap targets of 44px on phones, a pause
control on anything that moves for more than five seconds, and a still
state for visitors who ask for reduced motion.
