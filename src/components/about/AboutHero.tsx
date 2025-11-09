"use client";

import { motion } from "motion/react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

import { colors, spacing } from "@/theme/theme";

const HeroSection = styled("section")({
  position: "relative",
  padding: `${spacing["7xl"]} 0`,
  overflow: "hidden",
  background: `linear-gradient(to bottom right, ${colors.deepNavy}, ${colors.midnightBlue}, ${colors.dustyBlue})`,
});

const AnimatedOrb = styled(motion.div)({
  position: "absolute",
  top: 0,
  right: 0,
  width: "700px",
  height: "700px",
  backgroundColor: colors.buttercream,
  opacity: 0.1,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const HeroContent = styled(motion.div)({
  textAlign: "center",
  maxWidth: "1024px",
  margin: "0 auto",
  position: "relative",
  zIndex: 10,
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

const Title = styled("h1")({
  color: colors.white,
  marginBottom: spacing.xl,
  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
  lineHeight: 1.1,
  fontWeight: 700,
  margin: `0 0 ${spacing.xl} 0`,
});

const GradientText = styled("span")({
  background: `linear-gradient(to right, ${colors.buttercream}, ${colors.ivory})`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const Description = styled("p")({
  color: colors.ivory,
  fontSize: "20px",
  lineHeight: 1.6,
  maxWidth: "750px",
  margin: "0 auto",
});

export const AboutHero = () => {
  return (
    <HeroSection>
      <AnimatedOrb
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container maxWidth={false}>
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
            About Propello
          </Label>

          <Title>
            Empowering Creators & Companies
            <br />
            <GradientText>Through Intelligent Automation</GradientText>
          </Title>

          <Description>
            We&apos;re on a mission to make world-class technology accessible to
            every business, transforming how companies build, design, and
            automate their way to success.
          </Description>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};
