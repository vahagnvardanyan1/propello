import { Target, Zap, Heart, Lightbulb } from "lucide-react";

export const MILESTONES = [
  {
    year: "2015",
    title: "The Beginning",
    description:
      "Founded with a mission to democratize enterprise-grade technology for growing businesses.",
  },
  {
    year: "2017",
    title: "First Major Client",
    description:
      "Partnered with Fortune 500 company, scaling our team and capabilities.",
  },
  {
    year: "2019",
    title: "AI Integration",
    description:
      "Pioneered AI-powered automation solutions, saving clients 1000+ hours monthly.",
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: 'Awarded "Top Design & Development Agency" by TechCrunch.',
  },
  {
    year: "2025",
    title: "Global Expansion",
    description:
      "100+ projects delivered. 2M+ users impacted. Building the future.",
  },
] as const;

export const COMPANY_VALUES = [
  {
    icon: Target,
    title: "Excellence",
    description: "We obsess over details and never compromise on quality.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Rapid delivery without sacrificing craftsmanship.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "We build with users and businesses in mind, always.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing boundaries with cutting-edge tech.",
  },
] as const;

export const COMPANY_CULTURE = [
  { emoji: "🚀", label: "Remote-First" },
  { emoji: "🌍", label: "Global Team" },
  { emoji: "📚", label: "Always Learning" },
  { emoji: "🎯", label: "Results-Driven" },
  { emoji: "💡", label: "Creative Freedom" },
  { emoji: "🤝", label: "Collaborative" },
  { emoji: "⚡", label: "Fast-Paced" },
  { emoji: "🎨", label: "Design-Focused" },
] as const;

