"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/projects/data";

export default function EditorialWork() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const preview = hoverIdx !== null ? projects[hoverIdx] : null;

  return (
    <section
      id="work"
      className="w-full bg-white text-[#1a1612] px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/15"
    >
      <div className="max-w-[680px] mx-auto">
        <p
          className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Selected Work
        </p>
        <ul
          className="divide-y divide-[#1a1612]/10 relative"
          style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
        >
          {projects.map((p, i) => (
            <li
              key={p.title}
              className="py-5"
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
            >
              <Link href={p.href} className="grid grid-cols-[auto_1fr_auto] gap-6 items-baseline group">
                <span
                  className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a] whitespace-nowrap"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {p.year}
                </span>
                <span className="text-lg">
                  <span className="italic">{p.title}</span>
                  <span className="text-[#1a1612]/55"> — {p.tagline}</span>
                </span>
                <span className="text-[#5a3a1a] text-lg group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </li>
          ))}
        </ul>

        {preview && preview.image && (
          <div className="hidden xl:block fixed right-12 top-1/3 w-56 aspect-[4/3] border border-[#1a1612]/20 bg-white pointer-events-none z-40 shadow-sm">
            <Image
              src={preview.image}
              alt={preview.title}
              fill
              className={preview.isLogo ? "object-contain p-4" : "object-cover"}
            />
          </div>
        )}
      </div>
    </section>
  );
}
