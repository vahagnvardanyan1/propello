"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { ScrollReveal } from "@/components/ScrollReveal";
import { colors, spacing, borderRadius, transitions } from "@/theme/theme";

const StyledSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  background: `linear-gradient(to bottom right, ${colors.ivory}, ${colors.white}, ${colors.buttercream})`,
  position: "relative",
  overflow: "hidden",
});

const DecorativeOrb1 = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "600px",
  height: "600px",
  backgroundColor: colors.midnightBlue,
  opacity: 0.05,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const DecorativeOrb2 = styled(Box)({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: "500px",
  height: "500px",
  backgroundColor: colors.dustyBlue,
  opacity: 0.05,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const SectionContainer = styled(Container)({
  textAlign: "center",
  position: "relative",
  zIndex: 10,
  padding: `0 ${spacing.base}`,

  "@media (min-width: 1024px)": {
    padding: `0 ${spacing["2xl"]}`,
  },
});

const ContentWrapper = styled(Box)({
  maxWidth: "1024px",
  margin: "0 auto",
});

const MainHeading = styled("h2")({
  color: colors.midnightBlue,
  marginBottom: spacing.xl,
  fontSize: "clamp(2.5rem, 5vw, 4rem)",
  lineHeight: 1.1,
  fontWeight: 600,
  margin: `0 0 ${spacing.xl} 0`,
});

const Subheading = styled("p")({
  color: colors.dustyBlue,
  fontSize: "20px",
  marginBottom: spacing["4xl"],
  maxWidth: "750px",
  margin: `0 auto ${spacing["4xl"]} auto`,
  lineHeight: 1.6,

  "@media (min-width: 768px)": {
    fontSize: "24px",
  },
});

const CTAContainer = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  gap: spacing.base,
  justifyContent: "center",
  alignItems: "center",

  "@media (min-width: 640px)": {
    flexDirection: "row",
  },
});

const PrimaryCTA = styled(Link)({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.md,
  padding: `${spacing.lg} ${spacing["3xl"]}`,
  background: `linear-gradient(to right, ${colors.midnightBlue}, ${colors.dustyBlue})`,
  color: colors.white,
  borderRadius: borderRadius.xl,
  overflow: "hidden",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: 600,
  transition: `all ${transitions.slow}`,

  "&:hover": {
    boxShadow: `0 25px 50px ${colors.midnightBlue}4d`,
    transform: "translateY(-8px)",
  },

  "& > span": {
    position: "relative",
    zIndex: 10,
  },
});

const CTAGradient = styled(motion.div)({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)",
});

const SecondaryCTA = styled(Link)({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.sm,
  padding: `${spacing.lg} ${spacing["2xl"]}`,
  color: colors.midnightBlue,
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "18px",
  transition: `color ${transitions.slow}`,
  position: "relative",

  "&:hover": {
    color: colors.dustyBlue,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-2px",
    left: 0,
    width: 0,
    height: "2px",
    backgroundColor: "currentColor",
    transition: `width ${transitions.slow}`,
  },

  "&:hover::after": {
    width: "100%",
  },
});

export const FinalCTASection = () => {
  return (
    <StyledSection>
      <DecorativeOrb1 />
      <DecorativeOrb2 />

      <SectionContainer maxWidth={false}>
        <ScrollReveal direction="up">
          <ContentWrapper>
            <MainHeading>Let&apos;s Build Something Extraordinary</MainHeading>
            <Subheading>
              Join the visionaries who chose Propello to accelerate their
              digital transformation and automate their path to success
            </Subheading>

            <CTAContainer whileHover={{ scale: 1.02 }}>
              <PrimaryCTA href="/contact" className="group">
                <span>Start Your Project</span>
                <ArrowRight size={22} />
                <CTAGradient
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </PrimaryCTA>

              <SecondaryCTA href="/portfolio" className="group">
                <span>View Our Portfolio</span>
                <ArrowRight size={20} />
              </SecondaryCTA>
            </CTAContainer>
          </ContentWrapper>
        </ScrollReveal>
      </SectionContainer>
    </StyledSection>
  );
};
