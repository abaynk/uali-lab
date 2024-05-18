import { defineField } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "project",
  type: "document",
  title: "Project",
  preview: {
    select: {
      title: "title.ru",
      image: "coverImage.asset",
    },
    prepare: ({ image, title }: any) => {
      return {
        title,
        media: image,
      };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "object",
      fields: [
        {
          name: "ru",
          title: "Title in Rus",
          type: "string",
        },
        {
          name: "en",
          title: "Title in Eng",
          type: "string",
        },
      ],
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "Generate slug for project. This is needed for navigation!",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      type: "image",
      title: "Cover image (Landscape)",
    }),
    {
      name: "coverImagePortrait",
      type: "image",
      title: "Cover image (Portrait)",
    },
    defineField({
      name: "description",
      title: "Description",
      type: "object",
      fields: [
        {
          name: "ru",
          title: "Description in Rus",
          type: "text",
        },
        {
          name: "en",
          title: "Description in Eng",
          type: "text",
        },
      ],
    }),
    defineField({
      name: "contents",
      title: "Content",
      type: "object",
      fields: [
        {
          name: "ru",
          title: "Content in Rus",
          type: "text",
        },
        {
          name: "en",
          title: "Content in Eng",
          type: "text",
        },
      ],
    }),
    defineField({
      name: "listOfTags",
      title: "List of tags",
      type: "object",
      fields: [
        {
          name: "ru",
          title: "List of tags in Rus",
          type: "array",
          of: [
            {
              type: "string",
            },
          ],
        },
        {
          name: "en",
          title: "List of tags in Eng",
          type: "array",
          of: [
            {
              type: "string",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "embeddedVideoUrl",
      title: "Embedded video URL",
      description: "Enter url for video preview of project",
      type: "url",
    }),
    defineField({
      name: "assets",
      title: "Assets",
      description: "Add images for the project",
      type: "array",
      of: [{ type: "image" }],
    }),
    {
      name: "url",
      type: "url",
      title: "Project link",
    },
    defineField({
      name: "category",
      title: "Category",
      type: "object",
      fields: [
        {
          name: "ru",
          title: "Category in Rus",
          type: "string",
        },
        { name: "en", title: "Category in Eng", type: "string" },
      ],
    }),
    {
      name: "nextProject",
      type: "slug",
      title: "Next project's slug",
      description:
        "Enter slug for the next project, to connect it to the current (You can fill this later)",
    },
    {
      name: "isHomePageProject",
      type: "boolean",
      title: "Show this project on Home page?",
    },
  ],
};
