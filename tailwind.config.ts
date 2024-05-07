import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'skyblue': '#3498DB',
        'light-gray': '#C5C7D3',
        'nav-gray': '#9DA0AF',
        'deep-dark-blue': '#181E34',
        'light-gray-blue': '#5C5F70',
        'light-border-gray': '#D6D8E0',
      },
    },
  },
  plugins: [],
};
export default config;
