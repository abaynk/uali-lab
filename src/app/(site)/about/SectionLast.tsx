import { AboutPageContent } from "@/types";
import React from "react";

type Props = {};

const SectionLast = ({
  aboutPageContent,
}: {
  aboutPageContent: AboutPageContent;
}) => {
  return (
    <div>
      <div className="page_about-dos-donts__M210R">
        <h2 className="page_about-dos-donts__intro__aJGrk">
          {aboutPageContent?.aboutUs?.aboutUsHeading}
        </h2>
        <div className="page_about-dos-donts__grid__NOGxN">
          <section
            className="page_about-column__wXV9r"
            style={{ opacity: 1, transform: "translateX(0px);" }}
          >
            <h3 className="page_about-column__heading__aQVmz">
              {aboutPageContent?.aboutUs?.whatWeDo?.whatWeDoHeading}
            </h3>
            <ul className="page_about-column__list__6pLAS">
              {aboutPageContent?.aboutUs?.whatWeDo?.whatWeDoList.map(
                (dos, index) => {
                  return <li key={index}>{dos}</li>;
                }
              )}
            </ul>
          </section>
          <section
            className="page_about-column__wXV9r"
            style={{ opacity: 1, transform: "translateX(0px);" }}
          >
            <h3 className="page_about-column__heading__aQVmz">
              <span>
                {" "}
                {aboutPageContent?.aboutUs?.whatWeDont?.whatWeDontHeading}
              </span>
            </h3>
            <ul className="page_about-column__list__6pLAS">
              {aboutPageContent?.aboutUs?.whatWeDont?.whatWeDontList.map(
                (dos, index) => {
                  return <li key={index}>{dos}</li>;
                }
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SectionLast;
