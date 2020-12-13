import { useState } from 'react'
import { useOuterClick } from '../../utils/useOuterClick'
import { mdiCartOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../models'
import { Button } from '../button/Button'
import { CartMenuItem } from './CartMenuItem'
import styles from './CartMenu.module.css'
import { useRouter } from 'next/router'

export interface CartMenu {
  className?: string | undefined
}

export const CartMenu: React.FC<CartMenu> = observer(({ className }) => {
  const { cart } = useStores()

  const items = cart.items

  const [dropDownMenuOpen, setDropDownMenuOpen] = useState(false)

  const onClickOutsideCartDropdown = (): void => {
    if (dropDownMenuOpen) setDropDownMenuOpen(false)
  }
  const dropdownRef = useOuterClick(onClickOutsideCartDropdown)

  const router = useRouter()

  return (
    <div className={`relative ${className}`}>
      <div>
        <button
          className="max-w-xs bg-secondary text-primary rounded-full flex items-center text-sm p-3 hover:bg-primary hover:text-secondary transition focus:outline-none"
          id="cart-menu"
          aria-haspopup="true"
          onClick={() =>
            window.innerWidth > 768 ? setDropDownMenuOpen(!dropDownMenuOpen) : router.push('/cart')
          }
        >
          <span className="sr-only">Voir le panier</span>
          <Icon path={mdiCartOutline} size="1.5rem" />
        </button>
      </div>

      <div
        className={`
          ${!dropDownMenuOpen && 'hidden'}
          origin-top-right
          absolute
          right-0
          mt-2
          w-96
          rounded-2xl
          shadow-lg
          bg-lightest-grey
          ring-1
          ring-black
          ring-opacity-5
          transition ease-out duration-100`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
        ref={dropdownRef}
      >
        {/* Articles */}
        <div className={`space-y-4 max-h-1/2-screen overflow-y-auto p-3 ${styles.customScrollbar}`}>
          {items.map((item) => (
            <CartMenuItem key={item.product.id} item={item} />
          ))}
        </div>

        <div className="flex flex-row items-center justify-between mt-5 p-3">
          <button
            className="whitespace-nowrap cursor-pointer text-sm font-semibold text-light-grey px-2 focus:outline-none"
            onClick={() => {
              router.push('/cart')
              setDropDownMenuOpen(false)
            }}
          >
            Voir le panier
          </button>
          <Button
            small
            className="h-10 w-52"
            onClick={() => {
              router.push('/checkout')
              setDropDownMenuOpen(false)
            }}
          >
            Commander
          </Button>
        </div>
      </div>
    </div>
  )
})
