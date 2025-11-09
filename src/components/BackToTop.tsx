"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial scroll position
    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[var(--midnight-blue)] text-white border-2 border-[var(--buttercream)]/30 shadow-2xl hover:shadow-[var(--buttercream)]/50 hover:border-[var(--buttercream)]/60 focus-visible:ring-2 focus-visible:ring-[var(--buttercream)] focus-visible:ring-offset-2 transition-all duration-300 touch-target"
          style={{ zIndex: 1070 }}
          aria-label="Scroll to top"
          type="button"
        >
          <ArrowUp size={22} strokeWidth={2.5} className="sm:w-6 sm:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
