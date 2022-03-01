const colors = require('tailwindcss/colors')

module.exports = {
  ...colors,
  transparent: 'transparent',
  current: 'currentColor',
  primary:{
    DEFAULT: colors.indigo[600],
    light: colors.indigo[400],
    dark: colors.indigo[700]
  },
  accent:{
    DEFAULT: colors.teal[300],
    light: colors.teal[500],
    dark: colors.teal[700]
  },
  gradi: {
    start: colors.purple[900],
    via: colors.purple[700],
    stop: colors.indigo[900]
  },
  bg:{
    DEFAULT: colors.white,
    dark: colors.indigo[800],
    light: colors.indigo[400],
  },
  text: {
    DEFAULT: colors.black,
    error: colors.red[600],
    white: colors.white
  }
}