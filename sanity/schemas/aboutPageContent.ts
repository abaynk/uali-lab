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
      type: "string",
    }),
    defineField({
      name: "collaborations",
      title: "Collaborations block",
      type: "object",
      fields: [
        defineField({
          name: "collabsText",
          title: "Collaborations heading text",
          type: "string",
        }),
        //add fields for companies
      ],
    }),
  ],
};
