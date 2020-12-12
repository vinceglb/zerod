import { BobPage } from '../utils/layout-types-next'

const CartPage: BobPage = () => {
  return (
    <>
      <nav className="bg-white shadow fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <h2>Logo Doseur</h2>
          </div>
        </div>
      </nav>
    </>
  )
}

CartPage.Layout = null

export default CartPage
