import { groq } from "next-sanity";
import { client } from "./client";
import IProject, { HomePageContentType } from "@/types";

export async function getHomePageContent(): Promise<HomePageContentType> {
  return client.fetch(
    groq`*[_type == "homePageContent"][0]{
      _id,
      bottomContent {
        bottomContentDescriptionText,
        bottomContentHeadingText,
        bottomContentStats,
        bottomContentImage {alt, "bottomContentImage":asset->url}
      },
      "companiesLogos": companiesLogos[].asset->url,
      headingText,
      showCaseHeadingText,
      "showReelVideo":showReelVideo.asset->url 
    }`
  );
}

export async function getAllProjects(): Promise<IProject[]> {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      "assets": assets[].asset->url,
      category,
      contents,
      "coverImage":coverImage.asset->url,
      description,
      isHomePageProject,
      "nextProjectSlug":nextProject.current,
      "slug":slug.current,
      title,
      url,
    }`
  );
}
export async function getOneProject(projectSlug: string): Promise<IProject> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $projectSlug][0]{
      _id,
      "assets": assets[].asset->url,
      category,
      contents,
      "coverImage":coverImage.asset->url,
      description,
      isHomePageProject,
      "nextProjectSlug":nextProject.current,
      "slug":slug.current,
      title,
      url,
    }`,
    { projectSlug }
  );
}
export async function getHomePageProjects(): Promise<IProject[]> {
  return client.fetch(
    groq`*[_type == "project" && isHomePageProject == true]{
      _id,
      "assets": assets[].asset->url,
      category,
      contents,
      "coverImage":coverImage.asset->url,
      description,
      isHomePageProject,
      "nextProjectSlug":nextProject.current,
      "slug":slug.current,
      title,
      url,
    }`
  );
}

// export async function getHomePageVideo(): Promise<HomePageVideoType> {
//   return client.fetch(
//     groq`*[_type == "homePageVideo"][0]{
//       _id,
//       "video":video.asset->url
//     }`
//   );
// }
