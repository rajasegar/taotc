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
    { text: 'Confirmation Bias (Part 2)', link: 'en/confirmation-bias-2' },
    { text: 'Authority Bias', link: 'en/authority-bias' },
    { text: 'Contrast Effect', link: 'en/contrast-effect' },
    { text: 'Availabiity Bias', link: 'en/availability-bias' },
    { text: 'It\'ll-Get-Worse-Before-It-Getters-Better Fallacy', link: 'en/gets-worse-before-gets-better' },
    { text: 'Story Bias', link: 'en/story-bias' },
    { text: 'Hindsight Bias', link: 'en/hindsight-bias' },
    { text: 'Overconfidence effect', link: 'en/overconfidence-effect' },
    { text: 'Chauffeur Knowledge', link: 'en/chauffeur-knowledge' },
    { text: 'Illusion of Control', link: 'en/illusion-of-control' },
    { text: 'Incentive Super-Response Tendency', link: 'en/incentive-super-response-tendency' },
    { text: 'Regression to Mean', link: 'en/regression-to-mean' },
    { text: 'Outcome Bias', link: 'en/outcome-bias' },
    { text: 'The Paradox of Choice', link: 'en/paradox-of-choice' },
    { text: 'Liking Bias', link: 'en/liking-bias' },
    { text: 'Endowment Effect', link: 'en/endowment-effect' },
    { text: 'Coincidence', link: 'en/coincidence' },
    { text: 'Groupthink', link: 'en/groupthink' },
    { text: 'Neglect of Probability', link: 'en/neglect-of-probability' },
    { text: 'Scarcity Error', link: 'en/scarcity-error' },
    { text: 'Base-Rate Neglect', link: 'en/base-rate-neglect' },
    { text: 'Gambler\'s Fallacy', link: 'en/gamblers-fallacy' },
    { text: 'The Anchor', link: 'en/anchor' },
    { text: 'Induction', link: 'en/induction' },
    { text: 'Loss Aversion', link: 'en/loss-aversion' },
    { text: 'Social Loafing', link: 'en/social-loafing' },
    { text: 'Exponential Growth', link: 'en/exponential-growth' },
    { text: 'Winner\'s Curse', link: 'en/winners-curse' },
    { text: 'Fundamental Attribution Error', link: 'en/fundamental-attribution-error' },
    { text: 'False Causality', link: 'en/false-causality' },
    { text: 'Halo Effect', link: 'en/halo-effect' },
    { text: 'Alternative Paths', link: 'en/alternative-paths' },
    { text: 'Forecast Illusion', link: 'en/forecast-illusion' },
    { text: 'Conjunction Fallacy', link: 'en/conjunction-fallacy' },
    { text: 'Framing', link: 'en/framing' },
    { text: 'Action Bias', link: 'en/action-bias' },
    { text: 'Omission Bias', link: 'en/omission-bias' },
    { text: 'Self-Serving Bias', link: 'en/self-serving-bias' },
    { text: 'Hedonic Treadmill', link: 'en/hedonic-treadmill' },
    { text: 'Self-selection Bias', link: 'en/self-selection-bias' },
    { text: 'Associal Bias', link: 'en/association-bias' },
    { text: 'Beginners\'s Luck', link: 'en/beginners-luck' },
    { text: 'Cognitive Dissonance', link: 'en/cognitive-dissonance' },
    { text: 'Hyperbolic Discounting', link: 'en/hyperbolic-discounting' },
    { text: 'In-group Out-group bias', link: 'en/in-group-out-group' },
    { text: 'Ambiguity Aversion', link: 'en/ambiguity-aversion' },
    { text: 'Default Effect', link: 'en/default-effect' },
    { text: 'Envy', link: 'en/envy' },
    { text: 'Personification', link: 'en/personification' },
    { text: 'Illusion of Attention', link: 'en/illusion-of-attention' },
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
