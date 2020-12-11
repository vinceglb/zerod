// import { addMiddleware } from 'mobx-state-tree'
import { RootStoreModel, RootStore } from './root-store'
import makeInspectable from 'mobx-devtools-mst'

/**
 * Setup the root state.
 */
export async function setupRootStore(): Promise<RootStore> {
  let rootStore: RootStore
  // let data: any

  // eslint-disable-next-line prefer-const
  rootStore = RootStoreModel.create({})
  makeInspectable(rootStore)

  // mobx logging
  // if (__DEV__) {
  //   import('mobx-flipper').then(({ createMstDebugger }) => {
  //     addMiddleware(rootStore, createMstDebugger(rootStore))
  //   })
  // }

  // Décommenter pour que remettre en marche le cache
  // track changes & save to storage
  // onSnapshot(rootStore, snapshot => storage.save(ROOT_STATE_STORAGE_KEY, snapshot))

  return rootStore
}
