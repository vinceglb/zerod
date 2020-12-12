module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#FD4A1E',
        'transparent-primary' : '#FD4A1E6B',
        'secondary': '#FFE0D8',
        'light-secondary': '#FFFAF6',
        'dark-grey': '#2C2B26',
        'light-grey': '#666666',
        'lighter-grey': '#EAEAEA',
        'lightest-grey': '#FCFCFC',
        'reddish-brown': '#351E1D',
        'green': '#1DBF78',
        'light-transparent': '#F0F0F033'
      },
      spacing: {
        '120': '50rem'
      },
      width: {
        '150': '40rem',
      },
      height: {
        '4/5-screen': '80vh',
      },
      maxHeight: {
        '1/2-screen': '50vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
