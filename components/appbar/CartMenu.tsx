import { useState } from 'react'
import { useOuterClick } from '../../utils/useOuterClick'
import { mdiCartOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../models'
import Link from 'next/link'
import { Button } from '../button/Button'
import { CartItem } from './CartItem'
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
          id="user-menu"
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
          p-3
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
        <div
          className={`space-y-4 pb-2 max-h-1/2-screen pr-1 overflow-y-auto ${styles.customScrollbar}`}
        >
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>

        <div className="flex flex-row items-center justify-between mt-5">
          <Link href="/cart">
            <div className="whitespace-nowrap cursor-pointer text-sm font-semibold text-light-grey px-2">
              Voir le panier
            </div>
          </Link>
          <Link href="/checkout">
            <Button small className="h-10 w-52">
              Commander
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
})
