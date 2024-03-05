import React from "react";

type Props = {
  isPortrait?: boolean;
  children?: any;
};

export const WorkGridRow = ({ isPortrait, children }: Props) => {
  return (
    <div
      className={`WorkGrid_work-grid__row__p9SUz ${
        isPortrait
          ? "WorkGrid_work-grid__row--portrait__nwacA"
          : "WorkGrid_work-grid__row--landscape__klf5g"
      }`}
    >
      {children}
    </div>
  );
};
