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
  showReelVideo: string;
};
