export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateFormField = (value: string, minLength = 1): boolean => {
  return value.trim().length >= minLength;
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export const validateContactForm = (
  formData: ContactFormData,
): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!validateFormField(formData.name)) {
    errors.name = "Name is required";
  }

  if (!validateFormField(formData.email)) {
    errors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.service) {
    errors.service = "Please select a service";
  }

  if (!validateFormField(formData.message)) {
    errors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
};
