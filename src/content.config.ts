import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  work: defineCollection({
    // Load Markdown files in the src/content/proyects directory.
    loader: glob({ base: './src/content/proyects', pattern: '**/*.md' }),
    schema: ({ image }) => z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      order: z.number().int().optional(),
      tags: z.array(
        z.object({
          label: z.string(),
          type: z.enum(['tech', 'concept']),
          icon: z.string().optional(),
          iconDark: z.string().optional(),
        }),
      ),
      img: image(),
      img_alt: z.string().optional(),
      repo: z.string().optional(),
      link: z.string().optional(),
    }),
  }),
  experience: defineCollection({
    loader: glob({ base: './src/content/experience', pattern: '**/*.md' }),
    schema: z.object({
      title: z.string(),
      company: z.string(),
      date: z.string(),
      description: z.string(),
      technologies: z.array(
        z.object({
          name: z.string(),
          icon: z.string().optional(),
          iconDark: z.string().optional(),
        }),
      ),
      order: z.number().int(),
      link: z.string().optional(),
    }),
  }),
};
