import type { Localized } from "@/lib/i18n/translations";

export interface Project {
  year: string;
  title: string;
  tagline: Localized;
  description: Localized;
  href: string;
  tags: string[];
  status: Localized;
  image?: string;
  external?: boolean;
  isLogo?: boolean;
  video?: string;
}

export const projects: Project[] = [
  {
    year: "2026",
    title: "Akilli",
    tagline: {
      en: "An AI-native university",
      fr: "Une université native IA",
      zh: "AI 原生大学",
    },
    description: {
      en: "Building voice-first, offline tutoring for students in Sub-Saharan Africa — edge AI on cheap hardware for learners who need it most.",
      fr: "Construction d'un tutorat vocal et hors-ligne pour les étudiants d'Afrique subsaharienne — de l'IA embarquée sur du matériel abordable pour les apprenants qui en ont le plus besoin.",
      zh: "为撒哈拉以南非洲学生打造语音优先、可离线的辅导——在廉价硬件上运行端侧 AI，服务最需要的学习者。",
    },
    href: "https://akilli.ai",
    external: true,
    tags: ["AI", "Edge AI", "EdTech", "Voice"],
    status: { en: "Active", fr: "Actif", zh: "进行中" },
  },
  {
    year: "2026",
    title: "Orphi",
    tagline: {
      en: "Speak your way to fluency",
      fr: "Parlez jusqu'à la fluidité",
      zh: "开口说到流利",
    },
    description: {
      en: "Echo reborn. An AI language companion that feels like a friend — witty, proactive, and voice-first. Built from scratch with everything I learned from Echo's 100+ users.",
      fr: "Echo renaît. Un compagnon linguistique IA qui ressemble à un ami — spirituel, proactif et vocal. Reconstruit de zéro avec tout ce que les 100+ utilisateurs d'Echo m'ont appris.",
      zh: "Echo 的重生。一位像朋友一样的 AI 语言伙伴——机智、主动、语音优先。用从 Echo 100 多位用户身上学到的一切从零重建。",
    },
    href: "/projects/orphi",
    tags: ["AI", "Voice", "EdTech", "iOS"],
    status: { en: "Active", fr: "Actif", zh: "进行中" },
    image: "/orphi/orphi-project-prez.png",
  },
  {
    year: "2026",
    title: "WhoDoYouKnow",
    tagline: {
      en: "Discover your real network from Gmail",
      fr: "Découvrez votre vrai réseau depuis Gmail",
      zh: "从 Gmail 发现你真正的人脉",
    },
    description: {
      en: "Finds out who you actually know from your Gmail by scanning email threads, identifying real contacts, and enriching them with AI. Privacy-first and processed in-memory.",
      fr: "Révèle qui vous connaissez vraiment depuis votre Gmail en analysant les fils d'emails, en identifiant les vrais contacts et en les enrichissant avec l'IA. Respectueux de la vie privée et traité en mémoire.",
      zh: "通过扫描邮件往来、识别真实联系人并用 AI 丰富信息，从你的 Gmail 中发现你真正认识的人。隐私优先，全程内存处理。",
    },
    href: "/projects/who-do-you-know",
    tags: ["Next.js", "AI", "OAuth", "OpenRouter"],
    status: { en: "Active", fr: "Actif", zh: "进行中" },
    image: "/who-do-you-know/screenshot.png",
  },
  {
    year: "2025",
    title: "Echo",
    tagline: {
      en: "Speech-first language learning",
      fr: "L'apprentissage des langues par la voix",
      zh: "语音优先的语言学习",
    },
    description: {
      en: "Started from my frustration learning Chinese. Echo is a speech focused language learning app that brings immersion back through real conversations instead of flashcards, serving 100+ learners with AI powered speech recognition and feedback.",
      fr: "Né de ma frustration en apprenant le chinois. Echo est une application d'apprentissage centrée sur la parole qui ramène l'immersion par de vraies conversations au lieu de flashcards, au service de 100+ apprenants avec reconnaissance vocale et retours propulsés par l'IA.",
      zh: "源于我学中文时的挫败感。Echo 是一款以语音为核心的语言学习应用，用真实对话而非单词卡带回沉浸感，以 AI 语音识别与反馈服务 100 多位学习者。",
    },
    href: "/projects/echo",
    tags: ["AI", "EdTech", "Speech Recognition", "Live Product"],
    status: { en: "Active", fr: "Actif", zh: "进行中" },
    image: "/echo-project/old-homepage.png",
  },
  {
    year: "2025",
    title: "Calendai",
    tagline: {
      en: "Intelligent Scheduling Assistant",
      fr: "Assistant de planification intelligent",
      zh: "智能日程助手",
    },
    description: {
      en: "Centralizes college life by scraping syllabi, Canvas, and professor websites, then auto syncing every assignment and exam to Google Calendar.",
      fr: "Centralise la vie universitaire en extrayant les syllabus, Canvas et sites des professeurs, puis synchronise chaque devoir et examen vers Google Calendar.",
      zh: "抓取教学大纲、Canvas 与教授网站，集中管理大学生活，并将每项作业与考试自动同步到 Google Calendar。",
    },
    href: "/projects/calendai",
    tags: ["AI", "Productivity", "SaaS"],
    status: { en: "Prototype", fr: "Prototype", zh: "原型" },
    image: "/calendai-project/hero-calendai.png",
  },
  {
    year: "2025",
    title: "Nexus Footwear",
    tagline: {
      en: "Custom 3D-Printed Shoe E-commerce",
      fr: "E-commerce de chaussures 3D sur mesure",
      zh: "定制 3D 打印鞋电商",
    },
    description: {
      en: "Built the full e-commerce platform for a custom 3D-printed shoe company. Integrated Next.js frontend, Express.js backend, MongoDB, and Stripe payments. A collaboration with friends turning their vision into a real product.",
      fr: "La plateforme e-commerce complète pour une marque de chaussures imprimées en 3D sur mesure. Frontend Next.js, backend Express.js, MongoDB et paiements Stripe. Une collaboration avec des amis pour donner vie à leur vision.",
      zh: "为定制 3D 打印鞋品牌打造的完整电商平台。Next.js 前端、Express.js 后端、MongoDB 与 Stripe 支付。与朋友合作，把他们的愿景变成真实产品。",
    },
    href: "/projects/nexus",
    tags: ["Web Dev", "E-commerce", "Full-Stack", "Stripe"],
    status: { en: "Completed", fr: "Terminé", zh: "已完成" },
    image: "/nexus/new-love-this.png",
  },
  {
    year: "2025",
    title: "Forge",
    tagline: {
      en: "AI-Generated 3D Keycaps",
      fr: "Touches 3D générées par IA",
      zh: "AI 生成 3D 键帽",
    },
    description: {
      en: "Built in a week with friends. Type a prompt, pick your material and profile, and get an interactive 3D keycap model. Powered by Gemini for 2D generation and Trellis for image-to-3D conversion.",
      fr: "Construit en une semaine avec des amis. Tapez un prompt, choisissez le matériau et le profil, et obtenez un modèle 3D interactif de touche. Propulsé par Gemini pour la génération 2D et Trellis pour la conversion image-vers-3D.",
      zh: "和朋友一周建成的项目。输入提示词，选择材质与高度，获得可交互的 3D 键帽模型。Gemini 负责 2D 生成，Trellis 负责图转 3D。",
    },
    href: "/projects/forge",
    tags: ["AI", "3D", "Generative", "Full-Stack"],
    status: { en: "Prototype", fr: "Prototype", zh: "原型" },
    image: "/forge-project/forge-hero.png",
  },
  {
    year: "2026",
    title: "SovereignSignatures",
    tagline: {
      en: "Discover Who You Already Are",
      fr: "Découvrez qui vous êtes déjà",
      zh: "发现你本来的样子",
    },
    description: {
      en: "A pattern recognition experience from RE soul — a proprietary framework that reveals your innate pattern of genius, the way you naturally lead, create, and elevate the world around you.",
      fr: "Une expérience de reconnaissance de schémas issue de RE soul — un cadre propriétaire qui révèle votre schéma inné de génie, votre façon naturelle de diriger, créer et élever le monde autour de vous.",
      zh: "来自 RE soul 的模式识别体验——一套专有框架，揭示你与生俱来的天赋模式，以及你自然而然领导、创造、照亮周围世界的方式。",
    },
    href: "/projects/sovereign-signatures",
    tags: ["Pattern Recognition", "Archetypes", "Framework"],
    status: { en: "Active", fr: "Actif", zh: "进行中" },
  },
  {
    year: "2026",
    title: "Homy Robotics",
    tagline: {
      en: "Voice AI for senior-care robots",
      fr: "IA vocale pour robots d'aide aux seniors",
      zh: "面向老年陪伴机器人的语音 AI",
    },
    description: {
      en: "Built the full voice pipeline (STT → LLM → TTS) for companion robots in seniors' homes — low-memory install, real-time audio, and household-isolated memory.",
      fr: "La pipeline vocale complète (STT → LLM → TTS) pour des robots de compagnie au domicile des seniors — installation légère, audio temps réel et mémoire isolée par foyer.",
      zh: "为独居老人陪伴机器人打造的完整语音链路（STT → LLM → TTS）——轻量安装、实时音频、按家庭隔离的记忆。",
    },
    href: "/projects/homy",
    tags: ["Voice AI", "Robotics", "Edge", "LLM"],
    status: { en: "Active", fr: "Actif", zh: "进行中" },
  },
  {
    year: "2026",
    title: "Parsimmon",
    tagline: {
      en: "Document parsing SaaS",
      fr: "SaaS d'analyse de documents",
      zh: "文档解析 SaaS",
    },
    description: {
      en: "Turned a local parsing engine into a multi-tenant cloud service (FastAPI + TanStack Start) with org-scoped auth, Stripe billing, and a 91.7% accuracy gate.",
      fr: "Un moteur d'analyse local transformé en service cloud multi-tenant (FastAPI + TanStack Start) avec authentification par organisation, facturation Stripe et un seuil de précision de 91,7 %.",
      zh: "将本地解析引擎变为多租户云服务（FastAPI + TanStack Start），具备组织级鉴权、Stripe 计费与 91.7% 准确率门槛。",
    },
    href: "/projects/parsimmon",
    tags: ["SaaS", "FastAPI", "AWS", "Full-Stack"],
    status: { en: "Completed", fr: "Terminé", zh: "已完成" },
  },
  {
    year: "2024",
    title: "Davis Peace Project",
    tagline: {
      en: "Adja Language Documentation",
      fr: "Documentation de la langue adja",
      zh: "阿贾语文献记录",
    },
    description: {
      en: "Language documentation workshops in Benin that created the first translation dataset for the Adja language and laid the groundwork to preserve it digitally.",
      fr: "Des ateliers de documentation linguistique au Bénin qui ont créé le premier jeu de données de traduction pour la langue adja et posé les bases de sa préservation numérique.",
      zh: "在贝宁举办的语言记录工作坊，创建了阿贾语第一个翻译数据集，为其数字化保护奠定基础。",
    },
    href: "/projects/davis-peace-project",
    tags: ["Research", "Linguistics", "Social Impact"],
    status: { en: "Completed", fr: "Terminé", zh: "已完成" },
    image: "/logos/benin.png",
  },
  {
    year: "2024 - Present",
    title: "Stamps Scholar Research",
    tagline: {
      en: "Adja NMT System",
      fr: "Système de TAN adja",
      zh: "阿贾语神经机器翻译系统",
    },
    description: {
      en: "Multi year research effort to build a 10,000+ sentence French Adja corpus and a neural machine translation system using transfer learning and few shot techniques.",
      fr: "Un effort de recherche pluriannuel pour construire un corpus français-adja de 10 000+ phrases et un système de traduction neuronale par transfert et few-shot.",
      zh: "多年研究，构建 10,000+ 句法阿贾语平行语料，并用迁移学习与少样本技术打造神经机器翻译系统。",
    },
    href: "/projects/stamps",
    tags: ["NLP", "Deep Learning", "Research", "Low-Resource Languages"],
    status: { en: "Ongoing", fr: "En cours", zh: "持续中" },
    image: "/logos/stamps.png",
    isLogo: true,
  },
];
