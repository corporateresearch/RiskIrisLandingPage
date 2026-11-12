import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { monogram, site } from "./site"
import { themeColor } from "./theme"

/** Shared pieces for generated brand images (icon, wordmarks, Open Graph image). */

export async function headingFont() {
  const data = await readFile(join(process.cwd(), "src/assets/fonts/Sora-SemiBold.ttf"))
  return [{ name: "Sora", data, style: "normal" as const, weight: 600 as const }]
}

export function Monogram({ size, onInk = false }: { size: number; onInk?: boolean }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.25,
        background: onInk ? themeColor("on-ink") : themeColor("brand"),
        color: onInk ? themeColor("ink") : themeColor("on-brand"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * (monogram.length > 1 ? 0.42 : 0.56),
        fontFamily: "Sora",
        letterSpacing: "-0.03em",
      }}
    >
      {monogram}
    </div>
  )
}

/** Rough advance widths in em for the heading font, used to size the wordmark canvas. */
function estimateTextWidth(text: string, fontSize: number) {
  let em = 0
  for (const char of text) {
    if (char === " ") em += 0.28
    else if ("iIjl.,'!|".includes(char)) em += 0.3
    else if ("mwMW".includes(char)) em += 0.92
    else if ("frt".includes(char)) em += 0.42
    else if (char >= "A" && char <= "Z") em += 0.72
    else em += 0.6
  }
  return em * fontSize
}

/** Transparent PNG wordmark for use on a light or dark background. */
export async function wordmarkImage(background: "light" | "dark") {
  const onInk = background === "dark"
  const height = 240
  const mark = 160
  const gap = 36
  const fontSize = 112
  const width = Math.round(40 + mark + gap + estimateTextWidth(site.name, fontSize) + 40)

  return new ImageResponse(
    <div
      style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap }}
    >
      <Monogram size={mark} onInk={onInk} />
      <div
        style={{
          fontFamily: "Sora",
          fontSize,
          letterSpacing: "-0.03em",
          whiteSpace: "nowrap",
          color: onInk ? themeColor("on-ink") : themeColor("heading"),
        }}
      >
        {site.name}
      </div>
    </div>,
    { width, height, fonts: await headingFont() },
  )
}
