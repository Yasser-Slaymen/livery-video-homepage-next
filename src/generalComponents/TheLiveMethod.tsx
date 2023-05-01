import styles from "../styles/TheLiveMethod.module.css";
import data from "../utils/data.json";
interface DataType {
  id: number;
  componentName?: string;
  title?: string;
  description?: string;
  imageDolar?: string;
  imageGirl?: string;
}
const dataItem: DataType = data[3]; // specify the expected shape of the data object

export default function TheLiveMethod() {
  return (
    <div className={styles.Fourthection} key={dataItem.id}>
      <img
        className={styles.fourth_imgDolar}
        src={dataItem.imageDolar}
        alt="icon"
      />
      <p className={styles.fourth_secondtitle}>{dataItem.componentName}</p>
      <section className={styles.fourth_Content}>
        <h2 className={styles.fourth_title}>{dataItem.title}</h2>
        <p className={styles.fourth_Sectiontext4}>
          Research shows that highly
          <b>engaged consumers spend 60% more per transaction</b>{" "}
          <a
            className={styles.fourth_Sectiontext4Link}
            href="https://ejournal.itbwigalumajang.ac.id/index.php/adv/article/view/835"
          >
            [Source]
          </a>
          .<b>Transform your audience intro active </b>and engaged customers
          with the rich range of Livery interactions."
        </p>
      </section>
      <img className={styles.fourth_imgGirl} src={dataItem.imageGirl} alt="/" />
    </div>
  );
}
