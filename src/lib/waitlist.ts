export interface WaitlistEntry {
  email: string
  name?: string
  honeypot?: string
  timestamp: string
}

export type WaitlistStorage = "console" | "supabase" | "vercel-kv" | "resend"

function getStorage(): WaitlistStorage {
  return (process.env.WAITLIST_STORAGE as WaitlistStorage) || "console"
}

export async function storeWaitlistEntry(entry: WaitlistEntry): Promise<{ ok: boolean; error?: string }> {
  const storage = getStorage()

  try {
    switch (storage) {
      case "supabase": {
        const { createClient } = await import("@supabase/supabase-js")
        const supabase = createClient(
          process.env.SUPABASE_URL!,
          process.env.SUPABASE_ANON_KEY!,
        )
        const { error } = await supabase.from("waitlist").insert([entry])
        if (error) return { ok: false, error: error.message }
        return { ok: true }
      }

      case "vercel-kv": {
        const { kv } = await import("@vercel/kv")
        const key = `waitlist:${Date.now()}`
        await kv.set(key, entry)
        await kv.sadd("waitlist:all", key)
        return { ok: true }
      }

      case "resend": {
        const { Resend } = await import("resend")
        const resend = new Resend(process.env.RESEND_API_KEY!)
        await resend.contacts.create({
          email: entry.email,
          firstName: entry.name || "",
          audienceId: process.env.RESEND_AUDIENCE_ID!,
        })
        return { ok: true }
      }

      case "console":
      default:
        console.log("[Waitlist] New entry:", JSON.stringify(entry, null, 2))
        return { ok: true }
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error("[Waitlist] Storage error:", message)
    return { ok: false, error: "Storage error. Please try again." }
  }
}
