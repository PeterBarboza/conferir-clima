import { useEffect, useState } from "react"
import type { NextPage } from "next"
import Head from "next/head"

import process from "process"

import { getApiData } from "../services/getApiData"

import { IForecast } from "../interfaces/IForecast"

import styles from "../styles/home.module.scss"

import { Layout } from "../components/Layout"
import { Header } from "../components/Header"
import { Loader } from "../components/Loader"
import { MainCard } from "../components/MainCard"
import { WeekForecast } from "../components/WeekForecast"
import { WeekCard } from "../components/WeekCard"
import { Footer } from "../components/Footer"

const Home: NextPage = () => {
  const [apiData, setApiData] = useState<IForecast>()
  const url = process.env.NEXT_PUBLIC_API_URL as string

  async function getData(url: string) {
    const { results } = await getApiData(url)

    setApiData(results)
  }

  useEffect(() => {
    getData(url)
    console.log(url)
    //eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <Head>
        <title>Conferir clima</title>
        <meta name="description" content="Created by Pedro Barboza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.homeMain}>
        {
          !apiData ?
            <Loader loadingMessage="Carregando..." />
            :
            <MainCard {...apiData as IForecast} />
        }
        <WeekForecast>
          {
            !apiData ?
              <div />
              :
              apiData.forecast.map((item, index) => {
                return (
                  <WeekCard
                    date={item.date}
                    condition={item.condition}
                    description={item.description}
                    min={item.min}
                    max={item.max}
                    weekday={item.weekday}
                    key={index}
                  />
                )
              })
          }
        </WeekForecast>
      </main>
      <Footer />
    </Layout>
  )
}

export default Home
