import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          100: "#39A93D",
          200: "#EBF5ED",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        instrumentSans: ["var(--font-instrumentsans)"],
      },
    },
  },
  plugins: [],
};
export default config;
