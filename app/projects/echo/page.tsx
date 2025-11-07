"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mic, Users, Sparkles, ExternalLink } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Speech-First Design",
    description: "Practice speaking from day one. Echo prioritizes conversation over textbooks.",
  },
  {
    icon: Users,
    title: "Immersive Learning",
    description: "Learn through natural conversations, not grammar drills. The way humans actually acquire languages.",
  },
  {
    icon: Sparkles,
    title: "Always Available",
    description: "Your AI conversation partner is ready whenever you are. No scheduling, no pressure.",
  },
];

export default function EchoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-sans text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-28 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display text-foreground mb-6 tracking-tight">
              Echo
            </h1>
            <p className="text-2xl md:text-3xl font-sans text-neutral-700 leading-relaxed mb-8">
              Speech-first language learning through immersion
            </p>
            <a
              href="https://useecho.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-sans text-foreground hover:text-neutral-600 transition-colors group"
            >
              Visit useecho.ai
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-8">
              Why I Built Echo
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
              <div>
                <p className="text-lg md:text-xl font-sans text-neutral-700 leading-relaxed mb-6">
                  When I was learning Chinese, I faced a problem that millions of language learners know too well: I had nobody to practice speaking with.
                </p>
                <p className="text-lg md:text-xl font-sans text-neutral-700 leading-relaxed mb-6">
                  Apps taught me vocabulary and grammar, but speaking? That required real conversations—and those were hard to find. So I built Echo.
                </p>
                <p className="text-lg md:text-xl font-sans text-neutral-700 leading-relaxed">
                  Echo is designed to bring immersion back to language learning. Instead of flashcards and multiple choice questions, you speak. From day one. Just like you learned your first language.
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="bg-neutral-100 rounded-2xl border-2 border-dashed border-neutral-300 flex items-center justify-center min-h-[300px]">
                <p className="text-neutral-400 font-sans text-sm">
                  [Screenshot placeholder]
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display text-foreground mb-16"
          >
            Key Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                  }}
                  className="border border-neutral-200 rounded-xl p-6 md:p-8 hover:border-neutral-300 hover:shadow-md transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-foreground mb-5" strokeWidth={1.5} />
                  <h3 className="text-xl md:text-2xl font-display text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base font-sans text-neutral-700 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Image Placeholders */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display text-foreground mb-16"
          >
            Product Screenshots
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: num * 0.1,
                  duration: 0.5,
                }}
                className="bg-neutral-100 rounded-2xl border-2 border-dashed border-neutral-300 flex items-center justify-center min-h-[250px] md:min-h-[300px]"
              >
                <p className="text-neutral-400 font-sans text-sm">
                  [Screenshot {num} placeholder]
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 md:py-32 bg-white border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-8">
              Challenges & Learnings
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-neutral-300 pl-6">
                <h3 className="text-xl font-display text-foreground mb-2">
                  Speech Recognition Accuracy
                </h3>
                <p className="text-base md:text-lg font-sans text-neutral-700 leading-relaxed">
                  Building reliable speech recognition for language learners with varying accents and pronunciation levels.
                </p>
              </div>
              <div className="border-l-2 border-neutral-300 pl-6">
                <h3 className="text-xl font-display text-foreground mb-2">
                  Natural Conversation Flow
                </h3>
                <p className="text-base md:text-lg font-sans text-neutral-700 leading-relaxed">
                  Creating AI conversations that feel natural and adapt to the learner&apos;s skill level in real-time.
                </p>
              </div>
              <div className="border-l-2 border-neutral-300 pl-6">
                <h3 className="text-xl font-display text-foreground mb-2">
                  Balancing Structure & Freedom
                </h3>
                <p className="text-base md:text-lg font-sans text-neutral-700 leading-relaxed">
                  Providing enough guidance for beginners while allowing advanced learners the freedom to explore.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xl md:text-2xl font-sans text-neutral-700 leading-relaxed mb-8">
              Echo is live and helping thousands of learners practice speaking every day.
            </p>
            <a
              href="https://useecho.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white rounded-xl font-sans text-base hover:bg-neutral-800 transition-colors duration-300 group"
            >
              Try Echo
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
