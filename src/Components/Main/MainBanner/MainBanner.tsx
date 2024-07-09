import React from "react";
import styles from "./MainBanner.module.css";
import koshelek from "../../../icons/wb_koshelek_2880_2.png";

function MainBanner() {
  return (
    <div className={styles.banner}>
      <a href="#!">
        <div className={styles.banner_img}>
          <img
            className={`${styles.swiper_lazy} ${styles.swiper_lazy_loaded}`}
            src={koshelek}
            alt=""
          />
          <div className={styles.layer}></div>
        </div>
      </a>
    </div>
  );
}

export default MainBanner;
