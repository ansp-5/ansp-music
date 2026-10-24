import Head from 'next/head'
import styles from '../styles/Home.module.css'

export function Header({theme}) {
    const nav_items = [
        {href: "/", name: "Home"},
        {href: "/kgeats", name: "仮面ライダーギーツ"},
        {href: "/kzzz", name: "仮面ライダーゼッツ"},
        {href: "/snal", name: "戦国 A LIVE"},
        {href: "/", name: "文豪ストレイドッグス"},
        {href: "/", name: "ペルソナ５"},
    ]

    const themes = {theme};

  return (
    <header className={styles.header}>
        <h1>イメソン</h1>

        {nav_items.map((item, index) => (
            <a key={index} href={item.href}>{item.name}</a>
        ))}
    </header>
  )
}
