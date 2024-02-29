/* eslint-disable @next/next/no-img-element */
"use client";
import Parallax from "@/components/Parallax";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { getHomePageContent } from "../../../sanity/lib/query";
import { HomePageContentType } from "@/types";
import Image from "next/image";

export default function Home() {
  const [homePageContent, setHomePageContent] = useState<HomePageContentType>({
    _id: "",
    headingText: "",
    bottomContent: {
      bottomContentDescriptionText: "",
      bottomContentHeadingText: "",
      bottomContentImage: {
        alt: "",
        url: "",
      },
    },
    companiesLogos: [],
    showCaseHeadingText: "",
    showReelVideo:
      "https://player.vimeo.com/progressive_redirect/playback/900035537/rendition/1080p/file.mp4?loc=external&log_user=0&signature=92f8baecbcaa673d013bf28d8697afbb95b9360f73659a39636e837060325902",
  });
  useEffect(() => {
    const requestHomePageContent = async () => {
      const homePageContent: HomePageContentType = await getHomePageContent();
      homePageContent && setHomePageContent(homePageContent);
    };

    requestHomePageContent();
  }, []);
  console.log({ homePageContent });

  return (
    <main className="page_homepage__06uL1">
      <style>
        {`
:root {
  --theme-primary: var(--default-primary);
  --theme-primary-text: var(--default-primary-text);
  --theme-secondary: var(--default-secondary);
  --theme-text: var(--default-text);
  --theme-background: var(--default-tertiary);
  --theme-logo: var(--default-secondary);
  --theme-header-face: var(--default-primary);
}
`}
      </style>
      <SectionOneHeading headingText={homePageContent?.headingText} />
      <SecondSectionVideo videoURL={homePageContent?.showReelVideo} />
      <ThirdSectionShowCase
        showCaseHeadingText={homePageContent?.showCaseHeadingText}
        companiesLogos={homePageContent?.companiesLogos}
      />
      <FourthSectionWork bottomContent={homePageContent?.bottomContent} />
    </main>
  );
}

//TODO: implement animations for text; try preloading styles
const SectionOneHeading = ({ headingText }: { headingText: string }) => {
  return (
    <div className="page_homepage__hero__7HVdw">
      <h1 className="page_homepage__heading__rG9o9">{headingText}</h1>
    </div>
  );
};

