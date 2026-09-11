"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/LanguageProvider";

// A real 404: static content with a 404 status, not the home page served
// over a missing URL. Client-side only so the copy follows the active
// language; the status code still comes from the server.
export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <p className="text-sm tracking-widest uppercase text-neutral-400 mb-6">
          404
        </p>
        <h1 className="text-4xl md:text-5xl text-neutral-900 mb-6 tracking-tight">
          {t.notfound.title}
        </h1>
        <p className="text-lg text-neutral-600 leading-relaxed mb-10">
          {t.notfound.body}
        </p>
        <div className="flex items-center justify-center gap-6">
          <Link
            href="/"
            className="text-neutral-900 underline underline-offset-4"
          >
            {t.notfound.home}
          </Link>
          <Link
            href="/projects"
            className="text-neutral-900 underline underline-offset-4"
          >
            {t.notfound.projects}
          </Link>
          <Link
            href="/writing"
            className="text-neutral-900 underline underline-offset-4"
          >
            {t.notfound.writing}
          </Link>
        </div>
      </div>
    </div>
  );
}
