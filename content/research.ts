import type { Localized } from "@/lib/i18n/translations";

export interface LocalizedAffiliation {
  label: Localized;
  detail: Localized;
}

export interface LocalizedLink {
  label: Localized;
  href: string;
  external: boolean;
}

export const researchHeader: {
  name: string;
  affiliations: LocalizedAffiliation[];
  links: LocalizedLink[];
} = {
  name: "Josué Godeme",
  affiliations: [
    {
      label: { en: "Computer Science", fr: "Informatique", zh: "计算机科学" },
      detail: {
        en: "Dartmouth College",
        fr: "Dartmouth College",
        zh: "达特茅斯学院",
      },
    },
    {
      label: {
        en: "King Scholar & Stamps Scholar",
        fr: "King Scholar & Stamps Scholar",
        zh: "King Scholar 与 Stamps Scholar",
      },
      detail: { en: "", fr: "", zh: "" },
    },
    {
      label: {
        en: "Incoming Schwarzman Scholar",
        fr: "Futur Schwarzman Scholar",
        zh: "即将入选的苏世民学者",
      },
      detail: {
        en: "Tsinghua University (2027)",
        fr: "Université Tsinghua (2027)",
        zh: "清华大学（2027）",
      },
    },
  ],
  links: [
    {
      label: { en: "Email", fr: "Email", zh: "邮箱" },
      href: "mailto:josue.c.godeme.25@dartmouth.edu",
      external: false,
    },
    {
      label: { en: "CV", fr: "CV", zh: "简历" },
      href: "/resume/Josue-Godeme-Resume-Engineering.pdf",
      external: true,
    },
    {
      label: {
        en: "Google Scholar",
        fr: "Google Scholar",
        zh: "Google Scholar",
      },
      href: "https://scholar.google.com/citations?user=Se77iHUAAAAJ&hl=en&oi=ao",
      external: true,
    },
  ],
};

export const researchBio = {
  firstParagraph: {
    before: {
      en: "I research and build at the intersection of multilingual AI, voice technologies, and education. My work spans evaluating LLM performance across languages, deploying models on edge devices for low-connectivity classrooms, and designing voice-first learning systems. I also ship products — most recently ",
      fr: "Je fais de la recherche et je construis à l'intersection de l'IA multilingue, des technologies vocales et de l'éducation. Mon travail couvre l'évaluation des LLM dans plusieurs langues, le déploiement de modèles sur des appareils embarqués pour des classes peu connectées, et la conception de systèmes d'apprentissage vocaux. Je mets aussi des produits sur le marché — le plus récent : ",
      zh: "我在多语言 AI、语音技术与教育的交叉领域做研究、做产品。我的工作包括跨语言 LLM 评测、在端侧设备上部署模型以服务弱网教室，以及设计语音优先的学习系统。我也会把产品真正做出来并上线——最近的一个是",
    } as Localized,
    link: { label: "Orphi", href: "/projects/orphi" },
    after: {
      en: ", an AI language companion live on the App Store.",
      fr: ", un compagnon linguistique IA disponible sur l'App Store.",
      zh: "，一款已上架 App Store 的 AI 语言伙伴。",
    } as Localized,
  },
  secondParagraph: {
    en: "Growing up between Adja, French, and English — and now learning Mandarin — shaped how I think about language technology. Most AI systems are built for a handful of languages and fail everyone else. I am interested in changing that: not just through linguistics research, but by building the infrastructure and evaluation frameworks that make multilingual AI actually work at scale.",
    fr: "Grandir entre l'adja, le français et l'anglais — et apprendre aujourd'hui le mandarin — a façonné ma vision des technologies linguistiques. La plupart des systèmes d'IA sont conçus pour une poignée de langues et échouent pour tous les autres. Je veux changer cela : non seulement par la recherche linguistique, mais en construisant l'infrastructure et les cadres d'évaluation qui font fonctionner l'IA multilingue à grande échelle.",
    zh: "在阿贾语、法语和英语之间长大——如今还在学普通话——塑造了我对语言技术的看法。大多数 AI 系统只为少数语言打造，让其他人失望。我想改变这一点：不仅通过语言学研究，更通过构建让多语言 AI 真正规模化落地的基础设施与评测框架。",
  } as Localized,
};

export const researchAreas: Localized[] = [
  {
    en: "Multilingual NLP and LLM evaluation across languages.",
    fr: "Le TAL multilingue et l'évaluation des LLM dans plusieurs langues.",
    zh: "多语言 NLP 与跨语言 LLM 评测。",
  },
  {
    en: "Edge-deployed AI for low-connectivity educational contexts.",
    fr: "L'IA embarquée déployée sur le terrain pour l'éducation en contexte peu connecté.",
    zh: "面向弱网教育场景的端侧 AI 部署。",
  },
  {
    en: "Voice AI and speech technologies.",
    fr: "L'IA vocale et les technologies de la parole.",
    zh: "语音 AI 与语音技术。",
  },
  {
    en: "AI infrastructure for underrepresented languages.",
    fr: "L'infrastructure IA pour les langues sous-représentées.",
    zh: "面向低资源语言的 AI 基础设施。",
  },
];

export const training = [
  {
    name: "Bluedot Impact",
    program: {
      en: "Technical AI Safety",
      fr: "Sécurité technique de l'IA",
      zh: "AI 安全技术",
    } as Localized,
    logo: "bluedot.png",
    href: "https://bluedot.org/",
    detail: {
      en: "Completed technical track on AI alignment, governance and evaluation — applied to multilingual and edge AI.",
      fr: "Parcours technique sur l'alignement, la gouvernance et l'évaluation de l'IA — appliqué à l'IA multilingue et embarquée.",
      zh: "完成 AI 对齐、治理与评测技术方向课程——应用于多语言与端侧 AI。",
    } as Localized,
  },
] as const;

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
  location: Localized;
  date: Localized;
}

export const talks: Talk[] = [
  {
    venue: "Pacific Symposium on Biocomputing",
    location: {
      en: "Hawaii, USA",
      fr: "Hawaï, États-Unis",
      zh: "美国夏威夷",
    },
    date: { en: "Jan 2025", fr: "Janv. 2025", zh: "2025年1月" },
  },
];
