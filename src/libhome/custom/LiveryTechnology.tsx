import styles from "../../HomeStyles/custom/LiveryTechnology.module.css";
import dataHome from "../../utils/dataHome.json";
import LiveVideoBtn from "../atomic/LiveVideoBtn";

interface DataType {
  id?: number;
  componentName?: string;
  title?: string;
  img?: string;
  text1?: string;
  text2?: string;
  text3?: string;
}
const dataItem: DataType = dataHome[5];
export default function LiveryTechnology() {
  return (
    <section className={styles.LiverTechnology_Section}>
      <p className={styles.LiverTechnology_Componentname}>
        {dataItem.componentName}
      </p>
      <h2 className={styles.LiverTechnology_heading}>{dataItem.title}</h2>
      <article className={styles.LiverTechnology_Text}>
        <p className={styles.LiverTechnology_Text}>{dataItem.text1}</p>
        <p className={styles.LiverTechnology_Text}>
          Learn about our{" "}
          <span style={{ color: "#929aff" }}>
            synchronized, ultra-low latency live video
          </span>{" "}
          & our incredibly engaging
          <span style={{ color: "#929aff" }}>live interactions.</span>Scale your
          live sessions up to hundreds, or millions of participants. Learn how
          we deliver the most well-rounded livestream on iOS, Android and Web
          apps.
        </p>
      </article>
      <img
        className={styles.LiverTechnology_Img}
        src={dataItem.img}
        alt="women"
      />
      <LiveVideoBtn />
    </section>
  );
}
