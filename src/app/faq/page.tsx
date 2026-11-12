import { FaqList } from "@/components/layout/FaqList"
import { Container } from "@/components/ui/Container"
import { PageHeader } from "@/components/ui/PageHeader"
import { faqGroups } from "@/content/faq"
import { JsonLd } from "@/lib/JsonLd"
import { pageMetadata } from "@/lib/metadata"
import { routes, site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Frequently asked questions",
  description: `Answers about what ${site.name} does, why it gives evidence in place of risk scores, how AI output should be treated, and how to get started.`,
  path: routes.faq,
})

const slug = (title: string) => `faq-${title.replace(/\W+/g, "-").toLowerCase()}`

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  ),
}

export default function FaqPage() {
  return (
    <>
      <PageHeader
        width="narrow"
        title="Frequently asked questions"
        lead={
          <>
            If your question is not here, email{" "}
            <a href={`mailto:${site.email}`} className="link">
              {site.email}
            </a>
            .
          </>
        }
      />
      <Container width="narrow" className="space-y-12 py-12 sm:py-16">
        {faqGroups.map((group) => (
          <section key={group.title} aria-labelledby={slug(group.title)}>
            <h2 id={slug(group.title)} className="mb-5 text-xl">
              {group.title}
            </h2>
            <FaqList items={group.items} />
          </section>
        ))}
      </Container>
      <JsonLd data={faqJsonLd} />
    </>
  )
}
