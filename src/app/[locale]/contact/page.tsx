"use client";

import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import {
  ContactHero,
  QuickContactOptions,
  ContactInfo,
  ContactFormSection,
  FAQSection,
  ContactCTA,
} from "@/components/contact";
import { colors, spacing } from "@/theme/theme";

const StyledContactFormSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  background: `linear-gradient(to bottom right, ${colors.white}, ${colors.ivory}33)`,
});

const FormContainer = styled(Container)({
  padding: `0 ${spacing.base}`,

  "@media (min-width: 1024px)": {
    padding: `0 ${spacing["2xl"]}`,
  },
});

const FormGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: spacing["5xl"],
  alignItems: "start",

  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

const ContactPage = () => {
  return (
    <Box id="main-content" sx={{ minHeight: "100vh" }}>
      <ContactHero />
      <QuickContactOptions />

      {/* Main Contact Form Section */}
      <StyledContactFormSection aria-labelledby="contact-form-title">
        <FormContainer maxWidth={false}>
          <FormGrid>
            <ContactInfo />
            <ContactFormSection />
          </FormGrid>
        </FormContainer>
      </StyledContactFormSection>

      <FAQSection />
      <ContactCTA />
    </Box>
  );
};

export default ContactPage;
