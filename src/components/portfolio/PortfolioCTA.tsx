"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Award } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

import { Link } from "@/navigation";
import { colors, spacing, borderRadius, transitions } from "@/theme/theme";

const StyledSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}, ${colors.deepNavy})`,
});

const SectionContainer = styled(Container)({
  textAlign: "center",
  padding: `0 ${spacing.base}`,

  "@media (min-width: 1024px)": {
    padding: `0 ${spacing["2xl"]}`,
  },
});

const MainHeading = styled("h2")({
  color: colors.white,
  marginBottom: spacing.xl,
  fontSize: "clamp(2rem, 4vw, 3.5rem)",
  fontWeight: 600,
  margin: `0 0 ${spacing.xl} 0`,
});

const Description = styled("p")({
  color: colors.ivory,
  fontSize: "20px",
  marginBottom: spacing["3xl"],
  maxWidth: "640px",
  margin: `0 auto ${spacing["3xl"]} auto`,
  lineHeight: 1.6,
});

const CTAButton = styled(Link)({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.md,
  padding: `${spacing.lg} ${spacing["3xl"]}`,
  backgroundColor: colors.buttercream,
  color: colors.midnightBlue,
  borderRadius: borderRadius.xl,
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: 600,
  transition: `all ${transitions.slow}`,

  "&:hover": {
    backgroundColor: `${colors.buttercream}e6`,
    boxShadow: `0 25px 50px ${colors.buttercream}66`,
    transform: "translateY(-4px)",
  },
});

export const PortfolioCTA = () => {
  const t = useTranslations("portfolio.cta");

  return (
    <StyledSection>
      <SectionContainer maxWidth={false}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MainHeading>{t("title")}</MainHeading>
          <Description>{t("subtitle")}</Description>

          <CTAButton href="/contact">
            {t("button")}
            <Award size={22} />
          </CTAButton>
        </motion.div>
      </SectionContainer>
    </StyledSection>
  );
};
