import { handleSubmission } from "@/lib/forms/handle-submission"
import { contactSchema } from "@/lib/forms/schemas"

export function POST(request: Request) {
  return handleSubmission(request, { schema: contactSchema, table: "contact_messages" })
}
