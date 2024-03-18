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
