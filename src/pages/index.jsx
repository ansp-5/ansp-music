import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useState, useEffect } from "react";

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

// データ
import { loveMusic } from '../data/love-music'

export default function Home() {
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (loveMusic.length === 0) return;

        const randomIndex = Math.floor(Math.random() * loveMusic.length);
        setItem(loveMusic[randomIndex]);
    }, []);

    if (!item) {
        return <p>曲を選択中...</p>;
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>イメソン</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div>
            <h2>{item.title}</h2>
            <p>アーティスト：{item.artist}</p>
            <p>作品：{item.works}</p>

            <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                YouTubeで再生する
            </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
