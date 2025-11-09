"use client";

import { motion } from "motion/react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { QUICK_CONTACT_OPTIONS } from "@/constants";
import {
  colors,
  spacing,
  borderRadius,
  shadows,
  transitions,
} from "@/theme/theme";

const OptionsSection = styled("section")({
  padding: `${spacing["5xl"]} 0`,
  backgroundColor: colors.white,
  position: "relative",
  marginTop: `-${spacing["5xl"]}`,
  zIndex: 10,
});

const SectionContainer = styled(Container)({
  padding: `0 ${spacing.base}`,

  "@media (min-width: 1024px)": {
    padding: `0 ${spacing["2xl"]}`,
  },
});

const OptionsGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: spacing.xl,

  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

const OptionCard = styled(motion.a)({
  backgroundColor: colors.white,
  borderRadius: borderRadius["2xl"],
  padding: spacing["2xl"],
  boxShadow: shadows.lg,
  border: `1px solid ${colors.ivory}`,
  textDecoration: "none",
  display: "block",
  transition: `box-shadow ${transitions.slow}`,

  "&:hover": {
    boxShadow: shadows["2xl"],
  },
});

const IconContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "gradient",
})<{ gradient: string }>(({ gradient }) => ({
  width: "64px",
  height: "64px",
  borderRadius: borderRadius.xl,
  background: gradient,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: spacing.xl,
  transition: `transform ${transitions.slow}`,

  ".group:hover &": {
    transform: "scale(1.1)",
  },
}));

const OptionTitle = styled("h3")({
  color: colors.midnightBlue,
  marginBottom: spacing.sm,
  fontSize: "20px",
  fontWeight: 600,
  margin: `0 0 ${spacing.sm} 0`,
});

const OptionDescription = styled("p")({
  color: colors.dustyBlue,
  marginBottom: spacing.base,
  fontSize: "14px",
  lineHeight: 1.6,
  margin: `0 0 ${spacing.base} 0`,
});

const OptionAction = styled("p")({
  color: colors.midnightBlue,
  fontWeight: 600,
  margin: 0,
});

export const QuickContactOptions = () => {
  return (
    <OptionsSection aria-label="Quick contact options">
      <SectionContainer maxWidth={false}>
        <OptionsGrid>
          {QUICK_CONTACT_OPTIONS.map((option, index) => {
            const Icon = option.icon;
            return (
              <OptionCard
                key={option.title}
                href={option.href}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                aria-label={`${option.title}: ${option.description}`}
              >
                <IconContainer gradient={option.gradient}>
                  <Icon color={colors.white} size={28} />
                </IconContainer>
                <OptionTitle>{option.title}</OptionTitle>
                <OptionDescription>{option.description}</OptionDescription>
                <OptionAction>{option.action}</OptionAction>
              </OptionCard>
            );
          })}
        </OptionsGrid>
      </SectionContainer>
    </OptionsSection>
  );
};
