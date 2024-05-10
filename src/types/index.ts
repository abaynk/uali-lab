export type { default } from "./ProjectType";

export type HomePageContentType = {
  _id: string;
  bottomContent: {
    bottomContentDescriptionText: {
      ru: string;
      en: string;
    };
    bottomContentHeadingText: {
      ru: string;
      en: string;
    };
    bottomContentImage: {
      alt: string;
      url: string;
    };
    bottomContentStats: any[];
  };
  companiesLogos: string[];
  headingText: {
    ru: string;
    en: string;
  };
  showCaseHeadingText: {
    ru: string;
    en: string;
  };
  showReel: {
    showReelVideo: string;
    showReelVideoThumbnail: {
      alt: string;
      url: string;
    };
  };
};

export type AboutPageContent = {
  _id: string;
  headingText: {
    ru: string;
    en: string;
  };
  headingTextHidden: {
    ru: string;
    en: string;
  };
  headingImage: {
    alt: string;
    headingImage: string;
  };
  descriptionTextBlock: {
    ru: string;
    en: string;
  };
  collaborations: {
    collabsTextRu: string;
    collabsTextEn: string;
    companiesLogos?: { companyLogo: string; companyName: string }[];
  };
  capabilites: {
    capabilitiesTextRu: string;
    capabilitiesTextEn: string;
    expertiseListRu: {
      expertiseHeading: string;
      expertiseDetails: string[];
    }[];
    expertiseListEn: {
      expertiseHeading: string;
      expertiseDetails: string[];
    }[];
  };
  reviewsList: {
    reviewersName: {
      ru: string;
      en: string;
    };
    reviewText: {
      ru: string;
      en: string;
    };
  }[];
  aboutUs: {
    aboutUsHeadingRu: string;
    aboutUsHeadingEn: string;
    whatWeDo: {
      whatWeDoHeadingRu: string;
      whatWeDoHeadingEn: string;
      whatWeDoListRu: string[];
      whatWeDoListEn: string[];
    };
    whatWeDont: {
      whatWeDontHeadingRu: string;
      whatWeDontHeadingEn: string;
      whatWeDontListRu: string[];
      whatWeDontListEn: string[];
    };
  };
};
