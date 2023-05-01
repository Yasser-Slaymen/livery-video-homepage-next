import styles from "../styles/LiveVideo.module.css";
import data from "../utils/data.json";
import Icon_arrowRigth from "../images/icon_arrowRight.png";
interface DataType {
  id: number;
  componentName?: string;
  description?: string;
  image?: string;
}
const dataItem: DataType = data[8];

export default function LiveVdieo() {
  return (
    <section className={styles.Live_Section} key={dataItem.id}>
      <section className={styles.LiveSection_Container}>
        <section className={styles.LiveSection_content}>
          <h2>{dataItem.componentName}</h2>
          <p>{dataItem.description}</p>
        </section>

        <img
          className={styles.LiveSection_img}
          src={dataItem.image}
          alt="img"
        />
      </section>

      <a
        className={styles.LiveVideo_link}
        href="https://www.liveryvideo.com/showcase/"
      >
        ULTRA-LOW LATENCY VIDEO
        <span>
          <img
            className={styles.LiveVideo_Icon_arrowRight}
            src={Icon_arrowRigth}
            alt="arrowright"
          />
        </span>
      </a>
    </section>
  );
}
