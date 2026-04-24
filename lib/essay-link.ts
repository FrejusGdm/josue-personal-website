import type { EssayMeta } from "./mdx";

export type EssayLink = {
  href: string;
  external: boolean;
};

export function essayHref(essay: EssayMeta): EssayLink {
  if (essay.source === "substack" && essay.substackUrl) {
    return { href: essay.substackUrl, external: true };
  }
  return { href: `/writing/${essay.slug}`, external: false };
}
