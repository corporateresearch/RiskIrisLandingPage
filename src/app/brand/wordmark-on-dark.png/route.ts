import { wordmarkImage } from "@/lib/brand-image"

export const dynamic = "force-static"

export function GET() {
  return wordmarkImage("dark")
}
