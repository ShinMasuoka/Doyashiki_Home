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

/* ===== 下層ページ共通の枠 ===== */
const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const ctaSchema = z.object({
  heading: z.string(),
  sub: z.string(),
});

// 下層ページ共通：SEO・ページタイトル・予約CTA
const pageBase = {
  seo: seoSchema,
  label: z.string(),
  heading: z.string(),
  lead: z.string(),
  cta: ctaSchema,
};

const roomsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    ...pageBase,
    notice: z.object({
      title: z.string(),
      body: z.string(),
    }),
    spaces: z.array(z.object({
      id: z.string(),
      title: z.string(),
      body: z.string(),
    })),
    sleep: z.object({
      label: z.string(),
      title: z.string(),
      body: z.string(),
      quotes: z.array(z.string()),
      quoteFrom: z.string(),
    }),
    specs: z.object({
      heading: z.string(),
      rows: z.array(z.object({
        th: z.string(),
        td: z.string(),
      })),
      floorplanNote: z.string(),
    }),
  }),
});

const amenitiesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    ...pageBase,
    groups: z.array(z.object({
      id: z.string(),
      title: z.string(),
      body: z.string(),
      items: z.array(z.string()).optional(),
    })),
    diyNote: z.string(),
  }),
});

const aroundCollection = defineCollection({
  type: 'data',
  schema: z.object({
    ...pageBase,
    map: z.object({
      note: z.string(),
      openLabel: z.string(),
      link: z.string(),
    }),
    categories: z.array(z.object({
      id: z.string(),
      title: z.string(),
      note: z.string().optional(),
      spots: z.array(z.object({
        name: z.string(),
        time: z.string().optional(),
        body: z.string(),
      })),
    })),
  }),
});

const voicesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    ...pageBase,
    voices: z.array(z.object({
      quote: z.string(),
      meta: z.string(),
    })),
    airbnb: z.object({
      note: z.string(),
      linkLabel: z.string(),
    }),
    disclaimer: z.string(),
  }),
});

// /news/ 一覧ページのテキスト
const newsPageCollection = defineCollection({
  type: 'data',
  schema: z.object({
    ...pageBase,
    backLabel: z.string(),
  }),
});

// ニュース記事：markdown 1記事1ファイル
const newsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = {
  home: homeCollection,
  rooms: roomsCollection,
  amenities: amenitiesCollection,
  around: aroundCollection,
  voices: voicesCollection,
  'news-page': newsPageCollection,
  news: newsCollection,
};
