import React, { ImgHTMLAttributes } from "react";
import styles from "./WorkCard.module.scss";
import Image from "next/image";

interface Props {
  src?: any;
}

export const WorkCard = ({ src }: Props) => {
  return (
    <div className={styles.root}>
      <Image alt="" src={src} className={styles.image} fill={true} />
    </div>
  );
};
