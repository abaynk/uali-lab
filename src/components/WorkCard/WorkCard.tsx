import React, { ImgHTMLAttributes } from "react";
import styles from "./WorkCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import Parallax from "../Parallax";
import IProject from "@/types";

interface Props {
  isPortrait?: boolean;
  project: IProject;
}

const WorkCard = ({ isPortrait = false, project }: Props) => {
  return (
    <div
      className="WorkCard_work-card-wrapper__7mGrZ"
      style={
        {
          "--aspect-x": isPortrait ? 710 : 1452,
          "--aspect-y": 890,
          opacity: 1,
          transform: "translateY(0px)",
        } as any
      }
    >
      <Link
        className={`WorkCard_work-card__Z7y63 ${
          isPortrait
            ? "WorkCard_work-card--portrait__WHYgm"
            : "WorkCard_work-card--landscape__cw0_a"
        }`}
        href={`/work/${project?.slug}`}
      >
        <div className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
          <Parallax
            speed={1}
            className="WorkCard_work-card__thumbnail-outer__kJvp9 "
          >
            <picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
              <img
                src={project?.coverImage}
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
              {project?.title}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkCard;
