import { DemoRequestForm } from "@/components/forms/DemoRequestForm"
import { Card } from "@/components/ui/Card"
import { CheckList } from "@/components/ui/CheckList"
import { Container } from "@/components/ui/Container"
import { PageHeader } from "@/components/ui/PageHeader"
import { pageMetadata } from "@/lib/metadata"
import { routes, site } from "@/lib/site"

const minutes = site.demo.durationMinutes

export const metadata = pageMetadata({
  title: "Book a demo",
  description: `Book a ${minutes}-minute demo of ${site.name}: a live search, the AI analysis with sources, and the exported report. No commitment.`,
  path: routes.demo,
})

const expectations = [
  `A ${minutes}-minute video call with someone who works on the product.`,
  "A live search on a company or person of your choice.",
  "A walk through the results, the AI analysis with its sources, and the exported report.",
  "Time for your questions, including pricing.",
]

const steps = [
  { title: "Send the form", body: "Tell us who you are and how many people would use the product." },
  { title: "Choose a time", body: "Pick a slot that suits you on the booking page." },
  { title: "Join the call", body: "We run the search live and answer your questions." },
]

export default function BookADemoPage() {
  return (
    <>
      <PageHeader
        eyebrow={`${minutes}-minute call · No commitment`}
        title="Book a demo"
        lead={`See ${site.name} run on a name you choose, and decide for yourself whether it fits your work.`}
      />
      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <h2 className="text-xl">What to expect</h2>
          <CheckList items={expectations} className="mt-5" />

          <h2 className="mt-10 text-xl">How booking works</h2>
          <ol className="mt-5 space-y-5">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft font-heading text-sm font-semibold text-brand-strong"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-body text-base font-semibold tracking-normal">{step.title}</h3>
                  <p className="mt-1 text-sm">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-sm text-muted">
            Prefer email? Write to{" "}
            <a href={`mailto:${site.email}`} className="link">
              {site.email}
            </a>
            .
          </p>
        </div>

        <Card className="p-6 sm:p-8">
          <h2 className="text-xl">Your details</h2>
          <p className="mt-2 text-sm text-muted">All fields are required unless marked optional.</p>
          <div className="mt-6">
            <DemoRequestForm />
          </div>
        </Card>
      </Container>
    </>
  )
}
