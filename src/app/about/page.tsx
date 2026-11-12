import { CompanyDetails } from "@/components/layout/CompanyDetails"
import { FinalCta } from "@/components/sections/FinalCta"
import { Card } from "@/components/ui/Card"
import { Container } from "@/components/ui/Container"
import { PageHeader } from "@/components/ui/PageHeader"
import { pageMetadata } from "@/lib/metadata"
import { counts, formatDate, routes, site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "About",
  description: `${site.name} is adverse media and sanctions screening that shows its evidence. Who we are, what we believe and our registered company details.`,
  path: routes.about,
})

const principles = [
  {
    title: "Evidence, not scores",
    body: "We do not produce black-box risk scores. A number cannot be checked or explained to a client. The platform finds and organises the evidence, and the analyst makes the call.",
  },
  {
    title: "Every finding has a source",
    body: "The AI analysis gives a summary of findings, a timeline and event details, and each finding links to where it was published. Anything the platform reports can be verified.",
  },
  {
    title: "Names are not written one way",
    body: `Research across borders means research across scripts and spellings. The platform works in ${counts.languages} languages and recognises spelling and transliteration variants of a name.`,
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`About ${site.name}`}
        lead="Screening for people who research companies and individuals across countries and languages, and who have to stand behind what they conclude."
      />
      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <h2 className="text-xl sm:text-2xl">What we do</h2>
          <div className="mt-4 space-y-4">
            <p>
              {site.name} runs adverse media screening and sanctions and watchlist screening on any company or person.
              It searches in {counts.languages} languages across {counts.riskCategories} risk categories and checks
              names against {counts.sanctionsLists} official sanctions lists.
            </p>
            <p>
              It is built for consultancies, due diligence providers, boutique investigation firms and small in-house
              compliance teams: people who need to find what has been reported about a subject, and show where each
              finding came from.
            </p>
          </div>

          <h2 className="mt-12 text-xl sm:text-2xl">What we believe</h2>
          <ul className="mt-6 space-y-6">
            {principles.map((item) => (
              <li key={item.title}>
                <h3 className="font-body text-base font-semibold tracking-normal">{item.title}</h3>
                <p className="mt-1.5 text-sm">{item.body}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-xl sm:text-2xl">Where we are today</h2>
          <p className="mt-4">
            {site.legalName} was incorporated on {formatDate(site.company.incorporated)}. The product is working and
            open for self-serve sign-up. We are a young company, and we would rather show you the product on a call than
            describe it.
          </p>
        </div>

        <div>
          <Card className="p-6 sm:p-8">
            <h2 className="text-xl">Company details</h2>
            <div className="mt-4">
              <CompanyDetails />
            </div>
          </Card>
        </div>
      </Container>
      <FinalCta />
    </>
  )
}
