export type XPost = {
  id: string;
  url: string;
  postedAt: {
    iso: string;
    label: string;
  };
  content: string;
  media?: {
    url: string;
    alt: string;
  };
};

// Manually curated list of the latest public posts from @jinxesport.
// Update this file whenever you want to refresh the feed.
export const xPosts: XPost[] = [
  {
    id: '1981439100856009208',
    url: 'https://x.com/jinxesport/status/1981439100856009208',
    postedAt: {
      iso: '2025-10-23T19:14:00Z',
      label: 'Oct 23, 2025 · 7:14 PM UTC',
    },
    content: 'Victory vs @doxagg_ro 13-8 GG WP',
    media: {
      url: 'https://pbs.twimg.com/media/G398XIXXQAEOm00?format=jpg&name=large',
      alt: 'Score graphic celebrating JINX Esport’s 13-8 win against Doxa Gaming.',
    },
  },
  {
    id: '1981382707834724430',
    url: 'https://x.com/jinxesport/status/1981382707834724430',
    postedAt: {
      iso: '2025-10-23T15:30:00Z',
      label: 'Oct 23, 2025 · 3:30 PM UTC',
    },
    content: 'MATCHDAY vs @doxagg_ro — ESEA Intermediate kicks off 20:00. #CS2 #JINXESPORT',
    media: {
      url: 'https://pbs.twimg.com/media/G39JEnBWQAAjYrq?format=jpg&name=large',
      alt: 'Matchday poster showing JINX Esport versus Doxa Gaming in ESEA Intermediate.',
    },
  },
  {
    id: '1980293033494216911',
    url: 'https://x.com/jinxesport/status/1980293033494216911',
    postedAt: {
      iso: '2025-10-20T15:20:00Z',
      label: 'Oct 20, 2025 · 3:20 PM UTC',
    },
    content: 'In och stötta @ovztRCSGO och våra grabbar ikväll!',
  },
];
