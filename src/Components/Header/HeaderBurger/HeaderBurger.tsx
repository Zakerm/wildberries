import React from "react";
import styles from "./HeaderBurger.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface HeaderBurgerProps {
  menuItems: Array<{
    id: string;
    href?: string;
    text: string;
    subItems?: string[];
  }>;
  setActiveItemId: (id: string | null) => void;
  activeItemId: string | null;
  setSubMenuVisible: (visible: boolean) => void;
}

const HeaderBurger: React.FC<HeaderBurgerProps> = ({
  menuItems,
  setActiveItemId,
  activeItemId,
  setSubMenuVisible,
}) => {
  return (
    <div className="HeaderBurger">
      <div
        className={`${styles.overlay} ${styles.overlay__menu_burger} ${styles.j_overlay}`}
      ></div>
      <div className={`${styles.menu_burger} ${styles.menu_burger__active}`}>
        <div className={styles.menu_burger__main}>
          <ul className={styles.menu_burger__main_list}>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`${styles.menu_burger__main_list_item} ${
                  activeItemId === item.id
                    ? styles.menu_burger__main_list_item__active
                    : ""
                } ${styles.j_menu_main_item}`}
                data-menu-id={item.id}
                onMouseEnter={() => {
                  setActiveItemId(item.id);
                  setSubMenuVisible(true);
                }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className={`${styles.menu_burger__main_list_link} ${
                      styles[`menu_burger__main_list_link__${item.id}`]
                    }`}
                  >
                    {item.text}
                  </a>
                ) : (
                  <span
                    className={`${styles.menu_burger__main_list_link} ${
                      styles[`menu_burger__main_list_link__${item.id}`]
                    }`}
                  >
                    {item.text}
                    {activeItemId === item.id && (
                      <MdOutlineKeyboardArrowRight className={styles.arrow} />
                    )}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderBurger;
