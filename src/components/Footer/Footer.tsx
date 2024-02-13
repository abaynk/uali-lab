import React from "react";
import styles from "./Footer.module.scss";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Let`s make something click</h2>
      </div>
    </footer>
  );
};
