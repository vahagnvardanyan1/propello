"use client";

import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { TeamCards } from "@/components/TeamCards";
import {
  AboutHero,
  MissionVision,
  TimelineSection,
  ValuesSection,
  CultureSection,
  JoinUsCTA,
} from "@/components/about";
import { colors, spacing } from "@/theme/theme";

const TeamSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  backgroundColor: colors.ivory,
});

const TeamHeader = styled(Box)({
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
  fontSize: "clamp(2rem, 4vw, 3.5rem)",
  fontWeight: 600,
  margin: 0,
});

const AboutPage = () => {
  return (
    <Box id="main-content" sx={{ minHeight: "100vh" }}>
      <AboutHero />
      <MissionVision />
      <TimelineSection />
      <ValuesSection />

      {/* Leadership Team */}
      <TeamSection>
        <Container maxWidth={false}>
          <TeamHeader>
            <Label>Meet the Team</Label>
            <Title>Led by Industry Experts</Title>
          </TeamHeader>
          <TeamCards />
        </Container>
      </TeamSection>

      <CultureSection />
      <JoinUsCTA />
    </Box>
  );
};

export default AboutPage;
