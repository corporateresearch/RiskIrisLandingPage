import {
  absoluteUrl,
  counts,
  facts,
  formatDate,
  registeredOfficeLine,
  routes,
  sanctionsListLabels,
  site,
} from "@/lib/site"

export const dynamic = "force-static"

/** Plain-text summary for AI crawlers, generated from site.ts. */
export function GET() {
  const body = `# ${site.name}

> Adverse media screening and sanctions and watchlist screening on any company or person, with a source link for every finding.

## What it does

- Adverse media screening across ${counts.riskCategories} risk categories: ${facts.riskCategories.join(", ")}.
- Sanctions and watchlist screening against ${counts.sanctionsLists} official lists: ${sanctionsListLabels.join(", ")}.
- ${counts.languages} languages: ${facts.languages.join(", ")}.
- Recognises spelling and transliteration variants of names.
- AI analysis: ${facts.analysisOutputs.join(", ").toLowerCase()}.
- No black-box risk scores. The platform finds and organises the evidence; the analyst makes the call.

## Company

- ${site.legalName}, a private limited company registered in ${site.company.jurisdiction}, number ${site.company.number}
- Incorporated ${formatDate(site.company.incorporated)}
- Registered office: ${registeredOfficeLine}
- Contact: ${site.email}
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
