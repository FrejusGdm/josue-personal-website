import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectEditorialFrame from "@/components/sections/editorial/ProjectEditorialFrame";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/projects/homy");

export default function HomyPage() {
  return (
    <ProjectEditorialFrame className="min-h-screen bg-white selection:bg-neutral-100">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Projects
        </Link>
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-neutral-900 mb-4 tracking-tight">Homy Robotics</h1>
          <p className="text-xl font-sans text-neutral-600 leading-relaxed">Voice AI for companion robots in seniors&apos; homes.</p>
        </header>
        <main className="prose prose-neutral prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-6">What I built</h2>
            <p>AI Engineering Intern (April – June 2026). Built the full voice stack — real-time audio, swappable STT, LLM, TTS, and a 30-table backend — and took a robot that had never spoken to its first working deployment.</p>
            <p>Fixed a 30-minute install on low-memory hardware (cut to 2 minutes) and an audio routing bug that sent output to a non-existent device. Added household-isolated memory with semantic recall and verbal bridging so conversation never stalls during retrieval.</p>
          </section>
        </main>
      </div>
    </ProjectEditorialFrame>
  );
}
