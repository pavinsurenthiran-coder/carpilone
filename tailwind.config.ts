import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0a1430",
          900: "#0f1d3d",
          800: "#15244a",
          700: "#1c2f5c",
        },
        gold: {
          400: "#d9b65c",
          500: "#cda44a",
          600: "#b8923f",
        },
        slate: {
          450: "#8a93a8",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1480px",
      },
    },
  },
  plugins: [],
};
export default config;
