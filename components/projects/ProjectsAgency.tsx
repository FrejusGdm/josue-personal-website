"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/projects/data";

const MONO_STYLE = { fontFamily: "var(--font-geist-mono), ui-monospace, monospace" };
const SANS_STYLE = { fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui" };

export default function ProjectsAgency() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8] px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.15em] text-[#888] hover:text-[#d4ff00]"
          style={MONO_STYLE}
        >
          ← back
        </Link>

        <div className="mt-10 grid grid-cols-12 gap-4 items-end mb-16">
          <h1
            className="col-span-12 md:col-span-9 font-medium tracking-[-0.04em] leading-[0.9]"
            style={{ ...SANS_STYLE, fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          >
            PROJECTS.
          </h1>
          <div className="col-span-12 md:col-span-3 text-xs uppercase text-[#888]" style={MONO_STYLE}>
            · {projects.length.toString().padStart(2, "0")} TOTAL
            <br />· 2024 — 2026
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {projects.map((p, i) => {
            const span = i < 2 ? "md:col-span-6" : i < 4 ? "md:col-span-6" : "md:col-span-4";
            return (
              <Link
                key={p.title}
                href={p.href}
                className={`${span} group relative p-6 bg-[#141414] border border-white/5 hover:border-[#d4ff00]/40 transition-colors block`}
              >
                <div
                  className="text-[10px] uppercase tracking-[0.2em] text-[#d4ff00] mb-3"
                  style={MONO_STYLE}
                >
                  → {String(i + 1).padStart(2, "0")} / {projects.length.toString().padStart(2, "0")}
                </div>
                {p.image && (
                  <div className="relative aspect-[16/9] overflow-hidden mb-4 bg-[#0a0a0a]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className={`${
                        p.isLogo ? "object-contain p-8" : "object-cover"
                      } group-hover:scale-[1.02] transition-transform duration-700`}
                    />
                  </div>
                )}
                <div
                  className="text-2xl md:text-3xl font-medium tracking-[-0.02em] mb-2 group-hover:text-[#d4ff00] transition-colors"
                  style={SANS_STYLE}
                >
                  {p.title}
                </div>
                <div className="text-xs uppercase text-[#888] tracking-wider mb-3" style={MONO_STYLE}>
                  {p.year} · {p.tagline}
                </div>
                <p className="text-sm text-[#b8b8b8] leading-[1.5]" style={SANS_STYLE}>
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase px-2 py-1 border border-white/10 text-[#888]"
                      style={MONO_STYLE}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
