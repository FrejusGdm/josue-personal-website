"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bio } from "@/content/home";

export default function EditorialBio() {
  return (
    <section className="w-full bg-[#faf7f2] text-[#1a1612] px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/15">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[680px] mx-auto"
      >
        <p
          className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          On Josué
        </p>
        <div
          className="text-lg leading-[1.7] space-y-6 text-[#1a1612]/90"
          style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
        >
          <p className="editorial-dropcap">
            <Image
              src="/josue-headshot/VERT_IMG_5740.png"
              alt="Josué Godeme"
              width={200}
              height={260}
              className="float-right ml-6 mb-3 w-[140px] md:w-[200px] h-auto grayscale-[0.2]"
              priority
            />
            {bio.paragraphs[0].text}
          </p>
          {bio.paragraphs.slice(1).map((p) => (
            <p key={p.label}>{p.text}</p>
          ))}
        </div>
        <p
          className="mt-12 italic text-3xl"
          style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
        >
          — {bio.signature}
        </p>
      </motion.div>
    </section>
  );
}
