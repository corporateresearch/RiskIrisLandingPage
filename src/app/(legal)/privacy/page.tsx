import { LegalDocument } from "@/components/layout/LegalDocument"
import { privacy } from "@/content/legal"
import { pageMetadata } from "@/lib/metadata"
import { routes } from "@/lib/site"

export const metadata = pageMetadata({ title: privacy.title, description: privacy.description, path: routes.privacy })

export default function Page() {
  return <LegalDocument document={privacy} />
}
