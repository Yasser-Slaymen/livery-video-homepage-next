import styles from "../../HomeStyles/custom/StartNow.module.css";
import dataHome from "../../utils/dataHome.json";
import StartNowBtn from "../atomic/StartNowBtn";

interface DataType {
  id?: number;
  componentName?: string;
  title?: string;
  description?: string;
  easyimg?: string;
}
const dataItem: DataType = dataHome[10];
export default function StartNow() {
  return (
    <section className={styles.StartNow} key={dataItem.id}>
      <p className={styles.StartNow_componentName}>{dataItem.componentName}</p>
      <h2>{dataItem.title}</h2>
      <p className={styles.StartNow_Description}>{dataItem.description}</p>
      <StartNowBtn/>
      <img className={styles.StartNow_img}  src={dataItem.easyimg} alt="imag" />
    </section>
  );
}


