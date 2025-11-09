"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";

export const ContactHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="pt-12 pb-32 bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--deep-navy)] relative overflow-hidden"
      aria-labelledby="contact-hero-title"
    >
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <motion.div
          className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-[var(--buttercream)] rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.5, 1],
            x: [-50, 50, -50],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 rounded-full glass border border-white/20"
          >
            <span className="text-[var(--buttercream)]">Get in Touch</span>
          </motion.div>

          <h1
            id="contact-hero-title"
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s Talk About Your{" "}
            <span className="text-[var(--buttercream)]">Next Breakthrough</span>
          </h1>
          <p className="text-[var(--ivory)] text-xl leading-relaxed max-w-3xl mx-auto">
            From code to automation — let&apos;s build efficiency together. Ready
            to transform your vision into reality?
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

