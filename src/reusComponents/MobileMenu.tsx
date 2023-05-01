import { useState } from "react";
import data from "../utils/data.json";
import styles from "../styles/MobileMenu.module.css";
import LogoMobile from "./LogoMobile";
import MobileButton from "./ButtonMobile";
import MobileHeaderLogo from "./MobileLogoHeader";
import SolutionMobile from "./SolutionMobile";
import ShowCasesMobile from "./ShowCasesMobile";
import ResourcesMobile from "./ResourcesMobile";
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

export default function MobileMenu() {
  // button click
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <section className={styles.MobileMenuContianer} key={dataItem.id}>
        <figure className={styles.MobileMenu_Position}>
          <MobileHeaderLogo />
        </figure>
        <button
          id="buttonMeneu"
          className={styles.hamburgerBtn}
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? (
            <div className={styles.close}>
              <div className={styles.closeline}></div>
              <div className={styles.closeline}></div>
            </div>
          ) : (
            <div className={styles.hamburger}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          )}
        </button>
        {isOpen ? (
          <section className={styles.MobileMenuContent}>
            <LogoMobile />
            <ul className={styles.MobileListItems}>
              <li>
                <a href="https://www.liveryvideo.com/the-platform/">HOME</a>
              </li>
              {dataItem.interactiveData?.map((item) => (
                <li className={styles.Mobile_listeFirst} key={item.label}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}

              <li>
                <SolutionMobile />
              </li>

              <li>
                <ShowCasesMobile />
              </li>
              <li>
                <ResourcesMobile />
              </li>

              {dataItem.pricingData?.map((item) => (
                <li className={styles.Mobile_listPricing} key={item.label}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
            <MobileButton />
          </section>
        ) : (
          // close
          <section className={`{$styles.MobileMenuContent}, ${styles.hidden}`}>
            <LogoMobile />
            <ul className={styles.MobileListItems}>
              <li>
                <a href="https://www.liveryvideo.com/the-platform/">HOME</a>
              </li>
              {dataItem.interactiveData?.map((item) => (
                <li className={styles.Mobile_listeFirst} key={item.label}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}

              <li>
                <SolutionMobile />
              </li>

              <li>
                <ShowCasesMobile />
              </li>
              <li>
                <ResourcesMobile />
              </li>

              {dataItem.pricingData?.map((item) => (
                <li className={styles.Mobile_listPricing} key={item.label}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
            <MobileButton />
          </section>
        )}
      </section>
    </header>
  );
}

