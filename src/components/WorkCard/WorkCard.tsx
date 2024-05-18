import React, { ImgHTMLAttributes, useRef } from "react";
import styles from "./WorkCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import Parallax from "../Parallax";
import IProject from "@/types";
import { AnimatePresence, motion, useInView } from "framer-motion";

interface Props {
  isPortrait?: boolean;
  project: IProject;
  lng?: "ru" | "en";
}

const WorkCard = ({ isPortrait = false, project, lng = "ru" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div
      ref={ref}
      className="WorkCard_work-card-wrapper__7mGrZ"
      style={
        {
          "--aspect-x": isPortrait ? 710 : 1452,
          "--aspect-y": 890,
          opacity: !isInView ? 0 : 1,
          transform: !isInView ? "translateY(50px)" : "translateY(0px)",
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        } as any
      }
    >
      <Link
        className={`WorkCard_work-card__Z7y63 ${
          isPortrait
            ? "WorkCard_work-card--portrait__WHYgm"
            : "WorkCard_work-card--landscape__cw0_a"
        }`}
        href={`/${lng}/work/${project?.slug}`}
        scroll={false}
        prefetch={true}
      >
        <div className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
          <Parallax
            speed={1}
            className="WorkCard_work-card__thumbnail-outer__kJvp9 "
          >
            <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
              <img
                src={
                  isPortrait
                    ? project?.coverImagePortrait ?? project?.coverImage
                    : project?.coverImage
                }
                loading="lazy"
                width={450}
                height={isPortrait ? 677 : 330}
                alt=""
                className=""
                draggable="false"
              />
            </picture>
          </Parallax>
        </div>
        <div className="WorkCard_work-card__content__Br9N4 WorkCard_work-card__content--white__ISlcm">
          <div className="WorkCard_work-card__content-inner__8Mqvf">
            <h3 className="WorkCard_work-card__title__vsvFl">
              {project?.title?.[lng] ?? project?.title?.ru}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkCard;
