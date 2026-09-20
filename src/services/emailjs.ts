import emailjs from "@emailjs/browser";
import { emailjsConfig, isEmailjsConfigured } from "@/lib/emailjs";

export interface ContactFormPayload {
  fullName: string;
  workEmail: string;
  phone?: string;
  company?: string;
  interest: string;
  message: string;
}

export type SendContactEmailResult =
  | { success: true }
  | { success: false; reason: "not_configured" | "send_failed" };

/**
 * Sends a contact form enquiry directly from the browser via EmailJS.
 * There is no backend involved — EmailJS delivers the message straight to
 * Excelligent's configured email service. Template variable names below
 * (from_name, from_email, phone, company, interest, message, submitted_at)
 * should match the variables configured in the EmailJS template — see
 * docs/EMAILJS_SETUP.md.
 */
export async function sendContactEmail(payload: ContactFormPayload): Promise<SendContactEmailResult> {
  if (!isEmailjsConfigured()) {
    return { success: false, reason: "not_configured" };
  }

  const templateParams = {
    from_name: payload.fullName,
    from_email: payload.workEmail,
    phone: payload.phone || "Not provided",
    company: payload.company || "Not provided",
    interest: payload.interest,
    message: payload.message,
    submitted_at: new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }),
  };

  try {
    await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, templateParams, {
      publicKey: emailjsConfig.publicKey,
    });
    return { success: true };
  } catch {
    // Never leak EmailJS/network error internals to the visitor.
    return { success: false, reason: "send_failed" };
  }
}
