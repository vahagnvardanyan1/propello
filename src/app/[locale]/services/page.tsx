"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { ProcessTimeline } from "@/components/ProcessTimeline";
import {
  ServicesHero,
  ServicesGrid,
  DemoCallout,
  ServicesCTA,
} from "@/components/services";
import { colors, spacing } from "@/theme/theme";

const ProcessSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  background: `linear-gradient(to bottom right, ${colors.ivory}, ${colors.white})`,
});

const ProcessHeader = styled(motion.div)({
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
  marginBottom: spacing.base,
  fontSize: "clamp(2rem, 4vw, 3.5rem)",
  fontWeight: 600,
  margin: `0 0 ${spacing.base} 0`,
});

const Description = styled("p")({
  color: colors.dustyBlue,
  fontSize: "18px",
  maxWidth: "640px",
  margin: "0 auto",
  lineHeight: 1.6,
});

const ServicesPage = () => {
  const t = useTranslations("process");
  const tCommon = useTranslations("common");

  return (
    <Box id="main-content" sx={{ minHeight: "100vh" }}>
      <ServicesHero />
      <ServicesGrid />

      {/* Our Process */}
      <ProcessSection>
        <Container maxWidth={false}>
          <ProcessHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Label>{tCommon("howWeWork")}</Label>
            <Title>{t("title")}</Title>
            <Description>{tCommon("provenMethodology")}</Description>
          </ProcessHeader>

          <ProcessTimeline />
        </Container>
      </ProcessSection>

      <DemoCallout />
      <ServicesCTA />
    </Box>
  );
};

export default ServicesPage;
