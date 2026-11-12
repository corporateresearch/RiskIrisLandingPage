/**
 * Field rules shared by the browser forms and the API routes, so client
 * hints and server validation cannot drift apart. The server is the
 * authority; the client only mirrors it for quicker feedback.
 */
export type FieldRule = {
  label: string
  max: number
  required: boolean
  type?: "email"
  options?: readonly string[]
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Name of the hidden honeypot input. Real visitors never fill it in. */
export const HONEYPOT_FIELD = "website"

export const TEAM_SIZES = ["Just me", "2–5", "6–20", "21 or more"] as const

export const demoRequestSchema = {
  name: { label: "Name", max: 100, required: true },
  email: { label: "Work email", max: 254, required: true, type: "email" },
  company: { label: "Company", max: 150, required: true },
  role: { label: "Role", max: 100, required: true },
  team_size: { label: "Team size", max: 20, required: true, options: TEAM_SIZES },
  note: { label: "Note", max: 1000, required: false },
} as const satisfies Record<string, FieldRule>

export type Schema = Record<string, FieldRule>
export type Values<S extends Schema> = { [K in keyof S]: string | null }
export type FieldErrors<S extends Schema> = Partial<Record<keyof S, string>>

export function validate<S extends Schema>(
  schema: S,
  input: Record<string, unknown>,
): { values: Values<S>; errors: FieldErrors<S> } {
  const values = {} as Values<S>
  const errors: FieldErrors<S> = {}

  for (const key of Object.keys(schema) as Array<keyof S & string>) {
    const rule = schema[key]
    const raw = input[key]
    const text = typeof raw === "string" ? raw.trim() : ""

    if (raw !== undefined && raw !== null && typeof raw !== "string") {
      errors[key] = `${rule.label} must be text.`
      continue
    }
    if (!text) {
      if (rule.required) errors[key] = `Enter your ${rule.label.toLowerCase()}.`
      values[key] = null
      continue
    }
    if (text.length > rule.max) {
      errors[key] = `${rule.label} must be ${rule.max} characters or fewer.`
      continue
    }
    if (rule.type === "email" && !EMAIL_PATTERN.test(text)) {
      errors[key] = "Enter a valid email address."
      continue
    }
    if (rule.options && !rule.options.includes(text)) {
      errors[key] = `Choose a ${rule.label.toLowerCase()} from the list.`
      continue
    }
    values[key] = rule.type === "email" ? text.toLowerCase() : text
  }

  return { values, errors }
}
