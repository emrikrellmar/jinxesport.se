import { Link } from "react-router-dom";
import jerseyImage from "../assets/playerjersey.png";
import sponsorPrimary from "../assets/sponsor2.png";
import sponsorSecondary from "../assets/sponsor_1png.png";
import sponsorTertiary from "../assets/sponsor3.png";
import iconX from "../assets/xlogo.png";
import iconDiscord from "../assets/discordlogo.png";
import XFeed from "../components/XFeed";

const sponsors = [
  { name: "Ajotech AB", logo: sponsorPrimary, size: "large" as const },
  { name: "JNIX Collective", logo: sponsorSecondary, size: "large" as const },
  { name: "Sponsor 3", logo: sponsorTertiary },
];

const HomePage = () => {
  const marqueeSponsors = [...sponsors, ...sponsors];

  return (
    <div className="space-y-20">
      <section className="relative overflow-visible rounded-[2.75rem] bg-carbon/90 p-10 shadow-[0_48px_140px_rgba(255,0,127,0.28)] md:p-16">
        <div className="relative grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Swedish esports and community</p>
            <h1 className="font-display text-5xl uppercase tracking-[0.2em] text-snow md:text-6xl">Jinx Esport</h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/teams/main"
                  className="inline-flex items-center rounded-full bg-fuchsia px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-void"
                >
                  Main Team
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-snow transition hover:bg-white/20 hover:text-fuchsia"
                >
                  About
                </Link>
                <a
                  href="https://www.netshirt.se/foreningsklader/jinx-e-sport"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-snow transition hover:bg-white/20 hover:text-fuchsia"
                >
                  Merch
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://discord.com/invite/M39E4MVAeN"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-snow transition hover:text-fuchsia"
                >
                  <img src={iconDiscord} alt="Discord logo" className="h-10 w-10" />
                  <span className="sr-only">Discord</span>
                </a>
                <a
                  href="https://x.com/jinxesport"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-snow transition hover:text-fuchsia"
                >
                  <img src={iconX} alt="X logo" className="h-10 w-10" />
                  <span className="sr-only">X/Twitter</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex justify-end">
            <div className="hero-shimmer pointer-events-none absolute -inset-[6rem] -z-10 rounded-[5rem]">
              <div className="absolute inset-[-18%] animate-heroPulse-outer rounded-[4.5rem] bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.48)_0%,_rgba(236,72,153,0.22)_55%,_rgba(236,72,153,0.08)_82%,_transparent_100%)]" />
              <div className="absolute inset-[-26%] animate-heroPulse-inner rounded-[5.5rem] bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.7)_0%,_rgba(220,38,38,0.28)_58%,_rgba(220,38,38,0.1)_85%,_transparent_100%)]" />
            </div>
            <img
              src={jerseyImage}
              alt="Jinx Esport jersey"
              className="hero-float relative w-full max-w-2xl drop-shadow-[0_45px_90px_rgba(255,0,127,0.35)]"
            />
          </div>
        </div>
      </section>

      <section className="rounded-[2.75rem] border border-white/10 bg-carbon/95 p-10 shadow-[0_22px_60px_rgba(255,0,127,0.16)] md:p-16">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Built On Competition And Care</p>
          <h2 className="font-display text-3xl uppercase tracking-[0.25em] text-snow md:text-4xl">
            Founded In Avesta, Sweden
          </h2>
          <p className="text-base text-white/70">
            Founded in 2025 and based in Avesta, Sweden, J!nX Esport is a growing esports organization built on two strong
            foundations: competitive excellence and social responsibility. Our mission is to combine elite-level gaming
            with community work that promotes safety, inclusion, and belonging for young people who struggle to fit into
            traditional environments.
          </p>
          <p className="text-base text-white/60">
            Every match we play and every program we run is meant to prove that high-level esports and meaningful
            community impact can grow together inside the same club.
          </p>
        </div>
      </section>

      <section className="rounded-[2.75rem] border border-white/10 bg-carbon/95 p-10 shadow-[0_22px_60px_rgba(255,0,127,0.16)] md:p-16">
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Live Updates</p>
            <h2 className="font-display text-3xl uppercase tracking-[0.25em] text-snow md:text-4xl">
              X Feed From @jinxesport
            </h2>
            <p className="mt-4 text-base text-white/60">
              See the latest three posts straight from X. New updates drop here the moment they go live.
            </p>
          </div>
          <XFeed />
        </div>
      </section>

      <section className="rounded-[2.75rem] border border-white/10 bg-carbon/95 p-10 shadow-[0_22px_60px_rgba(255,0,127,0.16)] md:p-16">
        <div className="space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Partners & Sponsors</p>
          <div className="relative overflow-hidden">
            <div className="sponsor-track gap-6 md:gap-8">
              {marqueeSponsors.map((sponsor, index) => {
                const sizeClass = sponsor.size === "large" ? "h-16 sm:h-20 md:h-24 xl:h-28" : "h-14 sm:h-16 md:h-20";
                return (
                <div
                  key={`${sponsor.name}-${index}`}
                  className="flex min-w-[7.5rem] shrink-0 items-center justify-center rounded-[1.35rem] border border-white/10 bg-white/5 px-5 py-4 sm:min-w-[9rem] sm:rounded-[1.6rem] sm:px-6 sm:py-5 md:min-w-[10rem] md:rounded-[1.75rem] md:px-8 md:py-6"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`${sizeClass} w-auto object-contain`}
                    loading="lazy"
                  />
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
