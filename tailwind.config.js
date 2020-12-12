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
        'transparent-primary' : '#FD4A1E6B',
        secondary: '#FFE0D8',
        'light-secondary': '#FFFAF6',
        'dark-grey': '#2C2B26',
        'light-grey': '#666666',
        'lighter-grey': '#EAEAEA',
        'reddish-brown': '#351E1D',
        'green': '#1DBF78',
        'light-transparent': '#F0F0F033'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
