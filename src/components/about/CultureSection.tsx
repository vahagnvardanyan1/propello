"use client";

import { motion } from "motion/react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { COMPANY_CULTURE } from "@/constants";
import {
  colors,
  spacing,
  borderRadius,
  shadows,
  transitions,
} from "@/theme/theme";

const StyledSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  backgroundColor: colors.white,
});

const SectionHeader = styled(motion.div)({
  textAlign: "center",
  marginBottom: spacing["5xl"],
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
  margin: 0,
});

const CultureGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: spacing.xl,
  maxWidth: "1024px",
  margin: "0 auto",

  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
});

const CultureCard = styled(motion.div)({
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}, ${colors.dustyBlue})`,
  borderRadius: borderRadius["2xl"],
  padding: spacing.xl,
  textAlign: "center",
  boxShadow: shadows.lg,
  transition: `box-shadow ${transitions.slow}`,

  "&:hover": {
    boxShadow: shadows["2xl"],
  },
});

const Emoji = styled("div")({
  fontSize: "48px",
  marginBottom: spacing.md,
});

const CultureLabel = styled("div")({
  color: colors.white,
  fontWeight: 600,
  fontSize: "16px",
});

export const CultureSection = () => {
  return (
    <StyledSection>
      <Container maxWidth={false}>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Title>Our Culture</Title>
          <Description>
            What it&apos;s like to be part of the Propello family
          </Description>
        </SectionHeader>

        <CultureGrid>
          {COMPANY_CULTURE.map((item, index) => (
            <CultureCard
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Emoji>{item.emoji}</Emoji>
              <CultureLabel>{item.label}</CultureLabel>
            </CultureCard>
          ))}
        </CultureGrid>
      </Container>
    </StyledSection>
  );
};
