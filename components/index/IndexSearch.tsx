import { mdiMagnify, mdiMapMarker } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'

export interface IndexSearchProps {
  hideTitle?: boolean | undefined
  className?: string | undefined
}

export const IndexSearch: React.FC<IndexSearchProps> = ({ hideTitle, className: custom }) => (
  <div className={custom}>
    <div className="bg-white rounded-3xl shadow-xl p-5">
      {/* Titre */}
      <p className={`font-medium text-sm text-gray-400 mb-4 ${hideTitle ? 'hidden' : ''}`}>
        Trouver les commerces à proximité
      </p>

      {/* Search field */}
      <div className="bg-light-secondary border-primary border-2 rounded-full flex flex-row items-center">
        <div className="px-3 flex flex-row flex-grow">
          <Icon path={mdiMapMarker} size="1.75rem" className="text-transparent-primary" />
          <input
            type="text"
            className="bg-light-secondary placeholder-transparent-primary w-full focus:outline-none font-medium text-sm ml-2"
            placeholder="Saisissez votre adresse"
          />
        </div>

        {/* Le -mr et le -my sont pour éviter des glitchs avec la bordure */}
        <button className="bg-primary rounded-full p-3 text-white text-sm font-bold -mr-px -my-px">
          <Link href="/recherche">
            <Icon path={mdiMagnify} size="1.75rem" className="text-white" />
          </Link>
        </button>
      </div>
    </div>
  </div>
)
