"use client";

import type { EssayMeta } from "@/lib/mdx";
import Link from "next/link";
import { essayHref } from "@/lib/essay-link";
import { useLanguage } from "@/components/language/LanguageProvider";

interface Props { essays: EssayMeta[]; }

export default function EditorialWriting({ essays }: Props) {
  const { t } = useLanguage();
  if (essays.length === 0) return null;
  return (
    <section className="w-full bg-white text-[#1a1612] px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/15">
      <div className="max-w-[680px] mx-auto">
        <p
          className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {t.sections.recentWriting}
        </p>
        <ul
          className="divide-y divide-[#1a1612]/10"
          style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
        >
          {essays.slice(0, 5).map((e) => {
            const { href, external } = essayHref(e);
            const inner = (
              <div className="grid grid-cols-[auto_1fr_auto] gap-6 items-baseline group">
                <span
                  className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {new Date(e.date).getFullYear()}
                </span>
                <span className="text-lg group-hover:underline decoration-[#5a3a1a]/60 underline-offset-4">
                  {e.title}
                </span>
                <span
                  className="text-xs text-[#1a1612]/50"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {e.readTime}
                </span>
              </div>
            );
            return (
              <li key={e.slug} className="py-5">
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {inner}
                  </a>
                ) : (
                  <Link href={href} className="block">
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <Link
          href="/writing"
          className="inline-block mt-10 text-[#5a3a1a] underline underline-offset-4"
        >
          {t.common.allEssays}
        </Link>
      </div>
    </section>
  );
}
