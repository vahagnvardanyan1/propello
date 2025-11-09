export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Full-stack e-commerce solution with real-time inventory and AI recommendations.",
    tags: ["React", "Node.js", "PostgreSQL"],
    metrics: { users: "50K+", conversion: "+127%", time: "6 weeks" },
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    category: "Mobile Backend",
    description:
      "HIPAA-compliant telemedicine platform serving 100K+ patients.",
    tags: ["GraphQL", "MongoDB", "AWS"],
    metrics: { users: "100K+", uptime: "99.9%", time: "8 weeks" },
    color: "from-green-500 to-teal-500",
  },
  {
    id: 3,
    title: "SaaS Dashboard Redesign",
    category: "UI/UX Design",
    description: "Complete UX overhaul that increased user engagement by 200%.",
    tags: ["Figma", "Design System", "User Research"],
    metrics: { engagement: "+200%", satisfaction: "4.9/5", time: "4 weeks" },
    color: "from-pink-500 to-red-500",
  },
  {
    id: 4,
    title: "Marketing Automation Hub",
    category: "Business Automation",
    description: "AI-powered automation saving 40+ hours/week in manual tasks.",
    tags: ["OpenAI", "Zapier", "Python"],
    metrics: { saved: "40hrs/wk", roi: "400%", time: "3 weeks" },
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Web Development",
    description:
      "Property listing platform with virtual tours and AI matching.",
    tags: ["Next.js", "AWS", "Redis"],
    metrics: { listings: "10K+", speed: "0.8s", time: "7 weeks" },
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 6,
    title: "Fitness Tracking API",
    category: "Mobile Backend",
    description: "Real-time data sync for 500K+ active fitness enthusiasts.",
    tags: ["Node.js", "WebSocket", "Docker"],
    metrics: { users: "500K+", latency: "< 50ms", time: "6 weeks" },
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 7,
    title: "Banking App UI",
    category: "UI/UX Design",
    description:
      "Award-winning fintech interface with accessibility at its core.",
    tags: ["Figma", "WCAG AAA", "Animation"],
    metrics: { award: "Gold", accessibility: "AAA", time: "5 weeks" },
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 8,
    title: "CRM Integration Suite",
    category: "Business Automation",
    description: "Unified workflow connecting 15+ business tools seamlessly.",
    tags: ["Make", "Webhooks", "API"],
    metrics: { tools: "15+", efficiency: "+250%", time: "4 weeks" },
    color: "from-orange-500 to-red-500",
  },
] as const;

export const PROJECT_CATEGORIES = [
  "All",
  "Web Development",
  "Mobile Backend",
  "UI/UX Design",
  "Business Automation",
] as const;

