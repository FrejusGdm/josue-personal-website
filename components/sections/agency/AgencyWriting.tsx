"use client";

import Link from "next/link";
import type { EssayMeta } from "@/lib/mdx";

const MONO_STYLE = { fontFamily: "var(--font-geist-mono), ui-monospace, monospace" };
const SANS_STYLE = { fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui" };

interface Props { essays: EssayMeta[]; }

export default function AgencyWriting({ essays }: Props) {
  if (essays.length === 0) return null;
  return (
    <section className="w-full bg-[#0a0a0a] text-[#e8e8e8] border-t border-white/10 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8 flex items-baseline justify-between">
        <p className="text-xs uppercase tracking-[0.15em] text-[#888]" style={MONO_STYLE}>
          Writing · Drag to scroll
        </p>
        <Link href="/writing" className="text-xs uppercase text-[#d4ff00] hover:text-white" style={MONO_STYLE}>
          All essays →
        </Link>
      </div>
      <div className="overflow-x-auto pl-6 md:pl-12">
        <div className="flex gap-3 pr-12" style={{ width: "max-content" }}>
          {essays.slice(0, 8).map((e, i) => (
            <Link
              key={e.slug}
              href={`/writing/${e.slug}`}
              className="w-[320px] md:w-[380px] shrink-0 p-6 bg-[#141414] border border-white/5 hover:border-[#d4ff00]/40 transition-colors"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#d4ff00] mb-4" style={MONO_STYLE}>
                → {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-xl leading-tight mb-4" style={SANS_STYLE}>
                {e.title}
              </div>
              <div className="text-xs uppercase text-[#888] tracking-wider" style={MONO_STYLE}>
                {new Date(e.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })} · {e.readTime}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
