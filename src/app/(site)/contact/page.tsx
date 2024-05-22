"use client";

import React, { useEffect, useState } from "react";
import { getContactsPageContent } from "../../../../sanity/lib/query";
import AnimatedCharacters from "@/components/AnimatedText/AnimatedText";
import { useGetCurrentLanguage, useTranslation } from "../i18n/client";

const Contact = () => {
  const lng = useGetCurrentLanguage() as "ru" | "en";

  const { t } = useTranslation(lng, "translations");
  const [headingText, setHeadingText] = useState("");
  const textMap = (headingText ?? "")?.split(" ");

  useEffect(() => {
    const fetchContactsPageHeading = async () => {
      const headingText = await getContactsPageContent();
      setHeadingText(
        headingText.headingText?.[lng] ?? headingText.headingText?.ru
      );
      if (!headingText) {
        setHeadingText("We've got a great feeling about this");
      }
    };

    fetchContactsPageHeading();
  }, [lng]);

  return (
    <main className="page_contact-page__9h2cr">
      <style>
        {`
  :root{
      --theme-primary: var(--purple-primary);
      --theme-primary-text: var(--purple-primary-text);
      --theme-secondary: var(--purple-secondary);
      --theme-text: var(--purple-text);
      --theme-background: #B8AFC6;
      --theme-logo: #ffffff;
      --theme-header-face: #FFD9B6;
      --theme-navbar-button-active: var(--theme-primary)
    }`}
      </style>
      <style>
        {`
  @media screen and (max-width: 991px) {
    .page_contact-bg-desktop__pJCdB {
      display: none;
    }
  }
  @media screen and (min-width: 992px) {
    .page_contact-bg-mobile__cCEP8 {
      display: none;
    }
  }
      `}
      </style>
      <div className="page_contact-bg-desktop__pJCdB">
        <picture className="Picture_picture__X3Eos page_contact-image__TRw2w">
          <source
            srcSet="https://a-us.storyblok.com/f/1017006/3024x2000/8c579e2bc5/contact-video-frame.jpg/m/1512x1000/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3024x2000/8c579e2bc5/contact-video-frame.jpg/m/2268x1500/filters:quality(80) 1.5x"
            media="(min-width: 0px)"
          />
          <img
            src="https://a-us.storyblok.com/f/1017006/3024x2000/8c579e2bc5/contact-video-frame.jpg/m/1512x1000/filters:quality(80)"
            loading="eager"
            width="1512"
            height="1000"
            alt=""
            className=""
            draggable="false"
          />
        </picture>
        <video
          className="page_contact-video__KWXO7"
          src="https://player.vimeo.com/progressive_redirect/download/900999111/rendition/source/contact-video-2268-optim%20%28Original%29.mp4?loc=external&amp;signature=a6fbf829cabe7579d4163dd6f73e42f254934d5ef8b41213be671a0547004cf5"
          width="1512"
          height="1000"
          autoPlay
          loop
          playsInline
        ></video>
      </div>
      <div className="page_contact-container__kOQYk">
        <div className="page_contact-content__UdnQw">
          <h1 className="page_contact-heading__YGAia">
            {!!headingText &&
              textMap &&
              textMap?.map((line, index) => {
                return <AnimatedCharacters text={line} key={index} />;
              })}
          </h1>
          <div style={{ opacity: 1, transform: "translateY(0px);" }}>
            <div>
              <a
                className="Button_button-wrapper__2Ps4h page_homepage-bottom__link__bpR9a"
                target="_blank"
                href="https://t.me/temiruali"
              >
                <span
                  className="Button_button__lQZdm Button_button--icon__Me_aL Button_button--bg-secondary__6flN1"
                  style={{
                    transform:
                      "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px)",
                  }}
                >
                  {t("buttons.letsStartProject")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="13"
                    fill="none"
                    strokeWidth="0.5"
                    viewBox="0 0 14 13"
                    className=""
                    style={
                      {
                        "--width": 14,
                        "--height": 13,
                      } as any
                    }
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z"
                      vectorEffect="non-scaling-stroke"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="page_contact-bg-mobile__cCEP8">
            <picture className="Picture_picture__X3Eos page_contact-image__TRw2w">
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/900x900/9298fb8569/contact-video-frame-square-mobile.jpg/m/450x450/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/900x900/9298fb8569/contact-video-frame-square-mobile.jpg/m/900x900/filters:quality(80) 2x"
                media="(min-width: 0px) and (max-width: 479px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/900x900/9298fb8569/contact-video-frame-square-mobile.jpg/m/900x900/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/900x900/9298fb8569/contact-video-frame-square-mobile.jpg/m/1800x1800/filters:quality(80) 2x"
                media="(min-width: 480px)"
              />
              <img
                src="https://a-us.storyblok.com/f/1017006/900x900/9298fb8569/contact-video-frame-square-mobile.jpg/m/450x450/filters:quality(80)"
                loading="eager"
                width="450"
                height="450"
                alt=""
                className=""
                draggable="false"
              />
            </picture>
          </div>
        </div>
      </div>
      <footer
        className="page_contact-footer__Gsmpq"
        style={{ opacity: 1, transform: "translateY(0px)" }}
      >
        <div className="FooterSimpleContents_footer-columns__lcGTG footer-columns">
          <div className="FooterSimpleContents_footer-columns__column__28cg0">
            <h3>{t("footer.contactUs")}</h3>
            <a href="tel:+77024020720">+7 702 40 20 7 20</a>
            <a href="mailto:hello@ualilab.com">hello@ualilab.com</a>
          </div>
          <div className="FooterSimpleContents_footer-columns__column__28cg0 FooterSimpleContents_footer-columns__column--address__Rjvwg">
            <h3>{t("footer.address.city")}</h3>
            <address>{t("footer.address.street")}</address>
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
                style={{ "--width": 13, "--height": 14 } as any}
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M7.121.87H5.874v4.123L2.96 2.078l-.882.882 2.92 2.919H.864v1.247h4.133l-2.919 2.919.882.882 2.913-2.913v4.122h1.247V8.004l2.923 2.923.882-.882-2.919-2.919h4.125V5.88H8.009l2.919-2.919-.882-.882-2.925 2.925V.869Z"
                  clipRule="evenodd"
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
                style={{ "--width": 13, "--height": 14 } as any}
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M7.121.87H5.874v4.123L2.96 2.078l-.882.882 2.92 2.919H.864v1.247h4.133l-2.919 2.919.882.882 2.913-2.913v4.122h1.247V8.004l2.923 2.923.882-.882-2.919-2.919h4.125V5.88H8.009l2.919-2.919-.882-.882-2.925 2.925V.869Z"
                  clipRule="evenodd"
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
      </footer>
    </main>
  );
};

export default Contact;
