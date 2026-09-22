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
        // Design tokens — "AI-native enterprise technology company with
        // deep SAP DNA" palette from the homepage brief (website.docx,
        // "Design language"): midnight / near-black backgrounds, electric
        // blue primary, cyan -> violet AI accent, off-white light sections.
        // The token NAMES are unchanged from the earlier navy/teal palette so
        // every existing page inherits the new look without a rewrite.
        primary: {
          DEFAULT: "#1D5BFF", // electric blue
          dark: "#1245D6",
          light: "#5B8CFF",
        },
        secondary: {
          DEFAULT: "#0891B2", // cyan (AI accent, start of gradient)
          dark: "#0E7490",
          light: "#67E8F9",
        },
        violet: {
          DEFAULT: "#7C5CFF", // AI accent (end of gradient)
          light: "#A594FF",
          dark: "#5B3FD6",
        },
        midnight: {
          DEFAULT: "#050B1F",
          950: "#030712",
          900: "#050B1F",
          800: "#0A1330",
          700: "#101C42",
          600: "#17275A",
        },
        accent: {
          DEFAULT: "#F5A623",
          dark: "#A05F07",
          light: "#FBC96B",
        },
        background: "#F7F8FA", // off-white rather than pure white
        surface: "#FFFFFF",
        "surface-muted": "#EEF1F6",
        "text-primary": "#0B1226",
        "text-secondary": "#4B5670",
        border: "#E2E8F0",
        // legacy alias kept so earlier Phase 1 components referencing
        // brand.* keep working without a rewrite
        brand: {
          navy: "#050B1F",
          blue: "#1D5BFF",
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
        // Very large statement type for the homepage's product-company feel
        // ("very large headlines, short sentences" — design language).
        statement: ["clamp(2.25rem, 1.4rem + 4vw, 5rem)", { lineHeight: "1.04", fontWeight: "800", letterSpacing: "-0.02em" }],
        giant: ["clamp(2.75rem, 1rem + 8.5vw, 8rem)", { lineHeight: "0.95", fontWeight: "800", letterSpacing: "-0.03em" }],
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
        panel: "0 20px 60px -20px rgba(5,11,31,0.35)",
        glow: "0 0 0 1px rgba(103,232,249,0.25), 0 20px 60px -20px rgba(124,92,255,0.45)",
        "panel-light": "0 12px 40px -16px rgba(15,23,42,0.14)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(29,91,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(29,91,255,0.08) 1px, transparent 1px)",
        "primary-gradient": "linear-gradient(135deg, #1D5BFF 0%, #050B1F 100%)",
        "ai-gradient": "linear-gradient(90deg, #22D3EE 0%, #7C5CFF 100%)",
        "ai-gradient-diagonal": "linear-gradient(135deg, #22D3EE 0%, #7C5CFF 100%)",
        "accent-glow": "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.15), transparent 60%)",
        // Deep cinematic navy used for full-bleed hero/CTA panels — a
        // layered mesh rather than a flat two-stop gradient, so large
        // panels still feel rich without any photography.
        "navy-mesh":
          "radial-gradient(1200px circle at 12% -10%, rgba(29,91,255,0.32), transparent 55%), radial-gradient(900px circle at 100% 10%, rgba(124,92,255,0.22), transparent 50%), radial-gradient(700px circle at 60% 120%, rgba(34,211,238,0.12), transparent 55%), linear-gradient(160deg, #050B1F 0%, #0A1330 55%, #050B1F 100%)",
        "panel-tint": "linear-gradient(160deg, rgba(29,91,255,0.08) 0%, rgba(34,211,238,0.06) 100%)",
        "surface-tint": "linear-gradient(180deg, #FFFFFF 0%, #EEF1F6 100%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        // Data packets travelling along the vertical connectors of the
        // Enterprise AI / Cloud diagrams (one direction each; the diagram
        // runs one of each so data visibly flows both up and down).
        "flow-down": {
          "0%": { top: "0%", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        "flow-up": {
          "0%": { top: "100%", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { top: "0%", opacity: "0" },
        },
        "ribbon": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "sweep": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(450%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.6)", opacity: "0.9" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
        "scan": {
          "0%": { top: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
      },
      animation: {
        "flow-down": "flow-down 2.4s linear infinite",
        "flow-up": "flow-up 2.4s linear infinite",
        ribbon: "ribbon 38s linear infinite",
        sweep: "sweep 5s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
        scan: "scan 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
