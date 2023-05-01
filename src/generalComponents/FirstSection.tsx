import data from "../utils/data.json";
import styles from "../styles/FirstSection.module.css";
import MobileMenu from "../reusComponents/MobileMenu";

interface DataType {
  id: number;
  componentName: string;
  title?: string;
  text?: string;
}
const dataItem: DataType = data[0]; // specify the expected shape of the data object

export default function FirstSection() {
  return (
    <section className={styles.FirstSection} key={dataItem.id}>
      <MobileMenu />
      <article className={styles.FirstSection_content}>
        <p className={styles.FirstSection_SecondTitle}>
          {dataItem.componentName}
        </p>
        <h1>{dataItem.title}</h1>
        <p className={styles.FirstSection_text}>
          {dataItem.text} [
          <a
            className={styles.FirstSection_lik}
            href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/its-showtime-how-live-commerce-is-transforming-the-shopping-experience"
          >
            source
          </a>
          ]
        </p>
      </article>
    </section>
  );
}
