/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — components read from here.
 */

export const siteUrl = "https://bhavyaverdia.me";

export const profile = {
  name: "Bhavya Verdia",
  firstName: "Bhavya",
  role: "AI & Analytics Engineer",
  tagline: "Building intelligent systems with Vision AI & LLMs",
  summary:
    "I design and deploy production-grade Generative AI agents, RAG pipelines, and computer-vision systems — turning research-grade models into reliable products.",
  location: "Pune, Maharashtra, India",
  email: "verdiabhavya08@gmail.com",
  phone: "+91 8905040118",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Bhavya-Verdia",
    linkedin: "https://linkedin.com/in/bhavyaverdia",
  },
};

/** Headline numbers shown in the hero / about strip. */
export const stats: { value: string; label: string }[] = [
  { value: "97%", label: "Vision AI detection accuracy" },
  { value: "4+", label: "LLM agents designed & shipped" },
  { value: "2", label: "Full-stack AI platforms built" },
  { value: "2026", label: "B.Tech CSE — AI & Analytics" },
];

export type TimelineItem = {
  kind: "work" | "education";
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
  current?: boolean;
};

export const timeline: TimelineItem[] = [
  {
    kind: "work",
    role: "AI Intern, Manufacturing IT",
    org: "Mahindra & Mahindra Ltd.",
    location: "Pune",
    period: "Feb 2026 — May 2026",
    points: [
      "Contributed to a Smart Sequencing Digital Twin for optimizing production flow, including an LLM-based buffer-monitoring agent (LangGraph + XGBoost) forecasting buffer starvation and overflow across TCF shop blocks with real-time PPC alerts.",
      "Developed a Vision AI system using YOLO to detect wheel center-cap mismatches across multiple Thar SUV variants.",
      "Implemented colour validation with OpenCV (LAB colour space) plus a transformer-based LLM decision layer (Qwen AI) to handle edge cases and improve pass/fail accuracy.",
      "Automated the quality-inspection workflow, achieving 97% detection accuracy and reducing manual validation effort.",
    ],
  },
  {
    kind: "education",
    role: "B.Tech, Computer Science (AI & Analytics)",
    org: "MIT ADT University",
    location: "Pune",
    period: "2022 — 2026",
    current: true,
    points: [
      "Final-year student focused on production AI: LLM agents, RAG pipelines, and Vision AI.",
      "Strong foundations in DSA, OOP, DBMS, machine learning, and system design.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tags: string[];
  links: { github?: string; live?: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "ayura",
    title: "Ayura AI",
    subtitle: "AI-powered health & wellness platform",
    year: "2025",
    featured: true,
    description:
      "Personalized Gym, Yoga, Diet, Panchakarma, and Home-Remedy plans via a 4-tier pipeline: rule engine → RAG retrieval → LLM reasoning → safety supervisor.",
    longDescription:
      "Ayura AI generates personalized Gym, Yoga, Diet, Panchakarma, and Home-Remedy plans through a 4-tier pipeline with medical contraindication filters. GPT-5.4 mini runs on Azure AI Foundry with JSON-mode structured output and tool use for multi-step health-profile reasoning, falling back to Gemini 2.0 Flash. A ChromaDB RAG pipeline over curated Ayurvedic knowledge bases grounds every recommendation and checks drug–herb interactions, while a LangGraph system of four specialized agents — plus an AI health chatbot with conversational memory — keeps a real-time safety supervisor in the loop.",
    highlights: [
      "4-tier safety-checked pipeline with medical contraindication filters",
      "GPT-5.4 mini on Azure AI Foundry with Gemini 2.0 Flash fallback",
      "RAG over Ayurvedic knowledge bases with drug–herb interaction checks",
      "LangGraph multi-agent system with 4 specialized agents + health chatbot",
    ],
    tags: ["Python", "FastAPI", "LangGraph", "ChromaDB", "Azure AI Foundry", "React"],
    links: { github: "https://github.com/Bhavya-Verdia/Ayura-Ai", live: "https://ayuraai.in" },
  },
  {
    id: "placify",
    title: "Placify AI",
    subtitle: "Placement prediction & career platform",
    year: "2025",
    featured: true,
    description:
      "Full-stack AI platform that predicts job roles, salaries, and placement readiness — and coaches candidates with a ReAct-based agent and adaptive mock interviews.",
    longDescription:
      "Placify AI helps students get placement-ready. Machine-learning models predict job roles, salaries, and placement readiness, while RAG pipelines built with OpenAI, LangChain, and ChromaDB deliver personalized career guidance and skill-gap recommendations. Multi-LLM workflows across Azure OpenAI and Gemini power ATS résumé feedback and AI-generated career insights. A ReAct-based career-coach agent with persistent memory and autonomous tool-calling runs alongside an adaptive mock-interview system with real-time AI evaluation and dynamic follow-up generation.",
    highlights: [
      "ML models for job-role, salary & placement-readiness prediction",
      "RAG-based career guidance and skill-gap recommendations",
      "Multi-LLM ATS résumé feedback (Azure OpenAI + Gemini)",
      "ReAct career-coach agent + adaptive mock interviews with real-time evaluation",
    ],
    tags: ["React", "FastAPI", "Scikit-learn", "LangChain", "Azure OpenAI"],
    links: { github: "https://github.com/Bhavya-Verdia/Placify-MP", live: "https://www.placifyai.dev" },
  },
];

export type MiniProject = {
  title: string;
  description: string;
  tags: string[];
  github: string;
};

/** Compact cards shown under the featured case studies. */
export const moreProjects: MiniProject[] = [
  {
    title: "StyleForge",
    description:
      "Fine-tuned AI code assistant — Mistral-7B tuned with QLoRA on 18k Python instructions, served through an Apple MLX inference engine with side-by-side SSE streaming vs the base model and AST syntax validation.",
    tags: ["Python", "QLoRA", "Mistral-7B", "MLX", "FastAPI", "Docker"],
    github: "https://github.com/Bhavya-Verdia/StyleForge",
  },
  {
    title: "Real-Time Voice Translator",
    description:
      "Web app that converts speech to text, translates it instantly, and speaks the result back — built with Flask, WebSockets, speech recognition, and gTTS.",
    tags: ["Python", "Flask", "WebSockets", "Speech Recognition"],
    github: "https://github.com/Bhavya-Verdia/Real-Time-Translator",
  },
  {
    title: "Food4You",
    description:
      "Food-delivery price comparison site that fetches live menu prices, delivery charges, and discounts across platforms like Swiggy and Zomato via APIs.",
    tags: ["JavaScript", "HTML", "CSS", "REST APIs"],
    github: "https://github.com/Bhavya-Verdia/Food4You",
  },
];

/** Terminal-card lines rendered in the About section. */
export const terminalLines: { key: string; value: string }[] = [
  { key: "name", value: '"Bhavya Verdia"' },
  { key: "role", value: '"AI & Analytics Engineer"' },
  { key: "location", value: '"Pune, India"' },
  { key: "education", value: '"MIT ADT University · 2022—26"' },
  { key: "focus", value: '["LLM agents", "RAG", "Vision AI"]' },
  { key: "status", value: '"open to AI/ML roles"' },
];

export type SkillGroup = { title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Machine Learning",
    skills: ["PyTorch", "Scikit-learn", "YOLO", "OpenCV", "NLP", "Generative AI"],
  },
  {
    title: "LLM & Orchestration",
    skills: ["LangChain", "LangGraph", "RAG", "Azure AI Foundry", "OpenAI APIs"],
  },
  {
    title: "Backend & Data",
    skills: ["Python", "Java", "FastAPI", "Flask", "REST APIs", "MySQL", "MongoDB", "ChromaDB"],
  },
  {
    title: "Tools & Fundamentals",
    skills: ["Git", "Docker", "Pandas", "NumPy", "HuggingFace Transformers", "DSA", "OOP", "DBMS"],
  },
];

export const navItems: { name: string; href: string }[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
