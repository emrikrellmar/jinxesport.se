import { NavLink } from 'react-router-dom';
import logo from '../assets/jinx_logo.png';

const Footer = () => (
  <footer className="border-t border-white/10 bg-carbon">
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-8 text-xs uppercase tracking-[0.35em] text-white/50 md:flex-row md:justify-between">
      <div className="flex items-center gap-3">
        <NavLink to="/" className="flex items-center gap-3 text-snow">
          <div className="flex h-10 w-10 items-center justify-center">
            <img src={logo} alt="Jinx Esport crest" className="h-full w-full object-contain" />
          </div>
          <span className="font-display text-sm tracking-[0.4em]">Jinx Esport</span>
        </NavLink>
      </div>

      <nav className="flex flex-wrap items-center justify-center gap-4">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>Home</NavLink>
        <NavLink to="/teams" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>Teams</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>Contact</NavLink>
        <NavLink to="/gdpr" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>GDPR</NavLink>
      </nav>

      <div>
        <a href="mailto:info@jinxesport.se" className="text-white/60 hover:text-fuchsia">
          info@jinxesport.se
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
