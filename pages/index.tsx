import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styleIndex from './index.module.css'
import { NextPage } from 'next'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'

interface Props {
  // launch: {
  //   mission: string
  //   site: string
  //   timestamp: number
  //   rocket: string
  // }
}

const IndexPage: NextPage<Props> = observer((/*{ launch }*/) => {
  // const date = new Date(launch.timestamp)
  // const { userStore } = useStores()
  // const user = userStore.user

  // const onClick = (): void => {
  //   userStore.setUser({
  //     name: 'VinceBg',
  //   })
  // }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Header */}
        <section className={`bg-light-secondary flex flex-col ${styleIndex.head}`}>
          {/* Partie textes */}
          <div className="w-full md:w-2/3 2xl:w-3/5 flex flex-col text-center justify-center items-center">
            <h1 className="font-bold text-5xl text-reddish-brown leading-snug mb-8">
              Soutenez vos commerces
              <br />
              de proximité préféres
            </h1>
            <p className="text-xl font-medium text-light-grey">
              Tous les commerces de bouche de votre
              <br />
              quartier disponibles en click and collect
            </p>

            {/* <SearchIndex className="w-4/5 2xl:w-120" /> */}
          </div>
          {/* Partie image */}
          <div className="w-full md:w-1/3 2xl:w-2/5 relative">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/jimmy-dean-4ngFvOjh4TI-unsplash.jpg"
              alt="todo"
              priority
            />
          </div>
        </section>

        {/* Sections */}
        <div className="flex flex-col justify-center items-center mt-10">
          <div>
            {/* <SectionMarket className="mb-20" /> */}
            {/* <SectionPref className="mb-20" /> */}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
})

export default IndexPage
