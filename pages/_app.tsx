import React, { useState, FC as Component, useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RootStoreProvider } from '../models/root-store/root-store-context'
import { RootStore, setupRootStore } from '../models'

const App: Component<AppProps> = ({ Component, pageProps }) => {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)
  const [initializing, setInitializing] = useState(true)

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    ;(async () => {
      const store = await setupRootStore()
      setRootStore(store)
      setInitializing(false)
    })()
  }, [])

  if (initializing || !rootStore) {
    // return <LoadingScreen />
    return <div>ca charge</div>
  }

  return (
    <RootStoreProvider value={rootStore}>
      <Component {...pageProps} />
    </RootStoreProvider>
  )
}

export default App
