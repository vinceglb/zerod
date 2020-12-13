import { IndexSearch } from '../components/index/IndexSearch'
import { SectionEta } from '../components/section/SectionEta'
import { BobPage } from '../utils/layout-types-next'

interface RechercheProps {}

const RecherchePage: BobPage<RechercheProps> = () => (
  <>
    {/* Partie header */}
    <section className="bg-light-secondary rounded-b-3xl px-6 py-16">
      <div className="space-y-6 m-auto md:w-150">
        <p className="text-center font-medium">Recherche</p>
        <h1 className="text-center font-bold text-3xl">Les résultats à proximité</h1>
        <IndexSearch hideTitle />
      </div>
    </section>

    {/* Résultats de la recherche */}
    <div className="px-6 mx-auto my-8 lg:w-lg">
      <SectionEta />
    </div>
  </>
)

export default RecherchePage
