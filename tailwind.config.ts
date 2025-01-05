import type { Config } from "tailwindcss";

export enum EScreenSize {
  XS = "375px",
  SM = "640px",
  MD = "768px",
  LARGE = "1024px",
  XL = "1280px",
  XL_2 = "1536px",
}

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: EScreenSize.XS, // Small devices (mobile)
      sm: EScreenSize.SM, // Small devices (mobile)
      md: EScreenSize.MD, // Medium devices (tablets)
      lg: EScreenSize.LARGE, // Large devices (laptops/desktops)
      xl: EScreenSize.XL, // Extra large devices
      "2xl": EScreenSize.XL_2, // Double extra large devices
    },
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
        xs: "12px",
        sm: "14px",
        md: "24px",
        large: "40px",
        "heading-md": "60px",
        heading: "80px",
      },
      borderRadius: {
        xs: "5px",
        sm: "10px",
        md: "21px",
      },
      gap: {
        15: "15px",
        20: "20px",
        24: "24px",
        40: "40px",
        70: "70px",
      },
      padding: {
        xs: "16px",
      },
      lineHeight: {
        30: "30px",
        50: "50px",
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
