import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Client } from '@notionhq/client';

// Load local .env in development where available
if (process.env.NODE_ENV !== 'production') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dotenv = require('dotenv');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const path = require('path');
    dotenv.config({ path: path.resolve(process.cwd(), '.env') });
  } catch (err) {
    // ignore
  }
}

const notionSecret =
  process.env.NOTION_API_SECRET ?? process.env.NOTION_API_KEY ?? process.env.NOTION_TOKEN ?? '';
const notionDatabaseId = process.env.NOTION_MEMBERSHIP_DATABASE_ID ?? process.env.NOTION_DATABASE_ID ?? '';

const notion = notionSecret ? new Client({ auth: notionSecret }) : null;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!notion || !notionDatabaseId) {
    res.status(500).json({ error: 'Notion integration is not configured. Set NOTION_API_SECRET and NOTION_MEMBERSHIP_DATABASE_ID.' });
    return;
  }

  try {
    let next_cursor: string | undefined = undefined;
    let total = 0;

    // Page through results counting entries. Notion doesn't provide a total count field, so iterate.
    // Prefer databases.query when available. Some versions of the Notion client expose query,
    // but if it's missing (runtime shape differences), fallback to search + filtering by parent.database_id.
    if ((notion as any).databases && typeof (notion as any).databases.query === 'function') {
      do {
        const resp: any = await (notion as any).databases.query({
          database_id: notionDatabaseId,
          start_cursor: next_cursor,
          page_size: 100,
        });

        total += resp.results?.length ?? 0;
        next_cursor = resp.has_more ? (resp.next_cursor as string | undefined) : undefined;
      } while (next_cursor);
    } else {
      // Fallback: use search and count pages whose parent.database_id matches our database
      do {
        const resp: any = await (notion as any).search({
          query: '',
          filter: { property: 'object', value: 'page' },
          start_cursor: next_cursor,
          page_size: 100,
        });

        const results = resp.results ?? [];
        let debugParents: any[] = [];
        for (const r of results) {
          const parent = r?.parent as any;
          // parent can have several shapes depending on SDK/runtime. Try common fields.
          const parentDbId = parent?.database_id ?? parent?.database?.id ?? parent?.databaseId ?? parent?.id ?? null;
          if (parentDbId === notionDatabaseId) total += 1;
          // collect a few parents for debug if needed
          if (debugParents.length < 3) debugParents.push(parent);
        }
        if ((process.env.NODE_ENV !== 'production') && debugParents.length > 0) {
          console.debug('notion-members-count: sample parents', debugParents);
        }

        next_cursor = resp.has_more ? (resp.next_cursor as string | undefined) : undefined;
      } while (next_cursor);
    }

    res.status(200).json({ count: total });
  } catch (error) {
    console.error('Notion count error', error);
    res.status(500).json({ error: 'Failed to read Notion database.', detail: error instanceof Error ? error.message : String(error) });
  }
}
