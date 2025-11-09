"use client";

import { motion } from "motion/react";

export const AboutHero = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[var(--deep-navy)] via-[var(--midnight-blue)] to-[var(--dusty-blue)]">
      <motion.div
        className="absolute top-0 right-0 w-[700px] h-[700px] bg-[var(--buttercream)] opacity-10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.p
            className="text-[var(--buttercream)] uppercase tracking-wider text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Propello
          </motion.p>

          <h1
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: "1.1",
            }}
          >
            Empowering Creators & Companies
            <br />
            <span className="bg-gradient-to-r from-[var(--buttercream)] to-[var(--ivory)] bg-clip-text text-transparent">
              Through Intelligent Automation
            </span>
          </h1>

          <p className="text-[var(--ivory)] text-xl leading-relaxed max-w-3xl mx-auto">
            We&apos;re on a mission to make world-class technology accessible to
            every business, transforming how companies build, design, and
            automate their way to success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

