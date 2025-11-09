import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import { toast } from "sonner";

import { validateContactForm } from "@/utils/validation";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const errors = validateContactForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      toast.error("Please fix the errors in the form", {
        description: "Check all required fields and try again",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    toast.success("🎉 Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after short delay
    setTimeout(() => {
      setFormData(initialFormData);
      setSubmitSuccess(false);
    }, 3000);
  };

  return {
    formData,
    formErrors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  };
};
