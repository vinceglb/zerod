import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styleIndex from './index.module.css'
import { NextPage } from 'next'
import { observer } from 'mobx-react-lite'
import { SectionPref } from '../components/section/SectionPref'
import { SectionMarket } from '../components/section/SectionMarket'
import { mdiMapMarker } from '@mdi/js'
import Icon from '@mdi/react'
import { Button } from '../components/button/Button'

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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={`bg-light-secondary flex ${styleIndex.head}`}>
          <div className="w-full text-center flex flex-col justify-center items-center">
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

            <div
              className={`bg-white w-96 h-48 rounded-3xl text-left p-8 mt-20 ${styleIndex.cardSearch}`}
            >
              <p className="font-medium text-sm text-light-grey">
                Entrez votre adresse pour trouver les commerces à proximité
              </p>
              <div className="bg-light-secondary border-primary border-2 rounded-full flex flex-row items-center">
                <div className="px-8 flex flex-row flex-grow">
                  <Icon path={mdiMapMarker} size="1.75rem" className="text-transparent-primary" />
                  <input
                    type="text"
                    className="bg-light-secondary placeholder-transparent-primary w-full focus:outline-none font-medium text-lg"
                    placeholder="Saisissez votre adresse"
                  />
                </div>
                <Button className="py-5">Rechercher</Button>
              </div>
            </div>
          </div>

          <img
            className="object-cover w-1/2"
            src="/images/jimmy-dean-4ngFvOjh4TI-unsplash.jpg"
            alt="todo"
          />
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
          <div>
            <SectionMarket className="mb-20" />
            <SectionPref className="mb-20" />
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
