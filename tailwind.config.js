module.exports = {
  purge: ['./pages/**/*.ts', './components/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
