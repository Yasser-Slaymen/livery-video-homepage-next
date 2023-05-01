// import styles from "../customStyle/ButtomHome.module.css";
import styles from "../../HomeStyles/atomic/ButtomHome.module.css"
export default function HeaderHomeButton() {
  return (
    <a
      className={styles.navhome_btn}
      href="https://www.liveryvideo.com/get-started/"
    >
      free trial
    </a>
  );
}
