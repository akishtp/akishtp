import { defineCollection, z } from "astro:content";

const writingCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    imgDesc: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  writing: writingCollection,
};
