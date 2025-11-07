"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Echo",
    tagline: "Speech-first language learning",
    description:
      "Built from personal need while learning Chinese. Echo brings immersion back to language learning through natural conversation practice—no flashcards, no grammar drills, just speaking.",
    href: "/projects/echo",
    tags: ["AI", "EdTech", "Speech Recognition", "Live Product"],
    status: "Active",
  },
  {
    title: "Project A",
    tagline: "AI Education for Africa",
    description:
      "Building an offline AI tutor designed specifically for Africa. Features include edge AI deployment, native African language support, and adaptive personalized learning. A side project with a big vision.",
    href: "/projects/project-a",
    tags: ["AI", "Education", "Edge Computing", "NLP"],
    status: "In Development",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
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

          <h1 className="font-display text-6xl md:text-7xl mb-6">Projects</h1>
          <p className="font-sans text-xl text-neutral-600 leading-relaxed mb-16">
            Building tools, experiments, and products that push the boundaries of
            what&apos;s possible.
          </p>

          {/* Project Cards */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Link href={project.href}>
                  <motion.div
                    whileHover={{
                      y: -4,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      },
                    }}
                    className="group border border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-neutral-300 hover:shadow-lg transition-all duration-500 cursor-pointer bg-white"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-display text-foreground mb-2 group-hover:text-neutral-700 transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-lg font-sans text-neutral-600 mb-4">
                          {project.tagline}
                        </p>
                      </div>
                      <span className="text-xs font-sans text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-base md:text-lg font-sans text-neutral-700 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-sans text-neutral-600 border border-neutral-200 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="inline-flex items-center gap-2 text-sm font-sans text-foreground"
                      whileHover={{
                        gap: "12px",
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        },
                      }}
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
