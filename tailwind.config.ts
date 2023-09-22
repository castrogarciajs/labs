import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      "home-purple": "url('../../public/backgrounds/bg-home-purple.png')",
      "home-green": "url('../../public/backgrounds/bg-green.png')",
      "home-blue": "url('../../public/backgrounds/bg-payments.png')"
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      white: "var(--dg-c-white)",
      black: "var(--dg-c-black)",
      green: {
        50: "var(--dg-c-green-ligth)",
      },
      zinc: "var(--dg-c-zinc)",
      aqua: {
        50: "var(--dg-c-aqua-ligth)",
        100: "var(--dg-c-aqua)",
      },
      purple: "var(--dg-c-purple)",
    },
  },
  plugins: [],
};
export default config;
