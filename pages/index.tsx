import type { NextPage } from "next"
import Head from "next/head"

import styles from "../styles/home.module.scss"

import { Layout } from "../components/Layout"
import { Header } from "../components/Header"
import { MainCard } from "../components/MainCard"
import { WeekForecast } from "../components/WeekForecast"

//TODO: tirar mock e incluir api
import mock from "../utils/mock.json"
import { WeekCard } from "../components/WeekCard"

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Conferir clima</title>
        <meta name="description" content="Created by Pedro Barboza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.homeMain}>
        <MainCard {...mock} />
        <WeekForecast>
          <WeekCard />
          <WeekCard />
          <WeekCard />
          <WeekCard />
          <WeekCard />
          <WeekCard />
          <WeekCard />
        </WeekForecast>
      </main>
    </Layout>
  )
}

export default Home
