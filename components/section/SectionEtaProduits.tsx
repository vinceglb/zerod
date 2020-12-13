import { CardEtaProduit, CardEtaProduitProps } from '../card/CardEtaProduit'

export interface SectionEtaProduitsProps {
  className?: string | undefined
}

export const SectionEtaProduits: React.FC<SectionEtaProduitsProps> = (props) => {
  const produits: CardEtaProduitProps[] = [
    {
      title: 'Artichauts',
      price: '1.80€/unité',
      photoUrl: '/images/martin-adams-5XXfyMMan84-unsplash.jpg',
    },
    {
      title: 'Piments',
      price: '1.80€/unité',
      photoUrl: '/images/elle-hughes-sFU3-fwZ6nQ-unsplash.jpg',
    },
    {
      title: 'Patates',
      price: '1.80€/unité',
      photoUrl: '/images/lars-blankers-B0s3Xndk6tw-unsplash.jpg',
    },
    {
      title: 'Fraises',
      price: '1.80€/unité',
      photoUrl: '/images/anton-darius-FCrgmqqvl-w-unsplash.jpg',
    },
    {
      title: 'Ail de Lautrec',
      price: '1.80€/unité',
      photoUrl: '/images/AdobeStock_94351494-ail.jpg',
    },
    {
      title: 'Mûres',
      price: '1.80€/unité',
      photoUrl: '/images/jeremy-ricketts-h4zs8fbybq4-unsplash.jpg',
    },
  ]

  return (
    <div className={props.className}>
      <div className="mt-6 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {produits.map((p) => (
          <CardEtaProduit key={p.title} {...p} />
        ))}
      </div>
    </div>
  )
}
