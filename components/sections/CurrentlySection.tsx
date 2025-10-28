"use client";

import { motion } from "framer-motion";

const currentItems = [
  "Co-founding Echo - AI language learning for underserved communities",
  "Researching neural machine translation for Adja at Dartmouth",
  "Preparing for Schwarzman Scholars 2025 in Beijing",
  "Documenting endangered West African languages",
];

export default function CurrentlySection() {
  return (
    <section className="w-full bg-neutral-50 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Section heading */}
          <h2 className="text-2xl md:text-3xl font-display text-foreground mb-10 flex items-center gap-3">
            <span className="text-2xl">◆</span> Currently working on:
          </h2>

          {/* List items - Lance Yan style */}
          <div className="space-y-4">
            {currentItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="flex items-start gap-4 group"
              >
                <span className="text-neutral-400 font-sans text-lg mt-1 group-hover:text-foreground transition-colors duration-200">
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
