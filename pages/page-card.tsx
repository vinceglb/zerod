import { NextPage } from 'next'
import { Card } from '../components/card/Card'
import { CardEta } from '../components/card/CardEta'
import { SectionPref } from '../components/section/SectionPref'

const PageCard: NextPage = () => {
  return (
    <div className="bg-blue-200 p-10">
      <Card />
      <CardEta />
      <SectionPref />
    </div>
  )
}

export default PageCard
