const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Loose enough to accept Indian and international formats (spaces,
// dashes, parentheses, optional leading +) without being overly strict.
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/;

export interface ContactFormValues {
  fullName: string;
  workEmail: string;
  phone: string;
  company: string;
  interest: string;
  message: string;
  // Honeypot — real visitors never fill this in; bots often do.
  website: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.workEmail.trim()) {
    errors.workEmail = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.workEmail.trim())) {
    errors.workEmail = "Please enter a valid email address.";
  }

  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.interest) {
    errors.interest = "Please let us know what you're interested in.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please provide a little more detail (at least 20 characters).";
  }

  return errors;
}
