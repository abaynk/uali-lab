import { defineField } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "contactsPageContent",
  type: "document",
  label: "",
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
      validation: (rule) => rule.required(),
      fields: [
        {
          name: "ru",
          title: "Heading text in Rus",
          type: "string",
        },
        {
          name: "en",
          title: "Heading text in Eng",
          type: "string",
        },
      ],
    }),
  ],
};
