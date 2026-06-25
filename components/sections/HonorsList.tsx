"use client";

import Image from "next/image";
import Link from "next/link";
import SmartLink from "@/components/ui/SmartLink";
import type { HonorItem, InvolvementItem } from "@/content/honors";

const META_STYLE = { fontFamily: "var(--font-inter), sans-serif" };
const BODY_STYLE = { fontFamily: "var(--font-source-serif), Georgia, serif" };

interface HonorsListProps {
  honors: HonorItem[];
  involvement: InvolvementItem[];
  variant?: "current" | "editorial";
  showViewAll?: boolean;
}

function ViewAllLink({ variant }: { variant: "current" | "editorial" }) {
  if (variant === "editorial") {
    return (
      <Link
        href="/honors"
        className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a] hover:text-[#1a1612] transition-colors"
        style={META_STYLE}
      >
        View all →
      </Link>
    );
  }
  return (
    <Link
      href="/honors"
      className="text-sm font-sans text-neutral-400 hover:text-neutral-900 transition-colors"
    >
      View all →
    </Link>
  );
}

export function HonorsList({
  honors,
  involvement,
  variant = "current",
  showViewAll = false,
}: HonorsListProps) {
  if (variant === "editorial") {
    return (
      <>
        <div className="flex items-baseline justify-between gap-4 mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a]" style={META_STYLE}>
            Honors &amp; Awards
          </p>
          {showViewAll && <ViewAllLink variant="editorial" />}
        </div>
        <ul className="divide-y divide-[#1a1612]/10" style={BODY_STYLE}>
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
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm text-[#1a1612]/60 mt-1">
                  <Image
                    src={`/logos/${h.logo}`}
                    alt={`${h.organization} logo`}
                    width={14}
                    height={14}
                    className="object-contain"
                  />
                  <span>{h.organization}</span>
                </div>
                <p className="text-sm text-[#1a1612]/70 leading-relaxed mt-2">{h.description}</p>
              </div>
              <span
                className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a] whitespace-nowrap"
                style={META_STYLE}
              >
                {h.date}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-baseline justify-between gap-4 mt-20 mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a]" style={META_STYLE}>
            Leadership &amp; Involvement
          </p>
          {showViewAll && <ViewAllLink variant="editorial" />}
        </div>
        <ul className="divide-y divide-[#1a1612]/10" style={BODY_STYLE}>
          {involvement.map((i) => (
            <li
              key={i.role + i.organization}
              className="grid grid-cols-[1fr_auto] gap-6 py-5 items-baseline"
            >
              <div>
                <div className="text-lg">{i.role}</div>
                <div className="inline-flex items-center gap-1.5 text-sm text-[#1a1612]/60 mt-1">
                  <Image
                    src={`/logos/${i.logo}`}
                    alt={`${i.organization} logo`}
                    width={14}
                    height={14}
                    className="object-contain"
                  />
                  <span>{i.organization}</span>
                </div>
                <p className="text-sm text-[#1a1612]/70 leading-relaxed mt-2">{i.description}</p>
                {i.badges && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {i.badges.map((badge) => (
                      <span
                        key={badge.name}
                        className="inline-flex items-center gap-1 text-xs text-[#1a1612]/55 bg-[#1a1612]/5 px-2 py-1 rounded-full"
                      >
                        <Image
                          src={`/logos/${badge.logo}`}
                          alt={`${badge.name} logo`}
                          width={12}
                          height={12}
                          className="object-contain"
                        />
                        {badge.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <span
                className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a] whitespace-nowrap"
                style={META_STYLE}
              >
                {i.date}
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
      <div>
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Honors & Awards</h2>
          {showViewAll && <ViewAllLink variant="current" />}
        </div>
        <div className="space-y-12">
          {honors.map((item) => (
            <div key={item.title} className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-sans font-medium text-lg text-neutral-900 group-hover:text-neutral-700 transition-colors">
                  {item.link ? (
                    <SmartLink href={item.link} external previewText={item.previewText}>
                      {item.title}
                    </SmartLink>
                  ) : (
                    item.title
                  )}
                </h3>
                <span className="font-sans text-sm text-neutral-400 flex-shrink-0 ml-4">
                  {item.date}
                </span>
              </div>
              <div className="text-sm text-neutral-500 mb-2 font-medium inline-flex items-center gap-1">
                <Image
                  src={`/logos/${item.logo}`}
                  alt={`${item.organization} logo`}
                  width={14}
                  height={14}
                  className="object-contain"
                />
                {item.organization}
              </div>
              <p className="font-sans text-neutral-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Leadership & Involvement
          </h2>
          {showViewAll && <ViewAllLink variant="current" />}
        </div>
        <div className="space-y-12">
          {involvement.map((item) => (
            <div key={item.role + item.organization} className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-sans font-medium text-lg text-neutral-900 group-hover:text-neutral-700 transition-colors">
                  {item.role}
                </h3>
                <span className="font-sans text-sm text-neutral-400 flex-shrink-0 ml-4">
                  {item.date}
                </span>
              </div>
              <div className="text-sm text-neutral-500 mb-2 font-medium inline-flex items-center gap-1">
                <Image
                  src={`/logos/${item.logo}`}
                  alt={`${item.organization} logo`}
                  width={14}
                  height={14}
                  className="object-contain"
                />
                {item.organization}
              </div>
              <p className="font-sans text-neutral-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
              {item.badges && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.badges.map((badge) => (
                    <span
                      key={badge.name}
                      className="inline-flex items-center gap-1 text-xs text-neutral-500 bg-neutral-50 px-2 py-1 rounded-full"
                    >
                      <Image
                        src={`/logos/${badge.logo}`}
                        alt={`${badge.name} logo`}
                        width={12}
                        height={12}
                        className="object-contain"
                      />
                      {badge.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
