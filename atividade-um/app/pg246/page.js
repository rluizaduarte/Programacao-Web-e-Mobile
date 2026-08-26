import styles from "./pg246.module.css";

export default function pg246 () {
  return (
    <div>
      <p className = {styles.paragrafo}>
        Este é um parágrafo de exemplo para o exercício de CSS.
      </p>
      <a href="https://www.google.com" className={styles.link}>
        Link 1
      </a>
      <br />
      <a href="https://www.wikipedia.org" className={styles.link}>
        Link 2
      </a>
    </div>
  );
}