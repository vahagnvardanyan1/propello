"use client";

import { Box } from "@mui/material";

import {
  HeroSection,
  ServicesSection,
  WhyChooseSection,
  FinalCTASection,
} from "@/components/home";

const HomePage = () => {
  return (
    <Box id="main-content" sx={{ minHeight: "100vh" }}>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <FinalCTASection />
    </Box>
  );
};

export default HomePage;
