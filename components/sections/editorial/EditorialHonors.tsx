"use client";

import { honors, involvement } from "@/content/home";

export default function EditorialHonors() {
  return (
    <section className="w-full bg-[#faf7f2] text-[#1a1612] px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/15">
      <div className="max-w-[680px] mx-auto">
        <p
          className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Honors &amp; Awards
        </p>
        <ul
          className="divide-y divide-[#1a1612]/10"
          style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
        >
          {honors.map((h) => (
            <li key={h.title} className="grid grid-cols-[1fr_auto] gap-6 py-5 items-baseline">
              <div>
                <div className="text-lg">
                  {h.link ? (
                    <a
                      href={h.link}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-[#5a3a1a]/40 decoration-1 underline-offset-4 hover:decoration-[#5a3a1a]"
                    >
                      {h.title}
                    </a>
                  ) : (
                    h.title
                  )}
                  <span className="text-[#1a1612]/55"> · {h.organization}</span>
                </div>
                <p className="text-sm text-[#1a1612]/70 leading-relaxed mt-1">{h.description}</p>
              </div>
              <span
                className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a] whitespace-nowrap"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {h.date}
              </span>
            </li>
          ))}
        </ul>

        <p
          className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mt-20 mb-8"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Leadership &amp; Involvement
        </p>
        <ul
          className="divide-y divide-[#1a1612]/10"
          style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
        >
          {involvement.map((i) => (
            <li key={i.role + i.organization} className="grid grid-cols-[1fr_auto] gap-6 py-5 items-baseline">
              <div>
                <div className="text-lg">
                  {i.role}
                  <span className="text-[#1a1612]/55"> · {i.organization}</span>
                </div>
                <p className="text-sm text-[#1a1612]/70 leading-relaxed mt-1">{i.description}</p>
              </div>
              <span
                className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a] whitespace-nowrap"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {i.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
