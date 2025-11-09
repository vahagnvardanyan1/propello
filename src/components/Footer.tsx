"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { colors, spacing, transitions } from "@/theme/theme";

const StyledFooter = styled("footer")({
  backgroundColor: colors.deepNavy,
  color: colors.white,
});

const FooterContainer = styled(Container)({
  padding: `${spacing["5xl"]} ${spacing.base}`,

  "@media (min-width: 1024px)": {
    padding: `${spacing["5xl"]} ${spacing["2xl"]}`,
  },
});

const FooterGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: spacing["4xl"],

  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
});

const BrandSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: spacing.base,
});

const BrandName = styled("h3")({
  fontSize: "28px",
  fontWeight: 600,
  margin: 0,
});

const BrandDescription = styled("p")({
  color: colors.ivory,
  opacity: 0.8,
  lineHeight: 1.6,
  margin: 0,
});

const BrandTagline = styled("p")({
  color: colors.ivory,
  opacity: 0.6,
  fontSize: "14px",
  margin: 0,
});

const SocialLinks = styled(Box)({
  display: "flex",
  gap: spacing.base,
  paddingTop: spacing.base,
});

const SocialLink = styled(motion.a)({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  color: colors.white,
  transition: `all ${transitions.slow}`,

  "&:hover": {
    backgroundColor: colors.buttercream,
    color: colors.midnightBlue,
  },
});

const FooterSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const SectionTitle = styled("h4")({
  marginBottom: spacing.base,
  fontSize: "18px",
  fontWeight: 600,
  margin: `0 0 ${spacing.base} 0`,
});

const LinkList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: spacing.md,
});

const FooterLink = styled(Link)({
  color: colors.ivory,
  opacity: 0.8,
  textDecoration: "none",
  transition: `all ${transitions.slow}`,
  display: "inline-block",

  "&:hover": {
    color: colors.buttercream,
    opacity: 1,
    transform: "translateX(4px)",
  },
});

const NewsletterSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const NewsletterDescription = styled("p")({
  color: colors.ivory,
  opacity: 0.8,
  marginBottom: spacing.base,
  margin: `0 0 ${spacing.base} 0`,
});

const NewsletterForm = styled(Box)({
  display: "flex",
  gap: spacing.sm,
});

const EmailInput = styled("input")({
  flex: 1,
  padding: `${spacing.sm} ${spacing.base}`,
  borderRadius: "12px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  color: colors.white,
  fontSize: "14px",
  transition: `border-color ${transitions.slow}`,
  outline: "none",

  "&::placeholder": {
    color: "rgba(255, 255, 255, 0.5)",
  },

  "&:focus": {
    borderColor: colors.buttercream,
  },
});

const SubmitButton = styled("button")({
  padding: `${spacing.sm} ${spacing.base}`,
  backgroundColor: colors.buttercream,
  color: colors.midnightBlue,
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: 500,
  transition: `all ${transitions.slow}`,

  "&:hover": {
    backgroundColor: `${colors.buttercream}e6`,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },
});

const BottomBar = styled(Box)({
  marginTop: spacing["5xl"],
  paddingTop: spacing["2xl"],
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: spacing.base,

  "@media (min-width: 768px)": {
    flexDirection: "row",
    gap: 0,
  },
});

const Copyright = styled("p")({
  color: colors.ivory,
  opacity: 0.6,
  margin: 0,
  fontSize: "14px",
});

const BottomLinks = styled(Box)({
  display: "flex",
  gap: spacing.xl,
});

const BottomLink = styled(Link)({
  color: colors.ivory,
  opacity: 0.6,
  textDecoration: "none",
  fontSize: "14px",
  transition: `all ${transitions.slow}`,

  "&:hover": {
    color: colors.buttercream,
    opacity: 1,
  },
});

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Contact", path: "/contact" },
    ],
    Services: [
      { name: "Web Development", path: "/services" },
      { name: "Mobile Backend", path: "/services" },
      { name: "UI/UX Design", path: "/services" },
      { name: "Business Automation", path: "/services" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "Github" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <StyledFooter>
      <FooterContainer maxWidth={false}>
        <FooterGrid>
          {/* Brand */}
          <BrandSection>
            <BrandName>Propello</BrandName>
            <BrandDescription>
              We build. We design. We automate.
            </BrandDescription>
            <BrandTagline>
              Accelerate Innovation. Automate Success.
            </BrandTagline>
            <SocialLinks>
              {socialLinks.map((social) => (
                <SocialLink
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <social.icon size={18} />
                </SocialLink>
              ))}
            </SocialLinks>
          </BrandSection>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <FooterSection key={category}>
              <SectionTitle>{category}</SectionTitle>
              <LinkList>
                {links.map((link) => (
                  <li key={link.name}>
                    <FooterLink href={link.path}>{link.name}</FooterLink>
                  </li>
                ))}
              </LinkList>
            </FooterSection>
          ))}

          {/* Newsletter */}
          <NewsletterSection>
            <SectionTitle>Stay Updated</SectionTitle>
            <NewsletterDescription>
              Subscribe for insights, updates, and tech news.
            </NewsletterDescription>
            <NewsletterForm>
              <EmailInput type="email" placeholder="Your email" />
              <SubmitButton>→</SubmitButton>
            </NewsletterForm>
          </NewsletterSection>
        </FooterGrid>

        {/* Bottom Bar */}
        <BottomBar>
          <Copyright>© {currentYear} Propello. All rights reserved.</Copyright>
          <BottomLinks>
            <BottomLink href="#">Privacy Policy</BottomLink>
            <BottomLink href="#">Terms of Service</BottomLink>
          </BottomLinks>
        </BottomBar>
      </FooterContainer>
    </StyledFooter>
  );
};
