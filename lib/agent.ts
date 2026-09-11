import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { hero, heroEditorialIntro, bio } from "@/content/home";
import {
  researchHeader,
  researchBio,
  researchAreas,
  publications,
  talks,
  training,
} from "@/content/research";
import { projects } from "@/app/projects/data";
import { honors, involvement } from "@/content/honors";
import { GALLERY_ITEMS } from "@/app/gallery/data";
import { getAllEssays } from "@/lib/essays";
import type { EssayMeta } from "@/lib/mdx";
import {
  absoluteUrl,
  routes,
  siteDescription,
  siteName,
  siteUrl,
} from "./site";

// Agent-readable content, generated from the same modules that render the
// HTML pages — never a second copy maintained by hand.

async function allEssaysSafe(): Promise<EssayMeta[]> {
  try {
    return await getAllEssays();
  } catch {
    return [];
  }
}

function linkLine(title: string, pagePath: string, blurb?: string): string {
  return `- [${title}](${absoluteUrl(pagePath)})${blurb ? ` — ${blurb}` : ""}`;
}

/** Curated index for AI agents: what the site is and where things live. */
export function llmsIndex(essays: EssayMeta[]): string {
  const lines: string[] = [
    `# ${siteName}`,
    "",
    `> ${siteDescription}`,
    "",
    "## Pages",
    "",
  ];
  for (const route of routes.filter((route) => route.noindex !== true)) {
    lines.push(linkLine(route.title, route.path, route.description));
  }
  lines.push("", "## Essays", "");
  if (essays.length === 0) {
    lines.push("No essays published yet.");
  } else {
    for (const essay of essays) {
      const href =
        essay.source === "substack" && essay.substackUrl
          ? essay.substackUrl
          : absoluteUrl(`/writing/${essay.slug}`);
      lines.push(`- [${essay.title}](${href}) — ${essay.description}`);
    }
  }
  lines.push(
    "",
    "## Notes",
    "",
    "- Each page has a markdown twin at the same path with `.md` appended",
    "  (for example `/research.md` for `/research`). Prefer the `.md` copy.",
    "- `llms-full.txt` contains the full content of every page in one fetch.",
    ""
  );
  return lines.join("\n");
}

function homeMarkdown(): string {
  const bioText = bio.paragraphs
    .map((paragraph) => `### ${paragraph.label}\n\n${paragraph.text}`)
    .join("\n\n");
  return [
    `# ${hero.name}`,
    "",
    `> ${hero.tagline}`,
    "",
    heroEditorialIntro,
    "",
    bioText,
    "",
    bio.nowEdgeClosing,
    "",
    `— ${bio.signature}`,
    "",
  ].join("\n");
}

function researchMarkdown(): string {
  const affiliations = researchHeader.affiliations
    .map((affiliation) =>
      `- ${affiliation.label.en}${affiliation.detail.en ? `, ${affiliation.detail.en}` : ""}`
    )
    .join("\n");
  const pubs = publications
    .map(
      (pub) =>
        `- ${pub.title} — ${pub.authors} ${pub.venue}${pub.status ? ` (${pub.status})` : ""}`
    )
    .join("\n");
  const talkLines = talks
    .map((talk) => `- ${talk.venue}, ${talk.location.en} (${talk.date.en})`)
    .join("\n");
  const trainingLines = training
    .map((item) => `- ${item.name}, ${item.program.en} — ${item.detail.en}`)
    .join("\n");
  return [
    `# Research — ${researchHeader.name}`,
    "",
    affiliations,
    "",
    `${researchBio.firstParagraph.before.en}[${researchBio.firstParagraph.link.label}](${researchBio.firstParagraph.link.href})${researchBio.firstParagraph.after.en}`,
    "",
    researchBio.secondParagraph.en,
    "",
    "## Areas",
    "",
    ...researchAreas.map((area) => `- ${area.en}`),
    "",
    "## Publications",
    "",
    pubs || "None listed yet.",
    "",
    "## Talks",
    "",
    talkLines || "None listed yet.",
    "",
    "## Training",
    "",
    trainingLines || "None listed yet.",
    "",
  ].join("\n");
}

function projectsIndexMarkdown(): string {
  const lines = ["# Projects", ""];
  for (const project of projects) {
    const href = project.href.startsWith("http")
      ? project.href
      : absoluteUrl(project.href);
    lines.push(
      `## [${project.title}](${href})`,
      "",
      `*${project.tagline.en} — ${project.year}, ${project.status.en}*`,
      "",
      project.description.en,
      "",
      `Tags: ${project.tags.join(", ")}`,
      ""
    );
  }
  return lines.join("\n");
}

