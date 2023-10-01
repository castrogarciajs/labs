import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"]
      }
    },
  },
  plugins: [],
};
export default config;
