"use client";

import React from "react";
import styles from "./WorkModal.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const WorkModal = ({ blogName }: { blogName: string }) => {
  const router = useRouter();
  return (
    <div className="SmoothModal_modal-wrapper__kCDpT">
      <div
        className="SmoothModal_modal-backdrop__Yw8at"
        style={{ opacity: 0.5, pointerEvents: "all" }}
      ></div>
      <div tabIndex={0}></div>
      <div
        className="SmoothModal_modal-tab-trap-start__Eb_c5"
        tabIndex={-1}
      ></div>
      <div
        className="lenis lenis-smooth SmoothModal_modal__46NFH"
        style={{ opacity: 1 }}
      >
        <div className="lenis-content">
          <div
            className="SmoothModal_modal-inner__5cyWM"
            style={{ transform: "none" }}
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
              onClick={() => router.back()}
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
                          {blogName}
                        </h1>
                        <a
                          className="Button_button-wrapper__2Ps4h"
                          target="_blank"
                          href="https://www.curtin.edu.au/open-day/"
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
                        <p className="CaseStudySidebar_sidebar__industry__z8Mof">
                          Education
                        </p>
                      </div>
                      <div className="CaseStudySidebar_sidebar__intro__XCkoW">
                        <p>
                          Curtin University is one of Australia’s largest public
                          research institutions, offering industry-leading
                          education for over 55,000 students.
                        </p>
                      </div>
                      <div className="CaseStudySidebar_sidebar__body__umcIh">
                        <p>
                          Like many higher education institutions, the Open Day
                          activation remains an essential method of promoting
                          life on campus with digital platforms often being the
                          first touch point for prospective students. Curtin
                          wanted to provide an engaging online experience with a
                          fresh design treatment that accounted for the
                          geographical challenges of their campus.
                        </p>
                        <p>
                          The result was a featured-packed experience with an
                          easy to navigate UX that communicated the wealth of
                          activity happening throughout the day. Students were
                          empowered to prioritise, select and schedule their
                          preferences which was supported by a powerful MazeMap
                          overlay to enable wayfinding on campus.
                        </p>
                        <p>
                          The response to the Open Day website was universally
                          positive from faculty stakeholders and prospective
                          students with the website contributing to significant
                          attendance and subsequent student enrollments post the
                          event.
                        </p>
                      </div>
                      <ul className="CaseStudySidebar_custom-icon-list__c89wu">
                        <li>Digital Strategy</li>
                        <li>Interaction Design</li>
                        <li>Mapping &amp; Location Features</li>
                        <li>Event Searching &amp; Selection</li>
                        <li>Build My Plan Functionality</li>
                      </ul>
                    </div>
                  </div>
                  <div className="ProjectContents_project-content__blocks__zlvle">
                    <div className="ProjectContents_project-content__block-image__zfS56">
                      <div
                        className="ProjectContents_project-content__image__SCygk"
                        style={{ opacity: 1, transform: "translateY(0px)" }}
                      >
                        <video
                          className="ProjectContents_project-content__video__OGkYT"
                          autoPlay
                          playsInline
                          loop
                          preload="none"
                          src="https://player.vimeo.com/progressive_redirect/playback/895729829/rendition/720p/file.mp4?loc=external&amp;log_user=0&amp;signature=a4af87be7154edb7c1c1a2ebbc454f2c9ca39ce762345f43ff4bf48a898335d8"
                          aria-describedby="video-description-0-0"
                        ></video>
                        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI ProjectContents_project-content__picture__tSYMa">
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/2520x1554/172c43506d/curtinopenday-landscape-1.jpg/m/460x284/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2520x1554/172c43506d/curtinopenday-landscape-1.jpg/m/920x568/filters:quality(80) 2x"
                            media="(min-width: 0px) and (max-width: 479px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/2520x1554/172c43506d/curtinopenday-landscape-1.jpg/m/940x580/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2520x1554/172c43506d/curtinopenday-landscape-1.jpg/m/1880x1160/filters:quality(80) 2x"
                            media="(min-width: 480px) and (max-width: 1512px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/2520x1554/172c43506d/curtinopenday-landscape-1.jpg/m/1260x777/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2520x1554/172c43506d/curtinopenday-landscape-1.jpg/m/2520x1554/filters:quality(80) 2x"
                            media="(min-width: 1513px)"
                          />
                          <img
                            src="https://a-us.storyblok.com/f/1017006/2520x1554/172c43506d/curtinopenday-landscape-1.jpg/m/460x284/filters:quality(80)"
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
                    <div className="ProjectContents_project-content__block-image__zfS56">
                      <div
                        className="ProjectContents_project-content__image__SCygk ProjectContents_project-content__image--half__NgI6z"
                        style={{ opacity: 1, transform: "translateY(0px);" }}
                      >
                        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI ProjectContents_project-content__picture__tSYMa">
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/460x580/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/920x1160/filters:quality(80) 2x"
                            media="(min-width: 0px) and (max-width: 1512px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/616x777/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/1232x1554/filters:quality(80) 2x"
                            media="(min-width: 1513px)"
                          />
                          <img
                            src="https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/460x580/filters:quality(80)"
                            loading="eager"
                            width="460"
                            height="580"
                            alt=""
                            className=""
                            draggable="false"
                          />
                        </picture>
                      </div>
                      <div
                        className="ProjectContents_project-content__image__SCygk ProjectContents_project-content__image--half__NgI6z"
                        style={{ opacity: 1, transform: "translateY(0px);" }}
                      >
                        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI ProjectContents_project-content__picture__tSYMa">
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/460x580/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/920x1160/filters:quality(80) 2x"
                            media="(min-width: 0px) and (max-width: 1512px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/616x777/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/1232x1554/filters:quality(80) 2x"
                            media="(min-width: 1513px)"
                          />
                          <img
                            src="https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/460x580/filters:quality(80)"
                            loading="eager"
                            width="460"
                            height="580"
                            alt=""
                            className=""
                            draggable="false"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="ProjectContents_project-content__block-image__zfS56">
                      <div
                        className="ProjectContents_project-content__image__SCygk"
                        style={{ opacity: 1, transform: "translateY(0px);" }}
                      >
                        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI ProjectContents_project-content__picture__tSYMa">
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/460x284/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/920x568/filters:quality(80) 2x"
                            media="(min-width: 0px) and (max-width: 479px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/940x580/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/1880x1160/filters:quality(80) 2x"
                            media="(min-width: 480px) and (max-width: 1512px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/1260x777/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/2520x1554/filters:quality(80) 2x"
                            media="(min-width: 1513px)"
                          />
                          <img
                            src="https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/460x284/filters:quality(80)"
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
                    <div className="TestimonialSlider_testimonials__caGyT ProjectContents_project-content__block-testimonials__cknxT">
                      <h2 className="hidden">Testimonials</h2>
                      <div className="TestimonialSlider_testimonials__slider__8ckYL">
                        <figure
                          className="TestimonialSlider_testimonial__Xrc78 TestimonialSlider_testimonial--active__UGwiF"
                          style={{ opacity: 1, zIndex: 1, transform: "none" }}
                        >
                          <blockquote className="TestimonialSlider_testimonial__quote__Xr_uU">
                            <span>
                              “From the very beginning, it was evident that the
                              team truly grasped our brief and vision,
                              effectively translating it into a remarkable
                              reality. The level of responsiveness displayed by
                              the team instilled confidence in us, as we knew
                              our project was in capable hands. This level of
                              trust and collaboration is often lacking when
                              working with external agencies, but Humaan has
                              managed to foster a working relationship that goes
                              above and beyond.”
                            </span>
                          </blockquote>
                          <figcaption
                            className="TestimonialSlider_testimonial__author__pnq5X"
                            style={{
                              opacity: 1,
                              transform: "translateY(0px);",
                            }}
                          >
                            <span className="TestimonialSlider_testimonial__author-name__edwCT">
                              Paula McCarville
                            </span>
                            <span className="TestimonialSlider_testimonial__author-position__elLL6">
                              Marketing Operations{" "}
                            </span>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div className="ProjectContents_project-content__block-image__zfS56">
                      <div
                        className="ProjectContents_project-content__image__SCygk ProjectContents_project-content__image--half__NgI6z"
                        style={{ opacity: 1, transform: "translateY(0px);" }}
                      >
                        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI ProjectContents_project-content__picture__tSYMa">
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/460x580/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/920x1160/filters:quality(80) 2x"
                            media="(min-width: 0px) and (max-width: 1512px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/616x777/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/1232x1554/filters:quality(80) 2x"
                            media="(min-width: 1513px)"
                          />
                          <img
                            src="https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/460x580/filters:quality(80)"
                            loading="eager"
                            width="460"
                            height="580"
                            alt=""
                            className=""
                            draggable="false"
                          />
                        </picture>
                      </div>
                      <div
                        className="ProjectContents_project-content__image__SCygk ProjectContents_project-content__image--half__NgI6z"
                        style={{ opacity: 1, transform: "translateY(0px);" }}
                      >
                        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI ProjectContents_project-content__picture__tSYMa">
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/460x580/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/920x1160/filters:quality(80) 2x"
                            media="(min-width: 0px) and (max-width: 1512px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/616x777/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/1232x1554/filters:quality(80) 2x"
                            media="(min-width: 1513px)"
                          />
                          <img
                            src="https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/460x580/filters:quality(80)"
                            loading="eager"
                            width="460"
                            height="580"
                            alt=""
                            className=""
                            draggable="false"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="ProjectContents_project-content__block-image__zfS56">
                      <div
                        className="ProjectContents_project-content__image__SCygk"
                        style={{ opacity: 1, transform: "translateY(0px);" }}
                      >
                        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI ProjectContents_project-content__picture__tSYMa">
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/460x284/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/920x568/filters:quality(80) 2x"
                            media="(min-width: 0px) and (max-width: 479px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/940x580/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/1880x1160/filters:quality(80) 2x"
                            media="(min-width: 480px) and (max-width: 1512px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/1260x777/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/2520x1554/filters:quality(80) 2x"
                            media="(min-width: 1513px)"
                          />
                          <img
                            src="https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/460x284/filters:quality(80)"
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
                    <div className="ProjectContents_project-content__block-image__zfS56">
                      <div
                        className="ProjectContents_project-content__image__SCygk ProjectContents_project-content__image--half__NgI6z"
                        style={{ opacity: 1, transform: "translateY(0px);" }}
                      >
                        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI ProjectContents_project-content__picture__tSYMa">
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/460x580/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/920x1160/filters:quality(80) 2x"
                            media="(min-width: 0px) and (max-width: 1512px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/616x777/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/1232x1554/filters:quality(80) 2x"
                            media="(min-width: 1513px)"
                          />
                          <img
                            src="https://a-us.storyblok.com/f/1017006/1232x1554/bc514fec43/curtinopenday-portrait-2.jpg/m/460x580/filters:quality(80)"
                            loading="eager"
                            width="460"
                            height="580"
                            alt=""
                            className=""
                            draggable="false"
                          />
                        </picture>
                      </div>
                      <div
                        className="ProjectContents_project-content__image__SCygk ProjectContents_project-content__image--half__NgI6z"
                        style={{ opacity: 1, transform: "translateY(0px);" }}
                      >
                        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI ProjectContents_project-content__picture__tSYMa">
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/460x580/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/920x1160/filters:quality(80) 2x"
                            media="(min-width: 0px) and (max-width: 1512px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/616x777/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/1232x1554/filters:quality(80) 2x"
                            media="(min-width: 1513px)"
                          />
                          <img
                            src="https://a-us.storyblok.com/f/1017006/1232x1554/1f8f67093c/curtinopenday-portrait-3.jpg/m/460x580/filters:quality(80)"
                            loading="eager"
                            width="460"
                            height="580"
                            alt=""
                            className=""
                            draggable="false"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="ProjectContents_project-content__block-image__zfS56">
                      <div
                        className="ProjectContents_project-content__image__SCygk"
                        style={{ opacity: 1, transform: "translateY(0px);" }}
                      >
                        <picture className="Picture_picture__X3Eos Picture_picture--responsive__gDfjI ProjectContents_project-content__picture__tSYMa">
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/460x284/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/920x568/filters:quality(80) 2x"
                            media="(min-width: 0px) and (max-width: 479px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/940x580/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/1880x1160/filters:quality(80) 2x"
                            media="(min-width: 480px) and (max-width: 1512px)"
                          />
                          <source
                            srcSet="https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/1260x777/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/2520x1554/filters:quality(80) 2x"
                            media="(min-width: 1513px)"
                          />
                          <img
                            src="https://a-us.storyblok.com/f/1017006/2520x1554/c18185b851/curtinopenday-landscape-4.jpg/m/460x284/filters:quality(80)"
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
                  </div>
                </div>
                <footer className="ProjectContents_project-footer__6CKKh">
                  <h2 className="ProjectContents_project-footer__heading__PW9rG">
                    Up Next
                    {/* <span
                      className="TextAnimateUp_word__Yvn5A"
                      style={{
                        display: "inline-block",
                        whiteSpace: "pre",
                        transform: "translate3d(0px, 0%, 0px)",
                        animation:
                          "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8;",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          whiteSpace: "pre",
                          opacity: 1,
                        }}
                      >
                        U
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          whiteSpace: "pre",
                          opacity: 1,
                        }}
                      >
                        p
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          whiteSpace: "pre",
                          opacity: 1,
                        }}
                      >
                        {" "}
                      </span>
                    </span>
                    <span
                      className="TextAnimateUp_word__Yvn5A"
                      style={{
                        display: "inline-block",
                        whiteSpace: "pre",
                        transform: "translate3d(0px, 0%, 0px)",
                        animation:
                          "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8;",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          whiteSpace: "pre",
                          opacity: 1,
                        }}
                      >
                        N
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          whiteSpace: "pre",
                          opacity: 1,
                        }}
                      >
                        e
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          whiteSpace: "pre",
                          opacity: 1,
                        }}
                      >
                        x
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          whiteSpace: "pre",
                          opacity: 1,
                        }}
                      >
                        t
                      </span>
                    </span> */}
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
                      href="/work/fremantle-arts-centre"
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
                </footer>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div tabIndex={-1}></div>
      <div tabIndex={0}></div>
    </div>
  );
};
