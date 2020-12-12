import { BobPage } from '../utils/layout-types-next'
import { IndexHeader } from '../components/index/IndexHeader'
import { SectionMarket } from '../components/section/SectionMarket'
import { SectionPref } from '../components/section/SectionPref'

interface IndexProps {}

const IndexPage: BobPage<IndexProps> = () => (
  <div>
    <IndexHeader />
    <div className="my-8 lg:w-lg mx-auto">
      <SectionMarket />
      <SectionPref className="mt-16" />
    </div>
  </div>
)

export default IndexPage
