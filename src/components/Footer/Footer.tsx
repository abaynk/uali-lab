"use client";

import React, { useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import { usePathname } from "next/navigation";

type Props = {};

export const Footer = (props: Props) => {
  const routerPathName = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 9);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    // <footer className={styles.root}>
    //   <div className={styles.wrapper}>
    //     <H2 activeIndex={activeIndex} />
    //   </div>
    // </footer>
    <footer
      className="Footer_footer__GQa1y"
      style={{ display: routerPathName === "/contact" ? "none" : "block" }}
    >
      <div
        className="Footer_footer__sticky-inner__m5LLE"
        style={{ transform: "none" }}
      >
        <h2 className="Footer_footer__heading__8h65q">
          <a className="Footer_footer__heading-link__v415t" href="/contact">
            <span>Мне нужно </span>
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              fill="none"
              stroke-width="0.5"
              viewBox="0 0 14 13"
              className="Footer_arrow__kw0yI"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z"
                vector-effect="non-scaling-stroke"
              ></path>
            </svg>
            <span className="Footer_footer__word-ticker-wrapper__UUW_n">
              что-нибудь
              <span
                className="WordTicker_word-ticker__2HQ3j"
                style={{ opacity: 1 }}
              >
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 0 ? styles["active"] : ""
                  }`}
                >
                  {`, не знаю что `}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 1 ? styles["active"] : ""
                  }`}
                >
                  {"\u00A0вау "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 2 ? styles["active"] : ""
                  }`}
                >
                  {"\u00A0красивое "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 3 ? styles["active"] : ""
                  }`}
                >
                  {"\u00A0крутое "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 4 ? styles["active"] : ""
                  }`}
                >
                  {"\u00A0оригинальное "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 5 ? styles["active"] : ""
                  }`}
                >
                  {"\u00A0интересное "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 6 ? styles["active"] : ""
                  }`}
                >
                  {"\u00A0понятное "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 7 ? styles["active"] : ""
                  }`}
                >
                  {"\u00A0как у Disney "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 8 ? styles["active"] : ""
                  }`}
                >
                  {"\u00A0быстрое "}
                </span>
              </span>
            </span>
          </a>
        </h2>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="289"
          height="311"
          fill="none"
          viewBox="0 0 289 311"
          className="Footer_face__88tuY"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M137.188 169.585c15.584 0 28.264-12.681 28.264-28.265V56.528C165.452 25.358 190.81 0 221.981 0c31.17 0 56.528 25.358 56.528 56.528h-28.264c0-15.584-12.681-28.264-28.264-28.264-15.584 0-28.264 12.68-28.264 28.264v84.792c0 31.171-25.358 56.529-56.529 56.529-31.17 0-56.528-25.358-56.528-56.529h28.264c0 15.584 12.681 28.265 28.264 28.265Zm122.764-.002h28.264c0 77.925-63.396 141.321-141.321 141.321V282.64c62.339 0 113.057-50.716 113.057-113.057ZM19.986 4.137 0 24.123l32.404 32.405L0 88.93l19.986 19.986 32.405-32.402 32.401 32.402 19.986-19.986-32.404-32.402 32.404-32.404L84.792 4.137 52.391 36.542 19.986 4.137Z"
            clip-rule="evenodd"
          ></path>
        </svg> */}
        <div className="Footer_footer__ballpit-wrapper__S6heb">
          <canvas
            className="BallPit_ballpit__Lo9o0"
            width="0"
            height="2238"
            data-pixel-ratio="2"
            style={{
              width: 0,
              height: "1119px",
              background: "0% 0% / contain transparent",
            }}
          ></canvas>
        </div>
        <div className="FooterSimpleContents_footer-columns__lcGTG footer-columns">
          <div className="FooterSimpleContents_footer-columns__column__28cg0">
            <h3>Связаться с нами</h3>
            <a href="tel:+77024020720">+7 702 40 20 7 20</a>
            <a href="mailto:hello@ualilab.com">hello@ualilab.com</a>
          </div>
          <div className="FooterSimpleContents_footer-columns__column__28cg0 FooterSimpleContents_footer-columns__column--address__Rjvwg">
            <h3>Алматы, Казахстан</h3>
            <address>Абая 52В, 050000</address>
          </div>
        </div>
        <div className="FooterSimpleContents_footer-bottom__NmXB_ footer-bottom">
          <div className="FooterSimpleContents_footer-legal__o__61">
            <span>ualilab</span>
            <span>© 2024</span>
          </div>
          <ul className="FooterSimpleContents_footer-socials__7wzOx">
            <li className="FooterSimpleContents_footer-socials__item__9hVW0">
              <a
                className="Button_button-wrapper__2Ps4h"
                target="_blank"
                href="https://vimeo.com/ualilab"
              >
                <span
                  className="Button_button__lQZdm Button_button--bg-transparent__4_NCr"
                  style={{
                    transform:
                      "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                  }}
                >
                  <span>Vimeo</span>
                </span>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="14"
                fill="none"
                viewBox="0 0 13 14"
                className="FooterSimpleContents_footer-socials__separator__8jE_R"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.121.87H5.874v4.123L2.96 2.078l-.882.882 2.92 2.919H.864v1.247h4.133l-2.919 2.919.882.882 2.913-2.913v4.122h1.247V8.004l2.923 2.923.882-.882-2.919-2.919h4.125V5.88H8.009l2.919-2.919-.882-.882-2.925 2.925V.869Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </li>
            <li className="FooterSimpleContents_footer-socials__item__9hVW0">
              <a
                className="Button_button-wrapper__2Ps4h"
                target="_blank"
                href="https://www.instagram.com/uali.lab?igsh=azluYnBsMG84OXBw"
              >
                <span
                  className="Button_button__lQZdm Button_button--bg-transparent__4_NCr"
                  style={{
                    transform:
                      "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                  }}
                >
                  <span>Instagram</span>
                </span>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="14"
                fill="none"
                viewBox="0 0 13 14"
                className="FooterSimpleContents_footer-socials__separator__8jE_R"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.121.87H5.874v4.123L2.96 2.078l-.882.882 2.92 2.919H.864v1.247h4.133l-2.919 2.919.882.882 2.913-2.913v4.122h1.247V8.004l2.923 2.923.882-.882-2.919-2.919h4.125V5.88H8.009l2.919-2.919-.882-.882-2.925 2.925V.869Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </li>
            <li className="FooterSimpleContents_footer-socials__item__9hVW0">
              <a
                className="Button_button-wrapper__2Ps4h"
                target="_blank"
                href="https://www.behance.net/ualilab"
              >
                <span
                  className="Button_button__lQZdm Button_button--bg-transparent__4_NCr"
                  style={{
                    transform:
                      "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                  }}
                >
                  <span>Behance</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

// const H2 = ({ activeIndex }: { activeIndex: number }) => {
//   return (
//     <h2 className={styles["sliderWrapper"]}>
//       <a className={styles["sliderWrapper-link"]} href="/contact">
//         <span>Let’s make </span>
//         <br />
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="14"
//           height="13"
//           fill="none"
//           stroke-width="0.5"
//           viewBox="0 0 14 13"
//           className={styles["sliderWrapper-arrow"]}
//         >
//           <path
//             fill="currentColor"
//             stroke="currentColor"
//             d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z"
//             vector-effect="non-scaling-stroke"
//           ></path>
//         </svg>
//         <span className={styles["sliderWrapper-words"]}>
//           something{" "}
//           <span className={styles["sliderWrapper-wordsList"]}>
//             <span
//               className={`${styles["slider-item"]} ${
//                 activeIndex === 0 ? styles["active"] : ""
//               }`}
//             >
//               epic{" "}
//             </span>
//             <span
//               className={`${styles["slider-item"]} ${
//                 activeIndex === 1 ? styles["active"] : ""
//               }`}
//             >
//               fun{" "}
//             </span>
//             <span
//               className={`${styles["slider-item"]} ${
//                 activeIndex === 2 ? styles["active"] : ""
//               }`}
//             >
//               delightful{" "}
//             </span>
//             <span
//               className={`${styles["slider-item"]} ${
//                 activeIndex === 3 ? styles["active"] : ""
//               }`}
//             >
//               beautiful{" "}
//             </span>
//             <span
//               className={`${styles["slider-item"]} ${
//                 activeIndex === 4 ? styles["active"] : ""
//               }`}
//             >
//               original{" "}
//             </span>
//             <span
//               className={`${styles["slider-item"]} ${
//                 activeIndex === 5 ? styles["active"] : ""
//               }`}
//             >
//               extraordinary{" "}
//             </span>
//             <span
//               className={`${styles["slider-item"]} ${
//                 activeIndex === 6 ? styles["active"] : ""
//               }`}
//             >
//               engaging{" "}
//             </span>
//             <span
//               className={`${styles["slider-item"]} ${
//                 activeIndex === 7 ? styles["active"] : ""
//               }`}
//             >
//               click{" "}
//             </span>
//             <span
//               className={`${styles["slider-item"]} ${
//                 activeIndex === 8 ? styles["active"] : ""
//               }`}
//             >
//               wonderful{" "}
//             </span>
//           </span>
//         </span>
//       </a>
//     </h2>
//   );
// };
