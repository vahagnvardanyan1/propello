export const FOOTER_LINKS = {
  Company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ],
  Services: [
    { name: "Web Development", path: "/services" },
    { name: "Mobile Backend", path: "/services" },
    { name: "UI/UX Design", path: "/services" },
    { name: "Business Automation", path: "/services" },
  ],
} as const;

export const FOOTER_LEGAL_LINKS = [
  { name: "Privacy Policy", path: "#" },
  { name: "Terms of Service", path: "#" },
] as const;
