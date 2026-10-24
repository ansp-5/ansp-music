import Head from 'next/head'
import styles from '../styles/music.module.css'

import { useState, useEffect } from "react";

// コンポーネント
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Music_display } from '../components/Music_display';

// データ
import { imagesong } from '../data/image-kzzz'
import { themes } from "../data/themes";


export default function Home() {
    const theme = themes.zzz;
    
  return (
    <div
        className={styles.page}
        style={{
            "--main-color": theme.main,
            "--sub-color": theme.sub,
            "--deco-color": theme.deco,
        }}
    >
      <Head>
        <title>イメソン - ゼッツ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header thems={theme} />

      <main>
        <Music_display imagesong={imagesong} />
      </main>

      <Footer thems={theme} />
    </div>
  )
}
