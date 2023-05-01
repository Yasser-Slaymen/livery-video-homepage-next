import styles from "../styles/LiveryliveShopping.module.css";
import data from "../utils/data.json";
import Icon_arrowRigth from "../images/icon_arrowRight.png";
interface DataType {
  id: number;
  componentName?: string;
  title?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  timelinePc?: string;
  timelineMobile?: string;
}
const dataItem: DataType = data[4]; // specify the expected shape of the data object

export default function LiveryliveShopping() {
  return (
    <section className={styles.FifthSection} key={dataItem.id}>
      <article className={styles.FifthSection_content}>
        <section className={styles.FifthSection_content1}>
          <p>{dataItem.componentName}</p>
          <h2>{dataItem.title}</h2>
          <div className={styles.FifthSection_text1}>
            <p className={styles.FifthSection_text1_div1}>{dataItem.text1}</p>
            <p className={styles.FifthSection_text1_div2}>{dataItem.text2}</p>
          </div>
        </section>

        <img className={styles.FifthSection_imgPC} src={dataItem.timelinePc} alt="img" />
        <img
          className={styles.FifthSection_imgMobile}
          src={dataItem.timelineMobile}
          alt="img"
        />
        <section className={styles.FifthSection_text2}>
          <p>{dataItem.text3}</p>
          <a href="https://www.liveryvideo.com/showcase/">
            TO THE BLUEPRINT
            <span>
              <img
                className={styles.FifthSection_Icon_arrowRight}
                src={Icon_arrowRigth}
                alt="arrowright"
              />
            </span>
          </a>
        </section>
      </article>
    </section>
  );
}
