import { CartItem as CartItemModel } from '../../models/cart'
import Image from 'next/image'
import Icon from '@mdi/react'
import { mdiPlus, mdiMinus, mdiTrashCanOutline } from '@mdi/js'
import { useStores } from '../../models'
import { observer } from 'mobx-react-lite'

interface CartItemProps {
  item: CartItemModel
}

export const CartItem: React.FC<CartItemProps> = observer(({ item }) => {
  const { cart } = useStores()
  return (
    <div
      className="bg-white flex flex-row items-center shadow-custom rounded-xl sm:max-w-lg overflow-hidden"
      key={item.product.id}
    >
      <div className="h-32 w-32 relative flex-shrink-0 mr-3 ml-4">
        <Image
          className="rounded-xl"
          src={item.product.photo}
          width="200"
          height="200"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow overflow-hidden">
        <div className="text-dark-grey font-bold text-2xl whitespace-nowrap overflow-hidden overflow-ellipsis">
          {item.product.name}
        </div>
        <div className="flex flex-row justify-between items-center whitespace-nowrap">
          <div className="text-light-grey font-semibold">
            Quantité : {item.quantity}
            {/* <Counter orientation="horizontal" /> */}
          </div>
          <div className="text-primary text-2xl font-semibold">
            {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(
              item.product.price
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-rows-4 ml-5">
        <button
          className="
      flex 
      justify-center
      items-center
      w-10 h-10
      focus:outline-none
      text-primary
      bg-light-secondary
      hover:bg-primary
      hover:text-light-secondary
      transition
      rounded-tr-xl"
          onClick={() => item.incrementQuantity()}
        >
          <Icon path={mdiPlus} size="1.25rem" />
        </button>
        <div
          className="flex
      justify-center
      items-center
      w-10
      h-10
      text-dark-grey
      font-bold
      bg-light-secondary
      text-xl"
        >
          {item.quantity}
        </div>
        <button
          className="flex
      justify-center
      items-center
      w-10
      h-10
      focus:outline-none
      text-primary
      bg-light-secondary
      hover:bg-primary
      hover:text-light-secondary
      transition"
          onClick={() => item.decrementQuantity()}
        >
          <Icon path={mdiMinus} size="1.25rem" />
        </button>
        <button
          className="flex
      justify-center
      items-center
      w-10
      h-10
      focus:outline-none
      border-2
      border-primary
      text-white
      bg-primary
      hover:bg-white
      hover:text-primary
      transition
      rounded-br-xl"
          onClick={() => cart.removeItem(item)}
        >
          <Icon path={mdiTrashCanOutline} size="1.25rem" />
        </button>
      </div>
    </div>
  )
})
