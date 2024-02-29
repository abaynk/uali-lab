/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import IProject from "@/types";
import { getAllProjects } from "../../../../sanity/lib/query";
import Link from "next/link";
import Parallax from "@/components/Parallax";


export default function Work() {
  const [projects, setPorjects] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchAllProjects = async () => {
      const projects = await getAllProjects();
      setPorjects(projects);
    };

    fetchAllProjects();
  }, []);

  return (
    <main className="layout_work-page__yja2T">
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
      <div className="layout_work-header__q0X91">
        <h1 className="layout_work-header__heading__HhhhV">
          <span
            className="TextAnimateUp_word__Yvn5A"
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              transform: "translate3d(0px, 0%, 0px)",
              animation:
                "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
            }}
          >
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              W
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              o
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              r
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              l
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              d
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              -
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              c
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              l
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              a
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              s
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              s
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
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
                "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
            }}
          >
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              d
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              i
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              g
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              i
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              t
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              a
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              l
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
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
                "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
            }}
          >
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              p
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              r
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              o
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              d
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              u
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              c
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              t
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              s
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              ,
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
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
                "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
            }}
          >
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              i
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              d
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              e
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              a
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
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
                "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
            }}
          >
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              t
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              o
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
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
                "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
            }}
          >
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              e
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              x
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              e
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              c
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              u
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              t
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              i
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              o
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              n
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              .
            </span>
          </span>
        </h1>
      </div>

      <FirstSubsectionFourth projects={projects} />
    </main>
  );
}
const FirstSubsectionFourth = ({ projects }: { projects: IProject[] }) => {
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
            href={`/work/${projects[0]?.slug}`}
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
                    src={projects[0]?.coverImage}
                    loading="lazy"
                    width="450"
                    height="330"
                    alt=""
                    className=""
                    draggable="false"
                  />
                </picture>
              </Parallax>
              {/* <div className="WorkCard_work-card__thumbnail-inner__YScRN">
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
              </div> */}
            </div>
            <div className="WorkCard_work-card__content__Br9N4 WorkCard_work-card__content--white__ISlcm">
              <div className="WorkCard_work-card__content-inner__8Mqvf">
                <h3 className="WorkCard_work-card__title__vsvFl">
                  {projects[0]?.title}
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="WorkGrid_work-grid__row__p9SUz WorkGrid_work-grid__row--portrait__nwacA">
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
      </div> */}
    </div>
  );
};

