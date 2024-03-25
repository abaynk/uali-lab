"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ExpertiseDropDown from "./ExpertiseDropDown";

type Props = {};

export const Header = (props: Props) => {
  const pathname = usePathname().split("/")[1];
  const pathnames = ["", "about", "work", "expertise", "contact"];
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <header className="Header_header__r9N9Y">
      <a className="Header_skip-link__VZ9J_" href="#page-content">
        Skip Navigation
      </a>
      <div className="Header_header__inner__nfTZS">
        <a className="Header_header__logo__7Zjhj" aria-hidden="true" href="/">
          <span className="hidden">Home</span>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="16"
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
          </svg> */}
          <Image
            src={
              pathname === "contact" || pathname === "about"
                ? "/assets/images/white_logo.png"
                : "/assets/images/black_logo.png"
            }
            alt="Uali-lab"
            width={60}
            height={30}
          />
        </a>
        <nav className="Header_menu__Yr6mh">
          <ul className="Header_menu__list__h_Anx">
            <li
              className="Header_menu__item__cb_Hw"
              onMouseEnter={() => setHoverIndex(1)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <a
                className={`Header_menu__link__UGkEv ${
                  pathname === "" && "Header_menu__link--active__QKyk9"
                }`}
                href="/"
              >
                Home
              </a>
            </li>
            <li
              className="Header_menu__item__cb_Hw"
              onMouseEnter={() => setHoverIndex(2)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <a
                className={`Header_menu__link__UGkEv ${
                  pathname === "about" && "Header_menu__link--active__QKyk9"
                }`}
                href="/about"
              >
                About
              </a>
            </li>
            <li
              className="Header_menu__item__cb_Hw"
              onMouseEnter={() => setHoverIndex(3)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <a
                className={`Header_menu__link__UGkEv ${
                  pathname === "work" && "Header_menu__link--active__QKyk9"
                }`}
                href="/work"
              >
                Work
              </a>
            </li>
            <li
              className="Header_menu__item__cb_Hw"
              onMouseEnter={() => setHoverIndex(4)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <ExpertiseDropDown />
            </li>
            <li
              className="Header_menu__item__cb_Hw"
              onMouseEnter={() => setHoverIndex(5)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <a
                className={`Header_menu__link__UGkEv ${
                  pathname === "contact" && "Header_menu__link--active__QKyk9"
                }`}
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <div
            className="Header_menu__list__h_Anx Header_menu__list--twin__w_0Lp"
            style={{ transform: "none", transformOrigin: "50% 50% 0px;" }}
          >
            <span
              className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS"
              style={{ gridColumn: 1 }}
            >
              Home
            </span>
            <span
              className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS"
              style={{ gridColumn: 2 }}
            >
              About
            </span>
            <span
              className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS"
              style={{ gridColumn: 3 }}
            >
              Work
            </span>
            <span
              className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS"
              style={{ gridColumn: 4 }}
            >
              Expertise
            </span>
            <span
              className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS"
              style={{ gridColumn: 5 }}
            >
              Contact
            </span>
            <div
              className="Header_menu__hover-pill__NFAxL"
              style={{
                display: hoverIndex === -1 ? "none" : "block",
                position: "relative",
                gridColumn: hoverIndex,
                borderRadius: "100px",
                transform: "none",
                transformOrigin: "50% 50% 0px",
                left: "0px;",
              }}
              key={pathname}
            ></div>
            <div
              className="Header_menu__active-pill__YdBUl"
              style={{
                display: pathnames.indexOf(pathname) === -1 ? "none" : "block",
                position: "relative",
                gridColumn: pathnames.indexOf(pathname) + 1,
                borderRadius: "100px",
                transform: "none",
                transformOrigin: "50% 50% 0px",
                left: "0px;",
              }}
              key={pathname}
            ></div>
          </div>
        </nav>
      </div>
    </header>
  );
};
