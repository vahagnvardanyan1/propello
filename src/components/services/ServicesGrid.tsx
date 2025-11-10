"use client";

import { useTranslations } from "next-intl";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import {
  Code,
  Smartphone,
  Palette,
  Zap,
  Layout,
  Database,
  Cloud,
  Lock,
  Cpu,
  Workflow,
} from "lucide-react";

import { ServiceCard } from "./ServiceCard";
import { colors, spacing } from "@/theme/theme";

const GridSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  backgroundColor: colors.white,
});

const SectionContainer = styled(Container)({
  padding: `0 ${spacing.base}`,

  "@media (min-width: 1024px)": {
    padding: `0 ${spacing["2xl"]}`,
  },
});

const ServicesContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: spacing["7xl"],
});

export const ServicesGrid = () => {
  const tWebDev = useTranslations("services.webDevelopment");
  const tMobile = useTranslations("services.mobileBackend");
  const tUIUX = useTranslations("services.uiuxDesign");
  const tAutomation = useTranslations("services.businessAutomation");

  const services = [
    {
      icon: Code,
      title: tWebDev("title"),
      tagline: tWebDev("tagline"),
      description: tWebDev("description"),
      features: [
        {
          icon: Layout,
          text: tWebDev("features.responsiveDesign.text"),
          detail: tWebDev("features.responsiveDesign.detail"),
        },
        {
          icon: Cloud,
          text: tWebDev("features.cloudNative.text"),
          detail: tWebDev("features.cloudNative.detail"),
        },
        {
          icon: Zap,
          text: tWebDev("features.lightningPerformance.text"),
          detail: tWebDev("features.lightningPerformance.detail"),
        },
        {
          icon: Lock,
          text: tWebDev("features.enterpriseSecurity.text"),
          detail: tWebDev("features.enterpriseSecurity.detail"),
        },
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      color: "linear-gradient(to bottom right, #3b82f6, #1d4ed8)",
    },
    {
      icon: Smartphone,
      title: tMobile("title"),
      tagline: tMobile("tagline"),
      description: tMobile("description"),
      features: [
        {
          icon: Database,
          text: tMobile("features.realTimeSync.text"),
          detail: tMobile("features.realTimeSync.detail"),
        },
        {
          icon: Cpu,
          text: tMobile("features.microservices.text"),
          detail: tMobile("features.microservices.detail"),
        },
        {
          icon: Cloud,
          text: tMobile("features.autoScaling.text"),
          detail: tMobile("features.autoScaling.detail"),
        },
        {
          icon: Lock,
          text: tMobile("features.advancedSecurity.text"),
          detail: tMobile("features.advancedSecurity.detail"),
        },
      ],
      technologies: ["Node.js", "GraphQL", "MongoDB", "Redis", "AWS"],
      color: "linear-gradient(to bottom right, #a855f7, #7e22ce)",
    },
    {
      icon: Palette,
      title: tUIUX("title"),
      tagline: tUIUX("tagline"),
      description: tUIUX("description"),
      features: [
        {
          icon: Layout,
          text: tUIUX("features.userResearch.text"),
          detail: tUIUX("features.userResearch.detail"),
        },
        {
          icon: Workflow,
          text: tUIUX("features.interactivePrototypes.text"),
          detail: tUIUX("features.interactivePrototypes.detail"),
        },
        {
          icon: Palette,
          text: tUIUX("features.designSystems.text"),
          detail: tUIUX("features.designSystems.detail"),
        },
        {
          icon: Zap,
          text: tUIUX("features.conversionOptimization.text"),
          detail: tUIUX("features.conversionOptimization.detail"),
        },
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer"],
      color: "linear-gradient(to bottom right, #ec4899, #be185d)",
    },
    {
      icon: Zap,
      title: tAutomation("title"),
      tagline: tAutomation("tagline"),
      description: tAutomation("description"),
      features: [
        {
          icon: Cpu,
          text: tAutomation("features.aiIntegration.text"),
          detail: tAutomation("features.aiIntegration.detail"),
        },
        {
          icon: Workflow,
          text: tAutomation("features.workflowAutomation.text"),
          detail: tAutomation("features.workflowAutomation.detail"),
        },
        {
          icon: Zap,
          text: tAutomation("features.smartTriggers.text"),
          detail: tAutomation("features.smartTriggers.detail"),
        },
        {
          icon: Cloud,
          text: tAutomation("features.integrationHub.text"),
          detail: tAutomation("features.integrationHub.detail"),
        },
      ],
      technologies: ["OpenAI API", "Zapier", "Make", "n8n", "AWS Lambda"],
      color: "linear-gradient(to bottom right, #eab308, #a16207)",
    },
  ];

  return (
    <GridSection>
      <SectionContainer maxWidth={false}>
        <ServicesContainer>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </ServicesContainer>
      </SectionContainer>
    </GridSection>
  );
};
