"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import {
  researchHeader,
  researchBio,
  researchAreas,
  publications,
  worksInProgress,
  talks,
  training,
} from "@/content/research";
import { useLanguage } from "@/components/language/LanguageProvider";

const DISPLAY_STYLE = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };
const BODY_STYLE = { fontFamily: "var(--font-source-serif), Georgia, serif" };
const META_STYLE = { fontFamily: "var(--font-inter), sans-serif" };

export default function EditorialResearch() {
  const { lang, t } = useLanguage();

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
            className="inline-flex items-center gap-2 text-sm text-[#1a1612]/60 hover:text-[#5a3a1a] mb-12 transition-colors"
            style={BODY_STYLE}
          >
            <ArrowLeft className="w-4 h-4" />
            {t.common.backToHome}
          </Link>

          <div className="mb-16">
            <p
              className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-6"
              style={META_STYLE}
            >
              {t.researchUi.volume}
            </p>
            <h1
              className="text-5xl md:text-7xl leading-[0.95] tracking-tight mb-8"
              style={DISPLAY_STYLE}
            >
              {researchHeader.name}.
            </h1>
            <div
              className="text-lg leading-[1.65] text-[#1a1612]/85 mb-8"
              style={BODY_STYLE}
            >
              {researchHeader.affiliations.map((affiliation, i) => (
                <span key={affiliation.label.en}>
                  {affiliation.detail[lang] ? (
                    <>
                      <span className="italic">
                        {affiliation.label[lang]}.
                      </span>{" "}
                      {affiliation.detail[lang]}
                    </>
                  ) : (
                    affiliation.label[lang]
                  )}
                  {i < researchHeader.affiliations.length - 1 && <br />}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {researchHeader.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="px-5 py-2 rounded-full text-xs uppercase tracking-[0.15em] border border-[#1a1612]/30 text-[#1a1612] hover:bg-[#1a1612] hover:text-white transition-colors"
                  style={META_STYLE}
                >
                  {link.label[lang]}
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
                {researchBio.firstParagraph.before[lang]}
                <Link
                  href={researchBio.firstParagraph.link.href}
                  className="underline decoration-[#5a3a1a]/60 underline-offset-4 hover:decoration-[#5a3a1a]"
                >
                  {researchBio.firstParagraph.link.label}
                </Link>
                {researchBio.firstParagraph.after[lang]}
              </p>
              <p>{researchBio.secondParagraph[lang]}</p>
            </section>

            {/* Current Research Areas */}
            <section>
              <h2
                className="text-2xl md:text-3xl mb-6"
                style={DISPLAY_STYLE}
              >
                {t.researchUi.areasTitle}
              </h2>
              <ul
                className="space-y-3 text-lg leading-[1.7] text-[#1a1612]/90 list-disc list-outside ml-5"
                style={BODY_STYLE}
              >
                {researchAreas.map((area) => (
                  <li key={area.en}>{area[lang]}</li>
                ))}
              </ul>
            </section>

            {/* Publications */}
            <section>
              <h2
                className="text-2xl md:text-3xl mb-6"
                style={DISPLAY_STYLE}
              >
                {t.researchUi.pubsTitle}
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
                        className="underline decoration-[#5a3a1a]/60 underline-offset-4 hover:decoration-[#5a3a1a]"
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
                className="text-2xl md:text-3xl mb-6"
                style={DISPLAY_STYLE}
              >
                {t.researchUi.wipTitle}
              </h2>
              <div className="space-y-8">
                {worksInProgress.length === 0 ? (
                  <p
                    className="text-lg text-[#1a1612]/55"
                    style={BODY_STYLE}
                  >
                    {t.researchUi.wipEmpty}
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

            {/* Programs */}
            <section>
              <h2
                className="text-2xl md:text-3xl mb-6"
                style={DISPLAY_STYLE}
              >
                {t.researchUi.programsTitle}
              </h2>
              <ul className="space-y-4" style={BODY_STYLE}>
                {training.map((item) => (
                  <li key={item.name} className="flex items-start gap-3 text-lg leading-[1.7] text-[#1a1612]/90">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-b border-[#1a1612]/15 hover:border-[#5a3a1a] hover:text-[#5a3a1a] transition-colors shrink-0 mt-1"
                    >
                      <span className="w-6 h-6 rounded-full bg-white border border-[#1a1612]/15 flex items-center justify-center overflow-hidden shrink-0">
                        <Image src={`/logos/${item.logo}`} alt={`${item.name} logo`} width={20} height={20} className="object-contain p-0.5" />
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </a>
                    <span className="text-[#1a1612]/70">— {item.program[lang]}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#1a1612]/60 mt-3" style={BODY_STYLE}>
                {training[0].detail[lang]}
              </p>
            </section>

            {/* Talks */}
            <section>
              <h2
                className="text-2xl md:text-3xl mb-6"
                style={DISPLAY_STYLE}
              >
                {t.researchUi.talksTitle}
              </h2>
              <ul
                className="space-y-3 text-lg leading-[1.7] text-[#1a1612]/90"
                style={BODY_STYLE}
              >
                {talks.map((talk) => (
                  <li key={talk.venue} className="grid grid-cols-[1fr_auto] gap-6 items-baseline">
                    <span>
                      <span className="italic">{talk.venue}</span> — {talk.location[lang]}
                    </span>
                    <span
                      className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a]"
                      style={META_STYLE}
                    >
                      {talk.date[lang]}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </motion.div>
      </div>

      <footer
        className="border-t border-[#1a1612]/15 px-6 md:px-12 py-12 text-sm text-[#1a1612]/55 text-center"
        style={BODY_STYLE}
      >
        {t.common.builtWithLove}
      </footer>
    </div>
  );
}
