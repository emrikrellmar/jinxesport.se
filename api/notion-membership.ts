import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Client } from '@notionhq/client';

// Try to load local .env in development if dotenv is available.
// This helps local testing without needing to set env vars externally.
if (process.env.NODE_ENV !== 'production') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dotenv = require('dotenv');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const path = require('path');
    dotenv.config({ path: path.resolve(process.cwd(), '.env') });
  } catch (err) {
    // dotenv not installed or failed to load — ignore silently.
  }
}

// Accept several common environment variable names so it's more flexible.
const notionSecret =
  process.env.NOTION_API_SECRET ?? process.env.NOTION_API_KEY ?? process.env.NOTION_TOKEN ?? '';
const notionDatabaseId = process.env.NOTION_MEMBERSHIP_DATABASE_ID ?? process.env.NOTION_DATABASE_ID ?? '';

const notion = notionSecret ? new Client({ auth: notionSecret }) : null;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!notion || !notionDatabaseId) {
    res.status(500).json({ error: 'Notion integration is not configured. Set NOTION_API_SECRET and NOTION_MEMBERSHIP_DATABASE_ID.' });
    return;
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;

  const {
    name,
    email,
    phone,
    discord,
    city,
    optInEmails = false,
    gdprConsent,
  } = body ?? {};

  if (!name || !email || !discord || !city || gdprConsent !== true) {
    res.status(400).json({
      error: 'Missing required fields. Ensure name, email, discord, and city are provided and GDPR consent is checked.',
    });
    return;
  }

  const registrationDate = new Date().toISOString();

  try {
    await notion.pages.create({
      parent: { database_id: notionDatabaseId },
      properties: {
        Name: {
          title: [
            {
              text: { content: name },
            },
          ],
        },
        Email: {
          email,
        },
        Phone: {
          phone_number: phone ?? '',
        },
        Discord: {
          rich_text: [
            {
              text: { content: discord },
            },
          ],
        },
        City: {
          rich_text: [
            {
              text: { content: city },
            },
          ],
        },
        'Mail Opt-in': {
          checkbox: Boolean(optInEmails),
        },
        'GDPR Consent': {
          checkbox: Boolean(gdprConsent),
        },
        'Registration Date': {
          date: {
            start: registrationDate,
          },
        },
      },
    });

    res.status(201).json({ ok: true });
  } catch (error) {
    console.error('Notion membership error', error);
    res.status(500).json({
      error: 'Failed to save submission to Notion.',
      detail: error instanceof Error ? error.message : String(error),
    });
  }
}
