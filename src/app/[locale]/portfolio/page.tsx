"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { ProjectGrid } from "@/components/ProjectGrid";
import { TechStackScroll } from "@/components/TechStackScroll";
import {
  PortfolioHero,
  CaseStudiesSection,
  PortfolioCTA,
} from "@/components/portfolio";
import { colors, spacing } from "@/theme/theme";

const ProjectsSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  backgroundColor: colors.white,
});

const SectionContainer = styled(Container)({
  padding: `0 ${spacing.base}`,

  "@media (min-width: 1024px)": {
    padding: `0 ${spacing["2xl"]}`,
  },
});

const SectionHeader = styled(motion.div)({
  textAlign: "center",
  marginBottom: spacing["5xl"],
});

const Label = styled("p")({
  color: colors.dustyBlue,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontSize: "14px",
  marginBottom: spacing.md,
  fontWeight: 600,
  margin: `0 0 ${spacing.md} 0`,
});

const Title = styled("h2")({
  color: colors.midnightBlue,
  marginBottom: spacing.base,
  fontSize: "clamp(2rem, 4vw, 3.5rem)",
  fontWeight: 600,
  margin: `0 0 ${spacing.base} 0`,
});

const Description = styled("p")({
  color: colors.dustyBlue,
  fontSize: "18px",
  maxWidth: "640px",
  margin: `0 auto`,
  lineHeight: 1.6,
});

const TechSection = styled("section")({
  padding: `${spacing["6xl"]} 0`,
  backgroundColor: colors.white,
});

const TechHeader = styled(motion.div)({
  textAlign: "center",
  marginBottom: spacing["4xl"],
});

const TechTitle = styled("h2")({
  color: colors.midnightBlue,
  marginBottom: spacing.md,
  fontSize: "clamp(2rem, 4vw, 3rem)",
  fontWeight: 600,
  margin: `0 0 ${spacing.md} 0`,
});

const TechDescription = styled("p")({
  color: colors.dustyBlue,
  fontSize: "18px",
  margin: 0,
});

const PortfolioPage = () => {
  const tCommon = useTranslations("common");

  return (
    <Box id="main-content" sx={{ minHeight: "100vh" }}>
      <PortfolioHero />

      {/* Projects Grid */}
      <ProjectsSection>
        <SectionContainer maxWidth={false}>
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Label>{tCommon("featuredProjects")}</Label>
            <Title>{tCommon("ourLatestWork")}</Title>
            <Description>{tCommon("explorePortfolio")}</Description>
          </SectionHeader>

          <ProjectGrid />
        </SectionContainer>
      </ProjectsSection>

      <CaseStudiesSection />

      {/* Technology Stack */}
      <TechSection>
        <SectionContainer maxWidth={false}>
          <TechHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TechTitle>{tCommon("technologiesWeMaster")}</TechTitle>
            <TechDescription>
              {tCommon("buildingWithBestTools")}
            </TechDescription>
          </TechHeader>
        </SectionContainer>

        <TechStackScroll />
      </TechSection>

      <PortfolioCTA />
    </Box>
  );
};

export default PortfolioPage;
