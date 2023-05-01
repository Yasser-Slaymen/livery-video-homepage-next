import React from "react";
import styles from "../styles/SlideShow.module.css";
import { useEffect } from "react";
import chevron_left from "../icons/chevron_left.png";
import chevron_reight from "../icons/chevron_reight.png";
import data from "../utils/data.json";
import img1 from '../utils/SildeImages/exmachina.webp'
import img2 from '../utils/SildeImages/hepsiburada.webp'
import img3 from '../utils/SildeImages/horecava.webp'
import img4 from '../utils/SildeImages/kviz.webp'
import img5 from '../utils/SildeImages/nationale-nederlanden.webp'
import img6 from '../utils/SildeImages/nestle.webp'
import img7 from '../utils/SildeImages/tasting-game.webp'
import img8 from '../utils/SildeImages/vitens.webp'
import img9 from '../utils/SildeImages/vodafone.webp'
import img10 from '../utils/SildeImages/akamai.webp'
import img11 from '../utils/SildeImages/effenaar.webp'
interface DataType {
  id: number;
  componentName: string;
}
const dataItem: DataType = data[11];
export default function Slideshow() {
  // handel slide
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + 3) % 3);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(intervalId);
  });

  return (
   
        <section className={styles.slideshow_all}>
            <section className={styles.slideshow} key={dataItem.id}>
              <h2>{dataItem.componentName}</h2>
              <section className={styles.slideshow_Container}>
                <button onClick={handleNext}>
                  <img src={chevron_left} alt="/" />
                </button>
                <section className={styles.slideshow_Content}>
                  {/* slide-1 */}
                  {currentSlide === 0 && (
                    <>
                      <article className={styles.slideshow_item}>
                        <img src={img1} alt="/" />
                      </article>
                      <article className={styles.slideshow_item}>
                        <img src={img2} alt="/" />
                      </article>
                      <article className={styles.slideshow_item}>
                        <img src={img3} alt="/" />
                      </article>
                      <article className={styles.slideshow_item}>
                        <img src={img4} alt="/" />
                      </article>
                    </>
                  )}
                  {/* slide-2 */}

                  {currentSlide === 1 && (
                    <>
                      <article className={styles.slideshow_item}>
                        <img src={img5} alt="/"/>
                      </article>
                      <article className={styles.slideshow_item}>
                        <img src={img6} alt="/" />
                      </article>
                      <article className={styles.slideshow_item}>
                        <img src={img7} alt="/" />
                      </article>
                      <article className={styles.slideshow_item}>
                        <img src={img8} alt="/" />
                      </article>
                    </>
                  )}
                  {/*slide-3*/}
                  {currentSlide === 2 && (
                    <>
                      <article className={styles.slideshow_item}>
                        <img src={img9} alt="/" />
                      </article>
                      <article className={styles.slideshow_item}>
                        <img src={img10} alt="/" />
                      </article>
                      <article className={styles.slideshow_item}>
                        <img src={img11} alt="/" />
                      </article>
                      <article className={styles.slideshow_item}>
                        <img src={img1} alt="/" />
                      </article>
                    </>
                  )}
                </section>
                <button onClick={handlePrev}>
                  <img src={chevron_reight} alt="/" />
                </button>
              </section>
            </section>
         
        </section>
     
   
  );
}
