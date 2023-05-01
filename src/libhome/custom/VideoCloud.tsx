import dataHome from "../../utils/dataHome.json";
import styles from "../../HomeStyles/custom/VideoCloud.module.css";
interface DataType {
  id: number;
  componentName?: string;
  text?: string;
}
const dataItem: DataType = dataHome[0];
export default function VideoCloud() {
  return (
    <article   className={styles.VideoCloud} key={dataItem.id}>
      <h1 className={styles.heading_title}>{dataItem.componentName}</h1>
      <p>{dataItem.text}</p>
    </article>
  );
}
