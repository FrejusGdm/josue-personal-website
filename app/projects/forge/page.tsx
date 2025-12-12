"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    tech: "Next.js 15 + React 19",
    detail: "With TypeScript and Tailwind CSS",
  },
  {
    category: "3D",
    tech: "Three.js + Google Model Viewer",
    detail: "Interactive GLB rendering",
  },
  {
    category: "Backend",
    tech: "FastAPI (Python)",
    detail: "AI generation pipeline",
  },
  {
    category: "Database",
    tech: "Convex",
    detail: "Real-time database and file storage",
  },
  {
    category: "Auth",
    tech: "Clerk",
    detail: "User authentication",
  },
  {
    category: "AI Models",
    tech: "Gemini 2.5 Flash + Trellis",
    detail: "2D generation and image-to-3D conversion",
  },
];

const teamMembers = [
  { name: "Andrew Wu", role: "Idea & Hardware", background: "Mechanical Engineering" },
  { name: "Josh", role: "Backend Setup", background: "Initial pipeline architecture" },
  { name: "Josue", role: "Frontend & Integration", background: "UI, API integration, prompt engineering" },
];

export default function ForgePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Speed up video playback to 1.5x
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-neutral-100">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Projects
        </Link>

        {/* Header */}
        <header className="mb-16 md:mb-24">
          <h1 className="font-display text-4xl md:text-5xl text-neutral-900 mb-4 tracking-tight">
            Forge
          </h1>
          <p className="text-xl font-sans text-neutral-600 leading-relaxed mb-6">
            AI-powered custom keycap design: from text prompt to 3D model in seconds
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-neutral-500">
            <a
              href="https://forge-keycaps.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              2025
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-12 md:space-y-16">
          {/* Hero Image */}
          <section>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-100 bg-white">
              <Image
                src="/forge-project/forge-hero.png"
                alt="Forge homepage"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </section>

          {/* The Story */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              How It Started
            </h2>
            <p>
              Andrew Wu, a mechanical engineering major at my school, had this idea: what if you could
              design custom mechanical keyboard keycaps using AI? Just type a description and get a
              3D model ready for printing. He was connected to me through our mutual friend Josh,
              and within a week we had a working prototype.
            </p>
            <p>
              The division of labor was clear. Josh set up the initial backend pipeline and API
              architecture. I built the frontend, the user interface, all the visual experience stuff.
              Later, I linked everything together and improved the backend pipeline, specifically the
              prompting strategy to get better results from the AI models.
            </p>
          </section>

          {/* The Team */}
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="p-4 border border-neutral-100 rounded-lg"
                >
                  <div className="font-medium text-neutral-900 mb-1">
                    {member.name}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {member.role} · {member.background}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Building Photos */}
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Building It
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-100">
                <Image
                  src="/forge-project/my_friend_josh.jpeg"
                  alt="Josh working on the backend"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-100">
                <Image
                  src="/forge-project/my_hand_on_the_computer.jpeg"
                  alt="Building the frontend"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-500 italic">
              Late night hacking sessions getting the pipeline and frontend working.
            </p>
          </section>

          {/* How It Works */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              How It Works
            </h2>
            <p>
              The pipeline is pretty straightforward. You type a prompt describing what you want your
              keycap to look like. Maybe &ldquo;a cyberpunk neon keycap with circuit patterns&rdquo; or
              &ldquo;a crystal keycap with aurora colors inside.&rdquo; You pick your material (PBT, ABS,
              resin, metal), your profile (Cherry, SA, DSA), and hit generate.
            </p>
            <p>
              Behind the scenes, we construct a detailed prompt with all the keycap-specific terminology:
              dimensions, material properties, viewing angle. This goes to Gemini 2.5 Flash which generates
              a 2D design. That image then gets passed to Trellis, which converts it into a 3D GLB model.
              The whole thing takes maybe 30 seconds, and you get an interactive 3D preview you can spin
              around.
            </p>
          </section>

          {/* Demo Video */}
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Demo
            </h2>
            <div className="relative w-full overflow-hidden rounded-lg border border-neutral-100 bg-neutral-50">
              <video
                ref={videoRef}
                src="/forge-project/forge_ai_demo.mov"
                controls
                className="w-full"
                poster="/forge-project/forge-hero.png"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-4 text-sm text-neutral-500 italic">
              Full walkthrough of the keycap generation process (sped up 1.5x).
            </p>
          </section>

          {/* Design Philosophy */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Design Philosophy
            </h2>
            <p>
              We took a lot of inspiration from Ideogram.ai. Clean, simple, white-dominated interface
              with subtle gray accents. The philosophy was &ldquo;simple and great&rdquo; but with delightful
              details. One thing we spent way too much time on was the loading animation: a custom
              Tetris-style animation where blocks stack up while you wait for your keycap to generate.
            </p>
            <p>
              For the 3D viewing, we used Google Model Viewer instead of rolling our own Three.js
              solution. It just works: auto-rotate, camera controls, shadows, all built in. We still
              use Three.js for some custom animations, but for displaying GLB files, Model Viewer
              was the right call.
            </p>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Tech Stack
            </h2>
            <div className="space-y-6">
              {techStack.map((item) => (
                <div
                  key={item.category}
                  className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8"
                >
                  <span className="text-sm font-medium text-neutral-400 md:w-24 flex-shrink-0">
                    {item.category}
                  </span>
                  <div>
                    <span className="font-medium text-neutral-900">
                      {item.tech}
                    </span>
                    <span className="text-neutral-500 ml-2">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Smart Prompting */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Smart Prompting
            </h2>
            <p>
              One of the things I worked on was the prompting strategy. When you select &ldquo;PBT&rdquo;
              as your material, we do not just pass that word to the AI. We expand it to &ldquo;matte,
              slightly grainy textured surface, no shine, durable look.&rdquo; Same with profiles:
              &ldquo;Cherry&rdquo; becomes &ldquo;9.4mm height, low sculpted with subtle cylindrical
              top curve.&rdquo;
            </p>
            <p>
              This domain knowledge made a huge difference in the quality of the outputs. The AI
              does not know what a Cherry profile keycap looks like unless you tell it the specific
              dimensions and characteristics.
            </p>
          </section>

          {/* Challenges */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Challenges
            </h2>
            <p>
              The main challenge was performance. Loading too many 3D models at once in the gallery
              would kill the browser. We solved this with a hover-to-load pattern: models only load
              their 3D preview when you hover over the card. Until then, it is just a 2D thumbnail.
            </p>
            <p>
              We also ran into issues with Next.js image optimization timing out on the AI-generated
              images (they can be pretty large and variable). The fix was simple: use the unoptimized
              prop to bypass server-side optimization for generated assets.
            </p>
          </section>

          {/* Reflection */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Looking Back
            </h2>
            <p>
              We built the whole thing in about a week. It was intense but fun, the kind of project
              where you are learning new things every day and seeing real progress. Going from
              &ldquo;what if we could do AI keycaps&rdquo; to a working prototype with 3D models you can
              spin around in your browser, that felt pretty cool.
            </p>
            <p>
              The next step would be integrating with actual 3D printing services so people can order
              physical keycaps. But for now, it is a fun proof of concept that shows what is possible
              when you combine text-to-image AI with image-to-3D pipelines.
            </p>
          </section>

          {/* Footer/Meta */}
          <footer className="pt-8 border-t border-neutral-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-neutral-500 font-sans">
              <p>Frontend, Backend Integration, Prompt Engineering</p>
              <p>2025</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
