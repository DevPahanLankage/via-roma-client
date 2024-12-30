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
        primary: {
          DEFAULT: "#353535", // Dark gray
        },
        secondary: {
          DEFAULT: "#D2D7DF", // Light blue-gray
        },
        accent: {
          DEFAULT: "#8A897C", // Warm gray
          light: "#BDBBB0", // Light warm gray
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
