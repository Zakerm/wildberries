import React from "react";
import { ICardContent } from "../../../../models/CardContentModels";
import styles from "./CardContent.module.css";
import star from "../../../../icons/star.svg";
import { FaCartShopping, FaRegHeart } from "react-icons/fa6";

interface CardContentProps {
  card: ICardContent;
}

const CardContent: React.FC<CardContentProps> = ({ card }) => {
  return (
    <div className={styles.card}>
      <a className={styles.card_link} href="#!">
        <div className={styles.card_cont}>
          <div className={styles.img}>
            <img src={card.img} alt={card.product} />
            <div className={styles.heart}>
              <FaRegHeart className={styles.heart_icon} />
            </div>
            <div className={styles.btn_more}>
              <a href="#!">Быстрый просмотр</a>
            </div>
          </div>
          <div className={styles.card_content}>
            <div className={styles.prise}>
              <div className={styles.Wprise}>{card.Wprise}</div>
              <div className={styles.well}>{card.well}</div>
              <div className={styles.Nprise}>
                <del>{card.Nprise}</del>
              </div>
            </div>
            <div className={styles.wallet}>c WB кошельком</div>
            <div className={styles.tittle}>
              <div className={styles.company}>{card.company}</div>
              <div className={styles.product}>
                <span>/</span> {card.product}
              </div>
            </div>
            <div className={styles.rating_all}>
              <div className={styles.icon}>
                <img src={star} alt="" />
              </div>
              <div className={styles.rating}>{card.rating}</div>
              <div className={styles.grade}>
                <span>●</span>
                {card.grade}
              </div>
            </div>
          </div>
          <a className={styles.btn} href="#!">
            <FaCartShopping className={styles.cart_icon} /> В корзину
          </a>
        </div>
      </a>
    </div>
  );
};

export default CardContent;
