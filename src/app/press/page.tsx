import { ScreenshotFrame } from "@/components/illustrations/Frame"
import { Card } from "@/components/ui/Card"
import { Container } from "@/components/ui/Container"
import { DownloadIcon } from "@/components/ui/icons"
import { PageHeader } from "@/components/ui/PageHeader"
import { pressReleases } from "@/content/press"
import { pageMetadata } from "@/lib/metadata"
import {
  counts,
  facts,
  formatDate,
  registeredOfficeLine,
  routes,
  sanctionsListLabels,
  screenshots,
  site,
} from "@/lib/site"

export const metadata = pageMetadata({
  title: "Press",
  description: `Fact sheet, wordmarks, product screenshots and media contact for ${site.name}.`,
  path: routes.press,
})

const factSheet: [string, string][] = [
  ["What it is", "Adverse media screening and sanctions and watchlist screening on any company or person."],
  [
    "Who it is for",
    "Consultancies, due diligence providers, boutique investigation firms and small in-house compliance teams.",
  ],
  ["Languages", `${counts.languages}: ${facts.languages.join(", ")}.`],
  ["Risk categories", `${counts.riskCategories}: ${facts.riskCategories.join(", ")}.`],
  ["Sanctions lists", `${counts.sanctionsLists} official lists: ${sanctionsListLabels.join(", ")}.`],
  [
    "AI analysis",
    `${facts.analysisOutputs.map((item, index) => (index === 0 ? item : item.toLowerCase())).join(", ")}.`,
  ],
  ["Approach", "No black-box risk scores. The platform finds and organises the evidence; the analyst makes the call."],
  ["Stage", "Working product with self-serve sign-up."],
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
  {
    label: "Product screenshot: workspace home",
    detail: `WebP, ${screenshots.workspace.width} × ${screenshots.workspace.height}`,
    href: screenshots.workspace.src,
    file: "workspace-home.webp",
  },
]

/** Only releases that carry a real founder quote are published. */
const releases = pressReleases.filter((release) => release.founderQuote.text.trim() !== "")

export default function PressPage() {
  return (
    <>
      <PageHeader
        title="Press"
        lead={`Facts, brand assets and a contact for journalists and analysts writing about ${site.name}.`}
      />
      <Container className="space-y-16 py-12 sm:py-16">
        <section aria-labelledby="fact-sheet-title">
          <h2 id="fact-sheet-title" className="text-xl sm:text-2xl">
            Fact sheet
          </h2>
          <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
            {factSheet.map(([term, detail]) => (
              <div key={term} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <dt className="font-medium text-heading">{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        {releases.length > 0 && (
          <section aria-labelledby="releases-title">
            <h2 id="releases-title" className="text-xl sm:text-2xl">
              Press releases
            </h2>
            <div className="mt-6 space-y-6">
              {releases.map((release) => (
                <Card as="article" key={release.slug} className="p-6 sm:p-8">
                  <p className="text-sm text-muted">
                    <time dateTime={release.date}>{formatDate(release.date)}</time>
                  </p>
                  <h3 className="mt-2 text-xl">{release.title}</h3>
                  <p className="mt-3">{release.summary}</p>
                  {release.body.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-sm">
                      {paragraph}
                    </p>
                  ))}
                  <blockquote className="mt-5 border-l-2 border-brand pl-4">
                    <p>“{release.founderQuote.text}”</p>
                    <footer className="mt-2 text-sm text-muted">
                      {release.founderQuote.name}, {release.founderQuote.role}
                    </footer>
                  </blockquote>
                </Card>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="assets-title">
          <h2 id="assets-title" className="text-xl sm:text-2xl">
            Brand assets and screenshots
          </h2>
          <p className="mt-3 max-w-2xl text-sm">
            Please use the wordmark as supplied, without changing its colours or proportions. The screenshot is a real
            capture of the product.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {downloads.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  download={item.file}
                  className="flex items-center justify-between gap-4 rounded-md border border-line bg-canvas p-5 shadow-card hover:border-brand"
                >
                  <span>
                    <span className="block text-sm font-medium text-heading">{item.label}</span>
                    <span className="block text-xs text-muted">{item.detail}</span>
                  </span>
                  <DownloadIcon className="h-5 w-5 shrink-0 text-brand" />
                  <span className="sr-only">Download</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ScreenshotFrame shot={screenshots.workspace} sizes="(min-width: 1152px) 1088px, 100vw" />
          </div>
        </section>

        <section aria-labelledby="media-contact-title">
          <h2 id="media-contact-title" className="text-xl sm:text-2xl">
            Media contact
          </h2>
          <p className="mt-3 text-sm">
            For interviews, comment or further information, email{" "}
            <a href={`mailto:${site.email}?subject=Press%20enquiry`} className="link">
              {site.email}
            </a>
            .
          </p>
        </section>
      </Container>
    </>
  )
}
