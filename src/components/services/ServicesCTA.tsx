"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

import { colors, spacing, borderRadius, transitions } from "@/theme/theme";

const CTASection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  backgroundColor: colors.white,
});

const CTAContent = styled(motion.div)({
  textAlign: "center",
});

const Title = styled("h2")({
  color: colors.midnightBlue,
  marginBottom: spacing.xl,
  fontSize: "clamp(2rem, 4vw, 3.5rem)",
  fontWeight: 600,
  margin: `0 0 ${spacing.xl} 0`,
});

const Description = styled("p")({
  color: colors.dustyBlue,
  fontSize: "20px",
  marginBottom: spacing["3xl"],
  maxWidth: "640px",
  margin: `0 auto ${spacing["3xl"]} auto`,
  lineHeight: 1.6,
});

const ContactButton = styled(Link)({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.md,
  padding: `${spacing.lg} ${spacing["3xl"]}`,
  background: `linear-gradient(to right, ${colors.midnightBlue}, ${colors.dustyBlue})`,
  color: colors.white,
  borderRadius: borderRadius.xl,
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: 600,
  transition: `all ${transitions.slow}`,

  "&:hover": {
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
    transform: "translateY(-4px)",
  },
});

export const ServicesCTA = () => {
  return (
    <CTASection>
      <Container maxWidth={false}>
        <CTAContent
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Title>Ready to Start Your Project?</Title>
          <Description>
            Let&apos;s discuss how we can help bring your vision to life with
            world-class technology and design
          </Description>

          <ContactButton href="/contact" className="group">
            Contact Us Today
            <ArrowRight size={22} />
          </ContactButton>
        </CTAContent>
      </Container>
    </CTASection>
  );
};
