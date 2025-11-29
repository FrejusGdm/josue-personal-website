"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import InstitutionBadge from "@/components/ui/InstitutionBadge";

const features = [
  {
    id: "01",
    title: "SYLLABUS SCRAPER",
    description: "Upload PDF. Extract Dates. Done.",
  },
  {
    id: "02",
    title: "CANVAS INTEGRATION",
    description: "Direct API connection to your LMS.",
  },
  {
    id: "03",
    title: "WEB CRAWLER",
    description: "For those old-school professor websites.",
  },
  {
    id: "04",
    title: "CALENDAR SYNC",
    description: "The final output. Your schedule, automated.",
  },
];

const lessons = [
  {
    title: "Better Code Architecture",
    description:
      "As a team of four working quickly, the codebase got messy. We'd invest more upfront in structure and conventions.",
  },
  {
    title: "Modular Scraping System",
    description:
      "Building separate, pluggable scrapers for each source type would make the system more maintainable and extensible.",
  },
  {
    title: "User Testing Earlier",
    description:
      "We built what we thought students needed. Getting real feedback earlier would have shaped a better product.",
  },
];

export default function CalendaiPage() {
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
          <h1 className="font-display text-4xl md:text-5xl text-neutral-900 mb-6 tracking-tight">
            CalendAI
          </h1>
          <p className="text-xl font-sans text-neutral-600 leading-relaxed mb-8">
            Centralized calendar for college students. One stop for college life.
          </p>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            <a
              href="https://project-calendai.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Frontend
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Backend
            </a>
            <span className="text-neutral-400">Note: Frontend only active</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-16 md:mb-24">
          <div className="relative aspect-[16/9] bg-neutral-50 rounded-lg overflow-hidden border border-neutral-100">
            <Image
              src="/calendai-project/hero-calendai.png"
              alt="CalendAI Interface"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Tech Stack */}
        <section className="mb-20 md:mb-32">
          <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-mono text-xs text-neutral-400 mb-3">FRONTEND</h3>
              <ul className="space-y-1 text-sm font-sans text-neutral-700">
                <li>React 18 + Vite</li>
                <li>Tailwind CSS + shadcn/ui</li>
                <li>React Router DOM</li>
                <li>Axios</li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs text-neutral-400 mb-3">BACKEND</h3>
              <ul className="space-y-1 text-sm font-sans text-neutral-700">
                <li>Node.js + Express.js</li>
                <li>MongoDB + Mongoose</li>
                <li>JWT + Google OAuth</li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs text-neutral-400 mb-3">INTEGRATIONS</h3>
              <ul className="space-y-1 text-sm font-sans text-neutral-700">
                <li>Canvas API</li>
                <li>Google Calendar</li>
                <li>OpenRouter AI</li>
                <li>PDF & Web Scraping</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="space-y-20 md:space-y-32">
          {/* Origin Story */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Story
            </h2>
            <p>
              It was the start of another term. Four of us sat in class, each with a
              stack of syllabi, manually entering every single deadline into our
              calendars.
            </p>
            <p>
              &ldquo;There has to be a better way,&rdquo; someone said. We all
              nodded. We&apos;d been through this ritual every term: the tedious
              process of parsing PDFs, checking Canvas, visiting professor
              websites, and copying dates one by one.
            </p>
            <p>
              That shared frustration became CalendAI. A tool that does in seconds
              what used to take hours. So we decided to fix it.
            </p>
          </section>

          {/* Features (Manifest Style) */}
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-12">
              Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {features.map((feature) => (
                <div key={feature.id} className="group">
                  <span className="font-mono text-xs text-neutral-400 mb-2 block">
                    {feature.id}
                  </span>
                  <h3 className="font-display text-xl text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-neutral-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Demo */}
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              In Action
            </h2>
            <div className="bg-neutral-50 border border-neutral-100 rounded-lg p-2">
              <Image
                src="/calendai-project/landing-page-gif.gif"
                alt="CalendAI Demo"
                width={1920}
                height={1080}
                className="w-full h-auto rounded grayscale-[0.2]"
                unoptimized
              />
            </div>
          </section>

          {/* Lessons */}
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-12">
              Retrospective
            </h2>
            <div className="space-y-12">
              {lessons.map((lesson, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                  <h3 className="text-lg font-medium text-neutral-900 md:w-1/3 flex-shrink-0">
                    {lesson.title}
                  </h3>
                  <p className="font-sans text-neutral-600 leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Footer/Meta */}
          <footer className="pt-12 border-t border-neutral-100">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-neutral-500 font-sans">
                <p className="inline-flex items-center gap-1.5">Built at <InstitutionBadge name="Dartmouth College" logo="dartmouth.png" href="https://dartmouth.edu" /></p>
                <p>Team of 4 • 2024</p>
             </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
