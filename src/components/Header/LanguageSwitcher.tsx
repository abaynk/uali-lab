"use client";

import React from "react";
import styles from "./Switcher.module.scss";
import { useTranslation } from "@/app/(site)/i18n/client";
import { Trans } from "react-i18next";
import { languages } from "@/app/(site)/i18n/settings";
import { useRouter, usePathname } from "next/navigation";
import ExpertiseDropDown from "./ExpertiseDropDown";
import LanguagesDropDown from "./LanguagesDropDown";

type Props = {
  lng: string;
};

const LanguageSwitcher = ({ lng }: Props) => {
  const { t } = useTranslation(lng, "translations");

  return (
    <Trans i18nKey="languageSwitcher" t={t}>
      <nav className={`Lang_menu__Yr6mh ${styles.root}`}>
        <ul className="Header_menu__list__h_Anx">
          <li className="Header_menu__item__cb_Hw">
            <LanguagesDropDown lng={lng} t={t} />
          </li>
        </ul>
      </nav>
    </Trans>
  );
};

export default LanguageSwitcher;
