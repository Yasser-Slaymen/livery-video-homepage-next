import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataHome from "../../utils/dataHome.json";
import styles from "../../HomeStyles/custom/MoveAnimations.module.css";
import "../../HomeStyles/custom/MoveAnimations.css";

interface DataType {
  id?: number;
  componentName?: string;
  movenaimations?: {
    id?: number;
    icon?: string;
  }[];
}
const dataItem: DataType = dataHome[12];

export default function MoveAnimations() {
  const settings = {
    // slidesToShow: 5,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const responsiveSettings = [
    {
      breakpoint: 2900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1950,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  return (
    <section
      id="MoveAnimationBar"
      className={styles.MoveAnimations_Container}
      key={dataItem.id}
    >
      <h2>{dataItem.componentName}</h2>
      <Slider
        {...settings}
        className={styles.MoveAnimations_Slider}
        responsive={responsiveSettings}
      >
        {dataItem.movenaimations?.map((item) => (
          <section key={item.id} className={styles.MoveAnimations_Content}>
            <img
              className={styles.MoveAnimations_icons}
              src={item.icon}
              alt="/"
            />
          </section>
        ))}
      </Slider>
    </section>
  );
}
