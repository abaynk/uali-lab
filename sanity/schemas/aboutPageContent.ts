import { defineField } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "aboutPageContent",
  type: "document",
  fields: [
    defineField({
      name: "docTitle",
      type: "string",
      title: "Document Title",
      initialValue: "Home Page Content",
      hidden: true,
    }),
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
      name: "headingTextHidden",
      title: "Heading text hidden",
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
      name: "headingImage",
      title: "Heading image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "descriptionTextBlock",
      title: "About desctiption text",
      type: "object",
      fields: [
        defineField({
          name: "ru",
          title: "Rus",
          type: "text",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "en",
          title: "Eng",
          type: "text",
        }),
      ],
    }),
    defineField({
      name: "collaborations",
      title: "Collaborations block",
      type: "object",
      fields: [
        defineField({
          name: "collabsTextRu",
          title: "Collaborations heading text in Rus",
          type: "text",
        }),
        defineField({
          name: "collabsTextEn",
          title: "Collaborations heading text in Eng",
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
          name: "capabilitiesTextRu",
          title: "Capabilities heading text in Rus",
          type: "text",
        }),
        {
          name: "expertiseListRu",
          title: "List of expertise in Rus",
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
        defineField({
          name: "capabilitiesTextEn",
          title: "Capabilities heading text in Eng",
          type: "text",
        }),
        {
          name: "expertiseListEn",
          title: "List of expertise in Eng",
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
            {
              type: "object",
              name: "reviewersName",
              title: "Reviewer's name",
              fields: [
                { type: "string", name: "ru" },
                { type: "string", name: "en" },
              ],
            },
            {
              type: "object",
              name: "reviewText",
              title: "Text of review",
              fields: [
                { type: "text", name: "ru" },
                { type: "text", name: "en" },
              ],
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
          name: "aboutUsHeadingRu",
          title: "About us heading text in Rus",
          type: "text",
        }),
        defineField({
          name: "aboutUsHeadingEn",
          title: "About us heading text in Eng",
          type: "text",
        }),
        {
          name: "whatWeDo",
          title: "What we do",
          type: "object",
          fields: [
            defineField({
              name: "whatWeDoHeadingRu",
              title: "What we do heading text in Rus",
              type: "string",
            }),
            {
              name: "whatWeDoListRu",
              title: "What we do list in Rus",
              type: "array",
              of: [{ type: "string" }],
            },
            defineField({
              name: "whatWeDoHeadingEn",
              title: "What we do heading text in Eng",
              type: "string",
            }),
            {
              name: "whatWeDoListEn",
              title: "What we do list in Eng",
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
              name: "whatWeDontHeadingRu",
              title: "What we don't heading text in Rus",
              type: "string",
            }),
            {
              name: "whatWeDontListRu",
              title: "What we don't list in Rus",
              type: "array",
              of: [{ type: "string" }],
            },
            defineField({
              name: "whatWeDontHeadingEn",
              title: "What we don't heading text in Eng",
              type: "string",
            }),
            {
              name: "whatWeDontListEn",
              title: "What we don't list in Eng",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
  ],
};
