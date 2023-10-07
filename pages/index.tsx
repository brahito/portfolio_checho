import { Hero } from '@/components/UI'
import { Layout } from '@/components/layout'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio Sergio Peñaloza</title>
        <meta name="description" content="Este es mi portafolio para que le eches un vistazo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}
