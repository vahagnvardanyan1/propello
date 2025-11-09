"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
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
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "Github" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[var(--deep-navy)] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-[28px]">Propello</h3>
            <p className="text-[var(--ivory)] opacity-80 leading-relaxed">
              We build. We design. We automate.
            </p>
            <p className="text-[var(--ivory)]/60 text-sm">
              Accelerate Innovation. Automate Success.
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--buttercream)] hover:text-[var(--midnight-blue)] transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-[var(--ivory)] opacity-80 hover:text-[var(--buttercream)] hover:opacity-100 transition-all inline-block hover:translate-x-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="mb-4">Stay Updated</h4>
            <p className="text-[var(--ivory)] opacity-80 mb-4">
              Subscribe for insights, updates, and tech news.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[var(--buttercream)] focus:outline-none transition-colors"
              />
              <button className="px-4 py-2 bg-[var(--buttercream)] text-[var(--midnight-blue)] rounded-lg hover:bg-[var(--buttercream)]/90 transition-all hover:shadow-lg">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[var(--ivory)] opacity-60">
            © {currentYear} Propello. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-[var(--ivory)] opacity-60 hover:text-[var(--buttercream)] hover:opacity-100 transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[var(--ivory)] opacity-60 hover:text-[var(--buttercream)] hover:opacity-100 transition-all"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
