/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  mode:"jit",
  purge: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}", // srcディレクトリにあるjs,jsx,ts,tsxを監視して軽量化してくれる
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      "text-black": "#243c5a",
      "text-green": "#008c8d",
      "bg-green": "#6bc2c3",
      "bg-black": "#262c3a",
      "progress-pale": "#c5eaea",
      "progress-deep": "#2bb9ba",
      "border-green": "#c5eaea",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
