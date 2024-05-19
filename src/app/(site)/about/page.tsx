"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionLast from "./SectionLast";
import { inView, motion, useScroll } from "framer-motion";
import AnimatedCharacters from "@/components/AnimatedText";
import { getAboutPageContent } from "../../../../sanity/lib/query";
import { AboutPageContent } from "@/types";
import SectionCarousel from "./SectionCarousel";
import { fallbackLng } from "../i18n/settings";
import { useGetCurrentLanguage } from "../i18n/client";

const About = () => {
  const lng = useGetCurrentLanguage() as "ru" | "en";

  const [aboutPageContent, setAboutPageContent] = useState<AboutPageContent>({
    _id: "",
    headingText: {
      ru: "",
      en: "",
    },
    headingTextHidden: {
      ru: "",
      en: "",
    },
    headingImage: {
      alt: "",
      headingImage: "",
    },
    descriptionTextBlock: {
      ru: "",
      en: "",
    },
    collaborations: {
      collabsTextRu: "",
      collabsTextEn: "",
      companiesLogos: [],
    },
    capabilites: {
      capabilitiesTextRu: "",
      capabilitiesTextEn: "",
      expertiseListRu: [],
      expertiseListEn: [],
    },
    reviewsList: [],
    aboutUs: {
      aboutUsHeadingRu: "",
      aboutUsHeadingEn: "",
      whatWeDo: {
        whatWeDoHeadingRu: "",
        whatWeDoHeadingEn: "",
        whatWeDoListRu: [],
        whatWeDoListEn: [],
      },
      whatWeDont: {
        whatWeDontHeadingRu: "",
        whatWeDontHeadingEn: "",
        whatWeDontListRu: [],
        whatWeDontListEn: [],
      },
    },
  });
  const [bgColor, setBgColor] = useState<any>("#D8E7EE");
  const [activeReview, setActiveReview] = useState(0);

  const reduceActive = () => {
    if (activeReview === 0) {
      setActiveReview(aboutPageContent.reviewsList.length - 1);
    } else setActiveReview((prev) => prev - 1);
  };

  const increaseActive = () => {
    if (activeReview === aboutPageContent.reviewsList.length - 1) {
      setActiveReview(0);
    } else setActiveReview((prev) => prev + 1);
  };

  const blueContainerRef = useRef<any>(null);

  useEffect(() => {
    const fetchAboutPageContent = async () => {
      const aboutPageContent = await getAboutPageContent();
      setAboutPageContent(aboutPageContent);
    };

    fetchAboutPageContent();

    const stop = inView(blueContainerRef.current, (info) => {
      setBgColor("#3799EA");
      return (leaveInfo) => {
        setBgColor("#D8E7EE");
      };
    });

    return () => stop();
  }, []);

  return (
    <main className="page_about__Y3n_Y">
      <style>
        {`:root{
            --theme-primary: #82d7ff;
            --theme-primary-text: var(--default-primary-text);
            --theme-secondary: var(--default-secondary);
            --theme-text: var(--default-text);
            --theme-background: ${bgColor};
            --theme-logo: var(--default-secondary);
            --theme-header-face: var(--default-primary);
            --theme-navbar-button-active: var(--theme-primary)
        }`}
      </style>
      <SectionOne aboutPageContent={aboutPageContent} lng={lng} />
      <SectionTwo aboutPageContent={aboutPageContent} lng={lng} />
      <SectionThree aboutPageContent={aboutPageContent} lng={lng} />
      <div className="page_about-midpage-banner__oplXk page_about-midpage-banner--visible__ZXFvV">
        <div
          className="TestimonialSlider_testimonials__caGyT page_about-testimonials__yw9DG"
          ref={blueContainerRef}
        >
          <h2 className="hidden">Testimonials</h2>
          <div className="TestimonialSlider_testimonials__slider__8ckYL">
            {aboutPageContent?.reviewsList?.map((review, index) => {
              return (
                <figure
                  key={index}
                  className="TestimonialSlider_testimonial__Xrc78 TestimonialSlider_testimonial--active__UGwiF"
                  style={
                    activeReview === index
                      ? {
                          opacity: 1,
                          zIndex: 1,
                          transform: "translateX(0vw) translateZ(0px)",
                        }
                      : { opacity: 0, zIndex: 0, transform: "none" }
                  }
                >
                  <blockquote className="TestimonialSlider_testimonial__quote__Xr_uU">
                    {review.reviewText[lng] ?? review.reviewText[fallbackLng]}
                  </blockquote>
                  <figcaption className="TestimonialSlider_testimonial__author__pnq5X">
                    <span className="TestimonialSlider_testimonial__author-name__edwCT">
                      {review.reviewersName[lng] ??
                        review.reviewersName[fallbackLng]}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
            <div
              className="TestimonialSlider_testimonials__controls-wrapper__5uSZ_"
              style={{ opacity: 1, transform: "translateY(0px)" }}
            >
              <div
                className="TestimonialSlider_testimonials__controls__qYNzx"
                style={{
                  transform:
                    "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px)",
                }}
              >
                <button
                  className="TestimonialSlider_testimonials__button__eeZXW TestimonialSlider_testimonials__button--prev__E2E3T"
                  onClick={() => reduceActive()}
                >
                  <span className="hidden">Previous Testimonial</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="24"
                    fill="none"
                    viewBox="0 0 22 24"
                    className=""
                    style={{ "--width": 22, "--height": 24 } as any}
                  >
                    <path
                      fill="currentColor"
                      d="M21.06 13.06a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L17.88 12l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM0 13.5h20v-3H0v3Z"
                    ></path>
                  </svg>
                </button>
                <button
                  className="TestimonialSlider_testimonials__button__eeZXW TestimonialSlider_testimonials__button--next__Pgkaa"
                  onClick={() => increaseActive()}
                >
                  <span className="hidden">Next Testimonial</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="24"
                    fill="none"
                    viewBox="0 0 22 24"
                    className=""
                    style={{ "--width": 22, "--height": 24 } as any}
                  >
                    <path
                      fill="currentColor"
                      d="M21.06 13.06a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L17.88 12l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM0 13.5h20v-3H0v3Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionLast aboutPageContent={aboutPageContent} lng={lng} />
    </main>
  );
};

const SectionOne = ({
  aboutPageContent,
  lng,
}: {
  aboutPageContent: AboutPageContent;
  lng: "ru" | "en";
}) => {
  const headingText = (
    aboutPageContent?.headingText[lng] ??
    aboutPageContent?.headingText[fallbackLng]
  )?.split(" ");

  const headingTextHidden = (
    aboutPageContent?.headingTextHidden[lng] ??
    aboutPageContent?.headingTextHidden[fallbackLng]
  )?.split(" ");

  const { scrollY } = useScroll();
  return (
    <motion.div
      className="AboutHero_about-hero__JIXuc"
      style={{ "--scrollY": scrollY } as any}
    >
      <div>
        <div className="AboutHero_about-hero__hero-wrapper__OFHLs">
          <h1 className="AboutHero_about-hero__heading__ws2_B AboutHero_about-hero__heading--mobile__OAJCm">
            {headingText?.map((word, index) => (
              <span
                key={`word_${index}`}
                className="TextAnimateUp_word__Yvn5A"
                style={{
                  display: "inline-block",
                  whiteSpace: "pre",
                  transform: "translate3d(0, 80%, 0)",
                }}
              >
                {word}
              </span>
            ))}
            {headingTextHidden?.map((word, index) => {
              return (
                <span
                  key={`word_hidden_${index}`}
                  className="TextAnimateUp_word__Yvn5A"
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    transform: "translate3d(0, 80%, 0)",
                  }}
                >
                  <AnimatedCharacters text={word} />
                </span>
              );
            })}
          </h1>
          <h1 className="AboutHero_about-hero__heading__ws2_B AboutHero_about-hero__heading--desktop__Ti0ck">
            <span>
              {headingText?.map((word, index) => (
                <span
                  key={`word_${index}`}
                  className="TextAnimateUp_word__Yvn5A"
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    animation:
                      "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
                    transform: "translate3d(0px, 0%, 0px)",
                  }}
                >
                  <AnimatedCharacters text={word} />
                </span>
              ))}
            </span>
            <span className="AboutHero_about-hero__heading-opacity__BrOA2">
              <span>
                {headingTextHidden?.map((word, index) => {
                  return (
                    <span
                      key={`word_hidden_${index}`}
                      className="TextAnimateUp_word__Yvn5A"
                      style={{
                        display: "inline-block",
                        whiteSpace: "pre",
                        transform: "translate3d(0, 0%, 0)",
                        animation:
                          "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
                      }}
                    >
                      <AnimatedCharacters text={word} />
                    </span>
                  );
                })}
              </span>
            </span>
          </h1>
          {/* <div className="AboutHero_about-hero__image-wrapper__QU1KZ">
            <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI AboutHero_about-hero__image__CPP9_">
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/450x454/filters:quality(80) 1x"
                media="(min-width: 0px) and (max-width: 479px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/992x1000/filters:quality(80) 1x"
                media="(min-width: 480px) and (max-width: 991px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/1500x1512/filters:quality(80) 1x"
                media="(min-width: 992px) and (max-width: 1679px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/1680x1693/filters:quality(80) 1x"
                media="(min-width: 1680px)"
              />
              <img
                src="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/450x454/filters:quality(80)"
                loading="eager"
                width="450"
                height="454"
                alt=""
                className=""
                draggable="false"
              />
            </picture>
            <picture
              className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI AboutHero_about-hero__image__CPP9_"
              style={
                {
                  "-webkit-mask-size": "100%",
                  "-webkit-mask-image":
                    "url(https://a-us.storyblok.com/f/1017006/3360x3386/eacf69343b/humaanabout_mask.png)",
                  "z-index": "1",
                } as any
              }
            >
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/450x454/filters:quality(80) 1x"
                media="(min-width: 0px) and (max-width: 479px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/992x1000/filters:quality(80) 1x"
                media="(min-width: 480px) and (max-width: 991px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/1500x1512/filters:quality(80) 1x"
                media="(min-width: 992px) and (max-width: 1679px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/1680x1693/filters:quality(80) 1x"
                media="(min-width: 1680px)"
              />
              <img
                src="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/450x454/filters:quality(80)"
                loading="lazy"
                width="450"
                height="454"
                alt=""
                className=""
                draggable="false"
              />
            </picture>
            <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI AboutHero_about-hero__image__CPP9_">
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/900x908/filters:quality(80) 2x"
                media="(min-width: 0px) and (max-width: 479px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/1984x2000/filters:quality(80) 2x"
                media="(min-width: 480px) and (max-width: 991px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/3000x3024/filters:quality(80) 2x"
                media="(min-width: 992px) and (max-width: 1679px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/3360x3386/filters:quality(80) 2x"
                media="(min-width: 1680px)"
              />
              <img
                src="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/450x454/filters:quality(80)"
                loading="lazy"
                width="450"
                height="454"
                alt=""
                className=""
                draggable="false"
              />
            </picture>
            <picture
              className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI AboutHero_about-hero__image__CPP9_"
              style={
                {
                  "-webkit-mask-size": "100%",
                  "-webkit-mask-image":
                    "url(https://a-us.storyblok.com/f/1017006/3360x3386/eacf69343b/humaanabout_mask.png)",
                  "z-index": "1",
                } as any
              }
            >
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/900x908/filters:quality(80) 2x"
                media="(min-width: 0px) and (max-width: 479px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/1984x2000/filters:quality(80) 2x"
                media="(min-width: 480px) and (max-width: 991px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/3000x3024/filters:quality(80) 2x"
                media="(min-width: 992px) and (max-width: 1679px)"
              />
              <source
                srcSet="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/3360x3386/filters:quality(80) 2x"
                media="(min-width: 1680px)"
              />
              <img
                src="https://a-us.storyblok.com/f/1017006/3360x3386/d6ac5adeb6/humaanabout.jpg/m/450x454/filters:quality(80)"
                loading="lazy"
                width="450"
                height="454"
                alt=""
                className=""
                draggable="false"
              />
            </picture>
          </div> */}
        </div>
        <div className="AboutHero_about-hero__container__dFXAB">
          <p className="AboutHero_about-hero__intro__OkcdB">
            <span className="format">
              {(
                aboutPageContent?.descriptionTextBlock[lng] ??
                aboutPageContent?.descriptionTextBlock[fallbackLng]
              )
                ?.split(" ")
                ?.slice(0, 2)
                ?.map((word, index) => {
                  return (
                    <span
                      className="TextAnimateUp_word__Yvn5A"
                      style={{
                        display: "inline-block",
                        whiteSpace: "pre",
                        transform: "translate3d(0, 0%, 0)",
                        animation:
                          "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
                      }}
                      key={index}
                    >
                      {word}{" "}
                    </span>
                  );
                })}
            </span>
            {(
              aboutPageContent?.descriptionTextBlock[lng] ??
              aboutPageContent?.descriptionTextBlock[fallbackLng]
            )
              ?.split(" ")
              ?.slice(2)
              ?.map((word, index) => {
                return (
                  <span
                    className="TextAnimateUp_word__Yvn5A"
                    style={{
                      display: "inline-block",
                      whiteSpace: "pre",
                      transform: "translate3d(0, 0%, 0)",
                      animation:
                        "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
                    }}
                    key={index}
                  >
                    {word}{" "}
                  </span>
                );
              })}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
