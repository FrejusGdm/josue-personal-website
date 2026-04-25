"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import SmartLink from "@/components/ui/SmartLink";
import ProjectEditorialFrame from "@/components/sections/editorial/ProjectEditorialFrame";

const heroMedia = {
  video: "/who-do-you-know/demo-whoYouKnow.mp4",
  poster: "/who-do-you-know/screenshot.png",
  label: "WhoDoYouKnow Demo",
};

export default function WhoDoYouKnowPage() {
  return (
    <ProjectEditorialFrame className="min-h-screen bg-white selection:bg-neutral-100">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Projects
        </Link>

        {/* Header */}
        <header className="mb-12 md:mb-16">
          <h1 className="font-display text-4xl md:text-5xl text-neutral-900 mb-4 tracking-tight">
            WhoDoYouKnow
          </h1>
          <p className="text-xl font-sans text-neutral-600 leading-relaxed mb-4">
            Discover your real network from your Gmail history.
          </p>
          <a
            href="https://github.com/FrejusGdm/who-do-i-know"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View on GitHub
          </a>
        </header>

        {/* Main Content */}
        <main className="space-y-16 md:space-y-20">
          {/* Hero Video */}
          <section className="space-y-6">
            <div className="w-full bg-neutral-50 border border-neutral-100 rounded-xl overflow-hidden shadow-sm">
              <div className="relative w-full aspect-video">
                <video
                  src={heroMedia.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  poster={heroMedia.poster}
                />
              </div>
            </div>
            <p className="text-sm text-neutral-500 font-sans px-2">
              Extracting real contacts from an email inbox and enriching them with AI.
            </p>
          </section>

          {/* The Story */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Story
            </h2>
            <p>
              As graduation approaches, I started thinking about all the people I've met over the last few years. Classmates, professors, hackathon teammates, random introductions—so many connections that matter to me.
            </p>
            <p>
              I realized that if I didn't make a conscious effort to catalog these relationships, I might lose touch with many of them. I wanted a repository of the people I interacted with, somewhere I could look back and say, "Oh right, I should reach out to them."
            </p>
            <p>
              The most honest record of my interactions wasn't a social media platform; it was my email inbox. But going through thousands of emails manually to find actual humans (and not newsletters or automated receipts) sounded awful. So I decided to build a tool to do it for me.
            </p>
          </section>

          {/* The Build */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Build
            </h2>
            <p>
              I hacked this together to solve my specific problem as quickly as possible. The core of WhoDoYouKnow is a Gmail scanner that reads through email threads to identify real contacts.
            </p>
            <p>
              It filters out the noise—like one-way promotional emails—by looking for mutual communication or specific patterns. Then, it uses AI (via OpenRouter) to enrich those contacts, categorizing and summarizing the context of my relationship with each person based on our exchanges.
            </p>
            <p>
              Privacy was a big concern for me, so I designed it to process everything in-memory. Emails are never stored permanently, and the extracted data is deleted shortly after you download your clean CSV export. It's built with Next.js, Drizzle, and Google OAuth.
            </p>
          </section>

          {/* Open Source */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Open Source
            </h2>
            <p>
              Because it relies on restricted Gmail API scopes, running a public version for everyone requires an expensive and rigorous Google security assessment. Instead, I decided to open-source the entire project.
            </p>
            <p>
              If you want to map out your own network before graduating, changing jobs, or just for your own records, you can easily self-host it. You just need to set up a Google Cloud project in "testing" mode, which bypasses the verification requirements for your own account.
            </p>
            <p>
              You can find the code, setup instructions, and the full self-hosting guide on{" "}
              <SmartLink
                href="https://github.com/FrejusGdm/who-do-i-know"
                external
                previewText="WhoDoYouKnow GitHub Repository"
              >
                GitHub
              </SmartLink>.
            </p>
          </section>
        </main>
      </div>
    </ProjectEditorialFrame>
  );
}
