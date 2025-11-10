"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { Link } from "@/navigation";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { colors, spacing, transitions, borderRadius } from "@/theme/theme";

const StyledHeroSection = styled("section")({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  background: `linear-gradient(to bottom right, ${colors.deepNavy}, ${colors.midnightBlue}, ${colors.dustyBlue})`,
});

const AnimatedOrb1 = styled(motion.div)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "800px",
  height: "800px",
  backgroundColor: colors.buttercream,
  opacity: 0.1,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const AnimatedOrb2 = styled(motion.div)({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: "600px",
  height: "600px",
  backgroundColor: colors.dustyBlue,
  opacity: 0.2,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const HeroContent = styled(motion.div)({
  position: "relative",
  zIndex: 10,
  textAlign: "center",
  padding: `0 ${spacing.base}`,

  "@media (min-width: 640px)": {
    padding: `0 ${spacing.xl}`,
  },

  "@media (min-width: 1024px)": {
    padding: `0 ${spacing["2xl"]}`,
  },
});

const BrandTagline = styled(motion.div)({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.sm,
  padding: `10px ${spacing.lg}`,
  borderRadius: borderRadius.full,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  marginBottom: spacing.xl,

  "@media (min-width: 640px)": {
    padding: `10px ${spacing.lg}`,
    marginBottom: spacing["2xl"],
  },
});

const TaglineText = styled("span")({
  color: "rgba(255, 255, 255, 0.9)",
  fontWeight: 500,
  fontSize: "14px",

  "@media (min-width: 640px)": {
    fontSize: "16px",
  },
});

const MainHeadline = styled(motion.h1)({
  color: colors.white,
  marginBottom: spacing.base,
  fontSize: "clamp(2rem, 8vw, 5rem)",
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  fontWeight: 700,

  "@media (min-width: 640px)": {
    marginBottom: spacing.xl,
  },
});

const GradientText = styled("span")({
  background: `linear-gradient(to right, ${colors.buttercream}, ${colors.ivory})`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const Subheadline = styled(motion.p)({
  color: colors.ivory,
  fontSize: "16px",
  marginBottom: spacing["2xl"],
  maxWidth: "750px",
  margin: `0 auto ${spacing["2xl"]} auto`,
  lineHeight: 1.6,
  padding: `0 ${spacing.sm}`,

  "@media (min-width: 640px)": {
    fontSize: "18px",
  },

  "@media (min-width: 768px)": {
    fontSize: "20px",
    marginBottom: spacing["4xl"],
  },
});

const CTAContainer = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  gap: spacing.md,
  justifyContent: "center",
  alignItems: "center",
  padding: `0 ${spacing.sm}`,

  "@media (min-width: 640px)": {
    flexDirection: "row",
    gap: spacing.base,
  },
});

const PrimaryCTA = styled(Link)({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.md,
  padding: `14px ${spacing.xl}`,
  backgroundColor: colors.buttercream,
  color: colors.midnightBlue,
  borderRadius: borderRadius.xl,
  overflow: "hidden",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: 600,
  width: "100%",
  minHeight: "56px",
  transition: `all ${transitions.slow}`,

  "@media (min-width: 640px)": {
    width: "auto",
    padding: `16px ${spacing["2xl"]}`,
    fontSize: "18px",
  },

  "&:hover": {
    boxShadow: `0 25px 50px ${colors.buttercream}66`,
    transform: "translateY(-8px)",
  },

  "&:active": {
    transform: "scale(0.98)",
  },

  "& > span": {
    position: "relative",
    zIndex: 10,
  },
});

const CTAGradient = styled(motion.div)({
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)`,
});

const SecondaryCTA = styled(Link)({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.md,
  padding: `14px ${spacing.xl}`,
  backgroundColor: "rgba(255, 255, 255, 0.75)",
  backdropFilter: "blur(20px)",
  color: colors.white,
  border: "2px solid rgba(255, 255, 255, 0.3)",
  borderRadius: borderRadius.xl,
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: 600,
  width: "100%",
  minHeight: "56px",
  transition: `all ${transitions.slow}`,

  "@media (min-width: 640px)": {
    width: "auto",
    padding: `16px ${spacing["2xl"]}`,
    fontSize: "18px",
  },

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: colors.buttercream,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
    transform: "translateY(-4px)",
  },

  "&:active": {
    transform: "scale(0.98)",
  },
});

const MetricsGrid = styled(motion.div)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: spacing.base,
  maxWidth: "640px",
  margin: `${spacing["4xl"]} auto 0 auto`,
  padding: `0 ${spacing.sm}`,

  "@media (min-width: 640px)": {
    gap: spacing["2xl"],
    marginTop: spacing["6xl"],
  },
});

const MetricItem = styled(Box)({
  textAlign: "center",
});

const MetricValue = styled(Box)({
  color: colors.buttercream,
  fontSize: "32px",
  fontWeight: 700,
  marginBottom: spacing.xs,

  "@media (min-width: 640px)": {
    fontSize: "40px",
  },

  "@media (min-width: 768px)": {
    fontSize: "48px",
    marginBottom: spacing.sm,
  },
});

const MetricLabel = styled(Box)({
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "12px",

  "@media (min-width: 640px)": {
    fontSize: "14px",
  },

  "@media (min-width: 768px)": {
    fontSize: "16px",
  },
});

const HOME_METRICS = [
  { end: 100, suffix: "+", key: "projectsDelivered" as const },
  { end: 10, suffix: "+", key: "yearsExperience" as const },
  { end: 98, suffix: "%", key: "clientRetention" as const },
];

export const HeroSection = () => {
  const t = useTranslations("home.hero");
  const tMetrics = useTranslations("home.metrics");
  const tCommon = useTranslations("common");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <StyledHeroSection ref={heroRef}>
      {/* Animated Background Elements */}
      <AnimatedOrb1
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <AnimatedOrb2
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container maxWidth={false}>
        <HeroContent style={{ y, opacity }}>
          {/* Brand Tagline */}
          <BrandTagline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Zap color={colors.buttercream} size={16} />
            <TaglineText>{tCommon("tagline")}</TaglineText>
          </BrandTagline>

          {/* Main Headline */}
          <MainHeadline
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {t("title")}
          </MainHeadline>

          {/* Subheadline */}
          <Subheadline
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t("subtitle")}
          </Subheadline>

          {/* CTAs */}
          <CTAContainer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <PrimaryCTA href="/contact">
              <span>{t("cta")}</span>
              <ArrowRight size={18} />
              <CTAGradient
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </PrimaryCTA>

            <SecondaryCTA href="/portfolio">
              <span>{t("learnMore")}</span>
              <ArrowRight size={18} />
            </SecondaryCTA>
          </CTAContainer>

          {/* Floating Metrics */}
          <MetricsGrid
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {HOME_METRICS.map((metric, index) => (
              <MetricItem key={index}>
                <MetricValue>
                  <AnimatedCounter end={metric.end} suffix={metric.suffix} />
                </MetricValue>
                <MetricLabel>{tMetrics(metric.key)}</MetricLabel>
              </MetricItem>
            ))}
          </MetricsGrid>
        </HeroContent>
      </Container>
    </StyledHeroSection>
  );
};
