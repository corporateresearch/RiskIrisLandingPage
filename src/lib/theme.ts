import { readFileSync } from "node:fs"
import { join } from "node:path"

/**
 * Reads the colour tokens from the @theme block in globals.css so generated
 * images (icon, wordmarks, Open Graph image) use the same palette as the
 * site. Server-only, and only called from statically generated routes.
 */
let cache: Record<string, string> | null = null

export function themeColors() {
  if (cache) return cache
  const css = readFileSync(join(process.cwd(), "src/app/globals.css"), "utf8")
  const colors: Record<string, string> = {}
  for (const match of css.matchAll(/--color-([a-z-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g)) {
    colors[match[1]] = match[2]
  }
  cache = colors
  return colors
}

export function themeColor(token: string) {
  const value = themeColors()[token]
  if (!value) throw new Error(`Colour token --color-${token} is not defined in globals.css`)
  return value
}
