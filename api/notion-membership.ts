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
    personalNumber,
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

  // Validate personal number format: 12 digits YYYYMMDDXXXX
  if (!personalNumber || !/^[0-9]{12}$/.test(String(personalNumber))) {
    res.status(400).json({
      error: 'Invalid or missing personal number. Please provide your personal number in the format YYYYMMDDXXXX (12 digits).',
    });
    return;
  }

  const registrationDate = new Date().toISOString();

  try {
  // Build properties matching the Notion database exactly.
    // Note: property names are case-sensitive and must match the database.
    const properties: Record<string, any> = {
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
      // Only include Phone if provided to avoid sending empty strings for phone_number.
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
      // The Notion database screenshot shows this column as "Registration date" (lowercase 'd')
      // — use the exact name so Notion accepts the property.
      'Registration date': {
        date: {
          start: registrationDate,
        },
      },
    };

    if (phone && String(phone).trim() !== '') {
      properties.Phone = { phone_number: String(phone) };
    }

    // Add personal/security number. Try sending as Number type first (some DBs use number),
    // then fallback to rich_text if Notion rejects the type. We'll attempt the create and retry on failure.
    const personalNumValue = String(personalNumber);
    properties['Security number'] = { number: Number(personalNumValue) };

    // Attempt create; if Notion rejects the property type or name, try fallbacks.
    try {
      await notion.pages.create({ parent: { database_id: notionDatabaseId }, properties });
    } catch (err) {
      // If the first attempt fails, try as rich_text for 'Security number'.
      try {
        const altProps = { ...properties };
        altProps['Security number'] = {
          rich_text: [
            {
              text: { content: personalNumValue },
            },
          ],
        };

        await notion.pages.create({ parent: { database_id: notionDatabaseId }, properties: altProps });
      } catch (err2) {
        // Final fallback: try the alternative column name the user mentioned.
        const altName = 'Personal number (social security number)';
        try {
          const altProps2 = { ...properties };
          altProps2[altName] = { number: Number(personalNumValue) };
          // remove original Security number to avoid duplicate/unknown property errors
          delete altProps2['Security number'];
          await notion.pages.create({ parent: { database_id: notionDatabaseId }, properties: altProps2 });
        } catch (err3) {
          // As last resort, try altName as rich_text
          const altProps3 = { ...properties };
          delete altProps3['Security number'];
          altProps3[altName] = {
            rich_text: [
              {
                text: { content: personalNumValue },
              },
            ],
          };

          await notion.pages.create({ parent: { database_id: notionDatabaseId }, properties: altProps3 });
        }
      }
    }

    res.status(201).json({ ok: true });
  } catch (error) {
    console.error('Notion membership error', error);
    res.status(500).json({
      error: 'Failed to save submission to Notion.',
      detail: error instanceof Error ? error.message : String(error),
    });
  }
}
