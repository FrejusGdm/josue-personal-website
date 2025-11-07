"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-20 md:py-24 border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-10 md:gap-12 items-start"
        >
          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img
              src="/photo.jpg"
              alt="Josué Godeme"
              className="w-36 h-36 md:w-40 md:h-40 rounded-full grayscale hover:grayscale-0 transition-all duration-500 border border-neutral-200 object-cover"
            />
          </motion.div>

          {/* Bio */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl md:text-3xl font-display text-foreground mb-2 tracking-tight"
            >
              <span className="text-neutral-400 mr-3">◆</span>Hi, I&apos;m Josué
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-lg font-sans text-neutral-700 leading-relaxed"
            >
              Polyglot builder from Benin who speaks four languages (English, French, Chinese, Adja). When learning Chinese, I had no one to practice with—so I built Echo, a speech-first app bringing immersion back to language learning. Also exploring AI-powered education for Africa (Project A): offline personalized learning in local languages.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
