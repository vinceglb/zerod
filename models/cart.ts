import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { ProductModel } from './product'
import { ShopModel } from './shop'

export const CartItemModel = types.model('CartItem').props({
  product: ProductModel,
  quantity: types.integer,
})

export const CartModel = types.model({
  shop: types.maybe(ShopModel),
  items: types.array(CartItemModel),
})

export interface Cart extends Instance<typeof CartModel> {}

export interface CartSnapshot extends SnapshotOut<typeof CartModel> {}

export interface CartItem extends Instance<typeof CartItemModel> {}

export interface CartItemSnapshot extends SnapshotOut<typeof CartItemModel> {}
