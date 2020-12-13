// import { addMiddleware } from 'mobx-state-tree'
import { RootStoreModel, RootStore } from './root-store'
import { ShopType } from '../shop'

/**
 * Setup the root state.
 */
export async function setupRootStore(): Promise<RootStore> {
  let rootStore: RootStore
  // let data: any

  // eslint-disable-next-line prefer-const
  rootStore = RootStoreModel.create({
    cart: {
      shop: {
        id: 1,
        name: 'Michel echoppe',
        description: "Bienvenue dans l'échoppe de Michel !",
        type: ShopType.EPICERIE,
        photo: 'https://unsplash.com/photos/bqPXAXzRIsI/download?force=true&w=1920',
      },
      items: [
        {
          product: {
            name: 'Carottes',
            description: 'Botte de 10 carottes',
            active: true,
            price: 3.2,
            photo: '/images/syauqy-ahmad-wHCe4X6Kvdo-unsplash.jpg',
            tags: [],
            id: 1,
          },
          quantity: 1,
        },
        {
          product: {
            name: 'Ail de Lautrec',
            description: 'Le bon ail',
            active: true,
            price: 2.1,
            photo: '/images/sean-bernstein-BdrrunAzTjQ-unsplash.jpg',
            tags: [],
            id: 2,
          },
          quantity: 4,
        },
        {
          product: {
            name: 'Ail de Lautrec',
            description: 'Le bon ail',
            active: true,
            price: 2.1,
            photo: '/images/sean-bernstein-BdrrunAzTjQ-unsplash.jpg',
            tags: [],
            id: 3,
          },
          quantity: 4,
        },
        {
          product: {
            name: 'Ail de Lautrec',
            description: 'Le bon ail',
            active: true,
            price: 2.1,
            photo: '/images/sean-bernstein-BdrrunAzTjQ-unsplash.jpg',
            tags: [],
            id: 4,
          },
          quantity: 4,
        },
        {
          product: {
            name: 'Ail de Lautrec',
            description: 'Le bon ail',
            active: true,
            price: 2.1,
            photo: '/images/sean-bernstein-BdrrunAzTjQ-unsplash.jpg',
            tags: [],
            id: 5,
          },
          quantity: 4,
        },
      ],
    },
  })
  if (process.env.NODE_ENV === 'development') {
    import('mobx-devtools-mst').then((makeExecutable) => makeExecutable.default(rootStore))
  }

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
