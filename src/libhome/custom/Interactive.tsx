import styles from "../../HomeStyles/custom/Interactive.module.css";
import dataHome from "../../utils/dataHome.json";
import GetStartedBtn from "../atomic/GetStartedBtn";
interface DataType {
  id?: number;
  componentName?: string;
  title?: string;
  services?: {
    id: number;
    secondtitle: string;
    description: string;
    icon: string;
  }[];
}
const dataItem: DataType = dataHome[3];
export default function Interactive() {
  return (
    <section className={styles.Interactive_Sections} key={dataItem.id}>
      <p>{dataItem.componentName}</p>
      <h2>{dataItem.title}</h2>
      {/* services */}
      <ul className={styles.Services_Containar}>
        {dataItem.services?.map((item) => (
          <li key={item.id}>
            <figure className={styles.Services_Content}>
              <img  className={styles.Services_Icons} src={item.icon} alt="icons sevices" />
              <figcaption className={styles.Services_Description}>
                <h4 className={styles.Services_Secondtitle}>{item.secondtitle}</h4>
                <p>{item.description}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <GetStartedBtn />
    </section>
  );
}
