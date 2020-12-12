import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { NextPage } from 'next'
import { observer } from 'mobx-react-lite'
import { SectionPref } from '../components/section/SectionPref'
import { SectionMarket } from '../components/section/SectionMarket'

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

      <main className={styles.main}>
        {/* <h1 className={`${styles.title} pb-6`}>
          Welcome to <a href="https://nextjs.org">Zerod</a> 🎉
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <h1>Next SpaceX Launch: {launch.mission}</h1>
        <p>
          {launch.rocket} will take off from {launch.site} on {date.toDateString()}
        </p>

        <div>User : {user?.name}</div>
        <div className={styles.grid}>
          <button className="bg-primary" onClick={onClick}>
            Je suis un bouton primaire
          </button>
          <Link href="/test">Vers test</Link>
        </div> */}

        <SectionMarket className="mb-20" />
        <SectionPref />
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
