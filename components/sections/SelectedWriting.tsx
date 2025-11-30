"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const writings = [
  {
    title: "The curse/blessing of being an overachiever",
    date: "Jan 2024",
    readTime: "5 min read",
    href: "/writing/curse-blessing-overachiever",
  },
  {
    title: "A love letter to myself - read this when you are sad",
    date: "Feb 2024",
    readTime: "4 min read",
    href: "/writing/love-letter-to-myself",
  },
];

export default function SelectedWriting() {
  return (
    <section className="w-full py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-3xl md:text-4xl">Recent Writing</h2>
          <Link href="/writing" className="text-sm font-sans text-neutral-500 hover:text-black transition-colors mb-1">
            View all essays
          </Link>
        </div>

        <div className="space-y-2">
          {writings.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={post.href}
                className="group block p-6 -mx-6 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
                  <h3 className="font-display text-xl md:text-2xl group-hover:text-accent-cyan-dark transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm font-sans text-neutral-400">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                    <span>{post.readTime}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

