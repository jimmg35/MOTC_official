const themes = require('./tailwind/theme')
const colors = require('tailwindcss/colors')

module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: themes,
  backgroundColor: {
    default: colors.white,
    primary: theme => theme('colors.primary'),
    accent: theme => theme('colors.accent'),
  },
  colors: colors,
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms') // import tailwind forms
  ],
}
