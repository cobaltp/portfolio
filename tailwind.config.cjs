/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202124",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
    fontFamily: {
      merriweather: "Merriweather, serif",
      opensans: "Open Sans, sans-serif",
      sourcecodepro: "Source Code Pro, monospace",
    },
  },
  plugins: [],
};
