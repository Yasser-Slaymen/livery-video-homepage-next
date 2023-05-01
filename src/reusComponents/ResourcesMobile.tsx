import { useState } from "react";
import styles from "../styles/SolutionMobile.module.css";
import iconOpen from "../icons/iconOpen.webp";
import iconClose from "../icons/iconClose.webp";

export default function ResourcesMobile() {
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
            <p> RESOURCES </p>
            <img className={styles.OpenIcon} src={iconClose} alt="2" />
          </div>
        ) : (
          <div className={styles.SolutionMobile_Close}>
            <p> RESOURCES</p>

            <img className={styles.CloseIcon} src={iconOpen} alt="/" />
          </div>
        )}
      </button>
      {isOpen && (
        <ul className={styles.SolutionMobile_Items}>
          <li>
            <a href="https://www.liveryvideo.com/live-shopping-solution/">
              ALL RESOURCES
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/livery-usp-internal-communication/">
              INDUSTRIES PAGES
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/solution-livery-live-elearning/">
              COMPARE LIVERY TO OTHERS
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/gameshows-and-trivia/">
              EXPLAINER VIDEOS
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/livery-usp-sports-betting/">
              BLOG
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/livery-usp-over-the-top/">
              GLOSSARY
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/ultra-low-latency-video/">
              TECHNICAL DOCUMENTATION
            </a>
          </li>
        </ul>
      )}
    </section>
  );
}
