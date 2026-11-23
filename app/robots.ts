import type { MetadataRoute } from "next";
import { websiteMetadata } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${websiteMetadata.url}/sitemap.xml`,
  };
}
