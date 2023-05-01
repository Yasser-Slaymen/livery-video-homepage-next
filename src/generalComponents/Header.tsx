import styles from "../styles/Header.module.css";
import data from "../utils/data.json";
import DropdownMenu from "../reusComponents/Resourcse";
import LogoHeader from "../reusComponents/LogoHeader";
import HeaderButton from "../reusComponents/HeaderButton";
import Solutions from "../reusComponents/Solutions";
import ShowCases from "../reusComponents/ShowCases";
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

export default function Header() {
  return (
    <header>
      <nav className={styles.nav_bar} key={dataItem.id}>
        <LogoHeader />
        <ul className={styles.items_liste}>
          {dataItem.interactiveData?.map((item) => (
            <li className={styles.items_listeFirst} key={item.label}>
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
            <DropdownMenu />
          </li>

          {dataItem.pricingData?.map((item) => (
            <li className={styles.items_listeFirst} key={item.label}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
        <HeaderButton />
      </nav>
    </header>
  );
}
