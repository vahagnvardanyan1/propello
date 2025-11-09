"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Code, Smartphone, Palette, Zap, ArrowRight,
  Layout, Database, Cloud, Lock, Cpu, Workflow
} from 'lucide-react';

import { ProcessTimeline } from '@/components/ProcessTimeline';

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      tagline: 'Build. Scale. Dominate.',
      description: 'We craft high-performance web applications that scale with your business. From startups to enterprise, we deliver solutions that drive results.',
      features: [
        { icon: Layout, text: 'Responsive Design', detail: 'Pixel-perfect on every device' },
        { icon: Cloud, text: 'Cloud-Native Architecture', detail: 'Scalable and resilient' },
        { icon: Zap, text: 'Lightning Performance', detail: 'Optimized for speed' },
        { icon: Lock, text: 'Enterprise Security', detail: 'Bank-level protection' }
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Smartphone,
      title: 'Mobile Backend Engineering',
      tagline: 'Power. Performance. Scale.',
      description: 'Robust backend systems that power millions of mobile users. Real-time data, seamless sync, and bulletproof reliability.',
      features: [
        { icon: Database, text: 'Real-Time Data Sync', detail: 'Instant updates everywhere' },
        { icon: Cpu, text: 'Microservices Architecture', detail: 'Modular and maintainable' },
        { icon: Cloud, text: 'Auto-Scaling Infrastructure', detail: 'Handles any load' },
        { icon: Lock, text: 'Advanced Security', detail: 'OAuth 2.0 & JWT' }
      ],
      technologies: ['Node.js', 'GraphQL', 'MongoDB', 'Redis', 'AWS'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      tagline: 'Design. Delight. Convert.',
      description: 'Beautiful interfaces that users love and that drive business metrics. We blend art with science to create experiences that convert.',
      features: [
        { icon: Layout, text: 'User Research', detail: 'Data-driven insights' },
        { icon: Workflow, text: 'Interactive Prototypes', detail: 'Test before build' },
        { icon: Palette, text: 'Design Systems', detail: 'Scalable consistency' },
        { icon: Zap, text: 'Conversion Optimization', detail: 'Maximize ROI' }
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Framer'],
      color: 'from-pink-500 to-pink-700'
    },
    {
      icon: Zap,
      title: 'Business Automation',
      tagline: 'Automate. Accelerate. Grow.',
      description: 'AI-powered automation that eliminates busywork and supercharges your team. Save time, reduce errors, and scale faster.',
      features: [
        { icon: Cpu, text: 'AI Integration', detail: 'GPT-4 & machine learning' },
        { icon: Workflow, text: 'Workflow Automation', detail: 'End-to-end processes' },
        { icon: Zap, text: 'Smart Triggers', detail: 'Event-driven automation' },
        { icon: Cloud, text: 'Integration Hub', detail: '1000+ app connections' }
      ],
      technologies: ['OpenAI API', 'Zapier', 'Make', 'n8n', 'AWS Lambda'],
      color: 'from-yellow-500 to-yellow-700'
    }
  ];

  return (
    <div className="min-h-screen" id="main-content">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[var(--deep-navy)] via-[var(--midnight-blue)] to-[var(--dusty-blue)]">
        {/* Animated Background */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--buttercream)] opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0]
          }}
          transition={{
            duration: 15,
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
              Our Services
            </motion.p>
            
            <h1 className="text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1' }}>
              We Craft Intelligent Systems
              <br />
              <span className="bg-gradient-to-r from-[var(--buttercream)] to-[var(--ivory)] bg-clip-text text-transparent">
                That Automate Business Growth
              </span>
            </h1>
            
            <p className="text-[var(--ivory)] text-xl leading-relaxed max-w-3xl mx-auto">
              From ideation to deployment, we build technology that transforms how businesses operate, compete, and scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="text-white" size={28} />
                    </motion.div>
                    <div>
                      <h2 className="text-[var(--midnight-blue)] text-3xl font-bold">
                        {service.title}
                      </h2>
                      <p className="text-[var(--dusty-blue)] text-sm italic">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-[var(--dusty-blue)] text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-3 items-start"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
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
                    {service.technologies.map((tech, i) => (
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
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    className={`relative h-[400px] rounded-3xl bg-gradient-to-br ${service.color} p-8 overflow-hidden shadow-2xl`}
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
                          ease: "easeInOut"
                        }}
                      >
                        <service.icon className="text-white" size={120} strokeWidth={1} />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-gradient-to-br from-[var(--ivory)] to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
              How We Work
            </p>
            <h2 className="text-[var(--midnight-blue)] mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Our Process
            </h2>
            <p className="text-[var(--dusty-blue)] text-lg max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results, every time
            </p>
          </motion.div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Interactive Demo Callout */}
      <section className="py-24 bg-gradient-to-br from-[var(--midnight-blue)] via-[var(--deep-navy)] to-[var(--midnight-blue)]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--buttercream)] to-[var(--ivory)] flex items-center justify-center shadow-xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap className="text-[var(--midnight-blue)]" size={40} />
            </motion.div>

            <h2 className="text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              See Automation in Action
            </h2>
            
            <p className="text-[var(--ivory)] text-lg mb-8 leading-relaxed">
              Watch how we integrate AI-powered workflows that save 40+ hours per week and increase productivity by 300%
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--buttercream)] text-[var(--midnight-blue)] rounded-xl hover:bg-[var(--buttercream)]/90 transition-all hover:shadow-2xl hover:shadow-[var(--buttercream)]/40 hover:-translate-y-1 text-lg font-semibold group"
            >
              View Live Demo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--midnight-blue)] mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Ready to Start Your Project?
            </h2>
            <p className="text-[var(--dusty-blue)] text-xl mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with world-class technology and design
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--midnight-blue)] to-[var(--dusty-blue)] text-white rounded-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-lg font-semibold group"
            >
              Contact Us Today
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
