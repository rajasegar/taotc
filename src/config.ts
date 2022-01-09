export const SITE = {
  title: 'Your Documentation Website',
  description: 'Your website description.',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/snowpackjs/astro/blob/main/assets/social/banner.jpg?raw=true',
    alt: 'astro logo on a starry expanse of space,' + ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
  English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/snowpackjs/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: 'Table of Contents', header: true },
    { text: 'Introduction', link: 'en/introduction' },
    { text: 'Survivorship Bias', link: 'en/survivorship-bias' },
    { text: 'Swimmer\'s Body Illusion', link: 'en/swimmers-body-illusion' },
    { text: 'Clustering  Illusion', link: 'en/clustering-illusion' },
    { text: 'Social Proof', link: 'en/social-proof' },
    { text: 'Sunk Cost Fallacy', link: 'en/sunk-cost-fallacy' },
    { text: 'Reciprocity', link: 'en/reciprocity' },
    { text: 'Confirmation Bias', link: 'en/confirmation-bias' },
    { text: 'Authority Bias', link: 'en/authority-bias' },
    { text: 'Induction', link: 'en/induction' },
    { text: 'In-group Out-group bias', link: 'en/in-group-out-group' },
    { text: 'Ambiguity Aversion', link: 'en/ambiguity-aversion' },
    { text: 'Default Effect', link: 'en/default-effect' },
    { text: 'Envy', link: 'en/envy' },
    { text: 'Personification', link: 'en/personification' },
    { text: 'Illusion of Attention', link: 'en/illustion-of-attention' },
    { text: 'Strategic Misrepresentation', link: 'en/strategic-misrepresentation' },
    { text: 'Overthinking', link: 'en/overthinking' },
    { text: 'Planning Fallacy', link: 'en/planning-fallacy' },
    { text: 'Deformation Professionelle Fallacy', link: 'en/deformation-professionelle' },
    { text: 'Zeignark Effect', link: 'en/zeignark-effect' },
    { text: 'Illusion of Skill', link: 'en/illusion-of-skill' },
    { text: 'Feature-positive effect', link: 'en/feature-positive-effect' },
    { text: 'Cherry Picking', link: 'en/cherry-picking' },
    { text: 'Fallacy of the single cause', link: 'en/fallacy-of-the-single-cause' },
    { text: 'Intention to treat errors', link: 'en/intention-to-treat-errors' },
    { text: 'News Illusion', link: 'en/news-illusion' },

    // { text: 'Another Section', header: true },
    // { text: 'Page 4', link: 'en/page-4' },
  ],
};
