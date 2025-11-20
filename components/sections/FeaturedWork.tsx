"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  imageSrc?: string;
  href: string;
  color?: string;
  align?: "left" | "right";
}

const Project = ({ title, category, description, href, align = "left" }: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row gap-8 md:gap-20 items-center py-20 ${
        align === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content Side */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="space-y-2">
          <span className="text-xs font-sans uppercase tracking-widest text-neutral-500">
            {category}
          </span>
          <h3 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            {title}
          </h3>
        </div>
        <p className="font-sans text-lg text-neutral-600 leading-relaxed max-w-md mx-auto md:mx-0">
          {description}
        </p>
        <div className="pt-2">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity border-b border-foreground pb-0.5"
          >
            Explore Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Visual Side - Abstract Representation since we might not have images yet */}
      <div className="flex-1 w-full aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-neutral-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
            {/* Placeholder for now - can be replaced with actual images */}
            <div className="text-neutral-300 font-display text-9xl opacity-20 select-none">
                {title.charAt(0)}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function FeaturedWork() {
  return (
    <section id="work" className="w-full py-24 md:py-32 px-6 md:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl mb-4">Selected Work</h2>
          <div className="w-12 h-1 bg-neutral-900 mx-auto"></div>
        </motion.div>

        <div className="space-y-0 divide-y divide-neutral-100/0">
          <Project
            title="Echo"
            category="Language Learning • AI"
            description="A speech-first language learning app that helps you master pronunciation and fluency through immersive conversation with AI."
            href="/projects/echo"
            align="left"
          />

          <Project
            title="Climaflake"
            category="Education • Accessibility"
            description="An offline-first AI tutor designed for Africa. Bringing personalized, curriculum-aligned education to students without reliable internet."
            href="/projects/project-a"
            align="right"
          />
        </div>
      </div>
    </section>
  );
}

