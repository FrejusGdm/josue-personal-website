"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/home";

export default function EditorialHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-[#faf7f2] text-[#1a1612] px-6 md:px-12">
      <div className="max-w-[680px] mx-auto w-full py-24 md:py-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {hero.dateline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="italic text-6xl md:text-8xl leading-[0.95] tracking-tight mb-12"
          style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
        >
          {hero.name}.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="text-lg md:text-xl leading-[1.65] text-[#1a1612]/85"
          style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
        >
          {hero.tagline} I write about building with AI, preserving low-resource languages, and the long road between an idea and something real. This is a record of what I&apos;ve been making, reading, and thinking about.
        </motion.p>
        <div
          className="mt-16 text-[#1a1612]/40 text-sm italic"
          style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
        >
          ↓ read on
        </div>
      </div>
    </section>
  );
}
