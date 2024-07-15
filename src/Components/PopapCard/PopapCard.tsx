import React from "react";
import styles from "./PopapCard.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardContentD as mainSliderData } from "../../data/CardContentD";
import { ICardContent } from "../../models/CardContentModels";

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

interface CardContentProps {
  card: ICardContent;
}

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

// const CardContent: React.FC<CardContentProps> = ({ card }) => {
//   return (
//     <div className={styles.product__content}>
//       <div className={styles.product__header_wrap}>
//         <a href="#" className={styles.product__header}></a>
//       </div>
//       {/* Add other content related to card */}
//     </div>
//   );
// };

interface PopapCardProps {
  card: ICardContent;
}

const PopapCard: React.FC<PopapCardProps> = ({ card }) => {
  const popapImg: string[] = card?.popapImg || [];
  return (
    <div>
      <div
        className={`${styles.overlay} ${styles.overlay__menu_burger} ${styles.j_overlay}`}
      ></div>

      <div className={`${styles.popup} ${styles.i_popup_same_part_kt}`}>
        <a href="#" className={`${styles.popup__close} ${styles.close}`}></a>
        <div className={styles.content}>
          <div className={styles.product}>
            <div className={styles.product__slider_wrap}>
              <Carousel
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
                responsive={responsive}
                swipeable={true}
                autoPlay={true}
                draggable={true}
                autoPlaySpeed={5000}
                showDots={false}
                infinite={true}
                partialVisible={false}
                dotListClass={styles.custom_dot_list}
              >
                {popapImg.map((imgUrl: string, index: number) => (
                  <div className={styles.slider_item} key={index}>
                    <img
                      src={imgUrl}
                      alt={`slide-${index}`}
                      className={styles.slider_image}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            {/* <CardContent card={card} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopapCard;
