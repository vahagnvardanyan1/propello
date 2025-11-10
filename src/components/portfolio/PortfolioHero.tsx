"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Award, Users, Clock, TrendingUp } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { colors, spacing, borderRadius } from "@/theme/theme";

const StyledSection = styled("section")({
  position: "relative",
  padding: `${spacing["7xl"]} 0`,
  overflow: "hidden",
  background: `linear-gradient(to bottom right, ${colors.deepNavy}, ${colors.midnightBlue}, ${colors.dustyBlue})`,
});

const AnimatedOrb = styled(motion.div)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "700px",
  height: "700px",
  backgroundColor: colors.buttercream,
  opacity: 0.1,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const HeroContainer = styled(Container)({
  position: "relative",
  zIndex: 10,
  padding: `0 ${spacing.base}`,

  "@media (min-width: 1024px)": {
    padding: `0 ${spacing["2xl"]}`,
  },
});

const HeroContent = styled(motion.div)({
  textAlign: "center",
  maxWidth: "1024px",
  margin: "0 auto",
});

const Label = styled(motion.p)({
  color: colors.buttercream,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontSize: "14px",
  marginBottom: spacing.xl,
  fontWeight: 600,
  margin: `0 0 ${spacing.xl} 0`,
});

const MainHeading = styled("h1")({
  color: colors.white,
  marginBottom: spacing.xl,
  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
  lineHeight: 1.1,
  fontWeight: 700,
  margin: `0 0 ${spacing.xl} 0`,
});

const Description = styled("p")({
  color: colors.ivory,
  fontSize: "20px",
  lineHeight: 1.6,
  margin: 0,
});

const StatsGrid = styled(motion.div)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: spacing["2xl"],
  maxWidth: "1024px",
  margin: `${spacing["5xl"]} auto 0 auto`,

  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
});

const StatCard = styled(motion.div)({
  textAlign: "center",
});

const IconContainer = styled(Box)({
  width: "64px",
  height: "64px",
  margin: `0 auto ${spacing.base} auto`,
  borderRadius: borderRadius["2xl"],
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(8px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StatValue = styled(Box)({
  color: colors.white,
  fontSize: "32px",
  fontWeight: 700,
  marginBottom: spacing.xs,

  "@media (min-width: 640px)": {
    fontSize: "48px",
  },
});

const StatLabel = styled(Box)({
  color: colors.ivory,
  fontSize: "14px",
});

export const PortfolioHero = () => {
  const t = useTranslations("portfolio.hero");
  const tStats = useTranslations("portfolio.stats");

  const stats = [
    { icon: Award, value: "100+", key: "projectsDelivered" as const },
    { icon: Users, value: "2M+", key: "usersImpacted" as const },
    { icon: Clock, value: "10K+", key: "hoursSaved" as const },
    { icon: TrendingUp, value: "350%", key: "avgROI" as const },
  ];

  return (
    <StyledSection>
      <AnimatedOrb
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <HeroContainer maxWidth={false}>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Label
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("title")}
          </Label>

          <MainHeading>{t("subtitle")}</MainHeading>

          <Description>
            Real projects. Real results. See how we&apos;ve helped businesses
            scale, automate, and dominate their markets.
          </Description>
        </HeroContent>

        {/* Stats */}
        <StatsGrid
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <IconContainer>
                <stat.icon color={colors.buttercream} size={32} />
              </IconContainer>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{tStats(stat.key)}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </HeroContainer>
    </StyledSection>
  );
};
