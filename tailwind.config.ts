import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display SC", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#1B2B3A",
          primaryLight: "#2D4258",
          accent: "#CDAA81",
          accentLight: "#B49168",
          bg: "#FAFAF8",
          surface: "#f7f6f4",
          text: "#0a0915",
          muted: "#52525a",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.7s ease forwards",
        "fade-left": "fadeLeft 0.7s ease forwards",
        "fade-right": "fadeRight 0.7s ease forwards",
        "scale-in": "scaleIn 0.7s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
