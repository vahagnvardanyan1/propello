"use client";

import { motion } from "motion/react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import type { LucideIcon } from "lucide-react";

import { colors, spacing, borderRadius, shadows } from "@/theme/theme";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: readonly {
    icon: LucideIcon;
    text: string;
    detail: string;
  }[];
  technologies: readonly string[];
  color: string;
  index: number;
}

const CardContainer = styled(motion.div)({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: spacing["4xl"],
  alignItems: "center",

  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

const ContentSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== "reverseOrder",
})<{ reverseOrder: boolean }>(({ reverseOrder }) => ({
  "@media (min-width: 1024px)": {
    order: reverseOrder ? 2 : 1,
  },
}));

const IconTitleGroup = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.md,
  marginBottom: spacing.xl,
});

const IconContainer = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "gradient",
})<{ gradient: string }>(({ gradient }) => ({
  width: "56px",
  height: "56px",
  borderRadius: borderRadius["2xl"],
  background: gradient,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: shadows.lg,
}));

const TitleGroup = styled(Box)({});

const ServiceTitle = styled("h2")({
  color: colors.midnightBlue,
  fontSize: "32px",
  fontWeight: 700,
  margin: 0,
});

const Tagline = styled("p")({
  color: colors.dustyBlue,
  fontSize: "14px",
  fontStyle: "italic",
  margin: 0,
});

const ServiceDescription = styled("p")({
  color: colors.dustyBlue,
  fontSize: "18px",
  marginBottom: spacing["2xl"],
  lineHeight: 1.6,
  margin: `0 0 ${spacing["2xl"]} 0`,
});

const FeaturesGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: spacing.base,
  marginBottom: spacing["2xl"],

  "@media (min-width: 640px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

const FeatureItem = styled(motion.div)({
  display: "flex",
  gap: spacing.md,
  alignItems: "flex-start",
});

const FeatureIconBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "gradient",
})<{ gradient: string }>(({ gradient }) => ({
  width: "40px",
  height: "40px",
  borderRadius: borderRadius.md,
  background: gradient,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

const FeatureContent = styled(Box)({});

const FeatureText = styled("h4")({
  color: colors.midnightBlue,
  fontWeight: 600,
  fontSize: "14px",
  marginBottom: spacing.xs,
  margin: `0 0 ${spacing.xs} 0`,
});

const FeatureDetail = styled("p")({
  color: colors.dustyBlue,
  fontSize: "12px",
  margin: 0,
});

const TechStack = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: spacing.sm,
});

const TechBadge = styled("span")({
  padding: `${spacing.sm} ${spacing.base}`,
  backgroundColor: colors.ivory,
  color: colors.midnightBlue,
  borderRadius: borderRadius.md,
  fontSize: "14px",
  fontWeight: 500,
});

const VisualSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== "reverseOrder",
})<{ reverseOrder: boolean }>(({ reverseOrder }) => ({
  "@media (min-width: 1024px)": {
    order: reverseOrder ? 1 : 2,
  },
}));

const VisualBox = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "gradient",
})<{ gradient: string }>(({ gradient }) => ({
  position: "relative",
  height: "400px",
  borderRadius: borderRadius["2xl"],
  background: gradient,
  padding: spacing["2xl"],
  overflow: "hidden",
  boxShadow: shadows["2xl"],
}));

const DecorativeElements = styled(Box)({
  position: "absolute",
  inset: 0,
  opacity: 0.1,
});

const Circle = styled(Box)({
  position: "absolute",
  top: "40px",
  right: "40px",
  width: "128px",
  height: "128px",
  border: "4px solid white",
  borderRadius: "50%",
});

const Square = styled(Box)({
  position: "absolute",
  bottom: "40px",
  left: "40px",
  width: "96px",
  height: "96px",
  border: "4px solid white",
  borderRadius: borderRadius.md,
  transform: "rotate(45deg)",
});

const CentralBlur = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "192px",
  height: "192px",
  backgroundColor: "white",
  borderRadius: "50%",
  filter: "blur(48px)",
});

const IconDisplay = styled(Box)({
  position: "relative",
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

export const ServiceCard = ({
  icon: Icon,
  title,
  tagline,
  description,
  features,
  technologies,
  color,
  index,
}: ServiceCardProps) => {
  const reverseOrder = index % 2 === 1;

  return (
    <CardContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <ContentSection reverseOrder={reverseOrder}>
        <IconTitleGroup>
          <IconContainer
            gradient={color}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon color={colors.white} size={28} />
          </IconContainer>
          <TitleGroup>
            <ServiceTitle>{title}</ServiceTitle>
            <Tagline>{tagline}</Tagline>
          </TitleGroup>
        </IconTitleGroup>

        <ServiceDescription>{description}</ServiceDescription>

        <FeaturesGrid>
          {features.map((feature, i) => (
            <FeatureItem
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <FeatureIconBox gradient={color}>
                <feature.icon color={colors.white} size={18} />
              </FeatureIconBox>
              <FeatureContent>
                <FeatureText>{feature.text}</FeatureText>
                <FeatureDetail>{feature.detail}</FeatureDetail>
              </FeatureContent>
            </FeatureItem>
          ))}
        </FeaturesGrid>

        <TechStack>
          {technologies.map((tech, i) => (
            <TechBadge key={i}>{tech}</TechBadge>
          ))}
        </TechStack>
      </ContentSection>

      <VisualSection reverseOrder={reverseOrder}>
        <VisualBox
          gradient={color}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <DecorativeElements>
            <Circle />
            <Square />
            <CentralBlur />
          </DecorativeElements>

          <IconDisplay>
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon color={colors.white} size={120} strokeWidth={1} />
            </motion.div>
          </IconDisplay>
        </VisualBox>
      </VisualSection>
    </CardContainer>
  );
};
