import { AboutPageContent } from "@/types";
import React from "react";

type Props = {};

const SectionThree = ({
  aboutPageContent,
  lng,
}: {
  aboutPageContent: AboutPageContent;
  lng: "en" | "ru";
}) => {
  return (
    <div className="page_about-capabilities___ABbo">
      <h2 className="page_about-capabilities__intro__a_C8E">
        {aboutPageContent?.capabilites[
          `capabilitiesText${lng === "en" ? "En" : "Ru"}`
        ] ?? aboutPageContent?.capabilites[`capabilitiesTextRu`]}
      </h2>
      <div className="page_about-capabilities__grid__A2OrT">
        {(
          aboutPageContent?.capabilites[
            `expertiseList${lng === "en" ? "En" : "Ru"}`
          ] ?? aboutPageContent?.capabilites[`expertiseListRu`]
        )?.map((expertise, index) => (
          <section
            key={`section_${index}`}
            className="page_about-column__wXV9r"
            style={{ opacity: 1, transform: "translateX(0px);" }}
          >
            <h3 className="page_about-column__heading__aQVmz">
              {expertise?.expertiseHeading}
            </h3>
            <ul className="page_about-column__list__6pLAS">
              {expertise?.expertiseDetails?.map((detail, index) => (
                <li key={`detail_index`}>{detail}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
