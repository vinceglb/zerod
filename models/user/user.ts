import { Instance, SnapshotOut, types } from 'mobx-state-tree'

export const UserModel = types.model({
  name: '',
})

export interface User extends Instance<typeof UserModel> {}

export interface UserSnapshot extends SnapshotOut<typeof UserModel> {}
