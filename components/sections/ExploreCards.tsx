"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Microscope, Rocket, Image as ImageIcon, PenLine } from "lucide-react";

const links = [
  {
    title: "Research",
    description: "Papers & Adja NLP",
    icon: Microscope,
    href: "/research",
  },
  {
    title: "Projects",
    description: "Echo & Startups",
    icon: Rocket,
    href: "/projects",
  },
  {
    title: "Gallery",
    description: "Life in Pictures",
    icon: ImageIcon,
    href: "/gallery",
  },
  {
    title: "Writing",
    description: "Essays & Thoughts",
    icon: PenLine,
    href: "/writing",
  },
];

export default function ExploreCards() {
  return (
    <section className="w-full py-24 md:py-32 bg-white border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Section marker and intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-lg md:text-xl font-sans text-neutral-400 mb-6 tracking-wide">
            ◆ Explore my work
          </h2>
          <p className="text-base md:text-lg font-sans text-neutral-600 leading-relaxed max-w-2xl">
            From NLP research to building startups, from documenting endangered
            languages to sharing my journey across continents.
          </p>
        </motion.div>

        {/* Simple link list */}
        <div className="space-y-6">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <Link href={link.href} className="group block">
                  <div className="flex items-center gap-4 text-neutral-500 hover:text-foreground transition-colors duration-200">
                    <span className="text-base">↳</span>
                    <Icon size={18} className="flex-shrink-0" strokeWidth={1.5} />
                    <div className="flex-1 flex items-baseline gap-3">
                      <span className="font-display text-lg md:text-xl tracking-tight">
                        {link.title}
                      </span>
                      <span className="text-sm md:text-base font-sans">
                        {link.description}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
