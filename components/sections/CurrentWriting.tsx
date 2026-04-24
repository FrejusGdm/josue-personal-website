"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { EssayMeta } from "@/lib/mdx";
import { essayHref } from "@/lib/essay-link";

interface Props {
  essays: EssayMeta[];
}

export default function CurrentWriting({ essays }: Props) {
  return (
    <main className="w-full min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="mb-16 space-y-4">
          <h1 className="font-display text-5xl md:text-6xl text-foreground">Writing</h1>
          <p className="font-sans text-lg text-neutral-600 max-w-xl">
            Thoughts on building technology for the next billion users, preserving culture, and the future of education.
          </p>
        </div>

        <div className="space-y-4">
          {essays.map((post) => {
            const { href, external } = essayHref(post);
            const inner = (
              <div className="flex flex-col space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-accent-cyan-dark transition-colors">
                    {post.title}
                  </h2>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400 mt-1" />
                </div>

                <p className="font-sans text-neutral-600 leading-relaxed">
                  {post.description}
                </p>

                <div className="flex items-center gap-4 text-sm font-sans text-neutral-400 pt-1">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            );

            const className =
              "group block p-6 -mx-6 rounded-2xl hover:bg-neutral-50 transition-colors duration-300";

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
    </main>
  );
}
