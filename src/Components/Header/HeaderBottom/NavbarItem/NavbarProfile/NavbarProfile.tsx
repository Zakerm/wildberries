import React from "react";
import styles from "./NavbarProfile.module.css";
import avatar from "../../../../../icons/profile/avatar.png";

function NavbarProfile() {
  return (
    <div
      className={`${styles.navbar_pc__tooltip} ${styles.tooltip_simple} ${styles.tooltip_profile}`}
    >
      <div className={styles.tooltip__content}>
        <ul className={styles.profile_menu}>
          <li className={styles.profile_menu__user}>
            <a href="#!" className={styles.profile_menu__details}>
              <span
                className={`${styles.profile_menu__avatar} ${styles.img_plug}`}
              >
                <img src={avatar} alt="profile" />
              </span>
              <span className={styles.profile_menu__info}>
                <span className={styles.profile_menu__name}>
                  Имя не указано
                </span>
                <span className={styles.profile_menu__phone}>785673455435</span>
              </span>
            </a>
            <a href="#!" className={styles.profile_menu__notification}></a>
          </li>
          <li className={styles.profile_menu__item}>
            <ul
              className={`${styles.profile_menu__sub} ${styles.profile_menu__sub__icons}`}
            >
              <li className={styles.profile_menu__sub_item}>
                <a className={styles.profile_menu__link} href="#!">
                  <span
                    className={`${styles.profile_menu__icon} ${styles.profile_menu__icon__purchase}`}
                  ></span>
                  <span>Покупки</span>
                </a>
              </li>
              <li className={styles.profile_menu__sub_item}>
                <a className={styles.profile_menu__link} href="#!">
                  <span
                    className={`${styles.profile_menu__icon} ${styles.profile_menu__icon__heart}`}
                  ></span>
                  <span>Избранное</span>
                </a>
              </li>
              <li className={styles.profile_menu__sub_item}>
                <a className={styles.profile_menu__link} href="#!">
                  <span
                    className={`${styles.profile_menu__icon} ${styles.profile_menu__icon__brand}`}
                  ></span>
                  <span>Любимые бренды</span>
                </a>
              </li>
              <li className={styles.profile_menu__sub_item}>
                <a className={styles.profile_menu__link} href="#!">
                  <span
                    className={`${styles.profile_menu__icon} ${styles.profile_menu__icon__box}`}
                  ></span>
                  <span>Доставки</span>
                </a>
              </li>
              <li className={styles.profile_menu__sub_item}>
                <a className={styles.profile_menu__link} href="#!">
                  <span
                    className={`${styles.profile_menu__icon} ${styles.profile_menu__icon__wallet}`}
                  ></span>
                  <span>WB Кошелёк</span>
                  <span className={styles.profile_menu__balance}>0 ₽</span>
                </a>
              </li>
              <li className={styles.profile_menu__sub_item}>
                <a className={styles.profile_menu__link} href="#!">
                  <span
                    className={`${styles.profile_menu__icon} ${styles.profile_menu__icon__sale}`}
                  ></span>
                  <span>WB скидка</span>
                  <b className={styles.profile_menu__sale}>до 30%</b>
                </a>
              </li>
              <li className={styles.profile_menu__sub_item}>
                <a className={styles.profile_menu__link} href="#!">
                  <span
                    className={`${styles.profile_menu__icon} ${styles.profile_menu__icon__cards}`}
                  ></span>
                  <span>Способы оплаты</span>
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.profile_menu__item}>
            <ul className={styles.profile_menu__sub}>
              <li className={styles.profile_menu__sub_item}>
                <a className={styles.profile_menu__link} href="#!">
                  Обращения
                </a>
              </li>
              <li className={styles.profile_menu__sub_item}>
                <a className={styles.profile_menu__link} href="#!">
                  Отзывы и вопросы
                </a>
              </li>
            </ul>
          </li>
          <li className={styles.profile_menu__footer}>
            <ul className={styles.profile_menu__sub}>
              <li className={styles.profile_menu__sub_item}>
                <a
                  className={`${styles.profile_menu__link} ${styles.profile_menu__link__gray}`}
                  href="#!"
                >
                  Выйти
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarProfile;
