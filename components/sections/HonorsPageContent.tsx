"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { honors, involvement } from "@/content/honors";
import { HonorsList } from "@/components/sections/HonorsList";
import { useLanguage } from "@/components/language/LanguageProvider";

export default function HonorsPageContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[#1a1612]">
      <div className="max-w-[680px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#1a1612]/60 hover:text-[#5a3a1a] mb-12 transition-colors"
            style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
          >
            <ArrowLeft className="w-4 h-4" />
            {t.common.backToHome}
          </Link>
          <h1
            className="text-5xl md:text-6xl leading-tight mb-16"
            style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
          >
            {t.honorsUi.pageTitle}
          </h1>
          <HonorsList honors={honors} involvement={involvement} variant="editorial" />
        </motion.div>
      </div>
    </div>
  );
}
