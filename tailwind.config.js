const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ["sans"]: ["product-sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "curve-grey-1": "#D1D0D0",
        "curve-grey-2": "#6E706F",
        "curve-grey-3": "#B6B6B6",
        "curve-grey-4": "#A9A9A9",
        "curve-grey-5": "#726F6F",
        "curve-grey-6": "#222222",
        "curve-grey-7": "#9D9D9D",
        "curve-grey-8": "#6A6A6A",
        "curve-grey-9": "#3B3B3B",
        "curve-grey-10": "#2C2B2B",
        "curve-grey-11": "#5F5E5E",
        "curve-grey-12": "#202020",
        "curve-grey-13": "#7B7B7B",
        "curve-grey-14": "#c4c4c4",
        "curve-grey-15": "#383838",
        "curve-grey-16": "#444444",
        "curve-grey-17": "#9E9E9E",
        "curve-grey-18": "#838282",
        "curve-grey-19": "#F3F3F3",
        "curve-blue-1": "#1C5294",
        "curve-blue-2": "#16498D",
        "curve-blue-3": "#1F7EA5",
        "curve-blue-4": "#1D5395",
        "curve-green-1": "#3FAEB0",
        "curve-green-2": "#309C8A",
        "curve-green-3": "#4BC9B5",
        "curve-green-4": "#2CBBAB",
      },
      scale: {
        175: "1.75",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
};
