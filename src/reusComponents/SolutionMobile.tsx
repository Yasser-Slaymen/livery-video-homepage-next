import { useState } from "react";
import styles from "../styles/SolutionMobile.module.css";
import iconOpen from "../icons/iconOpen.webp"
import iconClose from "../icons/iconClose.webp"

export default function SolutionMobile() {
  // button click
  const [isOpen, setOpen] = useState(false);

  return (
    <section className={styles.SolutionMobile}>
      <button
        className={styles.SolutionMobile_Btn}
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? (
          <div className={styles.SolutionMobile_Open}>
           <p> SOLUTIONS </p> 
            <img className={styles.OpenIcon} src={iconClose} alt="2" />
          </div>
        ) : (
          <div className={styles.SolutionMobile_Close}>
            <p> SOLUTIONS</p>
            
            <img className={styles.CloseIcon} src={iconOpen} alt="/" />
          </div>
        )}
      </button>
      {isOpen && (
       
          <ul className={styles.SolutionMobile_Items}>
            <li>
              <a href="https://www.liveryvideo.com/live-shopping-solution/">
                LIVE SHOPPING
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/livery-usp-internal-communication/">
                INTERNAL COMMUNICATION
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/solution-livery-live-elearning/">
                LIVE E-LEARNING
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/gameshows-and-trivia/">
                GAMESHOWS & TRIVIA
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/livery-usp-sports-betting/">
                SPORTS & E-SPORTS
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/livery-usp-over-the-top/">
                EVENTS & HYBRID EVENTS
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/ultra-low-latency-video/">
                LOW LATENCY LIVE STREAMING
              </a>
            </li>
          </ul>
        
      )}
    </section>
  );
}
