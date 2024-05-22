/* eslint-disable @next/next/no-img-element */
"use client";
import {
  AnimatePresence,
  easeIn,
  easeInOut,
  inView,
  motion,
  useDragControls,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  getHomePageContent,
  getHomePageProjects,
} from "../../../sanity/lib/query";
import IProject, { HomePageContentType } from "@/types";
import WorkCard from "@/components/WorkCard";
import { WorkGrid, WorkGridRow } from "@/components/WorkGrid";
import AnimatedCharacters from "@/components/AnimatedText/AnimatedText";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import useSize from "@/hooks/useSize";
import { useGetCurrentLanguage, useTranslation } from "./i18n/client";
import { fallbackLng } from "./i18n/settings";

export default function Home() {
  const lng = useGetCurrentLanguage() as "ru" | "en";

  const { t } = useTranslation(lng, "translations");

  const [homePageContent, setHomePageContent] = useState<HomePageContentType>({
    _id: "",
    headingText: {
      ru: "",
      en: "",
    },
    bottomContent: {
      bottomContentDescriptionText: {
        ru: "",
        en: "",
      },
      bottomContentHeadingText: {
        ru: "",
        en: "",
      },
      bottomContentImage: {
        alt: "",
        url: "",
      },
      bottomContentStats: [],
    },
    companiesLogos: [],
    showCaseHeadingText: {
      ru: "",
      en: "",
    },
    showReel: {
      showReelVideo: "",
      showReelVideoThumbnail: {
        alt: "",
        url: "",
      },
    },
  });
  const [projects, setPorjects] = useState<IProject[]>([]);
  const purpleContainerRef = useRef<any>(null);

  const [bgColor, setBgColor] = useState<any>("var(--default-tertiary)");

  useEffect(() => {
    const fetchHomePageProjects = async () => {
      const projects = await getHomePageProjects();
      setPorjects(projects);
    };
    const fetchHomePageContent = async () => {
      const homePageContent: HomePageContentType = await getHomePageContent();
      homePageContent && setHomePageContent(homePageContent);
    };

    fetchHomePageContent();
    fetchHomePageProjects();

    const stop = inView(purpleContainerRef.current, (info) => {
      setBgColor("#B488F1");
      return (leaveInfo) => setBgColor("var(--default-tertiary)");
    });

    return () => stop();
  }, []);

  return (
    <main className="page_homepage__06uL1">
      <style>
        {`:root {
            --theme-primary: var(--purple-primary);
            --theme-primary-text: var(--default-primary-text);
            --theme-secondary: var(--default-secondary);
            --theme-text: var(--default-text);
            --theme-background: ${bgColor};
            --theme-logo: var(--default-secondary);
            --theme-header-face: var(--default-primary);
            --theme-navbar-button-active: var(--purple-primary)
          }`}
      </style>
      <SectionOneHeading
        headingText={
          homePageContent?.headingText[`${lng}`] ??
          homePageContent?.headingText[`${fallbackLng}`]
        }
      />
      <SecondSectionVideo
        videoURL={homePageContent?.showReel?.showReelVideo}
        thumbnailURL={homePageContent?.showReel?.showReelVideoThumbnail}
      />
      <ThirdSectionShowCase
        showCaseHeadingText={
          homePageContent?.showCaseHeadingText[`${lng}`] ??
          homePageContent?.showCaseHeadingText[`${fallbackLng}`]
        }
        companiesLogos={homePageContent?.companiesLogos}
        purpleContainerRef={purpleContainerRef}
      />
      <FourthSectionWork
        projects={projects}
        bottomContent={homePageContent?.bottomContent}
        lng={lng}
        t={t}
      />
    </main>
  );
}

//TODO: implement animations for text; try preloading styles
const SectionOneHeading = ({ headingText }: { headingText: string }) => {
  const textMap = headingText?.split(" ");

  return (
    <div className="page_homepage__hero__7HVdw">
      <h1 className="page_homepage__heading__rG9o9">
        {!!headingText &&
          textMap &&
          textMap?.map((line, index) => {
            return <AnimatedCharacters text={line} key={index} />;
          })}
      </h1>
    </div>
  );
};

