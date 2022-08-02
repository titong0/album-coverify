/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

console.log({ xs: "300px", ...defaultTheme.screens });
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      brightness: { 20: "20%" },
      screens: { xs: "300px", ...defaultTheme.screens },
    },
  },
  plugins: [],
};
