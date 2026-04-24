"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bio } from "@/content/home";

export default function AgencyBio() {
  return (
    <section className="w-full bg-[#0a0a0a] text-[#e8e8e8] border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[100vh] overflow-hidden agency-grain">
          <Image
            src="/josue-headshot/VERT_IMG_5740.png"
            alt="Josué Godeme"
            fill
            className="object-cover grayscale contrast-[1.05]"
          />
        </div>
        <div className="px-6 md:px-12 py-20 md:py-32 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-lg space-y-10"
          >
            {bio.paragraphs.map((p, i) => (
              <div key={p.label}>
                <div
                  className="text-xs uppercase tracking-[0.15em] text-[#888] mb-3"
                  style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
                >
                  {String(i + 1).padStart(2, "0")} — {p.label}
                </div>
                <p
                  className="text-base md:text-lg leading-[1.55] text-[#e8e8e8]/90"
                  style={{ fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui" }}
                >
                  {p.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
