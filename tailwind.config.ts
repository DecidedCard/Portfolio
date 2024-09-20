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
        "headingR/24px": [
          "24px",
          { fontWeight: 400, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingR/20px": [
          "20px",
          { fontWeight: 400, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingM/24px": [
          "24px",
          { fontWeight: 500, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingM/20px": [
          "20px",
          { fontWeight: 500, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingB/24px": [
          "24px",
          { fontWeight: 600, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingB/20px": [
          "20px",
          { fontWeight: 600, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "bodyR/16px": [
          "16px",
          { fontWeight: 400, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyR/14px": [
          "14px",
          { fontWeight: 400, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyM/16px": [
          "16px",
          { fontWeight: 500, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyM/14px": [
          "14px",
          { fontWeight: 500, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyB/16px": [
          "16px",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyB/14px": [
          "14px",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0em" },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
