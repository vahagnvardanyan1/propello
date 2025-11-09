"use client";

import { useState } from 'react';

import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with real-time inventory and AI recommendations.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    metrics: { users: '50K+', conversion: '+127%', time: '6 weeks' },
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'Mobile Backend',
    description: 'HIPAA-compliant telemedicine platform serving 100K+ patients.',
    tags: ['GraphQL', 'MongoDB', 'AWS'],
    metrics: { users: '100K+', uptime: '99.9%', time: '8 weeks' },
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 3,
    title: 'SaaS Dashboard Redesign',
    category: 'UI/UX Design',
    description: 'Complete UX overhaul that increased user engagement by 200%.',
    tags: ['Figma', 'Design System', 'User Research'],
    metrics: { engagement: '+200%', satisfaction: '4.9/5', time: '4 weeks' },
    color: 'from-pink-500 to-red-500'
  },
  {
    id: 4,
    title: 'Marketing Automation Hub',
    category: 'Business Automation',
    description: 'AI-powered automation saving 40+ hours/week in manual tasks.',
    tags: ['OpenAI', 'Zapier', 'Python'],
    metrics: { saved: '40hrs/wk', roi: '400%', time: '3 weeks' },
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    category: 'Web Development',
    description: 'Property listing platform with virtual tours and AI matching.',
    tags: ['Next.js', 'AWS', 'Redis'],
    metrics: { listings: '10K+', speed: '0.8s', time: '7 weeks' },
    color: 'from-indigo-500 to-blue-500'
  },
  {
    id: 6,
    title: 'Fitness Tracking API',
    category: 'Mobile Backend',
    description: 'Real-time data sync for 500K+ active fitness enthusiasts.',
    tags: ['Node.js', 'WebSocket', 'Docker'],
    metrics: { users: '500K+', latency: '< 50ms', time: '6 weeks' },
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 7,
    title: 'Banking App UI',
    category: 'UI/UX Design',
    description: 'Award-winning fintech interface with accessibility at its core.',
    tags: ['Figma', 'WCAG AAA', 'Animation'],
    metrics: { award: 'Gold', accessibility: 'AAA', time: '5 weeks' },
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 8,
    title: 'CRM Integration Suite',
    category: 'Business Automation',
    description: 'Unified workflow connecting 15+ business tools seamlessly.',
    tags: ['Make', 'Webhooks', 'API'],
    metrics: { tools: '15+', efficiency: '+250%', time: '4 weeks' },
    color: 'from-orange-500 to-red-500'
  }
];

export const ProjectGrid = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Development', 'Mobile Backend', 'UI/UX Design', 'Business Automation'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              filter === category
                ? 'bg-gradient-to-r from-[var(--midnight-blue)] to-[var(--dusty-blue)] text-white shadow-lg'
                : 'bg-white text-[var(--dusty-blue)] border-2 border-[var(--dusty-blue)]/20 hover:border-[var(--dusty-blue)]/40'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-[var(--dusty-blue)]/10"
          >
            {/* Gradient Header */}
            <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
              <motion.div
                className="absolute inset-0 bg-black/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <ExternalLink className="text-white" size={28} />
                </motion.div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-[var(--midnight-blue)] text-xl font-bold mb-2">
                {project.title}
              </h3>
              
              <p className="text-[var(--dusty-blue)] mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[var(--ivory)] text-[var(--midnight-blue)] text-xs rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[var(--dusty-blue)]/10">
                {Object.entries(project.metrics).map(([key, value], i) => (
                  <div key={i} className="text-center">
                    <div className="text-[var(--midnight-blue)] font-bold text-sm">
                      {value}
                    </div>
                    <div className="text-[var(--dusty-blue)] text-xs capitalize">
                      {key}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[var(--midnight-blue)] to-[var(--dusty-blue)] text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Case Study
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

