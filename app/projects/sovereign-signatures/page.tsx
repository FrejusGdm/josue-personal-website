"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ProjectEditorialFrame from "@/components/sections/editorial/ProjectEditorialFrame";

export default function SovereignSignaturesPage() {
  return (
    <ProjectEditorialFrame className="min-h-screen bg-white selection:bg-neutral-100">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Projects
        </Link>

        {/* Header — RE soul style: airy, serif, labyrinth vibe */}
        <header className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4 text-xs font-sans tracking-[0.18em] uppercase text-neutral-400">
            <span className="w-6 h-px bg-neutral-300" />
            RE soul — SovereignSignatures
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-neutral-900 mb-3 tracking-tight leading-[0.95]">
            SovereignSignatures
          </h1>
          <p className="text-xl font-sans font-light text-neutral-600 leading-relaxed mb-2">
            Discover Who You Already Are.
          </p>
          <p className="text-[11px] font-sans tracking-[0.18em] uppercase text-neutral-400 mb-6">A Pattern Recognition Experience</p>
          <a
            href="https://www.sovereignsignatures.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors border-b border-neutral-900/15 hover:border-neutral-900 pb-0.5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            sovereignsignatures.ai
          </a>
        </header>

        {/* Hero — soft labyrinth texture like screenshot */}
        <div className="w-full rounded-2xl overflow-hidden border border-neutral-100 bg-[#fdfbf7] mb-16 md:mb-20">
          <div className="relative aspect-[16/9] bg-gradient-to-br from-[#f5ece0] via-[#ede6d6] to-[#d8c9a8] flex items-center justify-center p-8">
            {/* labyrinth rings */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.18]">
              <div className="w-[85%] aspect-square rounded-full border-[1.5px] border-[#8a6a2a]" />
              <div className="absolute w-[70%] aspect-square rounded-full border border-[#8a6a2a]" />
              <div className="absolute w-[55%] aspect-square rounded-full border border-[#8a6a2a]/60" />
              <div className="absolute w-[40%] aspect-square rounded-full border border-[#8a6a2a]/40" />
            </div>
            {/* flower seal */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/90 bg-white/10 backdrop-blur flex items-center justify-center shadow-sm">
              <div className="w-14 h-14 rounded-full border border-white/60 flex items-center justify-center">
                <span className="text-white text-2xl">✺</span>
              </div>
            </div>
            <p className="absolute bottom-4 left-6 right-6 text-center text-[11px] font-sans tracking-[0.14em] uppercase text-[#5a3a1a]/60">
              SovereignSignatures • Pattern Recognition
            </p>
          </div>
          <div className="px-6 md:px-8 py-6 bg-white/80 backdrop-blur">
            <p className="font-sans text-sm text-neutral-600 leading-relaxed">
              A proprietary framework from <span className="font-medium text-neutral-900">RE soul</span> that reveals your innate pattern of genius — the way you naturally lead, create, and elevate the world around you.
            </p>
          </div>
        </div>

        <main className="space-y-16 md:space-y-20">
          {/* The Experience */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">The Experience</h2>
            <p className="lead text-neutral-700">
              SovereignSignatures is not a quiz. It is a pattern recognition experience. Through archetypes and guided reflection, it helps you see the genius you already move with — not the one you were told to perform.
            </p>
            <p>
              Built with RE soul, the framework maps how you lead when no one is watching, how you create when you feel most alive, and how you elevate a room without trying. The language is precise because the pattern is precise. When you see it, you cannot unsee it.
            </p>
            <div className="not-prose grid grid-cols-3 gap-3 md:gap-4 my-10">
              {[
                { k: "Archetypes", d: "Your innate roles" },
                { k: "How It Works", d: "Pattern → practice" },
                { k: "Start Now", d: "Begin the journey" },
              ].map((c) => (
                <div key={c.k} className="rounded-xl border border-neutral-100 bg-neutral-50/60 px-4 py-5 text-center">
                  <div className="text-xs font-sans font-semibold tracking-widest uppercase text-neutral-400 mb-1">{c.k}</div>
                  <div className="text-sm font-sans text-neutral-700">{c.d}</div>
                </div>
              ))}
            </div>
          </section>

          {/* My Role */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">My Role</h2>
            <p>
              I helped bring SovereignSignatures to the web — shaping the experience so the depth of the framework comes through without friction: clear onboarding, archetype discovery, and a calm, beautiful reading experience that feels like a book, not a funnel.
            </p>
            <p className="text-neutral-500 border-l-2 border-neutral-100 pl-4">
              This page is a living case study. I will add the full story here — how we built it, what we learned, and how we thought about pattern recognition as a product — in your words when you are ready to share it.
            </p>
            <p>
              <a href="https://www.sovereignsignatures.ai/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600">Explore the live experience → sovereignsignatures.ai</a>
            </p>
          </section>

          {/* Tell your story CTA */}
          <section className="rounded-2xl bg-[#1a1612] text-white px-6 md:px-8 py-10">
            <h3 className="font-display text-2xl mb-2">Want the full story?</h3>
            <p className="font-sans text-sm text-white/70 leading-relaxed mb-6 max-w-xl">
              Tell me how you built SovereignSignatures — the why, the archetypes, the hardest product decisions — and I will turn this page into a proper editorial case study like Orphi and Echo, with the same quiet, Medium-like typography.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.sovereignsignatures.ai/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white text-[#1a1612] rounded-full text-sm font-medium hover:bg-neutral-100 transition-colors">
                Visit SovereignSignatures
              </a>
              <Link href="/projects" className="px-5 py-2.5 border border-white/20 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                Back to Projects
              </Link>
            </div>
          </section>
        </main>
      </div>
    </ProjectEditorialFrame>
  );
}
