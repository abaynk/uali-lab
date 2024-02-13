import React from "react";
import styles from "./Header.module.scss";
import { Navbar } from "../Navbar";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className={styles.root}>
      <p>HUMAAN</p>
      <Navbar />
    </header>
  );
};
