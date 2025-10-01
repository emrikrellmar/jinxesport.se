import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Teams', to: '/teams' },
  { label: 'Main', to: '/teams/main' },
  { label: 'Academy', to: '/teams/academy' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkBase = 'relative px-1 py-2 text-xs font-semibold uppercase tracking-[0.4em] transition-colors duration-200';

  const renderLink = (label: string, to: string, onClick?: () => void) => (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) =>
        [linkBase, isActive ? 'text-neon' : 'text-white/60 hover:text-white'].join(' ')
      }
      onClick={onClick}
    >
      {({ isActive }) => (
        <span className="relative inline-flex flex-col items-center gap-1">
          <span>{label}</span>
          <AnimatePresence>
            {isActive && (
              <motion.span
                layoutId="nav-indicator"
                className="h-0.5 w-full rounded-full bg-gradient-to-r from-neon via-white to-sunset"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.25 }}
              />
            )}
          </AnimatePresence>
        </span>
      )}
    </NavLink>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 py-3 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <NavLink to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cobalt via-neon to-sunset font-display text-lg font-bold text-black shadow-glow">
            JE
          </div>
          <div className="hidden flex-col leading-tight md:flex">
            <span className="font-display text-sm uppercase tracking-[0.35em] text-white">Jinx Esport</span>
            <span className="text-xs uppercase tracking-[0.6em] text-white/50">Forged In Clutch</span>
          </div>
        </NavLink>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => renderLink(item.label, item.to))}
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:border-neon/60 hover:bg-neon/10 hover:text-neon"
          >
            Join Discord
          </a>
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-neon/40 hover:text-neon md:hidden"
        >
          <motion.span
            initial={false}
            animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
            className="absolute block h-0.5 w-5 rounded-full bg-current"
          />
          <motion.span
            initial={false}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute block h-0.5 w-5 rounded-full bg-current"
          />
          <motion.span
            initial={false}
            animate={isOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
            className="absolute block h-0.5 w-5 rounded-full bg-current"
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-black/90 px-6 pb-6 pt-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => renderLink(item.label, item.to, () => setIsOpen(false)))}
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:border-neon/60 hover:bg-neon/10 hover:text-neon"
                onClick={() => setIsOpen(false)}
              >
                Join Discord
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
