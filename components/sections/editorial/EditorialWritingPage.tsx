"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { EssayMeta } from "@/lib/mdx";
import { essayHref } from "@/lib/essay-link";

interface Props {
  essays: EssayMeta[];
}

const DISPLAY_STYLE = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };
const BODY_STYLE = { fontFamily: "var(--font-source-serif), Georgia, serif" };
const META_STYLE = { fontFamily: "var(--font-inter), sans-serif" };

function groupByYear(essays: EssayMeta[]): Array<[number, EssayMeta[]]> {
  const map = new Map<number, EssayMeta[]>();
  for (const essay of essays) {
    const year = new Date(essay.date).getFullYear();
    const existing = map.get(year);
    if (existing) {
      existing.push(essay);
    } else {
      map.set(year, [essay]);
    }
  }
  return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
}

export default function EditorialWritingPage({ essays }: Props) {
  const grouped = groupByYear(essays);

  return (
    <div className="bg-white text-[#1a1612]">
      <section className="w-full px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[680px] mx-auto"
        >
          <p
            className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8"
            style={META_STYLE}
          >
            Writing — Vol. I
          </p>
          <h1
            className="italic text-6xl md:text-8xl leading-[0.95] tracking-tight mb-12"
            style={DISPLAY_STYLE}
          >
            Essays.
          </h1>
          <p
            className="text-lg md:text-xl leading-[1.65] text-[#1a1612]/85"
            style={BODY_STYLE}
          >
            A running record of what I&apos;ve been reading, making, and thinking about.
          </p>
        </motion.div>
      </section>

      <section className="w-full px-6 md:px-12 pb-32 md:pb-40">
        <div className="max-w-[680px] mx-auto border-t border-[#1a1612]/15 pt-12">
          {grouped.length === 0 ? (
            <p
              className="italic text-lg text-[#1a1612]/60"
              style={BODY_STYLE}
            >
              Coming soon.
            </p>
          ) : (
            <div className="space-y-12">
              {grouped.map(([year, items]) => (
                <div key={year}>
                  <p
                    className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a] mb-4"
                    style={META_STYLE}
                  >
                    {year}
                  </p>
                  <ul
                    className="divide-y divide-[#1a1612]/10"
                    style={BODY_STYLE}
                  >
                    {items.map((essay) => {
                      const { href, external } = essayHref(essay);
                      const row = (
                        <div className="grid grid-cols-[1fr_auto] gap-6 items-baseline group">
                          <span className="italic text-lg group-hover:underline decoration-[#5a3a1a]/60 underline-offset-4">
                            {essay.title}
                          </span>
                          <span
                            className="text-xs text-[#1a1612]/50"
                            style={META_STYLE}
                          >
                            {essay.readTime}
                          </span>
                        </div>
                      );
                      return (
                        <li key={essay.slug} className="py-5">
                          {external ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block"
                            >
                              {row}
                            </a>
                          ) : (
                            <Link href={href} className="block">
                              {row}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer
        className="border-t border-[#1a1612]/15 px-6 md:px-12 py-12 text-sm text-[#1a1612]/55 text-center italic"
        style={BODY_STYLE}
      >
        Built with love by Josué.
      </footer>
    </div>
  );
}
