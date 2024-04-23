import { defineField } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "aboutPageContent",
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
      name: "headingTextHidden",
      title: "Heading text hidden",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headingImage",
      title: "Heading image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "descriptionTextBlock",
      title: "About desctiption text",
      type: "text",
    }),
    defineField({
      name: "collaborations",
      title: "Collaborations block",
      type: "object",
      fields: [
        defineField({
          name: "collabsText",
          title: "Collaborations heading text",
          type: "text",
        }),
        {
          name: "companiesLogos",
          title: "Companies Logos",
          type: "array",
          description: "Add logos of companies you worked with",
          of: [
            {
              type: "object",
              name: "companyData",
              fields: [
                { type: "image", name: "companyLogo" },
                { type: "string", name: "companyName" },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "capabilites",
      title: "Capabilities block",
      type: "object",
      fields: [
        defineField({
          name: "capabilitiesText",
          title: "Capabilities heading text",
          type: "text",
        }),
        {
          name: "expertiseList",
          title: "List of expertise",
          type: "array",
          of: [
            {
              type: "object",
              name: "expertiseBlock",
              fields: [
                { type: "string", name: "expertiseHeading" },
                {
                  type: "array",
                  name: "expertiseDetails",
                  of: [{ type: "string" }],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "reviewsList",
      title: "List of reviews",
      type: "array",
      of: [
        {
          type: "object",
          name: "reviewData",
          fields: [
            { type: "string", name: "reviewersName", title: "Reviewer's name" },
            {
              type: "text",
              name: "reviewText",
              title: "Text of review",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "aboutUs",
      title: "About us",
      type: "object",
      fields: [
        defineField({
          name: "aboutUsHeading",
          title: "About us heading text",
          type: "text",
        }),
        {
          name: "whatWeDo",
          title: "What we do",
          type: "object",
          fields: [
            defineField({
              name: "whatWeDoHeading",
              title: "What we do heading text",
              type: "string",
            }),
            {
              name: "whatWeDoList",
              title: "What we do list",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
        {
          name: "whatWeDont",
          title: "What we don't",
          type: "object",
          fields: [
            defineField({
              name: "whatWeDontHeading",
              title: "What we don't heading text",
              type: "string",
            }),
            {
              name: "whatWeDontList",
              title: "What we don't list",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
  ],
};
