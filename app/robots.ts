import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// AI crawlers are named explicitly so nobody later reads an ambiguous
// default rule as a block. Everything is allowed unless there is a reason
// to hide it; hidden routes carry noindex in their own head instead.
const aiBots = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "Cohere-ai",
  "Diffbot",
  "FacebookBot",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((bot) => ({ userAgent: bot, allow: "/" })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
