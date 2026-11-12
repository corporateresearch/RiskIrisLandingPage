import Link from "next/link"
import { routes, site } from "@/lib/site"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { MobileMenu } from "./MobileMenu"
import { loginLink, primaryNav } from "./navigation"
import { Wordmark } from "./Wordmark"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href={routes.home} aria-label={`${site.name} home`} className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-medium text-body hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          {loginLink && (
            <a href={loginLink.href} className="text-sm font-medium text-body hover:text-brand">
              {loginLink.label}
            </a>
          )}
          <Button href={routes.demo}>Book a demo</Button>
        </div>

        <MobileMenu links={primaryNav} loginLink={loginLink} demoHref={routes.demo} />
      </Container>
    </header>
  )
}
