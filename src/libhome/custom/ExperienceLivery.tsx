import styles from "../../HomeStyles/custom/Experience.module.css";
import dataHome from "../../utils/dataHome.json";
import PickDateBtn from "../atomic/PickDateBtn";

interface DataType {
  id?: number;
  componentName?: string;
  title?: string;
  description?: string;
  easyimg?: string;
}
const dataItem: DataType = dataHome[11];
export default function ExperienceLivery() {
  return (
    <section className={styles.ExperienceLivery} key={dataItem.id}>
      <p className={styles.ExperienceLivery_componentName}>{dataItem.componentName}</p>
      <h2>{dataItem.title}</h2>
      <p className={styles.ExperienceLivery_Description}>{dataItem.description}</p>
      <PickDateBtn />
      <img className={styles.ExperienceLivery_img}  src={dataItem.easyimg} alt="imag" />
    </section>
  );
}


