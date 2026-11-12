import { ImageResponse } from "next/og"
import { headingFont } from "@/lib/brand-image"
import { monogram } from "@/lib/site"
import { themeColor } from "@/lib/theme"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default async function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: themeColor("brand"),
        color: themeColor("on-brand"),
        fontFamily: "Bricolage",
        fontSize: monogram.length > 1 ? 78 : 104,
        letterSpacing: "-0.03em",
      }}
    >
      {monogram}
    </div>,
    { ...size, fonts: await headingFont() },
  )
}
