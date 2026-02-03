import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllEssays } from "@/lib/essays";

export default async function SelectedWriting() {
  // Fetch the 2 most recent essays
  const allEssays = await getAllEssays();
  const recentEssays = allEssays.slice(0, 2);

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
          {recentEssays.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group block p-6 -mx-6 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
                <h3 className="font-display text-xl md:text-2xl group-hover:text-accent-cyan-dark transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-sm font-sans text-neutral-400 flex-shrink-0">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short'
                    })}
                  </time>
                  <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

