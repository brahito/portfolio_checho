import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Layout } from '@/components/layout'
import { GridProyectos, Hero, HeroLittle } from '@/components/UI'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Proyectos</title>
        <meta name="description" content="Este es mi portafolio para que le eches un vistazo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className='container'>
          <HeroLittle />
          <GridProyectos />
        </div>
      </Layout>
    </>
  )
}
