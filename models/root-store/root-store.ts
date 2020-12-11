import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { UserStoreModel } from '../user/user-model'

export const RootStoreModel = types.model('RootStore').props({
  userStore: types.optional(UserStoreModel, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
