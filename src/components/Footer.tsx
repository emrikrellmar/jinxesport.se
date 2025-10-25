import { NavLink } from 'react-router-dom';
import logo from '../assets/jinx_logo.png';
import iconX from '../assets/xlogo.png';
import iconDiscord from '../assets/discordlogo.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-carbon">
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <NavLink to="/" className="flex items-center gap-3 text-snow">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/5">
                <img src={logo} alt="Jinx Esport crest" className="h-10 w-10 object-contain" />
              </div>
              <div>
                <div className="font-display text-sm tracking-[0.35em]">Jinx Esport</div>
                <div className="text-[10px] text-white/50">Swedish esports association</div>
              </div>
            </NavLink>
          </div>

          <nav className="w-full md:w-auto">
            <ul className="flex flex-col gap-3 text-sm md:flex-row md:gap-6 md:items-center">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/teams" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>
                  Teams
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/gdpr" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>
                  GDPR
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
            <div className="text-sm text-white/60">info@jinxesport.se</div>
            <div className="flex items-center gap-3">
              <a href="https://x.com/jinxesport" target="_blank" rel="noreferrer" className="text-white/60 hover:text-fuchsia">
                <img src={iconX} alt="X" className="h-6 w-6 object-contain" />
              </a>
              <a href="https://discord.com/invite/M39E4MVAeN" target="_blank" rel="noreferrer" className="text-white/60 hover:text-fuchsia">
                <img src={iconDiscord} alt="Discord" className="h-6 w-6 object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/6 pt-4 text-center text-xs text-white/50">
          <div>© {year} Jinx Esport. All rights reserved.</div>
          <div className="mt-1">Registered association · Privacy and membership terms apply.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
