"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Search, Palette, Code, Zap, TrendingUp } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import { colors, spacing, shadows } from "@/theme/theme";

const TimelineContainer = styled(Box)({
  position: "relative",
});

const DesktopTimeline = styled(Box)({
  display: "none",

  "@media (min-width: 768px)": {
    display: "block",
  },
});

const DesktopTimelineInner = styled(Box)({
  position: "relative",
});

const ConnectionLine = styled(Box)({
  position: "absolute",
  top: "96px",
  left: 0,
  right: 0,
  height: "4px",
  background: `linear-gradient(to right, ${colors.midnightBlue}, ${colors.dustyBlue}, ${colors.buttercream})`,
  opacity: 0.2,
});

const StepsGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: spacing.xl,
});

const StepCard = styled(motion.div)({
  position: "relative",
});

const IconCircle = styled(motion.div)({
  position: "relative",
  margin: "0 auto",
  width: "96px",
  height: "96px",
  borderRadius: "50%",
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}, ${colors.deepNavy})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: shadows.xl,
  marginBottom: spacing.xl,
  border: "4px solid white",
});

const StepNumber = styled(Box)({
  position: "absolute",
  top: "-8px",
  right: "-8px",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  backgroundColor: colors.buttercream,
  color: colors.midnightBlue,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: "14px",
  boxShadow: shadows.lg,
});

const StepContent = styled(Box)({
  textAlign: "center",
});

const StepTitle = styled("h3")({
  color: colors.midnightBlue,
  fontWeight: 600,
  marginBottom: spacing.sm,
  fontSize: "18px",
  margin: `0 0 ${spacing.sm} 0`,
});

const StepDescription = styled("p")({
  color: colors.dustyBlue,
  fontSize: "14px",
  lineHeight: 1.6,
  margin: 0,
});

const MobileTimeline = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: spacing["2xl"],

  "@media (min-width: 768px)": {
    display: "none",
  },
});

const MobileStepCard = styled(motion.div)({
  display: "flex",
  gap: spacing.xl,
  alignItems: "flex-start",
});

const MobileIconContainer = styled(Box)({
  position: "relative",
  flexShrink: 0,
});

const MobileIconCircle = styled(motion.div)({
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}, ${colors.deepNavy})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: shadows.lg,
  border: "4px solid white",
  position: "relative",
});

const MobileStepNumber = styled(Box)({
  position: "absolute",
  top: "-4px",
  right: "-4px",
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: colors.buttercream,
  color: colors.midnightBlue,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: "12px",
});

const ConnectingLine = styled(Box)({
  position: "absolute",
  top: "64px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "2px",
  height: "48px",
  background: `linear-gradient(to bottom, ${colors.dustyBlue}, transparent)`,
});

const MobileContent = styled(Box)({
  flex: 1,
  paddingTop: spacing.sm,
});

const MobileStepTitle = styled("h3")({
  color: colors.midnightBlue,
  fontWeight: 600,
  marginBottom: spacing.sm,
  fontSize: "18px",
  margin: `0 0 ${spacing.sm} 0`,
});

const MobileStepDescription = styled("p")({
  color: colors.dustyBlue,
  fontSize: "14px",
  lineHeight: 1.6,
  margin: 0,
});

export const ProcessTimeline = () => {
  const t = useTranslations("process");

  const processSteps = [
    {
      icon: Search,
      key: "discover" as const,
      color: "linear-gradient(to bottom right, #60a5fa, #2563eb)",
    },
    {
      icon: Palette,
      key: "design" as const,
      color: "linear-gradient(to bottom right, #c084fc, #9333ea)",
    },
    {
      icon: Code,
      key: "build" as const,
      color: "linear-gradient(to bottom right, #4ade80, #16a34a)",
    },
    {
      icon: Zap,
      key: "automate" as const,
      color: "linear-gradient(to bottom right, #facc15, #ca8a04)",
    },
    {
      icon: TrendingUp,
      key: "optimize" as const,
      color: "linear-gradient(to bottom right, #f87171, #dc2626)",
    },
  ];

  return (
    <TimelineContainer>
      {/* Desktop Timeline */}
      <DesktopTimeline>
        <DesktopTimelineInner>
          <ConnectionLine />

          <StepsGrid>
            {processSteps.map((step, index) => (
              <StepCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <IconCircle
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(209, 207, 201, 0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon color={colors.buttercream} size={36} />
                  <StepNumber>{index + 1}</StepNumber>
                </IconCircle>

                <StepContent>
                  <StepTitle>{t(`${step.key}.title`)}</StepTitle>
                  <StepDescription>
                    {t(`${step.key}.description`)}
                  </StepDescription>
                </StepContent>
              </StepCard>
            ))}
          </StepsGrid>
        </DesktopTimelineInner>
      </DesktopTimeline>

      {/* Mobile Timeline */}
      <MobileTimeline>
        {processSteps.map((step, index) => (
          <MobileStepCard
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
          >
            <MobileIconContainer>
              <MobileIconCircle whileHover={{ scale: 1.1 }}>
                <step.icon color={colors.buttercream} size={28} />
                <MobileStepNumber>{index + 1}</MobileStepNumber>
              </MobileIconCircle>

              {index < processSteps.length - 1 && <ConnectingLine />}
            </MobileIconContainer>

            <MobileContent>
              <MobileStepTitle>{t(`${step.key}.title`)}</MobileStepTitle>
              <MobileStepDescription>
                {t(`${step.key}.description`)}
              </MobileStepDescription>
            </MobileContent>
          </MobileStepCard>
        ))}
      </MobileTimeline>
    </TimelineContainer>
  );
};
