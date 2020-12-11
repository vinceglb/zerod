module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#FD4A1E',
        secondary: '#FFE0D8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
