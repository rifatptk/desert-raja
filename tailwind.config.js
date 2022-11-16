/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      },
      colors: {
        brand: {
          DEFAULT: '#FE9B34',
          orange: '#EC971F',
          sky: '#0095F6',
          'dark-blue': '#1A2B48',
          red: '#DF5334',
          teal: '#36bca1',
          'light-gray': '#EBEBEB',
          gray: '#59657A',
        },
      },
    },
  },
  plugins: [],
};
