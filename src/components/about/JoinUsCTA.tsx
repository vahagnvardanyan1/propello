"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Users, Code } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

import { colors, spacing, borderRadius, transitions } from "@/theme/theme";

const CTASection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}, ${colors.deepNavy})`,
});

const CTAContent = styled(motion.div)({
  textAlign: "center",
});

const IconBox = styled("div")({
  width: "80px",
  height: "80px",
  margin: `0 auto ${spacing.xl} auto`,
  borderRadius: borderRadius["2xl"],
  backgroundColor: colors.buttercream,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Title = styled("h2")({
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

export const JoinUsCTA = () => {
  return (
    <CTASection>
      <Container maxWidth={false}>
        <CTAContent
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <IconBox>
            <Users color={colors.midnightBlue} size={36} />
          </IconBox>

          <Title>Join Propello — Let&apos;s Build the Future Together</Title>
          <Description>
            We&apos;re always looking for talented individuals who share our
            passion for innovation
          </Description>

          <CTAButton href="/contact">
            Get in Touch
            <Code size={22} />
          </CTAButton>
        </CTAContent>
      </Container>
    </CTASection>
  );
};