//TODO: resolve mobile video playback, size change on scroll
const SecondSectionVideo = ({
  videoURL,
  thumbnailURL,
}: {
  videoURL: string;
  thumbnailURL: { alt: string; url: string };
}) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(false);
  const [isVideoPaused, setIsVideoPaused] = useState<boolean>(false);
  const [isVideo2Paused, setIsVideo2Paused] = useState<boolean>(false);
  const vidRef = useRef<HTMLVideoElement>(null);
  const vidRef2 = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (vidRef.current?.paused) {
      setIsVideoPaused(false);
      vidRef.current?.play();
    } else {
      setIsVideoPaused(true);
      vidRef.current?.pause();
    }
  };

  const handlePlayMobileVideo = () => {
    if (vidRef2.current?.paused) {
      setIsVideo2Paused(false);
      vidRef2.current?.play();
    } else {
      setIsVideo2Paused(true);
      vidRef2.current?.pause();
    }
  };

  const ref = useRef(null);
  const ref2 = useRef(null);

  const [progress1, setProgress1] = useState(1.0485436893203883);
  const [progress2, setProgress2] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["end start", "start end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress1(latest);
  });
  useMotionValueEvent(scrollYProgress2, "change", (latest) => {
    setProgress2(latest);
  });

  const wrapper = {
    hidden: {
      opacity: 0,
      transform: "translate3d(0px, 10%, 0px)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0px, 0%, 0px)",
      transition: {
        duration: 0.5,
        ease: easeIn,
      },
    },
  };
  const videoWrapperRef = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  return (
    <div className="page_homepage__purple-change__jZXd6">
      <div className="" ref={ref}></div>
      <motion.div
        className="HomepageShowreel_showreel-wrapper__34lEW page_homepage__showreel__Tgw78"
        variants={wrapper}
        initial="hidden"
        animate="visible"
        ref={videoWrapperRef}
      >
        <div
          className="HomepageShowreel_showreel__0_0mY"
          style={
            {
              "--progress": (progress1 + progress2) * 2 - 2,
              "--borderRadius": `${
                Math.abs(1 - ((progress1 + progress2) * 2 - 2)) * 30
              }px`,
              transform: isInView
                ? "translateY(0vh) translateZ(0px)"
                : "translateY(20vh) translateZ(0px)",
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            } as any
          }
        >
          <div
            className="HomepageShowreel_showreel__inner__PDtub"
            style={
              {
                transform: "none",
                transformOrigin: "50% 50% 0px;",
              } as any
            }
          >
            <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI HomepageShowreel_showreel__image__M37pn">
              {/* <source
                  srcSet="https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/450x364/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/900x728/filters:quality(80) 2x"
                  media="(min-width: 0px) and (max-width: 479px)"
                />
                <source
                  srcSet="https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/1452x890/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/2904x1780/filters:quality(80) 2x"
                  media="(min-width: 480px)"
                /> */}
              <img
                src={thumbnailURL.url}
                loading="eager"
                width="450"
                height="364"
                alt={thumbnailURL.alt}
                className=""
                draggable="false"
              />
            </picture>
            <video
              className="HomepageShowreel_showreel__video__E_mew HomepageShowreel_showreel__video--desktop__4e6iX"
              src={videoURL}
              preload="none"
              autoPlay={true}
              ref={vidRef}
              loop={true}
              playsInline
              disablePictureInPicture
              muted={!isSoundEnabled}
            ></video>
            <video
              className="HomepageShowreel_showreel__video__E_mew HomepageShowreel_showreel__video--mobile__M1igg"
              src={videoURL}
              preload="none"
              autoPlay={true}
              ref={vidRef2}
              loop={true}
              disablePictureInPicture
              muted={!isSoundEnabled}
            ></video>
            <button
              className="Button_button-wrapper__2Ps4h HomepageShowreel_showreel__fullscreen-button__flQO2"
              onClick={handlePlayMobileVideo}
            >
              <span
                className="Button_button__lQZdm Button_button--bg-secondary__6flN1 HomepageShowreel_showreel__fullscreen-button-inner__mipt8"
                style={{
                  transform:
                    "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="none"
                  viewBox="0 0 26 26"
                  className=""
                  style={{ "--width": 26, "--height": 26 } as any}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m17.334 13-6.5 4.875v-9.75l6.5 4.875ZM2.167 13C2.167 7.02 7.02 2.166 13 2.166S23.834 7.02 23.834 13c0 5.98-4.854 10.833-10.834 10.833C7.02 23.833 2.167 18.98 2.167 13Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>See Showreel</span>
              </span>
            </button>
            <div className="HomepageShowreel_showreel__controls__wsIiL HomepageShowreel_showreel__controls--playing__k_fZx">
              <button
                aria-label="Pause Showreel Video"
                onClick={() => handlePlayVideo()}
              >
                {isVideoPaused ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                    className=""
                    style={{ "--width": 26, "--height": 26 } as any}
                  >
                    <path
                      fill="currentColor"
                      d="m10.834 17.875 6.5-4.875-6.5-4.875v9.75ZM13 2.166C7.02 2.166 2.167 7.02 2.167 13c0 5.98 4.853 10.833 10.833 10.833S23.834 18.98 23.834 13 18.98 2.166 13 2.166Zm0 19.5c-4.777 0-8.666-3.889-8.666-8.666 0-4.778 3.889-8.667 8.666-8.667 4.778 0 8.667 3.89 8.667 8.667 0 4.777-3.89 8.666-8.667 8.666Z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                    className=""
                    style={{ "--width": 26, "--height": 26 } as any}
                  >
                    <path
                      fill="currentColor"
                      d="M9.75 17.333h2.167V8.667H9.75v8.666ZM13 2.167C7.02 2.166 2.167 7.02 2.167 13S7.02 23.833 13 23.833 23.834 18.98 23.834 13 18.98 2.166 13 2.166Zm0 19.5c-4.777 0-8.666-3.89-8.666-8.667 0-4.778 3.889-8.667 8.666-8.667 4.778 0 8.667 3.89 8.667 8.667 0 4.777-3.89 8.666-8.667 8.666Zm1.084-4.334h2.166V8.667h-2.166v8.666Z"
                    ></path>
                  </svg>
                )}
              </button>
              <button
                aria-label="Unmute Showreel Video"
                onClick={() => setIsSoundEnabled((prev) => !prev)}
              >
                {isSoundEnabled ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                    className=""
                    style={{ "--width": 26, "--height": 26 } as any}
                  >
                    <path
                      fill="currentColor"
                      d="M3.25 9.75v6.5h4.333L13 21.666V4.334L7.583 9.75H3.25Zm7.583-.184v6.868l-2.35-2.35H5.417v-2.168h3.066l2.35-2.35ZM17.875 13a4.875 4.875 0 0 0-2.708-4.366v8.72A4.847 4.847 0 0 0 17.875 13Zm-2.708-9.501v2.232A7.589 7.589 0 0 1 20.583 13a7.589 7.589 0 0 1-5.416 7.269v2.232c4.344-.986 7.583-4.864 7.583-9.501s-3.24-8.515-7.583-9.501Z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                    className=""
                    style={{ "--width": 26, "--height": 26 } as any}
                  >
                    <path
                      fill="currentColor"
                      d="M4.701 3.174 3.174 4.702l4.723 4.723-.314.325H3.25v6.5h4.333L13 21.667v-7.14l4.528 4.529a7.272 7.272 0 0 1-2.362 1.203v2.231a9.685 9.685 0 0 0 3.911-1.896l2.221 2.221 1.528-1.527L4.7 3.174Zm6.132 13.26-2.35-2.35H5.415v-2.167h3.066l.953-.954 1.398 1.398v4.073ZM20.583 13c0 .889-.162 1.744-.444 2.535l1.657 1.658A9.68 9.68 0 0 0 22.75 13c0-4.637-3.24-8.515-7.584-9.5V5.73a7.589 7.589 0 0 1 5.417 7.27ZM13 4.333 10.963 6.37 13 8.407V4.333ZM17.875 13a4.875 4.875 0 0 0-2.709-4.366v1.94l2.687 2.686c.01-.086.022-.173.022-.26Z"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="" ref={ref2}></div>
    </div>
  );
};

//TODO: add observer on div in second section to change background color
const ThirdSectionShowCase = ({
  showCaseHeadingText,
  companiesLogos,
  purpleContainerRef,
}: {
  showCaseHeadingText: string;
  companiesLogos: string[];
  purpleContainerRef: any;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  return (
    <section className="page_showcase__LVgh4" ref={purpleContainerRef}>
      <h2 className="page_showcase__heading__0aQHD" ref={ref}>
        {!!showCaseHeadingText &&
          (isInView ? (
            showCaseHeadingText.split(" ").map((line, index) => {
              return <AnimatedCharacters text={line} key={index} />;
            })
          ) : (
            <>{showCaseHeadingText}</>
          ))}
      </h2>
      <div className="HomepageLogos_homepage-logos__76775">
        {companiesLogos.map((logo, index) => (
          <svg
            width="90"
            height="90"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            key={index}
          >
            <image xlinkHref={logo} width="90" height="90" />
          </svg>
        ))}
      </div>
    </section>
  );
};

//TODO: add parallax effect
const FourthSectionWork = ({
  projects,
  bottomContent,
  t,
  lng,
}: {
  projects: IProject[];
  bottomContent: any;
  t: any;
  lng: "en" | "ru";
}) => {
  return (
    <div className="page_homepage__section__S9KCY">
      <FirstSubsectionFourth projects={projects} t={t} lng={lng} />
      <SecondSubsectionFourth bottomContent={bottomContent} t={t} lng={lng} />
      <ThirdSubsectionFourth t={t} />
    </div>
  );
};

const FirstSubsectionFourth = ({
  projects,
  t,
  lng,
}: {
  projects: IProject[];
  t: any;
  lng: "en" | "ru";
}) => {
  return (
    <WorkGrid>
      <WorkGridRow>
        <WorkCard project={projects[0]} lng={lng} />
      </WorkGridRow>
      <WorkGridRow isPortrait>
        <WorkCard project={projects[1]} isPortrait lng={lng} />
        <WorkCard project={projects[2]} isPortrait lng={lng} />
      </WorkGridRow>
      <WorkGridRow isPortrait>
        <WorkCard project={projects[3]} isPortrait lng={lng} />
        <WorkCard project={projects[4]} isPortrait lng={lng} />
      </WorkGridRow>
      <a
        className="Button_button-wrapper__2Ps4h page_homepage-bottom__link__bpR9a"
        target="_self"
        href="/work"
      >
        <span
          className="Button_button__lQZdm Button_button--icon__Me_aL Button_button--bg-secondary__6flN1"
          style={{
            transform:
              "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px)",
          }}
        >
          {t("buttons.seeAllProjects")}
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
    </WorkGrid>
  );
};

//
const SecondSubsectionFourth = ({
  bottomContent,
  t,
  lng,
}: {
  bottomContent: any;
  t: any;
  lng: "ru" | "en";
}) => {
  return (
    <div className="page_homepage-bottom__dQvm3">
      <span className="page_homepage-bottom__heading___55Sm">
        {(
          bottomContent.bottomContentHeadingText[`${lng}`] ??
          bottomContent.bottomContentHeadingText[`${fallbackLng}`]
        )
          ?.split(" ")
          ?.map((word: string, index: number) => {
            return (
              <span
                key={index}
                className="TextAnimateUp_word__Yvn5A"
                style={{
                  display: "inline-block",
                  whiteSpace: "pre",
                  transform: "translate3d(0px, 0%, 0px)",
                  animation:
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
                {word.trim()}{" "}
              </span>
            );
          })}
      </span>
      <div
        className="page_homepage-bottom__content__ty_c_"
        style={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
      >
        <div className="WYSIWYG_wysiwyg__ct3Fm page_homepage-bottom__wysiwyg__MyVmD">
          {bottomContent.bottomContentDescriptionText[`${lng}`] ??
            bottomContent.bottomContentDescriptionText[`${fallbackLng}`]}
        </div>
        <a
          className="Button_button-wrapper__2Ps4h page_homepage-bottom__link__bpR9a"
          target="_self"
          href="/about"
        >
          <span
            className="Button_button__lQZdm Button_button--icon__Me_aL Button_button--bg-secondary__6flN1"
            style={{
              transform:
                "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px)",
            }}
          >
            {t("buttons.aboutUs")}
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
      <div
        className="page_homepage-bottom__image-wrapper__Ai9mX"
        style={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
      >
        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI page_homepage-bottom__image__I2GXx image-stats">
          {/* <source
            srcSet="https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/450x548/filters:quality(80)"
            media="(min-width: 0px) and (max-width: 479px)"
          />
          <source
            srcSet="https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/912x1111/filters:quality(80)"
            media="(min-width: 480px) and (max-width: 991px)"
          />
          <source
            srcSet="https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/838x1021/filters:quality(80)"
            media="(min-width: 992px)"
          /> */}
          <img
            src={bottomContent?.bottomContentImage?.bottomContentImage}
            loading="lazy"
            width="450"
            height="548"
            alt=""
            className=""
            draggable="false"
          />
        </picture>
      </div>
      <div className="page_homepage-bottom__stats__uJbJM">
        <ul className="HomepageStats_homepage-stats__uhM1u">
          {bottomContent?.bottomContentStats.map((stat: any, index: number) => {
            return (
              <li
                key={index}
                className="HomepageStats_homepage-stats__item__bfQDv"
                style={{
                  opacity: 1,
                  transform: "translateX(0px)",
                }}
              >
                <span className="HomepageStats_homepage-stats__value__JLrJU">
                  <span>{stat?.bottomContentStatsHeading}</span>
                </span>
                <span className="HomepageStats_homepage-stats__label__vKtOz">
                  {(
                    stat?.bottomContentStatsDescription[`${lng}`] ??
                    stat?.bottomContentStatsDescription[`${fallbackLng}`]
                  )
                    ?.split(" ")
                    ?.map((word: string, index: number) => {
                      return (
                        <span
                          className="TextAnimateUp_word__Yvn5A"
                          style={{
                            display: "inline-block",
                            whiteSpace: "pre",
                            transform: "translate3d(0px, 0%, 0px)",
                            animation:
                              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                          }}
                          key={index}
                        >
                          {word}{" "}
                        </span>
                      );
                    })}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const ThirdSubsectionFourth = ({ t }: { t: any }) => {
  const windowSize = useSize();

  const items = [
    {
      imageSrc: "/assets/cards/turkestan.jpg",
      tag: { text: "3D Модели", color: "#7c4ace" },
      date: "22.12.23",
      title: "Мавзолей Ходжа-Ахмета Яссауи",
      content:
        "Открываем доступ к исходникам нашего проекта для Visit Turkestan. Перед вами - 3Д модели мавзолея, артефакты и многое другое.",
    },
    {
      imageSrc: "/assets/cards/kokshetau-01.png",
      tag: { text: "Работы", color: "#1d8c4a" },
      date: "18.12.23",
      title: "Обои для смартфона",
      content:
        "Встречайте оригинальные иллюстрации с городами Казахстана от ualilab для ваших мобильных устройств.",
      // link: { url: "/xmas", text: "Humaan Christmas" },
    },
    {
      imageSrc: "/assets/cards/podcast.jpg",
      tag: { text: "Подкаст", color: "#038B99" },
      date: "28.11.23",
      title: "Teren Podcast",
      content:
        "Подкаст с ведущими аниматорами Казахстана, разбор индустрии, советы начинающим и многое другое.",
      // link: { url: "https://cocoskeelingislands.com.au/", text: "Go explore" },
    },
    {
      imageSrc: "/assets/cards/forFreelancers.jpg",
      tag: { text: "Полезное", color: "#353537" },
      date: "23.11.23",
      title: "Фрилансерам, на заметку",
      content:
        "Полезные шаблоны, инструменты и гайды для фрилансеров. Делимся своим опытом и процессами.",
    },
    {
      imageSrc: "/assets/cards/ornaments.jpg",
      tag: { text: "Исходники", color: "#000000" },
      date: "31.10.23",
      title: "Казахские Орнаменты",
      content:
        "Делимся своими разработками казахских национальных орнаментов. Высококачественные футажи, готовые к применению.",
      // link: { url: "https://aldertapware.com.au", text: "Check it out" },
    },
    {
      imageSrc: "/assets/cards/zaKemSledit.jpg",
      tag: { text: "Статья", color: "#a25aff" },
      date: "28.10.23",
      title: "За кем следить в Казахстане?",
      content:
        "Дизайнеры, Аниматоры, 3Д художники, Иллюстраторы, и многие другие - за кем нужно следить в Казахстане",
      // link: {
      //   url: "https://www.figma.com/community/widget/1253154577300925316",
      //   text: "Try it out",
      // },
    },
    {
      imageSrc: "/assets/cards/Charyn.jpg",
      tag: { text: "3Д модели", color: "#46651A" },
      date: "26.10.23",
      title: "Чарынский Каньон",
      content:
        "Получите доступ к исходникам из нашего проекта для Visit Charyn - 3Д модели ландшафта, флоры и фауны нашей чарующей природы.",
      // link: { url: "https://loambio.com", text: "Visit Loam" },
    },
    {
      imageSrc: "/assets/cards/kazFonts.jpg",
      tag: { text: "Разработки", color: "#EE8D5A" },
      date: "20.10.23",
      title: "Казахские шрифты",
      content:
        "Мы знаем, как мало качественных шрифтов на казахском. Открываем доступ к нашей подборке, чтобы немного облегчить жизнь всем",
    },
    // Add more items as needed
  ];

  const controls = useDragControls();

  const ref = useRef<HTMLDivElement>(null);

  const [leftVal, setLeftVal] = useState(
    ref.current?.offsetWidth! - windowSize[0]
  );

  const [isDragging, setIsDragging] = useState(false);
  function startDrag(event: any) {
    controls.start(event, { snapToCursor: true });
  }

  useEffect(() => {
    setLeftVal(ref.current?.offsetWidth! - windowSize[0]);
  }, [ref, windowSize]);

  return (
    <div className="page_homepage__feed-wrapper__DU78l">
      <div className="page_homepage__feed-wrapper-inner__SFalT">
        <div className="FeedSlider_feed__tS_vO page_homepage__feed__w1stV">
          <h2
            className="FeedSlider_feed__heading__Fcfyk"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            {t("forSociety")}ualilab
          </h2>
          <div
            onPointerDown={(e) => {
              startDrag(e);
            }}
            style={{ touchAction: "none", maxWidth: "100vw" }}
          />
          <motion.div
            className="FeedSlider_feed__inner__ht0nl"
            draggable={false}
            style={{ touchAction: "pan-y" }}
            drag="x"
            dragControls={controls}
            dragConstraints={{
              right: 0,
              left: -leftVal,
            }}
            ref={ref}
            onPointerDown={() => setIsDragging(true)}
            onPointerUp={() => setIsDragging(false)}
          >
            {items.map((item, index) => (
              <FeedItem key={index} {...item} isDragging={isDragging} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeedItem = ({
  imageSrc,
  tag,
  date,
  title,
  content,
  link,
  isDragging,
}: any) => (
  <article
    className={
      isDragging
        ? "FeedSlider_feed__shrink-drag--dragging__hhJlK"
        : "FeedSlider_feed__shrink-drag__4j3XZ"
    }
  >
    <div className="FeedSlider_feed__item__w7WSY">
      <div className="FeedSlider_feed__image__4qcgY">
        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI FeedSlider_feed__picture__BGkOi">
          <source
            srcSet={`${imageSrc}?m=300x390&filters:quality(80) 1x, ${imageSrc}?m=600x780&filters:quality(80) 2x`}
            media="(min-width: 0px) and (max-width: 1511px)"
          />
          <source
            srcSet={`${imageSrc}?m=385x500&filters:quality(80) 1x, ${imageSrc}?m=770x1000&filters:quality(80) 2x`}
            media="(min-width: 1512px)"
          />
          <img
            src={`${imageSrc}?m=300x390&filters:quality(80)`}
            loading="eager"
            width="300"
            height="390"
            alt=""
            className=""
            draggable={false}
          />
        </picture>
        <span
          className="FeedSlider_feed__tag__F9f_h"
          style={{ backgroundColor: tag.color, color: "white" }}
        >
          {tag.text}
        </span>
      </div>
      <span className="FeedSlider_feed__date__pEv67">{date}</span>
      <div className="FeedSlider_feed__content__spbob">
        <h3 className="FeedSlider_feed__title__sGhl7">{title}</h3>
        <p>{content}</p>
        {link && (
          <a
            className="Button_button-wrapper__2Ps4h"
            target="_blank"
            href={link.url}
          >
            <span className="Button_button__lQZdm Button_button--bg-transparent__4_NCr FeedSlider_feed__link__Rku_S">
              {link.text}
            </span>
          </a>
        )}
      </div>
    </div>
  </article>
);
