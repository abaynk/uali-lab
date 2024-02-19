/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { WorkGrid } from "@/components/WorkGrid";
import { useState } from "react";
import { WorkModal } from "@/components/WorkModal";
import Modal from "react-modal";
import Link from "next/link";

const customStyles = {
  content: {
    top: "75%",
    left: "50%",
    right: "0",
    bottom: "0",
    width: "90%",
    height: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#f3f3e9",
    borderRadius: "50px 50px 0 0",
    padding: 30,
    border: "none",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
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
      <SectionOneHeading />
      <SecondSectionVideo />
      <ThirdSectionShowCase />
      <FourthSectionWork />
    </main>
  );
}

//TODO: implement animations for text; try preloading styles
const SectionOneHeading = () => {
  return (
    <div className="page_homepage__hero__7HVdw">
      <h1 className="page_homepage__heading__rG9o9">
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
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            E
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            x
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            t
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            r
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            a
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
            n
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            a
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            r
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            y
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
            transform:
              "translate3d(0px, 0%, 0px); animation: 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8;",
          }}
        >
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            D
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
            transform:
              "translate3d(0px, 0%, 0px); animation: 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8;",
          }}
        >
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            E
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            x
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            p
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            e
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            r
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            i
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            e
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            n
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            c
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            e
          </span>
          <span
            style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
          >
            s
          </span>
        </span>
      </h1>
    </div>
  );
};

