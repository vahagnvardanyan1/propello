"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { NAVIGATION_LINKS } from "@/constants";
import { useNavigation } from "@/hooks";
import { colors, zIndex, transitions } from "@/theme/theme";

const StyledNav = styled(motion.nav, {
  shouldForwardProp: (prop) => prop !== "scrolled",
})<{ scrolled: boolean }>(({ scrolled }) => ({
  position: "fixed",
  width: "100%",
  zIndex: zIndex.fixed,
  transition: `all ${transitions.slow}`,
  backgroundColor: scrolled
    ? `${colors.midnightBlue}fa`
    : `${colors.midnightBlue}f2`,
  backdropFilter: scrolled ? "blur(24px)" : "blur(16px)",
  boxShadow: scrolled ? "0 10px 40px rgba(0, 0, 0, 0.3)" : "none",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  overflow: "visible",
}));

const NavContainer = styled(Container)({
  position: "relative",
  padding: "0 16px",

  "@media (min-width: 640px)": {
    padding: "0 24px",
  },

  "@media (min-width: 1024px)": {
    padding: "0 32px",
  },
});

const NavContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "64px",

  "@media (min-width: 768px)": {
    height: "80px",
  },
});

const Logo = styled(Link)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  minHeight: "48px",
  minWidth: "48px",
  textDecoration: "none",

  "&:focus-visible": {
    outline: `3px solid ${colors.buttercream}`,
    outlineOffset: "2px",
    borderRadius: "8px",
  },
});

const LogoText = styled("span")({
  color: colors.white,
  fontSize: "22px",
  fontWeight: 600,
  letterSpacing: "-0.02em",
  transition: `transform ${transitions.slow}`,

  "@media (min-width: 640px)": {
    fontSize: "26px",
  },

  "@media (min-width: 768px)": {
    fontSize: "28px",
  },

  "a:hover &": {
    transform: "scale(1.05)",
  },
});

const DesktopNav = styled(Box)({
  display: "none",
  alignItems: "center",
  gap: "8px",

  "@media (min-width: 768px)": {
    display: "flex",
  },
});

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ isActive }) => ({
  position: "relative",
  padding: "8px 16px",
  borderRadius: "12px",
  transition: `all ${transitions.slow}`,
  textDecoration: "none",
  color: isActive ? colors.buttercream : "rgba(255, 255, 255, 0.9)",

  "&:hover": {
    color: colors.white,
  },

  "& > span": {
    position: "relative",
    zIndex: 10,
    display: "inline-block",
    transition: `transform ${transitions.slow}`,
  },

  "&:hover > span": {
    transform: "translateY(-2px)",
  },
}));

const ActiveIndicator = styled(motion.div)({
  position: "absolute",
  bottom: "4px",
  left: "16px",
  right: "16px",
  height: "2px",
  backgroundColor: colors.buttercream,
  boxShadow: `0 0 8px ${colors.buttercream}80`,
});

const HoverIndicator = styled(motion.div)({
  position: "absolute",
  bottom: "4px",
  left: "16px",
  right: "16px",
  height: "2px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  transform: "scaleX(0)",
  transformOrigin: "left",
  transition: `transform ${transitions.slow}`,

  "a:hover &": {
    transform: "scaleX(1)",
  },
});

const GetStartedButton = styled(Link)({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  padding: "10px 24px",
  backgroundColor: colors.buttercream,
  color: colors.midnightBlue,
  borderRadius: "12px",
  overflow: "hidden",
  textDecoration: "none",
  transition: `all ${transitions.slow}`,
  marginLeft: "8px",

  "&:hover": {
    boxShadow: `0 20px 40px ${colors.buttercream}4d`,
    transform: "translateY(-4px)",
  },

  "&:focus-visible": {
    outline: `2px solid ${colors.buttercream}`,
    outlineOffset: "2px",
  },

  "& > span": {
    position: "relative",
    zIndex: 10,
    transition: `transform ${transitions.slow}`,
  },

  "&:hover > span": {
    transform: "scale(1.05)",
  },
});

