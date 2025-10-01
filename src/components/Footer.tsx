import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="border-t border-white/10 bg-black/40">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:px-8">
      <div className="space-y-2">
        <NavLink to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cobalt via-neon to-sunset font-display text-sm font-bold text-black shadow-glow">
            JE
          </div>
          <div className="font-display text-xs uppercase tracking-[0.4em] text-white/80">
            Jinx Esport
          </div>
        </NavLink>
        <p className="max-w-md text-xs leading-relaxed text-white/50">
          Competing across Europe with a mission to elevate Nordic esports talent. Follow our journey through majors,
          qualifiers, and grassroots events.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.35em] text-white/50 md:flex-row md:items-center md:gap-8">
        <NavLink to="/teams" className="transition hover:text-neon">
          Teams
        </NavLink>
        <NavLink to="/teams/main" className="transition hover:text-neon">
          Main Roster
        </NavLink>
        <NavLink to="/teams/academy" className="transition hover:text-neon">
          Academy
        </NavLink>
        <a href="mailto:hello@jinxesport.se" className="transition hover:text-neon">
          Contact
        </a>
      </div>
    </div>
    <div className="border-t border-white/5 bg-black/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-4 text-[11px] uppercase tracking-[0.35em] text-white/30 md:flex-row md:items-center md:justify-between md:px-8">
        <span>Copyright {new Date().getFullYear()} Jinx Esport. All rights reserved.</span>
        <span>Powered by React - Tailwind CSS - Vite</span>
      </div>
    </div>
  </footer>
);

export default Footer;
