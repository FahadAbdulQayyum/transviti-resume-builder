import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F4F4",
        textClr: "#737A91",
        primary: "#FFFFFF",
        foreground: "#0154AA",
      },
      padding: {
        standardPadding: '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
