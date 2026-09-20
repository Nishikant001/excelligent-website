import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Seo } from "@/components/Seo";
import { pageSeo } from "@/data/seo";
import { fadeUp, staggerChildren } from "@/lib/animations";
import { ROUTES } from "@/routes/paths";

const helpfulLinks = [
  { label: "Solutions", href: ROUTES.solutions },
  { label: "Services", href: ROUTES.services },
  { label: "Industries", href: ROUTES.industries },
  { label: "Case Studies", href: ROUTES.caseStudies },
  { label: "About Excelligent", href: ROUTES.overview },
];

export default function NotFoundPage() {
  return (
    <>
      <Seo {...pageSeo.notFound} />
      <div className="relative overflow-hidden bg-primary-gradient">
        <div className="absolute inset-0 bg-hero-grid bg-grid opacity-15" aria-hidden="true" />
        <motion.div
          variants={staggerChildren()}
          initial="hidden"
          animate="show"
          className="container-content relative flex flex-col items-center py-28 text-center lg:py-36"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-wide text-white/70">
            404
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-2 text-h1 text-white">
            Looks like this page took a different route.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-3 max-w-md text-white/80">
            The page you're looking for doesn't exist or may have moved. Here are a few places
            that might help instead.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <Button as="a" href={ROUTES.home} size="lg" variant="secondary">
              Back to Home
            </Button>
            <Button
              as="a"
              href={ROUTES.contact}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="container-content py-12 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-secondary">
          Or explore
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {helpfulLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-primary hover:border-primary hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
