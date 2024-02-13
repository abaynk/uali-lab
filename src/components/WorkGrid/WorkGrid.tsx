import React, { useState } from "react";
import styles from "./WorkGrid.module.scss";
import { WorkCard } from "../WorkCard";

type Props = { setIsModalOpen: any };

export const WorkGrid = ({ setIsModalOpen }: Props) => {
  return (
    <div className={`grid grid-cols-2 gap-8 ${styles.root}`}>
      <div
        className={styles.parallax}
        id="one"
        onClick={() => setIsModalOpen(true)}
      ></div>
      <div
        className={styles.parallax}
        id="two"
        onClick={() => setIsModalOpen(true)}
      ></div>
    </div>
  );
};
