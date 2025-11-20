import Link from "next/link";
import { getAllEssays } from "@/lib/mdx";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Writing - Josué Godeme",
  description: "Essays on Tech, language, and whatever else I feel like writing about.",
};

export default async function WritingPage() {
  const essays = await getAllEssays();

  return (
    <main className="w-full min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-16 space-y-4">
          <h1 className="font-display text-5xl md:text-6xl text-foreground">Writing</h1>
          <p className="font-sans text-lg text-neutral-600 max-w-xl">
            Thoughts on building technology for the next billion users, preserving culture, and the future of education.
          </p>
        </div>

        {/* List */}
        <div className="space-y-4">
          {essays.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group block p-6 -mx-6 rounded-2xl hover:bg-neutral-50 transition-colors duration-300"
            >
              <div className="flex flex-col space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-accent-cyan-dark transition-colors">
                    {post.title}
                  </h2>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400 mt-1" />
                </div>
                
                <p className="font-sans text-neutral-600 leading-relaxed">
                  {post.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm font-sans text-neutral-400 pt-1">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
