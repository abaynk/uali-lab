"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ExpertiseDropDown from "./ExpertiseDropDown";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  useGetCurrentLanguage,
  useTranslation,
} from "../../app/(site)/i18n/client";

export const Header = () => {
  const lng = useGetCurrentLanguage() as "ru" | "en";
  const { t } = useTranslation(lng, "translations");
  const pathname = usePathname()?.split("/")[1];
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
                  !pathname && "Header_menu__link--active__QKyk9"
                }`}
                href={`/`}
              >
                {t("navbar.home")}
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
                href={`/about`}
              >
                {t("navbar.about")}
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
                href={`/work`}
              >
                {t("navbar.work")}
              </a>
            </li>
            <li
              className="Header_menu__item__cb_Hw"
              onMouseEnter={() => setHoverIndex(4)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <ExpertiseDropDown lng={lng} t={t} />
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
                href={`/contact`}
              >
                {t("navbar.contact")}
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
              {t("navbar.home")}
            </span>
            <span
              className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS"
              style={{ gridColumn: 2 }}
            >
              {t("navbar.about")}
            </span>
            <span
              className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS"
              style={{ gridColumn: 3 }}
            >
              {t("navbar.work")}
            </span>
            <span
              className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS"
              style={{ gridColumn: 4 }}
            >
              {t("navbar.expertise")}
            </span>
            <span
              className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS"
              style={{ gridColumn: 5 }}
            >
              {t("navbar.contact")}
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
                display:
                  !pathname || pathnames.indexOf(pathname) !== -1
                    ? "block"
                    : "none",
                position: "relative",
                gridColumn:
                  pathnames.indexOf(pathname) !== -1
                    ? pathnames.indexOf(pathname) + 1
                    : 1,
                borderRadius: "100px",
                transform: "none",
                transformOrigin: "50% 50% 0px",
                left: "0px;",
              }}
              key={pathname}
            ></div>
          </div>
        </nav>
        <LanguageSwitcher lng={lng} />
      </div>
    </header>
  );
};
