import { NextPage } from 'next'
import { observer } from 'mobx-react-lite'

interface Props {}

const IndexPage: NextPage<Props> = observer(() => {
  return <div>test</div>
})

export default IndexPage
