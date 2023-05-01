import styles from "../styles/Solutions.module.css";
import { Link } from "react-router-dom";
import DropdownMenuIcon_a from "../icons/Vector.png";
import DropdownMenuIcon_b from "../icons/Vector_1.png";
import Headericon from "../images/Headericon_arrowRight.png";
export default function Solutions() {
  return (
    <section className={styles.SolutionsMenu_Section}>
      <Link className={styles.SolutionsMenu_title} to="/solutionspage">
        solutions{" "}
        <span>
          <img
            className={styles.SolutionsMenu__ShowIconA}
            src={DropdownMenuIcon_a}
            alt="icon"
          />
          <img
            className={styles.SolutionsMenu__ShowIconB}
            src={DropdownMenuIcon_b}
            alt="icon"
          />
        </span>
      </Link>

      <ul className={styles.SolutionsMenu_Content}>
        <li className={styles.SolutionsMenu_chiled1}>
          <a
            className={styles.SolutionsMenu_Headerlinks}
            href="https://www.liveryvideo.com/resources/"
          >
            Live shopping
          </a>
          <span>
            <img
              className={styles.SolutionsMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/blog/livery-solution-and-industry-pages/">
            Intienal communication
          </a>{" "}
          <span>
            <img
              className={styles.SolutionsMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/blog/livery-compared/">
            Live e-learing
          </a>
          <span>
            <img
              className={styles.SolutionsMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/blog/livery-explained/">
            Gameshows & trivia
          </a>
          <span>
            <img
              className={styles.SolutionsMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/blog/livery-cases/">
            Sportes & e-sports
          </a>
          <span>
            <img
              className={styles.SolutionsMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/blog/livery-articles/">
            Events & Hybird events
          </a>
          <span>
            <img
              className={styles.SolutionsMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/glossary/">
            Low latency live streaming
          </a>
          <span>
            <img
              className={styles.SolutionsMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
      </ul>
    </section>
  );
}
