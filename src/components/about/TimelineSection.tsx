"use client";

import { motion } from "motion/react";

import { MILESTONES } from "@/constants";

export const TimelineSection = () => {
  return (
    <section className="py-24 bg-[var(--ivory)]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
            Our Journey
          </p>
          <h2
            className="text-[var(--midnight-blue)]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Building the Future, One Milestone at a Time
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--midnight-blue)] via-[var(--dusty-blue)] to-[var(--buttercream)] -translate-x-1/2 hidden lg:block" />

          <div className="space-y-16">
            {MILESTONES.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                >
                  <motion.div
                    className="inline-block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-[var(--buttercream)] font-bold text-2xl mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-[var(--midnight-blue)] font-bold text-xl mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-[var(--dusty-blue)] leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block relative">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-[var(--midnight-blue)] border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.5 }}
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
