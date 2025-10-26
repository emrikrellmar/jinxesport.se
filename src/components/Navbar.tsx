import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/jinx_logo.png";
// social icons removed from header

type NavSection =
  | { type: "link"; label: string; to: string }
  | { type: "divider" };

const navStructure: NavSection[] = [
  { type: "link", label: "Home", to: "/" },
  { type: "link", label: "Teams", to: "/teams" },
  { type: "link", label: "About", to: "/about" },
  { type: "link", label: "Contact", to: "/contact" },
];

// externalLinks removed — replaced by single CTA
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkBase =
    "relative inline-flex items-center justify-center px-1 py-2 text-sm font-semibold uppercase tracking-[0.45em]";

  const renderLink = (label: string, to: string, onClick?: () => void) => (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) =>
        [linkBase, isActive ? "text-fuchsia" : "text-white/60 hover:text-snow"].join(" ")
      }
      onClick={onClick}
    >
      {label}
    </NavLink>
  );

  // renderExternal removed — external links moved out of header

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-carbon/95 py-4 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between px-6 md:px-12">
        <NavLink to="/" className="flex items-center gap-3 text-snow">
          <div className="flex h-14 w-14 items-center justify-center">
            <img src={logo} alt="Jinx Esport logo" className="h-full w-full object-contain" />
          </div>
          <span className="hidden font-display text-lg uppercase tracking-[0.35em] text-snow md:inline">Esport</span>
        </NavLink>

        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6">
          {navStructure.map((item, index) =>
            item.type === "divider" ? (
              <span
                key={`divider-${index}`}
                className="hidden h-4 w-px bg-white/25 md:inline-block"
                aria-hidden="true"
              />
            ) : (
              renderLink(item.label, item.to)
            )
          )}
        </nav>

        <div className="hidden items-center justify-end gap-3 md:flex">
          <NavLink
            to="/#membership-form"
            className="inline-flex items-center rounded-full bg-fuchsia px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-void transition hover:bg-white md:px-5 md:py-2"
          >
            Become a member
          </NavLink>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute right-6 top-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-ash/70 text-snow md:hidden z-50"
        >
          <span className="text-xl">{isOpen ? "\u00D7" : "\u2261"}</span>
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 bg-carbon px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4 text-center">
            {navStructure.map((item, index) =>
              item.type === "divider" ? (
                <div
                  key={`divider-mobile-${index}`}
                  className="mx-auto w-16 border-t border-white/15"
                  aria-hidden="true"
                />
              ) : (
                renderLink(item.label, item.to, () => setIsOpen(false))
              )
            )}
            <div className="mt-2 grid gap-3">
              <NavLink
                to="/#membership-form"
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-fuchsia px-4 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-void"
              >
                Become a member
              </NavLink>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;





