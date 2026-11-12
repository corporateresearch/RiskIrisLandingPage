import { ImageResponse } from "next/og"
import { headingFont, Monogram } from "@/lib/brand-image"
import { shareImage } from "@/lib/metadata"
import { counts, site } from "@/lib/site"
import { themeColor } from "@/lib/theme"

export const alt = shareImage.alt
export const size = { width: shareImage.width, height: shareImage.height }
export const contentType = "image/png"

export default async function OpenGraphImage() {
  const stats = [
    `${counts.sanctionsLists} official sanctions lists`,
    `${counts.riskCategories} risk categories`,
    `${counts.languages} languages`,
  ]

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: themeColor("ink"),
        color: themeColor("on-ink"),
        fontFamily: "Sora",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <Monogram size={72} onInk />
        <div style={{ fontSize: 40, letterSpacing: "-0.02em" }}>{site.name}</div>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", fontSize: 78, lineHeight: 1.08, letterSpacing: "-0.03em" }}
      >
        <div>Screen every name.</div>
        <div style={{ color: themeColor("brand-on-ink") }}>Defend every decision.</div>
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        {stats.map((stat) => (
          <div
            key={stat}
            style={{
              display: "flex",
              padding: "12px 22px",
              borderRadius: 999,
              border: `2px solid ${themeColor("on-ink-muted")}`,
              color: themeColor("on-ink"),
              fontSize: 24,
            }}
          >
            {stat}
          </div>
        ))}
      </div>
    </div>,
    { ...size, fonts: await headingFont() },
  )
}
