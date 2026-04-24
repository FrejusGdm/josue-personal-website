"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/home";

export default function AgencyHero() {
  return (
    <section className="relative w-full min-h-[100vh] bg-[#0a0a0a] text-[#e8e8e8] px-6 md:px-12 flex flex-col justify-end agency-grain overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-4 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="col-span-12 md:col-span-9 font-medium tracking-[-0.04em] leading-[0.9]"
            style={{
              fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui",
              fontSize: "clamp(4rem, 12vw, 10rem)",
            }}
          >
            JOSUÉ<br />GODEME.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="col-span-12 md:col-span-3 text-xs uppercase text-[#888] space-y-1"
            style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
          >
            {hero.roles.map((r) => (
              <div key={r}>· {r}</div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-[#b8b8b8] leading-[1.45] max-w-2xl mt-12 md:mt-16"
          style={{ fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui" }}
        >
          {hero.tagline}
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          href="#work"
          whileHover={{ scale: 1.02 }}
          className="mt-10 inline-flex items-center gap-3 uppercase text-xs tracking-[0.15em] text-[#0a0a0a] bg-[#d4ff00] px-6 py-4 rounded-none hover:bg-white transition-colors"
          style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
        >
          Selected Work <span>↓</span>
        </motion.a>
      </div>
    </section>
  );
}
