"use client";

import dynamic from "next/dynamic";
import ModernHero from "@/components/heroes/ModernHero";
import DeepBio from "@/components/sections/DeepBio";
import HonorsAndInvolvement from "@/components/sections/HonorsAndInvolvement";
import FeaturedWork from "@/components/sections/FeaturedWork";
import { useMode } from "./useMode";
import type { EssayMeta } from "@/lib/mdx";
import { essayHref } from "@/lib/essay-link";
import Link from "next/link";

const EditorialHome = dynamic(
  () => import("@/components/sections/editorial/EditorialHome"),
  { ssr: false, loading: () => <ModePlaceholder label="Editorial" /> }
);

function ModePlaceholder({ label }: { label: string }) {
  return (
    <div className="min-h-[90vh] flex items-center justify-center">
      <p className="text-neutral-400 text-sm">Loading {label}…</p>
    </div>
  );
}

interface Props {
  essays: EssayMeta[];
}

export function HomeModeSwitcher({ essays }: Props) {
  const { mode } = useMode();
  if (mode === "editorial") return <EditorialHome essays={essays} />;
  return (
    <>
      <ModernHero />
      <DeepBio />
      <HonorsAndInvolvement />
      <FeaturedWork />
      <SelectedWritingClientList essays={essays} />
    </>
  );
}

function SelectedWritingClientList({ essays }: { essays: EssayMeta[] }) {
  const recent = essays.slice(0, 2);
  return (
    <section className="w-full py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-3xl md:text-4xl">Recent Writing</h2>
          <Link href="/writing" className="text-sm font-sans text-neutral-500 hover:text-black transition-colors mb-1">
            View all essays
          </Link>
        </div>
        <div className="space-y-2">
          {recent.map((post) => {
            const { href, external } = essayHref(post);
            const inner = (
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
                <h3 className="font-display text-xl md:text-2xl group-hover:text-accent-cyan-dark transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-sm font-sans text-neutral-400 flex-shrink-0">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                  </time>
                  <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            );
            const className =
              "group block p-6 -mx-6 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300";
            return external ? (
              <a
                key={post.slug}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link key={post.slug} href={href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
