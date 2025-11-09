"use client";

import { motion } from "motion/react";

import { ProcessTimeline } from "@/components/ProcessTimeline";
import {
  ServicesHero,
  ServicesGrid,
  DemoCallout,
  ServicesCTA,
} from "@/components/services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen" id="main-content">
      <ServicesHero />
      <ServicesGrid />

      {/* Our Process */}
      <section className="py-24 bg-gradient-to-br from-[var(--ivory)] to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
              How We Work
            </p>
            <h2
              className="text-[var(--midnight-blue)] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Our Process
            </h2>
            <p className="text-[var(--dusty-blue)] text-lg max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results, every time
            </p>
          </motion.div>

          <ProcessTimeline />
        </div>
      </section>

      <DemoCallout />
      <ServicesCTA />
    </div>
  );
};

export default ServicesPage;
