export default interface IProject {
  contents: {
    ru: string;
    en: string;
  };
  coverImage: string;
  coverImagePortrait: string;
  description: {
    ru: string;
    en: string;
  };
  nextProjectSlug: string;
  url: string;
  title: {
    ru: string;
    en: string;
  };
  _id: string;
  assets: string[];
  category: {
    ru: string;
    en: string;
  };
  isHomePageProject: boolean;
  slug: string;
  embeddedVideoUrl?: string;
  listOfTags: {
    ru: string[];
    en: string[];
  };
}