//TODO: resolve mobile video playback, size change on scroll
const SecondSectionVideo = ({ videoURL }: { videoURL: string }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(false);
  const [isVideoPaused, setIsVideoPaused] = useState<boolean>(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (vidRef.current?.paused) {
      setIsVideoPaused(false);
      vidRef.current?.play();
    } else {
      setIsVideoPaused(true);
      vidRef.current?.pause();
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

  return (
    <div className="page_homepage__purple-change__jZXd6">
      <div className="" ref={ref}></div>
      <div className="HomepageShowreel_showreel-wrapper__34lEW page_homepage__showreel__Tgw78">
        <motion.div
          className="HomepageShowreel_showreel__0_0mY"
          style={
            {
              "--progress": (progress1 + progress2) * 2 - 2,
              "--borderRadius": `${
                Math.abs(1 - ((progress1 + progress2) * 2 - 2)) * 30
              }px`,
              transform: "translateY(0vh) translateZ(0px)",
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
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/450x364/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/900x728/filters:quality(80) 2x"
                media="(min-width: 0px) and (max-width: 479px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/1452x890/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/2904x1780/filters:quality(80) 2x"
                media="(min-width: 480px)"
              />
              <img
                src="https://a-us.storyblok.com/f/1017006/1920x1080/709b0d5177/showreel_placeholder.png/m/450x364/filters:quality(80)"
                loading="eager"
                width="450"
                height="364"
                alt=""
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
              loop
              playsInline
              disablePictureInPicture
              muted={!isSoundEnabled}
            ></video>
            <button
              className="Button_button-wrapper__2Ps4h HomepageShowreel_showreel__fullscreen-button__flQO2"
              onClick={() => handlePlayVideo()}
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
                    clip-rule="evenodd"
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
        </motion.div>
      </div>
      <div className="" ref={ref2}></div>
    </div>
  );
};

//TODO: add observer on div in second section to change background color
const ThirdSectionShowCase = ({
  showCaseHeadingText,
  companiesLogos,
}: {
  showCaseHeadingText: string;
  companiesLogos: string[];
}) => {
  return (
    <section className="page_showcase__LVgh4">
      <h2 className="page_showcase__heading__0aQHD">{showCaseHeadingText}</h2>
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
const FourthSectionWork = ({ bottomContent }: { bottomContent: any }) => {
  return (
    <div className="page_homepage__section__S9KCY">
      <FirstSubsectionFourth />
      <SecondSubsectionFourth bottomContent={bottomContent} />
      <ThirdSubsectionFourth />
    </div>
  );
};

const FirstSubsectionFourth = () => {
  return (
    <div className="WorkGrid_work-grid__0043M page_work-grid__VoMxE">
      <div className="WorkGrid_work-grid__row__p9SUz WorkGrid_work-grid__row--landscape__klf5g">
        <div
          className="WorkCard_work-card-wrapper__7mGrZ"
          style={
            {
              "--aspect-x": 1452,
              "--aspect-y": 890,
              opacity: 1,
              transform: "translateY(0px)",
            } as any
          }
        >
          <Link
            className="WorkCard_work-card__Z7y63 WorkCard_work-card--landscape__cw0_a"
            href={`/work/curtin-open-day`}
          >
            <div className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
              <Parallax
                speed={1}
                className="WorkCard_work-card__thumbnail-outer__kJvp9 self-start overflow-hidden"
              >
                <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/450x330/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/900x660/filters:quality(80) 2x"
                    media="(min-width: 0px) and (max-width: 479px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/932x685/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/1864x1370/filters:quality(80) 2x"
                    media="(min-width: 480px) and (max-width: 991px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/1452x1068/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/2904x2136/filters:quality(80) 2x"
                    media="(min-width: 992px) and (max-width: 1512px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/1905x1402/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/3810x2804/filters:quality(80) 2x"
                    media="(min-width: 1513px)"
                  />
                  <img
                    src="https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/450x330/filters:quality(80)"
                    loading="lazy"
                    width="450"
                    height="330"
                    alt=""
                    className=""
                    draggable="false"
                  />
                </picture>
              </Parallax>
              <div className="WorkCard_work-card__thumbnail-inner__YScRN">
                <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/312x178/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/624x356/filters:quality(80) 2x"
                    media="(min-width: 0px) and (max-width: 479px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/647x370/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/1294x740/filters:quality(80) 2x"
                    media="(min-width: 480px) and (max-width: 991px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/1008x576/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/2016x1152/filters:quality(80) 2x"
                    media="(min-width: 992px) and (max-width: 1512px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/1322x755/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/2644x1510/filters:quality(80) 2x"
                    media="(min-width: 1513px)"
                  />
                  <img
                    src="https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/312x178/filters:quality(80)"
                    loading="lazy"
                    width="312"
                    height="178"
                    alt="Screenshot of the Curtin Open Day website"
                    className=""
                    draggable="false"
                  />
                </picture>

                <video
                  className="WorkCard_work-card__video__hb14D"
                  muted
                  autoPlay
                  loop
                  playsInline
                  src="https://player.vimeo.com/progressive_redirect/playback/900034563/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=d9dc0f26e3fb0d5ec5129dd195e45be6d61df2057fb4e2a54f96783adb9d8392"
                ></video>
              </div>
            </div>
            <div className="WorkCard_work-card__content__Br9N4 WorkCard_work-card__content--white__ISlcm">
              <div className="WorkCard_work-card__content-inner__8Mqvf">
                <h3 className="WorkCard_work-card__title__vsvFl">
                  Curtin Open Day
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="WorkGrid_work-grid__row__p9SUz WorkGrid_work-grid__row--portrait__nwacA">
        <div
          className="WorkCard_work-card-wrapper__7mGrZ"
          style={
            {
              "--aspect-x": 710,
              "--aspect-y": 890,
              opacity: 1,
              transform: "translateY(0px)",
            } as any
          }
        >
          <Link
            className="WorkCard_work-card__Z7y63 WorkCard_work-card--portrait__WHYgm"
            href={`/work/sussex-taps`}
          >
            <div className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
              <div
                className="WorkCard_work-card__thumbnail-outer__kJvp9"
                style={{
                  transform: "translateY(-48.1254%) translateZ(0px)",
                }}
              >
                <Parallax speed={1} className="self-start overflow-hidden">
                  <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                    <source
                      srcSet="https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/450x677/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/900x1354/filters:quality(80) 2x"
                      media="(min-width: 0px) and (max-width: 479px)"
                    />
                    <source
                      srcSet="https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/932x1402/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/1864x2804/filters:quality(80) 2x"
                      media="(min-width: 480px) and (max-width: 991px)"
                    />
                    <source
                      srcSet="https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/710x1068/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/1420x2136/filters:quality(80) 2x"
                      media="(min-width: 992px) and (max-width: 1512px)"
                    />
                    <source
                      srcSet="https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/933x1403/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/1866x2806/filters:quality(80) 2x"
                      media="(min-width: 1513px)"
                    />
                    <img
                      src="https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/450x677/filters:quality(80)"
                      loading="lazy"
                      width="450"
                      height="677"
                      alt=""
                      className=""
                      draggable="false"
                    />
                  </picture>
                  <video
                    className="WorkCard_work-card__video__hb14D"
                    muted
                    autoPlay
                    loop
                    playsInline
                    src="https://player.vimeo.com/progressive_redirect/playback/745004855/rendition/720p/file.mp4?loc=external&amp;signature=1dd35b7b1001be056347f1aa639461cf56f40fc35b3f0ad75170809e8ca7d4e4"
                  ></video>
                </Parallax>
              </div>
            </div>
            <div className="WorkCard_work-card__content__Br9N4 WorkCard_work-card__content--white__ISlcm">
              <div className="WorkCard_work-card__content-inner__8Mqvf">
                <h3 className="WorkCard_work-card__title__vsvFl">
                  Sussex Taps
                </h3>
              </div>
            </div>
          </Link>
        </div>
        <div
          className="WorkCard_work-card-wrapper__7mGrZ"
          style={
            {
              "--aspect-x": 710,
              "--aspect-y": 890,
              opacity: 1,
              transform: "translateY(0px)",
            } as any
          }
        >
          <Link
            className="WorkCard_work-card__Z7y63 WorkCard_work-card--portrait__WHYgm"
            href={`/work/ferox`}
          >
            <div className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
              <div
                className="WorkCard_work-card__thumbnail-outer__kJvp9"
                style={{
                  transform: "translateY(-48.1254%) translateZ(0px)",
                }}
              >
                <Parallax speed={1} className="self-start overflow-hidden">
                  <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                    <source
                      srcSet="https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/450x677/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/900x1354/filters:quality(80) 2x"
                      media="(min-width: 0px) and (max-width: 479px)"
                    />
                    <source
                      srcSet="https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/932x1402/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/1864x2804/filters:quality(80) 2x"
                      media="(min-width: 480px) and (max-width: 991px)"
                    />
                    <source
                      srcSet="https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/710x1068/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/1420x2136/filters:quality(80) 2x"
                      media="(min-width: 992px) and (max-width: 1512px)"
                    />
                    <source
                      srcSet="https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/933x1403/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/1866x2806/filters:quality(80) 2x"
                      media="(min-width: 1513px)"
                    />
                    <img
                      src="https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/450x677/filters:quality(80)"
                      loading="lazy"
                      width="450"
                      height="677"
                      alt="Futuristic car concept masked by fog on a dark stage"
                      className=""
                      draggable="false"
                    />
                  </picture>
                  <video
                    className="WorkCard_work-card__video__hb14D"
                    muted
                    autoPlay
                    loop
                    playsInline
                    src="https://player.vimeo.com/progressive_redirect/playback/896099361/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=49e8fbb1560dccb3f536c1caad171d4f6d0f92cc8a03c7e706b7a2527814145a"
                  ></video>
                </Parallax>
              </div>
              <div className="WorkCard_work-card__thumbnail-inner__YScRN">
                <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/171x369/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/342x738/filters:quality(80) 2x"
                    media="(min-width: 0px) and (max-width: 479px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/355x765/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/710x1530/filters:quality(80) 2x"
                    media="(min-width: 480px) and (max-width: 991px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/270x582/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/540x1164/filters:quality(80) 2x"
                    media="(min-width: 992px) and (max-width: 1679px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/355x765/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/710x1530/filters:quality(80) 2x"
                    media="(min-width: 1680px)"
                  />
                  <img
                    src="https://a-us.storyblok.com/f/1017006/1684x3630/aff95687f6/ferox-inner.jpg/m/171x369/filters:quality(80)"
                    loading="lazy"
                    width="171"
                    height="369"
                    alt="Screenshot of the Ferox website"
                    className=""
                    draggable="false"
                  />
                </picture>
              </div>
            </div>
            <div className="WorkCard_work-card__content__Br9N4 WorkCard_work-card__content--white__ISlcm">
              <div className="WorkCard_work-card__content-inner__8Mqvf">
                <h3 className="WorkCard_work-card__title__vsvFl">Ferox</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="WorkGrid_work-grid__row__p9SUz WorkGrid_work-grid__row--landscape__klf5g">
        <div
          className="WorkCard_work-card-wrapper__7mGrZ"
          style={
            {
              "--aspect-x": 1452,
              "--aspect-y": 890,
              opacity: 1,
              transform: "translateY(0px)",
            } as any
          }
        >
          <Link
            className="WorkCard_work-card__Z7y63 WorkCard_work-card--landscape__cw0_a"
            href={`/work/trailswa`}
          >
            <div className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
              <Parallax
                speed={1}
                className=" WorkCard_work-card__thumbnail-outer__kJvp9 self-start overflow-hidden"
              >
                <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/450x330/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/900x660/filters:quality(80) 2x"
                    media="(min-width: 0px) and (max-width: 479px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/932x685/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/1864x1370/filters:quality(80) 2x"
                    media="(min-width: 480px) and (max-width: 991px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/1452x1068/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/2904x2136/filters:quality(80) 2x"
                    media="(min-width: 992px) and (max-width: 1512px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/1905x1402/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/3810x2804/filters:quality(80) 2x"
                    media="(min-width: 1513px)"
                  />
                  <img
                    src="https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/450x330/filters:quality(80)"
                    loading="lazy"
                    width="450"
                    height="330"
                    alt=""
                    className=""
                    draggable="false"
                  />
                </picture>
              </Parallax>
              <div className="WorkCard_work-card__thumbnail-inner__YScRN">
                <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/312x178/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/624x356/filters:quality(80) 2x"
                    media="(min-width: 0px) and (max-width: 479px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/647x370/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/1294x740/filters:quality(80) 2x"
                    media="(min-width: 480px) and (max-width: 991px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/1008x576/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/2016x1152/filters:quality(80) 2x"
                    media="(min-width: 992px) and (max-width: 1512px)"
                  />
                  <source
                    srcSet="https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/1322x755/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/2644x1510/filters:quality(80) 2x"
                    media="(min-width: 1513px)"
                  />
                  <img
                    src="https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/312x178/filters:quality(80)"
                    loading="lazy"
                    width="312"
                    height="178"
                    alt=""
                    className=""
                    draggable="false"
                  />
                </picture>
                <video
                  className="WorkCard_work-card__video__hb14D"
                  muted
                  autoPlay
                  loop
                  playsInline
                  src="https://player.vimeo.com/progressive_redirect/playback/900035513/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=02d19e99c78f745c23b60020f87e419cd1988ad4b844551b1e44288b94b6151e"
                ></video>
              </div>
            </div>
            <div className="WorkCard_work-card__content__Br9N4 WorkCard_work-card__content--white__ISlcm">
              <div className="WorkCard_work-card__content-inner__8Mqvf">
                <h3 className="WorkCard_work-card__title__vsvFl">TrailsWA</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

//
const SecondSubsectionFourth = ({ bottomContent }: { bottomContent: any }) => {
  return (
    <div className="page_homepage-bottom__dQvm3">
      <span className="page_homepage-bottom__heading___55Sm">
        {bottomContent.bottomContentHeadingText
          .split(" ")
          .map((word: string, index: number) => {
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
          {bottomContent.bottomContentDescriptionText}
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
            About Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              fill="none"
              stroke-width="0.5"
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
                vector-effect="non-scaling-stroke"
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
        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI page_homepage-bottom__image__I2GXx">
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
                  {stat?.bottomContentStatsDescription
                    .split(" ")
                    .map((word: string, index: number) => {
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

const ThirdSubsectionFourth = () => {
  const items = [
    {
      imageSrc:
        "https://a-us.storyblok.com/f/1017006/600x790/f48bc1ea20/humaan.jpg",
      tag: { text: "Brand New", color: "#7c4ace" },
      date: "22.12.23",
      title: "Headless Humaan",
      content:
        "A fresh new look for humaan.com – our sixth iteration. Please, take a look around.",
    },
    {
      imageSrc:
        "https://a-us.storyblok.com/f/1017006/600x790/4c3962aae5/xmas.jpg",
      tag: { text: "Festive", color: "#1d8c4a" },
      date: "18.12.23",
      title: "Season's Greenthings",
      content:
        "2023, the year we embraced the morph suit... We hope you have a safe festive season!",
      link: { url: "/xmas", text: "Humaan Christmas" },
    },
    {
      imageSrc:
        "https://a-us.storyblok.com/f/1017006/600x790/167932ea15/cocos.jpg",
      tag: { text: "Site Launch", color: "#038B99" },
      date: "28.11.23",
      title: "Cocos Keeling Islands",
      content: "A beautiful new website for Australia's last unspoilt paradise",
      link: { url: "https://cocoskeelingislands.com.au/", text: "Go explore" },
    },
    {
      imageSrc:
        "https://a-us.storyblok.com/f/1017006/600x790/b2eda5d803/frame-1728.jpg",
      tag: { text: "Recognition", color: "#353537" },
      date: "23.11.23",
      title: "Access Awards",
      content:
        "Talk n Walk wins Not-for-profit App of the Year by the Centre for Accessibility Australia",
    },
    {
      imageSrc:
        "https://a-us.storyblok.com/f/1017006/601x780/7ecf7ab961/alder-feed.jpg",
      tag: { text: "Site Launch", color: "#000000" },
      date: "31.10.23",
      title: "Alder Tapware",
      content:
        "Inspiration, innovation, design. An all-new website for Alder tapware.",
      link: { url: "https://aldertapware.com.au", text: "Check it out" },
    },
    {
      imageSrc:
        "https://a-us.storyblok.com/f/1017006/1200x1580/23137800a3/humaan-annotations.png",
      tag: { text: "Figma", color: "#a25aff" },
      date: "28.10.23",
      title: "Humaan Annotations",
      content:
        "A handy little tool from the labs that extends Figma's built-in commenting functionality",
      link: {
        url: "https://www.figma.com/community/widget/1253154577300925316",
        text: "Try it out",
      },
    },
    {
      imageSrc:
        "https://a-us.storyblok.com/f/1017006/600x790/d28f4d34ae/loam2.jpg",
      tag: { text: "Site Launch", color: "#46651A" },
      date: "26.10.23",
      title: "Loam Bio",
      content:
        "Putting agriculture at the forefront of addressing climate change",
      link: { url: "https://loambio.com", text: "Visit Loam" },
    },
    {
      imageSrc:
        "https://a-us.storyblok.com/f/1017006/600x790/6a408c2c00/loudshirtday.jpg",
      tag: { text: "Get Loud", color: "#EE8D5A" },
      date: "20.10.23",
      title: "Loud Shirt Day",
      content:
        "Proudly ‘wearing it loud’ today for Loud Shirt Day - supporting children with hearing loss.",
    },
    // Add more items as needed
  ];

  return (
    <div className="page_homepage__feed-wrapper__DU78l">
      <div className="page_homepage__feed-wrapper-inner__SFalT">
        <div className="FeedSlider_feed__tS_vO page_homepage__feed__w1stV">
          <h2
            className="FeedSlider_feed__heading__Fcfyk"
            style={{ opacity: 1, transform: "translateY(0px)" }}
          >
            What`s New
          </h2>
          <div
            className="FeedSlider_feed__inner__ht0nl"
            draggable={false}
            style={{ touchAction: "pan-y" }}
          >
            {items.map((item, index) => (
              <FeedItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeedItem = ({ imageSrc, tag, date, title, content, link }: any) => (
  <article className="FeedSlider_feed__shrink-drag__4j3XZ">
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
