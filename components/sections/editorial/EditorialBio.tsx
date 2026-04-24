"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SmartLink from "@/components/ui/SmartLink";

const BODY_STYLE = { fontFamily: "var(--font-source-serif), Georgia, serif" };
const DISPLAY_STYLE = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

export default function EditorialBio() {
  return (
    <section className="w-full bg-white text-[#1a1612] px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/15">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[680px] mx-auto"
      >
        <p
          className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          On Josué
        </p>
        <div
          className="text-lg leading-[1.7] space-y-6 text-[#1a1612]/90"
          style={BODY_STYLE}
        >
          <p className="editorial-dropcap">
            <Image
              src="/josue-headshot/VERT_IMG_5740.png"
              alt="Josué Godeme"
              width={200}
              height={260}
              className="float-right ml-6 mb-3 w-[140px] md:w-[200px] h-auto grayscale-[0.2]"
              priority
            />
            I grew up in{" "}
            <SmartLink
              href="https://en.wikipedia.org/wiki/Benin"
              external
              previewText="A nation in West Africa, known as the birthplace of the Vodun religion and home to the Dahomey Amazons."
              logo="benin.png"
            >
              Benin
            </SmartLink>
            , a country in West Africa. I ranked first in my national high school diploma (baccalauréat) with the 2nd highest score in the history of the exam in my country. This allowed me to attend{" "}
            <SmartLink
              href="https://dartmouth.edu"
              external
              previewText="An Ivy League research university in Hanover, New Hampshire."
              logo="dartmouth.png"
            >
              Dartmouth College
            </SmartLink>
            , where I now study computer science and minor in Mandarin Chinese. I speak four languages—English, French, Chinese, and Adja. At Dartmouth, I am a{" "}
            <SmartLink
              href="https://students.dartmouth.edu/fgo/programs/king-scholars"
              external
              previewText="Prestigious full-ride scholarship with leadership development for students committed to alleviating poverty."
              logo="king.png"
            >
              King Scholar
            </SmartLink>{" "}
            and a{" "}
            <SmartLink
              href="https://www.stampsscholars.org/"
              external
              previewText="Merit scholarship program supporting leadership, scholarship, and service."
              logo="stamps.png"
            >
              Stamps Scholar
            </SmartLink>
            .
          </p>
          <p>
            I believe that technology, when used well and adapted to local contexts, can be powerful in solving problems and improving lives. That&apos;s what I want to do—build products that help people solve problems and improve their lives.
          </p>
          <p>
            I built{" "}
            <SmartLink href="/projects/echo" previewText="My speech-first language learning app.">
              Echo
            </SmartLink>
            , a speech-focused language learning app where you get an AI tutor to help you practice the language through voice. I&apos;ve built a bunch of other projects during my time at Dartmouth. Currently, I&apos;m obsessed with AI in education and languages. I want to make AI understand the languages of the rest of the world—languages that my parents and millions of others across Asia and Africa speak. But I&apos;m also deeply interested in running AI models on the edge (devices like the Raspberry Pi) and mobile (like the iPhone).
          </p>
        </div>
        <p className="mt-12 italic text-3xl" style={DISPLAY_STYLE}>
          — Josué.
        </p>
      </motion.div>
    </section>
  );
}
