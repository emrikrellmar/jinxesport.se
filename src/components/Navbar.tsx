import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/jinx_logo.png";
import iconX from "../assets/xlogo.png";
import iconDiscord from "../assets/discordlogo.png";

type ExternalLink = {
  label: string;
  href: string;
  variant: "primary" | "ghost";
  icon?: string;
  iconOnly?: boolean;
};

type NavSection =
  | { type: "link"; label: string; to: string }
  | { type: "divider" };

const navStructure: NavSection[] = [
  { type: "link", label: "Home", to: "/" },
  { type: "link", label: "Teams", to: "/teams" },
  { type: "link", label: "About", to: "/about" },
  { type: "link", label: "Contact", to: "/contact" },
];

const externalLinks: ExternalLink[] = [
  { label: "Merch", href: "https://www.netshirt.se/foreningsklader/jinx-e-sport", variant: "ghost" },
  { label: "Discord", href: "https://discord.com/invite/M39E4MVAeN", variant: "ghost", icon: iconDiscord, iconOnly: true },
  { label: "X/Twitter", href: "https://x.com/jinxesport", variant: "ghost", icon: iconX, iconOnly: true },
];

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

  const renderExternal = (link: ExternalLink, onClick?: () => void) => {
    const baseClasses = link.iconOnly
      ? "inline-flex items-center justify-center text-snow transition hover:text-fuchsia"
      : "inline-flex items-center justify-center rounded-full border px-5 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.45em]";
    const variants = link.iconOnly
      ? ""
      : {
          primary: "border-fuchsia bg-fuchsia text-void hover:bg-white hover:border-white",
          ghost: "border-white/30 text-snow hover:border-fuchsia hover:text-fuchsia",
        }[link.variant];

    return (
      <a
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className={[baseClasses, variants].filter(Boolean).join(" ")}
        onClick={onClick}
      >
        {link.icon ? (
          <>
            <img src={link.icon} alt="X" className="h-10 w-10 object-contain" />
            {link.iconOnly ? <span className="sr-only">{link.label}</span> : null}
          </>
        ) : (
          link.label
        )}
      </a>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-carbon/95 py-4 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between px-6 md:px-12">
        <NavLink to="/" className="flex items-center gap-3 text-snow">
          <div className="flex h-14 w-14 items-center justify-center">
            <img src={logo} alt="Jinx Esport logo" className="h-full w-full object-contain" />
          </div>
          <span className="hidden font-display text-lg uppercase tracking-[0.35em] text-snow md:inline">Esport</span>
        </NavLink>

        <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
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
          {externalLinks.map((link) => renderExternal(link))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-ash/70 text-snow md:hidden"
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
              {externalLinks.map((link) => renderExternal(link, () => setIsOpen(false)))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;





