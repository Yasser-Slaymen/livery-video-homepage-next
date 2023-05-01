import RaiseLive from "../custom/RaiseLive";
import styles from "../../HomeStyles/genralStyle/Technology.module.css";
import LiveryTechnology from "../custom/LiveryTechnology";
export default function Technology() {
  return (
    <section className={styles.Genral_Technology}>
      <RaiseLive />
      <LiveryTechnology />
    </section>
  );
}
