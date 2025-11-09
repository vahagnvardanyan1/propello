"use client";

import type { ReactNode } from "react";

import { motion } from "motion/react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import { colors, spacing } from "@/theme/theme";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  align?: "left" | "center" | "right";
  dark?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

const maxWidthMap: Record<string, string> = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  full: "100%",
};

const Container = styled(Box, {
  shouldForwardProp: (prop) => !["align", "maxWidth"].includes(prop as string),
})<{ align: "left" | "center" | "right"; maxWidth: string }>(
  ({ align, maxWidth }) => ({
    textAlign: align,
    maxWidth,
    margin: align === "center" ? "0 auto" : 0,
  }),
);

const Eyebrow = styled(motion.p, {
  shouldForwardProp: (prop) => prop !== "dark",
})<{ dark: boolean }>(({ dark }) => ({
  color: dark ? colors.buttercream : colors.dustyBlue,
  marginBottom: spacing.base,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontSize: "14px",
  fontWeight: 500,
  margin: `0 0 ${spacing.base} 0`,
}));

const Title = styled(motion.h2, {
  shouldForwardProp: (prop) => prop !== "dark",
})<{ dark: boolean }>(({ dark }) => ({
  color: dark ? colors.white : colors.midnightBlue,
  marginBottom: spacing.base,
  fontSize: "clamp(2rem, 4vw, 3rem)",
  lineHeight: 1.25,
  fontWeight: 600,
  margin: `0 0 ${spacing.base} 0`,
}));

const Description = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "dark",
})<{ dark: boolean }>(({ dark }) => ({
  color: dark ? colors.ivory : colors.dustyBlue,
  fontSize: "18px",
  lineHeight: 1.6,
  maxWidth: "100%",
}));

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  maxWidth = "lg",
}: SectionHeadingProps) => {
  return (
    <Container align={align} maxWidth={maxWidthMap[maxWidth]}>
      {eyebrow && (
        <Eyebrow
          dark={dark}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </Eyebrow>
      )}

      <Title
        dark={dark}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </Title>

      {description && (
        <Description
          dark={dark}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {typeof description === "string" ? <p>{description}</p> : description}
        </Description>
      )}
    </Container>
  );
};
