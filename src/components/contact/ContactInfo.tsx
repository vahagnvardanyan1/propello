"use client";

import { motion } from "motion/react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import { SectionHeading } from "@/components/SectionHeading";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/constants";
import { colors, spacing, borderRadius, transitions } from "@/theme/theme";

const InfoContainer = styled(motion.div)({});

const ContactItems = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: spacing.xl,
  marginTop: spacing["4xl"],
});

const ContactItem = styled(motion.a)({
  display: "flex",
  alignItems: "flex-start",
  gap: spacing.base,
  padding: spacing.base,
  borderRadius: borderRadius.xl,
  textDecoration: "none",
  transition: `all ${transitions.slow}`,

  "&:hover": {
    backgroundColor: colors.white,
  },
});

const IconContainer = styled(Box)({
  width: "48px",
  height: "48px",
  borderRadius: borderRadius.md,
  backgroundColor: `${colors.midnightBlue}0d`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: `all ${transitions.slow}`,

  ".group:hover &": {
    backgroundColor: colors.midnightBlue,
  },

  "& svg": {
    color: colors.midnightBlue,
    transition: `color ${transitions.slow}`,
  },

  ".group:hover & svg": {
    color: colors.white,
  },
});

const InfoContent = styled(Box)({});

const InfoLabel = styled("p")({
  color: colors.dustyBlue,
  fontSize: "14px",
  marginBottom: spacing.xs,
  margin: `0 0 ${spacing.xs} 0`,
});

const InfoValue = styled("p")({
  color: colors.midnightBlue,
  fontWeight: 500,
  margin: 0,
});

const SocialSection = styled(motion.div)({
  marginTop: spacing["4xl"],
});

const SocialLabel = styled("p")({
  color: colors.dustyBlue,
  marginBottom: spacing.base,
  margin: `0 0 ${spacing.base} 0`,
});

const SocialLinksContainer = styled(Box)({
  display: "flex",
  gap: spacing.md,
});

const SocialLink = styled(motion.a, {
  shouldForwardProp: (prop) => prop !== "bgColor",
})<{ bgColor?: string }>(({ bgColor }) => ({
  width: "48px",
  height: "48px",
  borderRadius: borderRadius.md,
  backgroundColor: bgColor || colors.midnightBlue,
  color: colors.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  transition: `all ${transitions.slow}`,
}));

export const ContactInfo = () => {
  return (
    <InfoContainer
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <SectionHeading
        eyebrow="Contact Information"
        title="Ready to Get Started?"
        description="Fill out the form or reach out directly. We're here to help you succeed."
        align="left"
      />

      <ContactItems>
        {CONTACT_INFO.map((info, index) => {
          const Icon = info.icon;
          return (
            <ContactItem
              key={info.label}
              href={info.href}
              className="group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              aria-label={`${info.label}: ${info.value}`}
            >
              <IconContainer>
                <Icon size={20} />
              </IconContainer>
              <InfoContent>
                <InfoLabel>{info.label}</InfoLabel>
                <InfoValue>{info.value}</InfoValue>
              </InfoContent>
            </ContactItem>
          );
        })}
      </ContactItems>

      {/* Social Links */}
      <SocialSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SocialLabel>Follow us on social media</SocialLabel>
        <SocialLinksContainer>
          {SOCIAL_LINKS.map((social, index) => {
            const Icon = social.icon;
            return (
              <SocialLink
                key={social.label}
                href={social.href}
                bgColor={social.color}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label={`Follow us on ${social.label}`}
              >
                <Icon size={20} />
              </SocialLink>
            );
          })}
        </SocialLinksContainer>
      </SocialSection>
    </InfoContainer>
  );
};
