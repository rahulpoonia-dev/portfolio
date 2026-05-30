import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "Courier New", "monospace"],
      },
      colors: {
        cream: {
          50: "#FAF7F2",
          100: "#F5F0E8",
          200: "#EDE8DF",
          300: "#D8D0C4",
        },
        ink: {
          900: "#1A1714",
          800: "#2E2820",
          700: "#4A4540",
          500: "#6B6158",
          400: "#8A8078",
        },
        accent: {
          DEFAULT: "#B07040",
          light: "#D4956A",
        },
      },
      gridTemplateColumns: {
        "2fr-1fr": "2fr 1fr",
        "180px-1fr": "180px 1fr",
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
