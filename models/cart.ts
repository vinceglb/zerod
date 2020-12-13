import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { ProductModel } from './product'
import { ShopModel } from './shop'

export const CartItemModel = types
  .model('CartItem')
  .props({
    product: ProductModel,
    quantity: types.integer,
  })
  .actions((self) => ({
    incrementQuantity() {
      ++self.quantity
    },
    decrementQuantity() {
      if (self.quantity > 1) --self.quantity
    },
  }))

export interface CartItem extends Instance<typeof CartItemModel> {}

export interface CartItemSnapshot extends SnapshotOut<typeof CartItemModel> {}

export const CartModel = types
  .model({
    shop: types.maybe(ShopModel),
    items: types.array(CartItemModel),
  })
  .views((self) => ({
    get itemCount() {
      return self.items.length
    },
    get productCount() {
      return self.items.reduce((acc, item) => acc + item.quantity, 0)
    },
    get totalDue() {
      return self.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0)
    },
  }))
  .actions((self) => ({
    removeItem(item: CartItem) {
      const index = self.items.indexOf(item)
      if (index > -1) self.items.splice(index, 1)
    },
  }))

export interface Cart extends Instance<typeof CartModel> {}

export interface CartSnapshot extends SnapshotOut<typeof CartModel> {}
