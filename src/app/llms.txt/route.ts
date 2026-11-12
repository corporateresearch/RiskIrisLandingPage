import { absoluteUrl, counts, formatDate, registeredOfficeLine, routes, site } from "@/lib/site"

export const dynamic = "force-static"

/** Plain-text summary for AI crawlers, generated from site.ts. */
export function GET() {
  const body = `# ${site.name}

> ${site.name} checks the companies and people you do business with for negative news and sanctions, in ${counts.languages} languages and across ${counts.riskCategories} risk categories. Evidence, not risk scores.

## What it is

- Adverse media and sanctions screening on companies and people.
- ${counts.languages} languages and ${counts.riskCategories} risk categories.
- Recognises spelling and transliteration variants of names.
- No risk scores. The platform finds and organises the evidence; the analyst makes the call.
- For consultancies, due diligence providers, boutique investigation firms and small in-house compliance teams in the United Kingdom and the Middle East.

## Company

- ${site.legalName}, a private limited company registered in ${site.company.jurisdiction}, number ${site.company.number}
- Incorporated ${formatDate(site.company.incorporated)}
- Registered office: ${registeredOfficeLine}
- Contact: ${site.email}, ${site.phone.display}
- ${site.name} is a screening tool. It is not authorised or regulated by the FCA, and all results require human review.

## Pages

- [Home](${absoluteUrl(routes.home)})
- [Book a demo](${absoluteUrl(routes.demo)})
- [FAQ](${absoluteUrl(routes.faq)})
- [About](${absoluteUrl(routes.about)})
- [Contact](${absoluteUrl(routes.contact)})
- [Press](${absoluteUrl(routes.press)})
- [Privacy policy](${absoluteUrl(routes.privacy)})
- [Terms of service](${absoluteUrl(routes.terms)})
`

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
