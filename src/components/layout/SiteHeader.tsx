import Link from "next/link"
import { routes, site } from "@/lib/site"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { MobileMenu } from "./MobileMenu"
import { primaryNav } from "./navigation"
import { ThemeToggle } from "./ThemeToggle"
import { Wordmark } from "./Wordmark"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
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

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden sm:block">
            <Button href={routes.demo} variant="accent" className="whitespace-nowrap">
              Book a demo
            </Button>
          </div>
          <MobileMenu links={primaryNav} demoHref={routes.demo} />
        </div>
      </Container>
    </header>
  )
}
