import React from "react";
import qr from "../../icons/footer/qr.png";
import styles from "./Footer.module.css";
import { FaApple } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="footer_container">
        <div className={styles.footer__nav}>
          <div className={styles.footer__service_wrap}>
            <section className={styles.footer__list_wrap}>
              <div className={styles.footer__header_wrap}>
                <h2 className={styles.footer__header}>Покупателям</h2>
                <button className={styles.footer__btn_open} type="button">
                  Открыть
                </button>
              </div>
              <ul className={styles.footer__list}>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="How_to_order"
                >
                  <a rel="nofollow" href="#!">
                    Как сделать заказ
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Pay_methods"
                >
                  <a rel="nofollow" href="#!">
                    Способы оплаты
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Delivery"
                >
                  <a rel="nofollow" href="#!">
                    Доставка
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Return_order"
                >
                  <a rel="nofollow" href="#!">
                    Возврат товара
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Refunds"
                >
                  <a rel="nofollow" href="#!">
                    Возврат денежных средств
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Sale_policy"
                >
                  <a rel="nofollow" href="#!">
                    Правила продажи
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Store_policy"
                >
                  <a
                    rel="nofollow"
                    href="#!"
                    data-link="text{:~wbSettings.currentLocale == 'ru' ? 'Правила пользования торговой площадкой' : 'Публичная оферта'}"
                  >
                    Правила пользования торговой площадкой
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Personal_data"
                >
                  <a rel="nofollow" href="#!">
                    Политика обработки персональных данных
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Questions"
                >
                  <a rel="nofollow" href="#!">
                    Вопросы и ответы
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Сompatibility"
                >
                  <a rel="nofollow" href="#!">
                    Проверка совместимости
                  </a>
                </li>
              </ul>
            </section>
            <div className={styles.footer__inner_wrap}>
              <section className={styles.footer__list_wrap}>
                <div className={styles.footer__header_wrap}>
                  <h2 className={styles.footer__header}>Партнерам</h2>
                  <button className={styles.footer__btn_open} type="button">
                    Открыть
                  </button>
                </div>
                <ul className={styles.footer__list}>
                  <li
                    className={styles.footer__item}
                    data-wba-footer-name="Seller"
                  >
                    <a rel="nofollow" target="_blank" href="#!">
                      Продавайте на Wildberries
                    </a>
                  </li>

                  <li
                    className={styles.footer__item}
                    data-wba-footer-name="For_drivers"
                  >
                    <a rel="nofollow" target="_blank" href="#!">
                      Водителям
                    </a>
                  </li>
                  <li
                    className={styles.footer__item}
                    data-wba-footer-name="For_couriers"
                  >
                    <a rel="nofollow" target="_blank" href="#!">
                      Курьерам
                    </a>
                  </li>
                  <li
                    className={styles.footer__item}
                    data-wba-footer-name="Carrier"
                  >
                    <a rel="nofollow" target="_blank" href="#!">
                      Перевозчикам
                    </a>
                  </li>

                  <li
                    className={styles.footer__item}
                    data-wba-footer-name="Pick_up_points_open"
                  >
                    <a rel="nofollow" target="_blank" href="#!">
                      Партнерский пункт выдачи
                    </a>
                  </li>

                  <li
                    className={styles.footer__item}
                    data-wba-footer-name="Franchise"
                  >
                    <a rel="nofollow" target="_blank" href="#!">
                      Франшизный пункт выдачи
                    </a>
                  </li>

                  <li
                    className={styles.footer__item}
                    data-wba-footer-name="WBRent"
                  >
                    <a rel="nofollow" target="_blank" href="#!">
                      WBRent
                    </a>
                  </li>
                </ul>
              </section>

              <section
                className={`${styles.footer__list_wrap} ${styles.margin}`}
              >
                <div className={styles.footer__header_wrap}>
                  <h2 className={styles.footer__header}>Наши проекты</h2>
                  <button className={styles.footer__btn_open} type="button">
                    Открыть
                  </button>
                </div>
                <ul className={styles.footer__list}>
                  <li
                    className={styles.footer__item}
                    data-wba-footer-name="Guru"
                  >
                    <a rel="nofollow" target="_blank" href="#!">
                      WB Guru
                    </a>
                  </li>
                  <li
                    className={styles.footer__item}
                    data-wba-footer-name="Job"
                  >
                    <a rel="nofollow" target="_blank" href="#!">
                      Трудоустройство
                    </a>
                  </li>
                  <li
                    className={styles.footer__item}
                    data-wba-footer-name="WhSchool"
                  >
                    <a rel="nofollow" target="_blank" href="#!">
                      WH School
                    </a>
                  </li>
                  <li
                    className={styles.footer__item}
                    data-wba-footer-name="Stream"
                  >
                    <a rel="nofollow" target="_blank" href="#!">
                      WB Stream
                    </a>
                  </li>
                  <li
                    className={styles.footer__item}
                    data-wba-footer-name="Delivery"
                  >
                    <a rel="nofollow" target="_blank" href="#!">
                      WB Delivery
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <section className={styles.footer__list_wrap}>
              <div className={styles.footer__header_wrap}>
                <h2 className={styles.footer__header}>Компания</h2>
                <button className={styles.footer__btn_open} type="button">
                  Открыть
                </button>
              </div>
              <ul className={styles.footer__list}>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="About_us"
                >
                  <a rel="nofollow" href="#!">
                    О нас
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Bank_info"
                >
                  <a rel="nofollow" href="#!">
                    Реквизиты
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Press"
                >
                  <a rel="nofollow" href="#!">
                    Пресс-служба
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Сontacts"
                >
                  <a rel="nofollow" href="#!">
                    Контакты
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Bug_Bounty"
                >
                  <a rel="nofollow" href="#!">
                    Bug Bounty
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="Hotline"
                >
                  <a rel="nofollow" href="#!">
                    Горячая линия
                  </a>
                </li>
              </ul>
            </section>
            <section className={styles.footer__list_wrap}>
              <div className={styles.footer__header_wrap}>
                <h2 className={styles.footer__header}>Мы в соцсетях</h2>
                <button className={styles.footer__btn_open} type="button">
                  Открыть
                </button>
              </div>
              <ul className={styles.footer__list}>
                <li className={styles.footer__item} data-wba-footer-name="Vk">
                  <a rel="nofollow noopener" target="_blank" href="#!">
                    ВКонтакте
                  </a>
                </li>

                <li className={styles.footer__item} data-wba-footer-name="Ok">
                  <a rel="nofollow noopener" target="_blank" href="#!">
                    Одноклассники
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="YouTube"
                >
                  <a rel="nofollow noopener" target="_blank" href="#!">
                    YouTube
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a rel="nofollow noopener" target="_blank" href="#!">
                    Телеграмм-каналы
                  </a>
                </li>
              </ul>
            </section>
            <div className={styles.footer__social_wrap}>
              <section className={styles.footer__list_wrap}>
                <h2 className={styles.footer__header}>
                  Приложение Wildberries
                </h2>
                {/* <ul className={styles.footer__list}>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="AppStore"
                >
                  <a
                    className={styles.app_store}
                    rel="nofollow noopener"
                    target="_blank"
                    href="#!"
                  >
                    Загрузить из AppStore
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="GooglePlay"
                >
                  <a
                    className={styles.google_play}
                    rel="nofollow noopener"
                    target="_blank"
                    href="#!"
                  >
                    Загрузить из Google Play
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="AppGallery"
                >
                  <a
                    className={styles.app_gallery}
                    rel="nofollow noopener"
                    target="_blank"
                    href="#!"
                  >
                    Загрузить из AppGallery
                  </a>
                </li>
                <li
                  className={styles.footer__item}
                  data-wba-footer-name="AppGallery"
                >
                  <a
                    className={styles.app_rustore}
                    rel="nofollow noopener"
                    target="_blank"
                    href="#!"
                  >
                    Загрузить из RuStore
                  </a>
                </li>
              </ul> */}
                <div className={styles.footer__apps}>
                  <img className={styles.footer_apps__img} src={qr} alt="" />
                  <p className={styles.footer_apps__text}>
                    Наведите камеру, чтобы скачать приложение
                  </p>
                  <ul className={styles.footer_apps__list}>
                    <li className={styles.footer_apps__item}>
                      <a
                        className={`${styles.footer_apps__icon} ${styles.footer_apps__icon__ios}`}
                        rel="nofollow noopener"
                        target="_blank"
                        href="#!"
                      >
                        Загрузить из AppStore
                      </a>
                    </li>
                    <li className={styles.footer_apps__item}>
                      <a
                        className={`${styles.footer_apps__icon} ${styles.footer_apps__icon__android}`}
                        rel="nofollow noopener"
                        target="_blank"
                        href="#!"
                      >
                        Загрузить из Google Play
                      </a>
                    </li>
                    <li className={styles.footer_apps__item}>
                      <a
                        className={`${styles.footer_apps__icon} ${styles.footer_apps__icon__huawei}`}
                        rel="nofollow noopener"
                        target="_blank"
                        href="#!"
                      >
                        Загрузить из AppGallery
                      </a>
                    </li>
                    <li className={styles.footer_apps__item}>
                      <a
                        className={`${styles.footer_apps__icon} ${styles.footer_apps__icon__rustore}`}
                        rel="nofollow noopener"
                        target="_blank"
                        href="#!"
                      >
                        Загрузить из RuStore
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={styles.footer__add_info}>
          <p
            className={styles.footer__copyrights}
            data-link="class{merge:~wbSettings.currentLocale == 'uz' toggle='footer__copyrights--uz'}"
          >
            <span>
              2004-2024 © Wildberries{" "}
              <span className={styles.hide_mobile}>
                {" "}
                — модный интернет-магазин одежды, обуви и аксессуаров. Все права
                защищены. <span>Доставка по&nbsp;всей России.</span>
              </span>
            </span>
            <span>
              На Торговой площадке wildberries.ru{" "}
              <a href="#!" className={styles.footer__link}>
                применяются рекомендательные технологии
              </a>
              . Адрес для&nbsp;направления юридически значимых сообщений:
              sales@wildberries.ru
            </span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
