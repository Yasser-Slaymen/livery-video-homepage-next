import { useState } from "react";
import styles from "../styles/SolutionMobile.module.css";
import iconOpen from "../icons/iconOpen.webp"
import iconClose from "../icons/iconClose.webp"

export default function ShowCasesMobile() {
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
           <p> SHOWCASES </p> 
            <img className={styles.OpenIcon} src={iconClose} alt="2" />
          </div>
        ) : (
          <div className={styles.SolutionMobile_Close}>
            <p> SHOWCASES</p>
            
            <img className={styles.CloseIcon} src={iconOpen} alt="/" />
          </div>
        )}
      </button>
      {isOpen && (
       
          <ul className={styles.SolutionMobile_Items}>
            <li>
              <a href="https://www.liveryvideo.com/live-shopping-solution/">
              ALL SHOWCASES
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/livery-usp-internal-communication/">
              SPORTS & E-SPORTS
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/solution-livery-live-elearning/">
              E-COMMERCE
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/gameshows-and-trivia/">
              BUSINESS EVENTS
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/livery-usp-sports-betting/">
              LIVE ENTERTAINMENT & EVENTS
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/livery-usp-over-the-top/">
              OTT & SOCIAL VIDEO
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/ultra-low-latency-video/">
              NEWS & FINANCE
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/ultra-low-latency-video/">
              BETTING & GAMBLING
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/ultra-low-latency-video/">
              LEARNING & DEVELOPMENT
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/ultra-low-latency-video/">
              LIVE GAMESHOW & TRIVIA
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/ultra-low-latency-video/">
              LIVE GAMESHOW & TRIVIA
              </a>
            </li>
          </ul>
        
      )}
    </section>
  );
}
