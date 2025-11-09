"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";

export const ContactCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--deep-navy)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[var(--buttercream)] mb-4 uppercase tracking-wider text-sm">
            Ready to Start?
          </p>
          <h2
            className="text-white mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-[var(--ivory)] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join over 50+ companies who trust Propello to deliver exceptional
            digital solutions.
          </p>
          <motion.a
            href="mailto:hello@propello.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-5 bg-[var(--buttercream)] text-[var(--midnight-blue)] rounded-xl transition-all hover:shadow-xl text-lg"
          >
            Email Us Directly
            <Mail size={22} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
