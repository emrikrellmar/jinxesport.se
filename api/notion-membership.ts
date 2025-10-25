import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Client } from '@notionhq/client';

const notionSecret = process.env.NOTION_API_SECRET;
const notionDatabaseId = process.env.NOTION_MEMBERSHIP_DATABASE_ID;

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
    fullName,
    email,
    phone,
    discord,
    personalNumber,
    city,
    optInEmails = false,
    gdprConsent,
  } = body ?? {};

  if (!fullName || !email || !discord || !personalNumber || !city || gdprConsent !== true) {
    res.status(400).json({
      error: 'Missing required fields. Ensure fullName, email, discord, personalNumber, city are provided and GDPR consent is checked.',
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
              text: { content: fullName },
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
        'Personal Number': {
          rich_text: [
            {
              text: { content: personalNumber },
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
          checkbox: true,
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
