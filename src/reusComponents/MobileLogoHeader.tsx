import styles from "../styles/MobileMenu.module.css";
import logo_Footer from "../images/logo-dark-bg.png";

export default function FooterLogo() {
  return (
    <img
      className={styles.MobileMenuCon_headerlogo}
      src={logo_Footer}
      alt="logo livery video"
    />
  );
}
