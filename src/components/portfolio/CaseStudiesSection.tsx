"use client";

import { motion } from "motion/react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { CASE_STUDIES } from "@/constants";
import {
  colors,
  spacing,
  borderRadius,
  transitions,
  shadows,
} from "@/theme/theme";

const StyledSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  backgroundColor: colors.ivory,
});

const SectionContainer = styled(Container)({
  padding: `0 ${spacing.base}`,

  "@media (min-width: 1024px)": {
    padding: `0 ${spacing["2xl"]}`,
  },
});

const SectionHeader = styled(motion.div)({
  textAlign: "center",
  marginBottom: spacing["5xl"],
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
  margin: `0 auto`,
  lineHeight: 1.6,
});

const CaseStudiesContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: spacing["2xl"],
  maxWidth: "1280px",
  margin: "0 auto",
});

const CaseStudyCard = styled(motion.div)({
  backgroundColor: colors.white,
  borderRadius: borderRadius["2xl"],
  overflow: "hidden",
  boxShadow: shadows.lg,
  transition: `box-shadow ${transitions.slow}`,

  "&:hover": {
    boxShadow: shadows["2xl"],
  },
});

const CaseStudyGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: spacing["2xl"],

  "@media (min-width: 1024px)": {
    gridTemplateColumns: "2fr 1fr",
  },
});

const InfoSection = styled(Box)({
  padding: spacing["2xl"],
});

const CaseStudyTitle = styled("h3")({
  color: colors.midnightBlue,
  fontSize: "24px",
  fontWeight: 700,
  marginBottom: spacing.sm,
  margin: `0 0 ${spacing.sm} 0`,
});

const CompanyName = styled("p")({
  color: colors.dustyBlue,
  fontWeight: 500,
  marginBottom: spacing.xl,
  margin: `0 0 ${spacing.xl} 0`,
});

const ChallengesSolutions = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: spacing.base,
});

const InfoBlock = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const InfoBlockTitle = styled("h4")({
  color: colors.midnightBlue,
  fontWeight: 600,
  marginBottom: spacing.sm,
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
  fontSize: "16px",
  margin: `0 0 ${spacing.sm} 0`,
});

const StatusDot = styled(Box)<{ color: string }>(({ color }) => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: color,
}));

const InfoBlockText = styled("p")({
  color: colors.dustyBlue,
  lineHeight: 1.6,
  margin: 0,
});

const ResultsSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== "gradient",
})<{ gradient: string }>(({ gradient }) => ({
  background: gradient,
  padding: spacing["2xl"],
  display: "flex",
  alignItems: "center",
}));

const ResultsContent = styled(Box)({
  width: "100%",
});

const ResultsTitle = styled("h4")({
  color: colors.white,
  fontWeight: 600,
  marginBottom: spacing.xl,
  fontSize: "18px",
  margin: `0 0 ${spacing.xl} 0`,
});

const ResultsGrid = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: spacing.base,
});

const ResultItem = styled(Box)({
  textAlign: "center",
});

const ResultMetric = styled(Box)({
  color: colors.white,
  fontSize: "32px",
  fontWeight: 700,
  marginBottom: spacing.xs,
});

const ResultLabel = styled(Box)({
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "14px",
});

export const CaseStudiesSection = () => {
  return (
    <StyledSection>
      <SectionContainer maxWidth={false}>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Label>Success Stories</Label>
          <Title>Automation Case Studies</Title>
          <Description>
            Real businesses, real impact. See how automation transformed
            operations.
          </Description>
        </SectionHeader>

        <CaseStudiesContainer>
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CaseStudyGrid>
                {/* Info */}
                <InfoSection>
                  <CaseStudyTitle>{study.title}</CaseStudyTitle>
                  <CompanyName>{study.company}</CompanyName>

                  <ChallengesSolutions>
                    <InfoBlock>
                      <InfoBlockTitle>
                        <StatusDot color="#ef4444" />
                        Challenge
                      </InfoBlockTitle>
                      <InfoBlockText>{study.challenge}</InfoBlockText>
                    </InfoBlock>

                    <InfoBlock>
                      <InfoBlockTitle>
                        <StatusDot color="#22c55e" />
                        Solution
                      </InfoBlockTitle>
                      <InfoBlockText>{study.solution}</InfoBlockText>
                    </InfoBlock>
                  </ChallengesSolutions>
                </InfoSection>

                {/* Results */}
                <ResultsSection gradient={study.color}>
                  <ResultsContent>
                    <ResultsTitle>Results</ResultsTitle>
                    <ResultsGrid>
                      {study.results.map((result, i) => (
                        <ResultItem key={i}>
                          <ResultMetric>{result.metric}</ResultMetric>
                          <ResultLabel>{result.label}</ResultLabel>
                        </ResultItem>
                      ))}
                    </ResultsGrid>
                  </ResultsContent>
                </ResultsSection>
              </CaseStudyGrid>
            </CaseStudyCard>
          ))}
        </CaseStudiesContainer>
      </SectionContainer>
    </StyledSection>
  );
};
