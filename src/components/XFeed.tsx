import { useEffect, useState } from 'react';
import type { XPost } from '../data/xPosts';
import { xPosts as fallbackPosts } from '../data/xPosts';
import jinxLogo from '../assets/jinx_logo.png';

const XFeed = () => {
  const [posts, setPosts] = useState<XPost[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const response = await fetch('/api/twitter-timeline');
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = (await response.json()) as { posts?: XPost[] };
        if (isMounted && data.posts?.length) {
          setPosts(data.posts);
        }
      } catch (err) {
        if (isMounted) {
          setError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void load();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!posts.length && !loading) {
    return (
      <div className="rounded-2xl border border-white/10 bg-carbon/80 p-6 text-sm text-white/60">
        No X posts to show yet. Follow{' '}
        <a
          href="https://x.com/jinxesport"
          className="text-fuchsia hover:text-fuchsia/80"
          target="_blank"
          rel="noreferrer"
        >
          @jinxesport
        </a>{' '}
        for the latest updates.
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {posts.slice(0, 3).map((post) => (
        <article
          key={post.id}
          className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-carbon/85 p-6 shadow-[0_25px_55px_rgba(0,0,0,0.35)]"
        >
          <header className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-carbon/80">
              <img src={jinxLogo} alt="Jinx Esport logo" className="h-6 w-6 object-contain" />
            </div>
            <div>
              <p className="font-display text-lg uppercase tracking-[0.3em] text-snow">j!nX</p>
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">@jinxesport</p>
            </div>
          </header>
          <p className="text-sm leading-relaxed text-white/80">{post.content}</p>
          {post.media ? (
            <a
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-2xl border border-white/10"
            >
              <img src={post.media.url} alt={post.media.alt} className="h-full w-full object-cover" loading="lazy" />
            </a>
          ) : null}
          <footer className="mt-auto flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/40">
            <time dateTime={post.postedAt.iso}>{post.postedAt.label}</time>
            <a href={post.url} target="_blank" rel="noreferrer" className="text-fuchsia hover:text-fuchsia/80">
              View on X
            </a>
          </footer>
        </article>
      ))}
    </div>
  );
};

export default XFeed;
