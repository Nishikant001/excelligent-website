import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { FormField } from "@/components/contact/FormField";
import { fieldInputClasses, fieldBorderClass } from "@/lib/formFieldStyles";
import { Button } from "@/components/Button";
import { validateContactForm, type ContactFormValues, type ContactFormErrors } from "@/lib/validation";
import { sendContactEmail } from "@/services/emailjs";
import { contactInterestOptions } from "@/data/contactOptions";
import { isEmailjsConfigured } from "@/lib/emailjs";

type Status = "idle" | "submitting" | "success" | "error";

const EMPTY_VALUES: ContactFormValues = {
  fullName: "",
  workEmail: "",
  phone: "",
  company: "",
  interest: "",
  message: "",
  website: "", // honeypot
};

const COOLDOWN_MS = 20_000;
const MIN_SUBMIT_INTERVAL_MS = 4_000;

export function ContactForm() {
  // Links such as the homepage's "Talk to an Expert" / "Request Demo" and the
  // Ask Excelligent AI assistant pre-fill the enquiry via ?interest=&message=.
  const [searchParams] = useSearchParams();
  const [values, setValues] = useState<ContactFormValues>(() => {
    const interest = searchParams.get("interest") ?? "";
    const message = searchParams.get("message") ?? "";
    return {
      ...EMPTY_VALUES,
      interest: contactInterestOptions.includes(interest) ? interest : "",
      message: message.slice(0, 500),
    };
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [cooldownActive, setCooldownActive] = useState(false);
  const lastSubmitAt = useRef(0);

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmitAt.current < MIN_SUBMIT_INTERVAL_MS || cooldownActive) {
      // Rapid repeated submissions are silently throttled rather than
      // surfaced as a hard error — this is lightweight, client-side
      // protection only, not a substitute for server-side rate limiting
      // (there is no backend in this static site).
      return;
    }

    // Honeypot: real visitors never populate this hidden field. Bots that
    // fill every field often do. Pretend success without actually sending.
    if (values.website.trim() !== "") {
      setStatus("success");
      setValues(EMPTY_VALUES);
      return;
    }

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    lastSubmitAt.current = now;
    setStatus("submitting");

    const result = await sendContactEmail({
      fullName: values.fullName.trim(),
      workEmail: values.workEmail.trim(),
      phone: values.phone.trim(),
      company: values.company.trim(),
      interest: values.interest,
      message: values.message.trim(),
    });

    if (result.success) {
      setStatus("success");
      setValues(EMPTY_VALUES);
      setCooldownActive(true);
      setTimeout(() => setCooldownActive(false), COOLDOWN_MS);
    } else {
      // Keep the user's entered data so they don't have to retype it.
      setStatus("error");
    }
  }

  const busy = status === "submitting";

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      noValidate
      className="space-y-5 rounded-2xl border border-border bg-surface p-6 lg:p-8"
    >
      {!isEmailjsConfigured() && (
        <p className="rounded-md border border-accent/30 bg-accent/10 p-3 text-sm text-accent-dark">
          The contact form isn't fully configured yet — EmailJS environment variables are
          missing. See client/.env.example and docs/EMAILJS_SETUP.md.
        </p>
      )}

      {/* Honeypot field — hidden from sighted users and, via aria-hidden +
          tabIndex, from assistive tech and keyboard tab order. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField id="fullName" label="Full Name" required error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            required
            autoComplete="name"
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`${fieldInputClasses} ${fieldBorderClass(errors.fullName)}`}
          />
        </FormField>

        <FormField id="workEmail" label="Work Email" required error={errors.workEmail}>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            required
            autoComplete="email"
            value={values.workEmail}
            onChange={(e) => update("workEmail", e.target.value)}
            aria-invalid={Boolean(errors.workEmail)}
            aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
            className={`${fieldInputClasses} ${fieldBorderClass(errors.workEmail)}`}
          />
        </FormField>

        <FormField id="phone" label="Phone Number" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`${fieldInputClasses} ${fieldBorderClass(errors.phone)}`}
          />
        </FormField>

        <FormField id="company" label="Company">
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            className={`${fieldInputClasses} ${fieldBorderClass()}`}
          />
        </FormField>
      </div>

      <FormField id="interest" label="Interested In" required error={errors.interest}>
        <select
          id="interest"
          name="interest"
          required
          value={values.interest}
          onChange={(e) => update("interest", e.target.value)}
          aria-invalid={Boolean(errors.interest)}
          aria-describedby={errors.interest ? "interest-error" : undefined}
          className={`${fieldInputClasses} ${fieldBorderClass(errors.interest)} bg-surface`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {contactInterestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </FormField>

      <FormField id="message" label="Message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldInputClasses} ${fieldBorderClass(errors.message)}`}
        />
      </FormField>

      <Button type="submit" disabled={busy || cooldownActive} className="w-full sm:w-auto">
        {busy ? "Sending..." : "Send Enquiry"}
      </Button>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === "success" && (
          <p className="text-sm font-medium text-secondary-dark">
            Thank you! Your enquiry has been sent successfully. Our team will get back to you.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-600">
            Something went wrong while sending your enquiry. Please try again or contact us
            directly by email.
          </p>
        )}
      </div>
    </motion.form>
  );
}
