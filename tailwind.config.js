/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "2rem", lg: "3rem", xl: "4rem" },
    },
    extend: {
      colors: {
        // Design tokens derived from the existing Excelligent brand
        // (deep navy/blue enterprise palette). See
        // docs/DESIGN_DIRECTION.md — confirm exact hex values against
        // official brand assets when supplied by the client.
        primary: {
          DEFAULT: "#0B3D91",
          dark: "#071F4A",
          light: "#3B6FD1",
        },
        secondary: {
          DEFAULT: "#0EA5A4",
          dark: "#0B7A79",
          light: "#5FD1CF",
        },
        accent: {
          DEFAULT: "#F5A623",
          dark: "#A05F07",
          light: "#FBC96B",
        },
        background: "#F7F9FC",
        surface: "#FFFFFF",
        "surface-muted": "#EEF2F8",
        "text-primary": "#0F172A",
        "text-secondary": "#516079",
        border: "#E2E8F0",
        // legacy alias kept so earlier Phase 1 components referencing
        // brand.* keep working without a rewrite
        brand: {
          navy: "#071F4A",
          blue: "#0B3D91",
          accent: "#F5A623",
        },
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Premium editorial hero scale — noticeably larger than h1, used
        // only for the homepage hero and other full-bleed cinematic
        // moments (Phase 13). Controlled clamp keeps mobile readable.
        hero: ["clamp(2.75rem, 2.1rem + 3.1vw, 4.75rem)", { lineHeight: "1.05", fontWeight: "800", letterSpacing: "-0.01em" }],
        h1: ["clamp(2.25rem, 1.7rem + 2.2vw, 3.75rem)", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["clamp(1.75rem, 1.5rem + 1vw, 2.5rem)", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem)", { lineHeight: "1.3", fontWeight: "600" }],
      },
      maxWidth: {
        content: "1280px",
        editorial: "640px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -8px rgba(15,23,42,0.10)",
        "card-hover": "0 4px 10px rgba(15,23,42,0.06), 0 16px 32px -10px rgba(15,23,42,0.16)",
        // Softer, larger-radius elevation for premium panels (hero cards,
        // floating stat chips) — deliberately no hard/dark shadows.
        panel: "0 20px 60px -20px rgba(7,31,74,0.25)",
        "panel-light": "0 12px 40px -16px rgba(15,23,42,0.14)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(11,61,145,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,61,145,0.06) 1px, transparent 1px)",
        "primary-gradient": "linear-gradient(135deg, #0B3D91 0%, #071F4A 100%)",
        "accent-glow": "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(14,165,164,0.15), transparent 60%)",
        // Deep cinematic navy used for full-bleed hero/CTA panels — a
        // layered mesh rather than a flat two-stop gradient, so large
        // panels still feel rich without any photography.
        "navy-mesh":
          "radial-gradient(1200px circle at 15% -10%, rgba(59,111,209,0.35), transparent 55%), radial-gradient(900px circle at 100% 10%, rgba(14,165,164,0.18), transparent 50%), linear-gradient(160deg, #071F4A 0%, #0B3D91 55%, #071F4A 100%)",
        "panel-tint": "linear-gradient(160deg, rgba(11,61,145,0.08) 0%, rgba(14,165,164,0.06) 100%)",
        "surface-tint": "linear-gradient(180deg, #FFFFFF 0%, #EEF2F8 100%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
