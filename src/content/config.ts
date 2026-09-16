import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(220),
    publishedAt: z.coerce.date(),
    category: z.string(),
    link: z.string().url(),
    thumbnail: z.string(),
    role: z.string().optional(),
    technologies: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
