"use client";

import { motion } from "motion/react";

import { COMPANY_VALUES } from "@/constants";

export const ValuesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
            What Drives Us
          </p>
          <h2
            className="text-[var(--midnight-blue)]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Our Core Values
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {COMPANY_VALUES.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--dusty-blue)] flex items-center justify-center shadow-xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <value.icon className="text-white" size={36} />
              </motion.div>

              <h3 className="text-[var(--midnight-blue)] font-bold text-xl mb-3">
                {value.title}
              </h3>

              <p className="text-[var(--dusty-blue)] leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
