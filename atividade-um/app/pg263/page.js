import styles from "./pg263.module.css";

export default function pg263() {
  return (
    <div>
      <div className={styles.produtos}>
        <div className={styles.produto}>
          <img src="/tenis1.png" alt="Tênis 1" />
          <p>Tênis Runner</p>
          <p>R$ 199,90</p>
        </div>

        <div className={styles.produto}>
          <img src="/tenis2.png" alt="Tênis 2" />
          <p>Tênis Casual</p>
          <p>R$ 149,90</p>
        </div>

        <div className={styles.produto}>
          <img src="/tenis3.png" alt="Tênis 3" />
          <p>Tênis Esportivo</p>
          <p>R$ 229,90</p>
        </div>

        <div className={styles.produto}>
          <img src="/bota.png" alt="Tênis 4" />
          <p>Bota Urbana</p>
          <p>R$ 259,90</p>
        </div>

        <div className={styles.produto}>
          <img src="/sandalia.png" alt="Tênis 5" />
          <p>Sandália</p>
          <p>R$ 99,90</p>
        </div>
      </div>

      <footer className={styles.rodape}>
        <p>Loja da Bota</p>
      </footer>
    </div>
  );
}