export type Player = {
  handle: string;
  name: string;
  role: string;
  nationality: string;
  stats: {
    rating: number;
    kd: number;
  };
  bio: string;
  socials?: {
    twitter?: string;
    twitch?: string;
  };
};

export const mainRoster: Player[] = [
  {
    handle: 'FLARE',
    name: 'Elias Nyberg',
    role: 'IGL / Rifler',
    nationality: 'Sweden',
    stats: { rating: 1.11, kd: 1.18 },
    bio: 'Tactical mastermind setting the tempo with crisp mid-round calls and fearless entries.',
    socials: { twitter: 'https://twitter.com/flarecs' },
  },
  {
    handle: 'NOVA',
    name: 'Mira Jensen',
    role: 'AWPer',
    nationality: 'Denmark',
    stats: { rating: 1.24, kd: 1.32 },
    bio: 'Sniper with ice in her veins, delivering explosive impact rounds on international stages.',
    socials: { twitter: 'https://twitter.com/novacs', twitch: 'https://twitch.tv/novaaim' },
  },
  {
    handle: 'OSIRIS',
    name: 'Jakob Frisk',
    role: 'Support / Anchor',
    nationality: 'Norway',
    stats: { rating: 1.02, kd: 0.98 },
    bio: 'Anchor player known for utility perfection, locking down sites when it matters most.',
  },
  {
    handle: 'PHANTOM',
    name: 'Leo Martell',
    role: 'Lurker',
    nationality: 'Finland',
    stats: { rating: 1.16, kd: 1.21 },
    bio: 'Shadow on the map delivering dagger rounds through late lurks and timings.',
    socials: { twitter: 'https://twitter.com/phantomlurks' },
  },
  {
    handle: 'REZOLVE',
    name: 'Anton Berg',
    role: 'Entry Fragger',
    nationality: 'Sweden',
    stats: { rating: 1.08, kd: 1.04 },
    bio: 'Explosive opener whose confidence cracks sites open round after round.',
    socials: { twitch: 'https://twitch.tv/rezolve' },
  },
];

export const academyRoster: Player[] = [
  {
    handle: 'PIXEL',
    name: 'Linnea Holm',
    role: 'Flex',
    nationality: 'Sweden',
    stats: { rating: 1.05, kd: 1.07 },
    bio: 'Flexible rifler building a reputation for fearless clutch potential and aim duels.',
  },
  {
    handle: 'SPARK',
    name: 'Oskar Lehto',
    role: 'IGL / Support',
    nationality: 'Finland',
    stats: { rating: 0.99, kd: 0.95 },
    bio: 'Young leader honing his structure, balancing macro calling with mentor guidance.',
  },
  {
    handle: 'BLITZ',
    name: 'Theo Larsson',
    role: 'Entry Fragger',
    nationality: 'Sweden',
    stats: { rating: 1.03, kd: 1.01 },
    bio: 'Hyper-aggressive opener sharpening raw aim through academy scrims and Nordic leagues.',
  },
  {
    handle: 'ASTRA',
    name: 'Elin Wahl',
    role: 'AWPer',
    nationality: 'Sweden',
    stats: { rating: 1.12, kd: 1.19 },
    bio: 'Up-and-coming AWPer focused on crosshair discipline and map control fundamentals.',
  },
  {
    handle: 'RIFT',
    name: 'Adam Koivisto',
    role: 'Lurker',
    nationality: 'Finland',
    stats: { rating: 1.01, kd: 0.99 },
    bio: 'Timing specialist learning from the main roster to refine patient map pressure.',
  },
];
