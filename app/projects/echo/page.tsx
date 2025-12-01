"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import SmartLink from "@/components/ui/SmartLink";

const homeScreen = {
  src: "/echo-project/old-homepage.png",
  label: "Home screen",
};

const otherScreens = [
  { src: "/echo-project/old-roleplay-choose.png", label: "Roleplay topic selection" },
  { src: "/echo-project/old-streak.png", label: "Streak and progress view" },
  { src: "/echo-project/old-mascot.png", label: "Echo parrot mascot" },
];

const onboardingScreens = [
  { src: "/echo-project/onboard-1.png", label: "Intro" },
  { src: "/echo-project/onboard-2.png", label: "Native language" },
  { src: "/echo-project/onboard-3.png", label: "Target language" },
  { src: "/echo-project/onboard-4.png", label: "Why learn" },
  { src: "/echo-project/onboard-5.png", label: "Interests" },
  { src: "/echo-project/onboard-6.png", label: "Main challenge" },
  { src: "/echo-project/onboard-7.png", label: "Practice frequency" },
  { src: "/echo-project/onboard-8.png", label: "Current level" },
  { src: "/echo-project/onboard-9.png", label: "Personalization" },
  { src: "/echo-project/onboard-10.png", label: "Plan ready" },
  { src: "/echo-project/onboard-11.png", label: "Permissions" },
  { src: "/echo-project/onboard-12.png", label: "Your name" },
  { src: "/echo-project/onboard-13.png", label: "Account details" },
  { src: "/echo-project/onboard-14.png", label: "Call ready" },
  { src: "/echo-project/onboard-15.png", label: "Voice choice" },
  { src: "/echo-project/onboard-16.png", label: "Roleplay topic" },
];

