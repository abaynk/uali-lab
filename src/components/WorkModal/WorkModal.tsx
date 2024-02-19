"use client";

import React from "react";
import styles from "./WorkModal.module.scss";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
type Props = {};

export const WorkModal = (props: Props) => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
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
                <Link href={pathname}>
                  <button
                    className="ModalCloseButton_modal-close-button___iKD_ SmoothModal_modal-close__Sul5C"
                    aria-label="Close Dialog"
                    style={{
                      transform:
                        "translateX(0px) translateY(0px) translateZ(0px);",
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
                </Link>
                <main className="SmoothModal_modal-content__DCcjC">
                  <div className="ProjectContents_project-content__y3B8f project-content">
                    <div className="ProjectContents_project-content__body__KX_Wu">
                      Modal
                    </div>
                    <footer className="ProjectContents_project-footer__6CKKh">
                      <h2 className="ProjectContents_project-footer__heading__PW9rG">
                        Up Next
                      </h2>
                    </footer>
                  </div>
                </main>
              </div>
            </div>
          </div>
          <div tabIndex={-1}></div>
          <div tabIndex={0}></div>
        </div>
      )}
    </>
  );
};
