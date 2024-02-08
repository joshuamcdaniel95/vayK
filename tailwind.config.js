/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./client/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8AA8A1",
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: false,
    styled: false,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: "",
  },
}

