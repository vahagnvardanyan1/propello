"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import {
  colors,
  spacing,
  borderRadius,
  transitions,
  shadows,
} from "@/theme/theme";

const FilterContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: spacing.md,
  justifyContent: "center",
  marginBottom: spacing["4xl"],
});

const FilterButton = styled(motion.button, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ isActive }) => ({
  padding: `${spacing.md} ${spacing.xl}`,
  borderRadius: borderRadius.xl,
  fontWeight: 500,
  border: isActive ? "none" : `2px solid ${colors.dustyBlue}33`,
  backgroundColor: isActive ? colors.midnightBlue : colors.white,
  background: isActive
    ? `linear-gradient(to right, ${colors.midnightBlue}, ${colors.dustyBlue})`
    : colors.white,
  color: isActive ? colors.white : colors.dustyBlue,
  boxShadow: isActive ? shadows.lg : "none",
  cursor: "pointer",
  transition: `all ${transitions.base}`,

  "&:hover": {
    borderColor: `${colors.dustyBlue}66`,
  },
}));

const ProjectsGrid = styled(motion.div)({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: spacing["2xl"],

  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

const ProjectCard = styled(motion.div)({
  backgroundColor: colors.white,
  borderRadius: borderRadius["2xl"],
  overflow: "hidden",
  boxShadow: shadows.lg,
  border: `1px solid ${colors.dustyBlue}1a`,
  transition: `box-shadow ${transitions.slow}`,

  "&:hover": {
    boxShadow: shadows["2xl"],
  },
});

const ProjectHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgGradient",
})<{ bgGradient: string }>(({ bgGradient }) => ({
  height: "192px",
  background: bgGradient,
  position: "relative",
  overflow: "hidden",
}));

const HeaderOverlay = styled(motion.div)({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
});

