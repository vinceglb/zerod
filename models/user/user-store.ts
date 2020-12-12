import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { User, UserModel } from './user'

/**
 * Model description here for TypeScript hints.
 */
export const UserStoreModel = types
  .model('UserStore')
  .props({
    user: types.maybe(UserModel), // Database user used for data
    updating: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setUser: function (user: User) {
      self.user = user
    },
  }))

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.
 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type UserStoreType = Instance<typeof UserStoreModel>
export interface UserStore extends UserStoreType {}
type UserStoreSnapshotType = SnapshotOut<typeof UserStoreModel>
export interface UserStoreSnapshot extends UserStoreSnapshotType {}
