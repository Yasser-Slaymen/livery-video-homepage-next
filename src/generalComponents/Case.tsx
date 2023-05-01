import data from "../utils/data.json";
import styles from "../styles/Case.module.css";
import Icon_arrowRigth from "../images/icon_arrowRight.png";
interface DataType {
  id: number;
  componentName?: string;
  title?: string;
  text?: string;
  img?: string;
}
const dataItem: DataType = data[5]; // specify the expected shape of the data object
export default function Case() {
  return (
    <section className={styles.SixthSection} key={dataItem.id}>
      <section className={styles.SixthSection_content1}>
        <p className={styles.SixthSection_Secondtitle}>{dataItem.componentName}</p>
        <h2>{dataItem.title}</h2>
        <p
          className={styles.SixthSection_text}
          
        > {dataItem.text}</p>
      </section>
      <section className={styles.interaction_container}>
        <div className={styles.interaction_numbers}>
          <div className={styles.numbers}>20 min</div>
          <p>per session</p>
        </div>
        <div className={styles.interaction_numbers}>
          <div className={styles.numbers}>4.000</div>
          <p>participants</p>
        </div>
        <div className={styles.interaction_numbers}>
          <div className={styles.numbers}>++</div>
          <p>brandvalue and brand loyalty with participants</p>
        </div>
      </section>

      <a
        className={styles.SixthSection_link}
        href="https://www.liveryvideo.com/showcase/"
      >
        MORE SHOWCASES
        <span>
          <img
            className={styles.SixthSection_Icon_arrowRight}
            src={Icon_arrowRigth}
            alt="arrowright"
          />
        </span>
      </a>
      <img
        className={styles.SixthSection_img}
        src={dataItem.img}
        alt="img"
      />
    </section>
  );
}
