"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { TrendingUp, Clock, Users, Award } from 'lucide-react';

import { ProjectGrid } from '@/components/ProjectGrid';
import { TechStackScroll } from '@/components/TechStackScroll';

const PortfolioPage = () => {
  const caseStudies = [
    {
      title: 'E-Commerce Automation',
      company: 'RetailTech Inc.',
      challenge: 'Manual order processing taking 20+ hours weekly',
      solution: 'AI-powered automation with real-time inventory sync',
      results: [
        { metric: '95%', label: 'Time Saved' },
        { metric: '$50K', label: 'Annual Savings' },
        { metric: '99.9%', label: 'Accuracy Rate' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Healthcare Platform Scale',
      company: 'MediConnect',
      challenge: 'Platform crashing under 10K concurrent users',
      solution: 'Microservices architecture with auto-scaling',
      results: [
        { metric: '100K+', label: 'Active Users' },
        { metric: '0.8s', label: 'Load Time' },
        { metric: '99.99%', label: 'Uptime' }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'UX Redesign Impact',
      company: 'SaaS Platform',
      challenge: 'High bounce rate and low user engagement',
      solution: 'Complete UX overhaul with user research',
      results: [
        { metric: '200%', label: 'Engagement' },
        { metric: '45%', label: 'Conversion Up' },
        { metric: '4.9/5', label: 'Satisfaction' }
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen" id="main-content">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[var(--deep-navy)] via-[var(--midnight-blue)] to-[var(--dusty-blue)]">
        <motion.div
          className="absolute top-0 left-0 w-[700px] h-[700px] bg-[var(--buttercream)] opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.p
              className="text-[var(--buttercream)] uppercase tracking-wider text-sm mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our Work
            </motion.p>
            
            <h1 className="text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1' }}>
              Transforming Ideas Into
              <br />
              <span className="bg-gradient-to-r from-[var(--buttercream)] to-[var(--ivory)] bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>
            
            <p className="text-[var(--ivory)] text-xl leading-relaxed">
              Real projects. Real results. See how we&apos;ve helped businesses scale, automate, and dominate their markets.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16"
          >
            {[
              { icon: Award, value: '100+', label: 'Projects Delivered' },
              { icon: Users, value: '2M+', label: 'Users Impacted' },
              { icon: Clock, value: '10K+', label: 'Hours Saved' },
              { icon: TrendingUp, value: '350%', label: 'Avg ROI' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <stat.icon className="text-[var(--buttercream)]" size={32} />
                </div>
                <div className="text-white text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-[var(--ivory)] text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
              Featured Projects
            </p>
            <h2 className="text-[var(--midnight-blue)] mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Our Latest Work
            </h2>
            <p className="text-[var(--dusty-blue)] text-lg max-w-2xl mx-auto">
              Explore our portfolio of cutting-edge solutions across web, mobile, design, and automation
            </p>
          </motion.div>

          <ProjectGrid />
        </div>
      </section>

      {/* Automation Case Studies */}
      <section className="py-24 bg-[var(--ivory)]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
              Success Stories
            </p>
            <h2 className="text-[var(--midnight-blue)] mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Automation Case Studies
            </h2>
            <p className="text-[var(--dusty-blue)] text-lg max-w-2xl mx-auto">
              Real businesses, real impact. See how automation transformed operations.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Info */}
                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-[var(--midnight-blue)] text-2xl font-bold mb-2">
                      {study.title}
                    </h3>
                    <p className="text-[var(--dusty-blue)] font-medium mb-6">
                      {study.company}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-[var(--midnight-blue)] font-semibold mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          Challenge
                        </h4>
                        <p className="text-[var(--dusty-blue)] leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[var(--midnight-blue)] font-semibold mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          Solution
                        </h4>
                        <p className="text-[var(--dusty-blue)] leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className={`bg-gradient-to-br ${study.color} p-8 flex items-center`}>
                    <div className="w-full">
                      <h4 className="text-white font-semibold mb-6 text-lg">
                        Results
                      </h4>
                      <div className="space-y-4">
                        {study.results.map((result, i) => (
                          <div key={i} className="text-center">
                            <div className="text-white text-3xl font-bold mb-1">
                              {result.metric}
                            </div>
                            <div className="text-white/80 text-sm">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-[var(--midnight-blue)] mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Technologies We Master
            </h2>
            <p className="text-[var(--dusty-blue)] text-lg">
              Building with the best tools in the industry
            </p>
          </motion.div>
        </div>
        
        <TechStackScroll />
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--deep-navy)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Ready to Create Your Success Story?
            </h2>
            <p className="text-[var(--ivory)] text-xl mb-10 max-w-2xl mx-auto">
              Let&apos;s build something that transforms your business
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--buttercream)] text-[var(--midnight-blue)] rounded-xl hover:bg-[var(--buttercream)]/90 transition-all hover:shadow-2xl hover:shadow-[var(--buttercream)]/40 hover:-translate-y-1 text-lg font-semibold"
            >
              Let&apos;s Talk
              <Award size={22} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
