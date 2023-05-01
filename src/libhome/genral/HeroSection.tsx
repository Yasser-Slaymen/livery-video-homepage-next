import HeaderHome from "../includes/HeaderHome";
import MobileMenu from "../../reusComponents/MobileMenu";
import styles from "../../HomeStyles/genralStyle/HeroSection.module.css"
import VideoCloud from "../custom/VideoCloud";
import QuiklinksSlider from "../custom/QuicklinksSliders";
import SlickSlider from "../custom/SlickSlider";
export default function HeroSection() {
  return (
    <section className={styles.HeroSection}>
      <section className={styles.HeroSection_MobileMenu}>
      <MobileMenu />
      </section>
      <HeaderHome />
      <VideoCloud />
      <QuiklinksSlider/>
      <SlickSlider />
    </section>
  );
}