const GetStartedGradient = styled(motion.div)({
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to right, ${colors.buttercream}, ${colors.white}, ${colors.buttercream})`,
  opacity: 0.3,
});

const MobileMenuButton = styled("button")({
  display: "flex",
  color: colors.white,
  padding: "12px",
  marginRight: "-8px",
  borderRadius: "16px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  transition: `all ${transitions.base}`,
  minHeight: "48px",
  minWidth: "48px",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },

  "&:active": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },

  "&:focus-visible": {
    outline: `2px solid ${colors.buttercream}`,
  },

  "@media (min-width: 768px)": {
    display: "none !important",
  },
});

const Backdrop = styled(motion.div)({
  position: "fixed",
  inset: 0,
  top: "64px",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "blur(16px)",
  zIndex: zIndex.modalBackdrop,

  "@media (min-width: 768px)": {
    display: "none",
  },
});

const MobileMenu = styled(motion.div)({
  position: "absolute",
  right: 0,
  top: "100%",
  width: "85%",
  maxWidth: "400px",
  background: `linear-gradient(to bottom right, ${colors.deepNavy}, ${colors.midnightBlue})`,
  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
  zIndex: zIndex.modal,
  height: "calc(100vh - 64px)",
  overflowY: "auto",

  "@media (min-width: 768px)": {
    display: "none",
  },
});

const MobileMenuOrb = styled(Box)({
  position: "absolute",
  top: 0,
  right: 0,
  width: "256px",
  height: "256px",
  backgroundColor: colors.buttercream,
  opacity: 0.05,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const MobileMenuContent = styled(Box)({
  position: "relative",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "32px 24px",
});

const MobileNavLinks = styled("nav")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flex: 1,
});

const MobileNavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ isActive }) => ({
  display: "block",
  padding: "16px 20px",
  borderRadius: "16px",
  transition: `all ${transitions.base}`,
  textDecoration: "none",
  minHeight: "48px",
  backgroundColor: isActive ? colors.buttercream : "transparent",
  color: isActive ? colors.midnightBlue : colors.white,
  boxShadow: isActive ? "0 10px 30px rgba(0, 0, 0, 0.2)" : "none",

  "&:hover": {
    backgroundColor: isActive ? colors.buttercream : "rgba(255, 255, 255, 0.1)",
  },

  "&:active": {
    backgroundColor: isActive ? colors.buttercream : "rgba(255, 255, 255, 0.2)",
    transform: "scale(0.98)",
  },
}));

const MobileNavLinkContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "& > span": {
    fontSize: "18px",
    fontWeight: 500,
  },
});

const ActiveDot = styled(motion.div)({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: colors.midnightBlue,
  border: `2px solid ${colors.midnightBlue}4d`,
});

const MobileMenuFooter = styled(Box)({
  paddingTop: "24px",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  marginTop: "24px",
});

const MobileGetStartedButton = styled(Link)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 24px",
  backgroundColor: colors.buttercream,
  color: colors.midnightBlue,
  borderRadius: "16px",
  textAlign: "center",
  fontWeight: 600,
  fontSize: "18px",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
  transition: `all ${transitions.base}`,
  overflow: "hidden",
  minHeight: "56px",
  textDecoration: "none",

  "&:hover": {
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
  },

  "&:active": {
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    transform: "scale(0.98)",
  },

  "& > span": {
    position: "relative",
    zIndex: 10,
  },
});

const TapEffect = styled(motion.div)({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(255, 255, 255, 0.2)",
});

export const Navigation = () => {
  const {
    mobileMenuOpen,
    scrolled,
    hidden,
    isActive,
    toggleMobileMenu,
    closeMobileMenu,
  } = useNavigation();

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <StyledNav
        scrolled={scrolled}
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
        <NavContainer maxWidth={false}>
          <NavContent>
            {/* Logo */}
            <Logo href="/" aria-label="Propello - Home">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <LogoText>Propello</LogoText>
              </motion.div>
            </Logo>

            {/* Desktop Navigation */}
            <DesktopNav>
              {NAVIGATION_LINKS.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    href={link.path}
                    aria-label={link.ariaLabel}
                    aria-current={isActive(link.path) ? "page" : undefined}
                    isActive={isActive(link.path)}
                  >
                    <span>{link.name}</span>
                    {isActive(link.path) ? (
                      <ActiveIndicator
                        layoutId="navbar-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    ) : (
                      <HoverIndicator />
                    )}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <GetStartedButton
                  href="/contact"
                  aria-label="Get started with Propello"
                >
                  <span>Get Started</span>
                  <GetStartedGradient
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </GetStartedButton>
              </motion.div>
            </DesktopNav>

            {/* Mobile Menu Button */}
            <MobileMenuButton
              onClick={toggleMobileMenu}
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
            </MobileMenuButton>
          </NavContent>
        </NavContainer>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <Backdrop
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMobileMenu}
                aria-hidden="true"
              />

              {/* Mobile Menu Panel */}
              <MobileMenu
                id="mobile-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                role="menu"
              >
                <MobileMenuOrb />

                <MobileMenuContent>
                  <MobileNavLinks>
                    {NAVIGATION_LINKS.map((link, index) => (
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
                        <MobileNavLink
                          href={link.path}
                          role="menuitem"
                          aria-label={link.ariaLabel}
                          aria-current={
                            isActive(link.path) ? "page" : undefined
                          }
                          isActive={isActive(link.path)}
                        >
                          <MobileNavLinkContent>
                            <span>{link.name}</span>
                            {isActive(link.path) && (
                              <ActiveDot
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                              />
                            )}
                          </MobileNavLinkContent>
                        </MobileNavLink>
                      </motion.div>
                    ))}
                  </MobileNavLinks>

                  <MobileMenuFooter>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.4,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <MobileGetStartedButton
                        href="/contact"
                        role="menuitem"
                        aria-label="Get started with Propello"
                      >
                        <span>Get Started</span>
                        <TapEffect
                          initial={{ scale: 0, opacity: 0 }}
                          whileTap={{ scale: 2, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                      </MobileGetStartedButton>
                    </motion.div>
                  </MobileMenuFooter>
                </MobileMenuContent>
              </MobileMenu>
            </>
          )}
        </AnimatePresence>
      </StyledNav>
    </>
  );
};
