"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    year: "2024",
    title: "Calendai",
    tagline: "Intelligent Scheduling Assistant",
    description: "Automating student life by scraping syllabi and syncing deadlines.",
    href: "/projects/calendai",
  },
  {
    year: "2024",
    title: "Stamps Research",
    tagline: "NLP for Low-Resource Languages",
    description: "Creating the first-ever parallel corpus for the Adja language.",
    href: "#",
  },
  {
    year: "2024",
    title: "Project A",
    tagline: "Offline AI Tutor",
    description: "Running LLMs on Raspberry Pis for education in rural Africa.",
    href: "/projects/project-a",
  },
  {
    year: "2023",
    title: "Echo",
    tagline: "Speech-First Language Learning",
    description: "Immersion practice through AI voice conversation.",
    href: "/projects/echo",
  },
  {
    year: "2023",
    title: "Nexus Footwear",
    tagline: "E-commerce Experience",
    description: "3D product visualization and modern checkout flow.",
    href: "#",
  },
];

export default function EditorialStream() {
  return (
    <div className="min-h-screen bg-white selection:bg-neutral-100">
      <div className="max-w-2xl mx-auto px-6 py-20">
        
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 mb-20 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Projects
        </Link>

        <header className="mb-24 text-center">
          <h1 className="font-display text-5xl md:text-6xl mb-6 tracking-tight">Archive</h1>
          <div className="w-px h-12 bg-neutral-200 mx-auto"></div>
        </header>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={project.href} className="group block py-12 md:py-16 border-t border-neutral-100">
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

      </div>
    </div>
  );
}


