import styles from "../styles/GiveDemo.module.css";
import data from "../utils/data.json";
interface DataType {
  id: number;
  title?: string;
  componentName?: string;
  description?: string;
}
const dataItem: DataType = data[10];
export default function GiveDemo() {
  return (
    <section className={styles.LiveShoping_Section} key={dataItem.id}>
      <h2>{dataItem.title}</h2>
      <h3>{dataItem.componentName}</h3>
      <p>{dataItem.description}</p>
      <a href="https://www.liveryvideo.com/get-started/">BOOK A DEMO</a>
    </section>
  );
}

