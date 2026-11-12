import type { Metadata } from "next"
import { site } from "./site"

/** The generated share image (src/app/opengraph-image.tsx). */
export const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name}: adverse media and sanctions screening`,
}

/** Open Graph and Twitter fields shared by every page. */
export function socialMetadata(
  title: string,
  description: string,
  path: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage],
    },
  }
}

/** Per-page metadata with a canonical URL and matching social fields. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    ...socialMetadata(`${title} | ${site.name}`, description, path),
  }
}
