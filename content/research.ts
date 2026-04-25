export const researchHeader = {
  name: "Josué Godeme",
  affiliations: [
    { label: "Computer Science", detail: "Dartmouth College" },
    { label: "King Scholar & Stamps Scholar", detail: "" },
    { label: "Incoming Schwarzman Scholar", detail: "Tsinghua University (2027)" },
  ],
  links: [
    {
      label: "Email",
      href: "mailto:josue.c.godeme.25@dartmouth.edu",
      external: false,
    },
    {
      label: "CV",
      href: "/resume/josue-dartmouth-v2.pdf",
      external: true,
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=Se77iHUAAAAJ&hl=en&oi=ao",
      external: true,
    },
  ],
};

export const researchBio = {
  firstParagraph: {
    before:
      "I research and build at the intersection of multilingual AI, voice technologies, and education. My work spans evaluating LLM performance across languages, deploying models on edge devices for low-connectivity classrooms, and designing voice-first learning systems. I also ship products — most recently ",
    link: { label: "Orphi", href: "/projects/orphi" },
    after: ", an AI language companion live on the App Store.",
  },
  secondParagraph:
    "Growing up between Adja, French, and English — and now learning Mandarin — shaped how I think about language technology. Most AI systems are built for a handful of languages and fail everyone else. I am interested in changing that: not just through linguistics research, but by building the infrastructure and evaluation frameworks that make multilingual AI actually work at scale.",
};

export const researchAreas: string[] = [
  "Multilingual NLP and LLM evaluation across languages.",
  "Edge-deployed AI for low-connectivity educational contexts.",
  "Voice AI and speech technologies.",
  "AI infrastructure for underrepresented languages.",
];

export interface Publication {
  title: string;
  href?: string;
  authors: string;
  venue: string;
  status?: string;
}

export const publications: Publication[] = [
  {
    title:
      "Adja-French Parallel Corpus: A New Resource for Machine Translation of a West African Under-Resourced Language",
    authors: "Godeme, J. et al. (2025).",
    venue: "LREC 2026.",
  },
  {
    title:
      "Artificial Allies: Validation of Synthetic Text for Peer Support Tools through Data Augmentation in NLP Model Development",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Se77iHUAAAAJ&citation_for_view=Se77iHUAAAAJ:u5HHmVD_uO8C",
    authors:
      "Godeme, J., Hill, J., Gaughan, S. P., Hirschbuhl, W. J., Emerson, A. J., Darabos, C., Bobak, C. A., & Fortuna, K. L. (2025).",
    venue: "Proceedings of the Pacific Symposium on Biocomputing, Hawaii, USA.",
  },
];

export const worksInProgress: Publication[] = [];

export interface Talk {
  venue: string;
  location: string;
  date: string;
}

export const talks: Talk[] = [
  {
    venue: "Pacific Symposium on Biocomputing",
    location: "Hawaii, USA",
    date: "Jan 2025",
  },
];
