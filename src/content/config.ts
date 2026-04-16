import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    heroTitle: z.string(),
    heroSubtitle: z.string().optional(),
    heroImage: z.string().optional(),
    showInNav: z.boolean().default(true),
    navOrder: z.number(),
    canonicalUrl: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

export const collections = { pages };
