import { defineField } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "workPageContent",
  type: "document",
  label: "",
  fields: [
    defineField({
      name: "headingText",
      title: "Heading text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
};
