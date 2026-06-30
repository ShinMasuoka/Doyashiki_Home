import { defineCollection, z } from 'astro:content';

const experienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  quote: z.string(),
  imageCount: z.number().default(1),
});

const faqSchema = z.object({
  q: z.string(),
  a: z.string(),
});

const homeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      label: z.string(),
      heading: z.string(),
      sub: z.string(),
    }),
    intro: z.object({
      body: z.array(z.string()),
    }),
    experiencesHeading: z.string(),
    experiences: z.array(experienceSchema),
    reservation: z.object({
      heading: z.string(),
      sub: z.string(),
      primaryLabel: z.string(),
      othersLabel: z.string(),
    }),
    faqHeading: z.string(),
    faq: z.array(faqSchema),
    access: z.object({
      sectionLabel: z.string(),
      heading: z.string(),
      mapLabel: z.string(),
      mapLink: z.string(),
      navNote: z.string().optional(),
      car: z.string(),
      train: z.string(),
    }),
    footer: z.object({
      location: z.string(),
    }),
    menu: z.object({
      title: z.string(),
      items: z.array(z.object({
        label: z.string(),
        href: z.string(),
      })),
      ctaLabel: z.string(),
    }),
  }),
});

export const collections = {
  home: homeCollection,
};
