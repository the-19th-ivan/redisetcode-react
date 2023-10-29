/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // nunito: ["Nunito", "sans-serif"],
      mavenPro: ["'Maven Pro'", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      // poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#f0f5f9",
        secondary: "#FFFFFF",
        primaryDark: "#242539",
        secondaryDark: "#292A3F",
        accent: "#21CB8E",
      },
    },
  },
  plugins: [],
});
