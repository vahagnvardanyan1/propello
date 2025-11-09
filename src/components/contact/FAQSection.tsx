"use client";

import { useState } from "react";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { FAQ_ITEMS } from "@/constants";

export const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white" aria-labelledby="faq-title">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and process."
        />

        <div className="max-w-3xl mx-auto mt-16 space-y-4">
          {FAQ_ITEMS.map((faq, index) => {
            const isExpanded = expandedFaq === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-[var(--ivory)]/30 rounded-xl border border-[var(--ivory)] overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : index)}
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/50 transition-colors focus-visible:ring-2 focus-visible:ring-[var(--midnight-blue)] focus-visible:ring-inset"
                >
                  <span className="text-[var(--midnight-blue)] pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className="text-[var(--dusty-blue)]"
                      size={20}
                    />
                  </motion.div>
                </button>

                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-[var(--dusty-blue)] leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

