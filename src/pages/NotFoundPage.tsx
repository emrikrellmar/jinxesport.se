import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="glass-panel mx-auto w-full max-w-2xl rounded-[3rem] border border-white/10 bg-carbon/90 p-12 text-center shadow-[0_22px_60px_rgba(255,0,127,0.16)]">
    <p className="text-xs uppercase tracking-[0.4em] text-white/40">404</p>
    <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.35em] text-white">Page Not Found</h1>
    <p className="mt-4 text-sm leading-relaxed text-white/70">
      The page you are after rotated out of the server. Head back to the start and dive into one of the rosters.
    </p>
    <div className="mt-8 flex justify-center gap-4">
      <Link
        to="/"
        className="inline-flex items-center rounded-full bg-fuchsia px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-void"
      >
        Home Base
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
