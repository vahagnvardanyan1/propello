"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { colors, spacing } from "@/theme/theme";

const HeroSection = styled("section")({
  paddingTop: spacing["4xl"],
  paddingBottom: spacing["7xl"],
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}, ${colors.deepNavy})`,
  position: "relative",
  overflow: "hidden",
});

const BackgroundOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  opacity: 0.1,
});

const AnimatedBlob = styled(motion.div)({
  position: "absolute",
  top: "33%",
  left: "50%",
  width: "600px",
  height: "600px",
  backgroundColor: colors.buttercream,
  borderRadius: "50%",
  filter: "blur(120px)",
});

const HeroContent = styled(motion.div)({
  position: "relative",
  zIndex: 10,
});

const HeroInner = styled(motion.div)({
  textAlign: "center",
  maxWidth: "1280px",
  margin: "0 auto",
});

const Badge = styled(motion.div)({
  display: "inline-block",
  marginBottom: spacing.xl,
  padding: `${spacing.sm} ${spacing.xl}`,
  borderRadius: "9999px",
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",

  "& > span": {
    color: colors.buttercream,
  },
});

const Title = styled("h1")({
  color: colors.white,
  marginBottom: spacing.xl,
  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
  letterSpacing: "-0.02em",
  fontWeight: 700,
  margin: `0 0 ${spacing.xl} 0`,
});

const HighlightText = styled("span")({
  color: colors.buttercream,
});

const Description = styled("p")({
  color: colors.ivory,
  fontSize: "20px",
  lineHeight: 1.6,
  maxWidth: "750px",
  margin: "0 auto",
});

export const ContactHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <HeroSection ref={heroRef} aria-labelledby="contact-hero-title">
      <BackgroundOverlay aria-hidden="true">
        <AnimatedBlob
          animate={{
            scale: [1, 1.5, 1],
            x: [-50, 50, -50],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </BackgroundOverlay>

      <Container maxWidth={false}>
        <HeroContent style={{ opacity }}>
          <HeroInner
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span>Get in Touch</span>
            </Badge>

            <Title id="contact-hero-title">
              Let&apos;s Talk About Your{" "}
              <HighlightText>Next Breakthrough</HighlightText>
            </Title>
            <Description>
              From code to automation — let&apos;s build efficiency together.
              Ready to transform your vision into reality?
            </Description>
          </HeroInner>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};
