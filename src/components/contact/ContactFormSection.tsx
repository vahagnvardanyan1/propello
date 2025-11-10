"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Send, CheckCircle } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import { FormInput } from "@/components/FormInput";
import { Button } from "@/components/Button";
import { useContactForm } from "@/hooks";
import {
  colors,
  spacing,
  borderRadius,
  shadows,
  transitions,
} from "@/theme/theme";

const FormContainer = styled(motion.div)({
  backgroundColor: colors.white,
  borderRadius: borderRadius["2xl"],
  boxShadow: shadows.xl,
  padding: spacing["2xl"],

  "@media (min-width: 1024px)": {
    padding: spacing["3xl"],
  },
});

const FormTitle = styled("h2")({
  color: colors.midnightBlue,
  marginBottom: spacing.sm,
  fontSize: "28px",
  fontWeight: 600,
  margin: `0 0 ${spacing.sm} 0`,
});

const FormSubtitle = styled("p")({
  color: colors.dustyBlue,
  marginBottom: spacing["2xl"],
  margin: `0 0 ${spacing["2xl"]} 0`,
});

const SuccessAlert = styled(motion.div)({
  marginBottom: spacing.xl,
  padding: spacing.base,
  backgroundColor: "#f0fdf4",
  border: "1px solid #86efac",
  borderRadius: borderRadius.md,
  display: "flex",
  alignItems: "flex-start",
  gap: spacing.md,
});

const SuccessContent = styled(Box)({});

const SuccessTitle = styled("p")({
  color: "#166534",
  fontWeight: 600,
  margin: `0 0 ${spacing.xs} 0`,
});

const SuccessMessage = styled("p")({
  color: "#15803d",
  fontSize: "14px",
  margin: 0,
});

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: spacing.xl,
});

const SelectWrapper = styled(Box)({});

const Label = styled("label")({
  display: "block",
  marginBottom: spacing.sm,
  color: colors.midnightBlue,
  fontWeight: 500,
});

const RequiredStar = styled("span")({
  color: "#ef4444",
  marginLeft: spacing.xs,
});

const Select = styled("select", {
  shouldForwardProp: (prop) => prop !== "hasError",
})<{ hasError: boolean }>(({ hasError }) => ({
  width: "100%",
  padding: `${spacing.md} ${spacing.base}`,
  backgroundColor: colors.white,
  border: `2px solid ${hasError ? "#ef4444" : colors.ivory}`,
  borderRadius: borderRadius.xl,
  fontSize: "16px",
  minHeight: "48px",
  color: colors.midnightBlue,
  transition: `all ${transitions.base}`,
  outline: "none",

  "&:hover": {
    borderColor: hasError ? "#dc2626" : colors.dustyBlue,
  },

  "&:focus": {
    borderColor: hasError ? "#dc2626" : colors.midnightBlue,
    boxShadow: hasError
      ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
      : `0 0 0 4px ${colors.midnightBlue}1a`,
  },
}));

const ErrorMessage = styled(motion.p)({
  marginTop: spacing.sm,
  fontSize: "14px",
  color: "#dc2626",
});

const Disclaimer = styled("p")({
  fontSize: "12px",
  color: colors.dustyBlue,
  textAlign: "center",
  margin: 0,
});

export const ContactFormSection = () => {
  const t = useTranslations("contact.form");
  const {
    formData,
    formErrors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const serviceOptions = [
    { value: "", label: t("serviceOptions.select") },
    { value: "web-development", label: t("serviceOptions.webDevelopment") },
    {
      value: "mobile-backend",
      label: t("serviceOptions.mobileBackend"),
    },
    { value: "uiux-design", label: t("serviceOptions.uiuxDesign") },
    {
      value: "business-automation",
      label: t("serviceOptions.businessAutomation"),
    },
    { value: "consulting", label: t("serviceOptions.consulting") },
  ];

  return (
    <FormContainer
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <FormTitle id="contact-form-title">{t("title")}</FormTitle>
      <FormSubtitle>We&apos;ll respond within 24 hours</FormSubtitle>

      {submitSuccess && (
        <SuccessAlert
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
        >
          <CheckCircle color="#16a34a" size={20} style={{ marginTop: "2px" }} />
          <SuccessContent>
            <SuccessTitle>Message sent successfully!</SuccessTitle>
            <SuccessMessage>{t("success")}</SuccessMessage>
          </SuccessContent>
        </SuccessAlert>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        <FormInput
          label={t("name")}
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={formErrors.name}
          placeholder={t("namePlaceholder")}
          required
          autoComplete="name"
        />

        <FormInput
          label={t("email")}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={formErrors.email}
          placeholder={t("emailPlaceholder")}
          required
          autoComplete="email"
        />

        <FormInput
          label="Company Name"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Acme Inc. (Optional)"
          autoComplete="organization"
        />

        <SelectWrapper>
          <Label htmlFor="service-select">
            {t("service")}
            <RequiredStar aria-label="required">*</RequiredStar>
          </Label>
          <Select
            id="service-select"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            hasError={!!formErrors.service}
            aria-invalid={formErrors.service ? "true" : "false"}
            aria-describedby={formErrors.service ? "service-error" : undefined}
          >
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          {formErrors.service && (
            <ErrorMessage
              id="service-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              role="alert"
            >
              {formErrors.service}
            </ErrorMessage>
          )}
        </SelectWrapper>

        <FormInput
          label={t("message")}
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={formErrors.message}
          placeholder={t("messagePlaceholder")}
          multiline
          rows={5}
          required
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={isSubmitting}
          rightIcon={<Send size={20} />}
        >
          {isSubmitting ? t("sending") : t("submit")}
        </Button>

        <Disclaimer>
          By submitting this form, you agree to our privacy policy and terms of
          service.
        </Disclaimer>
      </Form>
    </FormContainer>
  );
};
