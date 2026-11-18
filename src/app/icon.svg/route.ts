import { themeColor } from "@/lib/theme"

export const dynamic = "force-static"

/** Favicon generated from the brand shield-and-iris emblem and colour tokens. */
export function GET() {
  const brand = themeColor("brand")
  const brandStrong = themeColor("brand-strong")
  const brandSoft = themeColor("brand-soft")
  const accent = themeColor("accent")

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${brand}"/>
      <stop offset="100%" stop-color="${brandStrong}"/>
    </linearGradient>
    <linearGradient id="shieldGrad" x1="32" y1="6" x2="32" y2="58" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${brandSoft}" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="${brand}" stop-opacity="0.4"/>
    </linearGradient>
    <linearGradient id="irisGrad" x1="16" y1="16" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="60%" stop-color="${brandSoft}"/>
      <stop offset="100%" stop-color="${brand}"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="16" fill="url(#bgGrad)"/>
  <path d="M32 10L14 18V30C14 42.5 21.7 51.5 32 54C42.3 51.5 50 42.5 50 30V18L32 10Z" stroke="url(#shieldGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="${brandStrong}" fill-opacity="0.6"/>
  <path d="M19 32C22.5 24 27.5 20.5 32 20.5C36.5 20.5 41.5 24 45 32C41.5 40 36.5 43.5 32 43.5C27.5 43.5 22.5 40 19 32Z" stroke="url(#irisGrad)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="32" cy="32" r="7.5" stroke="${accent}" stroke-width="1.8" stroke-dasharray="4 2.5" opacity="0.9"/>
  <circle cx="32" cy="32" r="3.8" fill="${accent}"/>
  <circle cx="32" cy="18.5" r="1.2" fill="${accent}"/>
  <circle cx="32" cy="45.5" r="1.2" fill="${accent}"/>
</svg>`

  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" },
  })
}
