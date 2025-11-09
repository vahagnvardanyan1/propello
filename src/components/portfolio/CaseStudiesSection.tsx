"use client";

import { motion } from "motion/react";

import { CASE_STUDIES } from "@/constants";

export const CaseStudiesSection = () => {
  return (
    <section className="py-24 bg-[var(--ivory)]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
            Success Stories
          </p>
          <h2
            className="text-[var(--midnight-blue)] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Automation Case Studies
          </h2>
          <p className="text-[var(--dusty-blue)] text-lg max-w-2xl mx-auto">
            Real businesses, real impact. See how automation transformed
            operations.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Info */}
                <div className="lg:col-span-2 p-8">
                  <h3 className="text-[var(--midnight-blue)] text-2xl font-bold mb-2">
                    {study.title}
                  </h3>
                  <p className="text-[var(--dusty-blue)] font-medium mb-6">
                    {study.company}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[var(--midnight-blue)] font-semibold mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        Challenge
                      </h4>
                      <p className="text-[var(--dusty-blue)] leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[var(--midnight-blue)] font-semibold mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        Solution
                      </h4>
                      <p className="text-[var(--dusty-blue)] leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div
                  className={`bg-gradient-to-br ${study.color} p-8 flex items-center`}
                >
                  <div className="w-full">
                    <h4 className="text-white font-semibold mb-6 text-lg">
                      Results
                    </h4>
                    <div className="space-y-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <div className="text-white text-3xl font-bold mb-1">
                            {result.metric}
                          </div>
                          <div className="text-white/80 text-sm">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
