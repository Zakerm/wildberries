import React from "react";
import styles from "./SubMenu.module.css";

interface SubMenuProps {
  items: string[];
  text: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ items, text }) => {
  return (
    <ul className={styles.submenu}>
      <div className={styles.sub_tittle}>{text}</div>
      {items.map((item, index) => (
        <a href="#!">
          <li key={index} className={styles.submenu_item}>
            {item}
          </li>
        </a>
      ))}
    </ul>
  );
};

export default SubMenu;
