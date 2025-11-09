"use client";

import {
  HeroSection,
  ServicesSection,
  WhyChooseSection,
  FinalCTASection,
} from "@/components/home";

const HomePage = () => {
  return (
    <div className="min-h-screen" id="main-content">
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <FinalCTASection />
    </div>
  );
};

export default HomePage;
