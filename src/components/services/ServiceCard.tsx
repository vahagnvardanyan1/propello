"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: Array<{
    icon: LucideIcon;
    text: string;
    detail: string;
  }>;
  technologies: readonly string[];
  color: string;
  index: number;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  tagline,
  description,
  features,
  technologies,
  color,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        index % 2 === 1 ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Content */}
      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
        <div className="inline-flex items-center gap-3 mb-6">
          <motion.div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="text-white" size={28} />
          </motion.div>
          <div>
            <h2 className="text-[var(--midnight-blue)] text-3xl font-bold">
              {title}
            </h2>
            <p className="text-[var(--dusty-blue)] text-sm italic">{tagline}</p>
          </div>
        </div>

        <p className="text-[var(--dusty-blue)] text-lg mb-8 leading-relaxed">
          {description}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-3 items-start"
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}
              >
                <feature.icon className="text-white" size={18} />
              </div>
              <div>
                <h4 className="text-[var(--midnight-blue)] font-semibold text-sm mb-1">
                  {feature.text}
                </h4>
                <p className="text-[var(--dusty-blue)] text-xs">
                  {feature.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-[var(--ivory)] text-[var(--midnight-blue)] rounded-lg text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
        <motion.div
          className={`relative h-[400px] rounded-3xl bg-gradient-to-br ${color} p-8 overflow-hidden shadow-2xl`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white rounded-lg rotate-45" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="text-white" size={120} strokeWidth={1} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