//TODO: resolve mobile video playback, size change on scroll
const SecondSectionVideo = () => {
  const stylesWithProgress = ({
    progressValue,
    rest,
  }: {
    progressValue: number;
    rest: object;
  }) => {
    const style: any = {
      "--progress": progressValue,
      ...rest,
    };
    return style;
  };
  return (
    <div className="page_homepage__purple-change__jZXd6">
      <div className=""></div>
      <div className="HomepageShowreel_showreel-wrapper__34lEW page_homepage__showreel__Tgw78">
        <div
          className="HomepageShowreel_showreel__0_0mY"
          style={stylesWithProgress({
            progressValue: 0,
            rest: { transform: "translateY(0vh) translateZ(0px)" },
          })}
        >
          <div
            className="HomepageShowreel_showreel__inner__PDtub"
            style={{
              borderRadius: "30px",
              transform: "none",
              transformOrigin: "50% 50% 0px;",
            }}
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
              src="https://player.vimeo.com/progressive_redirect/playback/900035537/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=92f8baecbcaa673d013bf28d8697afbb95b9360f73659a39636e837060325902"
              preload="none"
              autoPlay
              loop
              playsInline
              disablePictureInPicture
            ></video>
            <button className="Button_button-wrapper__2Ps4h HomepageShowreel_showreel__fullscreen-button__flQO2">
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
                    fill-rule="evenodd"
                    d="m17.334 13-6.5 4.875v-9.75l6.5 4.875ZM2.167 13C2.167 7.02 7.02 2.166 13 2.166S23.834 7.02 23.834 13c0 5.98-4.854 10.833-10.834 10.833C7.02 23.833 2.167 18.98 2.167 13Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>See Showreel</span>
              </span>
            </button>
            <div className="HomepageShowreel_showreel__controls__wsIiL HomepageShowreel_showreel__controls--playing__k_fZx">
              <button aria-label="Pause Showreel Video">
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
              </button>
              <button aria-label="Unmute Showreel Video">
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
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

//TODO: add observer on div in second section to change background color
const ThirdSectionShowCase = () => {
  return (
    <section className="page_showcase__LVgh4">
      <h2 className="page_showcase__heading__0aQHD">
        <span
          className="TextAnimateUp_word__Yvn5A"
          style={{
            display: "inline-block",
            whiteSpace: "pre",
            transform: "translate3d(0px, 0%, 0px)",
            animation:
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            W
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            d
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
            s
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            i
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            g
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            n
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            ,
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            b
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            u
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            i
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            l
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            d
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            a
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            n
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            d
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            s
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            h
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            i
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            w
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            o
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            r
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            l
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            d
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            -
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            c
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            l
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            a
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            s
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            s
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            d
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            i
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            g
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            i
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
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            a
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            l
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
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
            r
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            o
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            d
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            u
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            c
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
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            s
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            f
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            o
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            r
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            f
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            o
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            r
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            w
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            a
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            r
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            d
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            -
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
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            h
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            i
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            n
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            k
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            i
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            n
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            g
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            b
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            r
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            a
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            n
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            d
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            s
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            .
          </span>
        </span>
      </h2>
      <div className="HomepageLogos_homepage-logos__76775">
        <div
          style={{
            opacity: 0,
            transform: "translateY(-100%) translateZ(0px)",
          }}
        >
          <svg
            width="141"
            height="20"
            viewBox="0 0 141 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 141,
                "--height": 20,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0V6.66829H6.58979V20H13.1796V6.66829H19.7694V0H0ZM39.539 0H26.3594V6.66747H39.539V0ZM26.3593 20.0002H19.7695V6.66846H26.3593V13.3319H39.5438V20.0002H26.3593ZM56.3402 5.0415H46.6562V7.80984H49.8924V16.5131H53.0992V7.80984H56.3402V5.0415ZM56.0234 12.22C56.0234 9.2536 57.7064 7.72861 59.9867 7.72754C62.3646 7.72863 63.8519 9.28766 63.8519 12.4823C63.8519 12.7251 63.8519 12.9097 63.8372 13.0554H58.7504C58.8483 14.0024 59.4114 14.4298 60.2192 14.4298C60.978 14.4298 61.6047 14.2647 62.4664 13.8227L63.6071 15.7071C62.5349 16.3337 61.4284 16.6931 60.0723 16.6931C57.4628 16.6931 56.0234 14.8572 56.0234 12.22ZM59.9058 9.90821C59.2302 9.90821 58.8483 10.3696 58.7504 11.2195H61.2277C61.0808 10.3502 60.7822 9.90821 59.9058 9.90821ZM69.4868 14.3026C68.6821 14.2998 68.2676 13.5957 68.2676 12.2385C68.2676 10.8786 68.6495 10.1258 69.4083 10.1258C70.0546 10.1258 70.3336 10.4852 70.7449 11.238L72.7914 9.69842C72.0325 8.48424 71.0876 7.73145 69.4524 7.73145C66.6765 7.73145 65.3203 9.55272 65.3203 12.1899C65.3203 15.0894 66.838 16.697 69.3839 16.697C70.9212 16.697 71.8611 16.1239 72.8697 14.6474L70.9848 13.1904C70.443 13.9894 70.0471 14.3007 69.4868 14.3026ZM77.5499 8.47995C78.0982 8.07199 78.7102 7.72716 79.7334 7.72716V7.73202C81.633 7.73202 82.5436 8.99476 82.5436 11.258V16.5178H79.5523V11.632C79.5523 10.5198 79.1851 10.2235 78.5584 10.2235C77.9318 10.2235 77.5499 10.5149 77.5499 11.598V16.513H74.5781V5.74561L77.5499 4.56543V8.47995ZM89.7123 13.9245C88.3268 13.9245 87.7638 12.5306 87.7638 10.7773C87.7638 9.02403 88.3415 7.63015 89.683 7.63015C90.7405 7.63015 91.137 8.30038 91.5483 9.36886L94.4564 8.23724C93.6633 6.07114 92.5421 4.86182 89.6977 4.86182C86.5937 4.86182 84.4102 7.09105 84.4102 10.7773C84.4102 14.1722 86.2461 16.6928 89.683 16.6928C92.4246 16.6928 93.7122 15.2358 94.4907 13.7253L91.7784 12.2975C91.1517 13.3805 90.7209 13.9196 89.7123 13.9196V13.9245ZM99.2657 7.91166V8.53332L99.2706 8.53818C99.7847 8.04765 100.362 7.73682 101.121 7.73682C101.748 7.73682 102.179 7.88252 102.526 8.09621L101.831 11.1608C101.449 10.748 101.018 10.4372 100.441 10.4372C99.7113 10.4372 99.2657 10.782 99.2657 11.831V16.5178H96.2891V7.91166H99.2657ZM108.915 12.8266C108.915 13.9097 108.533 14.2011 107.926 14.2011C107.319 14.2011 106.937 13.9048 106.937 12.7926V7.90674H103.945V13.1666C103.945 15.4298 104.856 16.6926 106.756 16.6926C107.764 16.6926 108.391 16.3477 108.919 15.9398V16.5129H111.911V7.9116H108.919V12.8266H108.915ZM117.047 8.48033C117.59 8.07237 118.202 7.72754 119.226 7.72754V7.7324C121.125 7.7324 122.036 8.99514 122.036 11.2584V16.5182H119.044V11.6323C119.044 10.5202 118.682 10.2239 118.056 10.2239C117.429 10.2239 117.047 10.5153 117.047 11.5984V16.5134H114.07V7.90724H117.047V8.48033ZM127.944 14.3026C127.139 14.2999 126.725 13.5957 126.725 12.2385C126.725 10.8786 127.107 10.1258 127.865 10.1258C128.512 10.1258 128.791 10.4852 129.202 11.238L131.248 9.69842C130.49 8.48424 129.545 7.73145 127.909 7.73145C125.133 7.73145 123.777 9.55272 123.777 12.1899C123.777 15.0894 125.3 16.697 127.841 16.697C129.378 16.697 130.318 16.1239 131.327 14.6474L129.442 13.1904C128.9 13.9894 128.504 14.3007 127.944 14.3026ZM136.008 8.47995C136.551 8.07199 137.163 7.72716 138.187 7.72716V7.73202C140.086 7.73202 140.997 8.99476 140.997 11.258V16.5178H138.005V11.632C138.005 10.5198 137.643 10.2235 137.016 10.2235C136.39 10.2235 136.008 10.5149 136.008 11.598V16.513H133.031V5.74561L136.008 4.56543V8.47995Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 0,
            transform: "translateY(-100%) translateZ(0px)",
          }}
        >
          <svg
            width="130"
            height="34"
            viewBox="0 0 130 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 130,
                "--height": 34,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M56.5798 6.44994C56.0288 6.15224 55.3411 5.92896 54.5125 5.78011L51.4883 5.25913C51.0077 5.1475 50.61 5.02759 50.3035 4.89528C49.9928 4.7671 49.7649 4.58931 49.6158 4.36603C49.4666 4.14275 49.3921 3.85746 49.3921 3.51014C49.3921 3.12561 49.4956 2.8155 49.7069 2.57155C49.9182 2.33174 50.2537 2.14567 50.7177 2.02163C51.1817 1.89759 51.7907 1.83557 52.5447 1.83557C53.4105 1.83557 54.0982 1.91826 54.6037 2.08779C55.1091 2.25731 55.4736 2.50953 55.6973 2.84858C55.9211 3.19176 56.0329 3.61351 56.0329 4.12208V4.3619H58.0173V4.25026C58.0173 3.43158 57.8267 2.70386 57.4497 2.06711C57.0727 1.43036 56.4969 0.921788 55.7139 0.553796C54.9351 0.181669 53.9408 -0.00439453 52.727 -0.00439453C51.7493 -0.00439453 50.9249 0.0989741 50.2496 0.301577C49.5743 0.504179 49.0275 0.781207 48.6091 1.12853C48.1907 1.47584 47.8799 1.86451 47.6811 2.29866C47.4822 2.73281 47.3828 3.17109 47.3828 3.61764C47.3828 4.29987 47.5361 4.86633 47.8385 5.31702C48.1409 5.76771 48.5635 6.12743 49.1103 6.39619C49.653 6.66081 50.2703 6.86342 50.9663 6.99986L54.0071 7.5043C54.7859 7.65315 55.3493 7.85162 55.6932 8.0997C56.037 8.34779 56.211 8.74472 56.211 9.29051C56.211 9.67504 56.1075 9.99342 55.9045 10.2498C55.7015 10.5061 55.3618 10.6922 54.8936 10.808C54.4214 10.9279 53.7917 10.9858 53.0004 10.9858C52.0849 10.9858 51.3682 10.9031 50.8503 10.7335C50.3325 10.5681 49.9596 10.3201 49.7359 9.98928C49.5122 9.66264 49.4003 9.24916 49.4003 8.75299V8.45529H47.3952V8.56693C47.3952 9.43522 47.6065 10.1877 48.0249 10.8245C48.4475 11.4613 49.0731 11.9574 49.9099 12.3047C50.7426 12.6521 51.7741 12.8257 52.9963 12.8257C54.2184 12.8257 55.2168 12.6562 55.9832 12.313C56.7496 11.974 57.313 11.5233 57.6693 10.9651C58.0297 10.4069 58.2079 9.81149 58.2079 9.17887C58.2079 8.54626 58.0711 8.03768 57.7977 7.57873C57.5243 7.11977 57.1142 6.74351 56.5632 6.44581L56.5798 6.44994ZM23.929 10.709L24.4469 8.07099L26.3028 0.186035H28.4902L25.3748 12.644H22.4252L19.923 5.39168L19.0115 2.19552H18.8458L17.9551 5.39168L15.5979 12.644H12.6483L9.36719 0.186035H11.5919L13.6135 8.07099L14.1687 10.709H14.3178L14.9889 8.07099L17.4912 0.186035H20.4035L23.0756 8.07099L23.7799 10.709H23.929ZM33.1016 12.644V0.186035H43.0442V1.98878H35.1067V5.48264H42.7666V7.26885H35.1067V10.8371H43.0442V12.644H33.1016ZM61.4062 1.98878V0.186035H73.1634V1.98878H68.2874V12.644H66.303V1.98878H61.4062ZM77.4688 0.186035V12.644H78.0777H79.4697H87.4114V10.8371H79.4697V7.26885H87.1297V5.48264H79.4697V1.98878H87.4114V0.186035H77.4688ZM100.598 7.43815C101.083 7.56219 101.456 7.76479 101.721 8.04182L101.717 8.05009C101.982 8.32712 102.226 8.66617 102.45 9.0631L104.53 12.6521H102.23L100.246 9.21195C100.064 8.87704 99.8607 8.60415 99.6452 8.40154C99.4298 8.19481 99.1605 8.05009 98.8374 7.95499C98.5143 7.85989 98.0876 7.81441 97.5573 7.81441H95.2746V12.6479H93.2695V0.189941H99.724C100.664 0.189941 101.476 0.330523 102.164 0.61582C102.852 0.901117 103.378 1.31459 103.742 1.86038C104.107 2.40616 104.289 3.06772 104.289 3.84919C104.289 4.54383 104.144 5.13923 103.854 5.6354C103.56 6.13157 103.142 6.52023 102.591 6.80553C102.04 7.09083 101.377 7.25622 100.598 7.30584V7.43815ZM95.2705 6.27215H99.7032V6.26388C100.532 6.26388 101.157 6.10262 101.576 5.78011C101.994 5.4576 102.205 4.88288 102.205 4.12622C102.205 3.36956 101.998 2.82377 101.576 2.48886C101.157 2.15808 100.532 1.98855 99.7032 1.98855H95.2705V6.27215ZM118.629 7.55001L118.725 9.79931H118.576L111.396 0.186035H109.246V12.644H111.247V5.33379L111.172 3.17959H111.322L118.48 12.644H120.635V0.186035H118.629V7.55001ZM0 33.8139L5.54716 21.3601L5.53888 21.356H8.3601L13.9073 33.8139H11.6453L10.2119 30.5806H3.65806L2.22467 33.8139H0ZM6.14372 24.9863L4.46176 28.7778H4.47004H9.42479L7.74283 24.9863L7.01785 23.2207H6.86871L6.14372 24.9863ZM26.7198 28.5176C26.7198 29.3611 26.5913 30.0433 26.3303 30.5643C26.0693 31.0853 25.6592 31.4657 25.0958 31.7096C24.5324 31.9536 23.795 32.0735 22.8794 32.0735C21.9639 32.0735 21.243 31.9536 20.6796 31.7096C20.1162 31.4698 19.7019 31.0853 19.4368 30.5643C19.1716 30.0433 19.0391 29.3611 19.0391 28.5176V21.3604H17.0547V28.6499C17.0547 29.7787 17.2825 30.7421 17.7424 31.5401C18.1981 32.3381 18.8609 32.95 19.7268 33.3718C20.5926 33.7935 21.6449 34.0044 22.8794 34.0044C24.114 34.0044 25.1869 33.7935 26.0528 33.3718C26.9186 32.95 27.5815 32.3422 28.0372 31.5401C28.4929 30.7421 28.7249 29.7787 28.7249 28.6499V21.3604H26.7198V28.5176ZM40.2664 26.9539C41.095 27.1028 41.7827 27.3261 42.3337 27.6238L42.3171 27.6155C42.8681 27.9132 43.2782 28.2895 43.5516 28.7484C43.8251 29.2074 43.9618 29.716 43.9618 30.3486C43.9618 30.9812 43.7836 31.5766 43.4232 32.1348C43.0669 32.693 42.5035 33.1437 41.7371 33.4827C40.9707 33.8259 39.9764 33.9954 38.7502 33.9954C37.5239 33.9954 36.4924 33.8217 35.6597 33.4744C34.827 33.1312 34.1973 32.6351 33.7789 31.9983C33.3604 31.3616 33.1491 30.6091 33.1491 29.7408V29.6291H35.1542V29.9268C35.1542 30.423 35.2661 30.8365 35.4898 31.1631C35.7135 31.4939 36.0864 31.742 36.6042 31.9074C37.1221 32.0769 37.8388 32.1596 38.7543 32.1596C39.5456 32.1596 40.1753 32.1017 40.6476 31.9818C41.1157 31.866 41.4554 31.6758 41.6584 31.4236C41.8614 31.1672 41.965 30.8489 41.965 30.4643C41.965 29.9186 41.7951 29.5216 41.4471 29.2735C41.1033 29.0254 40.5398 28.827 39.761 28.6781L36.7202 28.1737C36.0242 28.0372 35.407 27.8346 34.8643 27.57C34.3174 27.3013 33.8948 26.9415 33.5924 26.4908C33.29 26.0402 33.1367 25.4737 33.1367 24.7915C33.1367 24.3449 33.2361 23.9066 33.435 23.4725C33.6339 23.0383 33.9446 22.6497 34.363 22.3024C34.7814 21.955 35.3282 21.678 36.0035 21.4754C36.6788 21.2728 37.5032 21.1694 38.4809 21.1694C39.6947 21.1694 40.689 21.3555 41.4678 21.7276C42.2467 22.0956 42.8266 22.6042 43.2036 23.2409C43.5765 23.8777 43.7671 24.6054 43.7671 25.4241V25.5357H41.7827V25.2959C41.7827 24.7873 41.6708 24.3656 41.4471 24.0224C41.2234 23.6834 40.8588 23.4311 40.3534 23.2616C39.848 23.0921 39.1603 23.0094 38.2945 23.0094C37.5405 23.0094 36.9315 23.0714 36.4675 23.1955C36.0035 23.3195 35.6679 23.5014 35.4567 23.7454C35.2454 23.9893 35.1418 24.2994 35.1418 24.684C35.1418 25.0313 35.2164 25.3166 35.3655 25.5399C35.5147 25.7631 35.7425 25.9368 36.0532 26.0691C36.3639 26.2014 36.7616 26.3213 37.2422 26.433L40.2664 26.9539ZM46.75 21.3604V23.1631H51.6468V33.8142H53.6311V23.1631H58.5113V21.3604H46.75ZM70.1645 28.6086C70.6492 28.7326 71.022 28.9352 71.2872 29.2122L71.283 29.2205C71.5482 29.4975 71.7926 29.8366 72.0163 30.2335L74.096 33.8225H71.7967L69.8124 30.3824C69.6301 30.0474 69.4271 29.7746 69.2117 29.572C68.9962 29.3693 68.727 29.2205 68.4038 29.1254C68.0807 29.0303 67.654 28.9848 67.1237 28.9848H64.841V33.8183H62.8359V21.3604H69.2904C70.2308 21.3604 71.0428 21.5009 71.7305 21.7862C72.4182 22.0715 72.9443 22.485 73.3089 23.0308C73.6734 23.5766 73.8557 24.2381 73.8557 25.0196C73.8557 25.7142 73.7107 26.3096 73.4207 26.8058C73.1307 27.302 72.7123 27.6906 72.1613 27.9759C71.6103 28.2612 70.9433 28.4266 70.1645 28.4762V28.6086ZM64.8369 27.4426H69.2697C70.0982 27.4426 70.7238 27.2813 71.1422 26.9588C71.5606 26.6363 71.7719 26.0616 71.7719 25.3049C71.7719 24.5482 71.5606 24.0025 71.1422 23.6675C70.7238 23.3368 70.0982 23.1672 69.2697 23.1672H64.8369V27.4426ZM82.8987 21.3604L77.3516 33.8183H79.5762L81.0096 30.585H87.5635L88.9969 33.8183H91.2588L85.7117 21.3604H82.8987ZM81.8133 28.7781L83.4953 24.9865L84.2203 23.221H84.3694L85.0944 24.9865L86.7764 28.7781H81.8216H81.8133ZM95.4531 21.3599H97.4541V32.011H105.118V33.8137H95.4531V21.3599ZM111.325 21.3604H109.324V33.8183H111.325V21.3604ZM129.994 33.8139H127.732H127.723L126.29 30.5806H119.736L118.303 33.8139H116.078L121.625 21.356H124.447L129.994 33.8139ZM122.222 24.9821L120.54 28.7737H120.544H125.499L123.817 24.9821L123.092 23.2166H122.943L122.222 24.9821Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 0,
            transform: "translateY(-100%) translateZ(0px)",
          }}
        >
          <svg
            width="132"
            height="26"
            viewBox="0 0 132 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 132,
                "--height": 26,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 13.5871V15.3484H1.78839L1.81475 15.3482H3.57848C5.43928 15.3482 6.17067 13.8187 6.54382 13.0384C6.58053 12.9617 6.61378 12.8921 6.64429 12.832C6.68154 12.7115 6.72146 12.5754 6.76522 12.4262L6.77266 12.4009C9.58074 6.94056 13.6654 6.54197 15.1599 6.54197H15.3302V5H15.3307V2.18043L15.329 2.18018V0C7.40903 0 0 5.87097 0 13.5871ZM15.329 12.4129V10.6516H14H13.5406H11.8374C9.97662 10.6516 9.24524 12.181 8.87208 12.9614C8.83537 13.0381 8.80212 13.1076 8.77161 13.1677L8.77161 13.1677C5.96129 19.0387 1.70323 19.458 0.170323 19.458H0V21V21.6387V23.8194V25V26C7.92 26 15.329 20.129 15.329 12.4129ZM26.2323 16.858C24.444 16.858 22.5704 15.6 22.5704 15.6L20.8672 18.0322C20.8672 18.0322 22.7407 19.7935 26.3175 19.7935C29.724 19.7935 31.342 17.7806 31.342 15.4322C31.342 13.2516 29.724 12.1613 26.8285 11.3226C25.3807 10.9032 24.7846 10.6516 24.7846 9.98062C24.7846 9.4774 25.2104 9.05804 26.2323 9.05804C28.1059 9.05804 29.4685 10.1484 29.4685 10.1484L31.1717 7.54836C31.1717 7.54836 29.6388 6.12256 26.2323 6.12256C22.8259 6.12256 21.2078 7.79998 21.2078 10.1484C21.2078 12.329 22.7407 13.3355 25.4659 14.1742C27.2543 14.7613 27.6801 15.0968 27.6801 15.7677C27.6801 16.4387 27.1691 16.858 26.2323 16.858ZM42.413 19.458H45.8194L40.7098 6.37417H37.3033L32.364 19.458H35.7704L36.622 17.1097H41.6465L42.413 19.458ZM40.7949 14.5935H37.4736L39.1769 9.72901L40.7949 14.5935ZM45.564 6.37417H56.0388V9.05804H52.3769V19.5419H49.2259V9.14191H45.564V6.37417ZM68.813 6.37417H58.3382V9.05804H62.0001V19.5419H65.1511V9.14191H68.813V6.37417ZM79.5433 14.0903H74.2633V16.6903H80.5652V19.458H71.1124V6.37417H80.5652V9.05804H74.2633V11.5742H79.5433V14.0903ZM94.3614 10.8193C94.3614 8.21933 92.3175 6.37417 89.3369 6.37417H83.5459V19.5419H86.6969V15.2645H88.4853L91.2104 19.5419H94.7872V19.2903L91.8917 14.929V14.6774C93.4246 14.0064 94.3614 12.6645 94.3614 10.8193ZM86.6969 9.05804H89.0814C90.2736 9.05804 91.0401 9.64514 91.0401 10.7355C91.0401 11.8258 90.1885 12.4129 89.0814 12.4129H86.6969V9.05804ZM97.0014 19.458V6.37417H100.152V16.6903H105.943V19.458H97.0014ZM111.564 14.0903H116.844V11.658H111.564V9.14191H117.866V6.37417H108.413V19.5419H117.866V16.7742H111.564V14.0903ZM128.596 6.37417H132.003L127.319 14.3419V19.458H124.168V14.4258L119.569 6.37417H122.976L125.19 10.3161L125.786 11.658L126.382 10.3161L128.596 6.37417Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 0,
            transform: "translateY(-100%) translateZ(0px)",
          }}
        >
          <svg
            width="90"
            height="43"
            viewBox="0 0 90 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 90,
                "--height": 43,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M62.864 28.4919C62.5156 28.6126 61.6321 28.8568 60.9621 28.8568C59.7302 28.8568 58.688 27.8422 58.688 26.5849V18.2242H63.4694C64.197 17.1479 65.1212 16.2189 66.1887 15.4878H58.688V12.0176H55.9392V15.4878H52.7703V18.2242H55.9392V26.5849C55.9406 29.39 58.1936 31.6717 60.9621 31.6717C61.7557 31.6717 62.5128 31.4093 62.864 31.2732V28.4919ZM64.1113 23.5805C64.1113 28.1041 67.6825 31.671 72.2104 31.6717C76.7396 31.671 80.3094 28.1041 80.3094 23.5805C80.3094 22.4284 80.0524 21.2342 79.565 20.1902H76.4607C77.0352 21.0658 77.5002 22.274 77.5002 23.5805C77.5002 26.5344 75.1671 28.889 72.2104 28.889C69.2536 28.889 66.9205 26.4081 66.9205 23.5805C66.9205 20.7529 69.262 18.2242 72.0938 18.2242H81.346L81.3432 20.7936L86.0515 16.8799L81.3517 12.9746L81.3488 15.4878H72.2118C67.745 15.4878 64.1113 19.0563 64.1113 23.5805ZM57.1205 0H80.3937C85.6976 0 89.9985 4.2954 89.9985 9.59553V32.8462C89.9985 38.145 85.699 42.4418 80.3937 42.4418H57.1205C51.8166 42.4418 47.5156 38.1464 47.5156 32.8462V9.59553C47.5156 4.2968 51.8152 0 57.1205 0ZM7.92771 20.4427C7.38552 20.5297 6.81384 20.5732 6.21406 20.5732H3.65905V14.6837H6.32924C6.88969 14.6837 7.43609 14.7174 7.96985 14.7847C8.5036 14.8535 8.97696 14.9924 9.39273 15.2057C9.80991 15.4176 10.1428 15.7137 10.3956 16.0898C10.6457 16.4672 10.7721 16.9373 10.7721 17.5562C10.7721 18.175 10.6471 18.6774 10.3956 19.0647C10.1442 19.452 9.80569 19.7565 9.38009 19.9782C8.95449 20.2013 8.46989 20.3557 7.92771 20.4427ZM6.70849 11.6091H0V32.1501H3.65905V23.6506H6.47813C7.5611 23.6506 8.58788 23.5425 9.55567 23.3306C10.5235 23.1173 11.3704 22.7749 12.0966 22.3006C12.8214 21.8263 13.3987 21.2033 13.8243 20.4301C14.2513 19.6555 14.4634 18.6984 14.4634 17.5576C14.4634 16.4939 14.278 15.5832 13.9114 14.8296C13.542 14.0747 13.0195 13.4558 12.3424 12.9731C11.664 12.489 10.8507 12.1424 9.90261 11.9277C8.95449 11.7158 7.88838 11.6091 6.70849 11.6091ZM23.7297 25.7961H24.5121V26.29C24.5121 27.3916 24.203 28.2616 23.5836 28.9001C22.9642 29.54 22.054 29.8585 20.8544 29.8585C20.5651 29.8585 20.2743 29.829 19.9835 29.7715C19.6942 29.7126 19.4329 29.6171 19.1998 29.481C18.968 29.3463 18.7798 29.1667 18.6337 28.9436C18.4876 28.7219 18.416 28.4468 18.416 28.1171C18.416 27.595 18.5901 27.1853 18.9385 26.885C19.2854 26.5847 19.7223 26.3531 20.2448 26.1876C20.7659 26.0234 21.3376 25.9167 21.957 25.869C22.5765 25.8213 23.1664 25.7961 23.7297 25.7961ZM24.484 30.3805H24.571L24.5724 30.3833V32.1528H27.8256V23.6813C27.8256 22.9839 27.7329 22.2893 27.5489 21.5919C27.3648 20.8958 27.0404 20.2672 26.5754 19.7059C26.1105 19.146 25.477 18.6913 24.6736 18.3433C23.8701 17.9953 22.849 17.8213 21.6101 17.8213C20.544 17.8213 19.4947 18.0065 18.4581 18.3728C17.4229 18.7404 16.5071 19.2919 15.7135 20.0272L17.5142 22.1448C17.9595 21.6999 18.5213 21.3224 19.1983 21.0123C19.8754 20.7036 20.5819 20.5478 21.3179 20.5478C22.1888 20.5478 22.9389 20.7569 23.5681 21.1723C24.1974 21.5877 24.5121 22.2304 24.5121 23.1004V23.4498C23.4277 23.4498 22.3194 23.5045 21.1873 23.6098C20.0552 23.7164 19.0242 23.9339 18.0943 24.2623C17.1644 24.5906 16.4045 25.0649 15.8146 25.6838C15.2247 26.3026 14.9297 27.1334 14.9297 28.1788C14.9297 28.9899 15.0982 29.6719 15.4368 30.2234C15.7753 30.7748 16.2009 31.2197 16.715 31.5579C17.2263 31.896 17.7881 32.1374 18.3991 32.2819C19.0087 32.4265 19.5945 32.4995 20.1563 32.4995C21.1438 32.4995 22.0231 32.3002 22.7984 31.9045C23.5738 31.5087 24.1342 30.9994 24.484 30.3805ZM28.8544 18.2241H32.7171L36.6079 28.3501H36.6669L40.1223 18.2241H43.7518L37.1585 35.1391C36.9071 35.7762 36.636 36.3431 36.3466 36.8356C36.0559 37.3282 35.7075 37.745 35.3002 38.0831C34.8943 38.4213 34.4153 38.6781 33.8633 38.8521C33.3113 39.0261 32.6483 39.1131 31.8729 39.1131C31.5836 39.1131 31.2872 39.0991 30.9866 39.0696C30.686 39.0416 30.3812 38.9868 30.0722 38.9097L30.3615 35.8926C30.5947 35.9698 30.8223 36.0232 31.0442 36.0526C31.2661 36.0821 31.4754 36.0961 31.6692 36.0961C32.0373 36.0961 32.3463 36.0526 32.5977 35.9656C32.8505 35.8786 33.0626 35.7439 33.2368 35.5601C33.411 35.3748 33.5655 35.1489 33.7003 34.8767C33.8366 34.6059 33.9827 34.2873 34.1372 33.9197L34.8339 32.1501L28.8516 18.2241H28.8544Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 0,
            transform: "translateY(-100%) translateZ(0px)",
          }}
        >
          <svg
            width="93"
            height="49"
            viewBox="0 0 93 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 93,
                "--height": 49,
              } as any
            }
          >
            <path
              d="M19.2406 11.7291C22.9328 11.6351 26.6145 11.8051 30.2487 12.2411L27.1282 27.5364L4.74756 26.8729L2.15378 13.7912C7.80874 12.6227 13.5263 11.8748 19.2406 11.7291ZM32.5543 0.935791L31.1417 7.86113C27.0865 7.61247 23.0273 7.67703 19.0144 8.03755C13.1006 8.56875 7.3055 9.70784 1.64988 11.2548L0 2.92953L32.5543 0.935791Z"
              fill="currentColor"
            ></path>
            <path
              d="M34.9195 12.9443C35.9077 13.1297 36.8888 13.3355 37.8653 13.5643C38.8711 13.8008 39.8724 14.0617 40.8625 14.3442C41.8651 14.6229 42.811 14.9361 43.8866 15.2666C48.0474 16.5131 52.1927 17.7212 56.4631 18.7663C57.4813 19.0163 58.5067 19.2534 59.5366 19.4803L60.1859 27.9564L31.6992 26.6262L34.9195 12.9443ZM37.8046 0.688477L58.1514 1.35455L59.0367 12.9366C54.4833 12.1696 49.9124 11.1653 45.3468 10.1113C44.3585 9.87794 43.2406 9.58645 42.1559 9.35889C41.0646 9.12302 39.9708 8.91208 38.8717 8.7267C37.9207 8.56753 36.9663 8.43458 36.0094 8.31248L37.8046 0.688477Z"
              fill="currentColor"
            ></path>
            <path
              d="M63.9218 20.3467C65.7835 20.6778 67.6596 20.9705 69.5591 21.1879C74.0283 21.698 78.609 21.8354 83.2008 21.4365C85.4719 21.2435 87.7404 20.9156 89.9855 20.4592L88.9985 27.9732H64.5828L63.9218 20.3467ZM92.3895 2.15503L91.164 11.4864C88.2789 12.4714 85.3037 13.2065 82.2595 13.6661C78.3118 14.2657 74.2552 14.4147 70.1588 14.2127C67.8923 14.1015 65.6173 13.8771 63.3344 13.5805L62.4727 3.6425L92.3895 2.15503Z"
              fill="currentColor"
            ></path>
            <path
              d="M21.2315 36.0211L20.3163 38.1771C18.3483 38.0666 16.6547 39.4818 16.6573 42.4241L16.6632 47.7898L14.4638 48.1516L14.454 36.4308L16.5146 36.0703L16.5159 38.5172H16.5622C17.2258 37.0802 18.345 36.023 20.1318 36.0223L21.2315 36.0211ZM26.3135 36.0613C29.4288 36.0594 30.8948 37.2688 30.8981 40.3224L30.9046 47.777L28.9359 48.1388L28.9333 46.5676H28.889C28.2261 47.8479 26.8526 48.1407 25.4563 48.142C22.8442 48.1439 21.1494 46.2365 21.1468 43.7224C21.1448 41.2077 23.4094 39.7011 25.7679 39.6998C26.8682 39.6979 27.9431 40.0124 28.7 40.7973L28.6987 39.9203C28.697 38.4622 27.9231 38.1492 26.5995 38.0933L26.2844 38.0846L25.9504 38.0825C24.9882 38.0832 23.7523 38.1516 22.562 38.7358L23.1558 36.5133L23.8357 36.3762L24.3575 36.2765C24.9889 36.162 25.6864 36.0621 26.3135 36.0613ZM35.4748 36.0537L35.4853 47.7751L33.2872 48.1362L33.2767 36.4148L35.4748 36.0537ZM45.8467 36.0447C47.4725 36.0434 48.4347 36.5133 49.6041 37.6357L48.2997 39.0516C47.6133 38.3555 47.0859 37.9521 46.0781 37.9534C45.1388 37.9534 44.2907 38.2698 44.2933 39.3469C44.2935 40.1994 44.927 40.5553 45.7717 40.818L46.0606 40.9026L46.9862 41.1485L47.3029 41.2388C48.6739 41.6486 49.9966 42.3319 49.9991 44.5048C49.9998 46.7063 48.125 48.1209 45.996 48.1241C44.279 48.1254 42.972 47.5654 41.9192 46.2186L43.4283 44.9599C44.0939 45.7225 44.7568 46.2167 45.8559 46.2154C46.7268 46.2147 47.8017 45.7871 47.801 44.7765C47.7999 43.7582 47.1163 43.3379 46.2227 43.0476L45.9177 42.955L45.601 42.8682L44.9482 42.6964C44.8934 42.6816 44.8386 42.6665 44.7838 42.6511L44.4569 42.5542C43.2127 42.163 42.097 41.5171 42.0959 39.6403C42.0926 37.5303 43.7405 36.0466 45.8467 36.0447ZM73.5479 31.9792L75.8634 32.3359L69.168 48.1043H69.1217L65.9328 40.5845L62.826 48.1094H62.7803L55.9201 32.3532L58.2323 31.9927L62.9133 42.9905L64.7405 38.4303L62.1031 32.3474L64.2079 31.9869L65.9054 35.9821L67.5286 31.985L69.6113 32.3417L67.0762 38.4284L69.0487 43.2321L73.5479 31.9792ZM81.1311 31.9716L89.1374 47.637L86.8943 48.087L84.2112 42.7917L77.89 42.7968L75.2389 48.0985L73.132 47.6511L81.0855 31.9716H81.1311ZM13.9886 32.3903L13.9899 34.4108L10.327 34.414L10.3388 47.7949L8.09568 48.0666L8.08265 34.4172L4.00781 34.4204L4.71509 32.3979L13.9886 32.3903ZM40.3248 31.8955L40.3397 47.7687L38.1429 48.0416L38.1266 32.2567L40.3248 31.8955ZM26.0227 41.6079C24.717 41.6091 23.3442 42.2381 23.3455 43.7205C23.3475 45.3134 24.2868 46.1214 25.865 46.1201C27.3773 46.1201 28.7045 45.5557 28.7019 43.7154C28.7019 42.2797 27.3962 41.6066 26.0227 41.6079ZM81.0438 36.3503L78.8274 40.7762L83.2921 40.7718L81.0438 36.3503ZM34.2858 31.9818C35.0238 31.9818 35.6228 32.568 35.6228 33.2916C35.6228 34.0145 35.0238 34.6007 34.2858 34.6007C33.5492 34.6007 32.9515 34.0145 32.9515 33.2916C32.9515 32.568 33.5492 31.9818 34.2858 31.9818Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 1,
            transform: "translateY(0%) translateZ(0px)",
          }}
        >
          <svg
            width="145"
            height="22"
            viewBox="0 0 145 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 145,
                "--height": 22,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M40.008 9.23243C40.7171 5.57082 42.9727 4.7077 46.481 4.7077H51.0595C56.6028 4.7077 57.0941 5.88168 56.3735 9.42224H52.4791L52.5458 9.077C52.7198 8.1795 52.1038 7.92021 50.9456 7.92021H46.7002C44.6481 7.92021 44.0779 8.86999 43.7771 10.4236L43.5163 11.7716C43.1647 13.5845 43.4168 14.275 45.259 14.275H49.4163C51.1705 14.275 51.7299 14.1024 52.0315 12.5481H55.9259L55.6981 13.7228C55.2905 15.8301 54.1975 17.4883 50.2852 17.4883H44.0048C40.4965 17.4883 38.5762 16.6244 39.2853 12.9628L40.008 9.23243ZM23.4917 4.84553L28.9469 12.9975L28.1031 17.3496H31.9982L32.8413 12.9975L41.4552 4.84553H36.7536L31.4825 9.9576L28.1926 4.84553H23.4917ZM17.8022 7.95463H11.7153L11.1265 10.9938H17.5644C18.6166 10.9938 19.0829 10.5798 19.257 9.68158L19.3372 9.26685C19.5514 8.16164 19.0306 7.95463 17.8022 7.95463ZM9.89453 17.3493H6.00012L8.42257 4.84599H20.176C23.1757 4.84599 23.6986 6.31364 23.2638 8.55917L23.1098 9.35352C22.7846 11.0282 22.2088 12.0131 20.3393 12.4278L20.3321 12.4622C21.4495 12.6692 22.3176 13.1699 21.9194 15.2249L21.5075 17.3493H17.6131L17.9046 15.8473C18.1589 14.5344 17.8567 14.1025 16.6461 14.1025H10.5234L9.89453 17.3493ZM63.6632 4.84587H59.7688L57.3457 17.3499H61.2401L62.1569 12.6175H70.3662L69.4501 17.3499H73.3445L75.7669 4.84587H71.8725L71.0094 9.30184H62.7994L63.6632 4.84587ZM78.9598 4.84587H82.8542L80.431 17.3499H76.5374L78.9598 4.84587ZM91.2131 4.7077C87.7041 4.7077 85.45 5.57082 84.7401 9.23243L84.0174 12.9628C83.3083 16.6244 85.2286 17.4883 88.737 17.4883H93.4207C97.8058 17.4883 99.7347 17.3149 100.431 13.7228L101.119 10.165H92.3828L91.8821 12.7558H96.7235L96.6533 13.1182C96.419 14.3273 95.3704 14.4828 94.3533 14.4828H90.196C88.2313 14.4828 87.813 14.0165 88.2277 11.8748L88.5292 10.3205C88.944 8.1795 89.5435 7.71249 91.5082 7.71249H95.7357C96.9813 7.71249 97.6697 7.86792 97.429 9.11138H101.253L101.33 8.71456C101.803 6.27921 101.492 4.7077 97.0723 4.7077H91.2131ZM105.026 4.84587H118.92L118.358 7.74751H108.358L107.972 9.75094H117.444L116.942 12.3417H107.469L107.081 14.3444H117.308L116.725 17.3499H102.604L105.026 4.84587ZM131.404 7.95463H125.317L124.728 10.9938H131.167C132.219 10.9938 132.685 10.5798 132.858 9.68158L132.939 9.26685C133.154 8.16164 132.632 7.95463 131.404 7.95463ZM123.497 17.3493H119.602L122.025 4.84599H133.778C136.779 4.84599 137.3 6.31364 136.866 8.55917L136.711 9.35352C136.387 11.0282 135.81 12.0131 133.941 12.4278L133.935 12.4622C135.052 12.6692 135.92 13.1699 135.522 15.2249L135.11 17.3493H131.215L131.507 15.8473C131.761 14.5344 131.459 14.1025 130.248 14.1025H124.126L123.497 17.3493Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 1,
            transform: "translateY(0%) translateZ(0px)",
          }}
        >
          <svg
            width="214"
            height="66"
            viewBox="0 0 214 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 214,
                "--height": 66,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M-1.67247 36.3118C-12.0545 25.9271 -12.0545 9.10396 -1.67247 -1.21149C3.51854 -6.40314 10.3188 -9 17.119 -9C23.9192 -9 30.7188 -6.40314 35.9105 -1.21149C41.1015 3.98085 43.6631 10.7655 43.6631 17.5502C43.6631 24.3348 41.0322 31.1195 35.8412 36.3118L27.4664 44.6888L22.2754 39.4965L30.6502 31.1195C38.126 23.6425 38.126 11.4578 30.6502 3.98085C23.1752 -3.56535 10.9936 -3.56535 3.51854 3.91162C-0.218985 7.71934 -2.15696 12.6348 -2.15696 17.5502C-2.15696 22.4656 -0.288197 27.381 3.44933 31.1195L44.9781 72.5198C42.1397 75.3575 37.4338 75.3575 34.5954 72.5198L-1.67247 36.3118ZM105.955 0.449352C104.778 0.380121 103.809 -0.589116 103.809 -1.76605C103.809 -2.94298 104.778 -3.98145 105.955 -3.98145C107.131 -3.98145 108.1 -2.94298 108.1 -1.76605C108.1 -0.519885 107.131 0.449352 105.955 0.449352ZM108.1 15.1264H103.947V1.90321H108.1V15.1264ZM72.6627 7.78783V-3.3584H76.8847V14.9193H72.5934L65.6022 3.84165V14.9193H61.3809V-3.3584H65.7413L72.6627 7.78783ZM83.1828 6.47293L79.5837 5.57292C80.4835 2.87291 81.937 1.48828 85.3285 1.48828C87.8894 1.48828 90.8655 2.80367 90.8655 6.54216V15.0576H87.4741L86.9204 14.0191C86.5743 14.5037 85.813 15.4044 83.7365 15.4044C81.8678 15.473 79.4453 14.2268 79.4453 11.3191C79.4453 9.79603 79.999 7.64986 84.6363 7.02678L86.7127 6.74985C86.7127 5.64215 86.2974 4.88061 85.1208 4.88061C84.0134 4.88061 83.3905 5.36523 83.1828 6.47293ZM84.8447 9.65757C83.5981 9.86526 83.3905 10.4191 83.3905 11.0422C83.3905 11.6653 83.9442 12.1499 84.9824 12.1499C85.9514 12.1499 86.7127 11.4576 86.7127 10.6261V9.38064L84.8447 9.65757ZM94.6721 -1.62695V1.83461H92.5957V5.57309H94.6721V11.1116C94.6721 14.0885 96.6108 15.4732 98.7557 15.4046C100.832 15.4046 101.87 14.5732 102.355 14.0885L100.763 11.0424C100.555 11.2501 100.278 11.4577 99.7254 11.4577C99.1018 11.4577 98.8249 11.0424 98.8249 10.35V5.57309H101.663V1.83461H98.8249V-1.62695H94.6721ZM110.314 8.48063C110.314 12.8422 113.567 15.473 117.028 15.473C120.489 15.473 123.742 12.773 123.742 8.48063C123.742 4.1883 120.558 1.48828 117.028 1.48828C113.567 1.48828 110.314 4.1883 110.314 8.48063ZM114.467 8.48063C114.467 6.61139 115.644 5.43446 117.097 5.43446C118.551 5.43446 119.727 6.68062 119.727 8.48063C119.727 10.3499 118.482 11.4576 117.097 11.4576C115.644 11.4576 114.467 10.2806 114.467 8.48063ZM129.486 1.90367L130.04 3.28829C130.593 2.52675 131.631 1.48828 133.569 1.48828C136.892 1.48828 138.345 3.49599 138.345 7.71909V15.0576H134.192V8.13448C134.192 6.196 133.431 5.50369 132.254 5.50369C130.939 5.50369 130.247 6.26524 130.247 8.13448V15.1268H126.094V1.90367H129.486ZM140.7 5.57292L144.297 6.47293C144.506 5.36523 145.129 4.88061 146.236 4.88061C147.412 4.88061 147.828 5.64215 147.828 6.74985L145.752 7.02678C141.114 7.64986 140.561 9.79603 140.561 11.3191C140.561 14.2268 142.983 15.473 144.852 15.4044C146.929 15.4044 147.69 14.5037 148.036 14.0191L148.589 15.0576H151.981V6.54216C151.981 2.80367 149.005 1.48828 146.444 1.48828C143.052 1.48828 141.599 2.87291 140.7 5.57292ZM144.506 11.0422C144.506 10.4191 144.713 9.86526 145.959 9.65757L147.828 9.38064V10.6261C147.828 11.4576 147.067 12.1499 146.098 12.1499C145.059 12.1499 144.506 11.6653 144.506 11.0422ZM158.625 15.1268H154.473V-3.08105H158.625V15.1268ZM61.5195 21.4268V39.5653H68.3025C71.9016 39.5653 74.6009 37.6968 74.6009 34.2345C74.6009 31.8114 73.0782 30.5653 71.7631 30.1499V30.0807C73.009 29.4576 74.0472 28.4191 74.0472 26.3422C74.0472 23.296 72.04 21.4268 68.2332 21.4268H61.5195ZM65.7416 25.2345H68.0948C69.34 25.2345 70.0321 25.7191 70.0321 26.896C70.0321 28.0037 69.4791 28.6261 68.0948 28.6261H65.7416V25.2345ZM65.8108 32.1576H68.5101C69.9636 32.1576 70.5173 32.9884 70.5173 34.0968C70.5173 35.1345 69.9636 35.8961 68.3025 35.8961H65.8108V32.1576ZM80.2762 26.4116L80.8299 27.7962C81.3144 27.0347 82.2142 26.0654 83.8061 26.0654C84.7059 26.0654 85.398 26.3424 85.8825 26.6193L84.4982 30.427C84.2214 30.2193 83.8061 30.0116 83.1832 30.0116C82.0066 30.0116 81.0383 30.7732 81.0383 32.6424V39.6347H76.8848V26.4116H80.2762ZM86.2969 32.9884C86.2969 37.35 89.4807 39.9808 92.8722 39.9808C96.056 39.9808 97.8555 38.3892 98.6861 36.1032L95.2946 35.0647C95.087 35.5493 94.3949 36.5192 92.8722 36.5192C91.2802 36.5192 90.242 35.4115 90.1036 34.3038V34.2346H98.9629V32.9192C98.9629 28.9038 96.7474 25.9961 92.8722 25.9961C89.2731 25.9961 86.2969 28.8346 86.2969 32.9884ZM92.8722 29.3884C94.9479 29.3884 95.4331 31.2577 95.4331 31.6731H90.1728C90.3812 30.4961 91.211 29.3884 92.8722 29.3884ZM104.431 30.9814L100.832 30.0807C101.732 27.3807 103.185 25.9961 106.576 25.9961C109.137 25.9961 112.114 27.3115 112.114 31.05V39.5654H108.722L108.168 38.5269C107.822 39.0116 107.061 39.9109 104.985 39.9109C103.116 39.9808 100.693 38.8039 100.693 35.8269C100.693 34.3038 101.247 32.1577 105.884 31.5346L107.961 31.2577C107.961 30.15 107.546 29.3884 106.369 29.3884C105.261 29.3884 104.639 29.873 104.431 30.9814ZM106.091 34.1654C104.846 34.3724 104.639 34.9269 104.639 35.5493C104.639 36.1731 105.192 36.6577 106.23 36.6577C107.199 36.6577 107.961 35.9661 107.961 35.1346V33.8885L106.091 34.1654ZM114.26 30.4963C114.26 33.404 116.475 34.304 119.312 34.7887C120.212 34.9271 121.111 35.1348 121.111 35.8271C121.111 36.4502 120.627 36.8656 119.52 36.8656C118.551 36.8656 117.72 36.2425 117.443 35.0649L114.121 36.1733C114.606 38.3894 116.613 39.981 119.52 40.0502C123.119 40.0502 124.918 37.9041 124.918 35.6194C124.918 32.9194 123.119 31.8117 120.073 31.2579C118.551 30.9816 118.066 30.704 118.066 30.2194C118.066 29.6656 118.688 29.3886 119.52 29.3886C120.627 29.3886 120.973 30.2194 121.181 30.8425L124.434 29.8733C123.88 27.5194 121.942 26.1348 119.52 26.1348C115.783 26.1348 114.26 28.4886 114.26 30.4963ZM128.45 26.3424V22.8809H132.602V26.3424H135.439V30.0809H132.602V34.8572C132.602 35.5495 132.879 35.9663 133.502 35.9663C134.056 35.9663 134.333 35.7579 134.54 35.5495L136.132 38.5963C135.648 39.0817 134.609 39.911 132.533 39.911C130.456 39.981 128.45 38.5963 128.45 35.6194V30.0809H126.373V26.3424H128.45ZM144.713 30.4964C144.713 36.4503 148.52 39.9811 153.503 39.9811C157.517 39.9811 160.009 38.1118 161.393 34.6503L157.379 33.3349C156.964 34.5118 155.995 35.9664 153.572 35.9664C151.011 35.9664 148.866 33.8887 148.866 30.5656C148.866 27.5195 150.735 25.0964 153.433 25.0964C155.995 25.0964 157.033 26.5502 157.379 28.0733L161.393 26.6887C160.147 22.6733 156.964 21.0117 153.365 21.0117C148.243 21.0117 144.713 24.9579 144.713 30.4964ZM166.93 30.9814L163.331 30.0807C164.231 27.3807 165.684 25.9961 169.076 25.9961C171.636 25.9961 174.613 27.3115 174.613 31.05V39.5654H171.221L170.668 38.5269C170.322 39.0116 169.56 39.9109 167.484 39.9109C165.616 39.9808 163.193 38.8039 163.193 35.8269C163.193 34.3038 163.746 32.1577 168.384 31.5346L170.46 31.2577C170.46 30.15 170.045 29.3884 168.868 29.3884C167.761 29.3884 167.137 29.873 166.93 30.9814ZM168.591 34.1654C167.345 34.3724 167.137 34.9269 167.137 35.5493C167.137 36.1731 167.692 36.6577 168.73 36.6577C169.698 36.6577 170.46 35.9661 170.46 35.1346V33.8885L168.591 34.1654ZM181.051 27.7961L180.497 26.4115H177.105V39.7039H181.258V32.7115C181.258 30.8423 181.95 30.0807 183.265 30.0807C184.442 30.0807 185.203 30.773 185.203 32.7115V39.5654H189.356V32.2269C189.356 28.0038 187.902 25.9961 184.58 25.9961C182.643 25.9961 181.604 27.0346 181.051 27.7961ZM198.353 39.9809C194.754 39.9809 191.57 37.3501 191.57 33.0578C191.57 28.7654 194.685 26.0654 198.353 26.0654C201.122 26.0654 203.474 27.727 204.306 30.427L200.569 31.6732C200.222 30.6347 199.461 30.0116 198.353 30.0116C196.762 30.0116 195.654 31.1885 195.654 33.0578C195.654 34.8571 196.762 36.0347 198.353 36.0347C199.322 36.0347 200.014 35.6193 200.36 34.7886L204.098 36.0347C203.199 38.5963 200.983 39.9809 198.353 39.9809ZM206.107 32.9884C206.107 37.35 209.291 39.9808 212.682 39.9808C215.866 39.9808 217.665 38.3892 218.496 36.1032L215.104 35.0647C214.897 35.5493 214.205 36.5192 212.682 36.5192C211.09 36.5192 210.052 35.4115 209.914 34.3038V34.2346H218.773V32.9192C218.773 28.9038 216.558 25.9961 212.682 25.9961C209.083 25.9961 206.107 28.8346 206.107 32.9884ZM212.682 29.3884C214.758 29.3884 215.242 31.2577 215.242 31.6731H209.983C210.19 30.4961 211.021 29.3884 212.682 29.3884ZM224.378 26.4116L224.932 27.7962C225.416 27.0347 226.315 26.0654 227.908 26.0654C228.807 26.0654 229.5 26.3424 229.984 26.6193L228.601 30.427C228.323 30.2193 227.908 30.0116 227.285 30.0116C226.108 30.0116 225.139 30.7732 225.139 32.6424V39.6347H220.986V26.4116H224.378ZM61.5195 46.0039V64.2117H65.7416V57.3571H71.9708V53.6193H65.7416V49.8809H73.009V46.0039H61.5195ZM80.5536 64.5579C77.0929 64.5579 73.8398 61.9272 73.8398 57.5656C73.8398 53.2739 77.0929 50.5732 80.5536 50.5732C84.0834 50.5732 87.268 53.2739 87.268 57.5656C87.268 61.8579 84.0142 64.5579 80.5536 64.5579ZM77.9241 57.5656C77.9241 59.4348 79.1001 60.5425 80.5536 60.5425C80.583 60.544 80.6121 60.5452 80.641 60.5457C80.6523 60.5459 80.6635 60.546 80.6747 60.546C82.0721 60.546 83.1837 59.3822 83.1837 57.5656C83.1837 55.7656 82.007 54.5194 80.5536 54.5194C79.1001 54.5194 77.9241 55.6964 77.9241 57.5656ZM97.6488 50.9883V57.9806C97.6488 59.8499 96.9566 60.6114 95.6416 60.6114C94.4649 60.6114 93.7036 59.9191 93.7036 57.9806V50.9883H89.5508V58.396C89.5508 62.6198 91.0043 64.6268 94.3265 64.6268C96.2645 64.6268 97.3034 63.5877 97.8564 62.8268L98.4101 64.2114H101.802V50.9883H97.6488ZM107.962 50.9886L108.515 52.3726C109.07 51.6117 110.107 50.5732 112.045 50.5732C115.368 50.5732 116.821 52.5809 116.821 56.804V64.1419H112.669V57.2194C112.669 55.281 111.907 54.5886 110.73 54.5886C109.415 54.5886 108.723 55.3502 108.723 57.2194V64.2118H104.57V50.9886H107.962ZM128.794 46.0039V52.027C128.379 51.4732 127.133 50.5732 125.334 50.5732C122.081 50.5732 119.035 53.2739 119.035 57.5655C119.035 61.9271 122.081 64.5579 125.402 64.5579C127.41 64.5579 128.517 63.4502 129.002 62.8956L129.556 64.2117H132.947V46.0039H128.794ZM123.188 57.5655C123.188 55.7655 124.503 54.4501 126.026 54.4501C127.548 54.4501 128.794 55.6963 128.794 57.5655C128.794 59.4348 127.548 60.6809 126.026 60.6809C124.503 60.6809 123.188 59.4348 123.188 57.5655ZM138.899 55.5579L135.3 54.6586C136.2 51.9579 137.653 50.5732 141.045 50.5732C143.605 50.5732 146.582 51.8886 146.582 55.6271V64.1419H143.19L142.636 63.1034C142.29 63.588 141.529 64.4887 139.453 64.4887C137.585 64.5579 135.162 63.3125 135.162 60.4041C135.162 58.881 135.715 56.7348 140.352 56.1117L142.429 55.8348C142.429 54.7271 142.014 53.9663 140.837 53.9663C139.729 53.9663 139.107 54.4502 138.899 55.5579ZM140.56 58.7425C139.314 58.9502 139.107 59.5048 139.107 60.1272C139.107 60.7502 139.66 61.2348 140.699 61.2348C141.667 61.2348 142.429 60.5425 142.429 59.7118V58.4656L140.56 58.7425ZM150.388 47.458V50.9196H148.312V54.6587H150.388V60.1972C150.388 63.1735 152.326 64.5581 154.472 64.5581C156.548 64.5581 157.586 63.7273 158.071 63.2427L156.48 60.1972C156.272 60.4042 155.995 60.6119 155.441 60.6119C154.818 60.6119 154.542 60.1972 154.542 59.5049V54.6587H157.379V50.9196H154.542V47.458H150.388ZM161.671 49.5343C160.494 49.5343 159.525 48.4958 159.525 47.3182C159.525 46.1413 160.494 45.1035 161.671 45.1035C162.848 45.1035 163.817 46.1413 163.817 47.3182C163.817 48.5644 162.848 49.5343 161.671 49.5343ZM163.816 64.2113H159.663V50.9875H163.816V64.2113ZM166.031 57.5656C166.031 61.9272 169.284 64.5579 172.745 64.5579C176.206 64.5579 179.459 61.8579 179.459 57.5656C179.459 53.2739 176.275 50.5732 172.745 50.5732C169.284 50.5732 166.031 53.2739 166.031 57.5656ZM172.813 60.5425C171.361 60.5425 170.184 59.4348 170.184 57.5656C170.184 55.6964 171.361 54.5194 172.813 54.5194C174.268 54.5194 175.444 55.7656 175.444 57.5656C175.444 59.3822 174.267 60.546 172.93 60.546C172.891 60.546 172.852 60.5446 172.813 60.5425ZM185.204 50.9886L185.758 52.3726C186.311 51.6117 187.35 50.5732 189.288 50.5732C192.61 50.5732 194.063 52.5809 194.063 56.804V64.1419H189.91V57.2194C189.91 55.281 189.149 54.5886 187.972 54.5886C186.657 54.5886 185.965 55.3502 185.965 57.2194V64.2118H181.812V50.9886H185.204ZM-10.7402 72.5194C-7.90248 75.3571 -3.19596 75.3571 -0.358212 72.5194L15.2148 56.9423L10.0238 51.75L-10.7402 72.5194Z"
              fill="currentColor"
            ></path>
            <path
              opacity="0.5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M-2.1582 17.5498C-2.1582 12.6344 -0.220224 7.71895 3.5173 3.91123C7.24652 0.181051 12.1461 -1.6875 17.0492 -1.6875C21.9745 -1.6875 26.9032 0.199051 30.649 3.98046C38.1247 11.4574 38.1247 23.6421 30.649 31.1191L22.2742 39.4961L50.098 67.3963L44.907 72.5886L3.44809 31.1191C-0.289438 27.3806 -2.1582 22.4652 -2.1582 17.5498ZM8.70831 9.10357C4.07101 13.7414 4.07101 21.219 8.70831 25.8575L17.0825 34.2345L25.458 25.8575C27.742 23.5729 28.9187 20.5267 28.9187 17.4805C28.9187 14.4344 27.742 11.3882 25.458 9.10357C20.8207 4.46508 13.3456 4.46508 8.70831 9.10357ZM-10.809 72.5201L-16 67.3278L6.70202 44.6885L17.0834 55.0738L15.2153 56.9431L9.95436 51.7508L-10.809 72.5201Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 1,
            transform: "translateY(0%) translateZ(0px)",
          }}
        >
          <svg
            width="261"
            height="43"
            viewBox="0 0 261 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 261,
                "--height": 43,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43.5 43V0H0.5V43H43.5ZM17.82 35H21.14V36.63C19.9946 36.1694 18.8849 35.6246 17.82 35ZM22.86 35H26.18C25.1162 35.6266 24.0064 36.1716 22.86 36.63V35ZM13.06 31.58H21.14V33.27H15.06C14.35 32.76 13.6813 32.1949 13.06 31.58ZM22.86 31.58H30.94C30.3162 32.1922 29.6477 32.7571 28.94 33.27H22.86V31.58ZM10.5 28.2H21.17V29.89H11.59C11.1863 29.3538 10.822 28.789 10.5 28.2ZM22.86 28.2H33.5C33.1913 28.7901 32.8369 29.3552 32.44 29.89H22.86V28.2ZM22.86 24.82H34.73C34.6296 25.3954 34.4791 25.9609 34.28 26.51H22.86V24.82ZM9.27 24.82H21.14V26.51H9.72C9.52575 25.9594 9.37528 25.3943 9.27 24.82ZM9.1 21.44H18.18L20.78 23L21.1 23.18H9.1V21.44ZM25.72 21.44H34.89V23.13H22.89C22.9756 23.0911 23.059 23.0477 23.14 23L25.72 21.44ZM16.56 10.8L22.03 7.7L27.28 10.7C27.5821 10.848 27.8406 11.072 28.03 11.35C28.1647 11.5856 28.2434 11.8491 28.26 12.12V16.84C28.2714 17.1536 28.2204 17.4663 28.11 17.76C28.0228 17.9477 27.8967 18.1147 27.74 18.25L22.9 21.15C22.6382 21.3198 22.3402 21.426 22.03 21.46C21.6797 21.4224 21.3401 21.3171 21.03 21.15L16.5 18.49C16.2955 18.3935 16.1197 18.2453 15.99 18.06C15.8102 17.7839 15.7195 17.4593 15.73 17.13V12C15.7267 11.7676 15.8045 11.5413 15.95 11.36C16.1028 11.1248 16.3126 10.9321 16.56 10.8ZM29.95 18.06H34.9V19.75H28.55L29.32 19.28C29.5224 19.1084 29.6831 18.8929 29.79 18.65C29.8792 18.4649 29.9334 18.2648 29.95 18.06ZM9.1 18H14.02C14.0302 18.3584 14.1449 18.7059 14.35 19C14.524 19.2158 14.7468 19.3872 15 19.5L15.32 19.69H9.1V18ZM29.99 14.67H34.9V16.36H29.99V14.67ZM9.1 14.67H14.02V16.36H9.1V14.67ZM29.97 11.29H34.9V13H29.99L29.97 11.45C29.9747 11.3968 29.9747 11.3432 29.97 11.29ZM9.1 11.29H14.02V13H9.1V11.29ZM9.1 7.91H18.36L15.43 9.6H9.1V7.91ZM25.72 7.91H34.9V9.6H28.65L25.72 7.91ZM260.499 43V0H45.1895V43H260.499ZM228.163 17.0831C228.307 16.939 228.506 16.8649 228.709 16.88H230.039V24.88C230.039 26.88 230.869 27.54 232.039 27.54C233.209 27.54 234.729 26.21 235.479 25.46L236.249 24.69V17.69C236.231 17.4859 236.304 17.2841 236.449 17.1392C236.594 16.9943 236.795 16.9213 236.999 16.94H238.339V28.44C238.339 32.97 235.669 34.69 231.139 34.69H228.859V33.55C228.838 33.3435 228.909 33.1382 229.054 32.9895C229.199 32.8408 229.402 32.7641 229.609 32.78H231.129C234.719 32.78 236.239 31.66 236.239 28.61L236.299 26.72L235.359 27.66C234.375 28.7549 232.972 29.3802 231.499 29.38C229.319 29.38 227.959 28.17 227.959 24.83V17.63C227.944 17.4268 228.018 17.2272 228.163 17.0831ZM64.0795 11.88H64.9995C65.2986 11.8983 65.5961 11.9384 65.8895 12H65.9895C66.5776 12.1064 67.1561 12.2603 67.7195 12.46C67.8767 12.5133 68.0304 12.5768 68.1795 12.65V14.12C68.1795 14.45 68.0095 14.6 67.7695 14.6C67.6529 14.5967 67.5378 14.573 67.4295 14.53C66.8766 14.3131 66.3124 14.1262 65.7395 13.97C65.046 13.8223 64.3384 13.7519 63.6295 13.76C60.2395 13.76 57.5795 15.48 57.5795 19.91V22.19C57.5795 26.16 59.6595 28.34 63.2695 28.34H64.5395C65.5622 28.3079 66.574 28.1191 67.5395 27.78C67.6496 27.7432 67.7637 27.7197 67.8795 27.71C68.1295 27.71 68.2995 27.86 68.2995 28.2V29.58C68.2995 29.58 68.0095 29.71 67.8094 29.78C66.7548 30.1719 65.6439 30.3913 64.5195 30.43H63.3795C57.8295 30.43 55.3795 27.01 55.3795 22.29V20.01C55.3795 14.71 58.7795 11.88 64.0795 11.88ZM79.5587 17.0592C79.7036 16.9143 79.9054 16.8413 80.1095 16.86H81.4395V29.36C81.4554 29.567 81.3786 29.7703 81.2299 29.9152C81.0812 30.06 80.8759 30.1314 80.6694 30.11H79.3595V27.66L78.4194 28.66C77.4461 29.7387 76.0624 30.3562 74.6095 30.36C72.5295 30.36 71.0294 29.22 71.0294 25.8V17.64C71.0143 17.4368 71.0885 17.2372 71.2325 17.0931C71.3766 16.949 71.5763 16.8749 71.7794 16.89H73.1095V25.78C73.1095 27.87 74.1095 28.45 75.1994 28.45C76.4995 28.45 77.8394 27.12 78.5894 26.37L79.3595 25.61V17.61C79.3408 17.4059 79.4138 17.2041 79.5587 17.0592ZM200.449 20.5C200.449 18.13 202.449 16.7 205.559 16.7C206.547 16.7053 207.531 16.8057 208.499 17C208.695 17.0322 208.889 17.0756 209.079 17.13V18.38C209.079 18.76 208.789 18.91 208.449 18.91C207.497 18.75 206.535 18.6531 205.569 18.62L205.343 18.6226C203.494 18.6657 202.569 19.2512 202.569 20.53L202.559 20.49C202.559 21.637 203.296 21.8135 204.284 22.0503C204.339 22.0633 204.394 22.0765 204.449 22.09L206.069 22.48C208.129 22.96 209.749 23.79 209.749 26.36C209.749 29.29 207.209 30.36 204.449 30.36C203.341 30.355 202.236 30.2411 201.149 30.02L200.579 29.85V28.66C200.579 28.27 200.849 28.11 201.189 28.11C201.269 28.0996 201.35 28.0996 201.429 28.11C202.415 28.3292 203.42 28.4431 204.429 28.45C206.509 28.45 207.649 27.87 207.649 26.37C207.649 25.23 206.649 24.72 205.569 24.48L203.569 23.99C201.779 23.58 200.449 22.56 200.449 20.5ZM180.192 18.257C181.276 17.1687 182.776 16.5981 184.309 16.69C186.949 16.69 188.839 17.83 188.839 20.49C188.839 22.84 187.339 24.27 184.699 24.27H180.699V25C180.699 27.47 182.209 28.42 184.289 28.42C185.581 28.3154 186.853 28.0362 188.069 27.59V28.8C188.069 29.29 188.019 29.46 187.609 29.65C186.55 30.0652 185.427 30.2952 184.289 30.33C181.069 30.33 178.619 28.8 178.619 25.02L178.639 25V22.38C178.542 20.8467 179.107 19.3453 180.192 18.257ZM139.986 12.1661C140.131 12.0201 140.334 11.9449 140.539 11.96H142.059V23.88H142.069C142.069 28.05 139.409 30.33 135.429 30.33C131.289 30.33 128.819 28.03 128.819 23.88V12.72C128.804 12.5168 128.878 12.3172 129.023 12.1731C129.167 12.029 129.366 11.9549 129.569 11.97H131.089V23.88C131.089 27.11 132.979 28.34 135.419 28.34C137.859 28.34 139.779 27.11 139.779 23.88V12.72C139.764 12.5142 139.84 12.312 139.986 12.1661ZM219.399 13.85H220.729C220.933 13.8349 221.132 13.909 221.276 14.0531C221.396 14.1731 221.468 14.3318 221.48 14.4989L221.479 16.88H224.479C224.684 16.8575 224.889 16.9293 225.034 17.0751C225.18 17.2209 225.252 17.425 225.229 17.63V18.77H221.499V25.77C221.408 26.4151 221.612 27.0671 222.054 27.5458C222.495 28.0246 223.129 28.2795 223.779 28.24H224.899C225.109 28.2307 225.312 28.3107 225.459 28.46C225.588 28.6058 225.656 28.7955 225.649 28.99V30.13H223.759C222.572 30.2427 221.396 29.8197 220.553 28.9763C219.71 28.133 219.287 26.9573 219.399 25.77V13.85ZM93.9295 13.86H95.2595C95.4626 13.8449 95.6623 13.919 95.8064 14.0631C95.9264 14.1831 95.9979 14.3418 96.0097 14.5089L96.0095 16.89H99.0095C99.2135 16.8713 99.4153 16.9443 99.5602 17.0892C99.7051 17.2341 99.7781 17.4359 99.7595 17.64V18.77H96.0095V25.77C95.9187 26.4159 96.1219 27.0686 96.5634 27.5488C97.0049 28.029 97.6382 28.2863 98.2895 28.25H99.4295C99.6397 28.2353 99.8454 28.3161 99.9895 28.47C100.12 28.6147 100.188 28.8052 100.179 29V30.13H98.2895C97.1021 30.2427 95.9265 29.8197 95.0831 28.9763C94.2398 28.133 93.8168 26.9573 93.9295 25.77V13.86ZM166.119 17.0792C166.264 16.9343 166.465 16.8613 166.669 16.88H167.999V20.3C167.913 23.3374 168.957 26.2988 170.929 28.61C172.894 26.294 173.937 23.3359 173.859 20.3V17.63C173.844 17.4268 173.918 17.2272 174.063 17.0831C174.207 16.939 174.406 16.8649 174.609 16.88H175.949V20.3H175.969C175.874 23.9566 174.452 27.4537 171.969 30.14H169.699C168.369 29 165.919 24.83 165.919 20.3V17.63C165.901 17.4259 165.974 17.2241 166.119 17.0792ZM191.919 16.88H193.219C193.427 16.8591 193.633 16.9302 193.783 17.0746C193.933 17.219 194.012 17.4221 193.999 17.63V19.81L194.189 19.52C195.189 17.99 196.349 16.88 198.069 16.88H198.159C198.383 16.8639 198.601 16.9526 198.749 17.12C198.867 17.2632 198.928 17.4448 198.919 17.63V18.76H197.969C196.997 18.9193 196.117 19.4321 195.499 20.2C195.089 20.7 193.999 22.45 193.999 22.45V30.13H192.669C192.464 30.1525 192.26 30.0807 192.115 29.9349C191.969 29.7891 191.897 29.585 191.919 29.38V16.88ZM148.499 18.41C149.457 17.3243 150.832 16.6986 152.279 16.69C154.359 16.69 155.859 17.83 155.859 21.24V30.13H154.549C154.343 30.1514 154.138 30.08 153.989 29.9352C153.84 29.7903 153.764 29.587 153.779 29.38V21.24C153.779 19.16 152.829 18.58 151.719 18.58C150.389 18.58 149.049 19.91 148.299 20.66L147.549 21.43V30.13H146.219C146.015 30.1487 145.814 30.0757 145.669 29.9308C145.524 29.7859 145.451 29.5841 145.469 29.38V16.88H146.779C146.986 16.8586 147.191 16.93 147.34 17.0748C147.464 17.1955 147.538 17.3569 147.55 17.5271L147.549 19.35L148.499 18.41ZM112.969 18.41C113.93 17.3285 115.303 16.7036 116.749 16.69C118.829 16.69 120.329 17.83 120.329 21.25V30.13H119.019C118.813 30.1514 118.608 30.08 118.459 29.9352C118.31 29.7903 118.234 29.587 118.249 29.38V21.25C118.249 19.16 117.249 18.58 116.189 18.58C114.859 18.58 113.519 19.91 112.769 20.66L112.019 21.44V30.13H110.689C110.485 30.1487 110.284 30.0757 110.139 29.9308C109.994 29.7859 109.921 29.5841 109.939 29.38V16.88H111.249C111.456 16.8586 111.661 16.93 111.81 17.0748C111.959 17.2197 112.035 17.423 112.019 17.63L111.969 19.36L112.969 18.41ZM102.189 16.88H105.749C105.954 16.8613 106.155 16.9343 106.3 17.0792C106.445 17.2241 106.518 17.4259 106.499 17.63V30.13H105.189C104.982 30.1509 104.776 30.0798 104.626 29.9354C104.476 29.791 104.397 29.5879 104.409 29.38V18.78H102.939C102.732 18.8072 102.523 18.7355 102.376 18.5863C102.228 18.437 102.16 18.2275 102.189 18.02V16.88ZM211.749 16.88H215.309C215.514 16.8613 215.715 16.9343 215.86 17.0792C216.005 17.2241 216.078 17.4259 216.059 17.63L216.009 29.38V30.13H214.699C214.492 30.1482 214.287 30.0743 214.139 29.928C213.99 29.7817 213.914 29.5777 213.929 29.37V18.77H212.499C212.293 18.8008 212.083 18.7318 211.936 18.5839C211.788 18.436 211.719 18.2268 211.749 18.02V16.88ZM158.369 16.88H161.929C162.134 16.8613 162.335 16.9343 162.48 17.0792C162.625 17.2241 162.698 17.4259 162.679 17.63V30.13H161.369C161.162 30.1482 160.957 30.0743 160.809 29.928C160.66 29.7817 160.584 29.5777 160.599 29.37V18.77H159.119C158.913 18.8008 158.703 18.7318 158.556 18.5839C158.408 18.436 158.339 18.2268 158.369 18.02V16.88ZM84.8394 16.89H86.1495C86.3569 16.8718 86.5619 16.9457 86.7102 17.092C86.8337 17.2139 86.9074 17.3759 86.9196 17.5467L86.9194 19.83L87.1195 19.54C88.1195 18.01 89.2695 16.9 90.9895 16.9H91.0894C91.3072 16.8874 91.5195 16.9716 91.6694 17.13C91.7862 17.2776 91.8465 17.462 91.8394 17.65V18.78L90.8995 18.77C89.9268 18.9293 89.0473 19.4421 88.4295 20.21C88.0195 20.71 86.9194 22.45 86.9194 22.45V30.13H85.5894C85.3854 30.1487 85.1836 30.0757 85.0387 29.9308C84.8938 29.7859 84.8208 29.5841 84.8394 29.38V16.89ZM186.779 20.49C186.779 19.18 185.779 18.58 184.309 18.58C182.029 18.58 180.719 19.72 180.719 22.38V22.55H184.119C186.199 22.55 186.779 21.8 186.779 20.49ZM104.616 12.1646C104.766 12.0202 104.972 11.9491 105.179 11.97H106.499V13.49C106.521 13.6957 106.45 13.9004 106.304 14.0476C106.159 14.1949 105.955 14.2691 105.749 14.25H104.399V12.72C104.387 12.5121 104.466 12.309 104.616 12.1646ZM160.799 12.1648C160.948 12.02 161.153 11.9486 161.359 11.97H162.669V13.49H162.679C162.698 13.6941 162.625 13.8959 162.48 14.0408C162.335 14.1857 162.134 14.2587 161.929 14.24H160.589V12.72C160.574 12.513 160.65 12.3097 160.799 12.1648ZM214.139 12.1648C214.288 12.02 214.493 11.9486 214.699 11.97H216.009V13.49C216.028 13.6941 215.955 13.8959 215.81 14.0408C215.665 14.1857 215.464 14.2587 215.259 14.24H213.929V12.72C213.914 12.513 213.99 12.3097 214.139 12.1648Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 1,
            transform: "translateY(-2.43276%) translateZ(0px)",
          }}
        >
          <svg
            width="172"
            height="67"
            viewBox="0 0 172 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 172,
                "--height": 67,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M84.7859 8.01445C80.3317 -1.99378 70.3107 -8.97919 58.6512 -8.99995C42.8307 -9.02795 29.9794 3.77877 29.9512 19.6054C29.9232 35.4351 42.7277 48.2834 58.5482 48.3127C70.2445 48.3334 80.3166 41.3424 84.7858 31.3009C89.2401 41.309 99.261 48.2919 110.92 48.3127C126.742 48.3407 139.593 35.5381 139.621 19.7084C139.649 3.88072 126.845 -8.97178 111.022 -8.99995C99.3272 -9.02065 89.2552 -2.02754 84.7859 8.01445ZM66.1828 6.26761L50.5121 33.0451H61.9854L71.8872 15.76L66.1828 6.26761ZM65.4181 6.26792H46.2686L51.8576 15.7604H59.877L65.4181 6.26792ZM67.8944 58.0371L72.9675 71.4534L77.0235 58.4428H79.0734L73.2577 76.4384H72.8459L67.7031 62.7662L62.4646 76.4384H62.0767L56.209 58.4428H58.3607L62.4427 71.4534L67.4899 58.0371H67.8944ZM46.4936 71.6697L35.166 58.0869H34.7188V76.1085H36.6698V62.8846L47.9975 76.4653H48.4457V58.4427H46.4936V71.6697ZM-17.9555 65.5949L-16.5838 66.2544C-13.8111 67.5537 -12.2043 68.8426 -12.2043 71.5899C-12.2043 74.5037 -14.3436 76.3127 -17.7881 76.3127C-20.5077 76.3127 -22.6802 75.0384 -23.9054 72.7269L-24 72.548L-22.2466 71.6222L-22.1519 71.8021C-21.2606 73.4822 -19.7194 74.409 -17.813 74.409C-15.6218 74.409 -14.2604 73.3469 -14.2604 71.6409C-14.2604 69.8808 -15.2702 69.1026 -17.3908 68.1185L-18.7875 67.458C-21.401 66.2325 -22.9132 65.0362 -22.9132 62.5531C-22.9132 60.0149 -20.9726 58.2412 -18.1937 58.2412C-15.9306 58.2412 -14.3602 59.0786 -13.2506 60.8752L-13.1466 61.0447L-14.7606 62.0746L-14.8667 61.8957C-15.5906 60.665 -16.6399 60.0908 -18.1687 60.0908C-19.7932 60.0908 -20.8842 61.0603 -20.8842 62.5021C-20.8842 63.971 -20.153 64.5629 -17.9555 65.5949ZM0.639259 68.1366H-7.17842V74.2336H1.93302V76.1071H-9.23242V58.4424H1.57734V60.319H-7.17842V66.285H0.639259V68.1366ZM11.2321 71.9907L5.7846 58.4443H3.56836L11.02 76.4659H11.3923L18.8418 58.4443H16.7036L11.2321 71.9907ZM30.8589 68.1366H23.0423V74.2336H32.1516V76.1071H20.9883V58.4424H31.7991V60.319H23.0423V66.285H30.8589V68.1366ZM83.3763 68.1366H91.195V66.285H83.3763V60.319H92.131V58.4424H81.3223V76.1071H92.4867V74.2336H83.3763V68.1366ZM99.768 65.5949L101.141 66.2544C103.915 67.5537 105.521 68.8426 105.521 71.5899C105.521 74.459 103.329 76.3127 99.9396 76.3127C97.219 76.3127 95.0464 75.0384 93.8203 72.7269L93.7246 72.548L95.478 71.6222L95.5727 71.8021C96.465 73.4822 98.0063 74.409 99.9116 74.409C102.104 74.409 103.464 73.3469 103.464 71.6409C103.464 69.8818 102.455 69.1026 100.334 68.1185L98.9371 67.458C96.3256 66.2325 94.8135 65.0373 94.8135 62.5531C94.8135 60.0149 96.752 58.2412 99.532 58.2412C101.796 58.2412 103.365 59.0786 104.472 60.8752L104.576 61.0447L102.965 62.0756L102.858 61.8957C102.136 60.665 101.085 60.0908 99.5548 60.0908C97.9314 60.0908 96.8384 61.0603 96.8384 62.5021C96.8384 63.97 97.5705 64.5608 99.768 65.5949ZM106.588 60.32H111.943V76.1081H113.998V60.32H119.328V58.4434H106.588V60.32ZM126.03 58.1618L133.994 68.0214L141.967 58.0879H142.392V76.1074H140.414V62.9293L134.093 70.879H133.793L133.731 70.802L127.547 62.9345V76.1074H125.568V58.0879H125.969L126.03 58.1618ZM148.162 68.1366H155.977V66.285H148.162V60.319H156.916V58.4424H146.105V76.1071H157.271V74.2336H148.162V68.1366ZM164.605 60.3439H162.296V74.2076H164.605C169.266 74.2076 171.94 71.6807 171.94 67.2752C171.94 62.8697 169.266 60.3439 164.605 60.3439ZM160.242 58.4434H164.759C170.418 58.4434 174.072 61.9095 174.072 67.2752C174.072 72.6409 170.418 76.1071 164.759 76.1071H160.242V58.4434ZM177.227 76.1081H179.304V58.4443H177.227V76.1081ZM186.121 69.9679H192.119L189.122 62.5112L186.121 69.9679ZM189.359 58.0381L189.41 58.1629L196.808 76.1075H194.618L192.892 71.8435H185.351L183.646 76.1075H181.535L188.961 58.0381H189.359ZM119.92 10.8813L124.478 6.26771L128.511 10.3112L130.105 8.74667L130.494 9.08683L128.526 11.0457L128.459 26.1243L131.13 28.7947L132.693 27.2395L133.079 27.5828L127.597 33.0452L123.249 28.6907C119.697 34.2363 111.468 33.8805 107.733 29.4417C103.942 34.1573 96.3389 33.6174 92.7894 29.4147L92.1467 28.5991C88.5784 23.8472 91.2221 18.2724 99.8915 11.2652C98.2289 11.2652 97.0939 10.9801 96.0908 10.7281C95.2993 10.5293 94.5899 10.3511 93.768 10.3497C92.5824 10.3476 91.6922 10.7138 91.6901 11.5783C91.6891 12.5124 92.1664 12.7205 93.9167 13.3363C91.6516 13.3322 90.6251 12.4042 90.6293 10.408C90.6335 8.20157 92.5512 6.72127 95.2698 6.72647C96.5961 6.72824 97.7488 7.0415 98.8848 7.35027C99.753 7.58624 100.612 7.81958 101.531 7.90925C102.956 8.04865 104.333 7.02399 104.989 6.3655L104.96 24.3475L99.8895 28.8613L99.9207 11.8311C94.0915 16.9336 93.7722 22.5687 96.5531 26.3147C98.9878 29.5822 103.497 30.2739 107.092 28.6511C103.528 23.8929 106.147 18.2994 114.823 11.2922C113.159 11.2916 112.022 11.0065 111.019 10.7546C110.227 10.556 109.519 10.3781 108.698 10.3768C107.513 10.3747 106.62 10.7409 106.618 11.6053C106.617 12.5395 107.098 12.7475 108.85 13.3634C106.589 13.3602 105.564 12.4313 105.567 10.434C105.571 8.22861 107.481 6.74831 110.205 6.75248C111.524 6.75483 112.677 7.06773 113.814 7.3763C114.685 7.61267 115.546 7.84651 116.466 7.9363C117.884 8.07569 119.262 7.05103 119.919 6.39254L119.92 10.8813ZM123.192 12.6893L121.062 10.5546L119.919 11.6844L119.898 24.3735L114.82 28.8873L114.85 11.8581C109.02 16.9606 108.703 22.5947 111.481 26.3417C114.189 29.9764 119.488 30.4518 123.199 28.0686L123.192 12.6893Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 1,
            transform: "translateY(-8.74995%) translateZ(0px)",
          }}
        >
          <svg
            width="250"
            height="72"
            viewBox="0 0 250 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 250,
                "--height": 72,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.5615 -6.96941C18.6975 -6.34241 17.2305 -0.402413 17.2305 -0.402413H17.2385C17.2385 -0.402413 18.6385 -2.29341 21.6475 -2.71141C23.9866 -3.03647 24.7196 -0.569524 25.2257 1.13383C25.3704 1.62089 25.4966 2.04552 25.6365 2.32459C26.2655 3.58859 28.9975 5.67959 31.7965 3.65459C34.5955 1.63059 32.4245 -7.59741 25.5615 -6.96941ZM225.223 28.3907V11.0938C224.352 11.1307 223.525 11.1598 222.477 11.1598C221.608 11.1598 220.891 11.1344 220.18 11.1092L220.179 11.1092L219.92 11.1L219.737 11.0938V28.9438V29.0758C216.046 31.2428 209.165 32.6947 208.677 27.9337C213.085 28.0367 217.67 26.6887 217.67 22.8407C217.67 19.7528 214.857 18.5448 211.66 18.5448C207.112 18.5448 202.941 21.6987 202.941 26.3127C202.941 27.3218 203.088 28.2437 203.362 29.0618C199.677 31.2358 192.752 32.7167 192.265 27.9407C196.672 28.0447 201.257 26.6957 201.257 22.8487C201.257 19.7607 198.444 18.5518 195.248 18.5518C190.7 18.5518 186.535 21.7057 186.535 26.3197C186.535 27.4618 186.72 28.4938 187.067 29.3928C185.834 30.0348 184.217 30.4768 183.287 30.4768C180.024 30.4768 176.553 27.6318 174.361 24.5877L181.899 14.3948L180.127 13.5257L171.932 24.2337V24.4408C174.191 30.7127 176.686 33.4167 180.961 33.4167C183.147 33.4167 185.302 32.2747 187.244 29.8127C188.33 32.1278 190.596 33.4908 193.756 33.4908C196.916 33.4908 200.807 31.7958 203.376 29.6438V29.1277C204.314 31.8617 206.706 33.4977 210.161 33.4977C213.617 33.4977 217.183 31.8108 219.752 29.6728C219.863 31.0807 220.417 33.4317 223.163 33.4317C225.526 33.4317 227.674 32.2897 229.727 29.8647V29.3118C229.276 29.5548 228.752 29.7987 228.272 29.9677C227.194 30.3507 225.216 30.5947 225.216 28.4057L225.223 28.3907ZM196.097 22.5977C197.211 22.5977 197.935 23.4677 197.935 24.4037C197.935 26.3787 194.428 27.1748 192.243 27.3808C192.309 24.7798 193.808 22.5977 196.097 22.5977ZM212.494 22.5977C213.602 22.5977 214.333 23.4677 214.333 24.4037C214.333 26.3787 210.826 27.1748 208.641 27.3808C208.707 24.7798 210.206 22.5977 212.494 22.5977ZM95.8706 26.0413C95.8706 21.8843 98.2336 18.5533 104 18.5533C109.796 18.5533 112.158 21.8843 112.158 26.0413C112.158 30.1983 109.803 33.5293 104 33.5293C99.9096 33.5293 97.5396 31.8483 96.5056 29.3873V29.9623C93.8326 32.1143 91.0866 33.4623 87.6826 33.4993C81.9536 33.4993 78.0996 29.7553 78.0996 23.8963C78.0996 18.0373 81.6356 13.3203 87.9266 13.3203C90.7766 13.3203 94.1066 14.5663 94.0986 17.0643C94.0986 18.4133 93.1246 19.3863 92.0836 19.3863C91.0426 19.3863 90.0676 18.4133 90.0676 17.0643C90.0676 16.6883 90.1706 16.3423 90.5546 15.3693C89.4476 15.0523 89.0336 14.9863 88.6136 14.9863C84.9286 14.9863 83.5406 20.5283 83.5406 23.8233C83.5406 27.1173 84.5816 31.3103 89.8606 31.3103C92.0836 31.3103 94.5496 30.5513 96.4906 29.3723C96.0776 28.3703 95.8706 27.2423 95.8706 26.0413ZM104 32.5933C105.528 32.5933 106.119 31.3473 106.363 30.1683C106.577 28.97 106.573 27.7256 106.57 26.5165V26.5147V26.5129V26.5111V26.5093V26.5075V26.5057V26.5039V26.5022C106.569 26.3479 106.569 26.1942 106.569 26.0413C106.569 25.8841 106.569 25.7262 106.57 25.5676V25.566C106.573 24.3574 106.577 23.1169 106.363 21.9513C106.119 20.7713 105.491 19.4893 104 19.4893C102.509 19.4893 101.918 20.7713 101.674 21.9513C101.459 23.1169 101.463 24.3575 101.467 25.5661V25.5677V25.5694V25.571C101.467 25.7284 101.468 25.8853 101.468 26.0413C101.468 26.1956 101.467 26.3507 101.467 26.5065V26.5085V26.5105V26.5125V26.5145V26.5165C101.463 27.7268 101.459 28.9761 101.674 30.1683C101.918 31.3473 102.472 32.5933 104 32.5933ZM129.05 26.0409C129.05 21.8839 131.413 18.5529 137.179 18.5529L137.172 18.5459C142.967 18.5459 145.33 21.8769 145.33 26.0329C145.33 30.1899 142.967 33.5209 137.172 33.5209C132.993 33.5209 130.608 31.7749 129.611 29.2249V29.6449C127.042 31.7969 123.291 33.4919 120.028 33.4919C115.583 33.4919 112.77 30.7209 112.77 26.4899C112.77 21.7439 116.765 18.5529 121.49 18.5529C124.2 18.5529 127.5 19.7319 127.5 22.3999C127.5 23.7859 126.525 24.7589 125.484 24.7589C124.443 24.7589 123.469 23.7859 123.469 22.3999C123.469 21.9869 123.572 21.6039 124.022 20.6679C123.225 20.2849 123.018 20.2189 122.738 20.2189C119.437 20.2189 118.396 24.5889 118.396 26.5269C118.396 29.2249 119.437 31.2739 122.738 31.2739C124.975 31.2739 127.662 30.2789 129.567 29.1139C129.22 28.1779 129.05 27.1389 129.05 26.0409ZM137.179 32.5929C138.707 32.5929 139.298 31.3469 139.542 30.1679C139.756 28.9696 139.752 27.7252 139.749 26.5161V26.5143V26.5125V26.5106C139.748 26.3534 139.748 26.1968 139.748 26.0409C139.748 25.888 139.748 25.7343 139.749 25.5801V25.5785V25.5769V25.5753V25.5737V25.5721V25.5705V25.5689V25.5672V25.5656C139.752 24.357 139.756 23.1165 139.542 21.9509C139.298 20.7709 138.67 19.4889 137.179 19.4889C135.688 19.4889 135.097 20.7709 134.853 21.9509C134.638 23.1165 134.642 24.357 134.646 25.5656V25.5672V25.5689V25.5705L134.646 25.8615L134.647 26.0409C134.647 26.1985 134.646 26.357 134.646 26.5162C134.642 27.7265 134.638 28.9757 134.853 30.1679C135.097 31.3469 135.651 32.5929 137.179 32.5929ZM151.066 21.9877C151.066 20.7417 152.941 20.2927 153.842 20.2927C154.853 20.2927 156.027 20.5357 157.076 21.0227V20.2267C155.407 19.1507 153.429 18.5977 151.413 18.5977C148.46 18.5977 146.097 19.9467 146.097 22.8647C146.097 24.8538 148.076 26.1479 149.878 27.3259C151.374 28.3042 152.748 29.2026 152.764 30.3527C152.764 31.5317 151.096 31.9817 150.232 31.9817C148.947 31.9817 147.352 31.5317 146.068 30.6617V31.3917C147.522 32.7407 149.922 33.6767 151.937 33.6767C154.853 33.7137 158.154 32.0107 158.154 29.1737C158.134 27.113 156.063 25.9842 154.165 24.9506C152.547 24.0691 151.056 23.2567 151.073 21.9947L151.066 21.9877ZM166.394 13.7985V13.7979H166.387L166.394 13.7985ZM166.394 13.7985V33.4909L171.843 33.0409V13.7979C171.045 13.8719 170.108 13.8719 169.133 13.8719C168.161 13.8719 167.226 13.8719 166.394 13.7985ZM235.699 13.731C235.699 15.087 234.34 16.333 232.502 16.333C230.664 16.333 229.305 15.08 229.305 13.731C229.305 12.383 230.664 11.167 232.502 11.167C234.34 11.167 235.699 12.375 235.699 13.731ZM259.82 29.157C259.06 29.643 258.048 30.13 257.251 30.13C256.276 30.167 255.582 29.503 255.582 28.258V22.782C255.582 21.669 255.302 18.168 252.179 18.168C250.096 18.168 248.014 18.898 245.061 22.539V19.001C244.227 19.068 243.363 19.068 242.388 19.068C241.414 19.068 240.513 19.068 239.679 19.001V29.334C239.243 29.562 238.756 29.791 238.298 29.953C237.22 30.336 235.242 30.579 235.242 28.391V18.994C234.37 19.06 233.536 19.06 232.495 19.06C231.454 19.06 230.62 19.06 229.756 18.994V28.943C229.756 30.019 229.896 33.417 233.196 33.417C235.529 33.417 237.656 32.297 239.686 29.931V33.491L245.069 33.041V23.578C245.969 22.679 246.944 21.772 247.882 21.566C248.923 21.323 250.141 21.64 250.141 23.335V28.811C250.141 29.916 250.421 33.417 253.544 33.417C255.767 33.417 257.923 32.238 259.827 29.747V29.157H259.82ZM274.269 16.6717C273.088 16.6717 272.291 18.3377 272.047 20.1727L272.025 20.1657C273.937 21.5507 274.875 23.2167 274.875 24.9857C274.875 28.3457 271.368 31.2937 266.753 31.2937C265.808 31.2937 265.011 31.2277 263.66 30.8447C262.449 32.9967 261.962 35.2147 264.391 35.2147H268.208C269.315 35.2147 272.793 35.3177 272.793 38.3687C272.793 40.5507 271.611 42.6657 269.116 44.5377H268.525C268.806 44.0887 269.086 43.6017 269.256 43.1157C269.64 42.1127 269.884 40.2407 267.662 40.2407H263.844C262.729 40.2407 259.26 40.1007 259.26 37.0497C259.26 35.0457 260.271 33.0627 263.15 30.6747C260.064 29.0827 258.639 27.1447 258.639 24.9927C258.639 21.6317 262.146 18.6837 266.768 18.6837C268.09 18.6837 269.552 18.8537 271.493 19.7897C270.976 17.4677 270.593 15.5957 272.365 15.5957C273.228 15.5957 274.306 16.0457 275 16.5687L274.86 16.8117C274.653 16.7087 274.476 16.6717 274.269 16.6717ZM264.236 24.9857C264.236 28.0367 264.893 30.3947 266.768 30.3947C268.643 30.3947 269.301 28.0737 269.301 24.9857C269.301 21.8977 268.643 19.5757 266.768 19.5757C264.893 19.5757 264.236 21.9337 264.236 24.9857ZM79.9746 42.2861V61.9051L85.5336 61.4551V42.2861C84.6626 42.3231 83.7256 42.3601 82.7576 42.3601C81.7906 42.3601 80.8166 42.3231 79.9816 42.2861H79.9746ZM94.6588 48.7721C93.7578 48.7721 91.8828 49.2211 91.8828 50.4671V50.4741C91.869 51.7358 93.3606 52.5479 94.9788 53.4291C96.8776 54.463 98.9508 55.5918 98.9708 57.6531C98.9708 60.4902 95.6698 62.1931 92.7538 62.1561C90.7388 62.1561 88.3388 61.2201 86.8848 59.8711V59.1411C88.1688 60.0111 89.7638 60.4611 91.0488 60.4611C91.9128 60.4611 93.5808 60.0112 93.5808 58.8321C93.564 57.6821 92.1902 56.7837 90.6942 55.8054C88.8926 54.6273 86.9138 53.3333 86.9138 51.3441C86.9138 48.4261 89.2768 47.0771 92.2298 47.0771C94.2458 47.0771 96.2238 47.6301 97.8928 48.7061V49.5021C96.8438 49.0151 95.6628 48.7721 94.6588 48.7721ZM145.308 56.7382V51.2622C145.308 50.1492 145.027 46.6492 141.904 46.6492C139.822 46.6492 137.74 47.3782 134.787 51.0192V47.4812C133.953 47.5482 133.089 47.5482 132.114 47.5482H132.114H132.114C131.14 47.5482 130.239 47.5482 129.405 47.4812V57.6742C128.644 58.1462 127.67 58.6102 126.858 58.6102C125.883 58.6102 125.226 57.9842 125.226 56.7382V47.4152L120.885 47.7612C119.984 47.3122 118.869 47.0322 117.274 47.0322C110.26 47.0322 109.426 53.3402 109.426 55.3162C109.426 56.2002 109.5 57.0622 109.662 57.8582C109.249 58.0722 108.798 58.2782 108.37 58.4332C107.292 58.8162 105.314 59.0602 105.314 56.8712V39.5732C104.442 39.6102 103.615 39.6402 102.574 39.6402C101.698 39.6402 100.968 39.614 100.239 39.5878L100.236 39.5877C100.1 39.5828 99.9648 39.5779 99.8281 39.5732V57.4232C99.8281 58.4992 99.9681 61.8972 103.268 61.8972C105.616 61.8972 107.75 60.7622 109.788 58.3742C110.341 60.4162 111.589 61.8972 113.944 61.8972C115.82 61.8972 117.311 61.2712 119.777 57.5632C120.405 60.7182 121.025 61.8972 123.144 61.8972C125.263 61.8972 127.515 60.7402 129.405 58.2932V61.9712L134.787 61.5212V52.0582C135.688 51.1592 136.662 50.2522 137.6 50.0462C138.641 49.8032 139.859 50.1202 139.859 51.8152V57.2912C139.859 58.3962 140.14 61.8972 143.263 61.8972C145.485 61.8972 147.641 60.7182 149.546 58.2272V57.6372C148.785 58.1242 147.774 58.6102 146.977 58.6102C146.002 58.6472 145.308 57.9842 145.308 56.7382ZM119.733 57.0482C118.862 57.8142 117.924 58.3962 116.957 58.3962C114.771 58.3962 114.173 55.8322 114.173 54.1002C114.173 52.2282 115.074 48.7272 117.998 48.7272C119.282 48.7272 119.733 49.9062 119.733 50.8052V57.0482ZM167.997 58.4712C168.447 58.2642 168.935 58.0212 169.348 57.7782V58.3312C167.443 60.7552 165.213 61.8982 163.065 61.8982C160.916 61.8982 159.905 60.4752 159.698 57.8072C157.062 61.2712 154.907 61.8982 152.928 61.8982C149.805 61.8982 149.561 58.5002 149.561 57.4242V52.4352C149.561 51.0492 150.706 49.5972 151.68 48.8682C153.208 47.7252 155.01 47.3422 156.819 47.4822C157.41 47.5122 158.067 47.6892 159.632 48.3812V39.5742L159.869 39.5829C160.631 39.6109 161.455 39.6412 162.371 39.6412C163.382 39.6412 164.283 39.6112 165.118 39.5742V56.9082C165.118 59.0602 166.993 58.8172 167.997 58.4712ZM156.952 58.6482C157.816 58.5082 158.753 57.9182 159.624 57.1222V49.2582C158.79 49.1852 158.546 49.1852 158.34 49.2212C156.782 49.2512 155.01 49.9442 155.01 51.9562V56.9162C155.01 58.3012 155.911 58.8542 156.952 58.6482ZM174.176 50.4671C174.176 49.2211 176.051 48.7721 176.952 48.7721C177.956 48.7721 179.137 49.0151 180.186 49.5021V48.7061C178.517 47.6301 176.539 47.0771 174.523 47.0771C171.57 47.0771 169.207 48.4261 169.207 51.3441C169.207 53.3333 171.186 54.6273 172.987 55.8054C174.483 56.7837 175.857 57.6821 175.874 58.8321C175.874 60.0112 174.206 60.4611 173.342 60.4611C172.057 60.4611 170.462 60.0111 169.178 59.1411V59.8711C170.64 61.2201 173.032 62.1561 175.047 62.1561C177.963 62.1931 181.264 60.4902 181.264 57.6531C181.244 55.5925 179.172 54.4637 177.275 53.4301C175.657 52.5486 174.166 51.7362 174.183 50.4741L174.176 50.4671ZM43.8388 3.13574C43.8388 3.13574 44.5088 7.52774 47.0908 8.72374C48.2953 9.2792 49.8384 9.39337 51.3421 9.50463C54.0968 9.70844 56.7196 9.90249 56.8878 12.7817C57.0888 16.3117 53.7618 17.0067 49.5208 16.0527C45.1458 15.0737 40.9808 9.84474 43.8388 3.13574ZM60.1644 19.9101C61.1024 24.1681 56.8704 27.0291 56.8704 27.0291L56.8784 27.0211C56.8784 27.0211 57.9684 24.6451 57.7334 23.1971C57.6266 22.5366 56.8596 22.4599 55.9729 22.3712C54.9169 22.2656 53.6911 22.1429 53.2084 20.9971C52.3194 18.8971 53.6014 17.0481 54.9594 16.5881C56.3254 16.1281 59.2254 15.6511 60.1644 19.9101ZM56.2687 46.4883C56.2687 46.4883 55.2877 47.8773 55.3967 49.0403C55.4443 49.5445 55.7437 50.1453 56.0483 50.7563C56.6581 51.9799 57.2885 53.2447 55.9587 53.8583C53.5697 54.9633 52.7487 51.6163 53.1177 50.0523C53.7707 47.2993 56.2607 46.4883 56.2607 46.4883H56.2687ZM52.3324 65.4273L52.3205 65.4455L52.3125 65.4375L52.3324 65.4273ZM52.3324 65.4273C52.4995 65.1725 54.3682 62.2986 54.6165 60.8525C54.8395 59.5472 54.113 57.9581 53.759 57.1838L53.759 57.1838C53.7002 57.0552 53.6517 56.9491 53.6195 56.8705C53.4015 56.3185 53.1835 54.5445 55.1365 54.2935C57.0975 54.0425 58.1115 56.7865 58.0865 58.0415C58.0615 59.2965 56.9975 61.7975 55.8315 63.0195C54.7302 64.1832 52.5627 65.3094 52.3324 65.4273ZM52.7982 65.5127C52.7982 65.5127 51.5492 66.1817 50.3172 66.2157C50.0646 66.2225 49.6199 66.1786 49.0547 66.1228C46.8634 65.9067 42.8599 65.5118 41.2072 67.1947C39.1372 69.3107 39.3472 71.5027 40.2602 72.5647C41.1742 73.6277 44.0482 74.0627 45.5992 72.6657C46.3052 72.0316 46.8133 71.1191 47.3074 70.2317C47.8044 69.339 48.2873 68.4718 48.9432 67.9387C50.1082 66.9937 52.7982 65.5207 52.7982 65.5207V65.5127ZM36.1711 75.9454C39.1631 76.9994 42.5241 74.9244 42.5241 74.9244H42.5321C42.5321 74.9244 40.4121 74.5894 39.1971 74.2464C38.2509 73.9796 37.8223 73.1853 37.4301 72.4585C37.1342 71.9101 36.8591 71.4002 36.3981 71.1844C35.8361 70.9254 34.2441 70.5904 33.4561 71.8704C32.6601 73.1504 33.1631 74.8824 36.1711 75.9454ZM31.1757 69.8545C31.1757 69.8545 28.5607 74.6895 30.1787 77.3085C31.8047 79.9355 34.7627 79.4085 35.2157 78.2785C35.6597 77.1495 34.5197 76.3125 32.9687 75.7775C30.9657 75.0915 30.7317 72.8665 30.7567 71.9125C30.7737 71.0005 31.1837 69.8545 31.1837 69.8545H31.1757ZM14.6676 61.7463L14.6642 61.7139H14.6722L14.6676 61.7463ZM13.6842 65.5709C14.3294 64.0093 14.6282 62.0228 14.6676 61.7463C14.702 62.069 14.9861 64.7057 15.1672 65.5539C15.2842 66.0988 15.5874 66.8136 15.9089 67.5715C16.4611 68.8734 17.0674 70.3027 16.8772 71.2179C16.6342 72.3549 15.5272 74.4719 13.5832 74.3469C11.6302 74.2289 10.3142 72.2719 10.6582 70.6319C10.9118 69.4104 11.6586 68.4663 12.3761 67.5594C12.8922 66.9072 13.393 66.2741 13.6842 65.5709ZM3.55273 64.174C3.55273 64.174 4.46574 61.965 6.56174 62.2411C6.79906 62.2724 7.02112 62.3026 7.22931 62.3309C8.85888 62.5524 9.63865 62.6584 10.2407 62.3171C11.3137 61.7231 12.5787 62.5181 12.8557 63.5381C13.1317 64.5671 12.6207 66.458 10.3997 66.383C8.934 66.3327 7.917 65.64 7.08544 65.0735C6.66205 64.7851 6.28674 64.5295 5.92474 64.4081C4.85974 64.0571 3.55273 64.174 3.55273 64.174ZM-9.98578 67.0339C-10.017 67.0018 -10.0332 66.9845 -10.0332 66.9845L-10.0252 66.9765L-9.98578 67.0339ZM-6.0862 72.2135C-8.16055 69.6622 -9.72206 67.4166 -9.98578 67.0339C-9.54952 67.4821 -6.17563 70.8144 -2.8592 70.2135C-1.79616 70.0213 -0.541259 69.3857 0.764901 68.7242L0.764984 68.7241C3.83541 67.169 7.18909 65.4705 8.9998 69.0505C10.8938 72.8075 5.9998 75.0745 4.4568 75.3755C1.1808 76.0115 -3.8062 75.0245 -6.0862 72.2135ZM-10.5691 66.3742C-10.5691 66.3742 -10.7398 66.1877 -10.9082 65.6485C-10.6954 66.0879 -10.5691 66.3662 -10.5691 66.3662V66.3742ZM-10.9082 65.6485C-11.0837 65.0867 -11.2566 64.1419 -11.2311 62.6262C-11.2186 61.7422 -10.9999 60.5793 -10.7581 59.2937C-10.1901 56.2731 -9.49477 52.5753 -11.0471 50.2282C-13.2591 46.8902 -16.1261 45.1412 -18.7401 46.6972C-21.3471 48.2622 -21.2461 52.9052 -19.4611 54.9632C-18.6507 55.9018 -17.8404 56.6786 -16.9896 57.4943C-15.9749 58.4671 -14.9025 59.4952 -13.7031 60.9192C-12.6606 62.1552 -11.4763 64.4757 -10.9082 65.6485ZM-22.5201 34.8931C-22.4951 32.0901 -20.0231 29.2461 -20.0231 29.2461C-20.0231 29.2461 -23.5351 32.5591 -24.4311 35.0691C-25.0431 36.8091 -26.2501 41.5691 -20.9951 44.7481C-15.7321 47.9101 -14.3321 41.9791 -16.2681 40.5481C-16.6055 40.2994 -17.1669 40.069 -17.8187 39.8014C-19.7749 38.9984 -22.5456 37.8611 -22.5201 34.8931ZM-4.74412 6.90879L-4.74848 6.90546L-4.73612 6.90079L-4.74412 6.90879ZM-4.74848 6.90546C-4.95864 6.98545 -7.78583 8.08223 -8.42312 9.43479C-9.09412 10.8408 -10.9041 11.0668 -11.8761 10.2468C-12.8571 9.42679 -13.1421 7.11779 -10.7201 5.72079C-8.23259 4.29486 -4.8857 6.8013 -4.74848 6.90546ZM-19.2848 28.1984L-19.3148 28.2291L-19.3279 28.2424L-19.3359 28.2344L-19.2848 28.1984ZM-9.59794 20.8724C-10.9413 22.3084 -18.5861 27.7061 -19.2848 28.1984C-18.8836 27.7851 -15.7976 24.5169 -14.8109 20.7964C-14.578 19.9181 -14.4119 18.8944 -14.2423 17.8488C-13.6429 14.154 -12.9989 10.1851 -9.20394 11.3854C-4.33494 12.9244 -8.18994 19.3664 -9.59794 20.8724ZM-8.31623 21.6836L-8.33281 21.701L-8.32423 21.6836H-8.31623ZM-8.33281 21.701C-8.56842 21.9496 -11.2324 24.8225 -11.0402 27.3976C-10.8784 29.6411 -12.3467 31.358 -13.8171 33.0773C-14.1727 33.4931 -14.5284 33.909 -14.8612 34.3326C-16.3202 36.1896 -15.6742 38.6326 -13.7132 39.6536C-11.3832 40.8666 -8.51723 38.4156 -7.68723 36.6666C-6.24068 33.6297 -7.39724 31.1697 -8.35578 29.131C-8.79674 28.1931 -9.19579 27.3444 -9.28023 26.5696C-9.53503 24.2308 -8.44122 21.9227 -8.33281 21.701ZM62.385 27.3352C62.4001 27.3273 62.408 27.3233 62.408 27.3233L62.4 27.3203C62.4 27.3203 62.3949 27.3253 62.385 27.3352ZM57.97 31.8363C58.6265 29.3442 62.0702 27.4994 62.385 27.3352C62.203 27.517 60.4238 29.3396 59.904 31.6273C59.731 32.3877 59.8314 33.3204 59.9423 34.351C60.1833 36.591 60.4741 39.2932 58.116 41.6923C56.762 43.0753 53.253 44.4573 51.446 42.5513C49.925 40.9463 50.111 38.4273 52.095 37.1463C52.5469 36.8553 53.0178 36.5788 53.4886 36.3024C55.4412 35.156 57.3915 34.011 57.97 31.8363Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 0,
            transform: "translateY(-100%) translateZ(0px)",
          }}
        >
          <svg
            width="227"
            height="45"
            viewBox="0 0 227 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 227,
                "--height": 45,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M-7.92725 48.8715C-4.18604 48.8642 -0.444766 48.8569 3.29582 48.9987H5.72332C7.70546 48.997 9.68755 48.9954 11.6696 48.9939L11.7405 48.9938H11.7406H11.7406H11.7407H11.7407H11.7408H11.7409H11.7409H11.741H11.741C14.3626 48.9917 16.9842 48.9896 19.6059 48.9872C19.6483 48.9871 19.6906 48.9873 19.733 48.9876C19.8986 48.9886 20.0644 48.9896 20.228 48.972C20.7194 48.9187 21.0846 48.6749 21.2802 48.213C21.3683 48.0043 21.4411 47.7877 21.5121 47.5722C22.0029 46.0805 22.4933 44.5885 22.9806 43.0956C25.5388 35.2572 28.0968 27.4186 30.6538 19.5799C30.8068 19.1106 30.9577 18.6406 31.1086 18.1707C31.3051 17.5585 31.5017 16.9463 31.7028 16.3357C31.9183 15.6824 31.7511 15.1591 31.204 14.7494C31.0218 14.6129 30.8391 14.4767 30.6538 14.344C23.5854 9.26518 16.5166 4.18683 9.44771 -0.891638L6.12092 -3.28168C5.90167 -3.43914 5.68204 -3.59614 5.46239 -3.75315L5.46193 -3.75348L5.4618 -3.75357L5.46174 -3.75362C5.02432 -4.06631 4.58682 -4.37905 4.15212 -4.6955C3.61842 -5.08385 3.08722 -5.11115 2.54542 -4.71721C2.43595 -4.63751 2.32498 -4.55984 2.214 -4.48216C2.10428 -4.40537 1.99455 -4.32856 1.88622 -4.24976C-6.83918 2.10468 -15.5642 8.45976 -24.2889 14.8151C-24.3536 14.8622 -24.4167 14.9116 -24.4798 14.961L-24.4798 14.9611L-24.4799 14.9612C-24.5309 15.0012 -24.582 15.0412 -24.6339 15.08C-24.9749 15.3347 -25.0652 15.6703 -24.9565 16.0695C-24.9185 16.2091 -24.8802 16.3487 -24.8354 16.4861C-24.0334 18.9466 -23.2311 21.4071 -22.4287 23.8676L-20.8192 28.8038C-20.2903 30.4263 -19.7611 32.0489 -19.2319 33.6714C-17.7365 38.2567 -16.2411 42.8419 -14.7496 47.4286C-14.3178 48.7571 -14.1864 48.8613 -12.764 48.869C-11.1518 48.8778 -9.53953 48.8746 -7.92725 48.8715ZM7.37487 46.3859L3.36992 46.3857C-1.65168 46.3854 -6.67318 46.3854 -11.6951 46.386C-11.7335 46.386 -11.7721 46.385 -11.8106 46.384C-11.8969 46.3817 -11.9832 46.3795 -12.0684 46.3885C-12.3486 46.4183 -12.4629 46.2849 -12.5429 46.0244C-12.768 45.2929 -13.0066 44.5653 -13.2452 43.8378L-13.2452 43.8377C-13.335 43.564 -13.4247 43.2903 -13.5138 43.0165L-14.5426 39.8505L-14.5521 39.8212C-15.9173 35.6202 -17.2824 31.4194 -18.6471 27.2182C-19.7768 23.7401 -20.9061 20.262 -22.0345 16.7836C-22.1837 16.3233 -22.1828 16.3186 -21.7795 16.0289C-18.775 13.8694 -15.7702 11.7106 -12.7654 9.55176L-12.7359 9.53057L-12.6732 9.48547L-12.6677 9.48156C-10.3885 7.84404 -8.1093 6.20654 -5.83028 4.56878C-4.69842 3.75556 -3.56702 2.94174 -2.43562 2.12792C-0.6407 0.836835 1.15419 -0.454234 2.95082 -1.74285C3.03876 -1.80589 3.11144 -1.86055 3.17295 -1.9068L3.17319 -1.90699L3.17329 -1.90706L3.17353 -1.90724L3.17363 -1.90732C3.34194 -2.03391 3.42637 -2.09741 3.51082 -2.09745C3.59585 -2.09749 3.6809 -2.03322 3.85156 -1.90426L3.85175 -1.90412L3.85215 -1.90381L3.85258 -1.9035L3.8528 -1.90333C3.90777 -1.8618 3.97159 -1.81358 4.04712 -1.75867C7.56925 0.801042 11.0897 3.36303 14.6101 5.92494L14.6617 5.96251L14.6838 5.97853L14.6908 5.98365L14.6978 5.98876L14.7048 5.99388C16.2115 7.09031 17.7181 8.18674 19.2248 9.28296C21.4121 10.8746 23.5999 12.4657 25.7877 14.0568L28.2715 15.8633C28.3172 15.8965 28.362 15.9313 28.4068 15.9661L28.4068 15.9661L28.4069 15.9661C28.51 16.0462 28.6131 16.1263 28.7264 16.1877C29.0265 16.3506 29.0315 16.5686 28.9334 16.8608C28.7314 17.4617 28.5373 18.0655 28.3431 18.6694L28.3429 18.6702C28.2019 19.1086 28.0609 19.5471 27.9168 19.9847C25.4498 27.4812 22.9812 34.9771 20.5114 42.4727C20.1493 43.5714 19.78 44.6676 19.4091 45.7635C19.3936 45.8093 19.3794 45.8518 19.3662 45.8912L19.3662 45.8913L19.3661 45.8913L19.3661 45.8914C19.272 46.1727 19.2301 46.2979 19.1437 46.3518C19.0744 46.3951 18.9765 46.3925 18.8001 46.3879C18.7324 46.3861 18.6531 46.3841 18.5594 46.3842C14.8312 46.3867 11.1033 46.3863 7.37521 46.3859H7.37518H7.37514H7.37511H7.37507H7.37504H7.375H7.37497H7.37494H7.3749H7.37487ZM104.435 18.2497V17.5844C104.65 17.6973 104.759 17.8362 104.859 17.9641C104.883 17.9945 104.906 18.0242 104.931 18.0528C105.709 18.9751 106.485 19.8997 107.261 20.8245L107.768 21.4285L109.443 23.4239C112.119 26.6114 114.794 29.7988 117.463 32.9931C117.696 33.2726 117.926 33.41 118.298 33.3979C118.813 33.3815 119.329 33.3844 119.844 33.3873C120.138 33.3889 120.432 33.3906 120.726 33.3886C121.197 33.3858 121.197 33.3796 121.205 32.9171V32.9168C121.206 32.848 121.205 32.7791 121.205 32.7102C121.205 32.6757 121.205 32.6412 121.205 32.6066V11.0255C121.205 10.987 121.203 10.9482 121.202 10.9095V10.9092C121.199 10.8234 121.196 10.7375 121.208 10.6536C121.252 10.3298 121.123 10.2181 120.796 10.2259C120.267 10.238 119.738 10.2358 119.209 10.2336H119.209H119.209H119.209H119.209H119.209H119.209H119.208H119.208H119.208C118.949 10.2326 118.689 10.2315 118.43 10.2321L118.304 10.2322C117.991 10.2319 117.848 10.2318 117.786 10.3022C117.735 10.3605 117.738 10.4672 117.744 10.6621C117.746 10.7399 117.749 10.8318 117.749 10.9402C117.747 13.4566 117.746 15.9729 117.746 18.4893C117.746 21.3682 117.745 24.2472 117.743 27.1263C117.743 27.172 117.746 27.2189 117.75 27.2666C117.762 27.4335 117.775 27.6112 117.644 27.7882C117.385 27.4828 117.13 27.1823 116.878 26.8848L116.86 26.8629L116.855 26.8579C116.477 26.4113 116.104 25.9712 115.732 25.5307C114.845 24.4823 113.958 23.4339 113.072 22.3856L113.057 22.3688L113.043 22.3519L113.029 22.335L113 22.3013L112.986 22.2842C109.703 18.4034 106.421 14.5225 103.147 10.6344C102.893 10.332 102.642 10.2141 102.251 10.2231C101.53 10.2393 100.809 10.2373 100.087 10.2354C99.6881 10.2343 99.2888 10.2332 98.8896 10.2352C98.8615 10.2354 98.8324 10.2326 98.8027 10.2298C98.6917 10.2193 98.5732 10.208 98.4746 10.3441C98.6756 10.5853 98.875 10.8286 99.0746 11.0721L99.075 11.0725C99.5547 11.6577 100.036 12.2445 100.543 12.8082C100.942 13.2508 101.102 13.7046 101.1 14.3045C101.083 19.0845 101.085 23.8642 101.086 28.6441C101.086 29.9624 101.087 31.2806 101.087 32.5989L101.087 32.6465L101.087 32.6761L101.088 32.7551L101.088 32.758C101.09 32.8706 101.092 32.9831 101.086 33.0951C101.075 33.3058 101.167 33.392 101.376 33.3908C102.31 33.3867 103.244 33.3873 104.177 33.3904C104.359 33.3914 104.442 33.316 104.436 33.1336C104.431 33.0197 104.433 32.9058 104.434 32.7919C104.434 32.7403 104.435 32.6886 104.435 32.637V18.2497ZM194.079 27.7625V27.0168L194.079 21.6436C194.078 18.0613 194.078 14.479 194.079 10.8966C194.079 10.8147 194.078 10.7425 194.076 10.6789C194.073 10.4674 194.07 10.3505 194.128 10.286C194.198 10.2061 194.359 10.2064 194.72 10.2069L194.793 10.207L195.136 10.2074C195.706 10.208 196.277 10.2086 196.848 10.2067C197.553 10.2043 197.553 10.2227 197.54 10.6662V10.6665C197.538 10.7409 197.535 10.8272 197.536 10.9273C197.541 11.7871 197.54 12.6468 197.539 13.5066C197.538 13.8661 197.538 14.2257 197.538 14.5853L197.538 20.6205C197.538 24.6436 197.538 28.6665 197.538 32.6895L197.538 32.7265L197.538 32.8026L197.539 32.8887C197.542 33.1228 197.543 33.2451 197.483 33.3088C197.417 33.3786 197.277 33.3782 196.983 33.3774H196.982L196.873 33.3772L196.824 33.3772C196.589 33.3778 196.355 33.3762 196.12 33.3746H196.12C195.628 33.3712 195.136 33.3678 194.646 33.3846C194.28 33.397 194.038 33.2782 193.803 32.9957C192.163 31.0271 190.516 29.0654 188.868 27.1038L188.847 27.0794L188.827 27.0554C188.305 26.4341 187.783 25.8127 187.262 25.1911C186.631 24.4401 186.001 23.689 185.371 22.9379L185.327 22.8862L185.306 22.861L185.298 22.851L185.283 22.8333L185.275 22.8234L185.273 22.821L185.271 22.8187C183.939 21.2313 182.607 19.6439 181.274 18.0578C181.25 18.0302 181.228 18.0015 181.205 17.9723C181.103 17.8428 180.992 17.7024 180.767 17.5928V18.3143L180.767 21.9239C180.767 25.5154 180.767 29.107 180.766 32.6985C180.766 32.7308 180.766 32.7615 180.766 32.7908L180.767 32.8891C180.77 33.1333 180.771 33.2559 180.71 33.3171C180.649 33.3786 180.526 33.3781 180.278 33.3771L180.201 33.3768L180.166 33.3768L180.112 33.3769C179.828 33.378 179.544 33.3771 179.259 33.3763C178.776 33.3749 178.293 33.3734 177.81 33.3812C177.517 33.3862 177.385 33.2863 177.415 32.9863C177.424 32.8885 177.422 32.7892 177.419 32.6901C177.418 32.6443 177.417 32.5986 177.417 32.553C177.417 31.2541 177.417 29.9552 177.416 28.6563V28.6326C177.416 23.7807 177.415 18.9288 177.424 14.0766C177.426 13.6591 177.325 13.3315 177.047 13.0142C176.507 12.3957 175.985 11.7612 175.463 11.127L175.463 11.1269L175.462 11.1267L175.462 11.1266L175.462 11.1265L175.462 11.1264L175.462 11.1263L175.462 11.1261L175.462 11.126L175.462 11.1258C175.326 10.9615 175.191 10.7972 175.056 10.6332C175.039 10.6125 175.02 10.5928 175 10.5726C174.92 10.4898 174.833 10.3996 174.845 10.2076H175.499C175.785 10.2077 176.07 10.2089 176.356 10.21C177.108 10.2129 177.859 10.2158 178.61 10.2005C178.978 10.1928 179.219 10.3175 179.454 10.5957C184.151 16.1647 188.856 21.727 193.562 27.2883C193.587 27.3182 193.611 27.3492 193.636 27.3809C193.738 27.5119 193.848 27.6534 194.079 27.7625ZM80.3729 19.9075C79.6119 20.0229 78.8999 20.2794 78.1199 20.6414V17.3699C78.1199 17.071 78.1196 16.7722 78.1194 16.4734C78.1188 15.677 78.1182 14.8808 78.1219 14.0844C78.1239 13.6567 78.1329 13.6561 78.5729 13.6471C78.658 13.6454 78.7426 13.6459 78.8275 13.6463C78.8672 13.6466 78.907 13.6468 78.9469 13.6468H90.3349C90.3811 13.6468 90.4274 13.6459 90.4737 13.645C90.5727 13.6431 90.6718 13.6412 90.7699 13.648C90.9969 13.6641 91.1079 13.5962 91.1049 13.3409C91.0939 12.411 91.0949 11.4811 91.1049 10.5511C91.1079 10.3076 91.0139 10.2127 90.7769 10.2319C90.7072 10.2374 90.637 10.2358 90.5668 10.2341C90.5331 10.2334 90.4995 10.2326 90.4659 10.2326C85.4259 10.2326 80.3849 10.2326 75.3439 10.2323L75.2878 10.2323C74.9473 10.2321 74.7959 10.232 74.7306 10.3069C74.6784 10.3668 74.6811 10.4746 74.6861 10.6687V10.6691C74.6879 10.7379 74.6899 10.8175 74.6899 10.9097C74.6877 18.1835 74.6883 25.4573 74.6893 32.7312C74.6893 32.7765 74.689 32.8189 74.6886 32.8586L74.6877 32.932C74.6848 33.1787 74.6832 33.3059 74.746 33.3713C74.813 33.4408 74.9529 33.4402 75.2418 33.4388C75.285 33.4386 75.3317 33.4384 75.3819 33.4384C80.7903 33.4387 86.1987 33.4387 91.608 33.4387H91.8109L91.8351 33.4386L91.883 33.4381L91.9349 33.4373H91.935C92.018 33.4358 92.1012 33.4344 92.1839 33.4387C92.3959 33.4499 92.4779 33.3512 92.4769 33.1446C92.4729 32.1942 92.4719 31.2438 92.4779 30.2931C92.4789 30.0707 92.3719 30.0053 92.1699 30.0174C92.0708 30.0233 91.9718 30.0217 91.8724 30.0201C91.8263 30.0193 91.7801 30.0186 91.7339 30.0186H81.9019C81.5972 30.0186 81.2926 30.0182 80.9879 30.0178C80.1516 30.0166 79.3152 30.0154 78.4789 30.023C78.2229 30.0248 78.1129 29.9649 78.1149 29.6821C78.1259 27.9466 78.1259 26.2105 78.1139 24.475C78.1119 24.2017 78.2159 24.0665 78.4529 23.9638C79.3369 23.582 80.2559 23.3577 81.2169 23.2957C82.3332 23.2229 83.4509 23.2297 84.5687 23.2365C85.1101 23.2398 85.6515 23.2431 86.1929 23.2374C86.5669 23.2333 86.9399 23.2324 87.3139 23.237C87.5179 23.2395 87.6099 23.1607 87.6089 22.9464C87.6046 22.2107 87.6054 21.475 87.6062 20.7505V20.7494V20.7483V20.7472V20.7461V20.745V20.7439V20.7429V20.7418C87.6065 20.4533 87.6069 20.1666 87.6069 19.8824C87.4782 19.7808 87.3628 19.7828 87.2532 19.7848C87.2394 19.785 87.2256 19.7853 87.2119 19.7853C86.7727 19.7857 86.3335 19.7857 85.8943 19.7857C84.5702 19.7856 83.2457 19.7856 81.9219 19.7968C81.4049 19.8008 80.8889 19.8291 80.3729 19.9075ZM210.338 20.6312C211.878 19.8002 213.492 19.7583 215.115 19.7587C215.544 19.7588 215.972 19.7585 216.401 19.7582H216.402C217.363 19.7577 218.324 19.7571 219.285 19.7605C219.79 19.7624 219.796 19.7708 219.799 20.2853C219.804 21.112 219.806 21.9386 219.798 22.7653C219.794 23.2008 219.784 23.2119 219.339 23.2138C218.778 23.2162 218.216 23.2152 217.655 23.2141H217.654C216.868 23.2127 216.081 23.2112 215.294 23.2194L215.22 23.2201C214.084 23.2318 212.947 23.2436 211.836 23.5401C211.437 23.647 211.053 23.794 210.668 23.9417L210.663 23.9434C210.368 24.0559 210.269 24.2405 210.272 24.5544C210.281 25.3576 210.28 26.1607 210.28 26.9639C210.279 27.6281 210.279 28.2923 210.283 28.9566C210.284 29.0504 210.272 29.1514 210.259 29.2528C210.229 29.503 210.199 29.7563 210.353 29.9135C210.528 30.0905 210.799 30.0596 211.067 30.0292C211.169 30.0176 211.271 30.006 211.366 30.0062C214.317 30.0109 217.267 30.011 220.218 30.011C221.479 30.0111 222.74 30.0111 224 30.0115L224.087 30.0112L224.169 30.0106C224.421 30.0086 224.549 30.0075 224.613 30.0709C224.679 30.1357 224.679 30.2681 224.678 30.536L224.678 30.6163L224.678 30.6713C224.678 30.7864 224.678 30.9016 224.678 31.0168L224.677 31.3551C224.675 31.9123 224.673 32.4697 224.682 33.0271C224.687 33.3181 224.588 33.4542 224.289 33.4316C224.205 33.4251 224.121 33.427 224.036 33.4289C223.996 33.4298 223.956 33.4307 223.916 33.4307H207.61C207.547 33.4307 207.485 33.4316 207.423 33.4303H207.423C206.892 33.4217 206.886 33.4216 206.886 32.8751C206.885 29.9339 206.885 26.9929 206.885 24.0516L206.885 21.0952V10.9894C206.885 10.9501 206.887 10.9106 206.888 10.8711V10.8708C206.891 10.7858 206.894 10.7008 206.883 10.6175C206.84 10.2763 207.014 10.1997 207.319 10.2032C208.02 10.2118 208.72 10.2102 209.42 10.2087L209.423 10.2087L209.784 10.2079C209.937 10.2077 210.091 10.2075 210.244 10.2075H222.381L222.463 10.2073L222.499 10.2071C222.584 10.2067 222.67 10.2063 222.754 10.2078C223.292 10.2174 223.296 10.2177 223.299 10.7655C223.301 11.0802 223.3 11.3951 223.299 11.7099C223.298 12.2218 223.297 12.7337 223.305 13.2454C223.31 13.5367 223.218 13.6511 222.915 13.644C222.43 13.6323 221.945 13.6347 221.459 13.637C221.26 13.638 221.061 13.639 220.861 13.639H211.028C210.981 13.639 210.933 13.6398 210.886 13.6407C210.788 13.6425 210.69 13.6442 210.592 13.6384C210.342 13.6232 210.261 13.7529 210.279 13.9781C210.281 13.9919 210.28 14.0057 210.28 14.0195L210.28 14.0293L210.279 14.0401L210.28 15.6331C210.281 17.2101 210.281 18.7871 210.283 20.3641C210.283 20.3986 210.292 20.4332 210.306 20.4895L210.306 20.4898L210.306 20.4907L210.306 20.4914L210.306 20.4917L210.307 20.4926C210.311 20.5116 210.316 20.5329 210.322 20.5575C210.327 20.5793 210.333 20.6037 210.338 20.6312ZM51.7622 33.3502C51.7871 33.3409 51.8145 33.3307 51.8456 33.3213V32.6454C51.8456 32.0235 51.8461 31.4017 51.8466 30.7799C51.8481 28.839 51.8496 26.8984 51.8365 24.9578C51.8341 24.5899 51.9567 24.414 52.288 24.2723C53.4323 23.7822 54.6327 23.5874 55.8632 23.5681C57.225 23.5472 58.5873 23.5531 59.9496 23.559L60.4062 23.561C60.948 23.5632 61.486 23.5268 62.0144 23.4179C64.5792 22.8885 66.2778 21.4207 66.9675 18.8614C67.23 17.8884 67.2533 16.8989 67.1646 15.9088C66.9158 13.1233 65.1537 11.1009 62.4308 10.4464C61.7003 10.2708 60.9558 10.2311 60.2072 10.2314C58.393 10.232 56.5788 10.232 54.7647 10.2319C52.8863 10.2318 51.0079 10.2317 49.1295 10.2324L49.0143 10.2321L48.9771 10.232C48.6675 10.2307 48.5238 10.2301 48.4591 10.3012C48.4031 10.3628 48.4061 10.4781 48.4117 10.6931V10.6931C48.4137 10.7723 48.4162 10.8649 48.4161 10.9734C48.4137 16.6293 48.4139 22.2853 48.4141 27.9411L48.4142 32.6727C48.4142 32.7114 48.4153 32.7502 48.4164 32.7891C48.4187 32.8744 48.4211 32.9598 48.4121 33.0443C48.3828 33.3234 48.5189 33.3969 48.7764 33.3938C49.3633 33.3871 49.9503 33.3862 50.5373 33.3852C50.9045 33.3846 51.2717 33.3841 51.6388 33.382C51.6771 33.3819 51.7153 33.3676 51.7622 33.3502ZM56.6663 20.1287C55.045 20.1285 53.4345 20.1912 51.873 21.0395C51.8705 20.9973 51.868 20.9588 51.8656 20.9233L51.8595 20.8354L51.8595 20.835C51.852 20.7286 51.8465 20.6507 51.8465 20.5727C51.8452 18.4256 51.8443 16.2785 51.8465 14.1314C51.8468 13.6326 51.8521 13.6273 52.3478 13.6273C53.5633 13.6267 54.7787 13.627 55.994 13.6272C57.5143 13.6276 59.0344 13.6279 60.5547 13.6266C60.9302 13.6264 61.2983 13.6698 61.6638 13.7495C62.787 13.9943 63.4922 14.6513 63.7251 15.7927C63.8593 16.4488 63.8783 17.1058 63.7463 17.7589C63.4695 19.1299 62.5976 19.9219 61.2027 20.0758C60.8331 20.1164 60.4582 20.1245 60.0858 20.1266C59.267 20.131 58.4485 20.1302 57.6298 20.1294C57.3087 20.1291 56.9875 20.1287 56.6663 20.1287ZM158.741 33.6223H158.741C156.597 33.6157 154.452 33.6091 152.309 33.6432C151.031 33.663 150.964 33.0681 151.342 32.2154C154.036 26.1464 156.704 20.0659 159.371 13.9853L160.349 11.7568C160.57 11.2522 160.822 10.852 161.471 10.8803C161.852 10.8967 162.103 11.0347 162.252 11.3732C162.46 11.8453 162.667 12.3183 162.872 12.7913L164.665 16.9248L164.81 17.259L164.945 17.5685C167.072 22.4705 169.199 27.3722 171.325 32.2746L171.353 32.3384C171.427 32.5061 171.501 32.6764 171.537 32.8528C171.631 33.3159 171.441 33.5644 170.971 33.6137C170.811 33.6305 170.647 33.6291 170.484 33.6278L170.428 33.6273L170.375 33.6271L170.35 33.627C168.015 33.6278 165.682 33.6277 163.347 33.6277L161.329 33.6276C160.467 33.6276 159.604 33.625 158.742 33.6223H158.742H158.741H158.741H158.741ZM167.371 30.5819C165.376 25.9013 163.406 21.2786 161.391 16.5483C160.67 18.2356 159.954 19.9052 159.242 21.5659L159.221 21.6145L159.218 21.6214L159.217 21.6235C157.932 24.6217 156.659 27.5909 155.391 30.5819H167.371ZM241.783 32.6106V23.4959L241.783 21.2086C241.782 18.9328 241.782 16.6572 241.785 14.3814C241.785 14.2961 241.784 14.2205 241.783 14.1535C241.78 13.8912 241.778 13.7612 241.842 13.6974C241.905 13.6347 242.032 13.6358 242.283 13.638C242.347 13.6385 242.419 13.6392 242.5 13.6388C243.193 13.636 243.887 13.6367 244.58 13.6373C244.883 13.6376 245.185 13.6379 245.488 13.6379L246.608 13.6378C247.604 13.6376 248.6 13.6374 249.596 13.6385L249.628 13.6387C249.829 13.6398 250.008 13.6408 250.005 13.3361C249.992 12.4062 249.995 11.4759 250.003 10.546C250.005 10.2994 249.894 10.215 249.667 10.2243C249.585 10.2278 249.503 10.2266 249.42 10.2253C249.378 10.2247 249.336 10.224 249.294 10.224H230.87C230.847 10.224 230.824 10.2243 230.801 10.2246L230.742 10.2256C230.66 10.2272 230.578 10.2287 230.497 10.2246C230.258 10.2125 230.168 10.3233 230.17 10.5578C230.177 11.488 230.177 12.418 230.17 13.3479C230.169 13.5619 230.258 13.6478 230.466 13.6379C230.563 13.6332 230.66 13.6348 230.757 13.6363L230.828 13.6374C230.853 13.6377 230.877 13.6379 230.902 13.6379L232.648 13.6377C234.431 13.6375 236.214 13.6372 237.998 13.6395C238.477 13.6401 238.478 13.6485 238.489 14.1119C238.491 14.2152 238.491 14.3186 238.49 14.422C238.49 14.4632 238.49 14.5045 238.49 14.5458V32.5886C238.49 32.6467 238.491 32.7047 238.492 32.7627C238.493 32.8702 238.495 32.9776 238.491 33.0846C238.482 33.2968 238.581 33.3774 238.789 33.3762C239.682 33.3718 240.573 33.37 241.465 33.3781C241.712 33.3805 241.798 33.2747 241.784 33.0443C241.778 32.9465 241.78 32.848 241.781 32.7495L241.782 32.7079L241.783 32.6567L241.783 32.6106ZM137.97 10.2338H147.118C147.157 10.2338 147.196 10.2352 147.235 10.2365C147.321 10.2396 147.406 10.2426 147.49 10.2314C147.829 10.1858 147.908 10.3439 147.9 10.6544C147.888 11.1913 147.89 11.7284 147.892 12.2656C147.893 12.5344 147.894 12.8032 147.894 13.072C147.894 13.1337 147.894 13.1889 147.895 13.2381C147.896 13.4399 147.897 13.5424 147.846 13.5943C147.794 13.648 147.686 13.6473 147.466 13.646C147.427 13.6458 147.384 13.6455 147.338 13.6456C146.418 13.6459 145.498 13.6458 144.579 13.6457H144.568C143.168 13.6455 141.769 13.6453 140.369 13.6468C140.295 13.6468 140.229 13.6462 140.17 13.6456C139.919 13.6431 139.794 13.6419 139.732 13.7038C139.671 13.7656 139.672 13.8904 139.675 14.1396L139.675 14.1422V14.1425C139.675 14.2027 139.676 14.2703 139.676 14.3459C139.675 16.6335 139.675 18.9212 139.676 21.2088C139.676 25.0371 139.676 28.8654 139.674 32.6937C139.674 32.7868 139.675 32.8675 139.676 32.9375C139.68 33.1658 139.682 33.2796 139.627 33.3358C139.571 33.3916 139.458 33.3905 139.233 33.3882L139.153 33.3875C139.129 33.3873 139.103 33.3872 139.077 33.3872C139.049 33.3871 139.019 33.3872 138.989 33.3875C138.284 33.3934 137.578 33.3919 136.873 33.3879C136.385 33.3848 136.385 33.3807 136.378 32.8709V32.8708C136.377 32.788 136.377 32.7052 136.378 32.6226L136.378 32.4989V14.337C136.378 14.2821 136.378 14.2314 136.378 14.1848C136.379 13.8967 136.38 13.76 136.312 13.6963C136.251 13.6388 136.133 13.6409 135.91 13.6448C135.842 13.6461 135.763 13.6475 135.673 13.6474C134.337 13.6454 133 13.6456 131.663 13.6457C130.636 13.6459 129.608 13.646 128.58 13.6452C128.07 13.6446 128.065 13.64 128.063 13.1545C128.06 12.3487 128.06 11.5428 128.063 10.737C128.066 10.2413 128.07 10.2354 128.575 10.2348C130.445 10.2331 132.314 10.2334 134.185 10.2336H134.185H134.185H134.185L136.166 10.2338H137.97ZM-14.5138 13.4402L-14.8028 12.559C-14.9957 12.6964 -15.1823 12.8287 -15.3643 12.9578C-15.7898 13.2595 -16.1898 13.5432 -16.5864 13.8313C-16.9812 14.118 -16.9802 14.1251 -16.8286 14.5963C-16.4933 15.6385 -16.156 16.6804 -15.8157 17.7211L-15.8116 17.7338C-15.5575 18.5102 -15.5557 18.516 -16.2361 19.0167L-16.4525 19.176C-17.1979 19.7245 -17.9433 20.273 -18.7025 20.8021C-18.9749 20.9916 -19.0313 21.1728 -18.9036 21.4737C-18.8332 21.639 -18.7819 21.8123 -18.7306 21.9856L-18.7306 21.9856C-18.682 22.1498 -18.6334 22.314 -18.5686 22.4715C-18.5249 22.5779 -18.5011 22.7052 -18.4775 22.832C-18.427 23.1023 -18.377 23.37 -18.1361 23.4272C-17.9054 23.4821 -17.6793 23.2847 -17.4574 23.091L-17.4574 23.091C-17.372 23.0164 -17.2871 22.9424 -17.2029 22.8835C-16.9056 22.676 -16.6108 22.4646 -16.3161 22.2531L-16.3159 22.253L-16.3157 22.2529L-16.3157 22.2529L-16.3157 22.2528C-15.9373 21.9814 -15.5588 21.7099 -15.1749 21.4467C-14.7711 21.1703 -14.6876 21.2113 -14.5229 21.6756C-14.5156 21.6962 -14.5108 21.7176 -14.5061 21.7391L-14.5061 21.7392C-14.5019 21.7581 -14.4977 21.7771 -14.4918 21.7956L-13.5538 24.7327L-13.5537 24.7331C-12.4714 28.1227 -11.389 31.5125 -10.3038 34.9016C-10.1185 35.4804 -9.92776 36.0574 -9.73704 36.6343C-9.58414 37.0969 -9.43124 37.5594 -9.28116 38.0229C-9.12396 38.5087 -9.15196 38.5465 -9.67886 38.5524C-9.99806 38.5559 -10.3174 38.5549 -10.6366 38.5538H-10.6374C-10.9818 38.5528 -11.3262 38.5517 -11.6704 38.5562C-11.8199 38.5582 -11.9696 38.5556 -12.1209 38.553H-12.1209C-12.4888 38.5468 -12.866 38.5403 -13.2724 38.5986L-13.0552 39.2449L-13.0552 39.245L-13.0552 39.2451C-12.8861 39.7487 -12.7208 40.2411 -12.5541 40.733L-12.5538 40.7339C-12.3841 41.2355 -12.3822 41.2411 -11.8672 41.2433C-11.2516 41.2461 -10.636 41.2456 -10.0204 41.2451H-10.0154C-9.61599 41.2448 -9.21662 41.2445 -8.81726 41.2451C-8.23966 41.2461 -8.23716 41.2473 -8.05216 41.8146C-7.91456 42.2369 -7.77833 42.6596 -7.64211 43.0823L-7.64159 43.084C-7.50553 43.5061 -7.36948 43.9283 -7.23206 44.3501C-7.22632 44.3677 -7.22079 44.3857 -7.21523 44.4037L-7.21517 44.4039C-7.16585 44.5641 -7.11426 44.7318 -6.89326 44.7332C-6.16716 44.7372 -5.44106 44.7356 -4.71486 44.7313C-4.56726 44.7304 -4.48256 44.6491 -4.51746 44.4934C-4.55356 44.3324 -4.59596 44.1723 -4.64636 44.0151C-4.73122 43.7509 -4.81771 43.4872 -4.90421 43.2233L-4.90426 43.2232L-4.90459 43.2222C-5.04965 42.7798 -5.19474 42.3372 -5.33236 41.8925C-5.47556 41.4285 -5.44786 41.3953 -4.98606 41.3571C-4.75876 41.3379 -4.53026 41.3314 -4.30236 41.3295C1.15424 41.2864 6.61044 41.2501 12.0663 41.381C12.1049 41.3819 12.1439 41.3804 12.1835 41.3788H12.1835H12.1836C12.3304 41.3731 12.4841 41.367 12.6442 41.4843C12.5226 42.0563 12.3357 42.6158 12.1454 43.1854L12.1454 43.1855C11.9766 43.6908 11.8051 44.2042 11.674 44.7415C11.9072 44.7415 12.1324 44.7393 12.3521 44.7372C12.8577 44.7324 13.3338 44.7278 13.8084 44.7505C14.1883 44.7688 14.3761 44.6382 14.4857 44.2837C14.725 43.5091 14.987 42.7411 15.2488 41.9737L15.2489 41.9734L15.2638 41.9297C15.4429 41.4046 15.4503 41.4046 15.9913 41.4043H15.9971L16.714 41.4039H16.714H16.7141C17.4089 41.4035 18.1036 41.4031 18.7982 41.4043L18.8045 41.4043C19.0155 41.4049 19.2157 41.4055 19.3039 41.153L19.3313 41.0743C19.6047 40.2888 19.8789 39.5011 20.0976 38.6132H20.0709C19.3603 38.6132 18.7101 38.6132 18.06 38.6129C17.9147 38.6129 17.7694 38.6127 17.6241 38.6124C17.3336 38.6119 17.0432 38.6114 16.7528 38.6129C16.5392 38.6138 16.4455 38.5236 16.5009 38.3083C16.5221 38.2255 16.5441 38.1432 16.5661 38.0609L16.5661 38.0607L16.5959 37.9488C16.7963 37.1888 17.0544 36.4473 17.3126 35.7058C17.4212 35.394 17.5298 35.0821 17.634 34.7688C19.0299 30.5742 20.4276 26.3805 21.8285 22.1874C21.8444 22.1402 21.8592 22.0924 21.8741 22.0442C21.9437 21.8198 22.0159 21.5868 22.2037 21.3657C22.9809 21.9139 23.7493 22.4562 24.5293 23.0067L24.573 23.0375L24.5775 23.0407L25.1475 23.443C25.3502 23.0033 25.481 22.5707 25.6081 22.1502L25.6082 22.1501C25.6938 21.867 25.7777 21.5893 25.8808 21.3186C26.0056 20.9904 25.8976 20.8397 25.6475 20.6638C25.2401 20.3765 24.8375 20.0824 24.435 19.7882L24.4349 19.7881L24.4348 19.7881C24.0513 19.5078 23.6677 19.2275 23.2798 18.9531C23.0245 18.7726 22.9308 18.6029 23.0634 18.2859C23.1964 17.9675 23.3003 17.6373 23.4043 17.3072L23.4044 17.3069L23.4045 17.3066C23.4495 17.1635 23.4946 17.0204 23.542 16.8783C23.5796 16.7656 23.6172 16.653 23.6549 16.5403C23.6842 16.453 23.7134 16.3657 23.7427 16.2784C23.8988 15.8124 24.055 15.3464 24.2068 14.8788L24.2202 14.8386C24.2743 14.6778 24.3317 14.5071 24.1455 14.3729C23.7012 14.0522 23.2568 13.7319 22.8051 13.4064L22.172 12.9501C22.147 12.999 22.1249 13.0393 22.1056 13.0742C22.0714 13.1363 22.0463 13.1819 22.0303 13.2305C21.9122 13.5911 21.7956 13.9523 21.679 14.3134L21.6788 14.3141L21.6786 14.3148L21.6785 14.3149L21.6785 14.315C21.4779 14.9364 21.2773 15.5578 21.0688 16.1766C20.7509 17.1199 20.7431 17.1165 19.9444 16.5315L17.9073 15.0391L17.9059 15.0381C15.5443 13.3079 13.1826 11.5776 10.8192 9.84979C10.1055 9.32786 9.38991 8.80839 8.67436 8.28893L8.67338 8.28821L8.67236 8.28747L8.67183 8.28709C7.91309 7.73627 7.15436 7.18545 6.39774 6.63169C5.96304 6.3137 5.96494 6.2318 6.39494 5.91299C6.74468 5.65334 7.0981 5.39859 7.45158 5.14381L7.45166 5.14375L7.45214 5.1434L7.45249 5.14314L7.45255 5.1431C7.68697 4.97413 7.92143 4.80514 8.15484 4.63469C8.4434 4.42404 8.72995 4.21052 9.03146 3.98583L9.03245 3.98509L9.03323 3.98452C9.16228 3.88835 9.29407 3.79014 9.42994 3.68924C9.23737 3.54876 9.04951 3.41306 8.86543 3.28009L8.86494 3.27974C8.43541 2.96947 8.02644 2.67405 7.62615 2.36755C7.33994 2.14855 7.12044 2.205 6.85264 2.40539C6.11742 2.95583 5.37124 3.49174 4.62514 4.02759L4.28914 4.26897C3.73524 4.66755 3.68694 4.6629 3.15074 4.27332C2.19514 3.57975 1.23864 2.88742 0.281743 2.1957C0.261456 2.18101 0.241532 2.16568 0.221734 2.15045C0.082631 2.04344 -0.0503608 1.94112 -0.259757 2.09861C-0.703906 2.43195 -1.15557 2.75517 -1.6165 3.08502L-1.61662 3.08511L-1.61674 3.08519L-1.61685 3.08527C-1.8069 3.22128 -1.99853 3.35842 -2.19186 3.49786C-1.9309 3.7779 -1.63915 3.98272 -1.35269 4.18383C-1.25111 4.25515 -1.1502 4.326 -1.05156 4.39956C-0.778113 4.6032 -0.502982 4.80457 -0.227862 5.00593L-0.227691 5.00606L-0.227519 5.00619C0.215924 5.33075 0.659341 5.6553 1.09564 5.98929C1.39704 6.21999 1.39084 6.32829 1.09725 6.56499C0.934396 6.69618 0.760682 6.81406 0.586869 6.93201L0.586835 6.93203C0.486142 7.00036 0.385415 7.06872 0.286744 7.13969C-2.4617 9.11883 -5.20978 11.0983 -7.95792 13.0778L-7.96954 13.0862L-10.5043 14.912C-10.7407 15.0824 -10.9765 15.2536 -11.2124 15.4248L-11.2132 15.4254C-11.765 15.8261 -12.3168 16.2267 -12.8764 16.6162C-13.2397 16.8693 -13.3574 16.8206 -13.5141 16.417C-13.6258 16.1283 -13.7258 15.8345 -13.8233 15.5402C-14.0507 14.853 -14.2761 14.1652 -14.5136 13.4408L-14.5138 13.4402ZM9.02204 31.117H3.67014L-2.24161 31.1171L-8.15366 31.1173C-8.80476 31.117 -8.80546 31.1161 -9.02026 30.4963C-9.36496 29.5003 -9.66916 28.4922 -9.95876 27.4792C-10.06 27.1262 -9.98896 26.9292 -9.68166 26.7102C-6.57583 24.4976 -3.47605 22.277 -0.376182 20.0562L-0.36943 20.0514C0.821599 19.1981 2.01264 18.3449 3.20404 17.4921C3.70654 17.1323 3.74704 17.1357 4.23594 17.4928C8.46624 20.5841 12.6959 23.6763 16.9253 26.7691C17.4238 27.1339 17.4254 27.137 17.2382 27.7251C16.9371 28.6693 16.6351 29.6135 16.3259 30.5553C16.1419 31.1164 16.1353 31.1164 15.5562 31.1167C14.0016 31.1173 12.447 31.1172 10.8924 31.1171L9.02204 31.117ZM-5.98656 15.2216C-6.00206 15.1617 -6.01646 15.1015 -6.01826 15.0938C-6.06376 14.8742 -5.97596 14.7693 -5.84986 14.6797L-5.39011 14.3532L-5.39003 14.3531L-5.38996 14.3531C-4.58215 13.7795 -3.77428 13.2058 -2.97085 12.6263C-2.80736 12.5084 -2.68376 12.5199 -2.52806 12.6331C-2.02862 12.9974 -1.52793 13.3599 -1.02724 13.7225L-1.02676 13.7228L-1.02521 13.7239L-1.0247 13.7243C-0.303565 14.2464 0.417569 14.7686 1.13494 15.296C1.41264 15.5001 1.40834 15.6729 1.12904 15.8854C0.776128 16.1539 0.414678 16.4111 0.0531663 16.6683C-0.0909453 16.7708 -0.235065 16.8733 -0.378657 16.9766L-1.14213 17.5259C-2.07939 18.2002 -3.0165 18.8745 -3.95516 19.5471C-4.39106 19.8595 -4.42186 19.8598 -4.61186 19.3908C-5.16236 18.0319 -5.61196 16.6385 -5.98656 15.2216ZM13.2078 14.7593C13.3314 14.8479 13.4611 14.9409 13.4289 15.1586C13.4162 15.2006 13.4029 15.2456 13.389 15.2926L13.3889 15.2931C13.3599 15.3912 13.3284 15.498 13.2941 15.604C12.8933 16.8404 12.4926 18.0765 12.0903 19.3123C11.9016 19.8911 11.7879 19.9293 11.2723 19.5552C10.3688 18.8995 9.46786 18.2401 8.56705 17.5807C8.24951 17.3483 7.93198 17.1158 7.61434 16.8836C7.49314 16.795 7.37147 16.707 7.24979 16.6191L7.24938 16.6188L7.24897 16.6185L7.24882 16.6184L7.24877 16.6183C6.91813 16.3793 6.58744 16.1401 6.26605 15.8891C5.97114 15.659 5.96744 15.5383 6.26984 15.3143C6.95828 14.8041 7.65125 14.3001 8.34419 13.7961L8.34521 13.7954L8.34529 13.7953C8.8062 13.4601 9.2671 13.1249 9.72664 12.7879C10.0028 12.5853 10.2529 12.6098 10.5203 12.8059C11.0383 13.1857 11.5584 13.5626 12.0785 13.9395L12.0786 13.9396L12.0787 13.9397C12.4462 14.206 12.8137 14.4722 13.1804 14.7396L13.2078 14.7593ZM0.342744 34.9483L0.341462 34.9445L0.339528 34.9387C0.208047 34.5453 0.0751809 34.1478 -0.0588599 33.7443C-0.00302037 33.7396 0.0450944 33.7351 0.087716 33.731L0.110883 33.7287L0.11155 33.7287C0.204488 33.7196 0.270879 33.7132 0.337441 33.7132C2.45174 33.712 4.56624 33.7108 6.68084 33.7136C7.19174 33.7142 7.22194 33.7408 7.10024 34.2412C6.77824 35.566 6.36294 36.8622 5.87934 38.1374C5.75724 38.4588 5.57074 38.5673 5.22734 38.5605C4.14964 38.5397 3.07134 38.545 1.99365 38.5577C1.68854 38.5611 1.50604 38.4954 1.40174 38.1678C1.0625 37.1019 0.708028 36.0413 0.342858 34.9487L0.342744 34.9483ZM-10.39 24.16C-10.5494 24.2757 -10.7072 24.3902 -10.8749 24.439C-11.0051 24.3803 -11.0294 24.2915 -11.0517 24.2098L-11.0517 24.2097C-11.0562 24.1934 -11.0605 24.1774 -11.0657 24.162C-11.2228 23.6882 -11.3788 23.214 -11.5348 22.7397L-11.5348 22.7396L-11.5349 22.7395L-11.5349 22.7395L-11.5349 22.7394C-11.8425 21.8042 -12.1502 20.8689 -12.4669 19.9367C-12.5712 19.6302 -12.5043 19.4485 -12.2421 19.2639C-11.5581 18.7834 -10.8791 18.2957 -10.2001 17.808L-10.1999 17.8078C-9.73769 17.4758 -9.27546 17.1438 -8.81166 16.8141C-8.39476 16.5175 -8.28796 16.5498 -8.11826 17.0495C-7.68106 18.3374 -7.25256 19.6284 -6.83376 20.9228C-6.67126 21.425 -6.72916 21.5732 -7.13836 21.8636C-8.18296 22.6055 -9.22946 23.345 -10.2789 24.0802C-10.3161 24.1063 -10.3531 24.1332 -10.39 24.16ZM0.425534 11.6521L-0.581657 10.9258C-0.235644 10.6734 0.10098 10.4273 0.431088 10.186L0.433114 10.1845C1.26135 9.57895 2.04862 9.00336 2.84034 8.4341C2.92288 8.37476 3.003 8.30075 3.08331 8.22655C3.27747 8.04719 3.47282 7.86673 3.70654 7.8898C3.91425 7.91035 4.10938 8.07567 4.30224 8.23906C4.37678 8.30222 4.45098 8.36508 4.52544 8.4192C5.48044 9.11309 6.43514 9.80729 7.38394 10.5093C7.88334 10.8787 7.88834 11.0164 7.38764 11.3837C6.63532 11.9356 5.8781 12.4806 5.12087 13.0257L5.12009 13.0262L5.11931 13.0268C4.75097 13.2919 4.38263 13.5571 4.01484 13.823C3.85854 13.9359 3.71654 14.0317 3.51605 13.8859C2.49978 13.1475 1.48079 12.4129 0.425534 11.6521ZM15.225 17.8787C15.3551 17.4784 15.4858 17.0762 15.6178 16.6717C15.9071 16.7397 16.0931 16.8794 16.2692 17.0117L16.2694 17.0118C16.3091 17.0417 16.3484 17.0712 16.3882 17.0994C17.4363 17.8383 18.4788 18.5849 19.5184 19.3356C19.9114 19.6194 19.9382 19.7031 19.7856 20.1737C19.3724 21.4489 18.9552 22.7231 18.5292 23.9942C18.3386 24.5622 18.2328 24.592 17.7511 24.248C16.6239 23.4418 15.4992 22.6319 14.3751 21.8217C14.3563 21.8082 14.3373 21.795 14.3185 21.782C14.1573 21.6707 14.008 21.5676 14.103 21.2866C14.4841 20.159 14.8519 19.027 15.2247 17.8798L15.2248 17.8793L15.225 17.8787ZM-1.22799 38.4024C-1.21849 38.4438 -1.20728 38.4926 -1.19266 38.553C-1.58271 38.553 -1.96694 38.5535 -2.34694 38.5541H-2.35028C-3.35631 38.5555 -4.33267 38.5569 -5.30866 38.5481C-5.41235 38.5472 -5.52087 38.5586 -5.62978 38.57C-5.90551 38.5989 -6.18384 38.6281 -6.39316 38.4594C-6.57872 38.3104 -6.63297 38.0587 -6.68703 37.8079C-6.71008 37.701 -6.7331 37.5942 -6.76626 37.4956C-7.10846 36.4782 -7.43666 35.4562 -7.75826 34.4319C-7.77482 34.3791 -7.79592 34.3268 -7.81711 34.2743L-7.81712 34.2742L-7.81716 34.2741C-7.8804 34.1173 -7.94442 33.9586 -7.89126 33.7799C-7.79821 33.7109 -7.69488 33.714 -7.59302 33.7172L-7.59283 33.7172C-7.57171 33.7178 -7.55065 33.7185 -7.52976 33.7185C-7.11837 33.7182 -6.70699 33.7187 -6.29561 33.7192C-5.25563 33.7203 -4.2157 33.7215 -3.17576 33.7111C-2.86376 33.7077 -2.68596 33.7809 -2.58696 34.1013C-2.28375 35.0824 -1.96921 36.06 -1.65464 37.0377L-1.65456 37.038L-1.65448 37.0383C-1.52653 37.436 -1.39857 37.8337 -1.27136 38.2317C-1.25613 38.2799 -1.24477 38.3294 -1.22806 38.4021L-1.228 38.4024L-1.22799 38.4024ZM11.7296 38.5522C11.5261 38.5524 11.3226 38.5527 11.1191 38.5527C10.8896 38.5526 10.6601 38.5528 10.4306 38.5531C9.99621 38.5535 9.56181 38.5539 9.12724 38.5521C8.48214 38.5493 8.45065 38.5084 8.65025 37.8719C8.79061 37.4234 8.93998 36.9779 9.08933 36.5324L9.08945 36.532L9.17304 36.2825C9.25485 36.0378 9.33803 35.7935 9.42121 35.5491C9.58442 35.0698 9.74763 34.5904 9.90044 34.1078C9.98764 33.8314 10.1236 33.7086 10.4307 33.7117C11.2591 33.7196 12.0873 33.7188 12.9156 33.7181H12.9167C13.5196 33.7176 14.1225 33.717 14.7254 33.7198C15.1287 33.721 15.2227 33.8268 15.1025 34.2058C14.8603 34.9688 14.6099 35.7295 14.3595 36.4902L14.359 36.4918C14.1638 37.0847 13.9686 37.6776 13.7773 38.2717C13.6948 38.5282 13.5201 38.5558 13.2975 38.5546C12.7749 38.5508 12.2522 38.5515 11.7296 38.5522ZM8.83203 29.165C9.35763 27.5595 9.84933 26.0579 10.3584 24.5039C10.9489 24.8382 11.454 25.2253 11.952 25.607L11.9522 25.6071C12.0912 25.7137 12.2297 25.8198 12.3693 25.9242C12.5309 26.0448 12.5265 26.186 12.4661 26.3622C12.184 27.1826 11.9087 28.0055 11.6388 28.83C11.5659 29.0533 11.4501 29.1724 11.1954 29.1687C10.668 29.1613 10.1404 29.1625 9.56634 29.1639H9.56566C9.33 29.1644 9.08653 29.165 8.83203 29.165ZM-2.74686 29.0786C-2.36816 29.0884 -1.97935 29.0984 -1.55854 29.0148C-1.89485 27.9712 -2.22401 26.9507 -2.54712 25.9488C-2.68977 25.5066 -2.83124 25.0679 -2.97164 24.6326C-3.12143 24.6045 -3.18588 24.6508 -3.24536 24.6935C-3.25251 24.6986 -3.25959 24.7037 -3.26674 24.7086C-3.43592 24.8244 -3.60478 24.9408 -3.77367 25.0572C-4.16651 25.3279 -4.5595 25.5988 -4.95694 25.8628C-5.14403 25.9874 -5.18924 26.127 -5.11914 26.3339C-5.04121 26.5643 -4.96657 26.7958 -4.89194 27.0274C-4.78319 27.3649 -4.67444 27.7023 -4.55554 28.0359C-4.51897 28.1384 -4.49555 28.2512 -4.47213 28.3639C-4.42082 28.611 -4.36959 28.8577 -4.18034 28.9947C-3.96671 29.1494 -3.68722 29.1215 -3.41015 29.0939C-3.30112 29.083 -3.19246 29.0721 -3.08834 29.0725C-2.97503 29.0728 -2.86141 29.0757 -2.74686 29.0786Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 0,
            transform: "translateY(-100%) translateZ(0px)",
          }}
        >
          <svg
            width="219"
            height="61"
            viewBox="0 0 219 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 219,
                "--height": 61,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.5332 -8H41.5902V12.229L6.5332 -8ZM-1.80516 29.675L-30.2852 13.245L3.92984 -6.49902V15.053C3.32484 15.368 2.90484 15.995 2.90484 16.727C2.90484 17.237 3.10984 17.698 3.44084 18.038C3.73384 18.312 3.92684 18.694 3.92684 19.129C3.92684 19.634 3.67684 20.088 3.30484 20.365C0.378844 21.041 -1.80116 23.654 -1.80516 26.779H-2.31916C-2.75716 26.779 -3.10816 27.131 -3.10816 27.57C-3.10816 28.006 -2.75716 28.361 -2.31916 28.361H-1.80516V29.675ZM132.91 23.5779C130.802 26.9569 128.14 28.5869 123.286 28.5869C117.121 28.5869 112.867 24.2129 112.867 16.4189C112.867 8.62494 117.241 4.21094 123.962 4.21094C128.414 4.21094 131.398 6.19994 133.03 9.93694L129.014 11.9259C128.14 9.30094 126.388 7.90994 123.763 7.90994C119.668 7.90994 117.282 11.1689 117.282 16.4589C117.282 21.7079 119.43 24.8109 123.683 24.8109C126.308 24.8109 128.099 23.7359 129.529 21.2709L132.91 23.5779ZM69.9992 15.3065L74.0132 22.5035H76.4782L80.4972 15.3065C81.8082 12.9595 82.2422 11.4105 82.2422 11.4105H82.4042C82.4042 11.4105 82.2042 12.8015 82.2042 15.5445V28.1105H86.4582V4.68945H81.9272L76.7592 14.5505C75.6842 16.4995 75.4042 17.5725 75.4042 17.5725H75.2462C75.2462 17.5725 74.9272 16.4995 73.8952 14.5505L68.6842 4.68945H64.0332V28.1105H68.2872V15.5445C68.2872 12.8015 68.0492 11.4105 68.0492 11.4105H68.2092C68.2092 11.4105 68.6842 12.9595 69.9992 15.3065ZM103.839 18.6865H96.9612L98.5111 14.2725C99.7851 10.5745 100.339 7.98945 100.339 7.98945H100.5C100.5 7.98945 101.016 10.6145 102.328 14.3115L103.839 18.6865ZM95.7672 22.2255H105.112L107.182 28.1105H111.752L103.243 4.68945H97.7952L89.2852 28.1105H93.6992L95.7672 22.2255ZM145.519 24.9289C141.344 24.9289 139.235 21.7079 139.235 16.4589C139.235 11.1689 141.383 7.94894 145.519 7.94894C149.693 7.94894 151.842 11.1689 151.842 16.4589C151.842 21.7079 149.693 24.9289 145.519 24.9289ZM143.013 28.3489C144.207 31.7689 147.068 34.3139 152.517 34.2339L153.749 30.4969C151.363 30.6949 148.939 30.0589 147.349 28.4689C152.875 27.7509 156.254 23.4989 156.254 16.4189C156.254 8.58594 152.121 4.21094 145.519 4.21094C138.918 4.21094 134.781 8.58594 134.781 16.4189C134.781 23.1799 137.885 27.3949 143.013 28.3489ZM178.171 4.68945V20.3965C178.171 26.5595 173.716 28.5875 168.904 28.5875C164.131 28.5875 159.68 26.5595 159.68 20.3965V4.68945H163.934V19.2435C163.934 23.1805 165.524 25.0885 168.904 25.0885C172.325 25.0885 173.916 23.1805 173.916 19.2825V4.68945H178.171ZM194.437 18.6865H187.557L189.105 14.2725C190.38 10.5745 190.936 7.98945 190.936 7.98945H191.095C191.095 7.98945 191.611 10.6145 192.925 14.3115L194.437 18.6865ZM186.362 22.2255H195.707L197.776 28.1105H202.35L193.838 4.68945H188.392L179.881 28.1105H184.295L186.362 22.2255ZM209.428 15.5055H213.445C216.109 15.5055 217.42 14.3915 217.42 11.8865C217.42 9.58045 216.148 8.26845 213.445 8.26845H209.428V15.5055ZM218.297 28.1105C217.659 27.5135 217.38 26.7975 217.183 25.8445L216.267 21.9865C215.632 19.4825 214.4 19.0055 212.29 19.0055H209.428V28.1105H205.172V4.68945H213.642C218.972 4.68945 221.835 6.83645 221.835 11.5295C221.835 15.1875 219.488 17.1355 216.506 17.3745V17.4545C218.693 17.7715 219.887 18.7255 220.522 21.1125L221.715 25.6445C221.955 26.5595 222.311 27.3545 222.948 28.1105H218.297ZM230.941 28.1105H226.688V4.68945H230.941V28.1105ZM251.463 28.1105H236.59V4.68945H251.463V8.38645H240.846V14.5505H250.23V18.1685H240.846V24.4125H251.463V28.1105ZM76.7314 36.2277H74.6454V34.8457H80.9034V36.2277H78.8194V47.1967C78.8194 49.1317 78.7124 50.5437 78.5004 51.4257C78.2894 52.3097 77.8564 53.1607 77.1954 53.9777C75.9844 55.4807 74.1104 56.2347 71.5714 56.2347C68.9694 56.2347 67.0604 55.5697 65.8504 54.2397C64.6374 52.9097 64.0324 50.8087 64.0324 47.9427V36.2277H61.9434V34.8457H68.8934V36.2277H66.9914V47.3437C66.9914 49.1517 67.0784 50.4697 67.2504 51.2957C67.4264 52.1237 67.7574 52.8047 68.2454 53.3417C69.1574 54.3497 70.3614 54.8517 71.8544 54.8517C73.2944 54.8517 74.4774 54.3807 75.4064 53.4397C76.2894 52.5587 76.7314 50.7317 76.7314 47.9647V36.2277ZM96.9086 44.9179C96.9086 43.4019 96.5366 42.2119 95.7926 41.3459C95.0456 40.4809 94.0146 40.0479 92.7046 40.0479C91.5646 40.0479 90.5386 40.3158 89.6186 40.8559C88.6996 41.3938 87.8876 42.2009 87.1846 43.2779V40.4019H82.3066V41.7959H84.3936V54.3169H82.3066V55.7119H89.2686V54.3169H87.1846V44.5759C87.9326 43.7619 88.6856 43.1519 89.4426 42.7469C90.2016 42.3379 90.9666 42.1339 91.7326 42.1339C92.6236 42.1339 93.2416 42.3739 93.5936 42.8469C93.9436 43.3239 94.1186 44.1599 94.1186 45.3539V54.3169H92.0336V55.7119H98.9966V54.3169H96.9086V44.9179ZM100.688 40.4023H105.57V54.3173H107.655V55.7123H100.688V54.3173H102.773V41.7963H100.688V40.4023ZM102.773 37.6247H105.569V34.8457H102.773V37.6247ZM121.128 41.7963H119.042V40.4023H123.877V41.7963H122.656L116.375 55.8813H114.979L109.133 41.7963H107.904V40.4023H114.234V41.7963H112.134L116.476 52.2293L121.128 41.7963ZM133.368 46.3078H127.023C127.128 44.6838 127.467 43.4639 128.037 42.6499C128.612 41.8359 129.425 41.4309 130.479 41.4309C132.403 41.4309 133.368 42.9399 133.368 45.9559V46.3078ZM130.632 40.0479C128.657 40.0479 127.041 40.7808 125.784 42.2429C124.523 43.7059 123.893 45.5899 123.893 47.8939C123.893 50.3019 124.595 52.2659 125.993 53.7859C127.394 55.3049 129.214 56.0639 131.449 56.0639C132.925 56.0639 134.549 55.7149 136.313 55.0189V52.9338C134.853 53.7439 133.368 54.1479 131.852 54.1479C130.282 54.1479 129.053 53.5779 128.17 52.4369C127.282 51.2959 126.839 49.7189 126.839 47.7049H136.313V47.1819C136.313 44.8889 135.822 43.1269 134.842 41.8959C133.859 40.6649 132.455 40.0479 130.632 40.0479ZM143.928 40.4019V43.2779C145.177 41.1259 146.844 40.0479 148.917 40.0479C149.228 40.0479 149.532 40.1078 149.833 40.2239V44.0518H148.1V42.4879H147.649C146.456 42.4879 145.214 43.1819 143.928 44.5759V54.3169H146.014V55.7119H139.051V54.3169H141.139V41.7959H139.051V40.4019H143.928ZM158.948 47.2029L157.651 46.6669C156.365 46.1399 155.495 45.6749 155.043 45.2738C154.592 44.8759 154.369 44.3749 154.369 43.7749C154.369 43.1139 154.616 42.5589 155.114 42.1079C155.611 41.6579 156.226 41.4309 156.96 41.4309C157.44 41.4309 157.926 41.5169 158.422 41.6929C158.915 41.8669 159.419 42.1288 159.934 42.4799V44.2379H161.671V40.9229C160.88 40.6279 160.101 40.4068 159.323 40.2649C158.547 40.1208 157.778 40.0479 157.017 40.0479C155.495 40.0479 154.236 40.4549 153.245 41.2629C152.255 42.0739 151.76 43.0998 151.76 44.3428C151.76 46.3409 153.214 47.9019 156.114 49.0339L157.539 49.5829C159.166 50.2149 159.977 51.0858 159.977 52.1959C159.977 52.9309 159.698 53.5299 159.142 53.9899C158.58 54.4509 157.855 54.6809 156.96 54.6809C156.406 54.6809 155.833 54.5649 155.24 54.3299C154.646 54.0939 154.038 53.7439 153.408 53.2808V51.5409H151.674V54.9369C152.491 55.3139 153.334 55.5949 154.205 55.7819C155.073 55.9699 155.963 56.0639 156.875 56.0639C158.623 56.0639 160.04 55.6329 161.131 54.7738C162.213 53.9128 162.755 52.7999 162.755 51.4359C162.755 50.4479 162.476 49.6399 161.916 49.0159C161.356 48.3889 160.368 47.7868 158.948 47.2029ZM169.734 37.6247H166.941V34.8457H169.734V37.6247ZM169.734 40.4023H164.857V41.7963H166.941V54.3173H164.857V55.7123H171.82V54.3173H169.734V40.4023ZM182.093 52.2956H183.616C183.464 54.2466 182.406 55.1766 181.549 55.6176V55.6246C181.514 55.6435 181.479 55.6579 181.444 55.6724L181.426 55.6796C181.346 55.7176 181.275 55.7476 181.201 55.7776C181.185 55.784 181.168 55.7907 181.151 55.7974L181.104 55.8157L181.081 55.8246C181.068 55.8294 181.055 55.8341 181.042 55.8386C180.916 55.8806 180.806 55.9156 180.714 55.9416L180.676 55.9498L180.676 55.9498L180.645 55.9563C180.629 55.9596 180.613 55.963 180.598 55.9666C180.491 55.9916 180.421 55.9986 180.421 55.9986C180.205 56.0386 179.986 56.0636 179.763 56.0636C178.422 56.0636 177.298 55.6506 176.556 54.8226C175.814 53.9976 175.443 52.6986 175.443 50.9316V41.7476H173.357V40.4016H175.443V37.6246L178.234 36.9336V40.4016H182.141V41.7476H178.234V51.2986C178.234 52.3616 178.384 53.1606 178.684 53.6966C178.987 54.2306 179.438 54.4986 180.035 54.4986C180.24 54.4986 180.462 54.4546 180.703 54.3736C182.078 53.8326 182.093 52.2956 182.093 52.2956ZM195.026 40.4688V41.8627H197.1L192.462 52.2807L188.134 41.8627H190.232V40.4688H183.905V41.8627H185.119L190.974 55.9787C190.747 56.4977 190.499 57.0078 190.212 57.4818C189.687 58.3428 189.142 59.1147 188.211 59.5687C187.718 59.8137 187.146 59.9657 186.593 59.9617C185.981 59.9617 185.385 59.7197 184.85 59.4457V58.1598H183.412V60.8298C183.647 60.9878 184.19 61.1157 184.736 61.2097C185.497 61.3397 186.275 61.3997 187.042 61.3187C188.214 61.1957 189.237 60.7157 190.058 59.8647C190.595 59.3134 191.169 58.3361 191.595 57.6127L191.673 57.4798L191.727 57.3877C191.85 57.1817 191.934 56.9787 191.996 56.7807L192.361 55.9487L198.642 41.8627H199.875V40.4688H195.026ZM4.79253 64.5322C5.49053 64.5322 6.06353 65.3282 6.06353 65.8052V69.1032H3.51953V65.8052C3.53553 65.3282 4.09153 64.5322 4.79253 64.5322ZM41.5916 14.2422L11.3926 31.6742V37.2942L41.5916 54.7212V14.2422ZM-32 54.7199L-1.806 37.2939V31.6769L-32 14.2539V54.7199ZM-32 -8V12.232L3.062 -8H-32ZM40.7282 56.2245L15.9482 70.5305L15.0742 54.4465H16.3882C16.7192 52.6315 17.4862 51.4655 18.6692 50.7765H19.9042V48.1585H17.3402L18.4232 43.3525L40.7282 56.2245ZM-6.36463 70.5311L-5.49063 54.4471H-6.80062C-7.13162 52.6321 -7.89763 51.4661 -9.08063 50.7771H-10.3156V48.1591H-7.73063L-8.79663 43.3301L-31.1406 56.2271L-6.36463 70.5311ZM21.0171 13.821L21.3021 17.639L18.4861 15.037L15.6711 17.639L15.9491 13.821L12.1641 13.245L15.3281 11.078L13.4191 7.75498L17.0811 8.87698L18.4861 5.31698L19.8891 8.87698L23.5531 7.75498L21.6481 11.078L24.8081 13.245L21.0171 13.821ZM6.68211 16.727C6.68211 17.233 6.45811 17.697 6.14911 18.038C5.85911 18.312 5.66211 18.694 5.66211 19.129C5.66211 19.634 5.91211 20.088 6.29211 20.365C9.20911 21.046 11.3901 23.66 11.3921 26.779H11.9081C12.3481 26.779 12.7001 27.131 12.7001 27.57C12.7001 28.006 12.3481 28.361 11.9081 28.361H11.3921V29.674L39.8671 13.237L5.66511 -6.49902V15.062C6.26611 15.376 6.68211 16 6.68211 16.727ZM11.3945 42.2169H16.4595L11.3945 39.2949V42.2169ZM-1.80219 39.2949V42.2169H-6.86719L-1.80219 39.2949ZM-4.11206 46.9662H-2.34106L-2.79406 43.4102H-4.78906L-4.11206 46.9662ZM-5.43069 46.9662H-6.77269L-7.55469 43.4102H-6.10369L-5.43069 46.9662ZM11.9316 46.9662H13.7056L14.3776 43.4102H12.3806L11.9316 46.9662ZM16.4135 46.9662H15.0195L15.6925 43.4102H17.1975L16.4135 46.9662ZM-0.0683594 28.3613V30.2323L4.79664 33.0393L9.66764 30.2303V28.3613H-0.0683594ZM-0.0683594 38.7513L4.79664 35.9453L9.66764 38.7553V40.6233H-0.0683594V38.7513ZM-0.0682201 32.6768L3.05978 34.4838L-0.0742188 36.2938L-0.0682201 32.6768ZM6.54102 34.4919L9.66801 32.6729V36.2959L6.54102 34.4919Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 0,
            transform: "translateY(-100%) translateZ(0px)",
          }}
        >
          <svg
            width="201"
            height="37"
            viewBox="0 0 201 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 201,
                "--height": 37,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M115.28 6.09665H106.064V0H115.28V6.09665ZM62.9551 36.4225H72.1687V0.00195312H62.9551V36.4225ZM18.8983 10.4722C20.1959 12.078 20.8446 14.5427 20.8446 17.865C20.8446 21.421 20.1575 24.0634 18.7878 25.7905C17.4166 27.5207 15.2631 28.3828 12.3243 28.3828H10.1708V8.06667H12.9853C15.6311 8.06667 17.5991 8.86802 18.8983 10.4722ZM25.9492 31.5093C29.2377 28.2355 30.882 23.5716 30.882 17.519C30.882 11.8943 29.319 7.59618 26.1946 4.61843C23.0687 1.6422 18.6328 0.15332 12.8871 0.15332H0.5V36.4221H12.0788C18.0377 36.4221 22.6607 34.7845 25.9492 31.5093ZM195.201 26.5107C192.276 26.5107 189.9 28.8602 189.9 31.756C189.9 34.6517 192.276 36.9996 195.201 36.9996C198.128 36.9996 200.501 34.6517 200.501 31.756C200.501 28.8602 198.128 26.5107 195.201 26.5107ZM86.031 28.1474C85.4189 26.9302 85.1122 25.159 85.1122 22.8369C85.1122 20.5117 85.4189 18.7649 86.031 17.5947C86.6445 16.4261 87.6553 15.8387 89.0694 15.8387C90.5158 15.8387 91.5358 16.4291 92.134 17.6084C92.7306 18.7846 93.0282 20.5269 93.0282 22.8369C93.0282 25.159 92.7353 26.9302 92.1463 28.1474C91.5573 29.3661 90.5464 29.9747 89.1169 29.9747C87.6721 29.9747 86.6445 29.3661 86.031 28.1474ZM98.8843 33.1862C101.234 30.7123 102.406 27.261 102.406 22.8369C102.406 20.0185 101.862 17.5537 100.769 15.4471C99.6789 13.3375 98.1266 11.7181 96.1158 10.5874C94.1065 9.45673 91.7874 8.89062 89.166 8.89062C84.9235 8.89062 81.6288 10.1124 79.2791 12.5559C76.9293 14.9994 75.7559 18.4264 75.7559 22.8369C75.7559 27.1502 76.9538 30.5711 79.3511 33.1027C81.7454 35.6342 84.9711 36.9 89.0234 36.9C93.249 36.9 96.5361 35.6615 98.8843 33.1862ZM106.064 36.4224H115.28V22.4837V9.36914H106.064V36.4224ZM133.95 29.5217C135.194 29.5217 136.675 29.209 138.404 28.5883V35.3952C137.162 35.9355 135.981 36.3226 134.858 36.5517C133.735 36.7839 132.417 36.8993 130.91 36.8993C127.816 36.8993 125.586 36.1298 124.216 34.5939C122.853 33.058 122.169 30.6994 122.169 27.5168V16.3647H118.941V9.37103H122.169V2.46241L131.454 0.864258V9.37103H137.333V16.3647H131.454V26.8945C131.454 28.646 132.287 29.5217 133.95 29.5217ZM159.732 28.5883C158.003 29.209 156.522 29.5217 155.278 29.5217C153.613 29.5217 152.781 28.646 152.781 26.8945V16.3647H158.663V9.37103H152.781V0.864258L143.496 2.35769V9.37103H140.268V16.3647H143.496V27.5168C143.496 30.6994 144.18 33.058 145.547 34.5939C146.914 36.1298 149.144 36.8993 152.238 36.8993C153.748 36.8993 155.061 36.7839 156.186 36.5517C157.308 36.3226 158.491 35.9355 159.732 35.3952V28.5883ZM171.359 19.5414C171.485 18.0601 171.913 16.9749 172.643 16.2813C173.376 15.5893 174.281 15.2432 175.364 15.2432C176.545 15.2432 177.483 15.6318 178.18 16.4149C178.881 17.1935 179.246 18.2362 179.275 19.5414H171.359ZM184.353 12.0803C182.163 9.95552 179.055 8.8916 175.035 8.8916C170.81 8.8916 167.558 10.1134 165.279 12.5569C163.001 15.0004 161.861 18.5063 161.861 23.0746C161.861 27.4988 163.093 30.9106 165.55 33.3055C168.009 35.7005 171.461 36.8995 175.908 36.8995C178.043 36.8995 179.881 36.7553 181.421 36.4684C182.951 36.1846 184.433 35.6716 185.87 34.931L184.455 28.8343C183.41 29.2563 182.416 29.5811 181.477 29.7951C180.122 30.1062 178.634 30.2625 177.014 30.2625C175.238 30.2625 173.836 29.833 172.808 28.974C171.781 28.1134 171.233 26.9266 171.17 25.4149H187.64V21.261C187.64 17.2648 186.545 14.2036 184.353 12.0803ZM44.3945 16.2813C43.6645 16.9749 43.2365 18.0601 43.1107 19.5414H51.0283C50.996 18.2362 50.6326 17.1935 49.9317 16.4149C49.2337 15.6318 48.295 15.2432 47.1171 15.2432C46.0326 15.2432 45.1261 15.5893 44.3945 16.2813ZM46.7873 8.8916C50.8089 8.8916 53.915 9.95552 56.1067 12.0803C58.297 14.2036 59.3923 17.2648 59.3923 21.261V25.4149H42.9221C42.9849 26.9266 43.531 28.1134 44.5602 28.974C45.5879 29.833 46.9913 30.2625 48.7659 30.2625C50.3857 30.2625 51.8719 30.1062 53.2309 29.7951C54.168 29.5811 55.1619 29.2563 56.2065 28.8343L57.6237 34.931C56.185 35.6716 54.7033 36.1846 53.1726 36.4684C51.6326 36.7553 49.7951 36.8995 47.66 36.8995C43.2134 36.8995 39.7608 35.7005 37.3037 33.3055C34.8434 30.9106 33.6133 27.4988 33.6133 23.0746C33.6133 18.5063 34.7544 15.0004 37.0321 12.5569C39.3099 10.1134 42.56 8.8916 46.7873 8.8916Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 0,
            transform: "translateY(-100%) translateZ(0px)",
          }}
        >
          <svg
            width="172"
            height="39"
            viewBox="0 0 172 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 172,
                "--height": 39,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.11694 8.50143L6.33294 9.11343C10.3896 20.1996 4.76672 32.4854 -6.27506 36.6614L-6.28206 36.6824L-6.89406 36.8984C-11.6021 38.5642 -16.7391 38.5642 -21.4471 36.8984L-22.0601 36.6824L-22.0671 36.6624C-33.1175 32.4928 -38.7448 20.1982 -34.6781 9.10943L-34.4611 8.49743L-33.8501 8.28243C-32.9224 7.955 -31.9735 7.69105 -31.0101 7.49243C-30.2826 -1.26381 -22.9635 -8 -14.1771 -8C-5.39064 -8 1.92843 -1.26381 2.65594 7.49243C3.6225 7.69138 4.57438 7.95599 5.50494 8.28443L6.11694 8.50143ZM-8.52804 34.5609L-8.52792 34.5609L-8.5278 34.5609L-8.52768 34.5608C-8.49018 34.5486 -8.45268 34.5364 -8.41506 34.5244L-8.41106 34.5284C-7.3861 31.3158 -7.22606 27.8897 -7.94706 24.5954C-11.9413 26.1839 -16.3919 26.1839 -20.3861 24.5954C-21.1068 27.8884 -20.9464 31.3132 -19.9211 34.5244L-19.8488 34.547L-19.7792 34.569L-19.7791 34.5691C-19.6745 34.6022 -19.5717 34.6347 -19.4661 34.6644C-18.9691 34.8097 -18.4659 34.9328 -17.9581 35.0334C-17.457 35.1371 -16.9515 35.2179 -16.4431 35.2754C-15.9394 35.338 -15.4333 35.378 -14.9261 35.3954C-14.421 35.4172 -13.9152 35.4172 -13.4101 35.3954C-12.9029 35.3773 -12.3968 35.3373 -11.8931 35.2754C-11.6231 35.2424 -11.3531 35.2084 -11.0841 35.1634C-10.3361 35.0448 -9.59658 34.8781 -8.87006 34.6644C-8.7538 34.6344 -8.64092 34.5977 -8.52804 34.5609ZM-19.6131 21.9784C-17.8905 22.697 -16.0425 23.0665 -14.1761 23.0654L-14.1771 23.0674C-12.3068 23.0688 -10.4549 22.6983 -8.72906 21.9774C-9.68286 19.4653 -11.1606 17.1851 -13.0641 15.2884C-13.4122 14.952 -13.7816 14.6383 -14.1701 14.3494C-14.56 14.6395 -14.9308 14.9545 -15.2801 15.2924C-17.1821 17.1887 -18.6591 19.4678 -19.6131 21.9784ZM-28.3151 9.84243C-28.0183 14.2379 -25.6949 18.2456 -22.0281 20.6874L-22.0271 20.6834C-20.9335 17.9417 -19.292 15.452 -17.2031 13.3664C-16.9581 13.1224 -16.7101 12.9024 -16.4581 12.6924C-19.4899 10.7676 -23.0088 9.74924 -26.6001 9.75738C-27.1751 9.75738 -27.7461 9.79143 -28.3151 9.84243ZM-11.8781 12.6944C-11.6227 12.9054 -11.3768 13.1277 -11.1411 13.3604H-11.1451C-9.05531 15.4461 -7.41314 17.9362 -6.31906 20.6784C-2.65654 18.2379 -0.335435 14.2345 -0.0370638 9.84343C-0.598064 9.79343 -1.16506 9.75939 -1.73706 9.75939C-5.32793 9.75198 -8.84624 10.7702 -11.8781 12.6944ZM-0.115063 7.10543C-1.02253 0.0281606 -7.04086 -5.27667 -14.1761 -5.28857C-21.3108 -5.27844 -27.3293 0.0263805 -28.2351 7.10343C-27.6921 7.06243 -27.1481 7.03843 -26.6011 7.03843C-22.1519 7.02818 -17.8085 8.39504 -14.1671 10.9514C-10.5264 8.39739 -6.18522 7.03135 -1.73806 7.04043C-1.19643 7.04154 -0.655045 7.06323 -0.115063 7.10543ZM-31.0091 10.2774C-31.4501 10.3824 -31.8881 10.5004 -32.3231 10.6374C-34.533 17.4195 -32.7392 24.868 -27.6841 29.9004C-26.3295 31.2479 -24.7723 32.3748 -23.0691 33.2404C-23.7709 29.9757 -23.7104 26.593 -22.8921 23.3554C-27.5399 20.5515 -30.5592 15.6869 -31.0091 10.2774ZM-5.45206 23.3494C-4.63337 26.5879 -4.57212 29.9715 -5.27306 33.2374L-5.27606 33.2394C-3.57615 32.3721 -2.02128 31.246 -0.667061 29.9014C4.38798 24.8695 6.18451 17.4228 3.97994 10.6394C3.54294 10.5014 3.10194 10.3824 2.65794 10.2764C2.20827 15.6828 -0.808114 20.5451 -5.45206 23.3494ZM31.6743 1.44336H25.8123L15.5723 28.6974H21.2443L23.4903 22.1884H33.9953L36.2403 28.6974H41.9123L31.6743 1.44336ZM29.8863 10.6544L32.3223 17.4684H25.1663L27.6013 10.6544L28.5913 7.34336H28.8963L29.8863 10.6544ZM51.1369 37.5279C49.9435 37.5469 48.7549 37.3733 47.6169 37.0139C46.6602 36.7078 45.7556 36.2584 44.9339 35.6809C44.2153 35.1754 43.5751 34.5669 43.0339 33.8749C42.563 33.2784 42.1915 32.6098 41.9339 31.8949L46.6909 29.9949C47.0075 30.9323 47.6225 31.7402 48.4419 32.2949C50.4834 33.6158 53.1725 33.3182 54.8759 31.5829C55.8451 30.3991 56.3341 28.8943 56.2459 27.3669V26.0699H55.9459C55.3507 26.8916 54.5602 27.5521 53.6459 27.9919C52.5923 28.4823 51.4395 28.7219 50.2779 28.6919C49.158 28.6913 48.0501 28.4609 47.0229 28.0149C45.9686 27.5625 45.0163 26.9024 44.2229 26.0739C40.5247 22.131 40.5247 15.9937 44.2229 12.0509C45.0161 11.2223 45.9685 10.5625 47.0229 10.1109C48.0498 9.66338 49.1577 9.43192 50.2779 9.43087C51.44 9.40301 52.5928 9.64466 53.6459 10.1369C54.5598 10.5768 55.3502 11.2369 55.9459 12.0579H56.2459V10.0439H60.9929V27.3649C61.0142 28.8119 60.7691 30.2505 60.2699 31.6089C59.8261 32.8038 59.139 33.8935 58.2519 34.8089C57.3737 35.6938 56.3169 36.3811 55.1519 36.8249C53.8691 37.309 52.5069 37.5482 51.1359 37.5299L51.1369 37.5279ZM51.3259 24.2059C51.9442 24.2048 52.5572 24.0913 53.1349 23.8709C53.7229 23.6509 54.2601 23.3138 54.7139 22.8799C55.1836 22.423 55.5576 21.877 55.8139 21.2739C56.103 20.5813 56.2453 19.8363 56.2319 19.0859C56.2433 18.3318 56.1011 17.5832 55.8139 16.8859C55.5608 16.2754 55.1866 15.7227 54.7139 15.2609C54.2602 14.8267 53.723 14.4892 53.1349 14.2689C52.5571 14.0486 51.9442 13.9348 51.3259 13.9329C50.7142 13.9335 50.108 14.0474 49.5379 14.2689C48.9536 14.4941 48.4225 14.838 47.9779 15.2789C47.5082 15.7446 47.1329 16.2967 46.8729 16.9049C46.3151 18.3092 46.3151 19.8736 46.8729 21.2779C47.1301 21.8817 47.5058 22.4278 47.9779 22.8839C48.4262 23.3155 48.9567 23.6525 49.5379 23.8749C50.1079 24.0965 50.7142 24.2101 51.3259 24.2099V24.2059ZM67.6566 10.0446H62.9746V28.6967H67.9656V19.5086C67.9582 18.7882 68.0673 18.0713 68.2886 17.3856C68.4861 16.768 68.7952 16.1918 69.2006 15.6856C69.5856 15.2068 70.0733 14.8206 70.6276 14.5556C71.2112 14.2834 71.8487 14.1467 72.4926 14.1556C72.947 14.1478 73.4007 14.1931 73.8446 14.2906C74.1931 14.3723 74.5313 14.493 74.8526 14.6507L76.1856 10.1976C75.8164 9.95341 75.4116 9.76787 74.9856 9.64765C74.4345 9.49561 73.8643 9.42387 73.2926 9.43465C72.743 9.43815 72.1972 9.52652 71.6746 9.69665C71.1412 9.86533 70.6291 10.0952 70.1486 10.3816C69.6855 10.6606 69.2578 10.9943 68.8746 11.3757C68.5037 11.7424 68.1953 12.1673 67.9616 12.6336H67.6566V10.0446ZM78.0117 10.0449H82.9987V28.6969H78.0117V10.0449ZM103.666 1.44336H86.3828V28.6974H91.5238V17.8114H102.447V12.9394H91.5238V6.31536H103.666V1.44336ZM117.636 26.2609H117.331C116.752 27.1964 115.938 27.9641 114.97 28.4879C113.929 29.0456 112.763 29.3272 111.582 29.3059C109.581 29.4587 107.625 28.6537 106.311 27.1359C105.084 25.4645 104.472 23.4206 104.578 21.3499V10.0449H109.566V20.7449C109.479 21.8181 109.798 22.8849 110.46 23.7339C111.149 24.4173 112.099 24.7708 113.067 24.7039C113.698 24.7173 114.321 24.5668 114.875 24.2669C115.398 23.9723 115.852 23.5701 116.207 23.0869C116.591 22.5592 116.875 21.9658 117.045 21.3359C117.24 20.6353 117.335 19.911 117.33 19.1839V10.0449H122.316V28.6969H117.635L117.636 26.2609ZM123.84 14.3089H127.114L127.106 22.6619C126.988 24.4962 127.635 26.2973 128.894 27.6369C129.43 28.1722 130.072 28.5888 130.78 28.8599C131.588 29.1677 132.447 29.3191 133.311 29.3059C134.058 29.3117 134.804 29.2414 135.537 29.0959C136.189 28.9642 136.822 28.7536 137.423 28.4689L136.015 24.0909C135.79 24.2412 135.547 24.3625 135.292 24.4519C134.959 24.553 134.612 24.5986 134.265 24.5869C133.688 24.6226 133.126 24.3906 132.743 23.9579C132.486 23.6913 132.308 23.3592 132.228 22.9979C132.137 22.5919 132.093 22.1769 132.097 21.7609V14.3089H136.665V10.0449H132.097V4.33594H127.114V10.0449H123.84V14.3089ZM152.285 26.2609H151.985C151.406 27.1962 150.592 27.9638 149.624 28.4879C148.584 29.0456 147.417 29.3273 146.236 29.3059C144.235 29.4584 142.279 28.6534 140.964 27.1359C139.739 25.464 139.127 23.4204 139.232 21.3499V10.0449H144.219V20.7449C144.134 21.8189 144.455 22.8858 145.119 23.7339C145.808 24.4178 146.758 24.7713 147.726 24.7039C148.356 24.7176 148.979 24.567 149.533 24.2669C150.056 23.9726 150.511 23.5704 150.866 23.0869C151.25 22.5595 151.534 21.9659 151.703 21.3359C151.898 20.6354 151.995 19.9111 151.99 19.1839V10.0449H156.977V28.6969H152.294L152.285 26.2609ZM163.627 10.0447H158.945V28.6967H163.932V19.5087C163.925 18.7882 164.034 18.0714 164.255 17.3857C164.453 16.7679 164.763 16.1917 165.168 15.6857C165.553 15.2067 166.041 14.8204 166.595 14.5557C167.179 14.2833 167.817 14.1466 168.461 14.1557C168.915 14.1479 169.369 14.1932 169.812 14.2907C170.161 14.3722 170.499 14.493 170.82 14.6507L172.157 10.1977C171.788 9.95321 171.383 9.76766 170.957 9.64765C170.406 9.4956 169.836 9.42386 169.264 9.43465C168.714 9.43797 168.168 9.52635 167.645 9.69665C167.113 9.86543 166.602 10.0953 166.123 10.3817C165.659 10.6608 165.231 10.9945 164.846 11.3757C164.476 11.7428 164.168 12.1677 163.933 12.6337H163.627V10.0447ZM189.805 24.2042C188.964 25.7026 187.768 26.9712 186.321 27.8982C184.713 28.8765 182.854 29.3657 180.973 29.3062C179.624 29.3202 178.285 29.068 177.033 28.5642C174.658 27.6074 172.775 25.7239 171.819 23.3482C171.312 22.0839 171.059 20.7322 171.075 19.3702C171.068 18.0606 171.314 16.762 171.798 15.5452C172.725 13.1743 174.552 11.2659 176.88 10.2352C178.107 9.69191 179.438 9.41907 180.78 9.43519C182.15 9.41093 183.51 9.6633 184.78 10.1772C185.896 10.6377 186.897 11.3399 187.71 12.2332C188.511 13.134 189.12 14.1888 189.5 15.3332C189.915 16.5845 190.121 17.8958 190.109 19.2142V19.6722C190.085 19.8106 190.072 19.9507 190.071 20.0912C190.044 20.2289 190.031 20.3689 190.033 20.5092H175.985C176.062 21.1978 176.275 21.8641 176.613 22.4692C176.914 22.9975 177.315 23.4626 177.793 23.8392C178.251 24.2018 178.775 24.4734 179.335 24.6392C179.891 24.8043 180.467 24.8875 181.047 24.8862C182.05 24.9257 183.041 24.6532 183.883 24.1062C184.618 23.6012 185.224 22.9301 185.652 22.1472L189.805 24.2042ZM185.275 16.9732C185.233 16.59 185.123 16.2174 184.95 15.8732C184.743 15.4447 184.46 15.0577 184.114 14.7312C183.715 14.3571 183.251 14.0604 182.744 13.8562C182.12 13.6128 181.454 13.4959 180.784 13.5122C179.769 13.4956 178.778 13.8171 177.967 14.4262C177.133 15.0667 176.531 15.9626 176.254 16.9772L185.275 16.9732ZM196.675 28.8492C197.73 29.1687 198.827 29.3229 199.929 29.3062L199.926 29.3042C201.03 29.3173 202.13 29.1504 203.18 28.8102C204.092 28.5148 204.943 28.0564 205.692 27.4572C206.361 26.9224 206.912 26.2551 207.311 25.4972C207.686 24.7811 207.882 23.9846 207.881 23.1762C207.9 21.8538 207.402 20.5763 206.492 19.6162C205.324 18.4844 203.847 17.7228 202.247 17.4272L199.393 16.7422C198.764 16.591 198.157 16.3608 197.585 16.0572C197.184 15.8718 196.925 15.4729 196.919 15.0312C196.945 14.533 197.257 14.0948 197.719 13.9072C198.294 13.6062 198.936 13.4558 199.584 13.4702C200.297 13.4773 201 13.6463 201.638 13.9642C202.328 14.3002 202.88 14.8659 203.199 15.5642L207.499 13.8132C206.908 12.3662 205.812 11.1827 204.415 10.4822C202.933 9.76487 201.303 9.40621 199.656 9.43522C198.647 9.42858 197.641 9.56322 196.669 9.83522C195.803 10.0732 194.985 10.46 194.251 10.9782C193.584 11.4526 193.031 12.0704 192.634 12.7862C192.231 13.5338 192.028 14.373 192.044 15.2222C192.029 15.9636 192.201 16.6968 192.544 17.3542C192.863 17.9473 193.29 18.4757 193.803 18.9122C194.315 19.3462 194.885 19.7052 195.498 19.9782C196.078 20.244 196.684 20.4481 197.306 20.5872L199.933 21.1582C200.745 21.3045 201.524 21.5943 202.233 22.0142C202.652 22.2858 202.903 22.7522 202.899 23.2512C202.866 23.7602 202.56 24.2114 202.099 24.4302C201.436 24.7939 200.685 24.9669 199.929 24.9302C199.072 24.9397 198.231 24.6944 197.513 24.2252C196.738 23.6928 196.135 22.945 195.78 22.0742L191.326 23.9742C191.602 24.6758 191.974 25.3357 192.431 25.9352C192.927 26.596 193.524 27.1745 194.2 27.6492C194.959 28.174 195.793 28.5787 196.675 28.8492ZM83.7416 4.33666C83.7405 6.12388 82.2911 7.57202 80.5039 7.57166C78.7167 7.57129 77.2679 6.12255 77.2676 4.33532C77.2672 2.5481 78.7154 1.09876 80.5026 1.09766C81.3617 1.09739 82.1857 1.43856 82.7932 2.04604C83.4007 2.65353 83.7418 3.47754 83.7416 4.33666ZM84.7229 44.0611L85.7779 46.8011H86.5489L82.5639 36.4141H81.8169L77.8809 46.8011H78.6719L79.6979 44.0611H84.7229ZM79.9759 43.3441L82.1879 37.4691L84.4439 43.3441H79.9759ZM92.3871 46.7859L92.3 45.4539C91.8367 46.3963 90.8732 46.9888 89.8231 46.9769C89.1042 47.036 88.397 46.7686 87.8969 46.2488C87.3969 45.729 87.1572 45.0119 87.244 44.2959V39.4609H87.9771V44.2509C87.9771 45.5259 88.5331 46.2589 89.8671 46.2589C91.6671 46.2589 92.3 44.7049 92.3 43.1239V39.4609H93.0321V46.7859H92.3871ZM97.4144 46.9935C98.2941 47.0438 99.1549 46.7248 99.7894 46.1135V46.1125C100.121 45.743 100.299 45.2616 100.289 44.7655C100.246 43.6673 99.3656 42.7869 98.2674 42.7425L96.8744 42.5515C95.7614 42.4065 95.4534 41.9375 95.4534 41.3225C95.4649 40.9113 95.6796 40.5326 96.0264 40.3115C96.4181 40.0603 96.8802 39.9418 97.3444 39.9735C97.9687 39.9318 98.5795 40.1679 99.0134 40.6185C99.2144 40.8725 99.3414 41.177 99.3804 41.4985H100.113C100.083 40.9994 99.8868 40.5248 99.5554 40.1505C98.978 39.5565 98.1717 39.2414 97.3444 39.2865C96.6128 39.2558 95.8964 39.5014 95.3374 39.9745C94.9338 40.3367 94.7042 40.8541 94.7064 41.3965C94.6953 41.8193 94.8414 42.2312 95.1164 42.5525C95.5605 42.9903 96.1489 43.2512 96.7714 43.2865L98.1944 43.4775C98.9269 43.4906 99.5197 44.0772 99.5404 44.8095C99.5571 45.1655 99.4124 45.5101 99.1464 45.7475C98.1067 46.4859 96.7091 46.4681 95.6884 45.7035C95.3798 45.4036 95.1878 45.0038 95.1464 44.5755H94.3984C94.4112 45.1285 94.631 45.6567 95.0144 46.0555C95.6404 46.7016 96.5162 47.0439 97.4144 46.9935ZM104.449 46.9043C103.086 46.9043 102.558 46.0393 102.558 44.7653V40.1503H101.094V39.4763H102.56V37.4543L103.293 37.2783V39.4783H105.56V40.1523H103.289V44.7393C103.289 45.6033 103.522 46.2193 104.504 46.2193C104.893 46.212 105.281 46.1682 105.663 46.0883V46.7333C105.265 46.8349 104.857 46.8939 104.447 46.9093L104.449 46.9043ZM107.76 43.2853C107.76 41.7463 108.26 40.1063 110.091 40.1063V40.1053C110.332 40.1005 110.573 40.125 110.808 40.1783V39.4453C110.571 39.4094 110.331 39.395 110.091 39.4023C109.058 39.3513 108.112 39.981 107.76 40.9543L107.672 39.4763H107.027V46.8013H107.76V43.2853ZM117.594 46.8479C116.684 46.8479 116.436 46.1899 116.436 45.4119C115.968 46.4334 114.921 47.0623 113.799 46.9949C113.158 47.0615 112.519 46.8544 112.039 46.4245C111.56 45.9947 111.283 45.3822 111.279 44.7379C111.279 43.4379 112.29 42.6569 113.739 42.5539L116.439 42.3649V41.6479C116.439 40.4329 115.618 39.9779 114.505 39.9779C113.348 39.9779 112.469 40.5059 112.395 41.5889H111.662C111.762 40.1109 112.922 39.2889 114.505 39.2889C115.529 39.1777 116.515 39.7132 116.979 40.6329C117.131 41.0858 117.196 41.5631 117.17 42.0399V45.3809C117.17 45.8809 117.243 46.1719 117.741 46.1719C117.808 46.1745 117.875 46.1694 117.941 46.1569V46.8009C117.826 46.8297 117.709 46.8444 117.59 46.8449L117.594 46.8479ZM116.432 43.0359L113.808 43.1969C112.725 43.2699 112.021 43.8409 112.021 44.7349C112.021 45.7899 112.813 46.3179 113.853 46.3179C114.594 46.3169 115.3 45.9996 115.793 45.4458C116.285 44.8919 116.518 44.1542 116.432 43.4179V43.0359ZM119.471 45.3365C119.471 46.4055 119.998 46.8895 120.935 46.8895V46.8935C121.158 46.8961 121.381 46.8665 121.596 46.8055V46.1605C121.387 46.1877 121.176 46.1977 120.965 46.1905C120.35 46.1905 120.202 45.8105 120.202 45.3105V36.2275H119.471V45.3365ZM123.252 36.4141H124.278V37.4401H123.252V36.4141ZM123.385 39.4761H124.161V46.8011H123.385V39.4761ZM131.384 45.4118C131.384 46.1893 131.632 46.8469 132.54 46.8478C132.54 46.8478 132.54 46.8478 132.54 46.8478H132.542C132.541 46.8478 132.54 46.8478 132.54 46.8478C132.658 46.8474 132.776 46.8326 132.891 46.8038V46.1598C132.825 46.1723 132.758 46.1773 132.691 46.1748C132.193 46.1748 132.12 45.8838 132.12 45.3838V42.0428C132.145 41.5659 132.08 41.0886 131.929 40.6358C131.465 39.7149 130.479 39.1782 129.454 39.2888C127.871 39.2888 126.711 40.1108 126.611 41.5888H127.344C127.417 40.5058 128.296 39.9778 129.454 39.9778C130.567 39.9778 131.388 40.4328 131.388 41.6478V42.3648L128.688 42.5538C127.237 42.6567 126.227 43.4378 126.227 44.7378C126.231 45.382 126.507 45.9945 126.987 46.4244C127.467 46.8542 128.106 47.0613 128.747 46.9948C129.868 47.0618 130.915 46.433 131.384 45.4118ZM128.763 43.1968L131.386 43.0358V43.4178C131.471 44.154 131.238 44.8917 130.746 45.4456C130.253 45.9994 129.548 46.3167 128.807 46.3178C127.767 46.3178 126.975 45.7898 126.975 44.7348C126.975 43.8408 127.679 43.2698 128.763 43.1968Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          style={{
            opacity: 0,
            transform: "translateY(-100%) translateZ(0px)",
          }}
        >
          <svg
            width="174"
            height="83"
            viewBox="0 0 174 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SVG_svg-raw-wrap__ODfz9 HomepageLogos_homepage-logos__logo__j4N53"
            style={
              {
                "--width": 174,
                "--height": 83,
              } as any
            }
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.0709 23.3076C33.3126 24.7122 27.7945 27.4279 25.9016 27.6439C25.9016 27.6439 26.5395 30.8245 23.873 33.188C19.5812 36.9162 15.2262 33.6434 13.7133 31.9705C9.87859 27.7117 6.33171 26.3004 2.90674 24.9375C1.61522 24.4235 0.341034 23.9165 -0.924721 23.2663C-0.735741 23.2646 -0.546844 23.2577 -0.358238 23.2457C2.12167 23.1109 4.53026 22.3996 6.69195 21.2633C8.84985 20.1325 10.7445 18.5562 12.2512 16.6381C13.7545 14.7382 14.8244 12.5701 15.5458 10.3194C15.6076 10.113 15.5143 9.87504 15.3085 9.7925C15.2784 9.78149 15.2372 9.77186 15.1961 9.76223C15.0037 9.73125 14.8142 9.83245 14.7325 10.0099L14.7215 10.0195C13.7943 12.0955 12.6119 14.0366 11.1196 15.6778C9.61626 17.2984 7.83452 18.6521 5.8484 19.5601C3.87956 20.4632 1.74351 20.9413 -0.421333 20.9634C-1.4816 20.9634 -2.5309 20.8189 -3.50887 20.5506C-4.25093 20.3443 -4.93949 20.0237 -5.44425 19.6317C-5.59907 19.517 -5.74076 19.3855 -5.86671 19.2396L-5.87631 19.2286C-5.8842 19.213 -5.89489 19.199 -5.90786 19.1873C-5.94901 19.146 -5.99016 19.1048 -6.04228 19.0635C-8.60449 15.2858 -6.63894 9.07987 -1.58448 4.55788C3.34654 0.139063 9.52299 -1.172 13.033 1.5533C15.8076 3.57112 16.7505 6.81913 17.8387 10.5681C18.6603 13.3983 19.5647 16.514 21.4027 19.6014C21.0324 16.1525 20.2492 -2.44179 45.5215 -10C51.59 6.11541 44.908 17.2399 43.0261 19.9106C55.5315 19.2209 65 26.436 65 26.436C65 26.436 55.116 44.9463 39.3039 42.1715C45.3363 50.844 41.0856 64.4513 41.0856 64.4513C41.0856 64.4513 25.593 65.8146 20.6099 54.3645C20.6099 54.3645 16.5746 69.3874 -4.97104 73C-5.99976 57.2961 -0.307487 48.3457 -0.307487 48.3457C-0.341831 48.351 -0.39661 48.362 -0.471708 48.3771C-1.70134 48.6236 -8.37879 49.9626 -20 45.3521C-20 45.3521 -14.1733 28.1804 10.4708 31.4436C11.0057 31.9499 11.5612 32.4974 12.1071 33.1165C12.852 33.9183 13.7124 34.6037 14.6598 35.1498C14.5303 35.5471 14.0587 36.0353 13.6494 36.459C13.4734 36.6412 13.3088 36.8115 13.188 36.9575C11.4172 39.083 8.86461 41.6033 6.94981 43.389C6.8154 43.5032 6.98136 43.7095 7.12538 43.605C9.3584 42.027 13.1263 39.4764 16.554 37.6481C17.2537 37.275 18.0932 37.2777 18.7904 37.6555C19.4877 38.0332 19.9503 38.7358 20.0228 39.5273C20.3109 42.6874 20.4151 47.0236 20.4453 49.1299C20.4453 49.2949 20.6826 49.3156 20.7237 49.1505L23.2558 37.6178C23.4045 36.9535 23.8295 36.3847 24.4234 36.055C25.0174 35.7253 25.7237 35.6662 26.3639 35.8927C29.0413 36.8323 32.3757 38.2782 34.2494 39.1256C34.4044 39.1875 34.5278 38.9812 34.3838 38.878C32.7255 37.721 29.8547 35.6657 27.8878 33.9529C27.3816 33.5192 27.0825 32.8906 27.0648 32.2231C27.047 31.5556 27.3122 30.9119 27.7945 30.4517C30.4006 27.9534 34.1781 25.063 36.2163 23.5456C36.3494 23.4424 36.2259 23.236 36.0709 23.3076ZM75.7027 75.1166C75.5737 75.1433 75.4635 75.1661 75.3816 75.1881V75.1895L80.9229 92H83.0942L86.1665 81.8542L89.2581 92H91.4294L96.7433 75.1577C96.3713 75.0747 96.0407 75.0332 95.7403 75.0332C95.3064 75.0332 94.9647 75.1577 94.7277 75.4067C94.4894 75.6558 94.3034 76.0086 94.1697 76.4555L90.3534 89.3103L86.7135 76.4347C86.4352 75.4994 85.9075 75.0332 85.1415 75.0332C84.9555 75.0332 84.7805 75.0539 84.6152 75.0747C84.4498 75.0954 84.2845 75.1259 84.1192 75.1577L85.1952 79.0608L82.1229 89.4141L78.0999 76.414C77.9663 75.9768 77.7692 75.635 77.5212 75.3957C77.2733 75.1563 76.9219 75.0318 76.4769 75.0318C76.2606 75.0318 76.054 75.0539 75.8569 75.0844C75.8032 75.0958 75.7515 75.1065 75.7027 75.1166ZM102.658 75.1051C102.421 75.1577 102.245 75.2089 102.132 75.2615L96.0834 91.8644H98.274L99.8983 87.3581H106.64L108.315 91.8644H110.588L104.829 76.0598C104.685 75.6544 104.478 75.386 104.22 75.2393C103.961 75.1051 103.672 75.0318 103.361 75.0318C103.124 75.0318 102.896 75.0539 102.658 75.1051ZM103.279 77.5859L106.071 85.583H100.455L103.279 77.5859ZM94.955 26.6522C95.338 26.4032 95.6067 26.1942 95.772 26.0282V26.0296C96.0267 25.7858 96.249 25.5101 96.4333 25.2091C96.5684 24.9601 96.64 24.6488 96.64 24.2849C96.64 24.0359 96.578 23.755 96.4333 23.4437C96.1341 22.799 95.7595 22.1924 95.3174 21.6367C95.09 21.3572 94.893 21.1179 94.7277 20.92C94.5405 21.0934 94.3118 21.2833 94.0509 21.4998C93.9661 21.5702 93.878 21.6434 93.7867 21.7197C92.8877 22.4484 91.8544 22.9919 90.7461 23.3192C90.0958 23.517 89.3711 23.6097 88.5968 23.6097C87.1171 23.6097 85.8868 23.3302 84.9045 22.7685C83.9112 22.2081 83.1162 21.4707 82.5059 20.5465C81.8955 19.6222 81.4616 18.5624 81.2136 17.3587C80.9656 16.1647 80.8416 14.9084 80.8416 13.5898C80.8416 12.364 80.9656 11.1492 81.2136 9.96624C81.4616 8.77221 81.8749 7.72346 82.4659 6.79785C83.0492 5.87668 83.8426 5.10833 84.7805 4.55645C85.7422 3.98503 86.9311 3.69448 88.3488 3.69448C89.0876 3.68759 89.8242 3.7783 90.5394 3.96428C91.1433 4.12987 91.729 4.35607 92.2878 4.63947C92.7862 4.89373 93.2543 5.20378 93.6834 5.5637C94.0967 5.91651 94.4797 6.25825 94.8104 6.59031C95.3119 6.11472 95.7723 5.59725 96.1867 5.04347C96.6 4.49281 96.8067 3.93246 96.8067 3.37211C96.8067 3.00823 96.713 2.67617 96.5367 2.36486C96.3617 2.05356 96.144 1.79345 95.896 1.56516C95.6687 1.3673 95.3477 1.11826 94.9137 0.827707C94.4894 0.526087 93.9424 0.246604 93.2907 -0.0135088C92.6391 -0.283307 91.8744 -0.511597 90.9954 -0.709449C90.1261 -0.905917 89.1438 -1 88.0581 -1C85.8565 -1 83.9428 -0.625051 82.3199 0.111013C80.6955 0.848461 79.3426 1.86677 78.257 3.18533C77.1699 4.50388 76.3529 6.06178 75.8156 7.85767C75.2687 9.66462 75 11.6279 75 13.7448C75 15.8741 75.248 17.8153 75.744 19.5918C76.251 21.3669 77.0266 22.9041 78.1013 24.2019C79.1663 25.4997 80.5206 26.5069 82.1642 27.2333C83.8092 27.9611 85.7532 28.3236 88.0058 28.3236C89.1755 28.3236 90.2198 28.2405 91.1194 28.0538C92.0301 27.8781 92.7934 27.6594 93.4354 27.4104C94.076 27.1503 94.583 26.9012 94.955 26.6522ZM119.378 27.6193H125.096V27.6179H125.086V14.045C125.086 13.4017 125.458 12.8718 126.192 12.4359C126.925 12.0098 127.815 11.7912 128.839 11.7912C129.562 11.7912 130.12 11.8963 130.524 12.1039C130.907 12.2912 131.216 12.6019 131.403 12.9866C131.594 13.4161 131.706 13.877 131.734 14.3467C131.775 14.8766 131.796 15.4466 131.796 16.0595V27.6262H137.472V15.8105C137.472 15.0827 137.451 14.3467 137.41 13.5885C137.368 12.8302 137.286 12.1343 137.141 11.4909C136.872 10.2139 136.252 9.17484 135.311 8.39588C134.37 7.61693 132.913 7.22261 130.937 7.22261C129.273 7.22261 127.949 7.50347 126.978 8.04307C125.995 8.58405 125.282 9.17484 124.806 9.81958C124.641 9.00881 124.228 8.44846 123.576 8.12608C122.924 7.81478 122.149 7.64875 121.26 7.64875C120.951 7.64875 120.692 7.65977 120.465 7.66944L120.464 7.6695C120.236 7.68057 120.039 7.70132 119.874 7.73176L119.378 7.81478V27.6193ZM153.179 23.2984C152.254 23.7837 151.224 24.0331 150.18 24.0248C149.239 24.0248 148.443 23.8491 147.77 23.5475C147.145 23.2234 146.608 22.7491 146.209 22.1666C145.806 21.5745 145.516 20.8896 145.351 20.1106C145.186 19.3317 145.103 18.4905 145.103 17.5981C145.103 15.8423 145.496 14.3992 146.271 13.2675C147.047 12.1357 148.36 11.5753 150.191 11.5753C151.194 11.5622 152.184 11.809 153.065 12.292C153.933 12.7694 154.585 13.237 155.03 13.7144C155.422 13.2467 155.743 12.7182 155.991 12.1468C156.239 11.5753 156.363 11.098 156.363 10.7037C156.363 10.2872 156.26 9.92474 156.053 9.61205C155.847 9.30074 155.475 8.97975 154.947 8.64769C154.306 8.22017 153.51 7.88811 152.548 7.63906C151.587 7.39002 150.522 7.2655 149.353 7.2655C148.443 7.2655 147.398 7.41216 146.251 7.70271C145.061 8.01001 143.945 8.5575 142.973 9.31181C141.949 10.0908 141.081 11.1492 140.388 12.4885C139.695 13.8292 139.344 15.5628 139.344 17.6811C139.344 19.9128 139.675 21.7197 140.347 23.1006C141.008 24.4827 141.846 25.573 142.849 26.3506C143.809 27.1087 144.919 27.6508 146.106 27.9403C147.274 28.2198 148.36 28.3554 149.363 28.3554C150.862 28.3554 152.103 28.1894 153.075 27.8573C154.047 27.5252 154.802 27.1614 155.33 26.767C155.691 26.4862 155.929 26.2164 156.042 25.9466C156.157 25.6768 156.208 25.407 156.208 25.1261C156.208 24.8978 156.166 24.6488 156.084 24.3679C156.001 24.087 155.898 23.7965 155.753 23.5059C155.619 23.2043 155.464 22.9345 155.298 22.6647C155.133 22.406 154.968 22.1874 154.802 22.0214C154.667 22.1874 154.461 22.3852 154.182 22.6232C153.903 22.8626 153.572 23.0909 153.179 23.2984ZM170.095 23.838C169.567 23.9943 168.957 24.0663 168.264 24.0663C166.455 24.0663 165.131 23.5585 164.293 22.5305C163.467 21.5122 162.991 20.2352 162.877 18.698H175.14C175.178 18.5135 175.198 18.3259 175.202 18.1377C175.207 18.0298 175.214 17.92 175.221 17.8091C175.23 17.6739 175.238 17.537 175.244 17.4002L175.244 17.3976C175.255 17.1386 175.264 16.9124 175.264 16.6835V16.1024C175.264 14.9291 175.12 13.8071 174.81 12.7486C174.521 11.7131 174.017 10.7507 173.331 9.92474C172.648 9.0932 171.769 8.43877 170.683 7.95175C169.598 7.46335 168.285 7.2143 166.724 7.2143C165.531 7.21322 164.346 7.41339 163.219 7.80648C162.076 8.19647 161.029 8.82662 160.148 9.65494C159.237 10.4851 158.514 11.5435 157.977 12.8109C157.428 14.0879 157.16 15.6043 157.16 17.3587C157.16 19.5088 157.469 21.2839 158.08 22.6952C158.69 24.1078 159.496 25.2299 160.478 26.0711C161.462 26.9001 162.617 27.4993 163.859 27.8255C165.121 28.1575 166.403 28.3236 167.717 28.3236C169.164 28.3236 170.426 28.1686 171.491 27.8462C172.565 27.5239 173.393 27.1406 173.972 26.6937C174.665 26.1956 175.016 25.6353 175.016 25.0223C175.016 24.6073 174.84 24.0663 174.479 23.4132C174.117 22.7574 173.765 22.2178 173.435 21.8028C173.237 21.985 173.019 22.1742 172.781 22.3804C172.721 22.4325 172.66 22.4858 172.597 22.5402C172.287 22.81 171.925 23.059 171.511 23.2777C171.059 23.5104 170.584 23.698 170.095 23.838ZM169.37 12.292C169.877 13.1333 170.136 14.2235 170.136 15.5628H162.847C162.847 14.1391 163.187 13.0295 163.85 12.2298C164.511 11.4301 165.431 11.0357 166.6 11.0357C167.933 11.0357 168.854 11.4508 169.37 12.292ZM183.288 8.93824C182.988 9.24955 182.76 9.53042 182.595 9.77946C182.43 9.0517 182.017 8.5121 181.386 8.16898C180.734 7.82723 179.958 7.65013 179.07 7.65013C178.76 7.65013 178.491 7.6612 178.273 7.67089C178.046 7.68196 177.849 7.70271 177.684 7.73315L177.188 7.81616V27.6179H182.854V14.7216C182.854 14.0257 183.153 13.4238 183.733 12.9257C184.321 12.4166 185.046 12.1675 185.904 12.1675C186.545 12.1675 187.093 12.2713 187.569 12.4788C188.081 12.7118 188.558 13.0159 188.985 13.3823C189.295 12.8206 189.595 12.1357 189.905 11.3263C190.206 10.5155 190.36 9.8099 190.36 9.2288C190.36 8.83448 190.268 8.5121 190.071 8.24092C189.875 7.98219 189.616 7.77465 189.295 7.61831C188.975 7.47442 188.624 7.35958 188.251 7.30839C187.869 7.25581 187.518 7.22537 187.186 7.22537C186.628 7.22537 186.111 7.30839 185.625 7.47442C185.138 7.64045 184.704 7.84798 184.312 8.09703C183.919 8.34607 183.577 8.62556 183.288 8.93824ZM94.955 61.6775C95.338 61.4284 95.6067 61.2209 95.772 61.0549V61.0535C96.0724 60.7519 96.2997 60.4724 96.4333 60.2123C96.5684 59.9632 96.64 59.6519 96.64 59.2881C96.64 59.0279 96.578 58.7581 96.4333 58.4468C96.2997 58.1355 96.1344 57.8353 95.9374 57.5226C95.7514 57.2113 95.5337 56.9208 95.3174 56.6399C95.09 56.3604 94.893 56.121 94.7277 55.9246C94.5427 56.0949 94.317 56.2821 94.0599 56.4955C93.9724 56.5682 93.8812 56.6438 93.7867 56.7229C92.8879 57.4518 91.8546 57.9953 90.7461 58.3223C90.0958 58.5202 89.3711 58.6129 88.5968 58.6129C87.1171 58.6129 85.8868 58.3334 84.9045 57.7717C83.9112 57.2113 83.1162 56.4739 82.5059 55.551C81.8955 54.6365 81.4616 53.5766 81.2136 52.3729C80.9656 51.1678 80.8416 49.9115 80.8416 48.6041C80.8403 47.3865 80.965 46.1721 81.2136 44.9805C81.4616 43.7851 81.8749 42.7363 82.4659 41.8121C83.0491 40.8904 83.8425 40.1216 84.7805 39.5693C85.7422 38.9979 86.9311 38.7073 88.3488 38.7073C89.0877 38.701 89.8242 38.7921 90.5394 38.9785C91.1432 39.1436 91.729 39.3693 92.2878 39.6523C92.7862 39.9066 93.2543 40.2166 93.6834 40.5765C94.0967 40.9307 94.4797 41.2725 94.8104 41.6045C95.3064 41.1369 95.772 40.618 96.1867 40.0577C96.6 39.507 96.8067 38.9467 96.8067 38.3863C96.8067 38.0224 96.713 37.6904 96.5367 37.3791C96.3617 37.0678 96.144 36.8077 95.896 36.5794C95.6687 36.3815 95.3477 36.1325 94.9137 35.8419C94.4894 35.5403 93.9424 35.2705 93.2907 35.0007C92.6391 34.7309 91.8744 34.5026 90.9954 34.3048C90.1261 34.1083 89.1438 34.0142 88.0581 34.0142C85.8565 34.0142 83.9428 34.3878 82.3199 35.1252C80.7493 35.8246 79.3594 36.8763 78.257 38.1995C77.1699 39.5181 76.3529 41.0746 75.8156 42.8719C75.2687 44.6775 75 46.6421 75 48.759C75 50.8883 75.248 52.8295 75.744 54.606C76.251 56.3812 77.0266 57.9183 78.1013 59.2147C79.1663 60.5236 80.5206 61.5308 82.1642 62.2586C83.8092 62.985 85.7532 63.3489 88.0058 63.3489C89.1755 63.3489 90.2198 63.2658 91.1194 63.0791C92.0301 62.902 92.7934 62.6834 93.4354 62.4343C94.076 62.1756 94.583 61.9265 94.955 61.6775ZM116.73 56.651C117.072 55.3725 117.248 54.0346 117.248 52.633C117.248 51.2412 117.072 49.9115 116.731 48.6553C116.414 47.446 115.846 46.3174 115.066 45.343C114.3 44.3883 113.308 43.6398 112.068 43.0794C110.826 42.5191 109.327 42.2382 107.581 42.2382C105.915 42.2382 104.457 42.5191 103.206 43.0794C101.944 43.6398 100.911 44.398 100.094 45.3637C99.2653 46.3498 98.6367 47.4891 98.2437 48.7175C97.8304 49.9849 97.6237 51.3339 97.6237 52.7562C97.6159 54.1077 97.7967 55.4536 98.161 56.7547C98.4968 57.9774 99.0772 59.1185 99.8666 60.1085C100.642 61.0742 101.645 61.8421 102.885 62.4136C104.127 62.985 105.637 63.2755 107.414 63.2755C109.192 63.2755 110.714 62.9739 111.964 62.3928C113.206 61.8006 114.228 61.0231 115.024 60.0462C115.822 59.0462 116.403 57.8897 116.73 56.651ZM111.365 50.4415C111.478 51.19 111.531 51.926 111.531 52.6842H111.529C111.529 53.4632 111.478 54.2311 111.354 55.0003C111.24 55.7475 111.033 56.4227 110.723 57.0245C110.432 57.6089 109.994 58.1065 109.452 58.4676C108.903 58.8315 108.221 59.0183 107.384 59.0183C106.578 59.0183 105.894 58.8315 105.357 58.4676C104.82 58.1037 104.395 57.6264 104.085 57.0245C103.785 56.4324 103.569 55.7585 103.445 55.0003C103.321 54.2421 103.259 53.4936 103.259 52.7368C103.259 51.9909 103.328 51.2466 103.465 50.5134C103.592 49.8305 103.826 49.172 104.158 48.5625C104.478 47.9911 104.902 47.5235 105.451 47.161C105.998 46.7971 106.67 46.6103 107.477 46.6103C108.283 46.6103 108.956 46.7764 109.482 47.1292C110.006 47.4709 110.436 47.9389 110.734 48.4906C111.058 49.0984 111.271 49.7589 111.365 50.4415ZM133.647 62.6529H137.441V62.6515V46.1828C137.441 45.4869 137.338 44.9058 137.111 44.4492C136.883 43.9801 136.594 43.6287 136.232 43.3575C135.869 43.0988 135.467 42.912 135.022 42.8179C134.577 42.7252 134.132 42.6726 133.689 42.6726C133.271 42.6714 132.853 42.6922 132.438 42.7349C132.044 42.7764 131.816 42.8083 131.765 42.8387V56.2151C131.765 56.8585 131.393 57.3884 130.659 57.8242C129.925 58.2504 129.035 58.4676 128.011 58.4676C127.288 58.4676 126.73 58.3638 126.326 58.1563C125.922 57.9488 125.623 57.6471 125.447 57.2736C125.272 56.9 125.158 56.4531 125.116 55.9343C125.075 55.4251 125.054 54.844 125.054 54.2006V45.9863C125.054 45.2904 124.94 44.73 124.724 44.2942C124.496 43.8584 124.207 43.5263 123.845 43.287C123.482 43.0476 123.08 42.8816 122.635 42.7986C122.19 42.7155 121.745 42.674 121.301 42.674C120.884 42.6726 120.466 42.6935 120.05 42.7363C119.667 42.7778 119.44 42.8096 119.388 42.8415V54.4497C119.388 55.1774 119.408 55.9135 119.45 56.6717C119.486 57.3767 119.576 58.0779 119.718 58.7692C119.998 60.0463 120.608 61.0853 121.559 61.8629C122.5 62.6418 123.958 63.0376 125.933 63.0376C127.598 63.0376 128.922 62.7664 129.893 62.2171C130.866 61.6761 131.589 61.0853 132.064 60.4406C132.064 61.1683 132.147 61.719 132.334 62.0926C132.509 62.4661 132.954 62.6529 133.647 62.6529ZM140.512 62.6529H146.23V62.6515V49.0689C146.23 48.4256 146.602 47.8957 147.336 47.4598C148.071 47.0337 148.961 46.8165 149.984 46.8165C150.708 46.8165 151.266 46.9202 151.669 47.1278C152.048 47.3213 152.356 47.6303 152.548 48.0105C152.739 48.4403 152.851 48.901 152.879 49.3706C152.922 49.9405 152.942 50.5119 152.941 51.0834V62.6501H158.617V50.8344C158.617 50.1066 158.596 49.3706 158.555 48.6124C158.514 47.8542 158.422 47.1582 158.286 46.5149C158.007 45.2378 157.387 44.2001 156.446 43.4212C155.495 42.6422 154.036 42.2479 152.062 42.2479C150.398 42.2479 149.074 42.5288 148.102 43.0684C147.13 43.608 146.406 44.2001 145.931 44.8435C145.764 44.0341 145.351 43.4724 144.699 43.1514C144.049 42.8387 143.273 42.6727 142.383 42.6727C142.077 42.6727 141.822 42.6835 141.595 42.6931L141.587 42.6934C141.371 42.7045 141.174 42.7252 141.008 42.7557L140.512 42.8387V62.6529ZM174.355 58.3223C173.429 58.8074 172.4 59.0572 171.356 59.0501C170.415 59.0501 169.618 58.873 168.947 58.5617C168.319 58.2412 167.781 57.7662 167.385 57.1809C166.983 56.5887 166.693 55.9038 166.527 55.1249C166.361 54.3459 166.279 53.5047 166.279 52.6123C166.279 50.8565 166.673 49.4135 167.447 48.2817C168.223 47.1499 169.536 46.5896 171.367 46.5896C172.37 46.5772 173.359 46.8235 174.241 47.3049C175.11 47.7836 175.76 48.2499 176.205 48.7286C176.6 48.2555 176.924 47.7275 177.167 47.161C177.415 46.5882 177.539 46.1109 177.539 45.7165C177.539 45.3015 177.436 44.9376 177.229 44.6263C177.022 44.315 176.65 43.9926 176.123 43.6605C175.482 43.2344 174.686 42.9023 173.724 42.6533C172.772 42.4042 171.707 42.2797 170.539 42.2797C169.618 42.2797 168.574 42.425 167.426 42.7155C166.236 43.0233 165.121 43.5713 164.149 44.326C163.125 45.1147 162.257 46.1745 161.564 47.5138C160.871 48.8531 160.52 50.5881 160.52 52.705C160.52 54.9381 160.85 56.745 161.523 58.1245C162.195 59.5067 163.022 60.5969 164.025 61.3759C164.985 62.1335 166.095 62.6752 167.282 62.9642C168.45 63.234 169.536 63.3793 170.539 63.3793C172.039 63.3793 173.279 63.2133 174.252 62.8812C175.223 62.5491 175.978 62.1853 176.506 61.7909C176.867 61.5101 177.105 61.2403 177.219 60.9705C177.332 60.7007 177.385 60.4309 177.385 60.15C177.385 59.9217 177.343 59.6727 177.261 59.3918C177.178 59.111 177.064 58.8204 176.929 58.5299C176.795 58.2296 176.639 57.9598 176.474 57.69C176.309 57.4188 176.143 57.2016 175.978 57.0356C175.843 57.2113 175.636 57.4092 175.358 57.6485C175.078 57.8865 174.748 58.1148 174.355 58.3223ZM184.436 38.2922C185.035 37.7305 185.335 37.0055 185.335 36.1117C185.335 35.2193 185.035 34.4916 184.436 33.9105C183.836 33.339 183.123 33.0485 182.285 33.0485C181.417 33.0485 180.693 33.339 180.114 33.9118C179.524 34.4819 179.235 35.2193 179.235 36.1117C179.235 37.0055 179.524 37.7319 180.114 38.2922C180.704 38.8526 181.427 39.1335 182.285 39.1335C183.084 39.148 183.857 38.8457 184.436 38.2922ZM184.539 63.0057C184.932 62.9753 185.18 62.9338 185.294 62.8812V45.9559C185.294 45.2599 185.18 44.6996 184.963 44.2638C184.736 43.8266 184.447 43.4945 184.084 43.2565C183.722 43.0269 183.32 42.8608 182.875 42.7778C182.43 42.6948 181.985 42.6532 181.541 42.6532C181.123 42.652 180.706 42.6728 180.29 42.7155C179.896 42.7571 179.669 42.7889 179.618 42.8193V59.5786C179.618 60.9705 179.958 61.9058 180.642 62.3624C181.324 62.8189 182.202 63.0472 183.288 63.0472C183.733 63.0472 184.146 63.0376 184.539 63.0057ZM193.204 63.0057C193.596 62.9753 193.855 62.9338 194 62.8812H193.99V36.2362C193.99 35.5403 193.887 34.98 193.658 34.5441C193.431 34.1083 193.142 33.7762 192.781 33.5369C192.418 33.3086 192.015 33.1426 191.57 33.0596C191.126 32.9765 190.681 32.935 190.236 32.935C189.792 32.935 189.378 32.9558 188.985 32.9973C188.603 33.0388 188.375 33.0692 188.324 33.1011V59.5689C188.324 60.2649 188.416 60.8363 188.613 61.2818C188.79 61.6971 189.063 62.0638 189.409 62.3513C189.745 62.6203 190.138 62.8086 190.557 62.902C190.981 62.996 191.436 63.0472 191.911 63.0472C192.387 63.0472 192.811 63.0376 193.204 63.0057ZM116.399 7.83692V22.7892C116.399 23.9113 116.472 24.8771 116.638 25.6865C116.782 26.4972 116.968 27.1406 117.196 27.6179C116.381 27.9764 115.501 28.1602 114.611 28.1575C113.608 28.1575 112.791 27.9915 112.15 27.6594C111.51 27.3274 111.127 26.7975 110.982 26.0711C110.423 26.684 109.711 27.1821 108.852 27.5764C107.983 27.9611 106.959 28.1575 105.761 28.1575C104.687 28.1654 103.62 27.9866 102.607 27.629C101.625 27.2859 100.755 26.7145 100 25.9161C99.2467 25.115 98.657 24.076 98.223 22.7892C97.7987 21.5025 97.581 19.9225 97.581 18.0546C97.581 15.989 97.8304 14.265 98.336 12.8842C98.8416 11.502 99.4947 10.391 100.302 9.55117C101.108 8.71964 101.997 8.12747 102.989 7.77465C103.981 7.42184 104.974 7.24613 105.978 7.24613C106.664 7.23471 107.348 7.33278 108.004 7.53668C108.538 7.71021 109.054 7.93588 109.545 8.21048C109.921 8.42024 110.266 8.68251 110.569 8.98944C110.817 9.24955 110.982 9.46815 111.065 9.63418C111.26 8.98944 111.664 8.50103 112.274 8.16898C112.885 7.83692 113.597 7.67089 114.404 7.67089C114.635 7.67089 114.85 7.67977 115.064 7.68858L115.139 7.69164C115.353 7.70061 115.567 7.7214 115.779 7.7539L116.399 7.83692ZM109.885 23.6512C110.443 23.2984 110.723 22.8626 110.723 22.3327V12.7804C110.496 12.5508 110.113 12.292 109.576 12.0015C109.027 11.7109 108.398 11.5643 107.673 11.5643C106.225 11.5643 105.15 12.1053 104.457 13.1955C103.764 14.2858 103.413 15.8326 103.413 17.8471C103.413 19.7786 103.734 21.3157 104.375 22.4572C105.015 23.6 106.133 24.1701 107.714 24.1701C108.604 24.1701 109.327 24.004 109.885 23.6512Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

