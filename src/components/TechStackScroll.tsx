"use client";

import { useState } from 'react';

import { motion } from 'motion/react';
import { Code2, Database, Cloud, Palette, Cpu, Zap } from 'lucide-react';

const technologies = [
  { 
    name: 'React', 
    category: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    description: 'Component-based UI'
  },
  { 
    name: 'Node.js', 
    category: 'Backend',
    icon: Cpu,
    color: 'from-green-500 to-emerald-500',
    description: 'High-performance runtime'
  },
  { 
    name: 'TypeScript', 
    category: 'Language',
    icon: Code2,
    color: 'from-blue-600 to-blue-400',
    description: 'Type-safe development'
  },
  { 
    name: 'AWS', 
    category: 'Cloud',
    icon: Cloud,
    color: 'from-orange-500 to-amber-500',
    description: 'Scalable infrastructure'
  },
  { 
    name: 'OpenAI API', 
    category: 'AI',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    description: 'AI-powered features'
  },
  { 
    name: 'Zapier', 
    category: 'Automation',
    icon: Zap,
    color: 'from-orange-600 to-red-500',
    description: 'Workflow automation'
  },
  { 
    name: 'Next.js', 
    category: 'Framework',
    icon: Code2,
    color: 'from-gray-700 to-gray-900',
    description: 'Full-stack React'
  },
  { 
    name: 'PostgreSQL', 
    category: 'Database',
    icon: Database,
    color: 'from-blue-700 to-indigo-600',
    description: 'Reliable data storage'
  },
  { 
    name: 'Docker', 
    category: 'DevOps',
    icon: Cloud,
    color: 'from-blue-500 to-sky-400',
    description: 'Containerization'
  },
  { 
    name: 'Figma', 
    category: 'Design',
    icon: Palette,
    color: 'from-pink-500 to-purple-500',
    description: 'Design collaboration'
  },
  { 
    name: 'TailwindCSS', 
    category: 'Styling',
    icon: Palette,
    color: 'from-cyan-500 to-blue-500',
    description: 'Utility-first CSS'
  },
  { 
    name: 'MongoDB', 
    category: 'Database',
    icon: Database,
    color: 'from-green-600 to-green-400',
    description: 'NoSQL database'
  }
];

interface TechCardProps {
  tech: typeof technologies[0];
  index: number;
}

const TechCard = ({ tech, index }: TechCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = tech.icon;

  return (
    <motion.div
      className="flex-shrink-0 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Glow Effect on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, var(--buttercream), var(--ivory))`
        }}
      />

      {/* Card */}
      <div className="relative bg-white border-2 border-[var(--dusty-blue)]/10 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 w-[240px] sm:w-[280px] overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            {/* Icon Container */}
            <motion.div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg`}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="text-white" size={20} />
            </motion.div>

            {/* Category Badge */}
            <motion.span
              className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold bg-[var(--ivory)] text-[var(--dusty-blue)] border border-[var(--dusty-blue)]/10 whitespace-nowrap"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
            >
              {tech.category}
            </motion.span>
          </div>

          {/* Technology Name */}
          <h3 className="text-[var(--midnight-blue)] mb-2 text-lg sm:text-xl">
            {tech.name}
          </h3>

          {/* Description */}
          <motion.p
            className="text-[var(--dusty-blue)] text-sm leading-relaxed"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            {tech.description}
          </motion.p>

          {/* Bottom Accent Line */}
          <motion.div
            className={`h-1 rounded-full bg-gradient-to-r ${tech.color} mt-3 sm:mt-4`}
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export const TechStackScroll = () => {
  return (
    <div className="relative overflow-hidden py-8 sm:py-12 bg-gradient-to-br from-white via-[var(--ivory)]/20 to-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[var(--buttercream)] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--dusty-blue)] opacity-5 rounded-full blur-3xl" />

      {/* Gradient Overlays for Smooth Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      
      <div className="relative space-y-6 sm:space-y-8">
        {/* First Row - Scrolling Left */}
        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{
            x: [0, -2200]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear"
            }
          }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <TechCard key={`tech-1-${index}`} tech={tech} index={index} />
          ))}
        </motion.div>

        {/* Second Row - Scrolling Right */}
        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{
            x: [-2200, 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear"
            }
          }}
        >
          {[...technologies, ...technologies, ...technologies].reverse().map((tech, index) => (
            <TechCard key={`tech-2-${index}`} tech={tech} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};
