import { defineField } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "homePageContent",
  type: "document",
  label: "",
  fields: [
    defineField({
      name: "headingText",
      title: "Heading text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "showReelVideo",
      type: "file",
      title: "Show Reel video",
      description: "Upload file",
      options: {
        accept: "video/*",
      },
    }),
    defineField({
      name: "showCaseHeadingText",
      title: "Show Case Heading Text",
      type: "string",
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
          type: "string",
        },
        {
          name: "bottomContentDescriptionText",
          title: "Description Text",
          description: "Bottom content description text",
          type: "string",
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
                  type: "string",
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
