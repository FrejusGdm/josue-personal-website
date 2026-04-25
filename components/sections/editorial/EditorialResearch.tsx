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

const DISPLAY_STYLE = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };
const BODY_STYLE = { fontFamily: "var(--font-source-serif), Georgia, serif" };
const META_STYLE = { fontFamily: "var(--font-inter), sans-serif" };

export default function EditorialResearch() {
  return (
    <div className="min-h-screen bg-white text-[#1a1612]">
      <div className="max-w-[680px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 italic text-sm text-[#1a1612]/60 hover:text-[#5a3a1a] mb-12 transition-colors"
            style={BODY_STYLE}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-16">
            <p
              className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-6"
              style={META_STYLE}
            >
              Research — Vol. I
            </p>
            <h1
              className="italic text-5xl md:text-7xl leading-[0.95] tracking-tight mb-8"
              style={DISPLAY_STYLE}
            >
              {researchHeader.name}.
            </h1>
            <div
              className="text-lg leading-[1.65] text-[#1a1612]/85 mb-8"
              style={BODY_STYLE}
            >
              <span className="italic">Computer Science.</span> Dartmouth College
              <br />
              King Scholar &amp; Stamps Scholar
              <br />
              Incoming Schwarzman Scholar, Tsinghua University (2027)
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {researchHeader.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="px-5 py-2 rounded-full text-xs uppercase tracking-[0.15em] border border-[#1a1612]/30 text-[#1a1612] hover:bg-[#1a1612] hover:text-white transition-colors"
                  style={META_STYLE}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {/* Bio */}
            <section
              className="text-lg leading-[1.7] text-[#1a1612]/90 space-y-6"
              style={BODY_STYLE}
            >
              <p>
                {researchBio.firstParagraph.before}
                <Link
                  href={researchBio.firstParagraph.link.href}
                  className="italic underline decoration-[#5a3a1a]/60 underline-offset-4 hover:decoration-[#5a3a1a]"
                >
                  {researchBio.firstParagraph.link.label}
                </Link>
                {researchBio.firstParagraph.after}
              </p>
              <p>{researchBio.secondParagraph}</p>
            </section>

            {/* Current Research Areas */}
            <section>
              <h2
                className="italic text-2xl md:text-3xl mb-6"
                style={DISPLAY_STYLE}
              >
                Current Research Areas
              </h2>
              <ul
                className="space-y-3 text-lg leading-[1.7] text-[#1a1612]/90 list-disc list-outside ml-5"
                style={BODY_STYLE}
              >
                {researchAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </section>

            {/* Publications */}
            <section>
              <h2
                className="italic text-2xl md:text-3xl mb-6"
                style={DISPLAY_STYLE}
              >
                Publications
              </h2>
              <div className="space-y-8">
                {publications.map((pub) => (
                  <div
                    key={pub.title}
                    className="text-base leading-[1.65] text-[#1a1612]/90"
                    style={BODY_STYLE}
                  >
                    {pub.href ? (
                      <a
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="italic underline decoration-[#5a3a1a]/60 underline-offset-4 hover:decoration-[#5a3a1a]"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      <span className="italic">{pub.title}</span>
                    )}
                    .
                    <br />
                    {pub.authors}
                    <br />
                    <span
                      className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a]"
                      style={META_STYLE}
                    >
                      {pub.venue}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Works in Progress */}
            <section>
              <h2
                className="italic text-2xl md:text-3xl mb-6"
                style={DISPLAY_STYLE}
              >
                Works in Progress
              </h2>
              <div className="space-y-8">
                {worksInProgress.length === 0 ? (
                  <p
                    className="italic text-lg text-[#1a1612]/55"
                    style={BODY_STYLE}
                  >
                    To be added.
                  </p>
                ) : (
                  worksInProgress.map((pub) => (
                    <div
                      key={pub.title}
                      className="text-base leading-[1.65] text-[#1a1612]/90"
                      style={BODY_STYLE}
                    >
                      <span className="italic">{pub.title}</span>.
                      <br />
                      {pub.authors}
                      <br />
                      <span
                        className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a]"
                        style={META_STYLE}
                      >
                        {pub.status}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* Talks */}
            <section>
              <h2
                className="italic text-2xl md:text-3xl mb-6"
                style={DISPLAY_STYLE}
              >
                Talks &amp; Presentations
              </h2>
              <ul
                className="space-y-3 text-lg leading-[1.7] text-[#1a1612]/90"
                style={BODY_STYLE}
              >
                {talks.map((talk) => (
                  <li key={talk.venue} className="grid grid-cols-[1fr_auto] gap-6 items-baseline">
                    <span>
                      <span className="italic">{talk.venue}</span> — {talk.location}
                    </span>
                    <span
                      className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a]"
                      style={META_STYLE}
                    >
                      {talk.date}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </motion.div>
      </div>

      <footer
        className="border-t border-[#1a1612]/15 px-6 md:px-12 py-12 text-sm text-[#1a1612]/55 text-center italic"
        style={BODY_STYLE}
      >
        Built with love by Josué.
      </footer>
    </div>
  );
}
