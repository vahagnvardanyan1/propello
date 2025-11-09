"use client";

import { motion } from "motion/react";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import { TEAM_MEMBERS } from "@/constants";
import {
  colors,
  spacing,
  borderRadius,
  shadows,
  transitions,
} from "@/theme/theme";

const TeamGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: spacing["2xl"],

  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
});

const TeamMemberCard = styled(motion.div)({
  position: "relative",
});

const CardInner = styled(motion.div)({
  backgroundColor: colors.white,
  borderRadius: borderRadius["2xl"],
  padding: spacing["2xl"],
  boxShadow: shadows.lg,
  position: "relative",
  overflow: "hidden",
  border: `1px solid ${colors.dustyBlue}1a`,
  transition: `box-shadow ${transitions.slow}`,
  transformStyle: "preserve-3d",

  "&:hover": {
    boxShadow: shadows["2xl"],
  },
});

const GradientOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}00, ${colors.midnightBlue}00)`,
  transition: `all ${transitions.slower}`,

  ".group:hover &": {
    background: `linear-gradient(to bottom right, ${colors.midnightBlue}0d, ${colors.dustyBlue}0d)`,
  },
});

const CardContent = styled(Box)({
  position: "relative",
  zIndex: 10,
});

const Avatar = styled(motion.div)({
  width: "96px",
  height: "96px",
  margin: `0 auto ${spacing.xl} auto`,
  borderRadius: "50%",
  background: `linear-gradient(to bottom right, ${colors.midnightBlue}, ${colors.dustyBlue})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "40px",
  boxShadow: shadows.xl,
});

const MemberName = styled("h3")({
  color: colors.midnightBlue,
  fontSize: "20px",
  fontWeight: 700,
  marginBottom: spacing.xs,
  textAlign: "center",
  margin: `0 0 ${spacing.xs} 0`,
});

const MemberRole = styled("p")({
  color: colors.buttercream,
  fontWeight: 500,
  marginBottom: spacing.base,
  textAlign: "center",
  margin: `0 0 ${spacing.base} 0`,
});

const MemberBio = styled("p")({
  color: colors.dustyBlue,
  fontSize: "14px",
  lineHeight: 1.6,
  textAlign: "center",
  marginBottom: spacing.xl,
  margin: `0 0 ${spacing.xl} 0`,
});

const SocialLinks = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: spacing.md,
  opacity: 0,
  transition: `opacity ${transitions.slow}`,

  ".group:hover &": {
    opacity: 1,
  },
});

const SocialLink = styled(motion.a)({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: colors.midnightBlue,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  transition: `background-color ${transitions.base}`,

  "&:hover": {
    backgroundColor: colors.dustyBlue,
  },
});

export const TeamCards = () => {
  return (
    <TeamGrid>
      {TEAM_MEMBERS.map((member, index) => (
        <TeamMemberCard
          key={index}
          className="group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
        >
          <CardInner
            whileHover={{
              rotateY: 5,
              rotateX: -5,
            }}
            transition={{ duration: 0.3 }}
          >
            <GradientOverlay />

            <CardContent>
              <Avatar
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {member.image}
              </Avatar>

              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              <MemberBio>{member.bio}</MemberBio>

              <SocialLinks>
                <SocialLink
                  href={member.social.linkedin}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin color={colors.white} size={18} />
                </SocialLink>
                <SocialLink
                  href={member.social.twitter}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter color={colors.white} size={18} />
                </SocialLink>
                <SocialLink
                  href={`mailto:${member.social.email}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail color={colors.white} size={18} />
                </SocialLink>
              </SocialLinks>
            </CardContent>
          </CardInner>
        </TeamMemberCard>
      ))}
    </TeamGrid>
  );
};
