import styles from "../../styles/Header.module.css";
import stylehome from "../../HomeStyles/genralStyle/Headerhome.module.css";
import data from "../../utils/data.json";
import Resourcse from "../../libhome/custom/Resourcse";
import Solutions from "../../libhome/custom/Solutions";
import ShowCases from "../../libhome/custom/ShowCases";
import HeaderHomeButton from "../atomic/HeaderHomeButton";
import HeaderHomeLogo from "../atomic/HeaderHomeLogo";
interface DataType {
  id: number;
  interactiveData?: {
    label: string;
    link: string;
  }[];
  pricingData?: {
    label: string;
    link: string;
  }[];
}
const dataItem: DataType = data[13];

export default function HeaderHome() {
  return (
    <header>
      <nav className={styles.nav_bar} key={dataItem.id}>
        <HeaderHomeLogo />
        <ul className={styles.items_liste}>
          {dataItem.interactiveData?.map((item) => (
            <li className={stylehome.items_listeFirstHome} key={item.label}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
          <li>
            <Solutions />
          </li>
          <li>
            <ShowCases />
          </li>
          <li>
            <Resourcse />
          </li>

          {dataItem.pricingData?.map((item) => (
            <li className={stylehome.items_listeFirstHome} key={item.label}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
        <HeaderHomeButton />
      </nav>
    </header>
  );
}
// className={styles.items_listeFirst}
