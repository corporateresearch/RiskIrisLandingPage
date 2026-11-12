import { featuredFaq } from "@/content/faq"
import { faqTeaser } from "@/content/home"
import { routes } from "@/lib/site"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { SectionHeader } from "@/components/ui/Section"
import { FaqList } from "./FaqList"

export function FaqTeaser() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 sm:py-20 lg:py-24">
      <Container width="narrow">
        <SectionHeader id="faq-title" eyebrow={faqTeaser.eyebrow} title={faqTeaser.title} />
        <FaqList items={featuredFaq} headingLevel="h3" />
        <div className="mt-8">
          <Button href={routes.faq} variant="secondary">
            {faqTeaser.linkLabel}
          </Button>
        </div>
      </Container>
    </section>
  )
}
