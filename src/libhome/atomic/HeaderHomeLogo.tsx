import styles from "../../HomeStyles/atomic/ButtomHome.module.css";
export default function HeaderHomeLogo() {
  return (
    
      <figure className={styles.Header_figure}>
        <img
          className={styles.Header_logo}
          src='/images/logo-dark-bg.png'
          alt="logo livery video"
        />
      </figure>
    
  );
}
