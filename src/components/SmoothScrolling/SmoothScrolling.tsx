"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
type Props = {};

function SmoothScrolling({ children }: { children: any }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.3,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
