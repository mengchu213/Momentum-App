/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: '600px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
    fontSize: {
      '10xl': '180px'
    }
  },
  plugins: [],
}
