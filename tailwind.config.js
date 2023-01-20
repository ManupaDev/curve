const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ['sans']:['product-sans',...defaultTheme.fontFamily.sans]
      },
      colors:{
        'curve-green':'#309C8A',
        'curve-green-light':'#4BC9B5',
        'curve-grey':'#9D9D9D',
        'curve-grey-darker':'#3B3B3B',
        'curve-grey-lighter':'#6A6A6A',
        'curve-blue':'#1C5294'
      }
    },
  },
  plugins: [],
};