//TODO: add parallax effect
const FourthSectionWork = () => {
  return (
    <div className="page_homepage__section__S9KCY">
      <FirstSubsectionFourth />
      <SecondSubsectionFourth />
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
            href="?modal=true"
          >
            <div className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
              <div
                className="WorkCard_work-card__thumbnail-outer__kJvp9"
                style={{
                  transform: "translateY(-49.256%) translateZ(0px)",
                }}
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
              </div>
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
          <a
            className="WorkCard_work-card__Z7y63 WorkCard_work-card--portrait__WHYgm"
            href="/work/sussex-taps"
          >
            <div className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
              <div
                className="WorkCard_work-card__thumbnail-outer__kJvp9"
                style={{
                  transform: "translateY(-48.1254%) translateZ(0px)",
                }}
              >
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
              </div>
            </div>
            <div className="WorkCard_work-card__content__Br9N4 WorkCard_work-card__content--white__ISlcm">
              <div className="WorkCard_work-card__content-inner__8Mqvf">
                <h3 className="WorkCard_work-card__title__vsvFl">
                  Sussex Taps
                </h3>
              </div>
            </div>
          </a>
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
          <a
            className="WorkCard_work-card__Z7y63 WorkCard_work-card--portrait__WHYgm"
            href="/work/ferox"
          >
            <div className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
              <div
                className="WorkCard_work-card__thumbnail-outer__kJvp9"
                style={{
                  transform: "translateY(-48.1254%) translateZ(0px)",
                }}
              >
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
          </a>
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
          <a
            className="WorkCard_work-card__Z7y63 WorkCard_work-card--landscape__cw0_a"
            href="/work/trailswa"
          >
            <div className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
              <div
                className="WorkCard_work-card__thumbnail-outer__kJvp9"
                style={{
                  transform: "translateY(-49.2778%) translateZ(0px)",
                }}
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
              </div>
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
          </a>
        </div>
      </div>
    </div>
  );
};

