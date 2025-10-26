import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import type { NewsPost } from "./NewsPage";

const NewsPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const [post, setPost] = useState<NewsPost | null>(location.state?.post || null);
  const [loading, setLoading] = useState(!post);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If we already have the post from navigation state, no need to fetch
    if (post) {
      setLoading(false);
      return;
    }

    let mounted = true;

    const loadPost = async () => {
      try {
        const res = await fetch('/api/notion-news');
        
        // Check if response is actually JSON
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('API returned non-JSON response. This might be a development server issue.');
        }

        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body?.error ?? body?.detail ?? `Failed to fetch posts (${res.status})`);
        }

        const json = await res.json();
        const posts: NewsPost[] = json?.posts ?? [];
        const foundPost = posts.find(p => p.slug === slug);

        if (mounted) {
          if (foundPost) {
            setPost(foundPost);
            setError(null);
          } else {
            setError('Post not found');
          }
        }
        } catch (err) {
        if (mounted) {
          console.error('News post loading error:', err);
          const errorMessage = err instanceof Error ? err.message : String(err);
          
          // If it's a development issue, show error
          if (errorMessage.includes('import') || errorMessage.includes('Unexpected token') || errorMessage.includes('development server issue')) {
            console.log('API not available in development mode');
            setError('Post not found');
          } else {
            setError(errorMessage);
          }
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }

    return () => {
      mounted = false;
    };
  }, [slug, post]);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const formatContent = (content: string) => {
    // Simple formatting - split by newlines and create paragraphs
    return content.split('\n\n').filter(paragraph => paragraph.trim()).map((paragraph, index) => (
      <p key={index} className="text-base text-white/70 leading-relaxed break-words">
        {paragraph.trim()}
      </p>
    ));
  };

  if (loading) {
    return (
      <div className="text-center">
        <p className="text-sm text-white/60">Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="space-y-8">
        <div className="rounded-[2rem] border border-rose-500/60 bg-rose-500/10 p-6 text-center">
          <p className="text-sm text-rose-100">{error || 'Post not found'}</p>
        </div>
        <div className="text-center">
          <Link
            to="/news"
            className="inline-flex items-center rounded-full bg-fuchsia px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-void transition hover:bg-white"
          >
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Back Navigation */}
      <div>
        <Link
          to="/news"
          className="inline-flex items-center text-sm text-white/60 transition hover:text-fuchsia"
        >
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to News
        </Link>
      </div>

      {/* Post Content */}
      <article className="rounded-[2.75rem] border border-white/10 bg-carbon/95 p-10 shadow-[0_22px_60px_rgba(255,0,127,0.16)] md:p-16">
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-8 overflow-hidden rounded-2xl">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="h-64 w-full object-cover md:h-80"
              loading="lazy"
            />
          </div>
        )}

        {/* Post Header */}
        <header className="mb-8 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-fuchsia/70">
              {formatDate(post.date)} • {post.author}
            </p>
            <h1 className="font-display text-3xl uppercase tracking-[0.25em] text-snow md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-invert max-w-none space-y-6 overflow-hidden">
          {formatContent(post.content)}
        </div>

        {/* Post Footer */}
        <footer className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/60">
              Published by <span className="text-fuchsia">{post.author}</span>
            </p>
            <Link
              to="/news"
              className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-snow transition hover:bg-white/20 hover:text-fuchsia"
            >
              More Posts
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default NewsPostPage;