const IconContainer = styled(Box)({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const IconCircle = styled(motion.div)({
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(8px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CategoryBadge = styled(Box)({
  position: "absolute",
  top: spacing.base,
  left: spacing.base,
});

const Badge = styled("span")({
  padding: `${spacing.xs} ${spacing.md}`,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(8px)",
  fontSize: "12px",
  fontWeight: 600,
  borderRadius: borderRadius.full,
});

const ProjectContent = styled(Box)({
  padding: spacing.xl,
});

const ProjectTitle = styled("h3")({
  color: colors.midnightBlue,
  fontSize: "20px",
  fontWeight: 700,
  marginBottom: spacing.sm,
  margin: `0 0 ${spacing.sm} 0`,
});

const ProjectDescription = styled("p")({
  color: colors.dustyBlue,
  marginBottom: spacing.base,
  lineHeight: 1.6,
  margin: `0 0 ${spacing.base} 0`,
});

const TagsContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: spacing.sm,
  marginBottom: spacing.base,
});

const Tag = styled("span")({
  padding: `${spacing.xs} ${spacing.md}`,
  backgroundColor: colors.ivory,
  color: colors.midnightBlue,
  fontSize: "12px",
  borderRadius: borderRadius.md,
  fontWeight: 500,
});

const MetricsGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: spacing.md,
  paddingTop: spacing.base,
  borderTop: `1px solid ${colors.dustyBlue}1a`,
});

const MetricItem = styled(Box)({
  textAlign: "center",
});

const MetricValue = styled("div")({
  color: colors.midnightBlue,
  fontWeight: 700,
  fontSize: "14px",
});

const MetricLabel = styled("div")({
  color: colors.dustyBlue,
  fontSize: "12px",
  textTransform: "capitalize",
});

const CTAButton = styled(motion.button)({
  marginTop: spacing.xl,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.sm,
  padding: spacing.md,
  background: `linear-gradient(to right, ${colors.midnightBlue}, ${colors.dustyBlue})`,
  color: colors.white,
  borderRadius: borderRadius.xl,
  border: "none",
  cursor: "pointer",
  opacity: 0,
  transition: `opacity ${transitions.slow}`,

  ".group:hover &": {
    opacity: 1,
  },
});

export const ProjectGrid = () => {
  const t = useTranslations("portfolio.projects");
  const tCategories = useTranslations("portfolio.projects.categories");
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: t("ecommercePlatform.title"),
      category: tCategories("webDevelopment"),
      description: t("ecommercePlatform.description"),
      tags: ["React", "Node.js", "PostgreSQL"],
      metrics: {
        users: "50K+",
        conversion: "+127%",
        time: "6 weeks",
      },
      metricsLabels: {
        users: t("ecommercePlatform.metrics.users"),
        conversion: t("ecommercePlatform.metrics.conversion"),
        time: t("ecommercePlatform.metrics.time"),
      },
      color: "linear-gradient(to bottom right, #3b82f6, #a855f7)",
    },
    {
      id: 2,
      title: t("healthcareApp.title"),
      category: tCategories("mobileBackend"),
      description: t("healthcareApp.description"),
      tags: ["GraphQL", "MongoDB", "AWS"],
      metrics: {
        users: "100K+",
        uptime: "99.9%",
        time: "8 weeks",
      },
      metricsLabels: {
        users: t("healthcareApp.metrics.users"),
        uptime: t("healthcareApp.metrics.uptime"),
        time: t("healthcareApp.metrics.time"),
      },
      color: "linear-gradient(to bottom right, #10b981, #14b8a6)",
    },
    {
      id: 3,
      title: t("saasRedesign.title"),
      category: tCategories("uiuxDesign"),
      description: t("saasRedesign.description"),
      tags: ["Figma", "Design System", "User Research"],
      metrics: {
        engagement: "+200%",
        satisfaction: "4.9/5",
        time: "4 weeks",
      },
      metricsLabels: {
        engagement: t("saasRedesign.metrics.engagement"),
        satisfaction: t("saasRedesign.metrics.satisfaction"),
        time: t("saasRedesign.metrics.time"),
      },
      color: "linear-gradient(to bottom right, #ec4899, #ef4444)",
    },
    {
      id: 4,
      title: t("marketingAutomation.title"),
      category: tCategories("businessAutomation"),
      description: t("marketingAutomation.description"),
      tags: ["OpenAI", "Zapier", "Python"],
      metrics: {
        saved: "40hrs/wk",
        roi: "400%",
        time: "3 weeks",
      },
      metricsLabels: {
        saved: t("marketingAutomation.metrics.saved"),
        roi: t("marketingAutomation.metrics.roi"),
        time: t("marketingAutomation.metrics.time"),
      },
      color: "linear-gradient(to bottom right, #eab308, #f97316)",
    },
    {
      id: 5,
      title: t("realEstate.title"),
      category: tCategories("webDevelopment"),
      description: t("realEstate.description"),
      tags: ["Next.js", "AWS", "Redis"],
      metrics: {
        listings: "10K+",
        speed: "0.8s",
        time: "7 weeks",
      },
      metricsLabels: {
        listings: t("realEstate.metrics.listings"),
        speed: t("realEstate.metrics.speed"),
        time: t("realEstate.metrics.time"),
      },
      color: "linear-gradient(to bottom right, #6366f1, #3b82f6)",
    },
    {
      id: 6,
      title: t("fitnessApi.title"),
      category: tCategories("mobileBackend"),
      description: t("fitnessApi.description"),
      tags: ["Node.js", "WebSocket", "Docker"],
      metrics: {
        users: "500K+",
        latency: "< 50ms",
        time: "6 weeks",
      },
      metricsLabels: {
        users: t("fitnessApi.metrics.users"),
        latency: t("fitnessApi.metrics.latency"),
        time: t("fitnessApi.metrics.time"),
      },
      color: "linear-gradient(to bottom right, #06b6d4, #3b82f6)",
    },
    {
      id: 7,
      title: t("bankingUI.title"),
      category: tCategories("uiuxDesign"),
      description: t("bankingUI.description"),
      tags: ["Figma", "WCAG AAA", "Animation"],
      metrics: {
        award: "Gold",
        accessibility: "AAA",
        time: "5 weeks",
      },
      metricsLabels: {
        award: t("bankingUI.metrics.award"),
        accessibility: t("bankingUI.metrics.accessibility"),
        time: t("bankingUI.metrics.time"),
      },
      color: "linear-gradient(to bottom right, #a855f7, #ec4899)",
    },
    {
      id: 8,
      title: t("crmIntegration.title"),
      category: tCategories("businessAutomation"),
      description: t("crmIntegration.description"),
      tags: ["Make", "Webhooks", "API"],
      metrics: {
        tools: "15+",
        efficiency: "+250%",
        time: "4 weeks",
      },
      metricsLabels: {
        tools: t("crmIntegration.metrics.tools"),
        efficiency: t("crmIntegration.metrics.efficiency"),
        time: t("crmIntegration.metrics.time"),
      },
      color: "linear-gradient(to bottom right, #f97316, #ef4444)",
    },
  ];

  const categories = [
    t("all"),
    tCategories("webDevelopment"),
    tCategories("mobileBackend"),
    tCategories("uiuxDesign"),
    tCategories("businessAutomation"),
  ];

  const filteredProjects =
    filter === t("all")
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <Box>
      {/* Filter Buttons */}
      <FilterContainer>
        {categories.map((category) => (
          <FilterButton
            key={category}
            onClick={() => setFilter(category)}
            isActive={filter === category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>

      {/* Projects Grid */}
      <ProjectsGrid layout>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            className="group"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            {/* Gradient Header */}
            <ProjectHeader bgGradient={project.color}>
              <HeaderOverlay
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
              />

              <IconContainer>
                <IconCircle
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExternalLink color={colors.white} size={28} />
                </IconCircle>
              </IconContainer>

              {/* Category Badge */}
              <CategoryBadge>
                <Badge>{project.category}</Badge>
              </CategoryBadge>
            </ProjectHeader>

            {/* Content */}
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>

              <ProjectDescription>{project.description}</ProjectDescription>

              {/* Tags */}
              <TagsContainer>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagsContainer>

              {/* Metrics */}
              <MetricsGrid>
                {Object.entries(project.metrics).map(([key, value], i) => (
                  <MetricItem key={i}>
                    <MetricValue>{value}</MetricValue>
                    <MetricLabel>
                      {
                        project.metricsLabels[
                          key as keyof typeof project.metricsLabels
                        ]
                      }
                    </MetricLabel>
                  </MetricItem>
                ))}
              </MetricsGrid>

              {/* CTA */}
              <CTAButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Case Study
                <ArrowRight size={16} />
              </CTAButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Box>
  );
};
