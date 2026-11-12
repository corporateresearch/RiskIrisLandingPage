import type { Metadata } from "next"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { routes, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Page not found",
  description: `That page does not exist on the ${site.name} website.`,
}

export default function NotFound() {
  return (
    <Container width="narrow" className="py-24 text-center sm:py-32">
      <p className="text-sm font-medium text-brand">Error 404</p>
      <h1 className="mt-3 text-3xl sm:text-4xl">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-base">
        The page you were looking for does not exist or has moved. The links below will get you back on track.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button href={routes.home} size="lg">
          Go to the home page
        </Button>
        <Button href={routes.demo} size="lg" variant="secondary">
          Book a demo
        </Button>
      </div>
    </Container>
  )
}
