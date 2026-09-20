// EmailJS configuration for the Contact Form — the ONLY dynamic
// functionality in this static site (see docs/DESIGN_DIRECTION.md and the
// Phase 1 architecture correction notes in README.md).
//
// Per EmailJS's recommended frontend integration, the Service ID, Template
// ID, and Public Key are safe to expose in client-side code (they are not
// secrets — EmailJS access is governed by allowed origins configured in
// the EmailJS dashboard, not by hiding these IDs). They are still read from
// Vite env vars here so real values are never hard-coded into source and
// can differ between environments without a code change.
//
// Required .env values (see client/.env.example):
//   VITE_EMAILJS_SERVICE_ID
//   VITE_EMAILJS_TEMPLATE_ID
//   VITE_EMAILJS_PUBLIC_KEY
export const emailjsConfig = {
  serviceId: import.meta.env?.VITE_EMAILJS_SERVICE_ID ?? "",
  templateId: import.meta.env?.VITE_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: import.meta.env?.VITE_EMAILJS_PUBLIC_KEY ?? "",
};

export function isEmailjsConfigured(): boolean {
  return Boolean(
    emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey
  );
}
