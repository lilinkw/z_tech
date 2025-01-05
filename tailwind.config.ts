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
        gray: "#757575",
        "blue-light": "#079BEE",
      },
      fontFamily: {
        heading: ["var(--font-playfair)"],
        sans: ["var(--font-montserrat)"],
      },
      fontWeight: {
        regular: "400",
        bold: "700",
        bolder: "900",
      },
      fontSize: {
        sm: "14px",
        md: "24px",
        large: "40px",
        heading: "80px",
        "heading-md": "60px",
      },
      borderRadius: {
        md: "21px",
      },
      gap: {
        40: "40px",
        24: "24px",
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
