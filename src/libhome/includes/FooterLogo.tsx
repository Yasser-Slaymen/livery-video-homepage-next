import styles from "./FooterLogo.module.css";
import logo_Footer from "../images/logo-dark-bg.png";

export default function FooterLogo() {
  return (
    <footer className={styles.Footer_Section}>
      <figure className={styles.footer_figure}>
        <img
          className={styles.footer_logo}
          src='../../images/logo-dark-bg.png'
          alt="logo livery video"
        />
      </figure>
    </footer>
  );
}
