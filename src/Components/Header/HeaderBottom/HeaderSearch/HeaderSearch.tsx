import React from "react";
import styles from "./HeaderSearch.module.css";
import { FaCamera } from "react-icons/fa";

function HeaderSearch() {
  return (
    <div className={styles.menu_burger}>
      <div className="search_catalog__block">
        <div className={styles.inp}>
          <input
            id="searchInput"
            className={`${styles.search_catalog__input} ${styles.j_wba_header_item}`}
            placeholder="Найти на Wildberries"
          />
          <div className={styles.sea}>
            {" "}
            <div className={`${styles.search_catalog__btn_wrap}`}>
              <button
                id="applySearchBtn"
                className={`${styles.search_catalog__btn} ${styles.search_catalog__btn__search}`}
                type="button"
                aria-label="Поиск товара"
                data-jsv="#37^/37^"
              ></button>

              <button
                className={`${styles.search_catalog__btn} ${styles.search_catalog__btn__clear}`}
                type="button"
                aria-label="Очистить поиск"
                data-jsv="#39^/39^"
              ></button>

              <div
                id="searchByImageContainer"
                className={`${styles.search_catalog__photo}`}
                data-link="class{merge: searchText toggle='hide'}class{merge: showImageSearch toggle='search-catalog__photo--active'}"
              >
                <form
                  id="searchByImageForm"
                  className={`${styles.search_catalog__photo_form}`}
                  action="/search/image"
                  method="post"
                >
                  <label
                    className={`${styles.search_catalog__btn} ${styles.search_catalog__btn__photo} ${styles.j_wba_header_item}`}
                    data-wba-header-name="Search_photo"
                  >
                    {/* <input type="file" name="photo" /> */}
                    <FaCamera />
                  </label>
                </form>
                <div
                  id="searchByImageBtn"
                  className={`${styles.search_catalog__photo_tooltip} ${styles.tooltip_simple} ${styles.tooltip_search_photo} ${styles.hide_mobile}`}
                >
                  <div className={styles.tooltip__content}>Поиск по фото</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSearch;
