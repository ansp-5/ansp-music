import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Lovemusic } from '../components/Lovemusic'

// データ
import { loveMusic } from '../data/love-music'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>イメソン</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Lovemusic />
      </main>

      <Footer />
    </div>
  )
}
