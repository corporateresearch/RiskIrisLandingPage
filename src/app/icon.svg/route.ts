import { monogram } from "@/lib/site"
import { themeColor } from "@/lib/theme"

export const dynamic = "force-static"

/** Favicon generated from the brand initials and colour tokens. */
export function GET() {
  const fontSize = monogram.length > 1 ? 27 : 36
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="16" fill="${themeColor("brand")}"/>
  <text x="32" y="33" fill="${themeColor("on-brand")}" font-family="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="700" text-anchor="middle" dominant-baseline="central" letter-spacing="-1">${monogram}</text>
</svg>`

  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" },
  })
}
