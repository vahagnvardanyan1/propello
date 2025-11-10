"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Target, Zap, Heart, Lightbulb } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { colors, spacing, borderRadius, shadows } from "@/theme/theme";

const StyledSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  backgroundColor: colors.white,
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
  fontSize: "clamp(2rem, 4vw, 3.5rem)",
  fontWeight: 600,
  margin: 0,
});

const ValuesGrid = styled(Box)({
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

const ValueCard = styled(motion.div)({
  textAlign: "center",
});

const ValueIcon = styled(motion.div)({
  width: "80px",
  height: "80px",
  margin: `0 auto ${spacing.xl} auto`,
  borderRadius: borderRadius["2xl"],
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}, ${colors.dustyBlue})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: shadows.xl,
});

const ValueTitle = styled("h3")({
  color: colors.midnightBlue,
  fontWeight: 700,
  fontSize: "20px",
  marginBottom: spacing.md,
  margin: `0 0 ${spacing.md} 0`,
});

const ValueDescription = styled("p")({
  color: colors.dustyBlue,
  lineHeight: 1.6,
  margin: 0,
});

export const ValuesSection = () => {
  const t = useTranslations("about.values");

  const values = [
    { icon: Target, key: "excellence" as const },
    { icon: Zap, key: "speed" as const },
    { icon: Heart, key: "empathy" as const },
    { icon: Lightbulb, key: "innovation" as const },
  ];

  return (
    <StyledSection>
      <Container maxWidth={false}>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Label>What Drives Us</Label>
          <Title>{t("title")}</Title>
        </SectionHeader>

        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <ValueIcon
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <value.icon color={colors.white} size={36} />
              </ValueIcon>

              <ValueTitle>{t(`${value.key}.title`)}</ValueTitle>

              <ValueDescription>{t(`${value.key}.description`)}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Container>
    </StyledSection>
  );
};
