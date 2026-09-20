import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        muted: "#475467",
        subtle: "#667085",
        line: "#eaecf0",
        "line-strong": "#d0d5dd",
        paper: "#ffffff",
        soft: "#f9fafb",
        navy: "#142a5a",
        "navy-2": "#08182d",
        red: "#f43c49",
        "red-dark": "#d92d3a",
      },
      fontFamily: {
        sans: ["var(--font-circular-std)", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      fontSize: {
        "card-title": ["21px", { lineHeight: "1.25" }],
      },
      boxShadow: {
        xs: "0 1px 2px rgba(16, 24, 40, 0.05)",
        sm: "0 1px 3px rgba(16, 24, 40, 0.1), 0 1px 2px rgba(16, 24, 40, 0.06)",
        lg: "0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03)",
      },
    },
  },
  plugins: [animate],
};

export default config;
