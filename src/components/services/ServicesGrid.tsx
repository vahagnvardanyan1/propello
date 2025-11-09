"use client";

import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { ServiceCard } from "./ServiceCard";
import { SERVICES_DETAILED } from "@/constants";
import { colors, spacing } from "@/theme/theme";

const GridSection = styled("section")({
  padding: `${spacing["7xl"]} 0`,
  backgroundColor: colors.white,
});

const SectionContainer = styled(Container)({
  padding: `0 ${spacing.base}`,

  "@media (min-width: 1024px)": {
    padding: `0 ${spacing["2xl"]}`,
  },
});

const ServicesContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: spacing["7xl"],
});

export const ServicesGrid = () => {
  return (
    <GridSection>
      <SectionContainer maxWidth={false}>
        <ServicesContainer>
          {SERVICES_DETAILED.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </ServicesContainer>
      </SectionContainer>
    </GridSection>
  );
};
