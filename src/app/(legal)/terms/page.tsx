import { LegalDocument } from "@/components/layout/LegalDocument"
import { terms } from "@/content/legal"
import { pageMetadata } from "@/lib/metadata"
import { routes } from "@/lib/site"

export const metadata = pageMetadata({ title: terms.title, description: terms.description, path: routes.terms })

export default function Page() {
  return <LegalDocument document={terms} />
}
