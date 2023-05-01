import styles from "../../HomeStyles/custom/LiveSports.module.css";
import dataHome from "../../utils/dataHome.json";
import MoreSportsBtn from "../atomic/MoreSportsBtn";
interface DataType {
  id?: number;
  componentName?: string;
  title?: string;
  description?: string;
}
const dataItem: DataType = dataHome[8];
export default function LiveSports() {
  return (
    <section className={styles.LiveSports} key={dataItem.id}>
      <article className={styles.LiveSports_Cotainer}>
        <figure className={styles.LiveSports_Backgroundimg}>
          <figcaption className={styles.LiveSports_Content}>
            <p className={styles.LiveSports_componentName}>
              {dataItem.componentName}
            </p>
            <h2>{dataItem.title}</h2>
            <article className={styles.LiveSports_DscriptionBtn}>
              <p className={styles.LiveSports_Dscription}>
                {dataItem.description}
              </p>
              < MoreSportsBtn />
            </article>
          </figcaption>
        </figure>
      </article>
    </section>
  );
}
