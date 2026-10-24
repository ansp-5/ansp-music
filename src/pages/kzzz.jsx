import Head from 'next/head'
import styles from '../styles/music.module.css'

import { useState, useEffect } from "react";

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

// データ
import { imagekzzz } from '../data/image-kzzz'

function getYouTubeId(url) {
    try {
        const parsed = new URL(url);

        if (parsed.hostname === "youtu.be") {
            return parsed.pathname.slice(1);
        }

        if (
            parsed.hostname === "www.youtube.com" ||
            parsed.hostname === "youtube.com" ||
            parsed.hostname === "m.youtube.com"
        ) {
            return (
                parsed.searchParams.get("v") ||
                parsed.pathname.match(/^\/(?:shorts|embed)\/([^/]+)/)?.[1] ||
                null
            );
        }

        return null;
    } catch {
        return null;
    }
}

export default function Home() {
    
  return (
    <div>
      <Head>
        <title>イメソン - ゼッツ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
            <div className={styles.musicList}>
                {imagekzzz.map((music) => {
                    const videoId = getYouTubeId(music.url);
                    
                    return (
                        <div key={music.url} className={styles.musicCard}>
                            <p>{music.title} / {music.artist}</p>
                            <p>{music.carname}</p>
                            <p>{music.reason}</p>

                            {videoId && (
                                <a
                                href={music.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.thumbnail}
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                        alt={`${music.title}のサムネイル`}
                                        style={{
                                            width: "320px",
                                            maxWidth: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </a>
                            )}
                        </div>
                    );
                })}
            </div>
      </main>

      <Footer />
    </div>
  )
}
