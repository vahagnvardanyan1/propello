"use client";

import { useState, useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";
import { Mail, Send, ChevronDown, CheckCircle } from "lucide-react";

import { FormInput } from "@/components/FormInput";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { useContactForm } from "@/hooks";
import {
  QUICK_CONTACT_OPTIONS,
  CONTACT_INFO,
  SOCIAL_LINKS,
  FAQ_ITEMS,
  SERVICE_OPTIONS,
} from "@/constants";

const ContactPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const {
    formData,
    formErrors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        ref={heroRef}
        className="pt-12 pb-32 bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--deep-navy)] relative overflow-hidden"
        aria-labelledby="contact-hero-title"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <motion.div
            className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-[var(--buttercream)] rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.5, 1],
              x: [-50, 50, -50],
              y: [0, -50, 0],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <motion.div
          style={{ opacity }}
          className="container mx-auto px-4 lg:px-8 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 rounded-full glass border border-white/20"
            >
              <span className="text-[var(--buttercream)]">Get in Touch</span>
            </motion.div>

            <h1
              id="contact-hero-title"
              className="text-white mb-6"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Let&apos;s Talk About Your{" "}
              <span className="text-[var(--buttercream)]">
                Next Breakthrough
              </span>
            </h1>
            <p className="text-[var(--ivory)] text-xl leading-relaxed max-w-3xl mx-auto">
              From code to automation — let&apos;s build efficiency together.
              Ready to transform your vision into reality?
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Contact Options */}
      <section
        className="py-16 bg-white relative -mt-16 z-10"
        aria-label="Quick contact options"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUICK_CONTACT_OPTIONS.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.a
                  key={option.title}
                  href={option.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-[var(--ivory)]"
                  aria-label={`${option.title}: ${option.description}`}
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-[var(--midnight-blue)] mb-2">
                    {option.title}
                  </h3>
                  <p className="text-[var(--dusty-blue)] mb-4 text-sm leading-relaxed">
                    {option.description}
                  </p>
                  <p className="text-[var(--midnight-blue)]">{option.action}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section
        className="py-24 bg-gradient-to-br from-white to-[var(--ivory)]/30"
        aria-labelledby="contact-form-title"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
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
                        <p className="text-[var(--midnight-blue)]">
                          {info.value}
                        </p>
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-10"
            >
              <h2
                id="contact-form-title"
                className="text-[var(--midnight-blue)] mb-2"
              >
                Send us a message
              </h2>
              <p className="text-[var(--dusty-blue)] mb-8">
                We&apos;ll respond within 24 hours
              </p>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                  role="alert"
                >
                  <CheckCircle className="text-green-600 mt-0.5" size={20} />
                  <div>
                    <p className="text-green-800">Message sent successfully!</p>
                    <p className="text-green-700 text-sm mt-1">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <FormInput
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={formErrors.name}
                  placeholder="John Doe"
                  required
                  autoComplete="name"
                />

                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={formErrors.email}
                  placeholder="john@example.com"
                  required
                  autoComplete="email"
                />

                <FormInput
                  label="Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Inc. (Optional)"
                  autoComplete="organization"
                />

                <div>
                  <label
                    htmlFor="service-select"
                    className="block mb-2 text-[var(--midnight-blue)] font-medium"
                  >
                    Service Interested In
                    <span className="text-red-500 ml-1" aria-label="required">
                      *
                    </span>
                  </label>
                  <select
                    id="service-select"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    aria-invalid={formErrors.service ? "true" : "false"}
                    aria-describedby={
                      formErrors.service ? "service-error" : undefined
                    }
                    className={`w-full px-4 py-3 bg-white border-2 rounded-xl transition-all duration-200 focus:outline-none text-[16px] min-h-[48px] ${
                      formErrors.service
                        ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-500/20"
                        : "border-[var(--ivory)] hover:border-[var(--dusty-blue)] focus:border-[var(--midnight-blue)] focus:ring-2 focus:ring-[var(--midnight-blue)]/20"
                    }`}
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {formErrors.service && (
                    <motion.p
                      id="service-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-600"
                      role="alert"
                    >
                      {formErrors.service}
                    </motion.p>
                  )}
                </div>

                <FormInput
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={formErrors.message}
                  placeholder="Tell us about your project..."
                  multiline
                  rows={5}
                  required
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  rightIcon={<Send size={20} />}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-xs text-[var(--dusty-blue)] text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white" aria-labelledby="faq-title">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services and process."
          />

          <div className="max-w-3xl mx-auto mt-16 space-y-4">
            {FAQ_ITEMS.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-[var(--ivory)]/30 rounded-xl border border-[var(--ivory)] overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    aria-expanded={isExpanded}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/50 transition-colors focus-visible:ring-2 focus-visible:ring-[var(--midnight-blue)] focus-visible:ring-inset"
                  >
                    <span className="text-[var(--midnight-blue)] pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        className="text-[var(--dusty-blue)]"
                        size={20}
                      />
                    </motion.div>
                  </button>

                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-[var(--dusty-blue)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[var(--midnight-blue)] to-[var(--deep-navy)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
            animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[var(--buttercream)] mb-4 uppercase tracking-wider text-sm">
              Ready to Start?
            </p>
            <h2
              className="text-white mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-[var(--ivory)] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join over 50+ companies who trust Propello to deliver exceptional
              digital solutions.
            </p>
            <motion.a
              href="mailto:hello@propello.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-5 bg-[var(--buttercream)] text-[var(--midnight-blue)] rounded-xl transition-all hover:shadow-xl text-lg"
            >
              Email Us Directly
              <Mail size={22} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
