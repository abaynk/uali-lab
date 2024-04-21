"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./WorkModal.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import IProject from "@/types/ProjectType";
import Vimeo from "@u-wave/react-vimeo";
import { ReactLenis } from "@studio-freight/react-lenis";

const dropIn = {
  hidden: {
    y: "calc(100vh - 200px)",
  },
  visible: {
    y: "0",
    transition: {
      duration: 0.5,
      ease: [1.0, 0.0, 0.68, 1.0],
    },
  },
  exit: {
    y: "calc(100vh - 200px)",
    transition: {
      duration: 0.5,
      ease: [1.0, 0.0, 0.68, 1.0],
    },
  },
};

const opacityIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.5,
    transition: {
      duration: 0.5,
      ease: [1.0, 0.005, 0.68, 1.0],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [1.0, 0.005, 0.68, 1.0],
    },
  },
};
export const WorkModal = ({
  projectData,
  handleClose,
}: {
  projectData: IProject | undefined;
  handleClose: () => void;
}) => {
  const myElementRef = useRef<any>(null);
  const scrollableRef = useRef<any>(null);

  useEffect(() => {
    const handleDocumentClick = (event: any) => {
      if (
        myElementRef.current &&
        !myElementRef.current.contains(event.target)
      ) {
        handleClose();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="SmoothModal_modal-wrapper__kCDpT">
      <motion.div
        className="SmoothModal_modal-backdrop__Yw8at"
        variants={opacityIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.div>
      <div tabIndex={0}></div>
      <div
        className="SmoothModal_modal-tab-trap-start__Eb_c5"
        tabIndex={-1}
      ></div>
      <ReactLenis className="SmoothModal_modal__46NFH">
        <div className="lenis-content" ref={myElementRef}>
          <motion.div
            className="SmoothModal_modal-inner__5cyWM"
            variants={dropIn}
            onClick={(e) => e.stopPropagation()}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className="SmoothModal_modal-inner__bg__c_nv9"
              style={{
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                left: 0,
                right: 0,
              }}
            ></div>
            <button
              className="ModalCloseButton_modal-close-button___iKD_ SmoothModal_modal-close__Sul5C"
              aria-label="Close Dialog"
              style={{
                transform: "translateX(0px) translateY(0px) translateZ(0px);",
              }}
              onClick={() => {
                handleClose();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
                className=""
                style={{ "--width": 18, "--height": 18 } as any}
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.332 15.667 15.665 2.333m0 13.334L2.332 2.333"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </button>
            <main className="SmoothModal_modal-content__DCcjC">
              <div className="ProjectContents_project-content__y3B8f project-content">
                <div className="ProjectContents_project-content__body__KX_Wu">
                  <div className="CaseStudySidebar_sidebar__NpN8i">
                    <div className="CaseStudySidebar_sidebar__inner__we00X">
                      <div className="CaseStudySidebar_sidebar__header__LkH2l">
                        <h1 className="CaseStudySidebar_sidebar__title__P_GUC">
                          {projectData?.title}
                        </h1>
                        {projectData?.url && (
                          <a
                            className="Button_button-wrapper__2Ps4h"
                            target="_blank"
                            href={projectData?.url}
                          >
                            <span
                              className="Button_button__lQZdm Button_button--icon__Me_aL Button_button--bg-secondary__6flN1"
                              style={{
                                transform:
                                  "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px)",
                              }}
                            >
                              Visit Website
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="13"
                                fill="none"
                                stroke-width="0.5"
                                viewBox="0 0 14 13"
                                className=""
                                style={{ "--width": 14, "--height": 13 } as any}
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
                        )}
                        <p className="CaseStudySidebar_sidebar__industry__z8Mof">
                          {projectData?.category}
                        </p>
                      </div>
                      <div className="CaseStudySidebar_sidebar__intro__XCkoW">
                        <p>{projectData?.description}</p>
                      </div>
                      <div className="CaseStudySidebar_sidebar__body__umcIh">
                        {projectData?.contents}
                      </div>
                      {projectData?.listOfTags && (
                        <ul className="CaseStudySidebar_custom-icon-list__c89wu">
                          {projectData?.listOfTags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="ProjectContents_project-content__blocks__zlvle">
                    {projectData?.embeddedVideoUrl && (
                      <div className="ProjectContents_project-content__block-image__zfS56">
                        <div
                          className="ProjectContents_project-content__image__SCygk"
                          style={{
                            opacity: 1,
                            transform: "translateY(0px)",
                          }}
                        >
                          <div className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI ProjectContents_project-content__picture__tSYMa embed-container">
                            <Vimeo
                              video={projectData?.embeddedVideoUrl}
                              autoplay
                              style={{
                                width: "100%;",
                                height: "100%",
                                backgroundColor: "#000",
                              }}
                              muted={true}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {projectData?.assets?.map(
                      (asset: string, index: number) => {
                        return (
                          <div
                            className="ProjectContents_project-content__block-image__zfS56"
                            key={index}
                          >
                            <div
                              className="ProjectContents_project-content__image__SCygk"
                              style={{
                                opacity: 1,
                                transform: "translateY(0px)",
                              }}
                            >
                              <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI ProjectContents_project-content__picture__tSYMa">
                                <img
                                  src={asset}
                                  loading="eager"
                                  width="460"
                                  height="284"
                                  alt=""
                                  className=""
                                  draggable="false"
                                />
                              </picture>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
                {/* <footer className="ProjectContents_project-footer__6CKKh">
                  <h2 className="ProjectContents_project-footer__heading__PW9rG">
                    Up Next
                  </h2>
                  <div
                    className="WorkCard_work-card-wrapper__7mGrZ ProjectContents_project-footer__card__7Ei_t"
                    style={
                      {
                        "--aspect-x": 1452,
                        "--aspect-y": 890,
                        opacity: 1,
                        transform: "translateY(0px);",
                      } as any
                    }
                  >
                    <Link
                      className="WorkCard_work-card__Z7y63 WorkCard_work-card--landscape__cw0_a ProjectContents_project-footer__card__7Ei_t"
                      href={`/work/${projectData?.nextProjectSlug}`}
                    >
                      <div className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
                        <div
                          className="WorkCard_work-card__thumbnail-outer__kJvp9"
                          style={{
                            transform: "translateY(-50.5809%) translateZ(0px);",
                          }}
                        >
                          <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                            <source
                              srcSet="https://a-us.storyblok.com/f/1017006/3810x2805/86f5c4a955/outer-1.jpg/m/450x330/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3810x2805/86f5c4a955/outer-1.jpg/m/900x660/filters:quality(80) 2x"
                              media="(min-width: 0px) and (max-width: 479px)"
                            />
                            <source
                              srcSet="https://a-us.storyblok.com/f/1017006/3810x2805/86f5c4a955/outer-1.jpg/m/932x685/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3810x2805/86f5c4a955/outer-1.jpg/m/1864x1370/filters:quality(80) 2x"
                              media="(min-width: 480px) and (max-width: 991px)"
                            />
                            <source
                              srcSet="https://a-us.storyblok.com/f/1017006/3810x2805/86f5c4a955/outer-1.jpg/m/1452x1068/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3810x2805/86f5c4a955/outer-1.jpg/m/2904x2136/filters:quality(80) 2x"
                              media="(min-width: 992px) and (max-width: 1512px)"
                            />
                            <source
                              srcSet="https://a-us.storyblok.com/f/1017006/3810x2805/86f5c4a955/outer-1.jpg/m/1905x1402/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3810x2805/86f5c4a955/outer-1.jpg/m/3810x2804/filters:quality(80) 2x"
                              media="(min-width: 1513px)"
                            />
                            <img
                              src="https://a-us.storyblok.com/f/1017006/3810x2805/86f5c4a955/outer-1.jpg/m/450x330/filters:quality(80)"
                              loading="lazy"
                              width="450"
                              height="330"
                              alt=""
                              className=""
                              draggable="false"
                            />
                          </picture>
                        </div>
                        <div className="WorkCard_work-card__thumbnail-inner__YScRN">
                          <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                            <source
                              srcSet="https://a-us.storyblok.com/f/1017006/2644x1510/aa9e64c09c/inner-1.jpg/m/312x178/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2644x1510/aa9e64c09c/inner-1.jpg/m/624x356/filters:quality(80) 2x"
                              media="(min-width: 0px) and (max-width: 479px)"
                            />
                            <source
                              srcSet="https://a-us.storyblok.com/f/1017006/2644x1510/aa9e64c09c/inner-1.jpg/m/647x370/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2644x1510/aa9e64c09c/inner-1.jpg/m/1294x740/filters:quality(80) 2x"
                              media="(min-width: 480px) and (max-width: 991px)"
                            />
                            <source
                              srcSet="https://a-us.storyblok.com/f/1017006/2644x1510/aa9e64c09c/inner-1.jpg/m/1008x576/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2644x1510/aa9e64c09c/inner-1.jpg/m/2016x1152/filters:quality(80) 2x"
                              media="(min-width: 992px) and (max-width: 1512px)"
                            />
                            <source
                              srcSet="https://a-us.storyblok.com/f/1017006/2644x1510/aa9e64c09c/inner-1.jpg/m/1322x755/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2644x1510/aa9e64c09c/inner-1.jpg/m/2644x1510/filters:quality(80) 2x"
                              media="(min-width: 1513px)"
                            />
                            <img
                              src="https://a-us.storyblok.com/f/1017006/2644x1510/aa9e64c09c/inner-1.jpg/m/312x178/filters:quality(80)"
                              loading="lazy"
                              width="312"
                              height="178"
                              alt=""
                              className=""
                              draggable="false"
                            />
                          </picture>
                        </div>
                      </div>
                      <div className="WorkCard_work-card__content__Br9N4 WorkCard_work-card__content--white__ISlcm">
                        <div className="WorkCard_work-card__content-inner__8Mqvf">
                          <h3 className="WorkCard_work-card__title__vsvFl">
                            Fremantle Arts Centre
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                </footer> */}
              </div>
            </main>
          </motion.div>
        </div>
      </ReactLenis>

      <div tabIndex={-1}></div>
      <div tabIndex={0}></div>
    </div>
  );
};
