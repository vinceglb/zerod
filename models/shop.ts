import { Instance, SnapshotOut, types } from 'mobx-state-tree'

export enum ShopType {
  EPICERIE = 'Epicerie',
  STAND_MARCHE = 'Stand de marché',
  COMMERCE_ALIMENTAIRE = 'Commerce alimentaire',
}

export const ShopModel = types.model('Shop').props({
  id: types.identifierNumber,
  name: types.string,
  description: types.string,
  type: types.enumeration<ShopType>('ShopType', Object.values(ShopType)),
  photo: types.string,
  tags: types.array(types.string),
})

export interface Shop extends Instance<typeof ShopModel> {}

export interface ShopSnapshot extends SnapshotOut<typeof ShopModel> {}
