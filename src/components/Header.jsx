import Head from 'next/head'
import styles from '../styles/Home.module.css'

export function Header() {
    const nav_items = [
        {href: "/", name: "Home"},
        {href: "/", name: "仮面ライダーギーツ"},
        {href: "/", name: "仮面ライダーゼッツ"},
        {href: "/", name: "戦国 A LIVE"},
        {href: "/", name: "文豪ストレイドッグス"},
        {href: "/", name: "ペルソナ５"},
    ]

  return (
    <header>
        <h1>イメソン</h1>

        {nav_items.map((item, index) => (
            <a key={index} href={item.href}>{item.name}</a>
        ))}
    </header>
  )
}
