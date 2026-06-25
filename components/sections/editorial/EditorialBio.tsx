"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SmartLink from "@/components/ui/SmartLink";
import { bio } from "@/content/home";

const BODY_STYLE = { fontFamily: "var(--font-source-serif), Georgia, serif" };
const DISPLAY_STYLE = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

export default function EditorialBio() {
  const nowParagraph = bio.paragraphs[2].text;
  const nowRest = nowParagraph.replace(/^I built Echo,/, ",");

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
          <p>
            <Image
              src="/josue-headshot/VERT_IMG_5740.png"
              alt="Josué Godeme"
              width={200}
              height={260}
              className="float-right ml-6 mb-3 w-[140px] md:w-[200px] h-auto grayscale-[0.2]"
              priority
            />
            <span
              className="float-left block font-instrument italic text-[4.5em] leading-[0.85] text-[#1a1612] mr-[0.12em] pt-[0.05em] pr-[0.18em] pl-[0.04em]"
            >
              I
            </span>
            {" grew up in "}
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
          <p>{bio.paragraphs[1].text}</p>
          <p>
            I built{" "}
            <SmartLink href="/projects/echo" previewText="My speech-first language learning app.">
              Echo
            </SmartLink>
            {nowRest}
          </p>
        </div>
        <p className="mt-12 italic text-3xl" style={DISPLAY_STYLE}>
          — {bio.signature}
        </p>
      </motion.div>
    </section>
  );
}
