"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    year: "2025",
    title: "Echo",
    tagline: "Speech-first language learning",
    description:
      "Started from my frustration learning Chinese. Echo is a speech focused language learning app that brings immersion back through real conversations instead of flashcards, serving 100+ learners with AI powered speech recognition and feedback.",
    href: "/projects/echo",
    tags: ["AI", "EdTech", "Speech Recognition", "Live Product"],
    status: "Active",
    image: "/echo-project/old-homepage.png",
  },
  // {
  //   year: "2025",
  //   title: "Project A",
  //   tagline: "Offline AI Education for Africa",
  //   description:
  //     "An offline AI tutor designed for African classrooms and community spaces. Runs on devices like Raspberry Pi, supports languages such as Adja, and delivers adaptive lessons even without internet.",
  //   href: "/projects/project-a",
  //   tags: ["AI", "Edge Computing", "NLP", "Accessibility"],
  //   status: "In Development",
  //   image: "/placeholder.png",
  // },
  {
    year: "2025",
    title: "Calendai",
    tagline: "Intelligent Scheduling Assistant",
    description:
      "Centralizes college life by scraping syllabi, Canvas, and professor websites, then auto syncing every assignment and exam to Google Calendar.",
    href: "/projects/calendai",
    tags: ["AI", "Productivity", "SaaS"],
    status: "Prototype",
    image: "/calendai-project/hero-calendai.png",
  },
  {
    year: "2025",
    title: "Nexus Footwear",
    tagline: "Custom 3D-Printed Shoe E-commerce",
    description:
      "Built the full e-commerce platform for a custom 3D-printed shoe company. Integrated Next.js frontend, Express.js backend, MongoDB, and Stripe payments. A collaboration with friends turning their vision into a real product.",
    href: "/projects/nexus",
    tags: ["Web Dev", "E-commerce", "Full-Stack", "Stripe"],
    status: "Completed",
    image: "/nexus/new-love-this.png",
  },
  {
    year: "2025",
    title: "Forge",
    tagline: "AI-Generated 3D Keycaps",
    description:
      "Built in a week with friends. Type a prompt, pick your material and profile, and get an interactive 3D keycap model. Powered by Gemini for 2D generation and Trellis for image-to-3D conversion.",
    href: "/projects/forge",
    tags: ["AI", "3D", "Generative", "Full-Stack"],
    status: "Prototype",
    image: "/forge-project/homepage.png",
  },
  {
    year: "2024",
    title: "Davis Peace Project",
    tagline: "Adja Language Documentation",
    description:
      "Language documentation workshops in Benin that created the first translation dataset for the Adja language and laid the groundwork to preserve it digitally.",
    href: "/projects/davis-peace-project",
    tags: ["Research", "Linguistics", "Social Impact"],
    status: "Completed",
    image: "/logos/benin.png", // Placeholder - using logo for now as it's relevant
  },
  {
    year: "2024 - Present",
    title: "Stamps Scholar Research",
    tagline: "Adja NMT System",
    description:
      "Multi year research effort to build a 10,000+ sentence French Adja corpus and a neural machine translation system using transfer learning and few shot techniques.",
    href: "#",
    tags: ["NLP", "Deep Learning", "Research", "Low-Resource Languages"],
    status: "Ongoing",
    image: "/logos/stamps.png", // Updated to Stamps logo
    isLogo: true, // Flag to handle object-fit differently
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
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

          <header className="mb-16 md:mb-24 text-center md:text-left">
            <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-tight">Projects</h1>
            <p className="font-sans text-xl text-neutral-500 max-w-2xl">
              A collection of products, experiments, and research exploring the intersection of AI and human experience.
            </p>
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
                    className={`group block transition-all duration-500 ${index === 0 ? "pt-4 pb-16 md:pt-6 md:pb-24 border-t-0" : "py-16 md:py-24 border-t border-neutral-100"}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                    {/* Year Column */}
                    <div className="md:col-span-2 flex-shrink-0 pt-2">
                      <span className="font-mono text-sm text-neutral-400 group-hover:text-neutral-900 transition-colors">
                        {project.year}
                      </span>
                    </div>

                    {/* Text Content Column */}
                    <div className="md:col-span-5">
                      <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">
                        {project.title}
                      </h2>
                      <p className="font-sans text-sm font-medium text-neutral-500 mb-6 uppercase tracking-wider">
                          {project.tagline}
                      </p>
                      <p className="font-sans text-lg text-neutral-600 leading-relaxed mb-8">
                        {project.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:gap-4 transition-all">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Image Column */}
                    <div className="md:col-span-5 relative">
                       <div className={`aspect-[4/3] md:aspect-square w-full relative bg-neutral-50 rounded-lg overflow-hidden border border-neutral-100 group-hover:border-neutral-200 transition-colors shadow-sm group-hover:shadow-md ${project.isLogo ? 'p-8 md:p-16' : ''}`}>
                          {project.image && (
                            <Image 
                              src={project.image}
                              alt={project.title}
                              fill
                              className={`${project.isLogo ? 'object-contain p-4' : 'object-cover'} transition-transform duration-700 group-hover:scale-105`}
                            />
                          )}
                       </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="py-12 border-t border-neutral-100 text-center text-neutral-400 text-sm font-mono">
              End of Projects
          </div>
        </motion.div>
      </div>
    </div>
  );
}
