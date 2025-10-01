import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -24 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
    className="glass-panel mx-auto w-full max-w-2xl rounded-[3rem] border border-white/10 bg-white/5 p-12 text-center"
  >
    <p className="text-xs uppercase tracking-[0.4em] text-white/40">404</p>
    <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.35em] text-white">Page Not Found</h1>
    <p className="mt-4 text-sm leading-relaxed text-white/70">
      The page you are after rotated out of the server. Head back to the start and dive into one of the rosters.
    </p>
    <div className="mt-8 flex justify-center gap-4">
      <Link
        to="/"
        className="inline-flex items-center rounded-full bg-gradient-to-r from-cobalt via-neon to-sunset px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-black shadow-glow transition hover:shadow-glow"
      >
        Home Base
      </Link>
      <Link
        to="/teams"
        className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:border-neon/60 hover:bg-neon/10 hover:text-neon"
      >
        Teams Overview
      </Link>
    </div>
  </motion.div>
);

export default NotFoundPage;
