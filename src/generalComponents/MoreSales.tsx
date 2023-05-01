import styles from "../styles/MoreSales.module.css";
import data from "../utils/data.json";
interface DataType {
  id: number;
  title?: string;
  componentName?: string;
  description?: string;
  img?: string;
}
const dataItem: DataType = data[9];

export default function MoreSales() {
  return (
    <section className={styles.MoreSales_Section} key={dataItem.id}>
      <section className={styles.MoreSales_Containar1}>
        <img className={styles.MoreSales_img} src={dataItem.img} alt="img" />
        <section className={styles.MoreSales_Containar}>
          <section className={styles.MoreSales_Content}>
            <p className={styles.MoreSales_ContentScondtitle}>
              {dataItem.componentName}
            </p>
            <h2>{dataItem.title}</h2>
            <div className={styles.MoreSalesSection_itemsListe}>
              <p>{dataItem.description}</p>
              <ul>
                <li>Enrich customer profiles</li>
                <li>Data collection</li>
                <li>Improve conversion</li>
                <li>Enrich loyalty programs</li>
                <li>Attract new customers</li>
                <li>Community building</li>
                <li>Branding</li>
                <li>Brand experiences</li>
              </ul>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
