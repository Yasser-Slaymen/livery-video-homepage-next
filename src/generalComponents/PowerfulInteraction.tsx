import data from "../utils/data.json";
import styles from "../styles/PowerFul.module.css";
import Icon_arrowRigth from "../images/icon_arrowRight.png";

interface DataType {
  id: number;
  componentName?: string;
  description?: string;
  imgPc1?: string;
  imgPc2?: string;
  imgMob1?: string;
  imgMob2?: string;
}
const dataItem: DataType = data[7]; // specify the expected shape of the data object
export default function PowerfulInteraction() {
  return (
    <div className={styles.PowerfulSection} key={dataItem.id}>
      <section className={styles.PowerfulSection_1}>
        <h2>{dataItem.componentName}</h2>
        <p>{dataItem.description}</p>
      </section>
      <section className={styles.PowerfulSection_imgPc}>
        <img
          className={styles.PowerfulSection_imgPc1}
          src={dataItem.imgPc1}
          alt="img"
        />
        <img className={styles.PowerfulSection_imgPc2} src={dataItem.imgPc2} alt="img" />
      </section>
      <section className={styles.PowerfulSection_imgMobile}>
        <img src={dataItem.imgMob1} alt="img" />
        <img src={dataItem.imgMob2} alt="img" />
      </section>
      <section className={styles.PowerfulSection_Links}>
        <h3>And more...</h3>
        <p>This is just a selection of our interactions…</p>

        <a
          className={styles.powerful_link}
          href="https://www.liveryvideo.com/interactivity/"
        >
          ALL INTERACTIONS
          <span>
            <img
              className={styles.powerful_Icon_arrowRight}
              src={Icon_arrowRigth}
              alt="arrowright"
            />
          </span>
        </a>
      </section>
    </div>
  );
}
