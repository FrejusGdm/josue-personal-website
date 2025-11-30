"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Echo",
    year: "2023",
    role: "Lead Developer",
    description: "Speech-first language learning app.",
    href: "/projects/echo",
    color: "bg-blue-100",
  },
  {
    title: "Calendai",
    year: "2024",
    role: "Full Stack",
    description: "Intelligent scheduling assistant.",
    href: "/projects/calendai",
    color: "bg-orange-100",
  },
  {
    title: "Project A",
    year: "2024",
    role: "Founder",
    description: "Offline AI education for Africa.",
    href: "/projects/project-a",
    color: "bg-green-100",
  },
  {
    title: "Nexus Footwear",
    year: "2023",
    role: "Frontend",
    description: "Modern 3D e-commerce experience.",
    href: "#",
    color: "bg-purple-100",
  },
  {
    title: "Davis Peace Project",
    year: "2024",
    role: "Researcher",
    description: "Language documentation in Benin.",
    href: "#",
    color: "bg-yellow-100",
  },
  {
    title: "Stamps Research",
    year: "2024",
    role: "Scholar",
    description: "Adja-French Neural Machine Translation.",
    href: "#",
    color: "bg-rose-100",
  },
];

export default function InteractiveIndex() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-neutral-950">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white mb-20 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <header className="mb-24">
          <h1 className="font-display text-6xl md:text-8xl mb-6">Index</h1>
          <p className="font-sans text-neutral-400 text-xl max-w-xl">
            Selected works, experiments, and research.
          </p>
        </header>

        <div className="flex flex-col">
          {/* Header Row */}
          <div className="grid grid-cols-12 gap-4 pb-4 border-b border-neutral-800 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">
            <div className="col-span-1">Year</div>
            <div className="col-span-5 md:col-span-4">Project</div>
            <div className="col-span-4 hidden md:block">Role</div>
            <div className="col-span-6 md:col-span-2 text-right">Link</div>
          </div>

          {/* List */}
          <div className="space-y-0" onMouseLeave={() => setHoveredIndex(null)}>
            {projects.map((project, index) => (
              <Link href={project.href} key={index} className="block group relative">
                {/* Hover Reveal Image Placeholder - In real impl this would be an image */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="project-preview"
                    className={`fixed pointer-events-none z-10 hidden md:block w-[400px] h-[300px] rounded-xl overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl ${project.color}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, rotate: Math.random() * 4 - 2 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  >
                     <div className="w-full h-full flex items-center justify-center text-neutral-900 font-display text-4xl opacity-20">
                        {project.title[0]}
                     </div>
                  </motion.div>
                )}

                <div
                  className="grid grid-cols-12 gap-4 py-8 border-b border-neutral-900 items-baseline transition-all duration-300 group-hover:pl-4 group-hover:bg-neutral-900/50"
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  <div className="col-span-1 font-mono text-sm text-neutral-500 group-hover:text-white transition-colors">
                    {project.year}
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    <h3 className="font-display text-2xl md:text-3xl group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-sm mt-1 md:hidden">{project.role}</p>
                  </div>
                  <div className="col-span-4 hidden md:block text-neutral-500 font-sans text-lg group-hover:text-white transition-colors">
                    {project.role}
                  </div>
                  <div className="col-span-6 md:col-span-2 text-right flex justify-end">
                    <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


