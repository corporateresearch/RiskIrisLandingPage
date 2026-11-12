import { CompanyDetails } from "@/components/layout/CompanyDetails"
import { Container } from "@/components/ui/Container"
import { PageHeader } from "@/components/ui/PageHeader"
import { pageMetadata } from "@/lib/metadata"
import { counts, routes, site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "About",
  description: `${site.name} is screening built by investigators, for investigators: evidence in place of risk scores, in ${counts.languages} languages.`,
  path: routes.about,
})

const beliefs = [
  {
    title: "You cannot base decisions on uncertainty",
    body: "A flag that cannot be explained is not something an analyst can stand behind. We would rather show the evidence and let a person judge it.",
  },
  {
    title: "Signals, not verdicts",
    body: "A sanctions match is a possible match until someone checks it. A negative article can describe an allegation that was never proven. The product treats both that way.",
  },
  {
    title: "A missed risk is worse than a wasted hour",
    body: "False positives cost time. False negatives are the critical failure. The two are not the same kind of mistake and should not be traded off as if they were.",
  },
  {
    title: "Say what you do not know",
    body: "If a source could not be reached, the product says so. It does not quietly return nothing and let that look like a clean result.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`About ${site.name}`}
        lead="Built by investigators, for investigators. Finding the one true finding in an ever-growing sea of information."
      />
      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <h2 className="text-xl sm:text-2xl">Where it came from</h2>
          <div className="mt-4 space-y-4">
            <p>
              {site.name} grew out of years of screening companies and people for compliance and investigations work.
              The pattern was always the same: thousands of supposedly negative articles on a single name, flags that
              could not be fully trusted, weak coverage of reporting in other languages, and names missed because they
              were spelt another way. In the end the work fell back to manual searching.
            </p>
            <p>
              The product exists to fix that for the people who do this work: consultancies, due diligence providers,
              boutique investigation firms and small in-house compliance teams, in the United Kingdom and the Middle
              East.
            </p>
          </div>

          <h2 className="mt-12 text-xl sm:text-2xl">What we believe</h2>
          <ul className="mt-6 space-y-6">
            {beliefs.map((item) => (
              <li key={item.title} className="border-l-2 border-brand pl-5">
                <h3 className="font-body text-base font-semibold tracking-normal">{item.title}</h3>
                <p className="mt-1.5 text-sm">{item.body}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-xl sm:text-2xl">Where we are today</h2>
          <p className="mt-4">
            The product is live and covers {counts.languages} languages and {counts.riskCategories} risk categories.
            Access is granted after onboarding checks on each client. We are a young company, and we would rather show
            you the product on a call than describe it.
          </p>
        </div>

        <div className="self-start rounded-lg border border-line bg-raised p-6 shadow-card sm:p-8">
          <h2 className="text-xl">Company details</h2>
          <div className="mt-4">
            <CompanyDetails />
          </div>
        </div>
      </Container>
    </>
  )
}
