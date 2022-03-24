import type { NextPage } from 'next'
import Head from 'next/head'

import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Conferir clima</title>
        <meta name="description" content="Created by Pedro Barboza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </Layout>
  )
}

export default Home
