import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message, honeypot } = body

    if (honeypot) {
      return NextResponse.json({ ok: true })
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill out all required fields." },
        { status: 400 },
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 },
      )
    }

    const { createClient } = await import("@supabase/supabase-js")
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!,
    )

    const { error } = await supabase.from("contact_messages").insert([
      {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        subject: subject?.trim() || null,
        message: message.trim(),
        timestamp: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("[Contact API] Supabase error:", error.message)
      return NextResponse.json(
        { ok: false, error: "Failed to save message. Please try again." },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[Contact API] Server error:", err)
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or email us directly." },
      { status: 500 },
    )
  }
}
