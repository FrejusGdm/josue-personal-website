"use client";

import type { EssayMeta } from "@/lib/mdx";
import AgencyHero from "@/components/heroes/AgencyHero";
import AgencyBio from "./AgencyBio";
import AgencyWork from "./AgencyWork";
import AgencyHonors from "./AgencyHonors";
import AgencyWriting from "./AgencyWriting";

interface Props { essays: EssayMeta[]; }

const MONO_STYLE = { fontFamily: "var(--font-geist-mono), ui-monospace, monospace" };
const SANS_STYLE = { fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui" };

export default function AgencyHome({ essays }: Props) {
  return (
    <div className="bg-[#0a0a0a] text-[#e8e8e8]">
      <AgencyHero />
      <AgencyBio />
      <AgencyWork />
      <AgencyHonors />
      <AgencyWriting essays={essays} />
      <footer className="border-t border-white/10 px-6 md:px-12 py-24">
        <div className="max-w-[1400px] mx-auto">
          <a
            href="mailto:josue@useecho.ai"
            className="block font-medium tracking-[-0.04em] hover:text-[#d4ff00] transition-colors"
            style={{ ...SANS_STYLE, fontSize: "clamp(3rem, 10vw, 8rem)", lineHeight: 0.9 }}
          >
            GET IN TOUCH ↗
          </a>
          <div
            className="flex justify-between mt-12 text-xs uppercase text-[#888]"
            style={MONO_STYLE}
          >
            <span>josue@useecho.ai</span>
            <span>© 2026 · JG</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
