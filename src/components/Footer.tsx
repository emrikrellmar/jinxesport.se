import { NavLink } from 'react-router-dom';
import logo from '../assets/jinx_logo.png';
import iconX from '../assets/xlogo.png';
import iconDiscord from '../assets/discordlogo.png';
import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.png';
import sponsor1 from '../assets/sponsor1.png';
import sponsor2 from '../assets/sponsor2.png';

const Footer = () => {
  const year = new Date().getFullYear();

  const partners = [partner1, sponsor1, partner2, sponsor2];

  return (
    <footer className="bg-carbon text-white">
      <div className="w-full bg-carbon/95">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="rounded-2xl bg-[#0f0b10] p-6 md:p-8">
            {/* image strip */}
            <div className="-mx-6 mb-4 flex overflow-hidden rounded-t-xl md:-mx-8">
              {partners.map((src, i) => (
                <img key={i} src={src} alt={`partner-${i}`} className="h-16 w-auto flex-shrink-0 object-cover" />
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:items-start">
              {/* Branding / Contact */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Jinx" className="h-10 w-auto" />
                  <div>
                    <div className="font-display text-lg text-snow">Jinx Esport</div>
                    <div className="text-xs text-white/60">Let's find harmony together.</div>
                  </div>
                </div>

                <div className="mt-3 text-sm">
                  <a href="mailto:info@jinxesport.se" className="text-white/60 hover:text-fuchsia">
                    info@jinxesport.se
                  </a>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <a href="https://x.com/jinxesport" target="_blank" rel="noreferrer" className="text-white/60 hover:text-fuchsia">
                    <img src={iconX} alt="X" className="h-6 w-6 object-contain" />
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

            <div className="mt-6 border-t border-white/6 pt-4 text-center text-xs text-white/50">
              <div>© {year} Jinx Esport. All rights reserved.</div>
              <div className="mt-1">Registered association · Privacy and membership terms apply.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
