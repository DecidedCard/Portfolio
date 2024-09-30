import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "headingR/32px": [
          "32px",
          { fontWeight: 400, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingR/28px": [
          "28px",
          { fontWeight: 400, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingM/32px": [
          "32px",
          { fontWeight: 500, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingM/28px": [
          "28px",
          { fontWeight: 500, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingB/32px": [
          "32px",
          { fontWeight: 600, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingB/28px": [
          "28px",
          { fontWeight: 600, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "bodyR/20px": [
          "20px",
          { fontWeight: 400, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyR/18px": [
          "18px",
          { fontWeight: 400, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyM/20px": [
          "20px",
          { fontWeight: 500, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyM/18px": [
          "18px",
          { fontWeight: 500, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyB/20px": [
          "20px",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyB/18px": [
          "18px",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0em" },
        ],
      },
      colors: {
        primary: {
          100: "#2C3A4F",
          200: "#56647b",
          300: "b4c2dc#",
        },
        accent: {
          100: "#FF4D4D",
          200: "#f5f5f5",
        },
        text: {
          100: "#FFFFFF",
          200: "#e0e0e0",
        },
        bg: {
          100: "#1A1F2B",
          200: "#292e3b",
          300: "#414654",
        },
      },
    },
  },
  plugins: [],
};
export default config;
