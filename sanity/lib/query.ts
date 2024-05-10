import { groq } from "next-sanity";
import { client } from "./client";
import IProject, { AboutPageContent, HomePageContentType } from "@/types";

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
      showReel {
        "showReelVideo":showReelVideo.asset->url,
        showReelVideoThumbnail{alt,"url":asset->url}
      }
    }`
  );
}

export async function getAboutPageContent(): Promise<AboutPageContent> {
  return client.fetch(
    groq`*[_type == "aboutPageContent"][0]{
      _id,
      headingText,
      headingTextHidden,
      headingImage {alt, "headingImage":asset->url},
      descriptionTextBlock,
      collaborations {
        collabsTextRu, 
        collabsTextEn, 
        "companiesLogos":companiesLogos[] {
          "companyLogo":companyLogo.asset->url,
          companyName
        }
      },
      capabilites {
        capabilitiesTextRu,
        capabilitiesTextEn,
        "expertiseListRu": expertiseListRu[] {
          expertiseHeading,
          "expertiseDetails":expertiseDetails[]
        },
        "expertiseListEn": expertiseListEn[] {
          expertiseHeading,
          "expertiseDetails":expertiseDetails[]
        }
      },
      "reviewsList":reviewsList[] {
        reviewersName,
        reviewText
      },
      aboutUs {
        aboutUsHeadingRu,
        aboutUsHeadingEn,
        whatWeDo {
          whatWeDoHeadingRu,
          whatWeDoHeadingEn,
          "whatWeDoListRu":whatWeDoListRu[],
          "whatWeDoListEn":whatWeDoListEn[]
        },
        whatWeDont {
          whatWeDontHeadingRu,
          whatWeDontHeadingEn,
          "whatWeDontListRu":whatWeDontListRu[],
          "whatWeDontListEn":whatWeDontListEn[]
        }
      }
    }`
  );
}

export async function getWorkPageContent(): Promise<any> {
  return client.fetch(
    groq`*[_type == "workPageContent"][0]{
      _id,
      headingText,
    }`
  );
}

export async function getContactsPageContent(): Promise<any> {
  return client.fetch(
    groq`*[_type == "contactsPageContent"][0]{
      _id,
      headingText,
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
      "coverImagePortrait":coverImagePortrait.asset->url,
      description,
      isHomePageProject,
      "nextProjectSlug":nextProject.current,
      "slug":slug.current,
      title,
      url,
      _createdAt,
      _updatedAt
    }| order(_createdAt asc)`
  );
}
export async function getOneProject(projectSlug: string): Promise<IProject> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $projectSlug][0]{
      _id,
      "assets": assets[].asset->url,
      category,
      contents,
      "listOfTags": listOfTags[],
      "coverImage":coverImage.asset->url,
      "coverImagePortrait":coverImagePortrait.asset->url,
      description,
      isHomePageProject,
      "nextProjectSlug":nextProject.current,
      "slug":slug.current,
      title,
      url,
      embeddedVideoUrl
    }`,
    { projectSlug }
  );
}
export async function getHomePageProjects(): Promise<IProject[]> {
  return client.fetch(
    groq`*[_type == "project" && isHomePageProject == true][0...5] | order(_createdAt asc){
      _id,
      "assets": assets[].asset->url,
      category,
      contents,
      "coverImage":coverImage.asset->url,
      "coverImagePortrait":coverImagePortrait.asset->url,
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
