"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectAPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-sans text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-display text-foreground mb-12 tracking-tight leading-[0.9]">
              AI Education
              <br />
              for Africa
            </h1>
            <p className="text-2xl md:text-3xl font-sans text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              We believe in a future where every African child has access to personalized, culturally-relevant education—regardless of internet connectivity or economic status.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature 01 */}
      <section className="py-32 md:py-40 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <span className="text-9xl md:text-[12rem] font-display text-foreground leading-none block mb-8">
                01
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6 tracking-tight">
                Always Available
              </h2>
              <p className="text-xl md:text-2xl font-sans text-neutral-700 leading-relaxed max-w-2xl">
                Runs on small LLMs at the edge, completely offline. No internet required—just learning, anytime, anywhere on common devices.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="w-full h-[400px] md:h-[500px] bg-neutral-100 rounded-lg flex items-center justify-center">
              <p className="text-neutral-400 font-sans">Edge AI Visualization</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature 02 */}
      <section className="py-32 md:py-40 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <span className="text-9xl md:text-[12rem] font-display text-foreground leading-none block mb-8">
                02
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6 tracking-tight">
                Truly Local
              </h2>
              <p className="text-xl md:text-2xl font-sans text-neutral-700 leading-relaxed max-w-2xl">
                Native African languages with national curricula integration. Built for African students, by understanding African contexts and cultures.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="w-full h-[400px] md:h-[500px] bg-neutral-100 rounded-lg flex items-center justify-center">
              <p className="text-neutral-400 font-sans">Language & Culture Interface</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature 03 */}
      <section className="py-32 md:py-40 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <span className="text-9xl md:text-[12rem] font-display text-foreground leading-none block mb-8">
                03
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6 tracking-tight">
                Adaptive & Expansive
              </h2>
              <p className="text-xl md:text-2xl font-sans text-neutral-700 leading-relaxed max-w-2xl">
                Personalized learning paths that grow with each student. AI that understands not just what you learn, but how you learn best.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="w-full h-[400px] md:h-[500px] bg-neutral-100 rounded-lg flex items-center justify-center">
              <p className="text-neutral-400 font-sans">Adaptive Learning Paths</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 md:py-40 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-5xl md:text-6xl lg:text-7xl font-display text-foreground leading-tight mb-16">
              &ldquo;Education can rarely be solved by just an app&rdquo;
            </blockquote>
            <p className="text-xl md:text-2xl font-sans text-neutral-700 leading-relaxed max-w-2xl mx-auto">
              That&apos;s why we&apos;re building more than software. We&apos;re rethinking the entire ecosystem—from edge AI optimization to modular learning centers that bring quality education directly to communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-32 md:py-40 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-16">
              What We&apos;re Building Towards
            </h2>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl md:text-3xl font-display text-foreground mb-4">
                  Edge Deployment
                </h3>
                <p className="text-lg md:text-xl font-sans text-neutral-700 leading-relaxed">
                  Optimizing AI models to run efficiently on affordable, common devices without compromising quality. Making powerful AI accessible where internet is unreliable or unavailable.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-display text-foreground mb-4">
                  Language & Translation
                </h3>
                <p className="text-lg md:text-xl font-sans text-neutral-700 leading-relaxed">
                  Building high-quality LLMs for underresourced African languages with limited training data. Creating models that understand cultural context, not just vocabulary.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-display text-foreground mb-4">
                  Physical Infrastructure
                </h3>
                <p className="text-lg md:text-xl font-sans text-neutral-700 leading-relaxed">
                  Designing modular learning centers that complement our digital tools. Bringing the complete vision—AI tutors, connectivity, and community—to where it&apos;s needed most.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-32 md:py-40 border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xl md:text-2xl font-sans text-neutral-700 leading-relaxed"
          >
            Project A is a side project for now, but it represents something bigger—a commitment to making world-class education accessible to every African child, on their terms, in their languages.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
