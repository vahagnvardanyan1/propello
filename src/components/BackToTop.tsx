"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { styled } from "@mui/material/styles";

import { colors, zIndex, transitions } from "@/theme/theme";

const BackToTopButton = styled(motion.button)({
  position: "fixed",
  bottom: "24px",
  right: "24px",
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: colors.midnightBlue,
  color: colors.white,
  border: `2px solid ${colors.buttercream}4d`,
  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
  zIndex: zIndex.tooltip,
  transition: `all ${transitions.slow}`,

  "@media (min-width: 640px)": {
    width: "56px",
    height: "56px",
  },

  "&:hover": {
    boxShadow: `0 25px 50px ${colors.buttercream}80`,
    borderColor: `${colors.buttercream}99`,
  },

  "&:focus-visible": {
    outline: `2px solid ${colors.buttercream}`,
    outlineOffset: "2px",
  },
});

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
        <BackToTopButton
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          type="button"
        >
          <ArrowUp size={22} strokeWidth={2.5} />
        </BackToTopButton>
      )}
    </AnimatePresence>
  );
};
