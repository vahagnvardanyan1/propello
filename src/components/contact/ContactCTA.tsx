"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { colors, spacing, borderRadius, transitions } from "@/theme/theme";

const CTASection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}, ${colors.deepNavy})`,
  position: "relative",
  overflow: "hidden",
});

const BackgroundPattern = styled(Box)({
  position: "absolute",
  inset: 0,
  opacity: 0.05,
});

const AnimatedDots = styled(motion.div)({
  position: "absolute",
  inset: 0,
  backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
  backgroundSize: "50px 50px",
});

const CTAContent = styled(motion.div)({
  position: "relative",
  zIndex: 10,
  textAlign: "center",
});

const Label = styled("p")({
  color: colors.buttercream,
  marginBottom: spacing.base,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontSize: "14px",
  fontWeight: 600,
  margin: `0 0 ${spacing.base} 0`,
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
  marginBottom: spacing["3xl"],
  maxWidth: "640px",
  margin: `0 auto ${spacing["3xl"]} auto`,
  lineHeight: 1.6,
});

const EmailButton = styled(motion.a)({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.sm,
  padding: `${spacing.lg} ${spacing["3xl"]}`,
  backgroundColor: colors.buttercream,
  color: colors.midnightBlue,
  borderRadius: borderRadius.xl,
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: 600,
  transition: `all ${transitions.slow}`,

  "&:hover": {
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
  },
});

export const ContactCTA = () => {
  return (
    <CTASection>
      <BackgroundPattern aria-hidden="true">
        <AnimatedDots
          animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </BackgroundPattern>

      <Container maxWidth={false}>
        <CTAContent
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Label>Ready to Start?</Label>
          <Title>Let&apos;s Build Something Amazing</Title>
          <Description>
            Join over 50+ companies who trust Propello to deliver exceptional
            digital solutions.
          </Description>
          <EmailButton
            href="mailto:hello@propello.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Email Us Directly
            <Mail size={22} />
          </EmailButton>
        </CTAContent>
      </Container>
    </CTASection>
  );
};
