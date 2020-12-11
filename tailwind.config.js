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
        'lighter-secondary': '#FFFAF6',
        'dark-grey': '#2C2B26',
        'light-grey': '#666666',
        'reddish-brown': '#351E1D',
        'green': '#1DBF78'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
