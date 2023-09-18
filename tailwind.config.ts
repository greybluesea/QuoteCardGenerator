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
        weather: "weatherChanging 8s ease-in-out infinite alternate-reverse",
      },
      keyframes: {
        weatherChanging: {
          "0%": { backgroundPosition: " 12% 12% " },
          "100%": { backgroundPosition: " 87% 87% " },
        },
      },
    },
  },
  plugins: [],
};
export default config;
