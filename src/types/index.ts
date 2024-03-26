export type { default } from "./ProjectType";

export type HomePageContentType = {
  _id: string;
  bottomContent: {
    bottomContentDescriptionText: string;
    bottomContentHeadingText: string;
    bottomContentImage: {
      alt: string;
      url: string;
    };
    bottomContentStats: any[];
  };
  companiesLogos: string[];
  headingText: string;
  showCaseHeadingText: string;
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
  headingText: string;
  headingTextHidden: string;
  headingImage: {
    alt: string;
    url: string;
  };
  descriptionTextBlock: string;
  collaborations: {
    collabsText: string;
  };
};
