"use client";

import React, { useEffect, useState } from "react";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionLast from "./SectionLast";
import { motion, useScroll } from "framer-motion";
import AnimatedCharacters from "@/components/AnimatedText";
import { getAboutPageContent } from "../../../../sanity/lib/query";
import { AboutPageContent } from "@/types";

type Props = {};

const About = (props: Props) => {
  const [aboutPageContent, setAboutPageContent] = useState<AboutPageContent>({
    _id: "",
    headingText: "",
    headingTextHidden: "",
    headingImage: {
      alt: "",
      url: "",
    },
    descriptionTextBlock: "",
    collaborations: {
      collabsText: "",
    },
  });

  useEffect(() => {
    const fetchAboutPageContent = async () => {
      const aboutPageContent = await getAboutPageContent();
      console.log({ aboutPageContent });
      setAboutPageContent(aboutPageContent);
    };

    fetchAboutPageContent();
  }, []);

  return (
    <main className="page_about__Y3n_Y">
      <style>
        {`:root{
            --theme-primary: var(--default-primary);
            --theme-primary-text: var(--default-primary-text);
            --theme-secondary: var(--default-secondary);
            --theme-text: var(--default-text);
            --theme-background: var(--default-tertiary);
            --theme-logo: var(--default-secondary);
            --theme-header-face: var(--default-primary);
        }`}
      </style>
      <SectionOne aboutPageContent={aboutPageContent} />
      <SectionTwo aboutPageContent={aboutPageContent} />
      <SectionThree aboutPageContent={aboutPageContent} />
      <SectionLast aboutPageContent={aboutPageContent} />
    </main>
  );
};

const SectionOne = ({
  aboutPageContent,
}: {
  aboutPageContent: AboutPageContent;
}) => {
  const headingText = aboutPageContent?.headingText?.split(" ");

  const { scrollY } = useScroll();
  return (
    <motion.div
      className="AboutHero_about-hero__JIXuc"
      style={{ "--scrollY": scrollY } as any}
    >
      <div>
        <div className="AboutHero_about-hero__hero-wrapper__OFHLs">
          <h1 className="AboutHero_about-hero__heading__ws2_B AboutHero_about-hero__heading--mobile__OAJCm">
            <span
              className="TextAnimateUp_word__Yvn5A"
              style={{
                display: "inline-block",
                whiteSpace: "pre",
                transform: "translate3d(0, 80%, 0)",
              }}
            >
              Digital
            </span>
            <span
              className="TextAnimateUp_word__Yvn5A"
              style={{
                display: "inline-block",
                whiteSpace: "pre",
                transform: "translate3d(0, 80%, 0)",
              }}
            >
              Products.
            </span>
            <span
              className="TextAnimateUp_word__Yvn5A"
              style={{
                display: "inline-block",
                whiteSpace: "pre",
                transform: "translate3d(0, 80%, 0)",
              }}
            >
              Human
            </span>
            <span
              className="TextAnimateUp_word__Yvn5A"
              style={{
                display: "inline-block",
                whiteSpace: "pre",
                transform: "translate3d(0, 80%, 0)",
              }}
            >
              Experiences.
            </span>
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
                {aboutPageContent?.headingTextHidden
                  ?.split(" ")
                  .map((word, index) => {
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
          <div className="AboutHero_about-hero__image-wrapper__QU1KZ">
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
          </div>
        </div>
        <div className="AboutHero_about-hero__container__dFXAB">
          <p className="AboutHero_about-hero__intro__OkcdB">
            <span className="format">
              {"Human experiences".split(" ").map((word, index) => {
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
            {"are the foundation of everything we do – client relationships, team collaboration and an unwavering focus on the end user. This philosophy is in our name, our core values and underpins our approach to every engagement."
              .split(" ")
              .map((word, index) => {
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
