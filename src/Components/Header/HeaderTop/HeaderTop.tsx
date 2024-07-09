import React from "react";
import styles from "./HeaderTop.module.css";
import { BsFillGeoAltFill } from "react-icons/bs";
import { IoWallet } from "react-icons/io5";
import rus from "../../../icons/rus.svg";

function HeaderTop() {
  return (
    <div className={styles.headerTop}>
      <div className={styles.simple_menu}>
        <div className={`${styles.location} ${styles.text}`}>
          <a className={styles.link} href="#!">
            <BsFillGeoAltFill /> Республика Марий Эл, Йошкар-Ола, Советская
            улица, 183
          </a>
        </div>
        <div className={`${styles.seller} ${styles.text}`}>
          <a className={styles.link} href="#!">
            {" "}
            Продавайте на Wildberries
          </a>
        </div>
        <div className={`${styles.trudoustroystvo} ${styles.text}`}>
          <a className={styles.link} href="#!">
            Работа в Wildberries
          </a>
        </div>
      </div>

      <div className={styles.header__wrap}>
        <a
          href="#!"
          id="balanceBlock"
          className={`${styles.header__balance} ${styles.header__balance__wallet}`}
          //   style="display: inline;"
        >
          <div className={styles.wallet_icon}>
            <IoWallet />
          </div>
          0&nbsp;₽
        </a>
        <div
          className={`${styles.simple_menu__item} ${styles.header__currency} ${styles.j_b_header_country}`}
        >
          <span
            className={`${styles.simple_menu__link} ${styles.simple_menu__link__country} ${styles.j_wba_header_item}`}
          >
            <img src={rus} alt="" />
            <span
              className={`${styles.simple_menu__currency}`}
              data-link="currentCurrency"
            >
              RUB
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
