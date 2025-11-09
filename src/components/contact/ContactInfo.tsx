"use client";

import { motion } from "motion/react";

import { SectionHeading } from "@/components/SectionHeading";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/constants";

export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <SectionHeading
        eyebrow="Contact Information"
        title="Ready to Get Started?"
        description="Fill out the form or reach out directly. We're here to help you succeed."
        align="left"
      />

      <div className="space-y-6 mt-12">
        {CONTACT_INFO.map((info, index) => {
          const Icon = info.icon;
          return (
            <motion.a
              key={info.label}
              href={info.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-all group"
              aria-label={`${info.label}: ${info.value}`}
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--midnight-blue)]/5 flex items-center justify-center group-hover:bg-[var(--midnight-blue)] transition-colors">
                <Icon
                  className="text-[var(--midnight-blue)] group-hover:text-white transition-colors"
                  size={20}
                />
              </div>
              <div>
                <p className="text-[var(--dusty-blue)] text-sm mb-1">
                  {info.label}
                </p>
                <p className="text-[var(--midnight-blue)]">{info.value}</p>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <p className="text-[var(--dusty-blue)] mb-4">
          Follow us on social media
        </p>
        <div className="flex gap-3">
          {SOCIAL_LINKS.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`w-12 h-12 rounded-lg bg-[var(--midnight-blue)] text-white flex items-center justify-center transition-all ${social.color}`}
                aria-label={`Follow us on ${social.label}`}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

