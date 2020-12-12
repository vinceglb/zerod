import { NextPage } from 'next'
import Image from 'next/image'
import { IndexSearch } from './IndexSearch'

interface IndexHeader {}

export const IndexHeader: NextPage<IndexHeader> = () => (
  <div className="flex flex-col md:flex-row md:h-4/5-screen px-6 md:px-0 items-center bg-light-secondary">
    <div className="w-full md:px-6">
      <div className="m-auto xl:w-150">
        {/* Partie textes */}
        <div className="py-16 text-center">
          <h1 className="font-bold text-3xl xl:text-5xl text-reddish-brown leading-snug mb-8">
            Soutenez vos commerces de proximité préféres
          </h1>
          <p className="font-medium text-light-grey">
            Tous les commerces de bouche de votre quartier disponibles en click and collect
          </p>
        </div>

        {/* Partie recherche */}
        <IndexSearch />
      </div>
    </div>

    {/* Partie image */}
    <div className="w-full my-16 md:my-0 md:h-full">
      <div className="h-72 md:h-full relative">
        <Image
          src="/images/jimmy-dean-4ngFvOjh4TI-unsplash.jpg"
          alt="todo"
          priority={true}
          layout="fill"
          objectFit="cover"
          className="rounded-3xl md:rounded-none md:rounded-bl-3xl"
        />
      </div>
    </div>
  </div>
)
