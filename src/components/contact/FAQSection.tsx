"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { SectionHeading } from "@/components/SectionHeading";
import { colors, spacing, borderRadius, transitions } from "@/theme/theme";

const StyledSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  backgroundColor: colors.white,
});

const FAQContainer = styled(Box)({
  maxWidth: "768px",
  margin: `${spacing["5xl"]} auto 0 auto`,
  display: "flex",
  flexDirection: "column",
  gap: spacing.base,
});

const FAQItem = styled(motion.div)({
  background: `linear-gradient(to bottom right, ${colors.white}, ${colors.ivory}4d)`,
  borderRadius: borderRadius.xl,
  border: `1px solid ${colors.ivory}`,
  overflow: "hidden",
});

const FAQButton = styled("button")({
  width: "100%",
  padding: `${spacing.lg} ${spacing.xl}`,
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  transition: `background-color ${transitions.slow}`,

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },

  "&:focus-visible": {
    outline: `2px solid ${colors.midnightBlue}`,
    outlineOffset: "-2px",
  },
});

const Question = styled("span")({
  color: colors.midnightBlue,
  paddingRight: spacing.base,
  fontWeight: 500,
});

const IconWrapper = styled(Box)({
  flexShrink: 0,
});

const AnswerContainer = styled(motion.div)({
  overflow: "hidden",
});

const Answer = styled("div")({
  padding: `0 ${spacing.xl} ${spacing.lg} ${spacing.xl}`,
  color: colors.dustyBlue,
  lineHeight: 1.6,
});

export const FAQSection = () => {
  const t = useTranslations("contact.faq");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqKeys = [
    "whatServices",
    "projectTimeline",
    "pricingModel",
    "ongoingSupport",
    "aiAutomation",
  ] as const;

  return (
    <StyledSection aria-labelledby="faq-title">
      <Container maxWidth={false}>
        <SectionHeading
          eyebrow="FAQ"
          title={t("title")}
          description="Find answers to common questions about our services and process."
        />

        <FAQContainer>
          {faqKeys.map((faqKey, index) => {
            const isExpanded = expandedFaq === index;
            return (
              <FAQItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FAQButton
                  onClick={() => setExpandedFaq(isExpanded ? null : index)}
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${index}`}
                >
                  <Question>{t(`questions.${faqKey}.question`)}</Question>
                  <IconWrapper>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown color={colors.dustyBlue} size={20} />
                    </motion.div>
                  </IconWrapper>
                </FAQButton>

                <AnswerContainer
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  id={`faq-answer-${index}`}
                >
                  <Answer>{t(`questions.${faqKey}.answer`)}</Answer>
                </AnswerContainer>
              </FAQItem>
            );
          })}
        </FAQContainer>
      </Container>
    </StyledSection>
  );
};
