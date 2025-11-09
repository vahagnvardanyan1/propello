"use client";

import { useRef } from 'react';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Code, Smartphone, Palette, Zap, Gauge, Shield, Award } from 'lucide-react';

import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const HomePage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Scalable, performant web applications built with cutting-edge technology and best practices.',
      features: ['React & Next.js', 'Cloud-Native', 'API Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile Backend',
      description: 'Robust, secure backend systems that power mobile experiences at any scale.',
      features: ['RESTful APIs', 'Real-time Data', 'Microservices']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love and that drive business results.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: Zap,
      title: 'Business Automation',
      description: 'AI-powered workflows that eliminate manual tasks and accelerate growth.',
      features: ['AI Integration', 'Workflow Automation', 'Process Optimization']
    }
  ];

  const whyChoose = [
    {
      icon: Gauge,
      title: 'Lightning Speed',
      description: 'Rapid development and deployment without compromising quality.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Enterprise-grade solutions with meticulous attention to detail.'
    },
    {
      icon: Shield,
      title: 'Rock-Solid Reliability',
      description: '99.9% uptime with proactive monitoring and support.'
    },
    {
      icon: Zap,
      title: 'Automation First',
      description: 'Every solution is optimized for efficiency and scalability.'
    }
  ];

  return (
    <div className="min-h-screen" id="main-content">
      {/* Hero Section with Animated Gradient */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--deep-navy)] via-[var(--midnight-blue)] to-[var(--dusty-blue)]"
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-[var(--buttercream)] opacity-10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--dusty-blue)] opacity-20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
          style={{ y, opacity }}
        >
          {/* Brand Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8"
          >
            <Zap className="text-[var(--buttercream)]" size={16} />
            <span className="text-white/90 font-medium text-sm sm:text-base">
              We Build. We Design. We Automate.
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white mb-4 sm:mb-6 px-2"
            style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
          >
            Accelerate Innovation.
            <br />
            <span className="bg-gradient-to-r from-[var(--buttercream)] to-[var(--ivory)] bg-clip-text text-transparent">
              Automate Success.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[var(--ivory)] text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            We design, develop, and automate digital ecosystems that scale businesses through intelligent technology.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[var(--buttercream)] text-[var(--midnight-blue)] rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-[var(--buttercream)]/40 hover:-translate-y-2 text-base sm:text-lg font-semibold w-full sm:w-auto touch-target-large active:scale-[0.98]"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" size={18} />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </Link>
            
            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 glass-light backdrop-blur-md text-white border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all hover:border-[var(--buttercream)] hover:shadow-xl hover:-translate-y-1 text-base sm:text-lg font-semibold w-full sm:w-auto touch-target-large active:scale-[0.98]"
            >
              <span>See Our Work</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>

          {/* Floating Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-12 sm:mt-20 px-2"
          >
            <div className="text-center">
              <div className="text-[var(--buttercream)] text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="text-white/70 text-xs sm:text-sm md:text-base">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-[var(--buttercream)] text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <div className="text-white/70 text-xs sm:text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-[var(--buttercream)] text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-white/70 text-xs sm:text-sm md:text-base">Client Retention</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
              Our Expertise
            </p>
            <h2 className="text-[var(--midnight-blue)] mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Core Services
            </h2>
            <p className="text-[var(--dusty-blue)] text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to transform your business through technology
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -12, scale: 1.03 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="group h-full bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--deep-navy)] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden"
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--buttercream)] to-[var(--ivory)] flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="text-[var(--midnight-blue)]" size={32} />
                  </motion.div>

                  <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-[var(--buttercream)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-[var(--ivory)] mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5">
                    {service.features.map((feature, i) => (
                      <li 
                        key={i} 
                        className="flex items-center gap-2 text-[var(--buttercream)] text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--buttercream)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal direction="up" delay={0.2} className="text-center mt-16">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--midnight-blue)] text-white rounded-xl hover:bg-[var(--dusty-blue)] transition-all hover:shadow-xl hover:-translate-y-1 font-semibold"
            >
              <span>Explore All Services</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Propello */}
      <section className="py-24 bg-gradient-to-br from-[var(--ivory)] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--buttercream)] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--midnight-blue)] opacity-5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal direction="up" className="text-center mb-16">
            <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3 font-semibold">
              The Propello Advantage
            </p>
            <h2 className="text-[var(--midnight-blue)] mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Why Choose Propello?
            </h2>
            <p className="text-[var(--dusty-blue)] text-lg max-w-2xl mx-auto">
              We combine technical excellence with business intelligence to deliver measurable results
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChoose.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="text-center group cursor-pointer"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--dusty-blue)] flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-shadow"
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="text-white" size={36} />
                  </motion.div>
                  
                  <h3 className="text-[var(--midnight-blue)] font-semibold text-lg mb-3 group-hover:text-[var(--dusty-blue)] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-[var(--dusty-blue)] leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-[var(--ivory)] via-white to-[var(--buttercream)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--midnight-blue)] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--dusty-blue)] opacity-5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-[var(--midnight-blue)] mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>
                Let's Build Something Extraordinary
              </h2>
              <p className="text-[var(--dusty-blue)] text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                Join the visionaries who chose Propello to accelerate their digital transformation and automate their path to success
              </p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                whileHover={{ scale: 1.02 }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--midnight-blue)] to-[var(--dusty-blue)] text-white rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-[var(--midnight-blue)]/30 hover:-translate-y-2 text-lg font-semibold"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" size={22} />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                  />
                </Link>
                
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 px-8 py-5 text-[var(--midnight-blue)] hover:text-[var(--dusty-blue)] font-semibold transition-all text-lg link-underline"
                >
                  <span>View Our Portfolio</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
