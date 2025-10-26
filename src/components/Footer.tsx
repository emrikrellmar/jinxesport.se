import { NavLink } from 'react-router-dom';
import iconX from '../assets/xlogo.png';
import iconDiscord from '../assets/discordlogo.png';
import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.png';
import sponsor2 from '../assets/sponsor2.png';

const Footer = () => {
  const year = new Date().getFullYear();

  // no partners/sponsors — footer is intentionally minimal and blends with the page

  return (
  <footer className="mt-auto bg-carbon text-white">
      <div className="w-full bg-carbon/95">
        <div className="w-full px-4 py-6">
          {/* simplified container so the footer blends more with the page */}
          <div className="p-6 md:p-8">
            {/* partner / sponsor logos (clickable) */}
            <div className="mb-6 flex items-center justify-center gap-6">
              <a href="https://www.svenskesport.se/" target="_blank" rel="noopener noreferrer" aria-label="Svenske Sport">
                <img src={partner1} alt="Svenske Sport" className="h-10 w-auto object-contain" />
              </a>
              <a href="https://esplay.com/" target="_blank" rel="noopener noreferrer" aria-label="Esplay">
                <img src={partner2} alt="Esplay" className="h-10 w-auto object-contain" />
              </a>
              <a href="https://avesta.se/" target="_blank" rel="noopener noreferrer" aria-label="Avesta">
                <img src={sponsor2} alt="Avesta" className="h-10 w-auto object-contain" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:items-start">
              {/* Branding / Contact */}
              <div className="md:col-span-1">
                <div>
                  <div className="text-xs text-white/60">© {year} Jinx Esport. All rights reserved</div>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <a href="https://x.com/jinxesport" target="_blank" rel="noreferrer" className="text-white/60 hover:text-fuchsia">
                    <img src={iconX} alt="X" className="h-7 w-7 object-contain" />
                  </a>
                  <a href="https://discord.com/invite/M39E4MVAeN" target="_blank" rel="noreferrer" className="text-white/60 hover:text-fuchsia">
                    <img src={iconDiscord} alt="Discord" className="h-6 w-6 object-contain" />
                  </a>
                </div>
              </div>

              {/* Teams quick links */}
              <div className="md:col-span-1">
                <div className="text-sm font-semibold text-white">Teams</div>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-white/60">
                  <li>
                    <NavLink to="/teams/main" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>
                      CS2 Main Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/teams/academy" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>
                      CS2 Academy Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/teams/lol" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>
                      League of Legends
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* Other quick links */}
              <div className="md:col-span-1">
                <div className="text-sm font-semibold text-white">Other</div>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-white/60">
                  <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>
                      Home
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
                </ul>
              </div>

              {/* Legal / small links */}
              <div className="md:col-span-1">
                <div className="text-sm font-semibold text-white">Legal</div>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-white/60">
                  <li>
                    <NavLink to="/gdpr" className={({ isActive }) => (isActive ? 'text-fuchsia' : 'text-white/60')}>
                      Privacy and terms
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
