import { useState, useEffect } from "react";

import { usePathname } from "@/navigation";
import { isActiveRoute } from "@/utils";

interface UseNavigationConfig {
  autoHideThreshold?: number;
  scrollThreshold?: number;
}

export const useNavigation = (config?: UseNavigationConfig) => {
  const { autoHideThreshold = 100, scrollThreshold = 20 } = config || {};

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const isActive = (path: string) => isActiveRoute(pathname, path);

  // Handle scroll effect with auto-hide
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for background change
      setScrolled(currentScrollY > scrollThreshold);

      // Auto-hide logic
      if (currentScrollY > lastScrollY && currentScrollY > autoHideThreshold) {
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
  }, [lastScrollY, autoHideThreshold, scrollThreshold]);

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

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return {
    mobileMenuOpen,
    scrolled,
    hidden,
    pathname,
    isActive,
    toggleMobileMenu,
    closeMobileMenu,
  };
};
