"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SmartLink from "@/components/ui/SmartLink";
import { useLanguage } from "@/components/language/LanguageProvider";
import { isRichLink, type RichSegment } from "@/lib/i18n/translations";

const BODY_STYLE = { fontFamily: "var(--font-source-serif), Georgia, serif" };
const DISPLAY_STYLE = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

function renderSegment(segment: RichSegment, index: number) {
  if (!isRichLink(segment)) return <span key={index}>{segment}</span>;
  return (
    <SmartLink
      key={`${segment.link}-${index}`}
      href={segment.href}
      external={segment.external}
      previewText={segment.previewText}
      logo={segment.logo}
    >
      {segment.link}
    </SmartLink>
  );
}

export default function EditorialBio() {
  const { lang, t } = useLanguage();

  // Drop cap on the first letter for Latin scripts; Chinese sets no
  // first-letter flourish, so the paragraph renders whole.
  const [first, ...rest] = t.bio.origin;
  const showDropcap =
    lang !== "zh" && typeof first === "string" && first.length > 0;
  const dropcap = showDropcap ? (first as string).charAt(0) : null;
  const firstRest = showDropcap ? (first as string).slice(1) : first;

  return (
    <section className="w-full bg-white text-[#1a1612] px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/15">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[680px] mx-auto"
      >
        <p
          className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {t.sections.onJosue}
        </p>
        <div
          className="text-lg leading-[1.7] space-y-6 text-[#1a1612]/90"
          style={BODY_STYLE}
        >
          <p>
            <Image
              src="/josue-headshot/VERT_IMG_5740.png"
              alt="Josué Godeme"
              width={200}
              height={260}
              className="float-right ml-6 mb-3 w-[140px] md:w-[200px] h-auto grayscale-[0.2]"
              priority
            />
            {showDropcap && (
              <span className="float-left block font-instrument italic text-[4.5em] leading-[0.85] text-[#1a1612] mr-[0.12em] pt-[0.05em] pr-[0.18em] pl-[0.04em]">
                {dropcap}
              </span>
            )}
            {firstRest !== undefined && renderSegment(firstRest, 0)}
            {rest.map((segment, i) => renderSegment(segment, i + 1))}
          </p>
          <p>{t.bio.work}</p>
          <p>
            {t.bio.nowLead}{" "}
            <SmartLink
              href="/projects/orphi"
              previewText={t.bio.nowOrphiPreview}
            >
              {t.bio.nowOrphi}
            </SmartLink>
            {t.bio.nowRest}
          </p>
        </div>
        <p className="mt-12 text-3xl" style={DISPLAY_STYLE}>
          — {t.bio.signature}
        </p>
      </motion.div>
    </section>
  );
}
