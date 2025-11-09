"use client";

import { motion } from "motion/react";
import { Search, Palette, Code, Zap, TrendingUp } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We dive deep into your business needs, goals, and challenges to create a comprehensive strategy.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Our designers craft intuitive, beautiful interfaces that users love and that align with your brand.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Code,
    title: "Build",
    description:
      "Expert engineers transform designs into robust, scalable applications using cutting-edge technology.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Zap,
    title: "Automate",
    description:
      "We integrate intelligent automation and AI to streamline workflows and boost productivity.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description:
      "Continuous monitoring, refinement, and scaling to ensure peak performance and growth.",
    color: "from-red-400 to-red-600",
  },
];

export const ProcessTimeline = () => {
  return (
    <div className="relative">
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[var(--midnight-blue)] via-[var(--dusty-blue)] to-[var(--buttercream)] opacity-20" />

          <div className="grid grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="relative"
              >
                {/* Icon Circle */}
                <motion.div
                  className="relative mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--deep-navy)] flex items-center justify-center shadow-xl mb-6 border-4 border-white"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(209, 207, 201, 0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon className="text-[var(--buttercream)]" size={36} />

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--buttercream)] text-[var(--midnight-blue)] flex items-center justify-center font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-[var(--midnight-blue)] font-semibold mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-[var(--dusty-blue)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            className="flex gap-6 items-start"
          >
            {/* Icon and Line */}
            <div className="relative flex-shrink-0">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--deep-navy)] flex items-center justify-center shadow-lg border-4 border-white relative"
                whileHover={{ scale: 1.1 }}
              >
                <step.icon className="text-[var(--buttercream)]" size={28} />
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[var(--buttercream)] text-[var(--midnight-blue)] flex items-center justify-center font-bold text-xs">
                  {index + 1}
                </div>
              </motion.div>

              {/* Connecting Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-[var(--dusty-blue)] to-transparent" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-2">
              <h3 className="text-[var(--midnight-blue)] font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-[var(--dusty-blue)] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
