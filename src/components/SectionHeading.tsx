"use client";

import type { ReactNode } from "react";

import { motion } from "motion/react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  align?: "left" | "center" | "right";
  dark?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  maxWidth = "lg",
}: SectionHeadingProps) => {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  const maxWidthClass = {
    sm: "max-w-2xl",
    md: "max-w-3xl",
    lg: "max-w-4xl",
    xl: "max-w-5xl",
    full: "max-w-full",
  }[maxWidth];

  const containerClass = align === "center" ? "mx-auto" : "";

  const eyebrowColor = dark
    ? "text-[var(--buttercream)]"
    : "text-[var(--dusty-blue)]";
  const titleColor = dark ? "text-white" : "text-[var(--midnight-blue)]";
  const descriptionColor = dark
    ? "text-[var(--ivory)]"
    : "text-[var(--dusty-blue)]";

  return (
    <div className={`${alignClass} ${maxWidthClass} ${containerClass}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`${eyebrowColor} mb-4 uppercase tracking-wider text-sm font-medium`}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`${titleColor} mb-4`}
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          lineHeight: "var(--leading-tight)",
        }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`${descriptionColor} text-lg leading-relaxed prose max-w-full`}
        >
          {typeof description === "string" ? <p>{description}</p> : description}
        </motion.div>
      )}
    </div>
  );
};
