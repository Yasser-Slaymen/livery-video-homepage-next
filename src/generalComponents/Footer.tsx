import styles from "../styles/Footer.module.css";
import data from "../utils/data.json";
import FooterLogo from "../reusComponents/FooterLogo";
import SearchGoogle from "../reusComponents/SearchGoogle";
import { Link } from "react-router-dom";

interface DataType {
  id?: number;
  componentName?: string;
  myLeftList?: {
    name: string;
    link: string;
  }[];
  myReightList?: {
    name: string;
    link: string;
  }[];
}
const dataItem: DataType = data[12];
export default function Footer() {
  return (
    <footer className={styles.Footer_Section} key={dataItem.id}>
      <section className={styles.Footer_Containar}>
        <figure className={styles.Footer_LogoComponent}>
          <FooterLogo />
        </figure>
        {/* links left */}
        <ul className={styles.FooterSection_itemsListe}>
        <li><Link  className={styles.FooterSection_itemsListeLink} to="/">Home</Link></li>

          {dataItem.myLeftList?.map((item) => (
            <li key={item.name}>
              <a
                className={styles.FooterSection_itemsListeLink}
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <article className={styles.FooterSection_Search}>
          <SearchGoogle />
        </article>
        <ul className={styles.FooterSection_itemsListe}>
          {dataItem.myReightList?.map((item) => (
            <li key={item.name}>
              <a
                className={styles.FooterSection_itemsListeLink}
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <a
        className={styles.Footer_Containarbtn}
        href="https://www.liveryvideo.com/newsletter/"
      >
        SUBSCRIBE TO THE NEWSLETTER
      </a>
      <section className={styles.FooterSection_copyRieght}>
        <span>COPYRIGHTS 2023</span>
        <span>PRIVACY</span>
      </section>
    </footer>
  );
}
