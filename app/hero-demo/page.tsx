"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LanguageSwitcherHero from "@/components/heroes/LanguageSwitcherHero";
import ThreePillarsHero from "@/components/heroes/ThreePillarsHero";
import TimelineHero from "@/components/heroes/TimelineHero";
import ProblemSolverHero from "@/components/heroes/ProblemSolverHero";

export default function HeroDemoPage() {
  return (
    <div className="w-full">
      <Tabs defaultValue="language" className="w-full">
        {/* Navigation Tabs */}
        <div className="sticky top-0 z-50 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--warm-brown)]/10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl md:text-3xl font-[var(--font-editorial-ultrabold)] text-[var(--warm-brown)]">
                Hero Options
              </h1>
              <p className="text-sm text-[var(--warm-brown)]/60 font-[var(--font-editorial-regular)]">
                Choose your favorite
              </p>
            </div>
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent p-0">
              <TabsTrigger
                value="language"
                className="data-[state=active]:bg-black data-[state=active]:text-white font-[var(--font-editorial-regular)] text-sm md:text-base py-3 rounded-lg border-2 border-black text-[var(--warm-brown)] transition-all"
              >
                Language (B&W)
              </TabsTrigger>
              <TabsTrigger
                value="pillars"
                className="data-[state=active]:bg-[var(--teal)] data-[state=active]:text-white font-[var(--font-editorial-regular)] text-sm md:text-base py-3 rounded-lg border-2 border-[var(--teal)] text-[var(--warm-brown)] transition-all"
              >
                Three Pillars
              </TabsTrigger>
              <TabsTrigger
                value="timeline"
                className="data-[state=active]:bg-[var(--gold)] data-[state=active]:text-white font-[var(--font-editorial-regular)] text-sm md:text-base py-3 rounded-lg border-2 border-[var(--gold)] text-[var(--warm-brown)] transition-all"
              >
                Timeline Journey
              </TabsTrigger>
              <TabsTrigger
                value="problem"
                className="data-[state=active]:bg-gray-900 data-[state=active]:text-white font-[var(--font-editorial-regular)] text-sm md:text-base py-3 rounded-lg border-2 border-gray-900 text-[var(--warm-brown)] transition-all"
              >
                Problem Solver
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Hero Content */}
        <TabsContent value="language" className="m-0 border-none p-0 outline-none">
          <LanguageSwitcherHero />
        </TabsContent>

        <TabsContent value="pillars" className="m-0 border-none p-0 outline-none">
          <ThreePillarsHero />
        </TabsContent>

        <TabsContent value="timeline" className="m-0 border-none p-0 outline-none">
          <TimelineHero />
        </TabsContent>

        <TabsContent value="problem" className="m-0 border-none p-0 outline-none">
          <ProblemSolverHero />
        </TabsContent>
      </Tabs>
    </div>
  );
}
