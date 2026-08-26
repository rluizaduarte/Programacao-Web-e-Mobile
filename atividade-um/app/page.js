import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className = {styles.page}>

      <header className = {styles.header}>
        <h3>Programação Web e Mobile - 2026.2</h3>
        <a href="https://christianosantos.com.br/files/cs1/construcao-de-sites-1.12.pdf" target="blank_">Material</a>
      </header>

      <main className = {styles.main}>
        <nav className = {styles.nav}>
          <Link href="/pg210" target="blank_">Exercício da página 210</Link>
          <Link href="/pg231" target="blank_">Exercício da página 231</Link>
          <Link href="/pg246" target="blank_">Exercício da página 246</Link>
          <Link href="/pg263" target="blank_">Exercício da página 263</Link>
        </nav>
      </main>

      <footer className = {styles.footer}>
        <h3>Rielly Luiza Duarte da Silva - 5° período</h3>
        <nav className = {styles.nav}>
          <a href="https://github.com/rluizaduarte" target="blank_">GitHub</a>
          <a href="https://www.linkedin.com/in/rielly-duarte-370282332/" target="blank_">Linkedin</a>
        </nav>
      </footer>

    </div>
  )
}