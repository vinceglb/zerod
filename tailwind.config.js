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
        'dark-grey': '#333333',
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
        '200': '70rem',
        'lg': '1024px'
      },
      height: {
        '4/5-screen': '80vh',
      },
      maxHeight: {
        '1/2-screen': '50vh',
      },
      boxShadow: {
        custom: '0px 2px 15px 0px rgba(0,0,0,0.1)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
