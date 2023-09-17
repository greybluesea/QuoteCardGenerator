import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        BRAND: {
          DEFAULT: "var(--BRAND)",
          SECONDARY: "var(--BRAND-SECONDARY)",
        },
        TEXT: {
          DEFAULT: "var(--TEXT-PRIMARY)",
          SECONDARY: "var(--TEXT-SECONDARY)",
          HIGHLIGHT: "var(--TEXT-HIGHLIGHT)",
        },
        BGCOLOR: {
          DEFAULT: "var(--BGCOLOR-PRIMARY)",
          SECONDARY: "var(--BGCOLOR-SECONDARY)",
          HIGHLIGHT: "var(--BGCOLOR-HIGHLIGHT)",
        },
      },
      animation: {
        weather: "weatherChanging 14s ease-in-out infinite alternate-reverse",
      },
      keyframes: {
        weatherChanging: {
          "0%": { backgroundPosition: " 0% 0% " },
          "100%": { backgroundPosition: " 100% 100% " },
        },
      },
    },
  },
  plugins: [],
};
export default config;
