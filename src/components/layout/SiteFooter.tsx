import Link from "next/link"
import { registeredOfficeLine, routes, site } from "@/lib/site"
import { Container } from "@/components/ui/Container"
import { footerNav } from "./navigation"
import { Wordmark } from "./Wordmark"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-subtle">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href={routes.home} aria-label={`${site.name} home`} className="inline-block">
              <Wordmark />
            </Link>
            <address className="mt-5 text-xs not-italic leading-relaxed text-muted">
              <strong className="text-body">{site.legalName}</strong>
              <br />
              Company number {site.company.number}
              <br />
              Registered in {site.company.jurisdiction}
              <br />
              Registered office: {registeredOfficeLine}
              <br />
              <a href={`mailto:${site.email}`} className="link">
                {site.email}
              </a>
            </address>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-body hover:text-brand"
                      >
                        {link.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-body hover:text-brand">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-muted">
            <strong className="text-body">Disclaimer:</strong> {site.name} is a screening tool. All results require
            human review before action. Data is sourced from official public lists which may be subject to update
            delays. {site.name} is not authorised or regulated by the FCA. This platform is designed to assist
            compliance teams and must not be used as the sole basis for any decision without human review.
          </p>
          <p className="mt-4 text-xs text-muted">
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
