import { groq } from "next-sanity";
import { client } from "./client";
import { HomePageContentType } from "@/types";

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

// export async function getHomePageVideo(): Promise<HomePageVideoType> {
//   return client.fetch(
//     groq`*[_type == "homePageVideo"][0]{
//       _id,
//       "video":video.asset->url
//     }`
//   );
// }
