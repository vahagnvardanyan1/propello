import { Search, Palette, Code, Zap, TrendingUp } from "lucide-react";

export const PROCESS_STEPS = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We dive deep into your business needs, goals, and challenges to create a comprehensive strategy.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Our designers craft intuitive, beautiful interfaces that users love and that align with your brand.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Code,
    title: "Build",
    description:
      "Expert engineers transform designs into robust, scalable applications using cutting-edge technology.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Zap,
    title: "Automate",
    description:
      "We integrate intelligent automation and AI to streamline workflows and boost productivity.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description:
      "Continuous monitoring, refinement, and scaling to ensure peak performance and growth.",
    color: "from-red-400 to-red-600",
  },
] as const;

