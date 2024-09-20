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
        "headingR/28px": [
          "28px",
          { fontWeight: 400, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingR/24px": [
          "24px",
          { fontWeight: 400, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingM/28px": [
          "28px",
          { fontWeight: 500, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingM/24px": [
          "24px",
          { fontWeight: 500, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingB/28px": [
          "28px",
          { fontWeight: 600, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "headingB/24px": [
          "24px",
          { fontWeight: 600, lineHeight: "135%", letterSpacing: "-0.02em" },
        ],
        "bodyR/18px": [
          "18px",
          { fontWeight: 400, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyR/16px": [
          "16px",
          { fontWeight: 400, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyM/18x": [
          "18px",
          { fontWeight: 500, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyM/16px": [
          "16px",
          { fontWeight: 500, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyB/18px": [
          "18px",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0em" },
        ],
        "bodyB/16px": [
          "16px",
          { fontWeight: 600, lineHeight: "150%", letterSpacing: "0em" },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
