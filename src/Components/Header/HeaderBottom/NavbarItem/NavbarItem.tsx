import React, { useState } from "react";
import styles from "./NavbarItem.module.css";
import NavbarProfile from "./NavbarProfile/NavbarProfile";

function NavbarItem() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className={styles.navbar_pc__item}>
      <a className={styles.navbar_pc__link} href="#!">
        <span
          className={`${styles.navbar_pc__icon} ${styles.navbar_pc__icon__delivery}`}
        ></span>
        Доставки
      </a>
      <a className={`${styles.navbar_pc__link} ${styles.margin}`} href="#!">
        <span
          className={`${styles.navbar_pc__icon} ${styles.navbar_pc__icon__favorites}`}
        ></span>
        Избранное
      </a>
      <div
        className={styles.navbar_pc__profileWrapper}
        onMouseEnter={() => setShowProfile(true)}
        onMouseLeave={() => setShowProfile(false)}
      >
        <a className={`${styles.navbar_pc__link} ${styles.margin}`} href="#!">
          <span
            className={`${styles.navbar_pc__icon} ${styles.navbar_pc__icon__profile}`}
          >
            {/* <FaUserAlt /> */}
          </span>
          Профиль
        </a>
        {showProfile && <NavbarProfile />}
      </div>
      <a className={`${styles.navbar_pc__link} ${styles.margin}`} href="#!">
        <span
          className={`${styles.navbar_pc__icon} ${styles.navbar_pc__icon__cart}`}
        ></span>
        Корзина
      </a>
    </div>
  );
}

export default NavbarItem;
