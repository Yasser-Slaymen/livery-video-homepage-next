import styles from "../../HomeStyles/custom/LiveShoppingHome.module.css";
import dataHome from "../../utils/dataHome.json";
import MoreLiveShoppingBtn from "../atomic/MoreLiveShoppingBtn";
interface DataType {
  id?: number;
  componentName?: string;
  title?: string;
  description?: string;
}
const dataItem: DataType = dataHome[7];
export default function LiveShoppingHome() {
  return (
    <section className={styles.LiveShoppingHome} key={dataItem.id}>
      <article className={styles.LiveShoppingHome_Cotainer}>
        <figure className={styles.LiveShoppingHome_Backgroundimg}>
          <figcaption className={styles.LiveShoppingHome_Content}>
            <p className={styles.LiveShoppingHome_componentName}>
              {dataItem.componentName}
            </p>
            <h2>{dataItem.title}</h2>
            <article className={styles.LiveShoppingHome_DscriptionBtn}>
              <p className={styles.LiveShoppingHome_Dscription}>
                {dataItem.description}
              </p>
              <MoreLiveShoppingBtn/>
            </article>
          </figcaption>
        </figure>
      </article>
    </section>
  );
}