//
const SecondSubsectionFourth = () => {
  return (
    <div className="page_homepage-bottom__dQvm3">
      <span className="page_homepage-bottom__heading___55Sm">
        <span
          className="TextAnimateUp_word__Yvn5A"
          style={{
            display: "inline-block",
            whiteSpace: "pre",
            transform: "translate3d(0px, 0%, 0px)",
            animation:
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            G
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            r
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
            a
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            w
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            o
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            r
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            k
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            f
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            o
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            r
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            g
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            r
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
            a
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 100 100"
              className=""
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M50 2.93C24.005 2.93 2.93 24.005 2.93 50S24.005 97.07 50 97.07 97.07 75.995 97.07 50 75.995 2.93 50 2.93ZM9.18 50C9.18 27.456 27.456 9.18 50 9.18S90.82 27.456 90.82 50 72.544 90.82 50 90.82 9.18 72.544 9.18 50Zm29.417-14.964a4.59 4.59 0 1 0-6.491 6.491 4.59 4.59 0 0 0 6.491-6.491Zm29.297 0a4.59 4.59 0 1 0-6.491 6.492 4.59 4.59 0 0 0 6.491-6.492ZM29.167 60.33a3.125 3.125 0 0 0-5.6 2.777 29.505 29.505 0 0 0 52.866 0 3.125 3.125 0 0 0-5.6-2.777 23.253 23.253 0 0 1-41.666 0Z"
                clip-rule="evenodd"
              ></path>
            </svg>
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
              "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
          }}
        >
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
            e
          </span>
          <span
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: 1,
            }}
          >
            o
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
            l
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
            .
          </span>
        </span>
      </span>
      <div
        className="page_homepage-bottom__content__ty_c_"
        style={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
      >
        <div className="WYSIWYG_wysiwyg__ct3Fm page_homepage-bottom__wysiwyg__MyVmD">
          <p>
            We put people first, understanding that a well-crafted product
            significantly impacts the lives of those who use it. By empowering
            users, we’re able to solve unique problems, accelerate progress and
            unlock potential for our clients.{" "}
          </p>
          <p>
            Our independent spirit drives our creative energy and approach to
            technology, allowing us to ensure quality and consistently deliver
            outstanding outcomes.
          </p>
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
          <source
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
          />
          <img
            src="https://a-us.storyblok.com/f/1017006/1200x1400/dc71890964/humaanpeople.jpg/m/450x548/filters:quality(80)"
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
          <li
            className="HomepageStats_homepage-stats__item__bfQDv"
            style={{
              opacity: 1,
              transform: "translateX(0px)",
            }}
          >
            <span className="HomepageStats_homepage-stats__value__JLrJU">
              <span>100%</span>
            </span>
            <span className="HomepageStats_homepage-stats__label__vKtOz">
              <span
                className="TextAnimateUp_word__Yvn5A"
                style={{
                  display: "inline-block",
                  whiteSpace: "pre",
                  transform: "translate3d(0px, 0%, 0px)",
                  animation:
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  I
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  n
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  -
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  h
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  o
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  u
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  s
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
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  &amp;
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
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  i
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  n
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  d
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
                  p
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
                  n
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  d
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
                  n
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
              </span>
            </span>
          </li>
          <li
            className="HomepageStats_homepage-stats__item__bfQDv"
            style={{
              opacity: 1,
              transform: "translateX(0px)",
            }}
          >
            <span className="HomepageStats_homepage-stats__value__JLrJU">
              <span>13</span>
            </span>
            <span className="HomepageStats_homepage-stats__label__vKtOz">
              <span
                className="TextAnimateUp_word__Yvn5A"
                style={{
                  display: "inline-block",
                  whiteSpace: "pre",
                  transform: "translate3d(0px, 0%, 0px)",
                  animation:
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  Y
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
                  a
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  r
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  s
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
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  c
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  r
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  a
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  f
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
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  i
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  n
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  g
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
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  d
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  i
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  g
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  i
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
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  a
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  l
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
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
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
                  p
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
                  r
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  i
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
                  n
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  c
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
                  s
                </span>
              </span>
            </span>
          </li>
          <li
            className="HomepageStats_homepage-stats__item__bfQDv"
            style={{
              opacity: 1,
              transform: "translateX(0px)",
            }}
          >
            <span className="HomepageStats_homepage-stats__value__JLrJU">
              <span>80+</span>
            </span>
            <span className="HomepageStats_homepage-stats__label__vKtOz">
              <span
                className="TextAnimateUp_word__Yvn5A"
                style={{
                  display: "inline-block",
                  whiteSpace: "pre",
                  transform: "translate3d(0px, 0%, 0px)",
                  animation:
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  A
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  w
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  a
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  r
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  d
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  s
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
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  f
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  r
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  o
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  m
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
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  A
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  W
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  A
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  ,
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
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  F
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  W
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  A
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  ,
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
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  a
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  n
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  d
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
                    "TextAnimateUp_mask-down__TzvI8 0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  A
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  w
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  w
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  w
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  a
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  r
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  d
                </span>
                <span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    opacity: 1,
                  }}
                >
                  s
                </span>
              </span>
            </span>
          </li>
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
