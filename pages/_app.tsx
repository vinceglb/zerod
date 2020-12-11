import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

// fonts
require('typeface-poppins')

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
