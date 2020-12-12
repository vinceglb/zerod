import { Instance, SnapshotOut, types } from 'mobx-state-tree'

export const UserModel = types.model('User').props({
  name: '',
})

export interface User extends Instance<typeof UserModel> {}

export interface UserSnapshot extends SnapshotOut<typeof UserModel> {}
