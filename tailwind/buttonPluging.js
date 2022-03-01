const plugin = require('tailwindcss/plugin')

plugin(function({ addComponents, e, theme }) {
  addComponents({
    '.btn': {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
    }
  })
})