import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © 2026 Uncode Store. Todos os direitos reservados.
        </p>
        <p className={styles.text}>Desenvolvido com Next.js e TypeScript</p>
      </div>
    </footer>
  );
}
