import styles from "../styles/Livery.module.css";
import data from "../utils/data.json";
interface DataType {
  id: number;
  secondtitle?: string;
  title?: string;
}
const dataItem: DataType = data[1]; // specify the expected shape of the data object

export default function Livery() {
  return (
    <section className={styles.Second_Section} key={dataItem.id}>
      <article>
        <p className={styles.SecondSection_p}>{dataItem.secondtitle}</p>
        <h2 className={styles.Second_Sectiontext}>{dataItem.title}</h2>
      </article>
    </section>
  );
}
