// Build-time static prerendering for a client-side-routed React SPA.
//
// Why this exists: Vite's default production build produces a single
// index.html that every route falls back to. Search engines that execute
// JavaScript (Googlebot) can still index that fine, but many other
// crawlers and social-share link-preview bots (Bing, LinkedIn, Slack,
// Facebook, etc.) either don't execute JavaScript or only partially do, so
// they'd see an empty shell with generic Home-page metadata for every URL.
//
// This script renders each real route to a real HTML string using
// react-dom/server + react-router-dom's StaticRouter (both already
// dependencies — no new heavy tooling, no headless browser, no backend),
// and writes the result as `dist/<route>/index.html` with page-specific
// <title>/<meta>/<link rel="canonical"> tags injected into the head. Any
// static host (Netlify, Vercel, Cloudflare Pages, S3, GitHub Pages, etc.)
// can serve these directly — the client bundle then mounts over the top
// exactly as it would over the plain index.html, so behavior for real
// users is unchanged.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "@/App";
import { pageSeo } from "@/data/seo";
import { solutions } from "@/data/solutions";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";
import type { SeoMetadata } from "@/types/content";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "..", "dist");
const SITE_URL = "https://excelligent.co.in";

function resolveSeoForPath(routePath: string): SeoMetadata {
  const segments = routePath.split("/").filter(Boolean);

  if (routePath === "/") return pageSeo.home;
  if (routePath === "/overview") return pageSeo.overview;
  if (routePath === "/our-team") return pageSeo.ourTeam;
  if (routePath === "/our-partnerships") return pageSeo.ourPartnerships;
  if (routePath === "/ai-and-data") return pageSeo.aiAndData;
  if (routePath === "/cloud") return pageSeo.cloud;
  if (routePath === "/solutions") return pageSeo.solutionsIndex;
  if (routePath === "/services") return pageSeo.servicesIndex;
  if (routePath === "/products") return pageSeo.productsIndex;
  if (routePath === "/industries") return pageSeo.industriesIndex;
  if (routePath === "/case-studies") return pageSeo.caseStudiesIndex;
  if (routePath === "/contact") return pageSeo.contact;
  if (routePath === "/resources/blog") return pageSeo.blog;

  if (segments[0] === "solutions" && segments[1]) {
    const found = solutions.find((s) => s.slug === segments[1]);
    if (found) return found.seo;
  }
  if (segments[0] === "services" && segments[1]) {
    const found = services.find((s) => s.slug === segments[1]);
    if (found) return found.seo;
  }
  if (segments[0] === "products" && segments[1]) {
    const found = products.find((p) => p.slug === segments[1]);
    if (found) return found.seo;
  }
  if (segments[0] === "industries" && segments[1]) {
    const found = industries.find((i) => i.slug === segments[1]);
    if (found?.seo) return found.seo;
    if (found) return { title: `${found.navLabel} Industry | Excelligent`, canonical: `${SITE_URL}${routePath}` };
  }
  if (segments[0] === "case-studies" && segments[1]) {
    const found = caseStudies.find((c) => c.id === segments[1]);
    if (found) {
      return {
        title: `${found.title} | Excelligent Case Study`,
        description: found.summary,
        canonical: `${SITE_URL}${routePath}`,
      };
    }
  }

  return pageSeo.notFound;
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function injectSeo(template: string, seo: SeoMetadata): string {
  let html = template;
  const title = escapeHtml(seo.title);
  const description = seo.description ? escapeHtml(seo.description) : "";
  const canonical = seo.canonical ?? `${SITE_URL}/`;
  const robots = seo.robots ?? "index, follow";

  html = html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/>/s,
    `<meta name="description" content="${description}" />`
  );
  html = html.replace(/<meta\s+name="robots"\s+content=".*?"\s*\/>/s, `<meta name="robots" content="${robots}" />`);
  html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/>/s, `<link rel="canonical" href="${canonical}" />`);
  html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/>/s, `<meta property="og:title" content="${title}" />`);
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/>/s,
    `<meta property="og:description" content="${description}" />`
  );
  html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/>/s, `<meta property="og:url" content="${canonical}" />`);
  html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/s, `<meta name="twitter:title" content="${title}" />`);
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/s,
    `<meta name="twitter:description" content="${description}" />`
  );

  return html;
}

function renderRouteToFile(template: string, routePath: string, outFile: string) {
  const appHtml = renderToString(React.createElement(StaticRouter, { location: routePath }, React.createElement(App)));
  const seo = resolveSeoForPath(routePath);
  const withSeo = injectSeo(template, seo);
  const finalHtml = withSeo.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, finalHtml, "utf-8");
}

function outputPathFor(routePath: string): string {
  if (routePath === "/") return path.join(DIST_DIR, "index.html");
  return path.join(DIST_DIR, routePath.slice(1), "index.html");
}

// The full route list — every real page in the app, including noindex
// ones (so their own noindex tag is present in the static HTML, and so
// direct hard-loads of those URLs still render correctly).
const routes: string[] = [
  "/",
  "/overview",
  "/our-team",
  "/our-partnerships",
  "/ai-and-data",
  "/cloud",
  "/solutions",
  ...solutions.map((s) => `/solutions/${s.slug}`),
  "/services",
  ...services.map((s) => `/services/${s.slug}`),
  "/products",
  ...products.map((p) => `/products/${p.slug}`),
  "/industries",
  ...industries.map((i) => `/industries/${i.slug}`),
  "/case-studies",
  ...caseStudies.map((c) => `/case-studies/${c.id}`),
  "/contact",
  "/resources/blog",
];

function main() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error("dist/ not found — run `vite build` before prerendering.");
    process.exit(1);
  }

  const template = fs.readFileSync(path.join(DIST_DIR, "index.html"), "utf-8");

  for (const routePath of routes) {
    renderRouteToFile(template, routePath, outputPathFor(routePath));
  }

  // Static-host-compatible 404: most static hosts (Netlify, GitHub Pages,
  // S3 website hosting, etc.) automatically serve dist/404.html for any
  // unmatched path.
  const notFoundHtml = renderToString(
    React.createElement(StaticRouter, { location: "/__not_found__" }, React.createElement(App))
  );
  const notFoundFull = injectSeo(template, pageSeo.notFound).replace(
    '<div id="root"></div>',
    `<div id="root">${notFoundHtml}</div>`
  );
  fs.writeFileSync(path.join(DIST_DIR, "404.html"), notFoundFull, "utf-8");

  console.log(`Prerendered ${routes.length} routes + 404.html into dist/`);
}

main();
