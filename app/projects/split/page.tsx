"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  {
    id: "echo",
    title: "Echo",
    description: "A speech-first language learning app that helps you master pronunciation and fluency through immersive conversation with AI.",
    tags: ["AI", "Mobile", "EdTech"],
    href: "/projects/echo",
    color: "bg-blue-500",
  },
  {
    id: "calendai",
    title: "Calendai",
    description: "An intelligent scheduling assistant that streamlines your calendar management through natural language and automated coordination.",
    tags: ["Productivity", "Web App", "Automation"],
    href: "/projects/calendai",
    color: "bg-orange-500",
  },
  {
    id: "project-a",
    title: "Project A",
    description: "Developing an offline AI tutor designed specifically for African contexts. Features include edge AI deployment on Raspberry Pi.",
    tags: ["Hardware", "AI", "Social Impact"],
    href: "/projects/project-a",
    color: "bg-green-600",
  },
  {
    id: "nexus",
    title: "Nexus",
    description: "A comprehensive e-commerce platform for footwear, featuring 3D product visualization and seamless checkout flows.",
    tags: ["E-commerce", "3D", "Frontend"],
    href: "#",
    color: "bg-purple-600",
  },
];

export default function SplitScroll() {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-neutral-900 text-white selection:bg-white selection:text-black" ref={containerRef}>
      <div className="flex flex-col md:flex-row">
        
        {/* Left: Scrollable Content */}
        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-20 pt-20 md:pt-32">
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white mb-20 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Projects
            </Link>

            <h1 className="font-display text-5xl md:text-7xl mb-24">Selected<br />Work</h1>

            <div className="space-y-32 pb-32">
                {projects.map((project, index) => (
                    <motion.div 
                        key={project.id}
                        className="min-h-[50vh] flex flex-col justify-center"
                        onViewportEnter={() => setActiveProject(index)}
                        viewport={{ margin: "-50% 0px -50% 0px" }}
                    >
                        <span className="font-mono text-sm text-neutral-500 mb-4 block">0{index + 1}</span>
                        <h2 className="font-display text-4xl md:text-5xl mb-6">{project.title}</h2>
                        <p className="font-sans text-lg text-neutral-400 leading-relaxed mb-8 max-w-md">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full border border-neutral-800 text-xs font-mono text-neutral-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link href={project.href} className="inline-flex items-center gap-2 text-white hover:underline decoration-1 underline-offset-4">
                            View Project <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Right: Sticky Visual */}
        <div className="hidden md:block w-1/2 h-screen sticky top-0 p-6 md:p-12 lg:p-20">
            <div className="w-full h-full rounded-3xl overflow-hidden relative bg-neutral-800">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={`absolute inset-0 ${project.color} flex items-center justify-center`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeProject === index ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Placeholder for actual project image */}
                        <h1 className="font-display text-9xl text-white opacity-20 mix-blend-overlay">
                            {project.title[0]}
                        </h1>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}


