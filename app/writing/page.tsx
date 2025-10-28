"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WritingPage() {
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

          <h1 className="font-display text-6xl md:text-7xl mb-6">Writing</h1>
          <p className="font-sans text-xl text-neutral-600 leading-relaxed mb-12">
            Thoughts on technology, design, research, and the creative process.
          </p>

          <div className="space-y-8">
            <div className="border-l-2 border-neutral-200 pl-6 py-2">
              <p className="font-sans text-neutral-600">
                Blog posts and essays coming soon. This page will host my thoughts,
                tutorials, and reflections on building, learning, and creating.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
