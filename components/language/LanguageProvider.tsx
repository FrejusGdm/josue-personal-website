"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Lang } from "@/lib/i18n/translations";

type ContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof translations)[Lang];
};

const LangContext = createContext<ContextValue | null>(null);

const VALID_LANGS: Lang[] = ["en", "fr", "zh"];

// Shareable language links: ?lang=zh opens the site in Chinese. The URL
// parameter wins over the stored preference so a shared link always works.
function langFromUrl(): Lang | null {
  if (typeof window === "undefined") return null;
  const param = new URLSearchParams(window.location.search).get("lang");
  return param && (VALID_LANGS as string[]).includes(param) ? (param as Lang) : null;
}

function reflectLangInUrl(l: Lang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", l);
  window.history.replaceState(null, "", url);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    const next =
      langFromUrl() ?? (stored && (VALID_LANGS as string[]).includes(stored) ? (stored as Lang) : "en");
    setLangState(next);
    document.documentElement.lang = next;
    // Keep the URL shareable even when the language came from storage.
    if (!langFromUrl()) reflectLangInUrl(next);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
    reflectLangInUrl(l);
  };

  const t = translations[lang];
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
