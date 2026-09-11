import type { MetadataRoute } from "next";
import { routes, siteUrl } from "@/lib/site";
import { getAllEssays as getLocalEssays } from "@/lib/mdx";

// HTML pages only. Markdown twins and text sidecars stay out: search
// engines expect pages in a sitemap, not alternate formats. Demo routes
// stay out too (they carry noindex in their head).
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = routes
    .filter((route) => route.noindex !== true)
    .map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));

  // Local essays only: remote Substack essays redirect off-site, and
  // redirecting URLs do not belong in a sitemap. A feed failure must never
  // fail the build, so this degrades to no essay entries.
  let essayEntries: MetadataRoute.Sitemap = [];
  try {
    const essays = await getLocalEssays();
    essayEntries = essays.map((essay) => ({
      url: `${siteUrl}/writing/${essay.slug}`,
      lastModified: new Date(essay.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));
  } catch {
    essayEntries = [];
  }

  return [...staticEntries, ...essayEntries];
}
