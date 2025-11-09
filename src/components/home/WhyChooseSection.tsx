"use client";

import { motion } from "motion/react";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import { WHY_CHOOSE_PROPELLO } from "@/constants";

export const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[var(--ivory)] to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--buttercream)] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--midnight-blue)] opacity-5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3 font-semibold">
            The Propello Advantage
          </p>
          <h2
            className="text-[var(--midnight-blue)] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Why Choose Propello?
          </h2>
          <p className="text-[var(--dusty-blue)] text-lg max-w-2xl mx-auto">
            We combine technical excellence with business intelligence to
            deliver measurable results
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {WHY_CHOOSE_PROPELLO.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="text-center group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--dusty-blue)] flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-shadow"
                  whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <item.icon className="text-white" size={36} />
                </motion.div>

                <h3 className="text-[var(--midnight-blue)] font-semibold text-lg mb-3 group-hover:text-[var(--dusty-blue)] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[var(--dusty-blue)] leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
