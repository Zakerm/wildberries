import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

interface HeaderProps {
  toggleBurgerMenu: () => void;
}

function Header({ toggleBurgerMenu }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__container">
        <HeaderTop />
        <HeaderBottom toggleBurgerMenu={toggleBurgerMenu} />
      </div>
    </header>
  );
}

export default Header;
