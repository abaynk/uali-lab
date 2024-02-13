"use client";

import React from "react";
import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

export const Navbar = (props: Props) => {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li
          className={`${styles.item} ${
            pathname === "/" && styles["item--active"]
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${styles.item} ${
            pathname === "/about" && styles["item--active"]
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`${styles.item} ${
            pathname === "/work" && styles["item--active"]
          }`}
        >
          <Link href="/work">Work</Link>
        </li>
        <li
          className={`${styles.item} ${
            pathname === "/contact" && styles["item--active"]
          }`}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
