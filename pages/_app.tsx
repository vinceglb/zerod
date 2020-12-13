import React, { useState, FC as Component, useEffect } from 'react'
import '../styles/globals.css'
import { RootStoreProvider } from '../models/root-store/root-store-context'
import { RootStore, setupRootStore } from '../models'
import { BobAppProps } from '../utils/layout-types-next'
import { DefaultLayout } from '../layouts/default'

// fonts
require('typeface-poppins')

const App: Component<BobAppProps> = ({ Component, pageProps }) => {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)
  const [initializing, setInitializing] = useState(true)

  let Layout = Component.Layout

  if (Component.Layout === undefined) Layout = DefaultLayout
  else if (Component.Layout === null) Layout = React.Fragment

  // OUUUH LA BELLE GITANERIIIIE
  Layout = Layout as React.FC | React.ExoticComponent

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RootStoreProvider>
  )
}

export default App
