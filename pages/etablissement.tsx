import Image from 'next/image'
import { SectionEtaCat } from '../components/section/SectionEtaCat'
import { BobPage } from '../utils/layout-types-next'

interface EtablissementProps {}

const EtablissementPage: BobPage<EtablissementProps> = () => (
  <>
    {/* Partie header */}
    <section className="bg-light-secondary rounded-b-3xl px-6 py-16">
      <div className="space-y-6 m-auto md:w-150">
        <p className="text-center font-medium text-reddish-brown">Épicerie</p>
        <h1 className="text-center font-bold text-3xl text-reddish-brown">Le paradis gourmet</h1>
        <p className="text-center font-medium text-reddish-brown">
          Spécialités régionales • Vins • Épices
        </p>
        <p className="text-center font-light text-reddish-brown">
          Le Paradis Gourmet est une véritable épicerie fine à l’ancienne vous pourrez y découvrir
          toutes les spécialités de notre région (cassoulet, foie gras,…) ainsi que des épices, des
          vins et bien d’autres produits artisanaux.
        </p>
        <div className="bg-red-500 h-48 rounded-3xl relative overflow-hidden">
          <Image
            src="/images/12525466_512843012232908_8715347469593450563_o-759x500.jpg"
            alt="todo"
            layout="fill"
            objectFit="cover"
            quality="60"
          />
        </div>
      </div>
    </section>

    {/* Partie de contenu */}
    <div className="px-6 mx-auto my-8 lg:w-lg">
      <SectionEtaCat />
    </div>
  </>
)

export default EtablissementPage
