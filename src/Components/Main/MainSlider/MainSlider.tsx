import React from "react";
import styles from "./MainSlider.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MainSlider as mainSliderData } from "../../../data/MainSlider";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface CustomArrowProps {
  onClick?: () => void;
}

const CustomRightArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.custom_arrow} ${styles.custom_arrow_right}`}
    >
      {/* <div className={styles.arrow}>→</div> */}
    </button>
  );
};

const CustomLeftArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.custom_arrow} ${styles.custom_arrow_left}`}
    >
      {/* <div className={styles.arrow}>←</div> */}
    </button>
  );
};

function MainSlider() {
  const sliderImg: string[] = mainSliderData[0]?.sliderImg || [];

  return (
    <div className={styles.slider_wrapper}>
      <Carousel
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        responsive={responsive}
        swipeable={true}
        autoPlay={true}
        draggable={true}
        autoPlaySpeed={5000}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass={styles.custom_dot_list}
      >
        {sliderImg.map((imgUrl: string, index: number) => (
          <a href="" key={index}>
            <div className={styles.slider_item}>
              <img
                src={imgUrl}
                alt={`slide-${index}`}
                className={styles.slider_image}
              />
            </div>
          </a>
        ))}
      </Carousel>
    </div>
  );
}

export default MainSlider;
