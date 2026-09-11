import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectEditorialFrame from "@/components/sections/editorial/ProjectEditorialFrame";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/projects/parsimmon");

export default function ParsimmonPage() {
  return (
    <ProjectEditorialFrame className="min-h-screen bg-white selection:bg-neutral-100">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Projects
        </Link>
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-neutral-900 mb-4 tracking-tight">Parsimmon</h1>
          <p className="text-xl font-sans text-neutral-600 leading-relaxed">Document parsing SaaS — from local tool to cloud service.</p>
        </header>
        <main className="prose prose-neutral prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-6">What I built</h2>
            <p>Software Engineering Intern (June – July 2026). Built the multi-tenant SaaS end to end: FastAPI + TanStack Start, public API, API-key management, org-scoped auth, and Stripe ledger billing — shipped as 13 reviewed PRs.</p>
            <p>Moved the engine to AWS behind a CI accuracy gate (91.7% extraction quality) so nothing merges that degrades parsing.</p>
          </section>
        </main>
      </div>
    </ProjectEditorialFrame>
  );
}
