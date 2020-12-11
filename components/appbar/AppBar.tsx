import { FunctionComponent as Component, useState } from 'react'
import Icon from '@mdi/react'
import { mdiCartOutline, mdiAccountOutline, mdiMenu } from '@mdi/js'
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
        <div className="flex items-center justify-between h-20">
          {/* Menu burger */}
          <div className="flex md:hidden">
            <button
              className="max-w-xs text-reddish-brown rounded-full flex items-center text-sm p-3 focus:outline-none"
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
                <div
                  className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition ease-out duration-100 ${
                    dropDownMenuOpen
                      ? 'transform opacity-100 scale-100'
                      : 'transform opacity-0 scale-95'
                  }`}
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contenu menu burger */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Dashboard
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Calendar
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Reports
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">Tom Cook</div>
              <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>
            <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Your Profile
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Settings
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
