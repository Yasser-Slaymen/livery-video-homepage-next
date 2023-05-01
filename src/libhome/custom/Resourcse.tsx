import styles from "../../HomeStyles/custom/Resources.module.css";
import DropdownMenuIcon_a from "../../icons/chevronHmoe.png";
import DropdownMenuIcon_b from "../../icons/Vector_1.png";
import Headericon from "../../images/Headericon_arrowRight.png";
import UpRightIconA from "../../icons/up-right-arrow.png";
import UpRightIconB from "../../icons/arrowright2.png";
export default function Resources() {
  return (
    <section className={styles.DropdownMenu_Section}>
      <a className={styles.DropdownMenu_title} href="https://www.liveryvideo.com/resources/">
        resources
        <span>
          <img
            className={styles.DropdownMenu__ShowIconA}
            src='/icons/chevronHmoe.png'
            alt="icon"
          />
          <img
            className={styles.DropdownMenu__ShowIconB}
            src='/icons/Vector_1.png'
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
              src='/images/Headericon_arrowRight.png'
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
              src='/images/Headericon_arrowRight.png'
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
              src='/images/Headericon_arrowRight.png'
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
              src='/images/Headericon_arrowRight.png'
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
              src='/images/Headericon_arrowRight.png'
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/blog/livery-articles/">Blog</a>
          <span>
            <img
              className={styles.DropdownMenu_Headericon}
              src='/images/Headericon_arrowRight.png'
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://www.liveryvideo.com/glossary/">Gossary</a>
          <span>
            <img
              className={styles.DropdownMenu_Headericon}
              src='/images/Headericon_arrowRight.png'
              alt="icon"
            />
          </span>
        </li>
        <li>
          <a href="https://docs.liveryvideo.com/">Techical decumentation</a>
          <span>
            <img
              className={styles.DropdownMenu_HeadericonA}
              src='/icons/up-right-arrow.png'
              alt="icon"
            />
            <img
              className={styles.DropdownMenu_HeadericonB}
              src='/icons/arrowright2.png'
              alt="icon"
            />
          </span>
        </li>
      </ul>
    </section>
  );
}

