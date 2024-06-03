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

export async function getWorkPageContent(): Promise<{
  headingText: { ru: string; en: string };
}> {
  return client.fetch(
    groq`*[_type == "workPageContent"][0]{
      _id,
      headingText {
        ru,
        en
      },
    }`
  );
}

export async function getContactsPageContent(): Promise<{
  headingText: { ru: string; en: string };
}> {
  return client.fetch(
    groq`*[_type == "contactsPageContent"][0]{
      _id,
      headingText {
        ru,
        en
      },
    }`
  );
}

export async function getAllProjects(): Promise<IProject[]> {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      "coverImage":coverImage.asset->url,
      "coverImagePortrait":coverImagePortrait.asset->url,
      "slug":slug.current,
      title {
        ru,
        en
      },
      _createdAt,
      orderRank
    }| order(orderRank)`
  );
}
export async function getOneProject(projectSlug: string): Promise<IProject> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $projectSlug][0]{
      _id,
      "assets": assets[].asset->url,
      category {
        ru,
        en
      },
      contents {
        ru,
        en
      },
      listOfTags {
        ru[],
        en[]
      },
      "coverImage":coverImage.asset->url,
      "coverImagePortrait":coverImagePortrait.asset->url,
      description {
        ru,
        en
      },
      isHomePageProject,
      "nextProjectSlug":nextProject.current,
      "slug":slug.current,
      title {
        ru,
        en
      },
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
      "coverImage":coverImage.asset->url,
      "coverImagePortrait":coverImagePortrait.asset->url,
      "slug":slug.current,
      title {
        ru,
        en
      },
    }`
  );
}

export async function getNextProjectInfo(
  projectSlug: string
): Promise<IProject> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $projectSlug][0]{
      _id,
      "coverImage":coverImage.asset->url,
      "coverImagePortrait":coverImagePortrait.asset->url,
      "slug":slug.current,
      title {
        ru,
        en
      },
    }`,
    { projectSlug }
  );
}
