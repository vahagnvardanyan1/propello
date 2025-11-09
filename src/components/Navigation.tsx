"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/", ariaLabel: "Navigate to home page" },
    { name: "Services", path: "/services", ariaLabel: "View our services" },
    {
      name: "Portfolio",
      path: "/portfolio",
      ariaLabel: "Explore our portfolio",
    },
    { name: "About", path: "/about", ariaLabel: "Learn about us" },
    { name: "Contact", path: "/contact", ariaLabel: "Get in touch" },
  ];

  const isActive = (path: string) => pathname === path;

  // Handle scroll effect with auto-hide
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for background change
      setScrolled(currentScrollY > 20);

      // Auto-hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    // Intentionally closing menu on route change - this is desired UX behavior
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <motion.nav
        className={`fixed w-full z-[var(--z-fixed)] transition-all duration-300 ${
          scrolled
            ? "bg-[var(--midnight-blue)]/98 backdrop-blur-xl shadow-lg"
            : "bg-[var(--midnight-blue)]/95 backdrop-blur-md"
        } border-b border-white/10 overflow-visible`}
        animate={{
          top: hidden ? "-100px" : "0",
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 group touch-target"
              aria-label="Propello - Home"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white transition-transform group-hover:scale-105 duration-300"
              >
                <span className="text-[22px] sm:text-[26px] md:text-[28px] tracking-tight font-semibold">
                  Propello
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {links.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.path}
                    aria-label={link.ariaLabel}
                    aria-current={isActive(link.path) ? "page" : undefined}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                      isActive(link.path)
                        ? "text-[var(--buttercream)]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10 transition-transform duration-300 inline-block group-hover:-translate-y-0.5">
                      {link.name}
                    </span>
                    {isActive(link.path) ? (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--buttercream)] shadow-[0_0_8px_rgba(209,207,201,0.5)]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    ) : (
                      <motion.div className="absolute bottom-1 left-4 right-4 h-0.5 bg-white/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                    )}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="ml-2"
              >
                <Link
                  href="/contact"
                  aria-label="Get started with Propello"
                  className="relative inline-flex items-center px-6 py-2.5 bg-[var(--buttercream)] text-[var(--midnight-blue)] rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-[var(--buttercream)]/30 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[var(--buttercream)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--midnight-blue)]"
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                    Get Started
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[var(--buttercream)] via-white to-[var(--buttercream)]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ opacity: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button - ONLY Mobile < 768px */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-3 -mr-2 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--buttercream)] touch-target"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <X size={26} strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Menu size={26} strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Using Absolute Positioning */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop - Mobile Only */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-[var(--z-modal-backdrop)]"
                style={{ top: "64px" }}
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
              />

              {/* Full-Screen Mobile Menu Panel - Right to Left - Mobile Only */}
              <motion.div
                id="mobile-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="md:hidden absolute right-0 top-full w-[85%] max-w-sm bg-gradient-to-br from-[var(--deep-navy)] to-[var(--midnight-blue)] shadow-2xl z-[var(--z-modal)] overflow-y-auto"
                style={{ height: "calc(100vh - 64px)" }}
                role="menu"
              >
                {/* Decorative Gradient Orb */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--buttercream)] opacity-5 rounded-full blur-3xl" />

                <div className="relative h-full flex flex-col px-6 py-8">
                  <nav className="space-y-2 flex-1">
                    {links.map((link, index) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.08,
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                      >
                        <Link
                          href={link.path}
                          role="menuitem"
                          aria-label={link.ariaLabel}
                          aria-current={
                            isActive(link.path) ? "page" : undefined
                          }
                          className={`group block px-5 py-4 rounded-xl transition-all duration-200 touch-target ${
                            isActive(link.path)
                              ? "bg-[var(--buttercream)] text-[var(--midnight-blue)] shadow-lg"
                              : "text-white hover:bg-white/10 active:bg-white/20 active:scale-[0.98]"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-medium">
                              {link.name}
                            </span>
                            {isActive(link.path) && (
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                className="w-2.5 h-2.5 rounded-full bg-[var(--midnight-blue)] ring-2 ring-[var(--midnight-blue)]/30"
                              />
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="pt-6 border-t border-white/10 mt-6"
                  >
                    <Link
                      href="/contact"
                      role="menuitem"
                      aria-label="Get started with Propello"
                      className="group relative flex items-center justify-center px-6 py-4 bg-[var(--buttercream)] text-[var(--midnight-blue)] rounded-xl text-center font-semibold text-lg shadow-xl hover:shadow-2xl active:shadow-md active:scale-[0.98] transition-all duration-200 overflow-hidden touch-target-large"
                    >
                      <span className="relative z-10">Get Started</span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileTap={{ scale: 2, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
