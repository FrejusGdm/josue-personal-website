import type { Metadata } from "next";

// Canonical origin. Every absolute link (sitemap, canonicals, llms.txt)
// is built from this. Set NEXT_PUBLIC_SITE_URL in production; the
// fallback matches the confirmed domain (decided 2026-09-10).
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://josuegodeme.com";

if (!process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn(
    "[site] NEXT_PUBLIC_SITE_URL is not set; falling back to https://josuegodeme.com."
  );
}

// A localhost address must never ship to production: it would poison the
// sitemap, canonical links, and agent files. Fail the build instead.
if (
  process.env.NODE_ENV === "production" &&
  /localhost|127\.0\.0\.1/.test(siteUrl)
) {
  throw new Error(
    `[site] siteUrl points at localhost in a production build: ${siteUrl}`
  );
}

export const siteName = "Josué Godeme";
export const siteDescription =
  "Dartmouth student building multilingual AI, voice technology, and edge AI for education.";

export interface SiteRoute {
  path: string;
  title: string;
  description: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
  /** Hidden from search and from the sitemap (demo and experiment routes). */
  noindex?: boolean;
}

// Single source of truth: adding a page means adding one row here. The row
// drives the page head, the sitemap entry, the llms.txt index, and the
// markdown twin advertisement.
export const routes: SiteRoute[] = [
  {
    path: "/",
    title: "Josué Godeme — Researcher and Builder",
    description: siteDescription,
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    path: "/research",
    title: "Research — Josué Godeme",
    description:
      "Research at the intersection of multilingual AI, voice technologies, and education.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/projects",
    title: "Projects — Josué Godeme",
    description:
      "Voice-first learning apps, edge AI systems, and tools that solve real problems.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/projects/orphi",
    title: "Orphi — Josué Godeme",
    description:
      "Echo reborn. An AI language companion that feels like a friend — witty, proactive, and voice-first.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/projects/who-do-you-know",
    title: "WhoDoYouKnow — Josué Godeme",
    description:
      "Finds out who you actually know from your Gmail by scanning email threads, identifying real contacts, and enriching them with AI.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/projects/echo",
    title: "Echo — Josué Godeme",
    description:
      "A speech focused language learning app that brings immersion back through real conversations instead of flashcards.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/projects/calendai",
    title: "Calendai — Josué Godeme",
    description:
      "Centralizes college life by scraping syllabi, Canvas, and professor websites, then auto syncing every assignment and exam to Google Calendar.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/projects/nexus",
    title: "Nexus Footwear — Josué Godeme",
    description:
      "The full e-commerce platform for a custom 3D-printed shoe company, with Stripe payments.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/projects/forge",
    title: "Forge — Josué Godeme",
    description:
      "Type a prompt, pick your material and profile, and get an interactive 3D keycap model.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/projects/sovereign-signatures",
    title: "Sovereign Signatures — Josué Godeme",
    description:
      "A pattern recognition experience that reveals your innate pattern of genius.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/projects/homy",
    title: "Homy Robotics — Josué Godeme",
    description:
      "The full voice pipeline (STT to LLM to TTS) for companion robots in seniors' homes.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/projects/parsimmon",
    title: "Parsimmon — Josué Godeme",
    description:
      "A local parsing engine turned into a multi-tenant cloud service with org-scoped auth and Stripe billing.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/projects/davis-peace-project",
    title: "Davis Peace Project — Josué Godeme",
    description:
      "Language documentation workshops in Benin that created the first translation dataset for the Adja language.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/projects/stamps",
    title: "Stamps Scholar Research — Josué Godeme",
    description:
      "A multi year effort to build a 10,000+ sentence French-Adja corpus and a neural machine translation system.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/writing",
    title: "Writing — Josué Godeme",
    description:
      "Essays on Tech, language, and whatever else I feel like writing about.",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/gallery",
    title: "Gallery — Josué Godeme",
    description:
      "Moments captured through a lens, from Hanover, New Hampshire and beyond.",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    path: "/honors",
    title: "Honors and Involvement — Josué Godeme",
    description: "Honors, awards, leadership, and involvement.",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  // Experiment and alternate-layout routes: real pages, but not content
  // anyone should land on from search.
  {
    path: "/projects/project-a",
    title: "Project A — Josué Godeme",
    description: "A design experiment for project pages.",
    changeFrequency: "yearly",
    priority: 0.1,
    noindex: true,
  },
];

export function routeFor(path: string): SiteRoute | undefined {
  return routes.find((route) => route.path === path);
}

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path}`;
}

/** Markdown twin path for a page: /research -> /research.md, / -> /index.md */
export function markdownPathFor(pagePath: string): string {
  return pagePath === "/" ? "/index.md" : `${pagePath}.md`;
}

/** Full per-page head for a route-table path. */
export function pageMetadata(path: string): Metadata {
  const route = routeFor(path);
  const title = route?.title ?? siteName;
  const description = route?.description ?? siteDescription;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      types: { "text/markdown": markdownPathFor(path) },
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots:
      route?.noindex === true
        ? { index: false, follow: false }
        : { index: true, follow: true },
  };
}

export function personJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Josué Godeme",
    url: siteUrl,
    jobTitle: "Computer Science Student and Builder",
    alumniOf: { "@type": "CollegeOrUniversity", name: "Dartmouth College" },
    knowsAbout: [
      "Multilingual NLP",
      "Voice AI",
      "Edge AI",
      "Education technology",
    ],
    sameAs: [
      "https://www.linkedin.com/in/josue-godeme-58abb2196/",
      "https://scholar.google.com/citations?user=Se77iHUAAAAJ&hl=en&oi=ao",
    ],
  };
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    author: { "@type": "Person", name: "Josué Godeme" },
    inLanguage: "en",
  };
}

export function webPageJsonLd(path: string): Record<string, unknown> {
  const route = routeFor(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: route?.title ?? siteName,
    description: route?.description ?? siteDescription,
    url: absoluteUrl(path),
    isPartOf: { "@type": "WebSite", name: siteName, url: siteUrl },
    inLanguage: "en",
  };
}

export function articleJsonLd(input: {
  path: string;
  title: string;
  description: string;
  datePublished: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    url: absoluteUrl(input.path),
    author: { "@type": "Person", name: "Josué Godeme", url: siteUrl },
    inLanguage: "en",
  };
}
