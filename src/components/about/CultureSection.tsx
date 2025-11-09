"use client";

import { motion } from "motion/react";

import { COMPANY_CULTURE } from "@/constants";

export const CultureSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-[var(--midnight-blue)] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Our Culture
          </h2>
          <p className="text-[var(--dusty-blue)] text-lg">
            What it&apos;s like to be part of the Propello family
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {COMPANY_CULTURE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--dusty-blue)] rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="text-5xl mb-3">{item.emoji}</div>
              <div className="text-white font-semibold">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
