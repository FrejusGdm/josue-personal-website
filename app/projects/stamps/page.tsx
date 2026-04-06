"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import InstitutionBadge from "@/components/ui/InstitutionBadge";

const stats = [
  {
    number: "10,000+",
    label: "Parallel Sentences",
    detail: "French-Adja, the largest corpus for this language",
  },
  {
    number: "~8",
    label: "BLEU Improvement",
    detail: "Over baseline with transfer learning approach",
  },
  {
    number: "1M+",
    label: "Speakers",
    detail: "With zero prior digital language technology",
  },
];

const bleuBars = [
  { label: "Baseline (no transfer)", value: 4, color: "bg-neutral-300" },
  { label: "Fon-French pretrained", value: 9, color: "bg-neutral-500" },
  { label: "+ Few-shot fine-tuning", value: 12, color: "bg-neutral-900" },
];

const team = [
  {
    name: "Josue Godeme",
    role: "Lead Researcher",
    detail: "Dartmouth College",
  },
  {
    name: "Community Translators",
    role: "Corpus Development",
    detail: "Mono & Couffo regions, Benin",
  },
];

export default function StampsPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-neutral-100">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Projects
        </Link>

        {/* Header */}
        <header className="mb-16 md:mb-24">
          <h1 className="font-display text-4xl md:text-5xl text-neutral-900 mb-4 tracking-tight">
            Stamps Scholar Research
          </h1>
          <p className="text-xl font-sans text-neutral-600 leading-relaxed mb-6">
            Building the first neural machine translation system for Adja, a
            language spoken by over a million people with zero digital
            infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-neutral-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              2024 &mdash; Present
            </span>
            <a
              href="/research"
              className="inline-flex items-center gap-1 text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Full Research Page
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-12 md:space-y-16">
          {/* Pull Quote */}
          <section className="border-l-2 border-neutral-900 pl-6">
            <blockquote className="text-xl md:text-2xl font-display text-neutral-900 leading-relaxed">
              &ldquo;A language spoken by over a million people shouldn&apos;t be
              invisible to every machine on earth.&rdquo;
            </blockquote>
          </section>

          {/* The Problem */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Problem
            </h2>
            <p>
              Adja is a Gbe language spoken across southern Benin and Togo. Over a
              million people use it daily. Yet until this project, there was no
              dictionary, no translation tool, no dataset, and no NLP system for
              it. Not one.
            </p>
            <p>
              This is not unusual. The vast majority of the world&apos;s 7,000+
              languages have no digital presence. But Adja is my family&apos;s
              language, the one I grew up hearing but never learned, and the
              absence felt personal before it became a research question.
            </p>
            <p>
              The{" "}
              <Link
                href="/projects/davis-peace-project"
                className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors"
              >
                Davis Peace Project
              </Link>{" "}
              was where this started: fieldwork in Benin creating the first
              French-Adja sentence corpus from scratch. This research is where it
              becomes a system.
            </p>
          </section>

          {/* The Insight */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Insight
            </h2>
            <p>
              You cannot train a modern NMT system on 10,000 sentences. Large
              models need millions. But what if you do not start from zero?
            </p>
            <p>
              Adja belongs to the Gbe language family, which includes Fon and Ewe.
              Fon has more digital resources and a closer linguistic relationship
              to Adja than, say, Swahili or Yoruba. The core insight of this work
              is that a model pretrained on Fon-French translation can transfer
              that knowledge to Adja-French, even with a small fine-tuning
              dataset.
            </p>
            <p>
              This is not just a trick. It reflects how these languages actually
              relate to each other: shared grammar, overlapping vocabulary, similar
              tonal patterns. The model learns the &ldquo;shape&rdquo; of Gbe
              languages first, then specializes.
            </p>
          </section>

          {/* The Method */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Method
            </h2>
            <p>
              The pipeline has three stages:
            </p>
            <ol>
              <li>
                <strong>Corpus creation.</strong> We built a 10,000+ sentence
                parallel corpus through community translation workshops in Benin.
                French sentences read aloud, translated by elders into Adja,
                transcribed phonetically, then digitized. Four people for one
                sentence.
              </li>
              <li>
                <strong>Transfer learning.</strong> We pretrain a
                Transformer-based model on the larger Fon-French corpus from the
                FFR dataset, then fine-tune on our Adja-French data. The model
                inherits Gbe-family linguistic patterns before ever seeing Adja.
              </li>
              <li>
                <strong>Few-shot adaptation.</strong> We apply few-shot techniques
                to maximize performance from limited data: curriculum learning,
                back-translation for data augmentation, and careful
                decontamination to ensure honest evaluation.
              </li>
            </ol>
          </section>

          {/* Results — Stats */}
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-12">
              Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {stats.map((item) => (
                <div key={item.label} className="text-center md:text-left">
                  <div className="font-display text-4xl text-neutral-900 mb-2">
                    {item.number}
                  </div>
                  <div className="font-medium text-neutral-900 mb-1">
                    {item.label}
                  </div>
                  <p className="text-sm text-neutral-500">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* BLEU Chart */}
            <div className="bg-neutral-50 border border-neutral-100 rounded-lg p-6 md:p-8">
              <h3 className="font-sans text-sm font-medium text-neutral-900 mb-6">
                BLEU Score Progression
              </h3>
              <div className="space-y-4">
                {bleuBars.map((bar) => (
                  <div key={bar.label} className="space-y-1.5">
                    <div className="flex justify-between text-sm font-sans">
                      <span className="text-neutral-600">{bar.label}</span>
                      <span className="text-neutral-900 font-medium">
                        {bar.value}
                      </span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2.5">
                      <div
                        className={`${bar.color} h-2.5 rounded-full transition-all duration-500`}
                        style={{ width: `${(bar.value / 15) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-neutral-400 mt-4 italic">
                Illustrative of the trend. Final decontaminated BLEU scores will
                be reported in the paper.
              </p>
            </div>
          </section>

          {/* Framework, not just a model */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              A Framework, Not Just a Model
            </h2>
            <p>
              The point of this work is not one translation system for one
              language. It is a replicable framework that any language community
              can follow: build a small corpus through community workshops,
              identify a related higher-resource language for transfer learning,
              and fine-tune with few-shot techniques.
            </p>
            <p>
              The Gbe language family alone has dozens of members. West Africa has
              hundreds of languages in similar positions: spoken by millions,
              invisible to machines. If this pipeline works for Adja, it can work
              for them too.
            </p>
            <p>
              This is what I mean when I say I am building infrastructure, not
              just models. The goal is to lower the barrier so that the next
              researcher or community does not have to start from zero the way I
              did.
            </p>
          </section>

          {/* Team */}
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-12">
              Team
            </h2>
            <div className="space-y-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8"
                >
                  <h3 className="text-lg font-medium text-neutral-900 md:w-1/3 flex-shrink-0">
                    {member.name}
                  </h3>
                  <div>
                    <p className="font-sans text-neutral-600">{member.role}</p>
                    <p className="text-sm text-neutral-400">{member.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What's Next */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              What&apos;s Next
            </h2>
            <p>
              The paper,{" "}
              <em>
                Adja-French Neural Machine Translation: A Few-Shot Transfer
                Learning Approach
              </em>
              , is currently under review. I am also preparing a second paper
              evaluating LLM performance on low-resource West African languages
              more broadly.
            </p>
            <p>
              On the product side, the long-term goal remains what it has always
              been: build the tools I could not find. A translation app. A
              dictionary. Resources that will help the next person who, like me,
              wants to learn their own language. The research makes the tools
              possible, and the tools make the research matter.
            </p>
          </section>

          {/* Closing */}
          <section className="border-t border-neutral-100 pt-12">
            <blockquote className="text-xl md:text-2xl font-display text-neutral-900 leading-relaxed">
              &ldquo;The research makes the tools possible, and the tools make the
              research matter.&rdquo;
            </blockquote>
          </section>

          {/* Footer */}
          <footer className="pt-8 border-t border-neutral-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-neutral-500 font-sans">
              <p className="inline-flex items-center gap-1.5">
                Funded by{" "}
                <InstitutionBadge
                  name="Stamps Scholarship"
                  logo="stamps.png"
                  href="https://stamps.umich.edu/"
                />
              </p>
              <p>2024 &mdash; Present</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
