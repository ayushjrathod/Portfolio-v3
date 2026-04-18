import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#64ffda",
        canvas: "#08080c",
        muted: {
          DEFAULT: "#8892b0",
          foreground: "#a8b2d1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(100, 255, 218, 0.12), 0 0 40px -12px rgba(100, 255, 218, 0.35)",
      },
      transitionDuration: {
        DEFAULT: "280ms",
      },
      keyframes: {
        mesh: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(2%, -1%) scale(1.02)" },
          "66%": { transform: "translate(-1%, 2%) scale(0.98)" },
        },
      },
      animation: {
        mesh: "mesh 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
