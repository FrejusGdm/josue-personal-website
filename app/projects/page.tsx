"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    year: "2025",
    title: "Echo",
    tagline: "Speech-first language learning",
    description:
      "Built from personal need while learning Chinese. Echo brings immersion back to language learning through natural conversation practice—no flashcards, no grammar drills, just speaking. Serving 100+ active users with AI-powered speech recognition and personalized feedback.",
    href: "/projects/echo",
    tags: ["AI", "EdTech", "Speech Recognition", "Live Product"],
    status: "Active",
  },
  {
    year: "2024",
    title: "Project A",
    tagline: "Offline AI Education for Africa",
    description:
      "Developing an offline AI tutor designed specifically for African contexts. Features include edge AI deployment on Raspberry Pi, native African language support (starting with Adja), and adaptive personalized learning to function without internet access.",
    href: "/projects/project-a",
    tags: ["AI", "Edge Computing", "NLP", "Accessibility"],
    status: "In Development",
  },
  {
    year: "2024",
    title: "Calendai",
    tagline: "Intelligent Scheduling Assistant",
    description:
      "An AI-powered scheduling tool that streamlines calendar management. (Description placeholder - focusing on intelligent time management and automated coordination).",
    href: "/projects/calendai",
    tags: ["AI", "Productivity", "SaaS"],
    status: "Prototype",
  },
  {
    year: "2025",
    title: "Nexus Footwear",
    tagline: "Modern E-commerce Experience",
    description:
      "A comprehensive e-commerce platform for footwear, featuring 3D product visualization, seamless checkout flows, and a modern, responsive design system.",
    href: "#",
    tags: ["Web Dev", "E-commerce", "3D", "Design"],
    status: "Completed",
  },
  {
    year: "2024",
    title: "Davis Peace Project",
    tagline: "Adja Language Documentation",
    description:
      "Funded language documentation workshops in Benin, creating the first-ever translation dataset for the Adja language. This project laid the foundation for preserving under-resourced languages through digital tools.",
    href: "#",
    tags: ["Research", "Linguistics", "Social Impact"],
    status: "Completed",
  },
  {
    year: "2024 - Present",
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
    <div className="min-h-screen bg-white selection:bg-neutral-100">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 mb-20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <header className="mb-0 text-center">
            <h1 className="font-display text-5xl md:text-6xl mb-6 tracking-tight">Archive</h1>
            <div className="w-px h-8 bg-neutral-200 mx-auto"></div>
          </header>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                    href={project.href} 
                    className={`group block transition-all duration-500 ${index === 0 ? "pt-8 pb-12 md:pt-12 md:pb-16 border-t-0" : "py-12 md:py-16 border-t border-neutral-100"}`}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                    {/* Left Column: Year */}
                    <div className="w-24 flex-shrink-0">
                      <span className="font-mono text-sm text-neutral-400 group-hover:text-neutral-900 transition-colors">
                        {project.year}
                      </span>
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex-1">
                      <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">
                        {project.title}
                      </h2>
                      <p className="font-sans text-sm font-medium text-neutral-500 mb-4 uppercase tracking-wider">
                          {project.tagline}
                      </p>
                      <p className="font-sans text-lg text-neutral-600 leading-relaxed mb-6 max-w-md">
                        {project.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:gap-4 transition-all">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="py-12 border-t border-neutral-100 text-center text-neutral-400 text-sm font-mono">
              End of Archive
          </div>
        </motion.div>
      </div>
    </div>
  );
}
