"use client";

import { useRef } from "react";

import Link from "next/link";
import { motion } from "motion/react";
import { Target, Users, Rocket, Code } from "lucide-react";

import { TeamCards } from "@/components/TeamCards";
import { MILESTONES, COMPANY_VALUES, COMPANY_CULTURE } from "@/constants";

const AboutPage = () => {
  const timelineRef = useRef(null);

  return (
    <div className="min-h-screen" id="main-content">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[var(--deep-navy)] via-[var(--midnight-blue)] to-[var(--dusty-blue)]">
        <motion.div
          className="absolute top-0 right-0 w-[700px] h-[700px] bg-[var(--buttercream)] opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
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
              About Propello
            </motion.p>

            <h1
              className="text-white mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: "1.1",
              }}
            >
              Empowering Creators & Companies
              <br />
              <span className="bg-gradient-to-r from-[var(--buttercream)] to-[var(--ivory)] bg-clip-text text-transparent">
                Through Intelligent Automation
              </span>
            </h1>

            <p className="text-[var(--ivory)] text-xl leading-relaxed max-w-3xl mx-auto">
              We&apos;re on a mission to make world-class technology accessible
              to every business, transforming how companies build, design, and
              automate their way to success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--deep-navy)] rounded-3xl p-10 text-white relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-[var(--buttercream)] opacity-10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[var(--buttercream)] flex items-center justify-center mb-6">
                  <Target className="text-[var(--midnight-blue)]" size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-[var(--ivory)] text-lg leading-relaxed">
                  To democratize enterprise-grade technology by building
                  intelligent, automated systems that empower businesses to
                  scale faster, work smarter, and achieve more with less.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[var(--buttercream)] to-[var(--ivory)] rounded-3xl p-10 relative overflow-hidden"
            >
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--midnight-blue)] opacity-5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[var(--midnight-blue)] flex items-center justify-center mb-6">
                  <Rocket className="text-white" size={32} />
                </div>
                <h2 className="text-[var(--midnight-blue)] text-3xl font-bold mb-4">
                  Our Vision
                </h2>
                <p className="text-[var(--dusty-blue)] text-lg leading-relaxed">
                  To be the world&apos;s most trusted partner for businesses
                  seeking to harness the power of automation and AI, creating a
                  future where technology amplifies human potential.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-24 bg-[var(--ivory)]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
              Our Journey
            </p>
            <h2
              className="text-[var(--midnight-blue)]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Building the Future, One Milestone at a Time
            </h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--midnight-blue)] via-[var(--dusty-blue)] to-[var(--buttercream)] -translate-x-1/2 hidden lg:block" />

            <div className="space-y-16">
              {MILESTONES.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                  >
                    <motion.div
                      className="inline-block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-[var(--buttercream)] font-bold text-2xl mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-[var(--midnight-blue)] font-bold text-xl mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-[var(--dusty-blue)] leading-relaxed">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block relative">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-[var(--midnight-blue)] border-4 border-white shadow-lg"
                      whileHover={{ scale: 1.5 }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
              What Drives Us
            </p>
            <h2
              className="text-[var(--midnight-blue)]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {COMPANY_VALUES.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--dusty-blue)] flex items-center justify-center shadow-xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="text-white" size={36} />
                </motion.div>

                <h3 className="text-[var(--midnight-blue)] font-bold text-xl mb-3">
                  {value.title}
                </h3>

                <p className="text-[var(--dusty-blue)] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-[var(--ivory)]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[var(--dusty-blue)] uppercase tracking-wider text-sm mb-3">
              Meet the Team
            </p>
            <h2
              className="text-[var(--midnight-blue)]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Led by Industry Experts
            </h2>
          </motion.div>

          <TeamCards />
        </div>
      </section>

      {/* Culture Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-[var(--midnight-blue)] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Our Culture
            </h2>
            <p className="text-[var(--dusty-blue)] text-lg">
              What it&apos;s like to be part of the Propello family
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {COMPANY_CULTURE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--dusty-blue)] rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <div className="text-white font-semibold">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--deep-navy)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[var(--buttercream)] flex items-center justify-center">
              <Users className="text-[var(--midnight-blue)]" size={36} />
            </div>

            <h2
              className="text-white mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Join Propello — Let&apos;s Build the Future Together
            </h2>
            <p className="text-[var(--ivory)] text-xl mb-10 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our
              passion for innovation
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--buttercream)] text-[var(--midnight-blue)] rounded-xl hover:bg-[var(--buttercream)]/90 transition-all hover:shadow-2xl hover:shadow-[var(--buttercream)]/40 hover:-translate-y-1 text-lg font-semibold"
            >
              Get in Touch
              <Code size={22} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
