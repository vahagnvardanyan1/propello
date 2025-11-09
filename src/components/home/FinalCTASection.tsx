"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

export const FinalCTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-[var(--ivory)] via-white to-[var(--buttercream)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--midnight-blue)] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--dusty-blue)] opacity-5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <ScrollReveal direction="up">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-[var(--midnight-blue)] mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: "1.1",
              }}
            >
              Let&apos;s Build Something Extraordinary
            </h2>
            <p className="text-[var(--dusty-blue)] text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the visionaries who chose Propello to accelerate their
              digital transformation and automate their path to success
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              whileHover={{ scale: 1.02 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--midnight-blue)] to-[var(--dusty-blue)] text-white rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-[var(--midnight-blue)]/30 hover:-translate-y-2 text-lg font-semibold"
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight
                  className="relative z-10 group-hover:translate-x-2 transition-transform duration-300"
                  size={22}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 px-8 py-5 text-[var(--midnight-blue)] hover:text-[var(--dusty-blue)] font-semibold transition-all text-lg link-underline"
              >
                <span>View Our Portfolio</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
