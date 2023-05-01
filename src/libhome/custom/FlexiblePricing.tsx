import styles from "../../HomeStyles/custom/FlexiblePricing.module.css";
import dataHome from "../../utils/dataHome.json";
import FlexibleBtn from "../atomic/FlexibleBtn";
import { CounterDisplay } from "../../Storage/ConnterDisplay";
interface DataType {
  id?: number;
  componentName?: string;
  title?: string;
}
const dataItem: DataType = dataHome[13];
export default function FexiblePricing() {
  return (
    <section className={styles.Fexible_Sections} key={dataItem.id}>
      <p className={styles.Fexible_SecondTitle}>{dataItem.componentName}</p>
      <h2 className={styles.Fexible_Title}>{dataItem.title}</h2>
      <article>
        <CounterDisplay />
        {/* <CounterButton /> */}
      </article>
      <FlexibleBtn />
    </section>
  );
}
