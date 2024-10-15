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
        "title/24px": ["24px", { lineHeight: "110%", fontWeight: "700" }],
        "title/28px": ["28px", { lineHeight: "110%", fontWeight: "700" }],
        "title/32px": ["32px", { lineHeight: "110%", fontWeight: "700" }],
        "title/40px": ["40px", { lineHeight: "110%", fontWeight: "700" }],
        "title/48px": ["48px", { lineHeight: "110%", fontWeight: "700" }],
        "body/10px": ["10px", { lineHeight: "100%", fontWeight: "400" }],
        "body/14px": ["14px", { lineHeight: "100%", fontWeight: "400" }],
        "body/18px": ["18px", { lineHeight: "100%", fontWeight: "400" }],
        "body/22px": ["22px", { lineHeight: "100%", fontWeight: "400" }],
        "body/26px": ["26px", { lineHeight: "100%", fontWeight: "400" }],
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
