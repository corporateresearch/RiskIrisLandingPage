import { ContactForm } from "@/components/forms/ContactForm"
import { CompanyDetails } from "@/components/layout/CompanyDetails"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Container } from "@/components/ui/Container"
import { PageHeader } from "@/components/ui/PageHeader"
import { pageMetadata } from "@/lib/metadata"
import { routes, site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${site.name} by email or by form, and find our registered company details.`,
  path: routes.contact,
})

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        lead={
          <>
            Send us a message, or email{" "}
            <a href={`mailto:${site.email}`} className="link">
              {site.email}
            </a>
            . We reply by email.
          </>
        }
      />
      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <Card className="p-6 sm:p-8">
          <h2 className="text-xl">Send a message</h2>
          <p className="mt-2 text-sm text-muted">All fields are required unless marked optional.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Card>

        <div className="space-y-10">
          <div>
            <h2 className="text-xl">Want to see the product?</h2>
            <p className="mt-3 text-sm">
              A {site.demo.durationMinutes}-minute demo is the quickest way to get your questions answered.
            </p>
            <div className="mt-5">
              <Button href={routes.demo}>Book a demo</Button>
            </div>
          </div>
          <div>
            <h2 className="text-xl">Company details</h2>
            <div className="mt-3">
              <CompanyDetails />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
