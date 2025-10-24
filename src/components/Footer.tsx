import { NavLink } from 'react-router-dom';
import logo from '../assets/jinx_logo.png';
const Footer = () => (
  <footer className="border-t border-white/10 bg-carbon">
    <div className="flex w-full flex-col items-center gap-6 px-6 py-8 text-xs uppercase tracking-[0.35em] text-white/50 md:flex-row md:justify-between">
      <NavLink to="/" className="flex items-center gap-3 text-snow">
        <div className="flex h-10 w-10 items-center justify-center">
          <img src={logo} alt="Jinx Esport crest" className="h-full w-full object-contain" />
        </div>
        <span className="font-display text-sm tracking-[0.4em]">Jinx Esport</span>
      </NavLink>
      <a href="mailto:info@jinxesport.se" className="text-white/60 hover:text-fuchsia">
        info@jinxesport.se
      </a>
    </div>
  </footer>
);

export default Footer;
