import { useEffect } from "react";
import type { SeoMetadata } from "@/types/content";

const SITE_NAME = "Excelligent Consulting Services";
const DEFAULT_OG_IMAGE = "https://excelligent.co.in/og-image.png";

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

interface SeoProps extends SeoMetadata {
  ogImage?: string;
}

/**
 * Dependency-free SEO helper that keeps document.title and key <meta>/<link>
 * tags in sync with the current route for in-app (client-side) navigation.
 *
 * For the FIRST, hard-loaded view of any URL — which matters most for
 * search engines and social-share scrapers that don't execute JavaScript —
 * the same values are instead baked directly into the static HTML by
 * scripts/prerender.tsx at build time (see docs/SEO_DOCUMENTATION.md).
 * This component keeps that same metadata correct as the user clicks
 * around the site without a full page reload.
 */
export function Seo({ title, description, canonical, robots = "index, follow", ogImage }: SeoProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    if (description) setMetaTag("name", "description", description);
    setMetaTag("name", "robots", robots);

    if (canonical) {
      setCanonical(canonical);
      setMetaTag("property", "og:url", canonical);
    }

    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:title", title);
    if (description) setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", ogImage ?? DEFAULT_OG_IMAGE);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    if (description) setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage ?? DEFAULT_OG_IMAGE);

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, canonical, robots, ogImage]);

  return null;
}
