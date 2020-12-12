import { Instance, SnapshotOut, types } from 'mobx-state-tree'

export const ProductModel = types.model('Product').props({
  id: types.identifierNumber,
  name: types.string,
  description: types.string,
  active: types.boolean,
  price: types.number,
  photo: types.string,
  tags: types.array(types.string),
})

export interface Product extends Instance<typeof ProductModel> {}

export interface ProductSnapshot extends SnapshotOut<typeof ProductModel> {}
