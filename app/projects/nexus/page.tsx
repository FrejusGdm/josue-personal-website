"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import SmartLink from "@/components/ui/SmartLink";

const techStack = [
  {
    category: "Frontend",
    tech: "Next.js",
    detail: "React framework with server-side rendering",
  },
  {
    category: "Backend",
    tech: "Express.js",
    detail: "Node.js web application framework",
  },
  {
    category: "Database",
    tech: "MongoDB",
    detail: "NoSQL database for product and user data",
  },
  {
    category: "Payments",
    tech: "Stripe",
    detail: "Secure payment processing",
  },
];

const teamMembers = [
  { name: "Aren", role: "Marketing", background: "Econ", linkedin: "https://www.linkedin.com/in/arencarlson/" },
  { name: "Nathan", role: "Product", background: "Mechanical Engineering", linkedin: "https://www.linkedin.com/in/nathan-hammerschmitt-le-gal-076720246/" },
  { name: "Nate", role: "Strategy", background: "CS & Econ", linkedin: "https://www.linkedin.com/in/nathaniel-nate-abbott/" },
];

export default function NexusPage() {
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
            Nexus Footwear
          </h1>
          <p className="text-xl font-sans text-neutral-600 leading-relaxed mb-6">
            Building an e-commerce platform for custom 3D-printed shoes
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-neutral-500">
            <a
              href="https://nexusfootwear.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              nexusfootwear.com
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              2025
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-12 md:space-y-16">
          {/* The Story */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              How It Started
            </h2>
            <p>
              A few friends of mine, <SmartLink href="https://www.linkedin.com/in/arencarlson/" external logo="linkedin.png">Aren</SmartLink>, <SmartLink href="https://www.linkedin.com/in/nathan-hammerschmitt-le-gal-076720246/" external logo="linkedin.png">Nathan</SmartLink>, and <SmartLink href="https://www.linkedin.com/in/nathaniel-nate-abbott/" external logo="linkedin.png">Nate</SmartLink>, were building
              something cool: a custom 3D shoe printing company. The idea
              started with people who have bunions or other foot issues, folks
              who struggle to find shoes that actually fit. They saw a gap and
              decided to fill it.
            </p>
            <p>
              The team was mostly engineers and marketing people. Nathan is a
              mechanical engineer who handles the 3D printing side. Nate does CS
              and Econ, thinking about the business model. Aren, also Econ,
              leads marketing. What they needed was someone to build the
              website.
            </p>
            <p>
              They reached out to me because I had built a bunch of apps and
              websites before. I was happy to help. This was exactly the kind of
              project I love: real product, real team, real customers.
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
                    <SmartLink href={member.linkedin} external logo="linkedin.png">
                      {member.name}
                    </SmartLink>
                  </div>
                  <div className="text-sm text-neutral-500">
                    {member.role} · {member.background}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The Collaboration */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Collaboration
            </h2>
            <p>
              To be fair, they spearheaded a lot of the design. I worked on
              implementing their vision. We looked at a bunch of different
              brands for inspiration, pulled what we liked, and customized
              everything to fit the feel they wanted for Nexus and their
              product.
            </p>
            <p>
              It was a true collaboration. They would send mockups or reference
              sites, we would hop on calls to discuss, and I would build it out.
              Back and forth until it felt right.
            </p>
          </section>

          {/* Before & After */}
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Evolution
            </h2>
            <p className="text-neutral-600 mb-8">
              Here is where we started versus where we ended up:
            </p>

            {/* Old Version */}
            <div className="mb-12">
              <p className="text-sm font-medium text-neutral-400 mb-4">
                Original Version
              </p>
              <div className="space-y-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-100">
                  <Image
                    src="/nexus/old-hero.png"
                    alt="Original Nexus hero section"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-100">
                    <Image
                      src="/nexus/old-homepage-section.png"
                      alt="Original Nexus homepage section"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-100">
                    <Image
                      src="/nexus/old-shop.png"
                      alt="Original Nexus shop page"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* New Version */}
            <div>
              <p className="text-sm font-medium text-neutral-400 mb-4">
                Current Version
              </p>
              <div className="space-y-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-100 bg-white">
                  <Image
                    src="/nexus/new-hero.png"
                    alt="New Nexus hero section"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-100 bg-white">
                  <Image
                    src="/nexus/new-love-this.png"
                    alt="New Nexus homepage section"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-100 bg-white">
                    <Image
                      src="/nexus/new-cool-section.png"
                      alt="New Nexus cool section"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-100 bg-white">
                    <Image
                      src="/nexus/new-shop-page.png"
                      alt="New Nexus shop page"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Video Walkthrough */}
            <div className="mt-8">
              <p className="text-sm font-medium text-neutral-400 mb-4">
                Full Walkthrough
              </p>
              <div className="relative w-full overflow-hidden rounded-lg border border-neutral-100">
                <video
                  src="/nexus/new-video.mov"
                  controls
                  className="w-full"
                  poster="/nexus/new-hero.png"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
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
            <p className="mt-8 text-sm text-neutral-500 italic">
              For the Stripe integration, I really recommend checking out Theo&apos;s
              GitHub repo on Stripe implementation. Made the whole process much
              smoother.
            </p>
          </section>

          {/* What I Built */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              What I Built
            </h2>
            <p>
              I integrated the whole frontend and backend. The frontend is a
              Next.js project with all the product pages, the shopping cart, and
              the checkout flow. The backend runs on Express.js, handling
              authentication, product management, and order processing. MongoDB
              stores everything: users, products, orders.
            </p>
            <p>
              The Stripe integration was probably the most satisfying part to
              get right. Secure payments, proper error handling, confirmation
              emails. All the stuff that makes an e-commerce site feel
              trustworthy.
            </p>
          </section>

          {/* Reflection */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Looking Back
            </h2>
            <p>
              This project was a lot of fun. Working with friends on something
              real, something that actual customers will use, is different from
              building side projects alone. The feedback loop is faster. The
              stakes feel higher. And when you see someone actually buy
              something through the checkout flow you built, it hits different.
            </p>
            <p className="font-medium text-neutral-900">
              Check it out at{" "}
              <a
                href="https://nexusfootwear.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 underline hover:no-underline"
              >
                nexusfootwear.com
              </a>
              .
            </p>
          </section>

          {/* Footer/Meta */}
          <footer className="pt-8 border-t border-neutral-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-neutral-500 font-sans">
              <p>Full-stack development: Frontend, Backend, Payments</p>
              <p>2025</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
