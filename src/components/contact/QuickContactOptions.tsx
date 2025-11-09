"use client";

import { motion } from "motion/react";

import { QUICK_CONTACT_OPTIONS } from "@/constants";

export const QuickContactOptions = () => {
  return (
    <section
      className="py-16 bg-white relative -mt-16 z-10"
      aria-label="Quick contact options"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {QUICK_CONTACT_OPTIONS.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.a
                key={option.title}
                href={option.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-[var(--ivory)]"
                aria-label={`${option.title}: ${option.description}`}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-[var(--midnight-blue)] mb-2">
                  {option.title}
                </h3>
                <p className="text-[var(--dusty-blue)] mb-4 text-sm leading-relaxed">
                  {option.description}
                </p>
                <p className="text-[var(--midnight-blue)]">{option.action}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
