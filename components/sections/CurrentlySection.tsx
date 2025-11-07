"use client";

import { motion } from "framer-motion";

const currentItems = [
  <>
    <strong>Building Echo (useecho.ai)</strong> - Speech-first language learning
    through immersion
  </>,
  <>
    <strong>Working on Project A:</strong> Offline AI-powered education for Africa
    in local languages
  </>,
  <>Applying to grad schools while staying fully committed to startup life</>,
  <>Doing research on how to use AI to translate my native language, underresourced language</>,
];

export default function CurrentlySection() {
  return (
    <section className="w-full bg-neutral-50 py-20 md:py-24 border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Section heading */}
          <h2 className="text-lg md:text-xl font-sans text-neutral-400 mb-8 tracking-wide">
            ◆ Currently working on
          </h2>

          {/* List items - Lance Yan style */}
          <div className="space-y-5">
            {currentItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="flex items-start gap-4 group"
              >
                <span className="text-neutral-400 font-sans text-base mt-0.5 group-hover:text-foreground transition-colors duration-200">
                  ↳
                </span>
                <p className="text-base md:text-lg font-sans text-neutral-700 leading-relaxed group-hover:text-foreground transition-colors duration-200">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
