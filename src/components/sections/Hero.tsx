import { hero } from "@/content/home"
import { routes } from "@/lib/site"
import { HeroIllustration } from "@/components/illustrations/HeroIllustration"
import { signupLink } from "@/components/layout/navigation"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { ArrowRightIcon } from "@/components/ui/icons"

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-line bg-subtle py-14 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
        <div>
          <h1 id="hero-title" className="text-3xl sm:text-4xl">
            <span className="block">{hero.title[0]}</span>
            <span className="block text-brand">{hero.title[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg">{hero.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={routes.demo} size="lg">
              {hero.primaryCta}
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button href={routes.howItWorks} size="lg" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted">{hero.trustLine}</p>
          {signupLink && (
            <p className="mt-2 text-sm text-muted">
              Prefer to try it yourself?{" "}
              <a href={signupLink.href} className="link font-medium">
                {signupLink.label}
              </a>
            </p>
          )}
        </div>
        <HeroIllustration />
      </Container>
    </section>
  )
}
