import { Container } from "@/components/ui/Container"
import { DownloadIcon } from "@/components/ui/icons"
import { PageHeader } from "@/components/ui/PageHeader"
import { pressReleases } from "@/content/press"
import { pageMetadata } from "@/lib/metadata"
import { counts, formatDate, registeredOfficeLine, routes, site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Press",
  description: `Launch announcement, fact sheet, wordmarks and media contact for ${site.name}.`,
  path: routes.press,
})

const factSheet: [string, string][] = [
  ["What it is", "Adverse media and sanctions screening on companies and people."],
  [
    "Who it is for",
    "Consultancies, due diligence providers, boutique investigation firms and small in-house compliance teams.",
  ],
  ["Coverage", `${counts.languages} languages and ${counts.riskCategories} risk categories.`],
  ["Approach", "No risk scores. The platform finds and organises the evidence; the analyst makes the call."],
  ["Markets", "United Kingdom and the Middle East."],
  ["Status", "Live. Access is granted after onboarding checks on each client."],
  [
    "Company",
    `${site.legalName}, a private limited company registered in ${site.company.jurisdiction}, number ${site.company.number}, incorporated ${formatDate(site.company.incorporated)}.`,
  ],
  ["Registered office", registeredOfficeLine],
]

const downloads = [
  {
    label: "Wordmark for light backgrounds",
    detail: "PNG, transparent",
    href: site.logo.wordmarkOnLight,
    file: "wordmark-on-light.png",
  },
  {
    label: "Wordmark for dark backgrounds",
    detail: "PNG, transparent",
    href: site.logo.wordmarkOnDark,
    file: "wordmark-on-dark.png",
  },
  { label: "Icon", detail: "SVG", href: site.logo.icon, file: "icon.svg" },
]

export default function PressPage() {
  return (
    <>
      <PageHeader title="Press" lead={`News, facts and brand assets for anyone writing about ${site.name}.`} />
      <Container className="space-y-16 py-12 sm:py-16">
        {pressReleases.map((release) => (
          <article key={release.slug} aria-labelledby={`release-${release.slug}`} className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-text">Press release</p>
            <h2 id={`release-${release.slug}`} className="mt-3 text-2xl sm:text-3xl">
              {release.title}
            </h2>
            <p className="mt-4 text-lg">{release.summary}</p>
            <div className="prose mt-8">
              <p>
                <strong>
                  {release.dateline}, <time dateTime={release.date}>{formatDate(release.date)}</time>.
                </strong>{" "}
                {release.body[0]}
              </p>
              {release.body.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <figure className="my-10 rounded-lg bg-pine p-8 sm:p-10">
              <blockquote className="font-heading text-xl font-bold leading-snug text-on-pine sm:text-2xl">
                “{release.quote.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold uppercase tracking-widest text-accent">
                {release.quote.role}, {site.name}
              </figcaption>
            </figure>
            <div className="prose">
              {release.bodyAfterQuote.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                <strong>Media contact:</strong>{" "}
                <a href={`mailto:${site.email}?subject=Press%20enquiry`}>{site.email}</a>, {site.phone.display}
              </p>
            </div>
          </article>
        ))}

        <section aria-labelledby="fact-sheet-title">
          <h2 id="fact-sheet-title" className="text-xl sm:text-2xl">
            Fact sheet
          </h2>
          <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
            {factSheet.map(([term, detail]) => (
              <div key={term} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <dt className="font-semibold text-heading">{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="assets-title">
          <h2 id="assets-title" className="text-xl sm:text-2xl">
            Brand assets
          </h2>
          <p className="mt-3 max-w-2xl text-sm">
            Please use the wordmark as supplied, without changing its colours or proportions.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {downloads.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  download={item.file}
                  className="flex items-center justify-between gap-4 rounded-lg border border-line bg-raised p-5 shadow-card hover:border-brand"
                >
                  <span>
                    <span className="block text-sm font-semibold text-heading">{item.label}</span>
                    <span className="block text-xs text-muted">{item.detail}</span>
                  </span>
                  <DownloadIcon className="h-5 w-5 shrink-0 text-brand" />
                  <span className="sr-only">Download</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  )
}
