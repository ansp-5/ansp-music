import Head from 'next/head'
import styles from '../styles/music.module.css'

// 処理
import { getYouTubeId } from "../hooks/getYouTubeId";


export function Music_display({ imagesong }) {
    
  return (
            <div className={styles.musicList}>
                {imagesong.map((music) => {
                    const videoId = getYouTubeId(music.url);
                    
                    return (
                        <div key={music.url} className={styles.musicCard}>
                            <p>{music.title} / {music.artist}</p>
                            <p>{music.carname}</p>
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

                            <p>{music.reason}</p>
                        </div>
                    );
                })}
            </div>

  )
}
