export default interface IProject {
  contents: string;
  coverImage: string;
  coverImagePortrait: string;
  description: string;
  nextProjectSlug: string;
  url: string;
  title: string;
  _id: string;
  assets: string[];
  category: string;
  isHomePageProject: boolean;
  slug: string;
  embeddedVideoUrl?: string;
}
