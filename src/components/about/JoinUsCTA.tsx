"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Users, Code } from "lucide-react";

export const JoinUsCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--deep-navy)]">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[var(--buttercream)] flex items-center justify-center">
            <Users className="text-[var(--midnight-blue)]" size={36} />
          </div>

          <h2
            className="text-white mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Join Propello — Let&apos;s Build the Future Together
          </h2>
          <p className="text-[var(--ivory)] text-xl mb-10 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who share our
            passion for innovation
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--buttercream)] text-[var(--midnight-blue)] rounded-xl hover:bg-[var(--buttercream)]/90 transition-all hover:shadow-2xl hover:shadow-[var(--buttercream)]/40 hover:-translate-y-1 text-lg font-semibold"
          >
            Get in Touch
            <Code size={22} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

