import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px rgba(33, 24, 35, 0.08)",
        card: "0 10px 35px rgba(33, 24, 35, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
