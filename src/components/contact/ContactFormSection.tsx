"use client";

import { motion } from "motion/react";
import { Send, CheckCircle } from "lucide-react";

import { FormInput } from "@/components/FormInput";
import { Button } from "@/components/Button";
import { useContactForm } from "@/hooks";
import { SERVICE_OPTIONS } from "@/constants";

export const ContactFormSection = () => {
  const {
    formData,
    formErrors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8 lg:p-10"
    >
      <h2 id="contact-form-title" className="text-[var(--midnight-blue)] mb-2">
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
            aria-describedby={formErrors.service ? "service-error" : undefined}
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
          By submitting this form, you agree to our privacy policy and terms of
          service.
        </p>
      </form>
    </motion.div>
  );
};

