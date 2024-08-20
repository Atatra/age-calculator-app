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
          purple: "hsl(259, 100%, 65%)",
          lred: "hsl(0, 100%, 67%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          offWhite: "hsl(0, 0%, 94%)",
          offBlack: "hsl(0, 0%, 8%)",
          lGrey: "hsl(0, 0%, 86%)",
          sGrey: "hsl(0, 1%, 44%)",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      fontSize: {
        inputs: "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
