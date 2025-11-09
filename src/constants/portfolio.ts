import { Award, Users, Clock, TrendingUp } from "lucide-react";

export const PORTFOLIO_STATS = [
  { icon: Award, value: "100+", label: "Projects Delivered" },
  { icon: Users, value: "2M+", label: "Users Impacted" },
  { icon: Clock, value: "10K+", label: "Hours Saved" },
  { icon: TrendingUp, value: "350%", label: "Avg ROI" },
] as const;

export const CASE_STUDIES = [
  {
    title: "E-Commerce Automation",
    company: "RetailTech Inc.",
    challenge: "Manual order processing taking 20+ hours weekly",
    solution: "AI-powered automation with real-time inventory sync",
    results: [
      { metric: "95%", label: "Time Saved" },
      { metric: "$50K", label: "Annual Savings" },
      { metric: "99.9%", label: "Accuracy Rate" },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Healthcare Platform Scale",
    company: "MediConnect",
    challenge: "Platform crashing under 10K concurrent users",
    solution: "Microservices architecture with auto-scaling",
    results: [
      { metric: "100K+", label: "Active Users" },
      { metric: "0.8s", label: "Load Time" },
      { metric: "99.99%", label: "Uptime" },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "UX Redesign Impact",
    company: "SaaS Platform",
    challenge: "High bounce rate and low user engagement",
    solution: "Complete UX overhaul with user research",
    results: [
      { metric: "200%", label: "Engagement" },
      { metric: "45%", label: "Conversion Up" },
      { metric: "4.9/5", label: "Satisfaction" },
    ],
    color: "from-purple-500 to-pink-500",
  },
] as const;
