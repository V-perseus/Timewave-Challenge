import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        'main': "#f0efe8",
        'primary': "#bcb4a4",
        "secondary": "#313131",
        "tertiary": "#e5e3da",
        "quaternary": "#331313",
        "quinary": "#847967"
      }
    },
    container: {
      center: true,
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
