import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    num: z.number(),
    title: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    date: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  project: projectCollection,
};
