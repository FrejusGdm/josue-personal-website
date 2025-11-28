"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Echo",
    tagline: "Speech-first language learning",
    description:
      "Built from personal need while learning Chinese. Echo brings immersion back to language learning through natural conversation practice—no flashcards, no grammar drills, just speaking. Serving 100+ active users with AI-powered speech recognition and personalized feedback.",
    href: "/projects/echo",
    tags: ["AI", "EdTech", "Speech Recognition", "Live Product"],
    status: "Active",
  },
  {
    title: "Project A",
    tagline: "Offline AI Education for Africa",
    description:
      "Developing an offline AI tutor designed specifically for African contexts. Features include edge AI deployment on Raspberry Pi, native African language support (starting with Adja), and adaptive personalized learning to function without internet access.",
    href: "/projects/project-a",
    tags: ["AI", "Edge Computing", "NLP", "Accessibility"],
    status: "In Development",
  },
  {
    title: "Calendai",
    tagline: "Intelligent Scheduling Assistant",
    description:
      "An AI-powered scheduling tool that streamlines calendar management. (Description placeholder - focusing on intelligent time management and automated coordination).",
    href: "#",
    tags: ["AI", "Productivity", "SaaS"],
    status: "Prototype",
  },
  {
    title: "Nexus Footwear",
    tagline: "Modern E-commerce Experience",
    description:
      "A comprehensive e-commerce platform for footwear, featuring 3D product visualization, seamless checkout flows, and a modern, responsive design system.",
    href: "#",
    tags: ["Web Dev", "E-commerce", "3D", "Design"],
    status: "Completed",
  },
  {
    title: "Davis Peace Project",
    tagline: "Adja Language Documentation",
    description:
      "Funded language documentation workshops in Benin, creating the first-ever translation dataset for the Adja language. This project laid the foundation for preserving under-resourced languages through digital tools.",
    href: "#",
    tags: ["Research", "Linguistics", "Social Impact"],
    status: "Completed",
  },
  {
    title: "Stamps Scholar Research",
    tagline: "Adja NMT System",
    description:
      "Led the creation of the first-ever digital corpus of 10,000 French-Adja sentence pairs over 2 years. Developed a neural machine translation system using transfer learning and few-shot techniques to democratize access to information.",
    href: "#",
    tags: ["NLP", "Deep Learning", "Research", "Low-Resource Languages"],
    status: "Ongoing",
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
            A collection of products, experiments, and research initiatives.
          </p>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                className="flex"
              >
                <Link href={project.href} className="w-full block h-full">
                  <motion.div
                    whileHover={{
                      y: -4,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      },
                    }}
                    className="group border border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-neutral-300 hover:shadow-lg transition-all duration-500 cursor-pointer bg-white h-full flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-display text-foreground mb-2 group-hover:text-neutral-700 transition-colors">
                          {project.title}
                        </h2>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-sans text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-sm font-medium text-neutral-400 mb-4 uppercase tracking-wide">
                        {project.tagline}
                    </p>

                    <p className="text-base font-sans text-neutral-600 leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-sans text-neutral-500 border border-neutral-100 bg-neutral-50 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-4 border-t border-neutral-100">
                        <div
                        className="inline-flex items-center gap-2 text-sm font-sans text-neutral-900 font-medium group-hover:gap-3 transition-all"
                        >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
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
