"use client";

import { honors, involvement } from "@/content/home";

const MONO_STYLE = { fontFamily: "var(--font-geist-mono), ui-monospace, monospace" };
const SANS_STYLE = { fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui" };

export default function AgencyHonors() {
  const tileSizes = [
    "md:col-span-6 md:row-span-2",
    "md:col-span-6 md:row-span-2",
    "md:col-span-4",
    "md:col-span-4",
    "md:col-span-4",
  ];

  return (
    <section className="w-full bg-[#0a0a0a] text-[#e8e8e8] border-t border-white/10 px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <p className="text-xs uppercase tracking-[0.15em] text-[#888]" style={MONO_STYLE}>
            Awards · Recognition
          </p>
          <p className="text-xs text-[#888]" style={MONO_STYLE}>
            {honors.length.toString().padStart(2, "0")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-3 auto-rows-min">
          {honors.map((h, i) => (
            <div
              key={h.title}
              className={`p-6 bg-[#141414] border border-white/5 hover:border-[#d4ff00]/40 transition-colors ${
                tileSizes[i] ?? "md:col-span-4"
              }`}
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#d4ff00] mb-3" style={MONO_STYLE}>
                → {String(i + 1).padStart(2, "0")} / {honors.length.toString().padStart(2, "0")}
              </div>
              <div className="text-xl md:text-2xl leading-tight mb-2" style={SANS_STYLE}>
                {h.title}
              </div>
              <div className="text-xs uppercase text-[#888] mb-4 tracking-wider" style={MONO_STYLE}>
                {h.organization} · {h.date}
              </div>
              <p className="text-sm text-[#b8b8b8] leading-[1.5]" style={SANS_STYLE}>
                {h.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex items-baseline justify-between mb-8">
          <p className="text-xs uppercase tracking-[0.15em] text-[#888]" style={MONO_STYLE}>
            Leadership · Involvement
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {involvement.map((item) => (
            <div key={item.role + item.organization} className="p-6 bg-[#141414] border border-white/5">
              <div className="text-lg mb-1" style={SANS_STYLE}>
                {item.role}
              </div>
              <div className="text-xs uppercase text-[#d4ff00] tracking-wider mb-3" style={MONO_STYLE}>
                {item.organization} · {item.date}
              </div>
              <p className="text-sm text-[#b8b8b8] leading-[1.5]" style={SANS_STYLE}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
