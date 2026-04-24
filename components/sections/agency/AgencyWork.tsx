"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/app/projects/data";

const MONO_STYLE = { fontFamily: "var(--font-geist-mono), ui-monospace, monospace" };
const SANS_STYLE = { fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui" };

export default function AgencyWork() {
  const featured = projects.slice(0, 5);
  return (
    <section
      id="work"
      className="w-full bg-[#0a0a0a] text-[#e8e8e8] border-t border-white/10 px-6 md:px-12 py-20 md:py-28"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <p className="text-xs uppercase tracking-[0.15em] text-[#888]" style={MONO_STYLE}>
            Selected Work
          </p>
          <Link href="/projects" className="text-xs uppercase text-[#d4ff00] hover:text-white" style={MONO_STYLE}>
            All projects →
          </Link>
        </div>

        <div className="space-y-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href={p.href}
                className="grid grid-cols-12 gap-4 items-center py-6 border-t border-white/10 group"
              >
                <div
                  className="col-span-12 md:col-span-1 text-xs uppercase text-[#d4ff00]"
                  style={MONO_STYLE}
                >
                  → {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  className="col-span-12 md:col-span-4 font-medium tracking-[-0.03em] text-4xl md:text-5xl leading-[0.95] group-hover:text-[#d4ff00] transition-colors"
                  style={SANS_STYLE}
                >
                  {p.title}
                </div>
                <div className="col-span-12 md:col-span-7 relative aspect-[16/9] overflow-hidden bg-[#141414]">
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className={`${
                        p.isLogo ? "object-contain p-12" : "object-cover"
                      } group-hover:scale-[1.02] transition-transform duration-700`}
                    />
                  )}
                </div>
              </Link>
              <div
                className="text-[10px] uppercase tracking-widest text-[#555] text-right mt-2"
                style={MONO_STYLE}
              >
                NEXT ↓
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
