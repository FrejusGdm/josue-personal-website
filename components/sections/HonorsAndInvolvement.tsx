"use client";

import { motion } from "framer-motion";
import { featuredHonors, featuredInvolvement } from "@/content/honors";
import { HonorsList } from "@/components/sections/HonorsList";

export default function HonorsAndInvolvement() {
  return (
    <section className="w-full bg-white py-20 md:py-32 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <HonorsList
            honors={featuredHonors()}
            involvement={featuredInvolvement()}
            variant="current"
            showViewAll
          />
        </motion.div>
      </div>
    </section>
  );
}
