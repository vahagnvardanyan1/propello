import {
  Code,
  Smartphone,
  Palette,
  Zap,
  Layout,
  Database,
  Cloud,
  Lock,
  Cpu,
  Workflow,
} from "lucide-react";

export const SERVICES = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Scalable, performant web applications built with cutting-edge technology and best practices.",
    features: ["React & Next.js", "Cloud-Native", "API Integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile Backend",
    description:
      "Robust, secure backend systems that power mobile experiences at any scale.",
    features: ["RESTful APIs", "Real-time Data", "Microservices"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love and that drive business results.",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "AI-powered workflows that eliminate manual tasks and accelerate growth.",
    features: ["AI Integration", "Workflow Automation", "Process Optimization"],
  },
] as const;

export const SERVICES_DETAILED = [
  {
    icon: Code,
    title: "Web Development",
    tagline: "Build. Scale. Dominate.",
    description:
      "We craft high-performance web applications that scale with your business. From startups to enterprise, we deliver solutions that drive results.",
    features: [
      {
        icon: Layout,
        text: "Responsive Design",
        detail: "Pixel-perfect on every device",
      },
      {
        icon: Cloud,
        text: "Cloud-Native Architecture",
        detail: "Scalable and resilient",
      },
      {
        icon: Zap,
        text: "Lightning Performance",
        detail: "Optimized for speed",
      },
      {
        icon: Lock,
        text: "Enterprise Security",
        detail: "Bank-level protection",
      },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Smartphone,
    title: "Mobile Backend Engineering",
    tagline: "Power. Performance. Scale.",
    description:
      "Robust backend systems that power millions of mobile users. Real-time data, seamless sync, and bulletproof reliability.",
    features: [
      {
        icon: Database,
        text: "Real-Time Data Sync",
        detail: "Instant updates everywhere",
      },
      {
        icon: Cpu,
        text: "Microservices Architecture",
        detail: "Modular and maintainable",
      },
      {
        icon: Cloud,
        text: "Auto-Scaling Infrastructure",
        detail: "Handles any load",
      },
      { icon: Lock, text: "Advanced Security", detail: "OAuth 2.0 & JWT" },
    ],
    technologies: ["Node.js", "GraphQL", "MongoDB", "Redis", "AWS"],
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    tagline: "Design. Delight. Convert.",
    description:
      "Beautiful interfaces that users love and that drive business metrics. We blend art with science to create experiences that convert.",
    features: [
      { icon: Layout, text: "User Research", detail: "Data-driven insights" },
      {
        icon: Workflow,
        text: "Interactive Prototypes",
        detail: "Test before build",
      },
      {
        icon: Palette,
        text: "Design Systems",
        detail: "Scalable consistency",
      },
      { icon: Zap, text: "Conversion Optimization", detail: "Maximize ROI" },
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer"],
    color: "from-pink-500 to-pink-700",
  },
  {
    icon: Zap,
    title: "Business Automation",
    tagline: "Automate. Accelerate. Grow.",
    description:
      "AI-powered automation that eliminates busywork and supercharges your team. Save time, reduce errors, and scale faster.",
    features: [
      {
        icon: Cpu,
        text: "AI Integration",
        detail: "GPT-4 & machine learning",
      },
      {
        icon: Workflow,
        text: "Workflow Automation",
        detail: "End-to-end processes",
      },
      {
        icon: Zap,
        text: "Smart Triggers",
        detail: "Event-driven automation",
      },
      {
        icon: Cloud,
        text: "Integration Hub",
        detail: "1000+ app connections",
      },
    ],
    technologies: ["OpenAI API", "Zapier", "Make", "n8n", "AWS Lambda"],
    color: "from-yellow-500 to-yellow-700",
  },
] as const;
