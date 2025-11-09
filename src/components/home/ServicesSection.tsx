"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import { SERVICES } from "@/constants";

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-16">
          <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
            Our Expertise
          </p>
          <h2
            className="text-[var(--midnight-blue)] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Core Services
          </h2>
          <p className="text-[var(--dusty-blue)] text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed to transform your business through
            technology
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="group h-full bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--deep-navy)] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden"
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--buttercream)] to-[var(--ivory)] flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon
                    className="text-[var(--midnight-blue)]"
                    size={32}
                  />
                </motion.div>

                <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-[var(--buttercream)] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-[var(--ivory)] mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2.5">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-[var(--buttercream)] text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--buttercream)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal direction="up" delay={0.2} className="text-center mt-16">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--midnight-blue)] text-white rounded-xl hover:bg-[var(--dusty-blue)] transition-all hover:shadow-xl hover:-translate-y-1 font-semibold"
          >
            <span>Explore All Services</span>
            <ArrowRight
              className="group-hover:translate-x-2 transition-transform duration-300"
              size={18}
            />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};
