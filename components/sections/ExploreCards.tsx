"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Microscope, Rocket, Image as ImageIcon, PenLine } from "lucide-react";

const cards = [
  {
    title: "Research",
    description: "Papers & Adja NLP",
    icon: Microscope,
    href: "/research",
    color: "bg-neutral-50 hover:bg-neutral-100 border-neutral-200",
  },
  {
    title: "Projects",
    description: "Echo & Startups",
    icon: Rocket,
    href: "/projects",
    color: "bg-neutral-50 hover:bg-neutral-100 border-neutral-200",
  },
  {
    title: "Gallery",
    description: "Life in Pictures",
    icon: ImageIcon,
    href: "/gallery",
    color: "bg-neutral-50 hover:bg-neutral-100 border-neutral-200",
  },
  {
    title: "Writing",
    description: "Essays & Thoughts",
    icon: PenLine,
    href: "/writing",
    color: "bg-neutral-50 hover:bg-neutral-100 border-neutral-200",
  },
];

export default function ExploreCards() {
  return (
    <section className="w-full py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Bridge paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-sans text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            From NLP research to building startups, from documenting endangered
            languages to sharing my journey across continents — I explore the
            intersections that matter.{" "}
            <span className="text-foreground font-display">
              Here's what I've been working on.
            </span>
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <Link href={card.href}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${card.color} border rounded-xl p-8 transition-all duration-300 h-full flex flex-col group cursor-pointer shadow-sm hover:shadow-md`}
                  >
                    <div className="mb-6">
                      <Icon
                        size={36}
                        className="text-foreground group-hover:scale-110 transition-transform duration-300"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-display text-foreground mb-3 tracking-tight">
                      {card.title}
                    </h3>

                    <p className="text-base md:text-lg font-sans text-neutral-600 group-hover:text-foreground transition-colors duration-200">
                      {card.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <span className="text-sm font-sans text-foreground flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                        Explore
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut",
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
