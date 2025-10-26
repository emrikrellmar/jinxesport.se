import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type NewsPost = {
  id: string;
  title: string;
  content: string;
  author: string;
  published: boolean;
  date: string;
  featuredImage?: string;
  slug: string;
};

const NewsPage = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadPosts = async () => {
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
        const newsPosts: NewsPost[] = json?.posts ?? [];

        if (mounted) {
          setPosts(newsPosts);
          setError(null);
        }
        } catch (err) {
        if (mounted) {
          console.error('News loading error:', err);
          const errorMessage = err instanceof Error ? err.message : String(err);
          
          // If it's a development issue, show empty state
          if (errorMessage.includes('import') || errorMessage.includes('Unexpected token') || errorMessage.includes('development server issue')) {
            console.log('API not available in development mode');
            setPosts([]);
            setError(null);
          } else {
            setError(errorMessage);
            setPosts([]);
          }
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadPosts();

    return () => {
      mounted = false;
    };
  }, []);

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

  const truncateContent = (content: string, maxLength = 200) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength).trim() + '...';
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="rounded-[2.75rem] border border-white/10 bg-carbon/95 p-10 shadow-[0_22px_60px_rgba(255,0,127,0.16)] md:p-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">jinx esport Updates</p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.25em] text-snow md:text-5xl">
            News & Updates
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-base text-white/65">
            Stay up to date with the latest news, match results, team announcements, and everything happening at jinx esport.
          </p>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="text-center">
          <p className="text-sm text-white/60">Loading posts...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="rounded-[2rem] border border-rose-500/60 bg-rose-500/10 p-6 text-center">
          <p className="text-sm text-rose-100">Failed to load posts: {error}</p>
        </div>
      )}

      {/* Posts Grid */}
      {!loading && !error && (
        <section className="space-y-8">
          {posts.length === 0 ? (
            <div className="text-center">
              <p className="text-base text-white/60">No existing posts yet.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-[2.25rem] border border-white/10 bg-carbon/90 p-8 shadow-[0_22px_60px_rgba(255,0,127,0.16)] transition hover:border-fuchsia/40 hover:bg-carbon"
                >
                  {post.featuredImage && (
                    <div className="mb-6 overflow-hidden rounded-2xl">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="h-48 w-full object-cover transition group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.4em] text-white/45">
                        {formatDate(post.date)} • {post.author}
                      </p>
                      <h2 className="font-display text-xl uppercase tracking-[0.2em] text-snow line-clamp-2">
                        {post.title}
                      </h2>
                    </div>
                    
                    <p className="text-sm text-white/65 line-clamp-3 break-words overflow-wrap-anywhere max-w-full">
                      {truncateContent(post.content)}
                    </p>
                    
                    <Link
                      to={`/news/${post.slug}`}
                      state={{ post }}
                      className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-snow transition hover:bg-white/20 hover:text-fuchsia"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default NewsPage;