import type { VercelRequest, VercelResponse } from '@vercel/node';

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
const USER_ID = process.env.TWITTER_USER_ID;
const SCREEN_NAME = process.env.TWITTER_SCREEN_NAME ?? 'jinxesport';

const formatDate = (iso: string) => {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: false,
      timeZoneName: 'short',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!BEARER_TOKEN || !USER_ID) {
    res.status(500).json({
      error: 'Missing TWITTER_BEARER_TOKEN or TWITTER_USER_ID environment variables.',
    });
    return;
  }

  const params = new URLSearchParams({
    max_results: '5',
    'tweet.fields': 'created_at,attachments',
    expansions: 'attachments.media_keys',
    'media.fields': 'url,preview_image_url,alt_text',
    exclude: 'retweets,replies',
  });

  try {
    const timelineResponse = await fetch(`https://api.twitter.com/2/users/${USER_ID}/tweets?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    if (!timelineResponse.ok) {
      const detail = await timelineResponse.text();
      res.status(timelineResponse.status).json({
        error: 'Failed to fetch tweets from X API.',
        detail,
      });
      return;
    }

    const payload = (await timelineResponse.json()) as {
      data?: Array<{
        id: string;
        text: string;
        created_at: string;
        attachments?: { media_keys: string[] };
      }>;
      includes?: {
        media?: Array<{
          media_key: string;
          url?: string;
          preview_image_url?: string;
          alt_text?: string;
        }>;
      };
    };

    const mediaItems = payload.includes?.media ?? [];
    const mediaMap = new Map<string, (typeof mediaItems)[number]>();
    mediaItems.forEach((media) => {
      mediaMap.set(media.media_key, media);
    });

    const posts =
      payload.data?.slice(0, 3).map((tweet) => {
        const mediaKey = tweet.attachments?.media_keys?.[0];
        const media = mediaKey ? mediaMap.get(mediaKey) : undefined;

        const iso = tweet.created_at;

        return {
          id: tweet.id,
          url: `https://x.com/${SCREEN_NAME}/status/${tweet.id}`,
          postedAt: {
            iso,
            label: formatDate(iso),
          },
          content: tweet.text,
          media: media?.url || media?.preview_image_url
            ? {
                url: media.url ?? media.preview_image_url ?? '',
                alt: media.alt_text ?? 'Post media',
              }
            : undefined,
        };
      }) ?? [];

    res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=600');
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({
      error: 'Unexpected error while retrieving tweets.',
      detail: error instanceof Error ? error.message : String(error),
    });
  }
}
