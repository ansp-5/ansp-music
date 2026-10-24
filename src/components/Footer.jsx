import styles from '../styles/Home.module.css'


export function Footer({theme}) {
  const themes = {theme};

  return (
      <footer className={styles.footer}>
        <p>お好きにどうぞ。</p>
      </footer>
  )
}
