import { finalCta } from "@/content/home"
import { routes } from "@/lib/site"
import { signupLink } from "@/components/layout/navigation"
import { Button } from "@/components/ui/Button"
import { ArrowRightIcon } from "@/components/ui/icons"
import { Section } from "@/components/ui/Section"

/** Dark closing band, shared by the home page and the secondary pages. */
export function FinalCta() {
  return (
    <Section tone="ink" labelledBy="final-cta-title">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="final-cta-title" className="text-2xl text-on-ink sm:text-3xl">
          {finalCta.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg">{finalCta.lead}</p>
        <div className="mt-8 flex justify-center">
          <Button href={routes.demo} size="lg" variant="onInk">
            {finalCta.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-4 text-sm">{finalCta.trustLine}</p>
        {signupLink && (
          <p className="mt-2 text-sm">
            Or{" "}
            <a href={signupLink.href} className="link font-medium">
              {signupLink.label.toLowerCase()} and try it yourself
            </a>
            .
          </p>
        )}
      </div>
    </Section>
  )
}
