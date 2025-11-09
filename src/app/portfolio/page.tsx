"use client";

import { motion } from "motion/react";

import { ProjectGrid } from "@/components/ProjectGrid";
import { TechStackScroll } from "@/components/TechStackScroll";
import {
  PortfolioHero,
  CaseStudiesSection,
  PortfolioCTA,
} from "@/components/portfolio";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen" id="main-content">
      <PortfolioHero />

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
              Featured Projects
            </p>
            <h2
              className="text-[var(--midnight-blue)] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Our Latest Work
            </h2>
            <p className="text-[var(--dusty-blue)] text-lg max-w-2xl mx-auto">
              Explore our portfolio of cutting-edge solutions across web,
              mobile, design, and automation
            </p>
          </motion.div>

          <ProjectGrid />
        </div>
      </section>

      <CaseStudiesSection />

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              className="text-[var(--midnight-blue)] mb-3"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Technologies We Master
            </h2>
            <p className="text-[var(--dusty-blue)] text-lg">
              Building with the best tools in the industry
            </p>
          </motion.div>
        </div>

        <TechStackScroll />
      </section>

      <PortfolioCTA />
    </div>
  );
};

export default PortfolioPage;
