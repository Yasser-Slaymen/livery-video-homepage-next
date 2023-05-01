import styles from "../../HomeStyles/custom/SlickSlider.module.css";
import dataHome from "../../utils/dataHome.json";
import arrow_rightHome from "../../icons/Asset-2.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../HomeStyles/custom/SlickSlider.css";

interface DataType {
  id?: number;
  componentName?: string;
  slickTrack?: {
    title: string;
    label: string;
    link: string;
    img: string;
  }[];
}
const dataItem: DataType = dataHome[2];
export default function SlickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    // centerMode: true,
    variableWidth: true,
    speed: 700,
  };

  const responsiveSettings = [
    {
      breakpoint: 2900,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 2300,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
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
    <section className={styles.SlickContainar} key={dataItem.id}>
      <p>{dataItem.componentName}</p>

      <Slider
        {...settings}
        // className={styles.Slick_carouselSlide}
        className={styles.Slick_carouselSlide + " slick-carouselSlide"}
        responsive={responsiveSettings}
      >
        {dataItem.slickTrack?.map((item) => (
          <section key={item.label}>
            <a className={styles.Slick_links} href={item.link}>
              <img src={item.img} alt="slick slider" />

              <li className={styles.Slick_content}>
                <span>
                  <h3>{item.title}</h3>
                  <img
                    className={styles.Slick_icon}
                    src={arrow_rightHome}
                    alt="icone"
                  />
                </span>
                <p>{item.label}</p>
              </li>
            </a>
          </section>
        ))}
      </Slider>
    </section>
  );
}
