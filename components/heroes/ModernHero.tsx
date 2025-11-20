"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function ModernHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-white">
      {/* Background Gradient Orbs - Subtle & Elegant */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"></div>
        <div className="absolute top-[-10%] right-[20%] w-[400px] h-[400px] bg-purple-50/50 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[30%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-foreground tracking-tight"
        >
          Building with <br className="hidden md:block" />
          <span className="italic font-light text-neutral-400">Purpose.</span>
        </motion.h1>

        {/* Subtext - More Personal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-sans text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed"
        >
          I&apos;m <span className="text-foreground font-medium">Josué Godeme</span>. A 22-year-old student who loves to solve hard problems, explore the world, and capture moments through a lens.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <a
            href="#work"
            className="px-8 py-3.5 bg-foreground text-background font-sans text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            View Selected Work
          </a>
          <Link
            href="/writing"
            className="px-8 py-3.5 bg-white border border-neutral-200 text-neutral-800 font-sans text-sm font-medium rounded-full hover:bg-neutral-50 transition-colors"
          >
            Read Essays
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
         <ArrowDown className="w-5 h-5 text-neutral-400 animate-bounce" />
      </motion.div>
    </section>
  );
}