function projectMarkdown(pagePath: string): string | null {
  const project = projects.find((item) => item.href === pagePath);
  if (!project) return null;
  return [
    `# ${project.title}`,
    "",
    `*${project.tagline.en} — ${project.year}, ${project.status.en}*`,
    "",
    project.description.en,
    "",
    `Tags: ${project.tags.join(", ")}`,
    "",
    project.href.startsWith("http")
      ? `Live at ${project.href}.`
      : `See it at ${absoluteUrl(project.href)}.`,
    "",
  ].join("\n");
}

function writingIndexMarkdown(essays: EssayMeta[]): string {
  const lines = [
    "# Writing",
    "",
    "Essays on Tech, language, and whatever else I feel like writing about.",
    "",
  ];
  for (const essay of essays) {
    const href =
      essay.source === "substack" && essay.substackUrl
        ? essay.substackUrl
        : absoluteUrl(`/writing/${essay.slug}`);
    lines.push(
      `## [${essay.title}](${href})`,
      "",
      `*${essay.date} · ${essay.readTime}*`,
      "",
      essay.description,
      ""
    );
  }
  return lines.join("\n");
}

function essayMarkdown(slug: string): string | null {
  const filePath = path.join(process.cwd(), "content", "essays", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return [
    `# ${String(data.title ?? slug)}`,
    "",
    data.description ? `> ${String(data.description)}` : "",
    "",
    data.date ? `*${String(data.date)}*` : "",
    "",
    content.trim(),
    "",
  ].join("\n");
}

function galleryMarkdown(): string {
  const lines = [
    "# Gallery",
    "",
    "A cinematic stream of moments. Click on any photo to view details.",
    "",
  ];
  for (const item of GALLERY_ITEMS) {
    lines.push(
      `- *${item.date}, ${item.location}* — ${item.caption} (${item.src})`
    );
  }
  lines.push("");
  return lines.join("\n");
}

function honorsMarkdown(): string {
  const lines = ["# Honors and Involvement", ""];
  lines.push("## Honors", "");
  for (const honor of honors) {
    lines.push(
      `### ${honor.title}`,
      "",
      `*${honor.organization} — ${honor.date.en}*`,
      "",
      honor.description.en,
      ""
    );
  }
  lines.push("## Involvement", "");
  for (const item of involvement) {
    lines.push(
      `### ${item.role.en}, ${item.organization}`,
      "",
      `*${item.date.en}*`,
      "",
      item.description.en,
      ""
    );
  }
  return lines.join("\n");
}

/** Markdown twin for one page path, or null when the path has no twin. */
export async function pageMarkdown(pagePath: string): Promise<string | null> {
  const normalized = pagePath === "/index" ? "/" : pagePath;
  if (normalized === "/") return homeMarkdown();
  if (normalized === "/research") return researchMarkdown();
  if (normalized === "/projects") return projectsIndexMarkdown();
  if (normalized === "/writing")
    return writingIndexMarkdown(await allEssaysSafe());
  if (normalized === "/gallery") return galleryMarkdown();
  if (normalized === "/honors") return honorsMarkdown();
  if (normalized.startsWith("/projects/")) return projectMarkdown(normalized);
  if (normalized.startsWith("/writing/")) {
    const slug = normalized.slice("/writing/".length);
    if (!slug || slug.includes("/")) return null;
    // Remote essays live on Substack; only local essays have twins here.
    const essays = await allEssaysSafe();
    const meta = essays.find((essay) => essay.slug === slug);
    if (meta && meta.source !== "local") {
      return [
        `# ${meta.title}`,
        "",
        `> ${meta.description}`,
        "",
        `This essay is published on Substack: ${meta.substackUrl ?? absoluteUrl(normalized)}.`,
        "",
      ].join("\n");
    }
    return essayMarkdown(slug);
  }
  return null;
}

/** Everything on the site in one fetch, for agents. */
export async function fullMarkdown(): Promise<string> {
  const essays = await allEssaysSafe();
  const sections: string[] = [
    `# ${siteName} — full site content`,
    "",
    `Canonical site: ${siteUrl}`,
    "",
    "---",
    "",
    homeMarkdown(),
    "---",
    "",
    researchMarkdown(),
    "---",
    "",
    projectsIndexMarkdown(),
    "---",
    "",
    writingIndexMarkdown(essays),
    "---",
    "",
    honorsMarkdown(),
  ];
  return sections.join("\n");
}
