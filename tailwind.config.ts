import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Define custom breakpoints here
        'xs': '375px',   // Extra small devices (e.g., iPhone SE)
        'sm': '640px',   // Small devices (e.g., phones)
        'md': '768px',   // Medium devices (e.g., tablets)
        'lg': '1024px',  // Large devices (e.g., laptops)
        'xl': '1280px',  // Extra large devices (e.g., desktops)
        '2xl': '1536px', // 2x large devices (e.g., large monitors)
        '3xl': '1920px', // 3x large devices (e.g., ultra-wide monitors)
      },
      fontFamily: {
        neueHaas: ['NeueHaasDisplayBlack', 'sans-serif'],
      },
      colors: {
        background: "#F4F4F4",
        textClr: "#737A91",
        textClr2: "#585D6E",
        textClr3: "#737A91",
        primary: "#FFFFFF",
        foreground: "#0154AA",
        'custom-blue': '#0154AA',
      },
      padding: {
        standardPadding: '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
