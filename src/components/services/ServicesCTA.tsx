"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const ServicesCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-[var(--midnight-blue)] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-[var(--dusty-blue)] text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help bring your vision to life with
            world-class technology and design
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--midnight-blue)] to-[var(--dusty-blue)] text-white rounded-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg font-semibold group"
          >
            Contact Us Today
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={22}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
