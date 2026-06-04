import { NextResponse } from "next/server"
import { storeWaitlistEntry } from "@/lib/waitlist"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name, honeypot } = body

    if (honeypot) {
      return NextResponse.json({ ok: true })
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 },
      )
    }

    const result = await storeWaitlistEntry({
      email: email.toLowerCase().trim(),
      name: name?.trim() || undefined,
      honeypot: honeypot || undefined,
      timestamp: new Date().toISOString(),
    })

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error || "Something went wrong. Please try again." },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or email us directly." },
      { status: 500 },
    )
  }
}
