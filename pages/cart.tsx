import { BobPage } from '../utils/layout-types-next'
import { ReturnBtn } from '../components/ReturnBtn'
import { Container } from '../components/Container'
import { observer } from 'mobx-react-lite'
import { useStores } from '../models'
import { CartItem } from '../components/cart/CartItem'
import { Button } from '../components/button/Button'

const CartPage: BobPage = observer(() => {
  const { cart } = useStores()
  return (
    <>
      <nav className="bg-white shadow absolute w-full z-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <h2>Logo Doseur</h2>
          </div>
        </div>
      </nav>
      {/* Spacer for AppBar */}
      <div className="h-16 md:h-20"></div>

      <div className="relative w-full bg-light-secondary h-60 rounded-b-3xl flex flex-col justify-center items-center mb-10">
        <ReturnBtn className="absolute left-40" />
        <h1 className="text-reddish-brown font-bold text-5xl">Votre panier</h1>
        {/* <div className="flex flex-row items-center  space-x-16">
          <div className="flex flex-col items-center">
            <div className="bg-primary rounded-full h-4 w-4"></div>
            <div>Votre panier</div>
          </div>
          <div className="border-2 border-primary flex-auto"></div>
          <div className="flex flex-col items-center">
            <div className="bg-primary rounded-full h-4 w-4"></div>
            <div>Votre drive</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary rounded-full h-4 w-4"></div>
            <div>Votre commande</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary rounded-full h-4 w-4"></div>
            <div>Votre paiement</div>
          </div>
        </div> */}
      </div>
      <Container>
        <h2 className="text-reddish-brown font-bold text-xl">
          Votre panier ({cart.itemCount} Articles)
        </h2>
        <div className="w-full h-0.5 bg-lighter-grey mt-3 mb-7" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Articles */}
          <div>
            <div className="space-y-4">
              {cart.items.map((item) => (
                <CartItem item={item} key={item.product.id} />
              ))}
              <div className="text-right">
                <Button>Valider le panier</Button>
              </div>
            </div>
          </div>
          {/* Total */}
          <div className="p-8 shadow-custom rounded-2xl max-w-md">
            <h3 className="text-2xl font-bold text-dark-grey mb-4">Détail commande</h3>
            <div className="text-lg font-semibold text-light-grey mb-4">
              <div>{`Nombre d'articles: ${cart.itemCount}`}</div>
              <div>{`Nombre de produits: ${cart.productCount}`}</div>
            </div>
            <div className="mb-3">
              <span className="text-2xl font-bold text-dark-grey">Total:</span>
              <span className="text-2xl font-semibold text-primary">
                {new Intl.NumberFormat('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(cart.totalDue)}
              </span>
            </div>
            <div className="text-center">
              <Button className="justify">Valider mon panier</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
})

CartPage.Layout = null

export default CartPage
