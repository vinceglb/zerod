import { FunctionComponent as Component, useState } from 'react'
import Icon from '@mdi/react'
import { mdiAccountOutline, mdiMenu, mdiClose, mdiFacebook, mdiInstagram } from '@mdi/js'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { CartMenu } from './CartMenu'

const routes = [
  {
    path: '/',
    text: 'Accueil',
  },
  {
    path: 'commerces',
    text: 'Commerces',
  },
  {
    path: 'apropos',
    text: 'À propos',
  },
  {
    path: 'espacecommercant',
    text: 'Espace commerçant',
  },
]

export const AppBar: Component = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      <nav className="bg-white shadow fixed w-full z-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Menu burger */}
            <div className="flex md:hidden">
              <button
                className=" text-reddish-brown rounded-full flex items-center text-sm p-3 focus:outline-none"
                id="burger-menu"
                aria-haspopup="true"
                onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
              >
                <span className="sr-only">Ouvrir le menu burger</span>
                <Icon path={mdiMenu} size="1.5rem" />
              </button>
            </div>
            <h2>Logo Doseur</h2>

            <div className="flex flex-row h-full mdml-4">
              {/* Routes */}
              <div className="hidden md:flex space-x-4 h-full">
                {routes.map((route) => {
                  const isActive = route.path === router.route
                  return (
                    <Link href={route.path} key={route.path}>
                      <div
                        className={`${
                          isActive
                            ? 'bg-primary text-white font-extrabold'
                            : 'text-reddish-brown font-medium hover:bg-secondary transition'
                        } flex content-center items-center px-6 py-2 rounded-b-xl h-full text-md lg:text-lg cursor-pointer`}
                      >
                        <div>{route.text}</div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              <div className="md:ml-6 lg:ml-10 flex items-center ">
                {/* Bouton profil */}
                <button className="hidden md:flex bg-lighter-grey text-dark-grey rounded-full items-center text-sm p-3 hover:bg-dark-grey hover:text-lighter-grey transition focus:outline-none">
                  <span className="sr-only">Voir le menu utilisateur</span>
                  <Icon path={mdiAccountOutline} size="1.5rem" />
                </button>

                {/* Dropdown Cart */}
                <CartMenu className="md:ml-6 lg:ml-10" />
              </div>
            </div>
          </div>
        </div>
        {/* Contenu menu burger */}
        {burgerMenuOpen && (
          <div className="md:hidden bg-reddish-brown text-white text-lg font-medium inset-0 fixed flex flex-col justify-between">
            <button
              className="rounded-full flex items-center pl-7 pt-5 focus:outline-none"
              id="burger-menu"
              aria-haspopup="true"
              onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
            >
              <span className="sr-only">Fermer le menu burger</span>
              <Icon path={mdiClose} size="1.5rem" />
            </button>
            {/* Routes */}
            <div className="flex flex-col justify-start items-center space-y-12">
              {routes.map((route) => {
                const isActive = route.path === router.route
                return (
                  <Link href={route.path} key={route.path}>
                    <div
                      className={`
                  cursor-pointer 
                  rounded-md 
                  px-4
                  py-2 
                  ${isActive && 'bg-white text-reddish-brown'}
                  `}
                    >
                      {route.text}
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Separator */}
            <div className="flex flex-row justify-center items-center">
              <div className="bg-light-transparent h-1 w-8/12"></div>
            </div>

            <div className="flex flex-row justify-center items-center space-x-2">
              <Icon path={mdiFacebook} size="2.1rem" />
              <Icon path={mdiInstagram} size="2.1rem" />
            </div>

            <div className="flex flex-row justify-center items-center space-x-2">
              <Link href="#">Mentions légales</Link>
              <div>•</div>
              <Link href="#">CGV</Link>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer for AppBar */}
      <div className="h-16 md:h-20"></div>
    </>
  )
}
