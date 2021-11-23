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

    // { text: 'Another Section', header: true },
    // { text: 'Page 4', link: 'en/page-4' },
  ],
};
