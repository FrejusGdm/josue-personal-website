"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { Lang } from "@/lib/i18n/translations";
import { Globe, ChevronDown } from "lucide-react";

const labels: Record<Lang, string> = { en: "EN", fr: "FR", zh: "中文" };
const options: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "zh", label: "中文" },
];

export default function LanguageSwitcher({ variant = "default" }: { variant?: "default" | "editorial" }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const isEditorial = variant === "editorial";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Switch language"
        className={
          isEditorial
            ? "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1a1612]/20 text-xs uppercase tracking-[0.15em] text-[#1a1612] hover:bg-[#1a1612] hover:text-white transition-colors"
            : "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 transition-colors"
        }
        style={isEditorial ? { fontFamily: "var(--font-inter), sans-serif" } : undefined}
      >
        <Globe className="w-3.5 h-3.5" />
        {labels[lang]}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div
            className={`absolute right-0 mt-2 w-36 rounded-xl border bg-white shadow-lg z-50 overflow-hidden ${isEditorial ? "border-[#1a1612]/15" : "border-neutral-200"}`}
          >
            {options.map((opt) => (
              <button
                key={opt.code}
                onClick={() => {
                  setLang(opt.code);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-neutral-50 transition-colors flex items-center justify-between ${lang === opt.code ? (isEditorial ? "text-[#5a3a1a] font-medium" : "text-neutral-900 font-medium bg-neutral-50") : "text-neutral-600"}`}
              >
                {opt.label}
                {lang === opt.code && <span className="text-xs">✓</span>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
