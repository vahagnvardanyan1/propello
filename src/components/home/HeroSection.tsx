"use client";

import { useRef } from "react";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { HOME_METRICS } from "@/constants";

export const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--deep-navy)] via-[var(--midnight-blue)] to-[var(--dusty-blue)]"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-[var(--buttercream)] opacity-10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--dusty-blue)] opacity-20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        style={{ y, opacity }}
      >
        {/* Brand Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8"
        >
          <Zap className="text-[var(--buttercream)]" size={16} />
          <span className="text-white/90 font-medium text-sm sm:text-base">
            We Build. We Design. We Automate.
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white mb-4 sm:mb-6 px-2"
          style={{
            fontSize: "clamp(2rem, 8vw, 5rem)",
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
          }}
        >
          Accelerate Innovation.
          <br />
          <span className="bg-gradient-to-r from-[var(--buttercream)] to-[var(--ivory)] bg-clip-text text-transparent">
            Automate Success.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[var(--ivory)] text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
        >
          We design, develop, and automate digital ecosystems that scale
          businesses through intelligent technology.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[var(--buttercream)] text-[var(--midnight-blue)] rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-[var(--buttercream)]/40 hover:-translate-y-2 text-base sm:text-lg font-semibold w-full sm:w-auto touch-target-large active:scale-[0.98]"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight
              className="relative z-10 group-hover:translate-x-2 transition-transform duration-300"
              size={18}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </Link>

          <Link
            href="/portfolio"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 glass-light backdrop-blur-md text-white border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all hover:border-[var(--buttercream)] hover:shadow-xl hover:-translate-y-1 text-base sm:text-lg font-semibold w-full sm:w-auto touch-target-large active:scale-[0.98]"
          >
            <span>See Our Work</span>
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Link>
        </motion.div>

        {/* Floating Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-12 sm:mt-20 px-2"
        >
          {HOME_METRICS.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-[var(--buttercream)] text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                <AnimatedCounter end={metric.end} suffix={metric.suffix} />
              </div>
              <div className="text-white/70 text-xs sm:text-sm md:text-base">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
