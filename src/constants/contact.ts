import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageSquare,
} from "lucide-react";

export const QUICK_CONTACT_OPTIONS = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 24 hours",
    action: "hello@propello.com",
    href: "mailto:hello@propello.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Calendar,
    title: "Schedule a Demo",
    description: "Book a free 30-minute consultation",
    action: "Schedule Now",
    href: "#schedule",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our team instantly",
    action: "Start Chat",
    href: "#chat",
    gradient: "from-orange-500 to-red-500",
  },
] as const;

export const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@propello.com",
    href: "mailto:hello@propello.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Innovation Drive, San Francisco, CA 94103",
    href: "https://maps.google.com",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What services does Propello offer?",
    answer:
      "We specialize in Web Development, Mobile Backend Development, UI/UX Design, and Business Automation. We create end-to-end solutions that scale with your business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. Simple projects may take 4-6 weeks, while enterprise solutions can span 3-6 months. We provide detailed timelines during our discovery phase.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible engagement models including fixed-price projects, time & materials, and dedicated team arrangements. Pricing is customized based on your specific requirements and project scope.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes! We provide comprehensive support packages including maintenance, updates, monitoring, and optimization. We're committed to your long-term success.",
  },
  {
    question: "Can you help with automation and AI integration?",
    answer:
      "Absolutely! Business automation and AI integration are core strengths. We help streamline workflows, automate repetitive tasks, and integrate AI capabilities into your systems.",
  },
] as const;

export const SERVICE_OPTIONS = [
  { value: "", label: "Select a service" },
  { value: "web-development", label: "Web Development" },
  { value: "mobile-backend", label: "Mobile Backend Development" },
  { value: "uiux-design", label: "UI/UX Design" },
  { value: "business-automation", label: "Business Automation" },
  { value: "consulting", label: "Consulting" },
] as const;

