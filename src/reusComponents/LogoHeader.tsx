import logo from "../images/LogoBlack.png";
import styles from "../styles/Header.module.css";
export default function LogoHeader() {
  return <img className={styles.nav_logo} src={logo} alt="logo livery video" />;
}
