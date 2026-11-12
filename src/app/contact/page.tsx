import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { BuildingIcon, ClockIcon, ExternalIcon, MailIcon } from "@/components/ui/icons"
import { PageHeader } from "@/components/ui/PageHeader"
import { pageMetadata } from "@/lib/metadata"
import { routes, site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${site.name} by email or phone, find our London address, or book a call.`,
  path: routes.contact,
})

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" lead="Email, call or book a time. We reply to every message." />
      <Container className="py-12 sm:py-16">
        <ul className="grid gap-5 sm:grid-cols-2">
          <li className="rounded-lg border border-line bg-raised p-6 shadow-card sm:p-8">
            <MailIcon className="h-6 w-6 text-brand" />
            <h2 className="mt-4 text-xl">Email</h2>
            <p className="mt-2">
              <a href={`mailto:${site.email}`} className="link">
                {site.email}
              </a>
            </p>
          </li>
          <li className="rounded-lg border border-line bg-raised p-6 shadow-card sm:p-8">
            <PhoneIcon className="h-6 w-6 text-brand" />
            <h2 className="mt-4 text-xl">Phone</h2>
            <p className="mt-2">
              <a href={site.phone.href} className="link">
                {site.phone.display}
              </a>
            </p>
          </li>
          <li className="rounded-lg border border-line bg-raised p-6 shadow-card sm:p-8">
            <BuildingIcon className="h-6 w-6 text-brand" />
            <h2 className="mt-4 text-xl">Address</h2>
            <address className="mt-2 not-italic">
              {site.legalName}
              {site.company.registeredOffice.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </li>
          <li className="rounded-lg border border-line bg-raised p-6 shadow-card sm:p-8">
            <ClockIcon className="h-6 w-6 text-brand" />
            <h2 className="mt-4 text-xl">Book a call</h2>
            <p className="mt-2 text-sm">Pick a time that suits you. The booking page opens in a new tab.</p>
            <div className="mt-5">
              <Button href={site.bookingUrl} external variant="secondary">
                Choose a time
                <ExternalIcon className="h-4 w-4" />
              </Button>
            </div>
          </li>
        </ul>
        <p className="mt-10 text-sm text-muted">
          Want to see the product first?{" "}
          <a href={routes.demo} className="link">
            Request a demo
          </a>
          .
        </p>
      </Container>
    </>
  )
}
