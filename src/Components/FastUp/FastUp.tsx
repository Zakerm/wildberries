import React, { useState, useEffect } from "react";
import styles from "./FastUp.module.css";

function FastUp() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.FastUp}>
      {isVisible && (
        <button
          className={`${styles.btn_quick_nav} ${styles.j_quicknav}`}
          type="button"
          onClick={scrollToTop}
        >
          К началу страницы
        </button>
      )}
    </div>
  );
}

export default FastUp;
