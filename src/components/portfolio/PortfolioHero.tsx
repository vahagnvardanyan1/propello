"use client";

import { motion } from "motion/react";

import { PORTFOLIO_STATS } from "@/constants";

export const PortfolioHero = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[var(--deep-navy)] via-[var(--midnight-blue)] to-[var(--dusty-blue)]">
      <motion.div
        className="absolute top-0 left-0 w-[700px] h-[700px] bg-[var(--buttercream)] opacity-10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
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
            Our Work
          </motion.p>

          <h1
            className="text-white mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: "1.1",
            }}
          >
            Transforming Ideas Into
            <br />
            <span className="bg-gradient-to-r from-[var(--buttercream)] to-[var(--ivory)] bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>

          <p className="text-[var(--ivory)] text-xl leading-relaxed">
            Real projects. Real results. See how we&apos;ve helped businesses
            scale, automate, and dominate their markets.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16"
        >
          {PORTFOLIO_STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <stat.icon className="text-[var(--buttercream)]" size={32} />
              </div>
              <div className="text-white text-3xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-[var(--ivory)] text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
