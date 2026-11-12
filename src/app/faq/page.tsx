import { FaqList } from "@/components/sections/FaqList"
import { FinalCta } from "@/components/sections/FinalCta"
import { Container } from "@/components/ui/Container"
import { PageHeader } from "@/components/ui/PageHeader"
import { faqGroups } from "@/content/faq"
import { JsonLd } from "@/lib/JsonLd"
import { pageMetadata } from "@/lib/metadata"
import { routes, site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Frequently asked questions",
  description: `Answers about what ${site.name} covers, how the AI analysis and source links work, sanctions lists, getting started and how your data is handled.`,
  path: routes.faq,
})

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
          <section key={group.title} aria-labelledby={`faq-${group.title.replace(/\W+/g, "-").toLowerCase()}`}>
            <h2 id={`faq-${group.title.replace(/\W+/g, "-").toLowerCase()}`} className="mb-5 text-xl">
              {group.title}
            </h2>
            <FaqList items={group.items} headingLevel="h3" />
          </section>
        ))}
      </Container>
      <FinalCta />
      <JsonLd data={faqJsonLd} />
    </>
  )
}
