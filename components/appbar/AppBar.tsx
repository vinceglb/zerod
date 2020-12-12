import { FunctionComponent as Component, useState } from 'react'
import Icon from '@mdi/react'
import {
  mdiCartOutline,
  mdiAccountOutline,
  mdiMenu,
  mdiClose,
  mdiFacebook,
  mdiInstagram,
} from '@mdi/js'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useOuterClick } from '../../utils/useOuterClick'

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
  const [dropDownMenuOpen, setDropDownMenuOpen] = useState(false)
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)
  const router = useRouter()

  const onClickOutsideCartDropdown = (): void => {
    if (dropDownMenuOpen) setDropDownMenuOpen(false)
  }
  const dropdownRef = useOuterClick(onClickOutsideCartDropdown)

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2>Logo Dosel</h2>

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
              <div className="md:ml-6 lg:ml-10 relative">
                <div>
                  <button
                    className="max-w-xs bg-secondary text-primary rounded-full flex items-center text-sm p-3 hover:bg-primary hover:text-secondary transition focus:outline-none"
                    id="user-menu"
                    aria-haspopup="true"
                    onClick={() => setDropDownMenuOpen(!dropDownMenuOpen)}
                  >
                    <span className="sr-only">Voir le panier</span>
                    <Icon path={mdiCartOutline} size="1.5rem" />
                  </button>
                </div>

                {dropDownMenuOpen && (
                  <div
                    className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition ease-out duration-100`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                    ref={dropdownRef}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Your Profile
                    </a>

                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </a>

                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
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
  )
}
