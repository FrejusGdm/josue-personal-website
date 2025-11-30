"use client";

import { motion } from "framer-motion";
import SmartLink from "@/components/ui/SmartLink";
import Image from "next/image";

const honors = [
  {
    title: "Stamps Scholarship",
    organization: "Stamps Foundation",
    logo: "stamps.png",
    date: "June 2024 – Present",
    link: "https://www.stampsscholars.org/",
    previewText: "Merit-based award supporting exceptional students' leadership and research projects.",
    description: "I was selected as 1 of 7 recipients from my class, out of over 400,000 national applicants. This scholarship supports my leadership and research projects, specifically funding my work on the Adja-language corpus and AI-enabled instruction."
  },
  {
    title: "King Scholarship",
    organization: "King Philanthropies & Dartmouth College",
    logo: "king.png",
    date: "Sept 2022 – Present",
    link: "https://students.dartmouth.edu/fgo/programs/king-scholars",
    previewText: "Prestigious full-ride scholarship with leadership development for students committed to alleviating poverty.",
    description: "I was selected as 1 of 7 recipients from a class of 1,200+ students. This prestigious full-ride scholarship includes leadership development and supports students committed to alleviating poverty."
  },
  {
    title: "Davis Peace Project",
    organization: "Project for Peace & Dickey Center",
    logo: "davis.png",
    date: "Jun 2024 – Aug 2024",
    link: "https://www.davisprojectsforpeace.org/",
    previewText: "$10,000 competitive grant awarded to students for community impact projects.",
    description: "I won a competitive $10,000 grant awarded to only 2 Dartmouth students. I used this funding to organize language documentation workshops in Benin, creating the first-ever translation dataset for the Adja language."
  },
  {
    title: "Bosworth Award",
    organization: "Dickey Center for International Understanding",
    logo: "dickey.png",
    date: "Sept 2025 – Present",
    link: "https://dickey.dartmouth.edu/",
    previewText: "Awarded to 4 students for excellence in international affairs and leadership.",
    description: "I was one of 4 students recognized for excellence in international affairs and leadership. I received this for building cross-regional collaboration to expand educational access and language preservation in Africa."
  },
  {
    title: "National High School Diploma Top Scorer",
    organization: "Ministry of Education, Republic of Benin",
    logo: "benin.png",
    date: "June 2021",
    link: "https://en.wikipedia.org/wiki/Benin",
    previewText: "National examination in the Republic of Benin.",
    description: "I ranked #1 as the top graduate among 80,000+ candidates nationwide. I achieved the 2nd highest average score in the entire history of the Republic of Benin."
  },
];

const involvement = [
  {
    role: "Co-President",
    organization: "NSBE Dartmouth Chapter",
    logo: "dartmouth.png", // TODO: replace with nsbe.png when available
    date: "Sept 2024 – Present",
    description: "Leading chapter strategy and programming for 50+ engineering students. Previously Academic Excellence Chair.",
  },
  {
    role: "Co-President",
    organization: "CoderDojo Dartmouth",
    logo: "dartmouth.png", // TODO: replace with coderdojo.png when available
    date: "Feb 2024 – Present",
    description: "Teaching computer science concepts to ~20 students from underserved high schools in the Upper Valley.",
  },
  {
    role: "Executive Board",
    organization: "Dartmouth African Student Association",
    logo: "dartmouth.png",
    date: "Sept 2023 – Present",
    description: "Coordinating cultural programming, professional development events, and academic transition support.",
  },
  {
    role: "Fellow / Member",
    organization: "Various Programs",
    logo: null,
    date: "Ongoing",
    description: "Color Stack Member, Codepath Graduate, AI4ALL Student Fellow, Nvidia Bridge 2023.",
    badges: [
      { name: "ColorStack", logo: "colorstack.png" },
      { name: "CodePath", logo: "codepath.png" },
      { name: "AI4ALL", logo: "ai4all.png" },
      { name: "NVIDIA", logo: "nvidia.png" },
    ],
  },
];

export default function HonorsAndInvolvement() {
  return (
    <section className="w-full bg-white py-20 md:py-32 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Honors Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-10 text-foreground">Honors & Awards</h2>
            <div className="space-y-12">
              {honors.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-sans font-medium text-lg text-neutral-900 group-hover:text-neutral-700 transition-colors">
                      <SmartLink href={item.link} external previewText={item.previewText}>
                        {item.title}
                      </SmartLink>
                    </h3>
                    <span className="font-sans text-sm text-neutral-400 flex-shrink-0 ml-4">{item.date}</span>
                  </div>
                  <div className="text-sm text-neutral-500 mb-2 font-medium inline-flex items-center gap-1">
                    <Image
                      src={`/logos/${item.logo}`}
                      alt={`${item.organization} logo`}
                      width={14}
                      height={14}
                      className="object-contain"
                    />
                    {item.organization}
                  </div>
                  <p className="font-sans text-neutral-600 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Involvement Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-10 text-foreground">Leadership & Involvement</h2>
            <div className="space-y-12">
              {involvement.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-sans font-medium text-lg text-neutral-900 group-hover:text-neutral-700 transition-colors">
                      {item.role}
                    </h3>
                    <span className="font-sans text-sm text-neutral-400 flex-shrink-0 ml-4">{item.date}</span>
                  </div>
                  <div className="text-sm text-neutral-500 mb-2 font-medium inline-flex items-center gap-1">
                    {item.logo && (
                      <Image
                        src={`/logos/${item.logo}`}
                        alt={`${item.organization} logo`}
                        width={14}
                        height={14}
                        className="object-contain"
                      />
                    )}
                    {item.organization}
                  </div>
                  <p className="font-sans text-neutral-600 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                  {item.badges && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.badges.map((badge, badgeIdx) => (
                        <span key={badgeIdx} className="inline-flex items-center gap-1 text-xs text-neutral-500 bg-neutral-50 px-2 py-1 rounded-full">
                          <Image
                            src={`/logos/${badge.logo}`}
                            alt={`${badge.name} logo`}
                            width={12}
                            height={12}
                            className="object-contain"
                          />
                          {badge.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
