"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Microscope, Rocket, BookOpen } from "lucide-react";

const pillars = [
  {
    title: "Researcher",
    icon: Microscope,
    subtitle: "NLP & Low-Resource Languages",
    description:
      "Pioneering neural machine translation for Adja, an under-resourced West African language. Building bridges between linguistics and AI.",
    color: "var(--teal)",
    gradient: "from-[var(--teal-light)] to-[var(--teal-dark)]",
  },
  {
    title: "Builder",
    icon: Rocket,
    subtitle: "Startups & Social Impact",
    description:
      "Co-founding Echo, an AI-driven language learning app. Creating technology that empowers underserved communities.",
    color: "var(--terracotta)",
    gradient: "from-[var(--terracotta-light)] to-[var(--terracotta-dark)]",
  },
  {
    title: "Storyteller",
    icon: BookOpen,
    subtitle: "Culture & Connection",
    description:
      "Bridging African, American, and Chinese contexts. Sharing the journey of a multilingual technologist breaking barriers.",
    color: "var(--gold)",
    gradient: "from-[var(--gold-light)] to-[var(--gold)]",
  },
];

export default function ThreePillarsHero() {
  const [merged, setMerged] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[var(--cream)]"
    >
      {!merged ? (
        <motion.div
          style={{ opacity, scale }}
          className="flex flex-col md:flex-row items-stretch justify-center min-h-screen"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setMerged(true)}
                className="relative flex-1 cursor-pointer overflow-hidden group"
                style={{
                  background: `linear-gradient(135deg, ${
                    isHovered
                      ? pillar.gradient.replace("from-", "").split(" to-")[0]
                      : "var(--cream)"
                  }, ${
                    isHovered
                      ? pillar.gradient.split(" to-")[1].replace("]", "")
                      : "var(--cream)"
                  })`,
                }}
              >
                {/* Border between pillars */}
                {index < pillars.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-[var(--warm-brown)]/10" />
                )}

                {/* Content */}
                <div className="flex flex-col items-center justify-center h-full p-8 md:p-12 text-center">
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                      rotate: isHovered ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <Icon
                      size={64}
                      className="text-[var(--warm-brown)]"
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-[var(--warm-brown)] mb-4 tracking-tight">
                    {pillar.title}
                  </h2>

                  <p className="text-lg md:text-xl font-sans text-[var(--warm-brown)]/70 mb-6">
                    {pillar.subtitle}
                  </p>

                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      height: isHovered ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-base md:text-lg font-sans text-[var(--warm-brown)]/60 max-w-md leading-relaxed overflow-hidden"
                  >
                    {pillar.description}
                  </motion.p>
                </div>

                {/* Hover indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 origin-left"
                  style={{ backgroundColor: pillar.color }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-5xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-[var(--warm-brown)] mb-8 tracking-tight">
              Josué Godeme
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl font-sans text-[var(--warm-brown)]/80 leading-relaxed mb-12">
              A researcher, builder, and storyteller creating technology that
              bridges languages, cultures, and opportunities
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-6 py-3 rounded-full border-2 text-[var(--warm-brown)] font-sans text-lg"
                  style={{ borderColor: pillar.color }}
                >
                  {pillar.title}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Click hint */}
      {!merged && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm md:text-base text-[var(--warm-brown)]/50 font-sans"
        >
          Click any pillar to see the full picture
        </motion.p>
      )}
    </div>
  );
}
