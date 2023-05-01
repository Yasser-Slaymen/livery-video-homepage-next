import data from "../utils/data.json";
import styles from "../styles/FormIdea.module.css";
import Icon_arrowRigth2 from "../images/icon _arrowRight2.png";
interface DataType {
  id: number;
  componentName?: string;
  title?: string;
  description?: string;
  img?: string;
}
const dataItem: DataType = data[6]; // specify the expected shape of the data object

export default function FormIdea() {
  return (
    <section className={styles.Seventh_Section} key={dataItem.id}>
      <section className={styles.Seventh_SectionTest}>
        <p className={styles.Seventh_Secondtitle}>{dataItem.componentName}</p>
        <h2>{dataItem.title}</h2>
        <section className={styles.SeventhSection_content}>
          <img
            className={styles.SeventhSection_contentImg}
            src={dataItem.img}
            alt="img"
          />
          <section>
            <section className={styles.SveventhSection_itemsListe}>
              <p>{dataItem.description}</p>
              <ul>
                <li>Event strategies matching your proposition</li>
                <li>How to build a live shopping event: Timeline tips</li>
                <li>Studio setup examples</li>
                <li>Use cases</li>
                <li>Business calculator: customise and see your personal costs & profits</li>
              </ul>
            </section>
            <a
              className={styles.SeventhSection_link}
              href="https://www.liveryvideo.com/live-shopping-blueprint/"
            >
              TO THE BLUEPRINT
              <span>
                <img
                  className={styles.SeventhSection_Icon_arrowRight}
                  src={Icon_arrowRigth2}
                  alt="arrowright"
                />
              </span>
            </a>
          </section>
        </section>
      </section>
    </section>
  );
}
