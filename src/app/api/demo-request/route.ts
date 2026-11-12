import { handleSubmission } from "@/lib/forms/handle-submission"
import { demoRequestSchema } from "@/lib/forms/schemas"

export function POST(request: Request) {
  return handleSubmission(request, { schema: demoRequestSchema, table: "demo_requests" })
}
