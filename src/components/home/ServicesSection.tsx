"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import { SERVICES } from "@/constants";
import {
  colors,
  spacing,
  borderRadius,
  transitions,
  shadows,
} from "@/theme/theme";

const StyledSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  backgroundColor: colors.white,
});

const SectionContainer = styled(Container)({
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

const ServicesGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: spacing["2xl"],

  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
});

const ServiceCard = styled(motion.div)({
  height: "100%",
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}, ${colors.deepNavy})`,
  borderRadius: borderRadius["2xl"],
  padding: spacing["2xl"],
  boxShadow: shadows.xl,
  position: "relative",
  overflow: "hidden",
  transition: `box-shadow ${transitions.slow}`,

  "&:hover": {
    boxShadow: shadows["2xl"],
  },
});

const IconContainer = styled(motion.div)({
  width: "64px",
  height: "64px",
  borderRadius: borderRadius["2xl"],
  background: `linear-gradient(to bottom right, ${colors.buttercream}, ${colors.ivory})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: spacing.xl,
  boxShadow: shadows.lg,
});

const ServiceTitle = styled("h3")({
  color: colors.white,
  fontSize: "20px",
  fontWeight: 600,
  marginBottom: spacing.md,
  transition: `color ${transitions.slow}`,

  ".group:hover &": {
    color: colors.buttercream,
  },
});

const ServiceDescription = styled("p")({
  color: colors.ivory,
  marginBottom: spacing.xl,
  lineHeight: 1.6,
  fontSize: "14px",
  margin: `0 0 ${spacing.xl} 0`,
});

const FeatureList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const FeatureItem = styled("li")({
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
  color: colors.buttercream,
  fontSize: "14px",
});

const FeatureDot = styled("div")({
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  backgroundColor: colors.buttercream,
  flexShrink: 0,
});

const CTAContainer = styled(Box)({
  textAlign: "center",
  marginTop: spacing["5xl"],
});

const ExploreButton = styled(Link)({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.md,
  padding: `${spacing.base} ${spacing["2xl"]}`,
  backgroundColor: colors.midnightBlue,
  color: colors.white,
  borderRadius: borderRadius.xl,
  textDecoration: "none",
  fontWeight: 600,
  transition: `all ${transitions.slow}`,

  "&:hover": {
    backgroundColor: colors.dustyBlue,
    boxShadow: shadows.xl,
    transform: "translateY(-4px)",
  },
});

export const ServicesSection = () => {
  return (
    <StyledSection>
      <SectionContainer maxWidth={false}>
        <ScrollReveal direction="up">
          <SectionHeader>
            <SectionLabel>Our Expertise</SectionLabel>
            <SectionTitle>Core Services</SectionTitle>
            <SectionDescription>
              Comprehensive solutions designed to transform your business
              through technology
            </SectionDescription>
          </SectionHeader>
        </ScrollReveal>

        <StaggerContainer>
          <ServicesGrid>
            {SERVICES.map((service, index) => (
              <StaggerItem key={index}>
                <ServiceCard
                  className="group"
                  whileHover={{ y: -12, scale: 1.03 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <IconContainer
                    whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon color={colors.midnightBlue} size={32} />
                  </IconContainer>

                  <ServiceTitle>{service.title}</ServiceTitle>

                  <ServiceDescription>{service.description}</ServiceDescription>

                  <FeatureList>
                    {service.features.map((feature, i) => (
                      <FeatureItem key={i}>
                        <FeatureDot />
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeatureList>
                </ServiceCard>
              </StaggerItem>
            ))}
          </ServicesGrid>
        </StaggerContainer>

        <ScrollReveal direction="up" delay={0.2}>
          <CTAContainer>
            <ExploreButton href="/services" className="group">
              <span>Explore All Services</span>
              <ArrowRight size={18} />
            </ExploreButton>
          </CTAContainer>
        </ScrollReveal>
      </SectionContainer>
    </StyledSection>
  );
};
