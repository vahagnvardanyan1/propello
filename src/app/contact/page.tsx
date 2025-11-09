"use client";

import {
  ContactHero,
  QuickContactOptions,
  ContactInfo,
  ContactFormSection,
  FAQSection,
  ContactCTA,
} from "@/components/contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <QuickContactOptions />

      {/* Main Contact Form Section */}
      <section
        className="py-24 bg-gradient-to-br from-white to-[var(--ivory)]/30"
        aria-labelledby="contact-form-title"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ContactInfo />
            <ContactFormSection />
          </div>
        </div>
      </section>

      <FAQSection />
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
