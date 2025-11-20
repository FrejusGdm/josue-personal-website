import { getEssayBySlug, getAllEssays } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const essay = await getEssayBySlug(slug);
  if (!essay) return {};

  return {
    title: `${essay.title} - Josué Godeme`,
    description: essay.description,
  };
}

export async function generateStaticParams() {
  const essays = await getAllEssays();
  return essays.map((essay) => ({
    slug: essay.slug,
  }));
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params;
  const essay = await getEssayBySlug(slug);

  if (!essay) {
    notFound();
  }

  return (
    <article className="w-full min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        
        {/* Back Link */}
        <div className="mb-12">
          <Link 
            href="/writing"
            className="inline-flex items-center gap-2 text-sm font-sans text-neutral-500 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all essays
          </Link>
        </div>

        {/* Header */}
        <header className="mb-16 space-y-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground">
            {essay.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm font-sans text-neutral-500 border-l-2 border-neutral-100 pl-4">
            <time dateTime={essay.date}>
              {new Date(essay.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{essay.readTime}</span>
          </div>
        </header>

        {/* Content - Prose wrapper */}
        <div className="prose prose-neutral prose-lg max-w-none font-sans
          prose-headings:font-display prose-headings:font-normal prose-headings:tracking-tight
          prose-p:text-neutral-600 prose-p:leading-relaxed
          prose-a:text-foreground prose-a:no-underline prose-a:border-b prose-a:border-neutral-300 hover:prose-a:border-foreground hover:prose-a:transition-colors
          prose-blockquote:border-l-2 prose-blockquote:border-neutral-200 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:font-light prose-blockquote:text-neutral-500
          prose-strong:font-medium prose-strong:text-foreground
        ">
          {essay.content}
        </div>
      </div>
    </article>
  );
}

