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
        bolder: "900"
      },
      fontSize: {
        text: "14px",
      },
    },
  },
  plugins: [
    function ({ matchUtilities }: any) {
      {
        matchUtilities({
          "clip-ellipse": (value: any) => {
            const [x, y, width, height] = value.split(" ");
            const returnValue = `ellipse(${x}px ${y}px at ${width}% ${height}%)`;
            console.log(returnValue);
            return { clipPath: returnValue };
          },
        });
      }
    },
  ],
} satisfies Config;
