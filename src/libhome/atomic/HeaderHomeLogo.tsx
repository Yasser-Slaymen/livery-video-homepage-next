import styles from "../../HomeStyles/atomic/ButtomHome.module.css";
import logo_Footer from "../../images/logo-dark-bg.png";
export default function HeaderHomeLogo() {
  return (
    
      <figure className={styles.Header_figure}>
        <img
          className={styles.Header_logo}
          src={logo_Footer}
          alt="logo livery video"
        />
      </figure>
    
  );
}
