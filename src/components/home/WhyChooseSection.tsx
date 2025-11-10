"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Gauge, Award, Shield, Zap } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import {
  colors,
  spacing,
  borderRadius,
  transitions,
  shadows,
} from "@/theme/theme";

const StyledSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  background: `linear-gradient(to bottom right, ${colors.ivory}, ${colors.white})`,
  position: "relative",
  overflow: "hidden",
});

const DecorativeOrb1 = styled(Box)({
  position: "absolute",
  top: 0,
  right: 0,
  width: "500px",
  height: "500px",
  backgroundColor: colors.buttercream,
  opacity: 0.05,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const DecorativeOrb2 = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "400px",
  height: "400px",
  backgroundColor: colors.midnightBlue,
  opacity: 0.05,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const SectionContainer = styled(Container)({
  position: "relative",
  zIndex: 10,
  padding: `0 ${spacing.base}`,

  "@media (min-width: 1024px)": {
    padding: `0 ${spacing["2xl"]}`,
  },
});

const SectionHeader = styled(Box)({
  textAlign: "center",
  marginBottom: spacing["5xl"],
});

const SectionLabel = styled("p")({
  color: colors.dustyBlue,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontSize: "14px",
  marginBottom: spacing.md,
  fontWeight: 600,
  margin: `0 0 ${spacing.md} 0`,
});

const SectionTitle = styled("h2")({
  color: colors.midnightBlue,
  marginBottom: spacing.base,
  fontSize: "clamp(2rem, 4vw, 3rem)",
  fontWeight: 600,
  margin: `0 0 ${spacing.base} 0`,
});

const SectionDescription = styled("p")({
  color: colors.dustyBlue,
  fontSize: "18px",
  maxWidth: "640px",
  margin: `0 auto`,
  lineHeight: 1.6,
});

const AdvantagesGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: spacing["2xl"],
  maxWidth: "1200px",
  margin: "0 auto",

  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
});

const AdvantageCard = styled(motion.div)({
  textAlign: "center",
  cursor: "pointer",
});

const IconWrapper = styled(motion.div)({
  width: "80px",
  height: "80px",
  margin: `0 auto ${spacing.xl} auto`,
  borderRadius: borderRadius["2xl"],
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}, ${colors.dustyBlue})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: shadows.lg,
  transition: `box-shadow ${transitions.slow}`,

  ".group:hover &": {
    boxShadow: shadows["2xl"],
  },
});

const AdvantageTitle = styled("h3")({
  color: colors.midnightBlue,
  fontWeight: 600,
  fontSize: "18px",
  marginBottom: spacing.md,
  transition: `color ${transitions.slow}`,
  margin: `0 0 ${spacing.md} 0`,

  ".group:hover &": {
    color: colors.dustyBlue,
  },
});

const AdvantageDescription = styled("p")({
  color: colors.dustyBlue,
  lineHeight: 1.6,
  fontSize: "14px",
  margin: 0,
});

export const WhyChooseSection = () => {
  const t = useTranslations("home.whyChoose");

  const advantages = [
    {
      icon: Gauge,
      title: t("lightningSpeed.title"),
      description: t("lightningSpeed.description"),
    },
    {
      icon: Award,
      title: t("premiumQuality.title"),
      description: t("premiumQuality.description"),
    },
    {
      icon: Shield,
      title: t("rockSolidReliability.title"),
      description: t("rockSolidReliability.description"),
    },
    {
      icon: Zap,
      title: t("automationFirst.title"),
      description: t("automationFirst.description"),
    },
  ];

  return (
    <StyledSection>
      <DecorativeOrb1 />
      <DecorativeOrb2 />

      <SectionContainer maxWidth={false}>
        <ScrollReveal direction="up">
          <SectionHeader>
            <SectionLabel>The Propello Advantage</SectionLabel>
            <SectionTitle>{t("title")}</SectionTitle>
            <SectionDescription>{t("subtitle")}</SectionDescription>
          </SectionHeader>
        </ScrollReveal>

        <StaggerContainer>
          <AdvantagesGrid>
            {advantages.map((item, index) => (
              <StaggerItem key={index}>
                <AdvantageCard
                  className="group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconWrapper
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon color={colors.white} size={36} />
                  </IconWrapper>

                  <AdvantageTitle>{item.title}</AdvantageTitle>

                  <AdvantageDescription>
                    {item.description}
                  </AdvantageDescription>
                </AdvantageCard>
              </StaggerItem>
            ))}
          </AdvantagesGrid>
        </StaggerContainer>
      </SectionContainer>
    </StyledSection>
  );
};
