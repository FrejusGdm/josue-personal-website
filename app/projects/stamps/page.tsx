"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectEditorialFrame from "@/components/sections/editorial/ProjectEditorialFrame";

export default function StampsPage() {
  return (
    <ProjectEditorialFrame className="min-h-screen bg-white selection:bg-neutral-100">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Projects
        </Link>

        <header className="mb-16">
          <h1 className="font-display text-4xl md:text-5xl text-neutral-900 mb-4 tracking-tight">
            Stamps Scholar Research
          </h1>
          <p className="text-xl font-sans text-neutral-500">
            Coming soon.
          </p>
        </header>
      </div>
    </ProjectEditorialFrame>
  );
}

/*
 * COMMENTED OUT — content needs accuracy review before publishing.
 * Restore and edit when ready.
 *
 * import Image from "next/image";
 * import { Calendar, ExternalLink } from "lucide-react";
 * import InstitutionBadge from "@/components/ui/InstitutionBadge";
 *
 * const stats = [
 *   {
 *     number: "10,000+",
 *     label: "Parallel Sentences",
 *     detail: "French-Adja, the largest corpus for this language",
 *   },
 *   {
 *     number: "~8",
 *     label: "BLEU Improvement",
 *     detail: "Over baseline with transfer learning approach",
 *   },
 *   {
 *     number: "1M+",
 *     label: "Speakers",
 *     detail: "With zero prior digital language technology",
 *   },
 * ];
 *
 * const bleuBars = [
 *   { label: "Baseline (no transfer)", value: 4, color: "bg-neutral-300" },
 *   { label: "Fon-French pretrained", value: 9, color: "bg-neutral-500" },
 *   { label: "+ Few-shot fine-tuning", value: 12, color: "bg-neutral-900" },
 * ];
 *
 * const team = [
 *   {
 *     name: "Josue Godeme",
 *     role: "Lead Researcher",
 *     detail: "Dartmouth College",
 *   },
 *   {
 *     name: "Community Translators",
 *     role: "Corpus Development",
 *     detail: "Mono & Couffo regions, Benin",
 *   },
 * ];
 *
 * --- FULL PAGE JSX ---
 *
 * <header className="mb-16 md:mb-24">
 *   <h1>Stamps Scholar Research</h1>
 *   <p>Building the first neural machine translation system for Adja...</p>
 *   <div>2024 — Present | Full Research Page link</div>
 * </header>
 *
 * <main>
 *   <!-- Pull Quote -->
 *   "A language spoken by over a million people shouldn't be invisible to every machine on earth."
 *
 *   <!-- The Problem -->
 *   Adja is a Gbe language... Davis Peace Project link... fieldwork in Benin...
 *
 *   <!-- The Insight -->
 *   Transfer from Fon-French... Gbe language family... shared grammar...
 *
 *   <!-- The Method -->
 *   1. Corpus creation (community translation workshops)
 *   2. Transfer learning (Fon-French pretrained Transformer)
 *   3. Few-shot adaptation (curriculum learning, back-translation, decontamination)
 *
 *   <!-- Results -->
 *   Stats grid + BLEU bar chart (illustrative values)
 *
 *   <!-- A Framework, Not Just a Model -->
 *   Replicable pipeline for other low-resource languages...
 *
 *   <!-- Team -->
 *   Josue Godeme (Lead) + Community Translators
 *
 *   <!-- What's Next -->
 *   Paper under review + LLM evaluation paper in prep + product goals
 *
 *   <!-- Closing quote -->
 *   "The research makes the tools possible, and the tools make the research matter."
 *
 *   <!-- Footer -->
 *   Funded by Stamps Scholarship | 2024 — Present
 * </main>
 */
