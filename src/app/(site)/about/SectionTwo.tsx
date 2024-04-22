/* eslint-disable @next/next/no-img-element */
import { AboutPageContent } from "@/types";

const SectionTwo = ({
  aboutPageContent,
}: {
  aboutPageContent: AboutPageContent;
}) => {
  return (
    <div className="">
      <div className="page_about-logos__Phajx">
        <h2 className="page_about-logos__intro__h1kg7">
          Since 2010 we’ve been working with amazing clients to create
          meaningful impact and compelling experiences.
        </h2>
        <ul className="LogoGrid_logo-grid__LxhC6">
          {aboutPageContent?.collaborations?.companiesLogos?.map(
            (company, index) => {
              return (
                <li
                  key={index}
                  className="LogoGrid_logo-grid__item__6n9iV"
                  style={{ opacity: 1, transform: "translateX(0px);" }}
                >
                  <span className="hidden">{company.companyName}</span>
                  <img
                    src={company.companyLogo}
                    alt=""
                    width={141}
                    height={20}
                    className="SVG_svg-raw-wrap__ODfz9 LogoGrid_logo-grid__logo__QVdkc"
                  />
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};
export default SectionTwo;
