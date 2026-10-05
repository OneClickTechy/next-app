import type { Metadata } from "next";
import { site } from "@/lib/site";

const siteUrl = "https://mggoldmart.com";

export function pageMetadata(title: string, description: string, path: string, image = "/assets/images/about-us.jpg"): Metadata {
  const url = new URL(path, siteUrl).toString();
  const imageUrl = new URL(image, siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      type: "website",
      siteName: site.name,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: "MG Gold Mart, Coimbatore" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [imageUrl],
    },
  };
}
