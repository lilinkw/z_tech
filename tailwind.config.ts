import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "#757575",
      },
      fontFamily: {
        heading: ["var(--font-playfair)"],
        sans: ["var(--font-montserrat)"],
      },
      fontWeight: {
        regular: "400",
        bold: "700",
      },
      fontSize: {
        text: "14px",
      },
    },
  },
  plugins: [],
} satisfies Config;
