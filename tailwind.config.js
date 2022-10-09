/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },

      colors: {
        white: '#fff',
        blue: '#3547AD',
        lightBlue: '#BFC5E6',
      },
    },
  },
  plugins: [],
});
