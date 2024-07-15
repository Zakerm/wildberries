import React, { useState } from "react";
import styles from "./HeaderBottom.module.css";
import logo from "../../../icons/logo.svg";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import NavbarItem from "./NavbarItem/NavbarItem";

interface HeaderBottomProps {
  toggleBurgerMenu: () => void;
}

const HeaderBottom: React.FC<HeaderBottomProps> = ({ toggleBurgerMenu }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
    toggleBurgerMenu();
  };

  return (
    <div className={styles.header__bottom}>
      <div className={styles.nav_element}>
        <a
          className={styles.nav_element__logo}
          data-wba-header-name="Main"
          href="#!"
        >
          <img src={logo} width="240" height="58" alt="Wildberries" />
        </a>
        <button
          className={`${styles.nav_element__burger} ${
            isBurgerOpen ? styles.open : ""
          }`}
          type="button"
          onClick={handleBurgerClick}
        >
          <span className={styles.nav_element__burger_line}></span>
        </button>
      </div>
      <HeaderSearch />
      <NavbarItem />
    </div>
  );
};

export default HeaderBottom;
