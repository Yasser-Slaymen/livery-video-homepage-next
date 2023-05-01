import styles from '../../HomeStyles/custom/RaiseLive.module.css'
import dataHome from "../../utils/dataHome.json";

interface DataType {
    id?: number;
    componentName?: string;
    title?: string;
    img?: string;
    text1?: string;
    text2?: string;
    text3?: string;
  }
  const dataItem: DataType = dataHome[4];
export default function RaiseLive() {
    return(
        <section className={styles.RaiseLive_Section}>
        <p className={styles.RaiseLive_Componentname}>{dataItem.componentName}</p>
        <h2 className={styles.RaiseLive_heading}>{dataItem.title}</h2>
        <article className={styles.RaiseLive_Text} >
        <p className={styles.RaiseLive_Text}>{dataItem.text1}</p>
        <p className={styles.RaiseLive_Text}>{dataItem.text2}</p>
        <p className={styles.RaiseLive_Text}>{dataItem.text3}</p>
        </article >
        <img className={styles.RaiseLive_Img} src={dataItem.img} alt="women" />
        </section>
    )
}