"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Zap, ArrowRight } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

import {
  colors,
  spacing,
  borderRadius,
  shadows,
  transitions,
} from "@/theme/theme";

const CalloutSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}, ${colors.deepNavy}, ${colors.midnightBlue})`,
});

const CalloutContent = styled(motion.div)({
  maxWidth: "1024px",
  margin: "0 auto",
  textAlign: "center",
});

const IconBox = styled(motion.div)({
  width: "80px",
  height: "80px",
  margin: `0 auto ${spacing.xl} auto`,
  borderRadius: borderRadius["2xl"],
  background: `linear-gradient(to bottom right, ${colors.buttercream}, ${colors.ivory})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: shadows.xl,
});

const Title = styled("h2")({
  color: colors.white,
  marginBottom: spacing.xl,
  fontSize: "clamp(2rem, 4vw, 3rem)",
  fontWeight: 600,
  margin: `0 0 ${spacing.xl} 0`,
});

const Description = styled("p")({
  color: colors.ivory,
  fontSize: "18px",
  marginBottom: spacing["2xl"],
  lineHeight: 1.6,
  margin: `0 0 ${spacing["2xl"]} 0`,
});

const DemoButton = styled(Link)({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.sm,
  padding: `${spacing.base} ${spacing["2xl"]}`,
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

export const DemoCallout = () => {
  return (
    <CalloutSection>
      <Container maxWidth={false}>
        <CalloutContent
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <IconBox
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Zap color={colors.midnightBlue} size={40} />
          </IconBox>

          <Title>See Automation in Action</Title>

          <Description>
            Watch how we integrate AI-powered workflows that save 40+ hours per
            week and increase productivity by 300%
          </Description>

          <DemoButton href="/" className="group">
            View Live Demo
            <ArrowRight size={20} />
          </DemoButton>
        </CalloutContent>
      </Container>
    </CalloutSection>
  );
};
