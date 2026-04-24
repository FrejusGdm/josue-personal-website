"use client";

import type { EssayMeta } from "@/lib/mdx";
import Link from "next/link";

interface Props { essays: EssayMeta[]; }

export default function EditorialWriting({ essays }: Props) {
  if (essays.length === 0) return null;
  return (
    <section className="w-full bg-[#faf7f2] text-[#1a1612] px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/15">
      <div className="max-w-[680px] mx-auto">
        <p
          className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Recent Writing
        </p>
        <ul
          className="divide-y divide-[#1a1612]/10"
          style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
        >
          {essays.slice(0, 5).map((e) => (
            <li key={e.slug} className="py-5">
              <Link
                href={`/writing/${e.slug}`}
                className="grid grid-cols-[auto_1fr_auto] gap-6 items-baseline group"
              >
                <span
                  className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {new Date(e.date).getFullYear()}
                </span>
                <span className="italic text-lg group-hover:underline decoration-[#5a3a1a]/60 underline-offset-4">
                  {e.title}
                </span>
                <span
                  className="text-xs text-[#1a1612]/50"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {e.readTime}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/writing"
          className="inline-block mt-10 italic text-[#5a3a1a] underline underline-offset-4"
        >
          → all essays
        </Link>
      </div>
    </section>
  );
}
