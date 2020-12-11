import { NextPage } from 'next'
import { Card } from '../components/card/Card'
import { CardEta } from '../components/card/CardEta'

const PageCard: NextPage = () => {
  return (
    <div className="bg-blue-200 p-10">
      <Card />
      <CardEta />
    </div>
  )
}

export default PageCard
