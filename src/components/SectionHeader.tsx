import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { Button } from "@/components/Button";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  size = "md",
  tone = "default",
  cta,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** "lg" gives the heading more editorial weight — used for section-defining headers. */
  size?: "md" | "lg";
  tone?: "default" | "inverted";
  cta?: { label: string; href: string };
}) {
  const isInverted = tone === "inverted";
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className={`eyebrow mb-4 ${isInverted ? "eyebrow-light" : ""} ${align === "center" ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`${size === "lg" ? "text-h1" : "text-h2"} ${isInverted ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${isInverted ? "text-white/75" : "text-text-secondary"}`}>
          {description}
        </p>
      )}
      {cta && (
        <div className="mt-6">
          <Button
            as="a"
            href={cta.href}
            variant={isInverted ? "outline" : "text"}
            withArrow={!isInverted}
            className={`group ${isInverted ? "border-white/40 text-white hover:bg-white hover:text-primary" : ""}`}
          >
            {cta.label}
          </Button>
        </div>
      )}
    </motion.div>
  );
}
