import { defineField } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
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
    {
      name: "coverImage",
      type: "image",
      title: "Cover image (Landscape)",
    },
    {
      name: "coverImagePortrait",
      type: "image",
      title: "Cover image (Portrait)",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "contents",
      type: "text",
      title: "Content",
    },
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
    {
      name: "category",
      type: "string",
      title: "Category",
    },
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
