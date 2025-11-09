import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export const SOCIAL_LINKS = [
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-[#1DA1F2]" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
  { icon: Github, href: "#", label: "Github", color: "hover:bg-[#333]" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-[#E4405F]" },
] as const;

