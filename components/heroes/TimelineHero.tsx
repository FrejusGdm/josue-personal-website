"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Globe, Sparkles } from "lucide-react";
import Image from "next/image";

const journeyStops = [
  {
    location: "Benin",
    year: "2003-2021",
    icon: MapPin,
    logo: "benin.png",
    title: "Roots & Foundation",
    description:
      "Ranked 1st among 80,000 students. Four languages. A vision for African education.",
    color: "var(--terracotta)",
  },
  {
    location: "Dartmouth",
    year: "2021-2025",
    icon: GraduationCap,
    logo: "dartmouth.png",
    title: "Computer Science & Chinese",
    description:
      "Adja language documentation. Echo co-founder. Davis Peace Project Grant.",
    color: "var(--teal)",
  },
  {
    location: "Beijing",
    year: "2024",
    icon: Globe,
    logo: "schwarzman.png",
    title: "Cross-Cultural Bridge",
    description:
      "Schwarzman Scholars. Global perspective. Connecting three continents.",
    color: "var(--gold)",
  },
  {
    location: "Future",
    year: "Now",
    icon: Sparkles,
    logo: null,
    title: "Building Tomorrow",
    description:
      "At the intersection of language, AI, and impact. Making the internet accessible to all.",
    color: "var(--warm-brown)",
  },
];

function TimelineStop({
  stop,
  index,
}: {
  stop: (typeof journeyStops)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = stop.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex flex-col md:flex-row items-center gap-8 mb-24 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[var(--warm-brown)]/10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-3 rounded-full"
            style={{ backgroundColor: `${stop.color}20` }}
          >
            <Icon size={24} style={{ color: stop.color }} strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-display text-[var(--warm-brown)] inline-flex items-center gap-1.5">
              {stop.logo && (
                <Image
                  src={`/logos/${stop.logo}`}
                  alt={`${stop.location} logo`}
                  width={18}
                  height={18}
                  className="object-contain"
                />
              )}
              {stop.location}
            </h3>
            <p className="text-sm text-[var(--warm-brown)]/60 font-sans">
              {stop.year}
            </p>
          </div>
        </div>
        <h4 className="text-xl md:text-2xl font-sans text-[var(--warm-brown)] mb-3">
          {stop.title}
        </h4>
        <p className="text-base md:text-lg text-[var(--warm-brown)]/70 font-sans leading-relaxed">
          {stop.description}
        </p>
      </motion.div>

      {/* Timeline node */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="w-6 h-6 rounded-full border-4 z-10"
          style={{
            borderColor: stop.color,
            backgroundColor: "var(--cream)",
          }}
        />
      </div>

      {/* Spacer for layout */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export default function TimelineHero() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[var(--cream)] via-[var(--terracotta-light)]/10 to-[var(--cream)]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[var(--gold)]/5 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-[var(--teal)]/5 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-[var(--warm-brown)] mb-6 tracking-tight">
            Josué Godeme
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-sans text-[var(--warm-brown)]/70 max-w-3xl mx-auto leading-relaxed">
            A journey across continents, languages, and technologies
          </p>
        </motion.div>

        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-80 bottom-0 w-0.5 bg-gradient-to-b from-[var(--terracotta)] via-[var(--teal)] to-[var(--gold)] hidden md:block" />

        {/* Timeline Stops */}
        <div className="relative">
          {journeyStops.map((stop, index) => (
            <TimelineStop key={stop.location} stop={stop} index={index} />
          ))}
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[var(--terracotta)] via-[var(--teal)] to-[var(--gold)] p-[2px] rounded-2xl">
            <div className="bg-[var(--cream)] rounded-2xl px-12 py-8">
              <h3 className="text-3xl md:text-4xl font-display text-[var(--warm-brown)] mb-4">
                Currently
              </h3>
              <p className="text-xl md:text-2xl font-sans text-[var(--warm-brown)]/80 leading-relaxed max-w-2xl">
                Building at the intersection of language, AI, and impact.
                <br />
                <span className="text-[var(--teal)] font-display">
                  Making the internet accessible to everyone.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
