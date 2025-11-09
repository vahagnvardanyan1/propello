"use client";

import { motion } from "motion/react";
import { Target, Rocket } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { colors, spacing, borderRadius } from "@/theme/theme";

const StyledSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  backgroundColor: colors.white,
});

const CardsGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: spacing["4xl"],
  maxWidth: "1200px",
  margin: "0 auto",

  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

const MissionCard = styled(motion.div)({
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}, ${colors.deepNavy})`,
  borderRadius: borderRadius["2xl"],
  padding: spacing["3xl"],
  color: colors.white,
  position: "relative",
  overflow: "hidden",
});

const VisionCard = styled(motion.div)({
  background: `linear-gradient(to bottom right, ${colors.buttercream}, ${colors.ivory})`,
  borderRadius: borderRadius["2xl"],
  padding: spacing["3xl"],
  position: "relative",
  overflow: "hidden",
});

const AnimatedBlob1 = styled(motion.div)({
  position: "absolute",
  top: 0,
  right: 0,
  width: "256px",
  height: "256px",
  backgroundColor: colors.buttercream,
  opacity: 0.1,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const AnimatedBlob2 = styled(motion.div)({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "256px",
  height: "256px",
  backgroundColor: colors.midnightBlue,
  opacity: 0.05,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const CardContent = styled(Box)({
  position: "relative",
  zIndex: 10,
});

const IconBox = styled(Box)({
  width: "64px",
  height: "64px",
  borderRadius: borderRadius["2xl"],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: spacing.xl,
});

const MissionIconBox = styled(IconBox)({
  backgroundColor: colors.buttercream,
});

const VisionIconBox = styled(IconBox)({
  backgroundColor: colors.midnightBlue,
});

const CardTitle = styled("h2")({
  fontSize: "32px",
  fontWeight: 700,
  marginBottom: spacing.base,
  margin: `0 0 ${spacing.base} 0`,
});

const MissionTitle = styled(CardTitle)({
  color: colors.white,
});

const VisionTitle = styled(CardTitle)({
  color: colors.midnightBlue,
});

const CardDescription = styled("p")({
  fontSize: "18px",
  lineHeight: 1.6,
  margin: 0,
});

const MissionDescription = styled(CardDescription)({
  color: colors.ivory,
});

const VisionDescription = styled(CardDescription)({
  color: colors.dustyBlue,
});

export const MissionVision = () => {
  return (
    <StyledSection>
      <Container maxWidth={false}>
        <CardsGrid>
          <MissionCard
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatedBlob1
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <CardContent>
              <MissionIconBox>
                <Target color={colors.midnightBlue} size={32} />
              </MissionIconBox>
              <MissionTitle>Our Mission</MissionTitle>
              <MissionDescription>
                To democratize enterprise-grade technology by building
                intelligent, automated systems that empower businesses to scale
                faster, work smarter, and achieve more with less.
              </MissionDescription>
            </CardContent>
          </MissionCard>

          <VisionCard
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatedBlob2
              animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <CardContent>
              <VisionIconBox>
                <Rocket color={colors.white} size={32} />
              </VisionIconBox>
              <VisionTitle>Our Vision</VisionTitle>
              <VisionDescription>
                To be the world&apos;s most trusted partner for businesses
                seeking to harness the power of automation and AI, creating a
                future where technology amplifies human potential.
              </VisionDescription>
            </CardContent>
          </VisionCard>
        </CardsGrid>
      </Container>
    </StyledSection>
  );
};
