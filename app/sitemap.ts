import type { MetadataRoute } from "next";
import { projects, siteUpdated, websiteMetadata } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteUpdated);
  const projectPages = projects
    .filter((project) => project.slug)
    .map((project) => ({
      url: `${websiteMetadata.url}/projects/${project.slug}`,
      lastModified,
    }));

  return [{ url: websiteMetadata.url, lastModified }, ...projectPages];
}
