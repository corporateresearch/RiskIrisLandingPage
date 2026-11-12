/**
 * Basic in-memory rate limit: a fixed number of submissions per IP address
 * per window. Memory is per server instance, so on serverless hosting this
 * slows down a burst from one address rather than enforcing a global cap.
 */
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const MAX_TRACKED = 5000

const hits = new Map<string, number[]>()

export function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
  return forwarded || request.headers.get("x-real-ip") || "unknown"
}

export function isRateLimited(key: string, now = Date.now()) {
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS)

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent)
    return true
  }

  recent.push(now)
  hits.set(key, recent)

  if (hits.size > MAX_TRACKED) {
    for (const [storedKey, times] of hits) {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(storedKey)
    }
  }
  return false
}
