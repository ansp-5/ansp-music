import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useState, useEffect } from "react";

// データ
import { loveMusic } from '../data/love-music'

export function Lovemusic() {
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (loveMusic.length === 0) return;

        const randomIndex = Math.floor(Math.random() * loveMusic.length);
        setItem(loveMusic[randomIndex]);
    }, []);

    if (!item) {
        return <p>曲を選択中...</p>;
    }

    const videoUrl = new URL(item.url);

    const videoId =
        videoUrl.hostname === "youtu.be"
            ? videoUrl.pathname.slice(1)
            : videoUrl.searchParams.get("v");


  return (
        <div>
            <h2>{item.title}</h2>
            <p>アーティスト：{item.artist}</p>
            <p>作品：{item.works}</p>

            {videoId && (
                <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={`${item.title}のサムネイル`}
                        style={{
                            width: "320px",
                            maxWidth: "100%",
                            height: "auto",
                        }}
                    />
                </a>
            )}
        </div>
  )
}
