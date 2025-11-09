"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Zap, ArrowRight } from "lucide-react";

export const DemoCallout = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[var(--midnight-blue)] via-[var(--deep-navy)] to-[var(--midnight-blue)]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--buttercream)] to-[var(--ivory)] flex items-center justify-center shadow-xl"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Zap className="text-[var(--midnight-blue)]" size={40} />
          </motion.div>

          <h2
            className="text-white mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            See Automation in Action
          </h2>

          <p className="text-[var(--ivory)] text-lg mb-8 leading-relaxed">
            Watch how we integrate AI-powered workflows that save 40+ hours per
            week and increase productivity by 300%
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--buttercream)] text-[var(--midnight-blue)] rounded-xl hover:bg-[var(--buttercream)]/90 transition-all hover:shadow-2xl hover:shadow-[var(--buttercream)]/40 hover:-translate-y-1 text-lg font-semibold group"
          >
            View Live Demo
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

