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
        darkgreen: '#1B8F86',
        basicgreen: '#78B18A',
        lightgreen: '#E4F5EB',
        lightgray: '#F5F5F5',
        white: '#fff',
      },
    },
  },
  plugins: [],
});
