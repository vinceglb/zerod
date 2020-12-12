import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { CartModel } from '../cart'
import { UserStoreModel } from '../user/user-store'

export const RootStoreModel = types.model('RootStore').props({
  userStore: types.optional(UserStoreModel, {}),
  cart: types.optional(CartModel, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
