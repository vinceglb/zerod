import { CardEtaCat, CardEtaCatProps } from '../card/CardEtaCat'

export interface SectionEtaCatProps {
  className?: string | undefined
}

export const SectionEtaCat: React.FC<SectionEtaCatProps> = (props) => {
  const cats: CardEtaCatProps[] = [
    {
      title: 'Viande',
      photoUrl: '/images/jez-timms-DVRXFIH42d0-unsplash.png',
    },
    {
      title: 'Fruits et légumes',
      photoUrl: '/images/marisol-benitez-QvkAQTNj4zk-unsplash.png',
    },
    {
      title: 'Poisson et fruits de mer',
      photoUrl: '/images/jakub-kapusnak-vLQzopDRSNI-unsplash.png',
    },
    {
      title: 'Épicerie',
      photoUrl: '/images/monika-grabkowska-nVoDL1YDWRE-unsplash.png',
    },
    {
      title: 'Produits du terroir',
      photoUrl: '/images/hermes-rivera-aK6WGqxyHFw-unsplash.png',
    },
    {
      title: 'Plat tout prêt',
      photoUrl: '/images/eaters-collective-6rtm6a_aVyE-unsplash.png',
    },
  ]

  return (
    <div className={props.className}>
      <h2 className="font-bold text-center md:text-left text-reddish-brown text-2xl">
        Choisissez le produit à ajouter au panier
      </h2>
      <div className="mt-6 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cats.map((cat) => (
          <CardEtaCat key={cat.title} {...cat} />
        ))}
      </div>
    </div>
  )
}
