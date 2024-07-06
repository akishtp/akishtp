import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  project: projectCollection,
};
