import type { VercelRequest, VercelResponse } from '@vercel/node';

// Environment variables
const notionSecret = process.env.NOTION_API_SECRET || process.env.NOTION_API_KEY || process.env.NOTION_TOKEN || '';
const notionBlogDatabaseId = process.env.NOTION_BLOG_DATABASE_ID || '298345687d388030935dce941aecf137';

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  author: string;
  published: boolean;
  date: string;
  featuredImage?: string;
  slug: string;
};

function extractPlainText(richText: any[]): string {
  if (!richText || !Array.isArray(richText)) return '';
  return richText.map((block) => block.plain_text || '').join('');
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!notionSecret || !notionBlogDatabaseId) {
    return res.status(500).json({ 
      error: 'Notion integration is not configured. Set NOTION_API_SECRET and NOTION_BLOG_DATABASE_ID.' 
    });
  }

  try {
    // Use direct fetch to Notion API
    const response = await fetch(`https://api.notion.com/v1/databases/${notionBlogDatabaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionSecret}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        filter: {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
        sorts: [
          {
            property: 'Date',
            direction: 'descending',
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Notion API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();

    const posts: BlogPost[] = data.results.map((page: any) => {
      const properties = page.properties;
      
      const title = extractPlainText(properties.Title?.title || []) || 'Untitled';
      const content = extractPlainText(properties.Content?.rich_text || []) || '';
      
      // Handle different author field types
      let author = 'jinx esport';
      if (properties.Author?.select?.name) {
        author = properties.Author.select.name;
      } else if (properties.Author?.rich_text) {
        author = extractPlainText(properties.Author.rich_text) || 'jinx esport';
      } else if (properties.Author?.title) {
        author = extractPlainText(properties.Author.title) || 'jinx esport';
      }
      
      const published = properties.Published?.checkbox || false;
      const date = properties.Date?.date?.start || new Date().toISOString();
      
      // Handle different featured image field types
      let featuredImage: string | undefined;
      if (properties['Featured image']?.files && properties['Featured image'].files.length > 0) {
        // Handle file upload field
        const file = properties['Featured image'].files[0];
        featuredImage = file.file?.url || file.external?.url;
      } else if (properties['Featured image']?.url) {
        // Handle URL field
        featuredImage = properties['Featured image'].url;
      } else if (properties['Featured image']?.rich_text) {
        // Handle rich text field (URL as text)
        const imageUrl = extractPlainText(properties['Featured image'].rich_text);
        featuredImage = imageUrl && (imageUrl.startsWith('http') || imageUrl.startsWith('/')) ? imageUrl : undefined;
      }

      return {
        id: page.id,
        title,
        content,
        author,
        published,
        date,
        featuredImage,
        slug: createSlug(title),
      };
    });

    return res.status(200).json({ posts });
  } catch (error) {
    console.error('Notion blog error:', error);
    return res.status(500).json({
      error: 'Failed to fetch blog posts from Notion.',
      detail: error instanceof Error ? error.message : String(error),
    });
  }
}