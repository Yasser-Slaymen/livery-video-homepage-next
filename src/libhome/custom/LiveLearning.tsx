import styles from "../../HomeStyles/custom/LiveLearning.module.css";
import dataHome from "../../utils/dataHome.json";
import LearningBtn from "../atomic/LearningBtn";
interface DataType {
  id?: number;
  componentName?: string;
  title?: string;
  description?: string;
  peoleImg?: string;
  isImg?: string;
  ldSmoke?: string;
}
const dataItem: DataType = dataHome[6];
export default function LiveLearning() {
  return (
    <section className={styles.Section_LiveLearning} key={dataItem.id}>
      <article className={styles.LiveLearning_Cotainer}>
        <figure className={styles.LiveLearning_Backgroundimg}>
          <img
            className={styles.LiveLearning_PeoleImg}
            src={dataItem.peoleImg}
            alt="/"
          />
          <img
            className={styles.LiveLearning_lsImg}
            src={dataItem.isImg}
            alt="/"
          />
          <img
            className={styles.LiveLearning_LdSmoke}
            src={dataItem.ldSmoke}
            alt="/"
          />
          <figcaption className={styles.LiveLearning_Content}>
            <p className={styles.LiveLearning_componentName}>
              {dataItem.componentName}
            </p>
            <h2>{dataItem.title}</h2>
            <article className={styles.LiveLearning_DscriptionBtn}>
              <p className={styles.LiveLearning_Dscription}>
                {dataItem.description}
              </p>
              <LearningBtn />
            </article>
          </figcaption>
        </figure>
      </article>
    </section>
  );
}
