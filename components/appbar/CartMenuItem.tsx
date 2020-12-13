import Link from 'next/link'
import Image from 'next/image'
// import { Counter } from '../counter/Counter'
import { CartItem as CartItemModel } from '../../models/cart'

interface CartItemProps {
  item: CartItemModel
}

export const CartMenuItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className="bg-white flex flex-row shadow-custom p-2 rounded-xl">
      <div className="h-24 w-24 relative flex-shrink-0 mr-3">
        <Image
          className="rounded-xl"
          src={item.product.photo}
          width="200"
          height="200"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow overflow-hidden">
        <div className="text-dark-grey font-bold text-2xl whitespace-nowrap overflow-hidden overflow-ellipsis">
          {item.product.name}
        </div>
        <div className="flex flex-row justify-between items-center whitespace-nowrap">
          <div className="text-light-grey font-semibold">
            Quantité : {item.quantity}
            {/* <Counter orientation="horizontal" /> */}
          </div>
          <div className="text-primary text-xl font-semibold">
            {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(
              item.product.price
            )}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center text-xs whitespace-nowrap font-medium text-gray-400">
          <div>Supprimer</div>
          <div>
            <Link href="/cart">Modifier</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
