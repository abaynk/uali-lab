import { title } from "process";
import { defineField } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "homePageContent",
  type: "document",
  preview: {
    select: {
      title: "headingText.ru",
    },
    prepare: ({ title }: any) => {
      return {
        title,
      };
    },
  },
  fields: [
    defineField({
      name: "headingText",
      title: "Heading text",
      type: "object",
      fields: [
        defineField({
          name: "ru",
          title: "Rus",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "en",
          title: "Eng",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "showReel",
      title: "Show reel video",
      type: "object",
      fields: [
        defineField({
          name: "showReelVideo",
          type: "file",
          title: "Video",
          description: "Upload video file",
          validation: (rule) => rule.required(),
          options: {
            accept: "video/*",
          },
        }),
        defineField({
          name: "showReelVideoThumbnail",
          type: "image",
          title: "Video thumbnail",
          description: "Upload image",
        }),
      ],
    }),
    defineField({
      name: "showCaseHeadingText",
      title: "Show Case Heading Text",
      type: "object",
      fields: [
        defineField({
          name: "ru",
          title: "Rus",
          type: "text",
        }),
        defineField({
          name: "en",
          title: "Eng",
          type: "text",
        }),
      ],
    }),
    defineField({
      name: "companiesLogos",
      title: "Companies Logos",
      type: "array",
      description: "Add logos of companies for show case",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "bottomContent",
      title: "Bottom content",
      type: "object",
      fields: [
        {
          name: "bottomContentHeadingText",
          title: "Heading text",
          description: "Bottom content heading text",
          type: "object",
          fields: [
            {
              name: "ru",
              title: "Rus",
              description: "Bottom content heading text in Rus",
              type: "text",
            },
            {
              name: "en",
              title: "Eng",
              description: "Bottom content heading text in Eng",
              type: "text",
            },
          ],
        },
        {
          name: "bottomContentDescriptionText",
          title: "Description Text",
          description: "Bottom content description text",
          type: "object",
          fields: [
            {
              name: "ru",
              title: "Rus",
              description: "Bottom content description text in Rus",
              type: "text",
            },
            {
              name: "en",
              title: "Eng",
              description: "Bottom content description text in Eng",
              type: "text",
            },
          ],
        },
        {
          name: "bottomContentStats",
          title: "Stats",
          type: "array",
          description: "Add statistics for bottom content",
          of: [
            {
              type: "object",
              icon: null,
              fields: [
                {
                  name: "bottomContentStatsHeading",
                  title: "Heading",
                  type: "string",
                },
                {
                  name: "bottomContentStatsDescription",
                  title: "Description",
                  type: "object",
                  fields: [
                    {
                      name: "ru",
                      title: "Rus",
                      type: "string",
                    },
                    {
                      name: "en",
                      title: "Eng",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "bottomContentImage",
          title: "Image",
          type: "image",
          description: "Upload image for bottom content",
        },
      ],
    }),
  ],
};
