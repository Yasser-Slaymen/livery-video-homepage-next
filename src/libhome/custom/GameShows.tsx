import styles from "../../HomeStyles/custom/GameShows.module.css";
import dataHome from "../../utils/dataHome.json";
import GameShowsBtn from "../atomic/GameShowsBtn";
interface DataType {
  id?: number;
  componentName?: string;
  title?: string;
  description?: string;
}
const dataItem: DataType = dataHome[9];
export default function GameShows() {
  return (
    <section className={styles.GameShows} key={dataItem.id}>
      <article className={styles.GameShows_Cotainer}>
        <figure className={styles.GameShows_Backgroundimg}>
          <figcaption className={styles.GameShows_Content}>
            <p className={styles.GameShows_componentName}>
              {dataItem.componentName}
            </p>
            <h2>{dataItem.title}</h2>
            <article className={styles.GameShows_DscriptionBtn}>
              <p className={styles.GameShows_Dscription}>
                {dataItem.description}
              </p>
              <GameShowsBtn/>
            </article>
          </figcaption>
        </figure>
      </article>
    </section>
  );
}
