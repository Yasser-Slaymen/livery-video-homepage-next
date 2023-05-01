import styles from "../styles/FooterLogo.module.css";
import logo_Footer from "../images/logo-dark-bg.png";

export default function FooterLogo() {
  return (
    <footer className={styles.Footer_Section}>
      <figure className={styles.footer_figure}>
        <img
          className={styles.footer_logo}
          src={logo_Footer}
          alt="logo livery video"
        />
      </figure>
    </footer>
  );
}
