import { Gauge, Award, Shield, Zap } from "lucide-react";

export const HOME_METRICS = [
  { end: 100, suffix: "+", label: "Projects Delivered" },
  { end: 10, suffix: "+", label: "Years Experience" },
  { end: 98, suffix: "%", label: "Client Retention" },
] as const;

export const WHY_CHOOSE_PROPELLO = [
  {
    icon: Gauge,
    title: "Lightning Speed",
    description:
      "Rapid development and deployment without compromising quality.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Enterprise-grade solutions with meticulous attention to detail.",
  },
  {
    icon: Shield,
    title: "Rock-Solid Reliability",
    description: "99.9% uptime with proactive monitoring and support.",
  },
  {
    icon: Zap,
    title: "Automation First",
    description: "Every solution is optimized for efficiency and scalability.",
  },
] as const;
