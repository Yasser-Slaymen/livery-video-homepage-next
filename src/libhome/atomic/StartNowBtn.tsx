import styles from '../../HomeStyles/atomic/LiveVideoBtn.module.css'
import Icon_arrowRigth from '../../icons/arrow-1.svg'
export default function StartNowBtn(){
    return(
        <a
        className={styles.LiveVideoBtn}
        href="https://www.liveryvideo.com/get-started/"
      >
      getstarted
        <span>
          <img
            className={styles.LiveVideoBtn_Icon_arrowRight}
            src='/icons/arrow-1.svg'
            alt="arrowright"
          />
        </span>
      </a>
    )
}