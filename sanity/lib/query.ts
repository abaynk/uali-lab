import { groq } from "next-sanity";
import { client } from "./client";
import { homePageContentType, HomePageVideoType } from "@/types";

export async function getHomePageContent(): Promise<any> {
  return client.fetch(
    groq`*[_type == "homePageHeadingText"][0]{
      _id,
      text
    }`
  );
}

export async function getHomePageVideo(): Promise<HomePageVideoType> {
  return client.fetch(
    groq`*[_type == "homePageVideo"][0]{
      _id,
      "video":video.asset->url
    }`
  );
}
