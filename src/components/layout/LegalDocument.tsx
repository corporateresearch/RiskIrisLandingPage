import type { LegalDocument as LegalDocumentContent } from "@/content/legal"
import { formatDate } from "@/lib/site"
import { Container } from "@/components/ui/Container"
import { PageHeader } from "@/components/ui/PageHeader"

/** Renders a legal document from src/content/legal.ts. */
export function LegalDocument({ document }: { document: LegalDocumentContent }) {
  return (
    <>
      <PageHeader
        width="narrow"
        title={document.title}
        lead={
          <>
            Last updated <time dateTime={document.updated}>{formatDate(document.updated)}</time>
          </>
        }
      />
      <Container width="narrow" className="py-12 sm:py-16">
        <div className="prose text-base">
          <p>{document.intro}</p>
          {document.sections.map((section, index) => (
            <section key={section.title}>
              <h2>
                {index + 1}. {section.title}
              </h2>
              {section.blocks.map((block, blockIndex) =>
                typeof block === "string" ? (
                  <p key={blockIndex}>{block}</p>
                ) : (
                  <ul key={blockIndex}>
                    {block.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ),
              )}
            </section>
          ))}
        </div>
      </Container>
    </>
  )
}
