"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  researchHeader,
  researchBio,
  researchAreas,
  publications,
  worksInProgress,
  talks,
} from "@/content/research";

export default function CurrentResearch() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 mb-12 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header Block */}
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl text-neutral-900 mb-2 tracking-tight">
              {researchHeader.name}
            </h1>
            <div className="font-sans text-neutral-600 mb-4 text-sm leading-relaxed">
              <strong>Computer Science.</strong> Dartmouth College
              <br />
              King Scholar &amp; Stamps Scholar
              <br />
              Incoming Schwarzman Scholar, Tsinghua University (2027)
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
              {researchHeader.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-1 text-foreground border-b border-neutral-300 hover:border-foreground transition-colors"
                >
                  [{link.label}]
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {/* Bio & Focus */}
            <section className="prose prose-neutral prose-lg max-w-none font-sans text-neutral-800 leading-relaxed">
              <p>
                {researchBio.firstParagraph.before}
                <Link
                  href={researchBio.firstParagraph.link.href}
                  className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors"
                >
                  {researchBio.firstParagraph.link.label}
                </Link>
                {researchBio.firstParagraph.after}
              </p>
              <p>{researchBio.secondParagraph}</p>
            </section>

            {/* Current Research Areas */}
            <section>
              <h2 className="font-display text-2xl text-neutral-900 mb-4">Current Research Areas</h2>
              <ul className="list-disc list-inside space-y-2 font-sans text-neutral-800 ml-4">
                {researchAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </section>

            {/* Publications */}
            <section>
              <h2 className="font-display text-2xl text-neutral-900 mb-6">Publications</h2>
              <div className="space-y-6">
                {publications.map((pub) => (
                  <div key={pub.title} className="font-sans text-neutral-800 text-sm md:text-base">
                    {pub.href ? (
                      <a
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground border-b border-neutral-300 hover:border-foreground transition-colors"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      <span className="font-medium text-neutral-900">{pub.title}</span>
                    )}
                    .
                    <br />
                    {pub.authors}
                    <br />
                    <span className="italic text-neutral-600">{pub.venue}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Works in Progress */}
            <section>
              <h2 className="font-display text-2xl text-neutral-900 mb-6">Works in Progress</h2>
              <div className="space-y-6">
                {worksInProgress.map((pub) => (
                  <div key={pub.title} className="font-sans text-neutral-800 text-sm md:text-base">
                    <span className="font-medium text-neutral-900">{pub.title}</span>.
                    <br />
                    {pub.authors}
                    <br />
                    <span className="italic text-neutral-600">{pub.status}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Talks */}
            <section>
              <h2 className="font-display text-2xl text-neutral-900 mb-6">Talks &amp; Presentations</h2>
              <ul className="list-disc list-inside space-y-2 font-sans text-neutral-800 ml-4">
                {talks.map((talk) => (
                  <li key={talk.venue}>
                    <span className="font-medium">{talk.venue}</span> — {talk.location} ({talk.date})
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
