import React, { useState } from "react";
import { motion } from "framer-motion";
import { languages } from "@/app/(site)/i18n/settings";
import { useTranslation } from "react-i18next";

type Props = {
  lng: string;
  t: any;
};

const defaultAnimations = {
  hidden: {
    height: 45,
  },
  visible: {
    height: "auto",
    transition: {
      duration: 0.2,
      ease: [1.0, 0.0, 0.68, 1.0],
    },
  },
  exit: {
    height: 45,
    transition: {
      duration: 0.2,
      ease: [1.0, 0.0, 0.68, 1.0],
    },
  },
};

const LanguagesDropDown = ({ lng, t }: Props) => {
  const { i18n } = useTranslation();
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="link-wrap">
      <button
        className={`Lang_menu__link__UGkEv`}
        onClick={() => {
          setIsExpertiseOpen(true);
          setIsVisible((prev) => !prev);
        }}
      >
        {t(`localization.${lng}`)}
      </button>
      {isExpertiseOpen && (
        <motion.nav
          className="LangSubmenu_submenu__TXNdc"
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            transform: "translateX(-50%) translateZ(0px)",
          }}
          variants={defaultAnimations}
          initial="hidden"
          animate={isVisible ? "visible" : "exit"}
          onAnimationComplete={() => !isVisible && setIsExpertiseOpen(false)}
        >
          <div
            className="LangSubmenu_submenu__group__BIGgm"
            style={{ opacity: 1 }}
          >
            {languages
              .filter((lang) => lang !== lng)
              .map((lang, index) => (
                <button
                  key={index}
                  className={`Lang_menu__link__UGkEv`}
                  onClick={() => {
                    setIsExpertiseOpen(true);
                    setIsVisible((prev) => !prev);
                    i18n.changeLanguage(lang);
                  }}
                >
                  {t(`localization.${lang}`)}
                </button>
              ))}
          </div>
        </motion.nav>
      )}
    </div>
  );
};

export default LanguagesDropDown;
