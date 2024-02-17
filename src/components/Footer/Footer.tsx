"use client";

import React, { useEffect, useState } from "react";
import styles from "./Footer.module.scss";

type Props = {};

export const Footer = (props: Props) => {
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
    <footer className="Footer_footer__GQa1y">
      <div
        className="Footer_footer__sticky-inner__m5LLE"
        style={{ transform: "none" }}
      >
        <h2 className="Footer_footer__heading__8h65q">
          <a className="Footer_footer__heading-link__v415t" href="/contact">
            <span>Let’s make </span>
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
              something{" "}
              <span
                className="WordTicker_word-ticker__2HQ3j"
                style={{ opacity: 1 }}
              >
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 0 ? styles["active"] : ""
                  }`}
                >
                  epic{" "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 1 ? styles["active"] : ""
                  }`}
                >
                  fun{" "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 2 ? styles["active"] : ""
                  }`}
                >
                  delightful{" "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 3 ? styles["active"] : ""
                  }`}
                >
                  beautiful{" "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 4 ? styles["active"] : ""
                  }`}
                >
                  original{" "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 5 ? styles["active"] : ""
                  }`}
                >
                  extraordinary{" "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 6 ? styles["active"] : ""
                  }`}
                >
                  engaging{" "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 7 ? styles["active"] : ""
                  }`}
                >
                  click{" "}
                </span>
                <span
                  className={`${styles["slider-item"]} ${
                    activeIndex === 8 ? styles["active"] : ""
                  }`}
                >
                  wonderful{" "}
                </span>
              </span>
            </span>
          </a>
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="289"
          height="311"
          fill="none"
          viewBox="0 0 289 311"
          className="Footer_face__88tuY"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M137.188 169.585c15.584 0 28.264-12.681 28.264-28.265V56.528C165.452 25.358 190.81 0 221.981 0c31.17 0 56.528 25.358 56.528 56.528h-28.264c0-15.584-12.681-28.264-28.264-28.264-15.584 0-28.264 12.68-28.264 28.264v84.792c0 31.171-25.358 56.529-56.529 56.529-31.17 0-56.528-25.358-56.528-56.529h28.264c0 15.584 12.681 28.265 28.264 28.265Zm122.764-.002h28.264c0 77.925-63.396 141.321-141.321 141.321V282.64c62.339 0 113.057-50.716 113.057-113.057ZM19.986 4.137 0 24.123l32.404 32.405L0 88.93l19.986 19.986 32.405-32.402 32.401 32.402 19.986-19.986-32.404-32.402 32.404-32.404L84.792 4.137 52.391 36.542 19.986 4.137Z"
            clip-rule="evenodd"
          ></path>
        </svg>
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
            <h3>Speak to us</h3>
            <a href="tel:1800%20486%20123">1800 486 123</a>
            <a href="mailto:contact@humaan.com">contact@humaan.com</a>
          </div>
          <div className="FooterSimpleContents_footer-columns__column__28cg0 FooterSimpleContents_footer-columns__column--address__Rjvwg">
            <h3>Perth</h3>
            <address>470 William St, Perth, WA 6000</address>
          </div>
          <div className="FooterSimpleContents_footer-columns__column__28cg0 FooterSimpleContents_footer-columns__column--address__Rjvwg">
            <h3>Melbourne</h3>
            <address>23/10-20 Gwynne St, Cremorne, VIC 3121</address>
          </div>
          <div className="FooterSimpleContents_footer-columns__column__28cg0 FooterSimpleContents_footer-columns__column--address__Rjvwg">
            <h3>Sydney</h3>
            <address>35/285A Crown St, Surry Hills, NSW 2010</address>
          </div>
        </div>
        <div className="FooterSimpleContents_footer-bottom__NmXB_ footer-bottom">
          <div className="FooterSimpleContents_footer-legal__o__61">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63"
              height="8"
              fill="none"
              viewBox="0 0 125 16"
              className=""
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M65.515 6.047v9.202c0 .196-.16.354-.358.354H62.5a.357.357 0 0 1-.36-.354V7.143c0-2.556-1.332-3.985-3.58-3.985-2.168 0-3.983 1.413-3.983 4.016v8.075c0 .196-.16.354-.358.354h-2.656a.356.356 0 0 1-.358-.354V7.143c0-2.556-1.333-3.985-3.582-3.985-2.167 0-3.983 1.413-3.983 4.016v8.075c0 .196-.16.354-.358.354h-2.656a.356.356 0 0 1-.358-.354V.75c0-.196.16-.354.358-.354h2.624c.198 0 .359.158.359.354v1.502C44.846.46 46.757 0 48.332 0c2.148 0 3.934.866 5.033 2.307.145.19.434.163.578-.029C55.312.466 57.49 0 59.267 0c3.662 0 6.248 2.492 6.248 6.047ZM28.036 16c3.597 0 7.13-2 7.13-6.842V.75a.356.356 0 0 0-.358-.354h-2.656a.356.356 0 0 0-.358.354v8.107c0 2.937-1.654 4.015-3.758 4.015s-3.758-1.078-3.758-4.015V.751a.356.356 0 0 0-.359-.354h-2.655a.356.356 0 0 0-.358.354v8.407C20.906 14 24.422 16 28.036 16ZM11.4 6.681h-7.41a.356.356 0 0 1-.359-.355V.876a.356.356 0 0 0-.358-.354H.359A.356.356 0 0 0 0 .876v14.373a.357.357 0 0 0 .359.355h2.913a.356.356 0 0 0 .358-.354v-4.816a.356.356 0 0 1 .358-.355h7.41a.357.357 0 0 1 .359.355v4.816a.356.356 0 0 0 .358.354h2.913a.356.356 0 0 0 .358-.354V.876a.356.356 0 0 0-.358-.354h-2.913a.356.356 0 0 0-.358.355v5.45a.355.355 0 0 1-.358.354ZM83.709.39H82.3c-.08 0-.14.03-.19.08-.05.05-.08.12-.08.19v1.57a5.68 5.68 0 0 0-2-1.62C79.23.22 78.29 0 77.19 0c-2.15 0-4.07.83-5.46 2.25-1.38 1.42-2.23 3.42-2.23 5.74 0 4.66 3.39 8 7.69 8 1.1 0 2.04-.21 2.84-.6.81-.39 1.47-.94 2-1.62v1.56c0 .15.12.27.27.27H85.11c.08 0 .15-.03.2-.08.04-.05.07-.11.07-.19V.66c0-.15-.12-.27-.27-.27h-1.4Zm-1.6 8.83c-.47 2.15-2.16 3.65-4.51 3.65-2.9 0-4.65-2.21-4.65-4.88 0-2.66 1.75-4.87 4.65-4.87 2.25 0 3.9 1.38 4.44 3.38.13.47.2.97.2 1.49 0 .43-.05.84-.13 1.23ZM92.998 8c0 2.666 1.751 4.873 4.642 4.873 2.778 0 4.64-2.095 4.64-4.873s-1.862-4.873-4.64-4.873c-2.89 0-4.642 2.206-4.642 4.873Zm12.072 7.603h-2.64a.352.352 0 0 1-.252-.103.354.354 0 0 1-.106-.251v-1.471c-1.06 1.349-2.65 2.222-4.834 2.222-4.304 0-7.692-3.35-7.692-8 0-4.651 3.388-8 7.692-8 2.184 0 3.775.889 4.834 2.238V.751c0-.196.16-.354.359-.354h2.639c.198 0 .359.158.359.354V15.25c0 .195-.16.354-.36.354l.001-.001ZM125 15.249V6.047C125 2.492 122.414 0 118.753 0c-1.573 0-3.485.46-4.722 2.252V.75a.356.356 0 0 0-.358-.354h-2.624a.356.356 0 0 0-.358.354v14.499a.357.357 0 0 0 .358.354h2.655c.199 0 .36-.158.36-.354V7.174c0-2.603 1.814-4.016 3.983-4.016 2.247 0 3.58 1.429 3.58 3.985v8.106c.001.047.01.093.028.136a.36.36 0 0 0 .331.218h2.655a.356.356 0 0 0 .359-.354Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>
              © 2024 <a href="/privacy">Privacy</a>
            </span>
          </div>
          <div className="FooterSimpleContents_footer-acknowledgement__67wsz">
            <div>
              <button className="Button_button-wrapper__2Ps4h">
                <span
                  className="Button_button__lQZdm Button_button--bg-transparent__4_NCr"
                  style={{
                    transform:
                      "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                  }}
                >
                  Acknowledgement of Country
                </span>
              </button>
            </div>
          </div>
          <ul className="FooterSimpleContents_footer-socials__7wzOx">
            <li className="FooterSimpleContents_footer-socials__item__9hVW0">
              <a
                className="Button_button-wrapper__2Ps4h"
                target="_blank"
                href="https://x.com/wearehumaan"
              >
                <span
                  className="Button_button__lQZdm Button_button--bg-transparent__4_NCr"
                  style={{
                    transform:
                      "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                  }}
                >
                  <span>
                    <s>Twitter</s> X
                  </span>
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
                  fill-rule="evenodd"
                  d="M7.121.87H5.874v4.123L2.96 2.078l-.882.882 2.92 2.919H.864v1.247h4.133l-2.919 2.919.882.882 2.913-2.913v4.122h1.247V8.004l2.923 2.923.882-.882-2.919-2.919h4.125V5.88H8.009l2.919-2.919-.882-.882-2.925 2.925V.869Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </li>
            <li className="FooterSimpleContents_footer-socials__item__9hVW0">
              <a
                className="Button_button-wrapper__2Ps4h"
                target="_blank"
                href="https://instagram.com/wearehumaan"
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
                  fill-rule="evenodd"
                  d="M7.121.87H5.874v4.123L2.96 2.078l-.882.882 2.92 2.919H.864v1.247h4.133l-2.919 2.919.882.882 2.913-2.913v4.122h1.247V8.004l2.923 2.923.882-.882-2.919-2.919h4.125V5.88H8.009l2.919-2.919-.882-.882-2.925 2.925V.869Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </li>
            <li className="FooterSimpleContents_footer-socials__item__9hVW0">
              <a
                className="Button_button-wrapper__2Ps4h"
                target="_blank"
                href="https://www.linkedin.com/company/humaan/posts/"
              >
                <span
                  className="Button_button__lQZdm Button_button--bg-transparent__4_NCr"
                  style={{
                    transform:
                      "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                  }}
                >
                  <span>LinkedIn</span>
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
