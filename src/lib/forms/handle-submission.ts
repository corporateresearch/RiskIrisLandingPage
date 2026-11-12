import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"
import { clientKey, isRateLimited } from "./rate-limit"
import { HONEYPOT_FIELD, validate, type Schema, type Values } from "./schemas"

const MAX_BODY_BYTES = 10_000

function reply(status: number, body: Record<string, unknown>) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } })
}

/**
 * Shared POST handler for the public forms: same-origin and size checks,
 * rate limit, honeypot, validation, then an insert-only write to Supabase.
 */
export async function handleSubmission<S extends Schema>(
  request: Request,
  options: { schema: S; table: string; toRow?: (values: Values<S>) => Record<string, unknown> },
) {
  const origin = request.headers.get("origin")
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host")
  if (origin && host && new URL(origin).host !== host) {
    return reply(403, { ok: false, error: "This form can only be submitted from this website." })
  }

  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return reply(415, { ok: false, error: "Unsupported request format." })
  }

  if (isRateLimited(clientKey(request))) {
    return reply(429, { ok: false, error: "Too many requests. Please wait a few minutes and try again." })
  }

  const text = await request.text()
  if (new TextEncoder().encode(text).length > MAX_BODY_BYTES) {
    return reply(413, { ok: false, error: "That submission is too long." })
  }

  let input: Record<string, unknown>
  try {
    const parsed: unknown = JSON.parse(text)
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) throw new Error("Not an object")
    input = parsed as Record<string, unknown>
  } catch {
    return reply(400, { ok: false, error: "The request could not be read." })
  }

  // Honeypot: automated submissions get a normal-looking success and nothing is stored.
  if (typeof input[HONEYPOT_FIELD] === "string" && input[HONEYPOT_FIELD].trim() !== "") {
    return reply(200, { ok: true })
  }

  const { values, errors } = validate(options.schema, input)
  if (Object.keys(errors).length > 0) {
    return reply(400, { ok: false, error: "Please check the highlighted fields.", fields: errors })
  }

  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY
  if (!url || !key) {
    console.warn(`[forms] SUPABASE_URL or SUPABASE_ANON_KEY is not set; ${options.table} submission not stored.`)
    return reply(503, { ok: false, code: "unavailable", error: "The form is not available at the moment." })
  }

  try {
    const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
    const row = options.toRow ? options.toRow(values) : values
    // No .select(): the anon role may insert but not read rows back.
    const { error } = await supabase.from(options.table).insert(row)
    if (error) {
      console.error(`[forms] Insert into ${options.table} failed: ${error.message}`)
      return reply(502, { ok: false, code: "unavailable", error: "We could not save your request." })
    }
  } catch (error) {
    console.error(`[forms] Insert into ${options.table} failed:`, error)
    return reply(502, { ok: false, code: "unavailable", error: "We could not save your request." })
  }

  return reply(200, { ok: true })
}
