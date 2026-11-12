import type { MetadataRoute } from "next"
import { absoluteUrl, routes } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const pages: { path: string; priority: number }[] = [
    { path: routes.home, priority: 1 },
    { path: routes.demo, priority: 0.9 },
    { path: routes.faq, priority: 0.7 },
    { path: routes.about, priority: 0.6 },
    { path: routes.contact, priority: 0.5 },
    { path: routes.press, priority: 0.4 },
    { path: routes.privacy, priority: 0.2 },
    { path: routes.terms, priority: 0.2 },
  ]

  return pages.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }))
}
