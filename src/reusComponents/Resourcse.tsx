import styles from "../styles/Resources.module.css";
import DropdownMenuIcon_a from "../icons/Vector.png";
import DropdownMenuIcon_b from "../icons/Vector_1.png";
import Headericon from "../images/Headericon_arrowRight.png";
import UpRightIconA from "../icons/up-right-arrow.png";
import UpRightIconB from "../icons/arrowright2.png";
export default function DropdownMenu() {
  return (
    <section className={styles.DropdownMenu_Section}>
      <a className={styles.DropdownMenu_title} href="https://www.liveryvideo.com/resources/">
        resources
        <span>
          <img
            className={styles.DropdownMenu__ShowIconA}
            src={DropdownMenuIcon_a}
            alt="icon"
          />
          <img
            className={styles.DropdownMenu__ShowIconB}
            src={DropdownMenuIcon_b}
            alt="icon"
          />
        </span>
      </a>

      <ul className={styles.DropdownMenu_Content}>
        <li className={styles.DropdownMenu_chiled1}>
          <a
            className={styles.DropdownMenu_Headerlinks}
            href="https://www.liveryvideo.com/resources/"
          >
            All resources
          </a>
          <span>
            <img
              className={styles.DropdownMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/blog/livery-solution-and-industry-pages/">
            Solutions and industry pages
          </a>{" "}
          <span>
            <img
              className={styles.DropdownMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/blog/livery-compared/">
            Compare Livery to others
          </a>
          <span>
            <img
              className={styles.DropdownMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/blog/livery-explained/">
            Explainer video
          </a>
          <span>
            <img
              className={styles.DropdownMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/blog/livery-cases/">
            Case videos
          </a>
          <span>
            <img
              className={styles.DropdownMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/blog/livery-articles/">Blog</a>
          <span>
            <img
              className={styles.DropdownMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/glossary/">Gossary</a>
          <span>
            <img
              className={styles.DropdownMenu_Headericon}
              src={Headericon}
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://docs.liveryvideo.com/">Techical decumentation</a>
          <span>
            <img
              className={styles.DropdownMenu_HeadericonA}
              src={UpRightIconA}
              alt="icon"
            />
            <img
              className={styles.DropdownMenu_HeadericonB}
              src={UpRightIconB}
              alt="icon"
            />
          </span>
        </li>
      </ul>
    </section>
  );
}

