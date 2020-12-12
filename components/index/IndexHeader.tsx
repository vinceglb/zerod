import { NextPage } from 'next'
import Image from 'next/image'
import { IndexSearch } from './IndexSearch'

interface IndexHeader {}

export const IndexHeader: NextPage<IndexHeader> = () => (
  <div className="flex flex-col px-6 items-center bg-light-secondary">
    {/* Partie textes */}
    <div className="py-16 text-center">
      <h1 className="font-bold text-3xl text-reddish-brown leading-snug mb-8">
        Soutenez vos commerces de proximité préféres
      </h1>
      <p className="font-medium text-light-grey">
        Tous les commerces de bouche de votre quartier disponibles en click and collect
      </p>
    </div>

    {/* Partie recherche */}
    <IndexSearch className="w-full" />

    {/* Partie image */}
    <div className="w-full h-72 my-16">
      <div className="w-full h-full relative">
        <Image
          src="/images/jimmy-dean-4ngFvOjh4TI-unsplash.jpg"
          alt="todo"
          priority={true}
          layout="fill"
          objectFit="cover"
          className="rounded-3xl "
        />
      </div>
    </div>
  </div>
)
