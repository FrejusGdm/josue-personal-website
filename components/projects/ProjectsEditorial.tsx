"use client";

import Link from "next/link";
import { projects } from "@/app/projects/data";

export default function ProjectsEditorial() {
  const byYear = new Map<string, typeof projects>();
  for (const p of projects) {
    const existing = byYear.get(p.year) ?? [];
    existing.push(p);
    byYear.set(p.year, existing);
  }

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1a1612] px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[680px] mx-auto">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          ← back
        </Link>

        <h1
          className="italic text-6xl md:text-7xl leading-[0.95] mt-8 mb-6"
          style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
        >
          Projects
        </h1>
        <p
          className="text-lg leading-[1.65] text-[#1a1612]/80 mb-16 max-w-[580px]"
          style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
        >
          A catalogue of things I&apos;ve built, researched, and shipped — in reverse chronological order.
        </p>

        {Array.from(byYear.entries()).map(([year, group]) => (
          <section key={year} className="mb-12">
            <p
              className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] border-b border-[#1a1612]/15 pb-2 mb-4"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {year}
            </p>
            <ul
              className="divide-y divide-[#1a1612]/10"
              style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
            >
              {group.map((p) => (
                <li key={p.title} className="py-4">
                  <Link href={p.href} className="grid grid-cols-[1fr_auto] gap-6 items-baseline group">
                    <span className="text-lg">
                      <span className="italic">{p.title}</span>
                      <span className="text-[#1a1612]/55"> — {p.tagline}</span>
                    </span>
                    <span className="text-[#5a3a1a] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  <p className="text-sm text-[#1a1612]/70 leading-relaxed mt-2 max-w-[580px]">{p.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