export default function EchoPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-neutral-100">
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
            Echo
          </h1>
          <p className="text-xl font-sans text-neutral-600 leading-relaxed mb-4">
            A speech focused language learning app born from my struggle to speak Chinese.
          </p>
          <a
            href="https://useecho.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Visit useecho.ai
          </a>
        </header>

        {/* Main Content */}
        <main className="space-y-16 md:space-y-20">
          {/* Home screen */}
          <section className="space-y-6">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400">
              Home screen
            </h2>
            <div className="w-36 sm:w-44 md:w-52 bg-neutral-50 border border-neutral-100 rounded-lg overflow-hidden">
              <div className="relative w-full aspect-[9/16]">
                <Image
                  src={homeScreen.src}
                  alt={homeScreen.label}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-neutral-500 font-sans px-3 py-2">
                {homeScreen.label}
              </p>
            </div>
          </section>

          {/* The Story */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Story
            </h2>
            <p>
              At Dartmouth, I had to take a language. Because I already spoke French, English, and some Adja,
              I could have used French to breeze through the requirement. Instead, I decided to start from
              zero and picked Chinese.
            </p>
            <p>
              It was hard in a way I had never experienced before. For about a year I went through the full
              routine: grammar drills, vocabulary lists, characters, reading and writing exercises. On paper,
              I was progressing. But there was one thing that would not click. I still could not really speak.
            </p>
            <p>
              We had speaking drills in class, and they helped, but they were not enough to give me real
              confidence. I could memorize sentences, but when I tried to have a conversation, everything
              froze. I knew that if I wanted to actually use Chinese in the real world, I needed much more
              speaking practice than a classroom could give me.
            </p>
            <p>
              Around the same time I was going deep into the AI world and paying attention to voice tools.
              I realized that voice based AI systems were finally good enough to hold a close to real time
              conversation. That was the moment when Echo started to form in my head.
            </p>
          </section>

          {/* Building Echo */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Building The First Version
            </h2>
            <p>
              I started Echo as a simple web app. The idea was straightforward: give learners an AI tutor
              they could talk to at any time, in natural language, with feedback when they made mistakes.
              You open the app, start speaking, and the tutor keeps the conversation going.
            </p>
            <p>
              Very quickly I realized that even I did not want to practice a language in a browser tab.
              Speaking practice belongs on your phone, where your microphone is, where you can walk and talk.
              So over the summer, after getting the basic idea working on the web, I rebuilt Echo as a
              mobile app.
            </p>
            <p>
              I used Expo to build a full stack application that could run on iOS and Android. That meant
              learning a lot about cross platform design, navigation, authentication, state management, and
              how to keep latency low enough that a voice conversation feels natural.
            </p>
          </section>

          {/* Onboarding flow */}
          <section className="space-y-4">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400">
              Onboarding flow
            </h2>
            <p className="font-sans text-neutral-600 text-base leading-relaxed max-w-xl">
              Echo asks a series of questions about your native language, goals, challenges, and schedule
              so the tutor can adapt the conversation to you.
            </p>
            <div className="-mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto pb-2">
              <div className="flex gap-4 min-w-max">
                {onboardingScreens.map((screen) => (
                  <div
                    key={screen.src}
                    className="w-40 md:w-48 bg-neutral-50 border border-neutral-100 rounded-lg overflow-hidden flex-shrink-0"
                  >
                    <div className="relative aspect-[9/16]">
                      <Image
                        src={screen.src}
                        alt={screen.label}
                        fill
                        className="object-cover"
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

          {/* Other screens */}
          <section className="space-y-4">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400">
              Other screens
            </h2>
            <div className="-mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto pb-2">
              <div className="flex gap-4 min-w-max">
                {otherScreens.map((screen) => (
                  <div
                    key={screen.src}
                    className="w-40 md:w-48 bg-neutral-50 border border-neutral-100 rounded-lg overflow-hidden flex-shrink-0"
                  >
                    <div className="relative aspect-[9/16]">
                      <Image
                        src={screen.src}
                        alt={screen.label}
                        fill
                        className="object-cover"
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

          {/* Voice Infrastructure */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Voice Infrastructure And Tools
            </h2>
            <p>
              For orchestration I leaned heavily on{" "}
              <SmartLink
                href="https://vapi.ai"
                external
                previewText="Voice API platform for building AI calling and conversational systems."
              >
                Vapi
              </SmartLink>
              . Their platform made it possible to connect different pieces of the voice stack, but it came with its own challenges. I spent many hours
              fighting with incomplete documentation, unexpected edge cases, and behavior that did not
              always match what the docs described.
            </p>
            <p>
              That meant I had to understand what was happening under the hood. I experimented with several
              voice providers, including{" "}
              <SmartLink
                href="https://cartesia.ai"
                external
                previewText="Speech synthesis company with strong multilingual voices."
              >
                Cartesia
              </SmartLink>{" "}
              and{" "}
              <SmartLink
                href="https://elevenlabs.io"
                external
                previewText="A popular provider for realistic AI generated voices."
              >
                ElevenLabs
              </SmartLink>
              . Cartesia in particular stood out for how
              natural and multilingual their voices sounded. Tuning latency, stability, and quality across
              different providers taught me a lot about what makes a voice interface actually feel usable.
            </p>
            <p>
              On the engineering side, Echo forced me to think across the whole stack at once: the mobile
              client, the backend, security, rate limits, and cost. It was the first project where I felt
              like I was building a real product, not just a demo.
            </p>
          </section>

          {/* Adoption and Next Chapter */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              What Happened Next
            </h2>
            <p>
              After launching the mobile app, I brought around one hundred people into Echo to test it and
              share feedback. Seeing other learners talk to a tool that started as a personal frustration
              was surreal. Their responses made it clear that the problem I had with Chinese was not unique.
            </p>
            <p>
              For a while everything was live. We had a working backend, the app was in the store, and people
              were using it. But as I kept learning new things about product, infrastructure, and design, it
              became obvious that the first version of Echo was not the one I wanted to scale.
            </p>
            <p>
              I eventually decided to shut down the app so that I could rebuild it with a better foundation.
              The next version will have a cleaner architecture, a more thoughtful experience, and a design
              that matches what I have in mind for a tool people might use every day.
            </p>
          </section>

          {/* Where Echo Goes From Here */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Still Ongoing
            </h2>
            <p>
              Echo is technically a finished project, but it does not feel finished to me. It is the kind of
              product I keep coming back to in my head. I want to rebuild it with everything I know now,
              make the experience smoother, and eventually learn how to market it and grow it beyond my own
              circle.
            </p>
            <p>
              Design is the area where I am pushing myself the most. I am spending more time studying
              interfaces, writing, and storytelling so that Echo feels less like a prototype and more like a
              tool you would recommend to a friend.
            </p>
            <p>
              If you are working on voice, language learning, or just enjoy talking about how people learn,
              I would love to chat.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

