import { NextPage } from 'next'
import { IndexHeader } from '../components/index/IndexHeader'
import { SectionMarket } from '../components/section/SectionMarket'
import { SectionPref } from '../components/section/SectionPref'

interface IndexProps {}

const IndexPage: NextPage<IndexProps> = () => (
  <div>
    <IndexHeader />
    <div className="my-8">
      <SectionMarket />
      <SectionPref className="mt-16" />
    </div>
  </div>
)

export default IndexPage
