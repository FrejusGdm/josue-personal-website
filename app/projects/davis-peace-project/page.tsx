"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import InstitutionBadge from "@/components/ui/InstitutionBadge";

const achievements = [
  {
    number: "15,000+",
    label: "Translated Sentences",
    detail: "First-ever large-scale French-Adja digital resource",
  },
  {
    number: "15+",
    label: "Video Interviews",
    detail: "Artists, elders, market sellers, community members",
  },
  {
    number: "2",
    label: "NGO Partnerships",
    detail: "Living Tongue Institute & 7000 Languages",
  },
];

const learnings = [
  {
    title: "Project Management",
    description:
      "Leading a team in a culturally sensitive context required adaptability, patience, and genuine relationship building.",
  },
  {
    title: "Digital Preservation",
    description:
      "Learned the technical and human sides of language documentation: from corpus creation to interview techniques.",
  },
  {
    title: "Flexibility",
    description:
      "Plans meant nothing. Being available 24/7 for spontaneous opportunities was the real skill.",
  },
];

export default function DavisPeaceProjectPage() {
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
            Davis Peace Project
          </h1>
          <p className="text-xl font-sans text-neutral-600 leading-relaxed mb-6">
            Digitizing the Adja Language: Preserving Heritage in Benin
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-neutral-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Benin, West Africa
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Summer 2024
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-12 md:space-y-16">
          {/* The Opening */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Story
            </h2>
            <p>
              I grew up in Benin, surrounded by family who spoke Adja. But I
              never learned the language. Like many in my generation, I was
              raised in French, the language of school and opportunity. Adja was
              what my grandparents spoke, what I heard but couldn&apos;t
              understand.
            </p>
            <p>
              Years later, at Dartmouth, I decided to change that. I wanted to
              learn my own language. But when I searched for resources: apps,
              dictionaries, courses: I found nothing. Zero digital resources for
              Adja. A language spoken by over a million people, invisible to the
              internet.
            </p>
            <p>
              That absence felt personal. And urgent. Languages are disappearing
              at an alarming rate. Once they&apos;re gone, entire worldviews go
              with them. I realized that if I wanted to learn Adja, I would
              first have to help preserve it.
            </p>
            <p className="font-medium text-neutral-900">
              So I decided to do something about it.
            </p>
          </section>

          {/* What We Set Out To Do */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Vision
            </h2>
            <p>
              With funding from the{" "}
              <span className="font-medium">Project for Peace</span> through
              Dartmouth&apos;s Dickey Center, I set out to create the first
              large-scale digital resource for the Adja language. The goal was
              ambitious: build a sentence corpus that could eventually power
              translation tools, document oral traditions through video
              interviews, and lay the groundwork for a dictionary.
            </p>
            <p>
              I assembled a small team: a videographer, community translators,
              and research assistants. We would work across the Mono and Couffo
              regions of Benin, where Adja is most commonly spoken. I gave
              myself one month.
            </p>
          </section>

          {/* The Reality */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              Reality vs. Expectations
            </h2>
            <p>
              After one month, I hadn&apos;t even started the sentence corpus.
            </p>
            <p>
              The first weeks were consumed by logistics, relationship building,
              and the slow, essential work of gaining community trust.
              Interviews happened on community time, not mine. One day I&apos;d
              get a call: &ldquo;There&apos;s an artist who can talk in 3
              hours.&rdquo; I had to be ready.
            </p>
            <p>
              The translation process itself was humbling. Here&apos;s how it
              worked: a young team member would read a French sentence aloud. An
              elder, often someone who couldn&apos;t read, would translate it
              into Adja. Another person would write it down phonetically. Then
              someone else would digitize it. Four people for one sentence. It
              was slow, collaborative, and beautiful.
            </p>
            <p>
              I learned that fieldwork doesn&apos;t follow timelines. You
              can&apos;t schedule spontaneity. You can only show up, again and
              again, and be ready when the moment comes.
            </p>
          </section>

          {/* What We Built */}
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-12">
              What We Built
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((item) => (
                <div key={item.label} className="text-center md:text-left">
                  <div className="font-display text-4xl text-neutral-900 mb-2">
                    {item.number}
                  </div>
                  <div className="font-medium text-neutral-900 mb-1">
                    {item.label}
                  </div>
                  <p className="text-sm text-neutral-500">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-neutral-500 italic">
              Note: We started with 1,500 sentences that summer. Since then,
              we&apos;ve found our rhythm and scaled to over 15,000: the process
              that once took weeks now takes days.
            </p>
            <div className="mt-8 prose prose-neutral prose-lg max-w-none">
              <p>
                Beyond the numbers: we documented folktales that had only ever
                existed in memory. We captured the voices of elders who may not
                be here in ten years. We created partnerships with the Living
                Tongue Institute and 7000 Languages that will carry this work
                forward.
              </p>
            </div>
          </section>

          {/* Moments That Mattered */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              The Moments That Mattered
            </h2>
            <p>
              One interview stays with me. We were speaking with a retired high
              school teacher, an elder who had spent his life teaching in
              French. When we finished recording, he paused, looked at me, and
              began to pray. He thanked God that someone was finally preserving
              Adja. That the language might live on.
            </p>
            <p>
              I wasn&apos;t prepared for that. I came to do research. I left
              understanding that this work carries a weight I hadn&apos;t
              anticipated. For the community, this wasn&apos;t an academic
              exercise. It was hope: hope that their language might one day be
              taught in schools, that their grandchildren might understand them.
            </p>
            <p>
              I also discovered my own country. I visited towns I&apos;d never
              been to, met communities I didn&apos;t know existed. Benin became
              more real to me through this work.
            </p>
          </section>

          {/* What I Learned */}
          <section>
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-12">
              What I Learned
            </h2>
            <div className="space-y-10">
              {learnings.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12"
                >
                  <h3 className="text-lg font-medium text-neutral-900 md:w-1/3 flex-shrink-0">
                    {item.title}
                  </h3>
                  <p className="font-sans text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* The Bigger Picture */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              On Peace
            </h2>
            <p>
              This was a &ldquo;Peace Project&rdquo; in a place with no war. But
              I&apos;ve come to understand that peace is not just the absence of
              conflict. Peace is the presence of understanding.
            </p>
            <p>
              When a grandmother can&apos;t communicate with her grandchild
              because they don&apos;t share a language, that&apos;s a kind of
              fracture. When a generation loses access to its own stories, its
              own way of seeing the world, something breaks.
            </p>
            <p>
              Preserving a language is about more than words. It&apos;s about
              safeguarding an entire worldview. It&apos;s about ensuring that
              the knowledge, humor, and wisdom encoded in Adja doesn&apos;t
              disappear with the last generation that speaks it fluently.
            </p>
          </section>

          {/* What's Next */}
          <section className="prose prose-neutral prose-lg max-w-none">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">
              What&apos;s Next
            </h2>
            <p>
              This summer was just the beginning. The corpus continues to grow.
              I&apos;m working on a neural machine translation system for Adja
              as part of my Stamps Scholar research. The goal: a tool that can
              translate between French and Adja, making information accessible
              to speakers who were never included in the digital revolution.
            </p>
            <p>
              Eventually, I want to build what I couldn&apos;t find: an app, a
              dictionary, resources that will help the next person who, like me,
              wants to learn their own language.
            </p>
          </section>

          {/* Closing */}
          <section className="border-t border-neutral-100 pt-12">
            <blockquote className="text-xl md:text-2xl font-display text-neutral-900 leading-relaxed">
              &ldquo;Preserving a language is about more than words: it&apos;s
              about safeguarding an entire worldview.&rdquo;
            </blockquote>
          </section>

          {/* Footer/Meta */}
          <footer className="pt-8 border-t border-neutral-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-neutral-500 font-sans">
              <p className="inline-flex items-center gap-1.5">
                Funded by{" "}
                <InstitutionBadge
                  name="Project for Peace"
                  logo="dartmouth.png"
                  href="https://dickey.dartmouth.edu/programs-events/project-peace"
                />
              </p>
              <p>Summer 2024 • Benin, West Africa</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
