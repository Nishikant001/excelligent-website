import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 5173,
    },
    build: {
        rollupOptions: {
            output: {
                // Split rarely-changing vendor code into its own cacheable chunks
                // (react/react-dom/react-router-dom together since they're
                // interdependent; framer-motion and lucide-react separately since
                // they change independently of the app's own code). This is a
                // bundling/caching optimization only — it doesn't affect what HTML
                // is delivered on first load, so it can't interfere with the
                // build-time prerendering added in Phase 9. Route-level code
                // splitting (React.lazy) was deliberately NOT used for that exact
                // reason — see docs/PERFORMANCE.md.
                manualChunks: {
                    "react-vendor": ["react", "react-dom", "react-router-dom"],
                    "motion-vendor": ["framer-motion"],
                },
            },
        },
    },
});
