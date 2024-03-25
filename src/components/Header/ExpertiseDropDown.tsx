import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {};

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

const ExpertiseDropDown = (props: Props) => {
  const controls = useAnimation();
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="link-wrap">
      <button
        className={`Header_menu__link__UGkEv`}
        onClick={() => {
          setIsExpertiseOpen(true);
          setIsVisible((prev) => !prev);
        }}
      >
        Expertise
      </button>
      {isExpertiseOpen && (
        <motion.nav
          className="HeaderSubmenu_submenu__TXNdc"
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
            className="HeaderSubmenu_submenu__group__BIGgm"
            style={{ opacity: 1 }}
          >
            <h2 className="HeaderSubmenu_submenu__heading__CpYC6">
              What We Do
            </h2>
            <ul className="HeaderSubmenu_submenu__list__be8NW">
              <li
                style={{
                  transform:
                    "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                }}
              >
                <a
                  className="HeaderSubmenu_submenu__link__8aEu8 HeaderSubmenu_submenu__link--purple__lM_G4"
                  //   href="/expertise/strategy-ux"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="SVG_svg-raw-wrap__ODfz9 HeaderSubmenu_submenu__link-icon__Xz8Jl"
                    style={{ "--width": 12, "--height": 12 } as any}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.25609 0H5.00885V4.1283L2.08993 1.20938L1.20801 2.09131L4.12646 5.00977H0V6.257H4.12686L1.20813 9.17572L2.09006 10.0576L5.00885 7.13885V11.2667H6.25609V7.13939L9.17474 10.058L10.0567 9.17612L7.13755 6.257H11.2667V5.00977H7.13794L10.0568 2.09091L9.17487 1.20898L6.25609 4.12777V0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Strategy &amp; UX
                </a>
              </li>
              <li
                style={{
                  transform:
                    "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                }}
              >
                <a
                  className="HeaderSubmenu_submenu__link__8aEu8 HeaderSubmenu_submenu__link--blue__ErsfR"
                  //   href="/expertise/design"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="SVG_svg-raw-wrap__ODfz9 HeaderSubmenu_submenu__link-icon__Xz8Jl"
                    style={{ "--width": 10, "--height": 10 } as any}
                  >
                    <path
                      d="M5 2.5C6.37875 2.5 7.5 3.62125 7.5 5C7.5 6.37875 6.37875 7.5 5 7.5C3.62125 7.5 2.5 6.37875 2.5 5C2.5 3.62125 3.62125 2.5 5 2.5ZM5 0C2.23875 0 0 2.23875 0 5C0 7.76125 2.23875 10 5 10C7.76125 10 10 7.76125 10 5C10 2.23875 7.76125 0 5 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Design
                </a>
              </li>
              <li
                style={{
                  transform:
                    "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                }}
              >
                <a
                  className="HeaderSubmenu_submenu__link__8aEu8 HeaderSubmenu_submenu__link--cyan__YUx20"
                  //   href="/expertise/websites"
                >
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="SVG_svg-raw-wrap__ODfz9 HeaderSubmenu_submenu__link-icon__Xz8Jl"
                    style={{ "--width": 12, "--height": 7 } as any}
                  >
                    <path
                      d="M6 3.27273C7.6545 3.27273 9 4.74055 9 6.54545H12C12 2.93645 9.30825 0 6 0C2.69175 0 0 2.93645 0 6.54545H3C3 4.74055 4.3455 3.27273 6 3.27273Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Websites
                </a>
              </li>
              <li
                style={{
                  transform:
                    "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                }}
              >
                <a
                  className="HeaderSubmenu_submenu__link__8aEu8 HeaderSubmenu_submenu__link--green__g7YoO"
                  //   href="/expertise/mobile-apps"
                >
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="SVG_svg-raw-wrap__ODfz9 HeaderSubmenu_submenu__link-icon__Xz8Jl"
                    style={{ "--width": 10, "--height": 12 } as any}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 2H3C2.44772 2 2 2.44772 2 3V9C2 9.55228 2.44772 10 3 10H7C7.55228 10 8 9.55228 8 9V3C8 2.44772 7.55228 2 7 2ZM3 0C1.34315 0 0 1.34315 0 3V9C0 10.6569 1.34315 12 3 12H7C8.65685 12 10 10.6569 10 9V3C10 1.34315 8.65685 0 7 0H3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Mobile Apps
                </a>
              </li>
              <li
                style={{
                  transform:
                    "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                }}
              >
                <a
                  className="HeaderSubmenu_submenu__link__8aEu8 HeaderSubmenu_submenu__link--pink__BfkSt"
                  //   href="/expertise/web-applications"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="SVG_svg-raw-wrap__ODfz9 HeaderSubmenu_submenu__link-icon__Xz8Jl"
                    style={{ "--width": 12, "--height": 12 } as any}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.60585 5.36396L6.77742 2.53553C6.3869 2.14501 5.75373 2.14501 5.36321 2.53553L2.53478 5.36396C2.14425 5.75449 2.14425 6.38765 2.53478 6.77817L5.36321 9.6066C5.75373 9.99713 6.3869 9.99713 6.77742 9.6066L9.60585 6.77817C9.99637 6.38765 9.99637 5.75449 9.60585 5.36396ZM8.19163 1.12132C7.02006 -0.0502524 5.12056 -0.0502524 3.94899 1.12132L1.12057 3.94975C-0.0510073 5.12132 -0.0510076 7.02082 1.12057 8.19239L3.94899 11.0208C5.12056 12.1924 7.02006 12.1924 8.19163 11.0208L11.0201 8.19239C12.1916 7.02082 12.1916 5.12132 11.0201 3.94975L8.19163 1.12132Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Web Apps
                </a>
              </li>
            </ul>
          </div>
          <div
            className="HeaderSubmenu_submenu__group__BIGgm"
            style={{ opacity: 1 }}
          >
            <h2 className="HeaderSubmenu_submenu__heading__CpYC6">
              Industries
            </h2>
            <ul className="HeaderSubmenu_submenu__list__be8NW">
              <li
                style={{
                  transform:
                    "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                }}
              >
                <a
                  className="HeaderSubmenu_submenu__link__8aEu8 HeaderSubmenu_submenu__link--blue__ErsfR"
                  //   href="/expertise/commercial"
                >
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="SVG_svg-raw-wrap__ODfz9 HeaderSubmenu_submenu__link-icon__Xz8Jl"
                    style={{ "--width": 12, "--height": 13 } as any}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.1213 3.06077L2.12132 12.0608L0 9.93945L9 0.939453L11.1213 3.06077Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Commercial
                </a>
              </li>
              <li
                style={{
                  transform:
                    "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                }}
              >
                <a
                  className="HeaderSubmenu_submenu__link__8aEu8 HeaderSubmenu_submenu__link--pink__BfkSt"
                  //   href="/expertise/not-for-profit"
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="SVG_svg-raw-wrap__ODfz9 HeaderSubmenu_submenu__link-icon__Xz8Jl"
                    style={{ "--width": 11, "--height": 11 } as any}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.17079 0.75C2.26199 0.75 1.44956 1.11992 0.904311 1.76364C0.317158 2.39877 0 3.24128 0 4.13043C0 5.07802 0.323512 5.9153 1.04691 6.78369C1.54552 7.39914 2.21378 7.98177 2.94617 8.6203C3.1115 8.76444 3.28006 8.91148 3.45072 9.06235L3.45477 9.06578C3.79967 9.35787 4.14362 9.64917 4.53618 9.98849C4.74727 10.1929 5.01658 10.25 5.25 10.25C5.48342 10.25 5.75273 10.1929 5.96383 9.98848C6.35623 9.64929 6.70007 9.35809 7.04484 9.0661C8.03841 8.23165 8.84204 7.48826 9.44878 6.78886L9.45194 6.78506C10.1761 5.91619 10.5 5.07852 10.5 4.13043C10.5 3.25038 10.2376 2.40216 9.64119 1.75932C9.05234 1.12461 8.24465 0.75 7.37871 0.75C6.67769 0.75 6.07876 0.965379 5.54052 1.39083L5.52967 1.3994L5.26719 1.65874C5.16561 1.5498 5.06047 1.45752 4.95125 1.38434C4.41711 0.964747 3.82141 0.75 3.17079 0.75ZM2.02132 2.77988C2.31819 2.44465 2.6944 2.27717 3.17079 2.27717C3.46899 2.27717 3.75662 2.36054 4.00198 2.56256L4.01226 2.57102L4.02337 2.57834C4.13958 2.65489 4.23114 2.75331 4.31448 2.86311C4.35646 2.9184 4.39489 2.97456 4.43443 3.03278L4.44201 3.04395L4.44202 3.04396C4.47407 3.09118 4.5082 3.14145 4.54299 3.1884C4.69476 3.4674 4.98115 3.59783 5.25619 3.59783C5.53764 3.59783 5.8319 3.46297 6.00583 3.18799L6.01222 3.17789L6.01762 3.16723C6.10506 2.99443 6.27801 2.74178 6.52613 2.57834L6.53425 2.573L6.54192 2.56704C7.11826 2.11962 7.96241 2.22972 8.48089 2.78237C8.782 3.12372 8.9604 3.60019 8.9604 4.13043C8.9604 4.6876 8.74875 5.17136 8.27414 5.78203C7.78785 6.34884 7.09686 6.95881 6.25618 7.70093L6.25617 7.70093L6.02826 7.90221C5.91338 7.99693 5.80593 8.09167 5.69984 8.18521L5.69984 8.18521L5.69983 8.18522C5.55523 8.31272 5.41315 8.43799 5.25824 8.55791C5.0105 8.35373 4.75775 8.14447 4.47098 7.90161L4.4693 7.90021C3.52618 7.1155 2.75462 6.44672 2.22866 5.78563C1.75209 5.17326 1.5396 4.6887 1.5396 4.13043C1.5396 3.59889 1.71887 3.1214 2.02132 2.77988Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Not for Profit
                </a>
              </li>
              <li
                style={{
                  transform:
                    "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                }}
              >
                <a
                  className="HeaderSubmenu_submenu__link__8aEu8 HeaderSubmenu_submenu__link--green__g7YoO"
                  //   href="/expertise/ecommerce"
                >
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="SVG_svg-raw-wrap__ODfz9 HeaderSubmenu_submenu__link-icon__Xz8Jl"
                    style={{ "--width": 8, "--height": 12 } as any}
                  >
                    <path
                      d="M8 8.15548C8 9.63958 6.84672 10.8551 4.59854 10.9258V12H3.72263V10.8975C1.64964 10.6996 0.0875913 9.5689 0 7.49117H1.69343C1.76642 8.65018 2.49635 9.31449 3.72263 9.4841V6.40283L3.59124 6.36042C2.07299 5.95053 0.394161 5.34276 0.394161 3.56184C0.394161 1.95053 1.67883 0.876325 3.72263 0.819788V0H4.59854V0.862191C6.35037 1.08834 7.64964 2.19081 7.75183 4H6.05839C5.94161 3.053 5.40146 2.48763 4.59854 2.28975V5.04594C6.49635 5.59717 8 6.12014 8 8.15548ZM2.07299 3.40636C2.07299 4.18375 2.74453 4.4947 3.72263 4.79152V2.21908C2.71533 2.26148 2.07299 2.71378 2.07299 3.40636ZM4.59854 9.5265C5.76642 9.46996 6.30657 8.947 6.30657 8.18375C6.30657 7.36396 5.75183 7.0106 4.59854 6.65724V9.5265Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M3.26894 0H4.73264V11.9986H3.26894V0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  eCommerce
                </a>
              </li>
              <li
                style={{
                  transform:
                    "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                }}
              >
                <a
                  className="HeaderSubmenu_submenu__link__8aEu8 HeaderSubmenu_submenu__link--yellow__zn3eA"
                  //   href="/expertise/education"
                >
                  <svg
                    width="11"
                    height="12"
                    viewBox="0 0 11 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="SVG_svg-raw-wrap__ODfz9 HeaderSubmenu_submenu__link-icon__Xz8Jl"
                    style={{ "--width": 11, "--height": 12 } as any}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 0.5H0V1C0 6.79021 4.70979 11.5 10.5 11.5H11V8.5H10.5C6.36501 8.5 3 5.13519 3 1V0.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Education
                </a>
              </li>
              <li
                style={{
                  transform:
                    "translateX(0%) translateY(0%) rotate(0deg) translateZ(0px);",
                }}
              >
                <a
                  className="HeaderSubmenu_submenu__link__8aEu8 HeaderSubmenu_submenu__link--purple__lM_G4"
                  //   href="/expertise/startups"
                >
                  <svg
                    width="13"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13 12"
                    fill="none"
                    className="SVG_svg-raw-wrap__ODfz9 HeaderSubmenu_submenu__link-icon__Xz8Jl"
                    style={{ "--width": 13, "--height": 12 } as any}
                  >
                    <path
                      d="M10.9408 2.59333C10.4741 2.12 10.0074 1.69333 9.80076 1.78C9.46742 1.91333 9.80076 2.46667 10.0008 2.79333C10.1674 3.07333 11.9074 5.38667 11.9074 7C11.9074 7.85333 11.5874 8.56 11.0141 8.98667C10.5141 9.36 9.85409 9.47333 9.25409 9.29333C8.54076 9.08667 7.95409 8.36 7.21409 7.44667C6.40742 6.45333 5.32742 5.15333 4.49409 5.15333C3.40742 5.15333 3.39409 5.82667 3.32076 6.34667C5.84075 6.77333 6.90742 8.79333 6.90742 9.92667C6.90742 11.06 5.94742 11.9867 4.76742 11.9867C3.68075 11.9867 1.90742 11.1 1.64075 7.92H0.00075531V6.25333H1.64742C1.74742 5.15333 2.37409 3.45333 4.33409 3.45333C5.83409 3.45333 7.12075 4.72667 7.62742 5.34667C8.01409 5.83333 9.00075 7 9.15409 7.16C9.32076 7.36 9.60742 7.72 9.89409 7.72C10.1941 7.72 10.3741 7.16667 10.1341 6.44C9.90075 5.71333 9.20075 4.53333 8.90075 4.09333C8.38075 3.33333 8.03409 2.81333 8.03409 1.90667C8.03409 0.46 9.12742 0 9.70742 0C10.5874 0 11.3541 0.666667 11.5208 0.833333C11.7608 1.07333 11.9608 1.27333 12.1074 1.45333L10.9408 2.59333ZM4.74742 10.3667C4.95409 10.3667 5.24076 10.1933 5.24076 9.88667C5.24076 9.48667 4.75409 8.42 3.32742 8.04667C3.52742 9.84 4.28076 10.3667 4.74742 10.3667Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Startups
                </a>
              </li>
            </ul>
          </div>
        </motion.nav>
      )}
    </div>
  );
};

export default ExpertiseDropDown;
