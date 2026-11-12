import { timingSafeEqual } from "node:crypto"
import { NextResponse } from "next/server"
import { site } from "@/lib/site"

/**
 * Receives the Supabase database webhook for new rows in demo_requests,
 * and emails the site address. Setup is in the README.
 *
 * Environment: NOTIFY_WEBHOOK_SECRET (shared with the webhook),
 * RESEND_API_KEY and NOTIFY_FROM (a sender on a domain verified with the
 * email provider).
 */
const TABLES: Record<string, string> = {
  demo_requests: "New demo request",
}

const MAX_BODY_BYTES = 20_000

function secretMatches(provided: string | null, expected: string) {
  if (!provided) return false
  const a = Buffer.from(provided)
  const b = Buffer.from(expected)
  return a.length === b.length && timingSafeEqual(a, b)
}

export async function POST(request: Request) {
  const secret = process.env.NOTIFY_WEBHOOK_SECRET
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.NOTIFY_FROM
  if (!secret || !apiKey || !from) {
    return NextResponse.json({ ok: false, error: "Notifications are not configured." }, { status: 503 })
  }
  if (!secretMatches(request.headers.get("x-webhook-secret"), secret)) {
    return NextResponse.json({ ok: false, error: "Not authorised." }, { status: 401 })
  }

  const text = await request.text()
  if (text.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "Payload too large." }, { status: 413 })
  }

  let payload: { type?: unknown; table?: unknown; record?: unknown }
  try {
    payload = JSON.parse(text)
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 })
  }

  const table = typeof payload.table === "string" ? payload.table : ""
  const record = payload.record
  if (payload.type !== "INSERT" || !(table in TABLES) || typeof record !== "object" || record === null) {
    return NextResponse.json({ ok: true, skipped: true })
  }

  const fields = record as Record<string, unknown>
  const lines = Object.entries(fields)
    .filter(([, value]) => value !== null && value !== "")
    .map(([key, value]) => `${key}: ${String(value)}`)
  const replyTo = typeof fields.email === "string" ? fields.email : undefined

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [site.email],
      reply_to: replyTo,
      subject: `${TABLES[table]}${typeof fields.name === "string" ? ` from ${fields.name}` : ""}`,
      text: `${TABLES[table]} on ${site.domain}\n\n${lines.join("\n")}\n`,
    }),
  })

  if (!response.ok) {
    console.error(`[notify] Email provider returned ${response.status}`)
    // A 5xx makes the webhook show as failed in the Supabase log.
    return NextResponse.json({ ok: false, error: "Email could not be sent." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
