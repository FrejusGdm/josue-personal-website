"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { interests } from "@/content/interests";
import { useLanguage } from "@/components/language/LanguageProvider";

interface BioInterestsProps {
  variant?: "current" | "editorial";
  embedded?: boolean;
}

export default function BioInterests({ variant = "current", embedded = false }: BioInterestsProps) {
  const { t } = useLanguage();
  const isEditorial = variant === "editorial";

  const pillClass = isEditorial
    ? "text-sm px-3.5 py-1.5 rounded-full border border-[#1a1612]/15 text-[#1a1612]/80 hover:border-[#5a3a1a]/40 hover:text-[#1a1612] transition-colors"
    : "text-xs font-mono px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900 transition-colors";

  const headingClass = isEditorial
    ? "text-xs uppercase tracking-[0.2em] text-[#5a3a1a] shrink-0"
    : "text-sm font-sans text-neutral-400 shrink-0";

  // Labels come from the active language; hrefs stay with the interest list.
  const pills = interests.items.map((item, i) => {
    const label = t.interests.items[i] ?? item.label;
    const className = pillClass;
    if (item.external) {
      return (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          style={
            isEditorial
              ? { fontFamily: "var(--font-source-serif), Georgia, serif" }
              : undefined
          }
        >
          {label}
        </a>
      );
    }
    return (
      <Link
        key={item.label}
        href={item.href}
        className={className}
        style={
          isEditorial
            ? { fontFamily: "var(--font-source-serif), Georgia, serif" }
            : undefined
        }
      >
        {label}
      </Link>
    );
  });

  const content = (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span
        className={headingClass}
        style={
          isEditorial
            ? { fontFamily: "var(--font-inter), sans-serif" }
            : undefined
        }
      >
        {t.interests.heading}
      </span>
      {pills}
    </div>
  );

  if (embedded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
        className="mt-8"
      >
        {content}
      </motion.div>
    );
  }

  const wrapperClass = isEditorial
    ? "w-full bg-white text-[#1a1612] px-6 md:px-12 pb-16 md:pb-20 border-b border-[#1a1612]/15"
    : "w-full bg-white border-b border-neutral-100 pb-16 md:pb-20";

  const innerClass = isEditorial ? "max-w-[680px] mx-auto" : "max-w-6xl mx-auto px-6 md:px-12 md:pl-[calc(50%+2.5rem)]";

  return (
    <section className={wrapperClass}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={innerClass}
      >
        {content}
      </motion.div>
    </section>
  );
}
