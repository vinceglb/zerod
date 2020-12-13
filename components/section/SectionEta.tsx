import { CardEta, CardEtaProps } from '../card/CardEta'

export interface SectionEtaProps {
  className?: string | undefined
}

export const SectionEta: React.FC<SectionEtaProps> = (props) => {
  const etas: CardEtaProps[] = [
    {
      title: 'Le Paradis Gourmet',
      photoUrl: '/images/12525466_512843012232908_8715347469593450563_o-759x500.jpg',
      spe: 'Spécialités régionales • Vins • Épices',
      price: '€€',
    },
    {
      title: 'La Dulceria by la Manufacture',
      photoUrl: '/images/00e1024e-60aa-43dd-aadd-669fc556bedb.jpeg',
      spe: 'Desserts • Street Food',
      price: '€€€',
    },
    {
      title: 'El almacén',
      photoUrl: '/images/67402165_636590410162804_7588699881905061888_o.jpg',
      spe: 'Empanadas • Café Bio • Alfajores',
      price: '€',
    },
    {
      title: 'Fratelli Cifarelli',
      photoUrl: '/images/fratelli-cifarelli-epicerie-italienne-toulouscope-14-768x512.jpg',
      spe: 'Pâtes • Huiles • Charcuterie • Fromage frais',
      price: '€€',
    },
    {
      title: 'Ultramarinos Ana',
      photoUrl: '/images/Ultra_fuera_detalles-4.jpg',
      spe: 'Fruits et légumes bio • Charcuterie ibérique',
      price: '€€€',
    },
    {
      title: 'La tienda',
      photoUrl: '/images/12549058_1662404460681262_511336361054674306_n.jpg',
      spe: 'Jambons • Fromages • Charcuteries • Tapas',
      price: '€',
    },
  ]

  return (
    <section className={props.className}>
      {/* Partie header */}
      <div className="ml-6">
        <h1 className="font-bold text-reddish-brown text-2xl">Les pépites du coin</h1>
        <p className="text-light-grey">Mais chuuut ne le dites à personne</p>
      </div>

      <div className="mx-6 mt-4 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {etas.map((eta) => (
          <CardEta key={eta.title} {...eta} />
        ))}
      </div>
    </section>
  )
}
