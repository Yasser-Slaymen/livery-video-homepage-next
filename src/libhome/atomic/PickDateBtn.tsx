import styles from '../../HomeStyles/atomic/LiveVideoBtn.module.css'
import Icon_arrowRigth from "../../icons/Asset-2.svg";

export default function PickDateBtn(){
    return(
        <a
        className={styles.PickDateBtn}
        href="https://www.liveryvideo.com/get-started/"
      >
      pick a date
        <span>
          <img
            className={styles.LiveVideoBtn_Icon_arrowRight}
            src='/icons/Asset-2.webp'
            alt="arrowright"
          />
        </span>
      </a>
    )
}