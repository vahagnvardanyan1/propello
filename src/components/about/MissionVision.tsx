"use client";

import { motion } from "motion/react";
import { Target, Rocket } from "lucide-react";

export const MissionVision = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--deep-navy)] rounded-3xl p-10 text-white relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-[var(--buttercream)] opacity-10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[var(--buttercream)] flex items-center justify-center mb-6">
                <Target className="text-[var(--midnight-blue)]" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-[var(--ivory)] text-lg leading-relaxed">
                To democratize enterprise-grade technology by building
                intelligent, automated systems that empower businesses to scale
                faster, work smarter, and achieve more with less.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--buttercream)] to-[var(--ivory)] rounded-3xl p-10 relative overflow-hidden"
          >
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--midnight-blue)] opacity-5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[var(--midnight-blue)] flex items-center justify-center mb-6">
                <Rocket className="text-white" size={32} />
              </div>
              <h2 className="text-[var(--midnight-blue)] text-3xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-[var(--dusty-blue)] text-lg leading-relaxed">
                To be the world&apos;s most trusted partner for businesses
                seeking to harness the power of automation and AI, creating a
                future where technology amplifies human potential.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
