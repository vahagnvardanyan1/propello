"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import {
  colors,
  spacing,
  borderRadius,
  shadows,
  transitions,
} from "@/theme/theme";

const StyledSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  backgroundColor: colors.ivory,
});

const SectionHeader = styled(motion.div)({
  textAlign: "center",
  marginBottom: spacing["6xl"],
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

const TimelineContainer = styled(Box)({
  position: "relative",
  maxWidth: "1280px",
  margin: "0 auto",
});

const TimelineLine = styled(Box)({
  position: "absolute",
  left: "50%",
  top: 0,
  bottom: 0,
  width: "4px",
  background: `linear-gradient(to bottom, ${colors.midnightBlue}, ${colors.dustyBlue}, ${colors.buttercream})`,
  transform: "translateX(-50%)",
  display: "none",

  "@media (min-width: 1024px)": {
    display: "block",
  },
});

const MilestonesContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: spacing["5xl"],
});

const MilestoneItem = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "isEven",
})<{ isEven: boolean }>(({ isEven }) => ({
  display: "flex",
  alignItems: "center",
  gap: spacing["2xl"],

  "@media (min-width: 1024px)": {
    flexDirection: isEven ? "row" : "row-reverse",
  },
}));

const ContentSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isEven",
})<{ isEven: boolean }>(({ isEven }) => ({
  flex: 1,

  "@media (min-width: 1024px)": {
    textAlign: isEven ? "right" : "left",
  },
}));

const ContentCard = styled(motion.div)({
  display: "inline-block",
  backgroundColor: colors.white,
  borderRadius: borderRadius["2xl"],
  padding: spacing.xl,
  boxShadow: shadows.lg,
  transition: `box-shadow ${transitions.slow}`,

  "&:hover": {
    boxShadow: shadows.xl,
  },
});

const Year = styled("div")({
  color: colors.buttercream,
  fontWeight: 700,
  fontSize: "24px",
  marginBottom: spacing.sm,
  margin: `0 0 ${spacing.sm} 0`,
});

const MilestoneTitle = styled("h3")({
  color: colors.midnightBlue,
  fontWeight: 700,
  fontSize: "20px",
  marginBottom: spacing.sm,
  margin: `0 0 ${spacing.sm} 0`,
});

const MilestoneDescription = styled("p")({
  color: colors.dustyBlue,
  lineHeight: 1.6,
  margin: 0,
});

const TimelineDot = styled(Box)({
  display: "none",
  position: "relative",

  "@media (min-width: 1024px)": {
    display: "block",
  },
});

const Dot = styled(motion.div)({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: colors.midnightBlue,
  border: "4px solid white",
  boxShadow: shadows.lg,
});

const Spacer = styled(Box)({
  flex: 1,
  display: "none",

  "@media (min-width: 1024px)": {
    display: "block",
  },
});

export const TimelineSection = () => {
  const t = useTranslations("about.timeline");

  const milestones = [
    { year: "2015", key: "2015" as const },
    { year: "2017", key: "2017" as const },
    { year: "2019", key: "2019" as const },
    { year: "2022", key: "2022" as const },
    { year: "2025", key: "2025" as const },
  ];

  return (
    <StyledSection>
      <Container maxWidth={false}>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Label>Our Journey</Label>
          <Title>{t("title")}</Title>
        </SectionHeader>

        <TimelineContainer>
          <TimelineLine />

          <MilestonesContainer>
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <MilestoneItem
                  key={index}
                  isEven={isEven}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ContentSection isEven={isEven}>
                    <ContentCard whileHover={{ scale: 1.05 }}>
                      <Year>{milestone.year}</Year>
                      <MilestoneTitle>
                        {t(`milestones.${milestone.key}.title`)}
                      </MilestoneTitle>
                      <MilestoneDescription>
                        {t(`milestones.${milestone.key}.description`)}
                      </MilestoneDescription>
                    </ContentCard>
                  </ContentSection>

                  <TimelineDot>
                    <Dot whileHover={{ scale: 1.5 }} />
                  </TimelineDot>

                  <Spacer />
                </MilestoneItem>
              );
            })}
          </MilestonesContainer>
        </TimelineContainer>
      </Container>
    </StyledSection>
  );
};
