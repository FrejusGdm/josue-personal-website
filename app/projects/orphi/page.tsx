"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ProjectEditorialFrame from "@/components/sections/editorial/ProjectEditorialFrame";

const screens = [
  { src: "/orphi/02-home-voice-chat.png", label: "Home — voice chat" },
  { src: "/orphi/05-onboarding-welcome.png", label: "Onboarding" },
  { src: "/orphi/09-learn-tab-curriculum.png", label: "Learn tab" },
  { src: "/orphi/12-lesson-vocab-card.png", label: "Vocab card" },
  { src: "/orphi/07-scan-results-found.png", label: "Scan results" },
  { src: "/orphi/14-vocabulary-collection.png", label: "Vocabulary" },
  { src: "/orphi/10-progress-dashboard.png", label: "Progress" },
];

const features = [
  {
    title: "Object Scanner",
    description:
      "Point your camera at anything. Orphi identifies objects, gives you the word in your target language, builds a sentence, and saves it to your vocabulary. Learning happens in context, not in a vacuum.",
    video: "/orphi/scanning-feature-no-sound.mp4",
  },
  {
    title: "Structured Lessons",
    description:
      "Not just free conversation. Orphi has a real curriculum — vocab cards, pronunciation drills, and spaced repetition. But it never feels like homework because the voice is always there, keeping things light.",
    video: "/orphi/going-through-lesson-no-audio.mp4",
  },
  {
    title: "Vocabulary Stickers",
    description:
      "Every word you learn gets saved as a sticker. Scan objects, finish lessons, have conversations — your collection grows. It is weirdly satisfying to watch your vocabulary pile up.",
    video: "/orphi/vocabulary-sticker-results-no-sound.mp4",
  },
  {
    title: "Progress and Settings",
    description:
      "Track your streaks, see your growth, and customize how Orphi talks to you. Want more corrections? Fewer? Want Orphi to be gentler or more blunt? You decide.",
    video: "/orphi/progress+settings-no-audio.mp4",
  },
];

export default function OrphiPage() {
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
            Orphi
          </h1>
          <p className="text-xl font-sans text-neutral-600 leading-relaxed mb-4">
            Speak your way to fluency. An AI language companion that feels like a friend — witty, proactive, and voice-first.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.useorphi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              useorphi.com
            </a>
            <a
              href="https://apps.apple.com/us/app/orphi/id6757300978"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              App Store
            </a>
            <a
              href="https://github.com/FrejusGdm/echo-chat-new-approach"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-16 md:space-y-20">
          {/* Hero */}
          <section className="space-y-6">
            <div className="w-full bg-neutral-50 border border-neutral-100 rounded-lg overflow-hidden">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src="/orphi/orphi-project-prez.png"
                  alt="Orphi — Speak your way to fluency"
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* The Story */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Story
            </h2>
            <p>
              If you have read the{" "}
              <Link href="/projects/echo" className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors">Echo</Link>{" "}
              page, you know the backstory. Two years of Chinese classes at Dartmouth. Homework, flashcards,
              the whole drill. And I still could not hold a real conversation before going to Beijing.
            </p>
            <p>
              Echo was my answer to that. An AI tutor that actually makes you speak. The concept was right.
              The execution was not. I built something that worked, got over a hundred people to try it,
              learned a ton about voice AI and mobile development. But at the end of the day, I would not
              use my own app. And if I would not use it, I had no business asking anyone else to.
            </p>
            <p>
              That was the hardest part. Not the technical failures or the distribution problems. It was
              looking at something I poured months into and feeling nothing. No excitement to open it. No
              urge to show it to a friend. Just... fine. And fine is not good enough.
            </p>
          </section>

          {/* From Echo to Orphi */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Rebuild
            </h2>
            <p>
              I shut Echo down and sat with the question for a while. What would make me actually want to
              practice a language every day? Not out of discipline. Not because some app guilt-trips me
              with streak notifications. But because I genuinely enjoy it.
            </p>
            <p>
              The answer was embarrassingly simple: make it feel like talking to a friend. Not a tutor. Not
              a flashcard machine. A friend who happens to speak Chinese, who knows what I am into, who
              roasts me when I mess up and hypes me when I get it right. Someone I would actually want to
              call.
            </p>
            <p>
              That is Orphi. I rebuilt everything from scratch. New architecture, new design language, new
              personality system. The only thing I kept from Echo was the lesson I learned: build something
              you love first. If you would not use it yourself every day, go back to the drawing board.
            </p>
          </section>

          {/* What is different */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              What Changed
            </h2>
            <p>
              Orphi has personality. Real personality. It is witty, a little sarcastic, and genuinely
              encouraging. It does not sound like an AI reading from a script. It sounds like that friend
              who studied abroad and now won&apos;t shut up about how fun the language is. That is the vibe.
            </p>
            <p>
              It is also proactive. Orphi does not wait for you to open the app. It reaches out. Sends you
              a message. Calls you. &quot;Hey, you free at 7? Let&apos;s do a quick session.&quot; That shift from
              passive tool to active companion changed everything. You stop forgetting to practice because
              Orphi does not let you forget.
            </p>
            <p>
              And it is contextual. It knows what you are learning, what you struggle with, what your
              interests are. If you mentioned you love cooking last week, your next conversation might be
              about ordering food at a restaurant. The learning feels natural because it is woven into
              things you actually care about.
            </p>
          </section>

          {/* App screens */}
          <section className="space-y-4">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400">
              The App
            </h2>
            <div className="-mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto pb-2">
              <div className="flex gap-4 min-w-max">
                {screens.map((screen) => (
                  <div
                    key={screen.src}
                    className="w-40 md:w-48 bg-neutral-50 border border-neutral-100 rounded-lg overflow-hidden flex-shrink-0"
                  >
                    <div className="relative aspect-[9/16]">
                      <Image
                        src={screen.src}
                        alt={screen.label}
                        fill
                        sizes="(max-width: 768px) 160px, 192px"
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[10px] text-neutral-500 font-sans px-2 py-1">
                      {screen.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Feature demos */}
          <section className="space-y-16">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400">
              Features
            </h2>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-start`}
              >
                <div className="flex-1 space-y-3 md:pt-4">
                  <h3 className="font-display text-xl text-neutral-900">
                    {feature.title}
                  </h3>
                  <p className="text-base text-neutral-600 font-sans leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="w-48 md:w-56 flex-shrink-0 bg-neutral-50 border border-neutral-100 rounded-lg overflow-hidden">
                  <video
                    src={feature.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full aspect-[9/16] object-contain bg-neutral-50"
                  />
                </div>
              </div>
            ))}
          </section>

          {/* Where we are */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Where We Are
            </h2>
            <p>
              Orphi is live on the{" "}
              <a
                href="https://apps.apple.com/us/app/orphi/id6757300978"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors"
              >
                App Store
              </a>
              . French, English, Italian, Spanish, and Chinese are all live. Each one gets the same
              attention to personality and voice quality because a mediocre experience in any language is
              not worth shipping.
            </p>
            <p>
              I am building this in public. The code is on{" "}
              <a
                href="https://github.com/FrejusGdm/echo-chat-new-approach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors"
              >
                GitHub
              </a>
              . If you try it, I genuinely want to hear what you think. What works. What does not. What
              annoys you. That is how this gets better.
            </p>
          </section>
        </main>
      </div>
    </ProjectEditorialFrame>
  );
}
