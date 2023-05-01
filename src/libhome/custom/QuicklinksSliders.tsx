import dataHome from "../../utils/dataHome.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../HomeStyles/custom/Quiklinks.module.css";
// import arrow_rightHome from "../../icons/Asset-2.svg";
// import "../../styles/Quiklinks.css";

interface DataType {
  id?: number;
  componentName?: string;
  cards?: {
    label: string;
    link: string;
    img: string;
  }[];
}
const dataItem: DataType = dataHome[1];
export default function QuiklinksSlider() {
  const settings = {
    dots: true,
    infinite: true,
    variableWidth: true,
    speed: 700,
  };
  const responsiveSettings = [
    {
      breakpoint: 2900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
   
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <section id="QuiklinksId" className={styles.Quiklinks} key={dataItem.id}>
      <p>{dataItem.componentName}</p>
      {/* slider */}
      <Slider
        {...settings}
        className={styles.Quiklinks_SlideContainarSlide}
        responsive={responsiveSettings}
      >
    
 {dataItem.cards?.map((item) => (
          <section key={item.label}>
            <a className={styles.Quiklinks_imgContainar} href={item.link}>
              <img src={item.img} alt="slideshow" />
              <section className={styles.Quiklinks_hover}>
                <p className={styles.Quiklinks_Description}>
                  {item.label}{" "}
                  <img
                    className={styles.Quiklinks_icon}
                    src="/icons/Asset-2.webp"
                    alt="icone"
                  />
                </p>
              </section>
            </a>
          </section>
        ))}
       
      </Slider>
    </section>
  );
}
