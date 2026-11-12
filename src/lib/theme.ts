import { readFileSync } from "node:fs"
import { join } from "node:path"

/**
 * Reads the colour tokens from globals.css so generated images (icon,
 * wordmarks, Open Graph image, quote card) use the same palette as the
 * site. Light values come from the @theme block and dark values from the
 * [data-theme="dark"] block. Server-only; used by static routes.
 */
type Palette = Record<string, string>
let cache: { light: Palette; dark: Palette } | null = null

function parse(block: string) {
  const colors: Palette = {}
  for (const match of block.matchAll(/--color-([a-z-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g)) colors[match[1]] = match[2]
  return colors
}

function load() {
  if (cache) return cache
  const css = readFileSync(join(process.cwd(), "src/app/globals.css"), "utf8")
  const darkStart = css.indexOf('\n[data-theme="dark"] {')
  const darkEnd = css.indexOf("}", darkStart)
  const light = parse(css.slice(0, darkStart))
  cache = { light, dark: { ...light, ...parse(css.slice(darkStart, darkEnd)) } }
  return cache
}

export function themeColor(token: string, mode: "light" | "dark" = "light") {
  const value = load()[mode][token]
  if (!value) throw new Error(`Colour token --color-${token} is not defined in globals.css`)
  return value
}
