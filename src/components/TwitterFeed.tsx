import { useEffect, useState } from "react";
import type { XPost } from "../data/xPosts";
import { xPosts as fallbackPosts } from "../data/xPosts";

const TwitterFeed = () => {
  const [posts, setPosts] = useState<XPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const res = await fetch('/api/twitter-timeline');
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body?.error ?? body?.detail ?? `Timeline fetch failed (${res.status})`);
        }

        const json = await res.json();
        const remotePosts: XPost[] = json?.posts ?? [];

        if (mounted) {
          setPosts(remotePosts.length ? remotePosts : fallbackPosts.slice(0, 3));
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : String(err));
          setPosts(fallbackPosts.slice(0, 3));
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-carbon/85 p-4 sm:p-6">
      {loading ? (
        <p className="text-sm text-white/60">Loading feed…</p>
      ) : (
        <div className="flex flex-col gap-4">
          {error ? (
            <div className="text-sm text-rose-300">Could not load live feed: {error}</div>
          ) : null}

          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 rounded-lg border border-white/6 bg-white/3 p-3 transition hover:bg-white/5"
            >
              <div className="flex-1">
                <p className="text-sm text-white/90 whitespace-pre-wrap">{post.content}</p>
                <p className="mt-2 text-xs text-white/50">{post.postedAt.label}</p>
              </div>
              {post.media ? (
                <img src={post.media.url} alt={post.media.alt} className="ml-4 h-20 w-20 flex-shrink-0 rounded-md object-cover" />
              ) : null}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default TwitterFeed;
