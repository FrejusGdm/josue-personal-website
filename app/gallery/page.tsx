"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="font-display text-6xl md:text-7xl mb-6">Gallery</h1>
          <p className="font-sans text-xl text-neutral-600 leading-relaxed mb-12">
            A visual collection of my work, experiments, and creative explorations.
          </p>

          <div className="space-y-8">
            <div className="border-l-2 border-neutral-200 pl-6 py-2">
              <p className="font-sans text-neutral-600">
                Gallery content coming soon. This page will showcase visual work,
                design experiments, and creative projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
