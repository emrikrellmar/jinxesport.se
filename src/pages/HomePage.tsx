import { Link } from "react-router-dom";
import jerseyImage from "../assets/playerjersey.png";
import sponsorAjotech from "../assets/sponsor1.png";
import sponsorCollective from "../assets/sponsor2.png";
import partnerAlliance from "../assets/partner1.png";
import partnerCommunity from "../assets/partner2.png";
import iconX from "../assets/xlogo.png";
import iconDiscord from "../assets/discordlogo.png";
import TwitterFeed from "../components/TwitterFeed";

const sponsors = [
  { name: "Ajotech AB", logo: sponsorAjotech, size: "large" as const },
  { name: "JNIX Collective", logo: sponsorCollective, size: "large" as const },
];

const partners = [
  { name: "Digital Alliance", logo: partnerAlliance },
  { name: "Community Partner", logo: partnerCommunity },
];

const sponsorTiles = Array.from({ length: 6 }, (_, index) => sponsors[index % sponsors.length]);

const HomePage = () => {
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
                  to="/teams"
                  className="inline-flex items-center rounded-full bg-fuchsia px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-void"
                >
                  Teams
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
                  <img src={iconDiscord} alt="Discord logo" className="h-10 w-10 object-contain" />
                  <span className="sr-only">Discord</span>
                </a>
                <a
                  href="https://x.com/jinxesport"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-snow transition hover:text-fuchsia"
                >
                  <img src={iconX} alt="X logo" className="h-12 w-12 object-contain" />
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
              See the latest posts straight from X. New updates drop here the moment they go live.
            </p>
          </div>
          <TwitterFeed />
        </div>
      </section>

      <section className="rounded-[2.75rem] border border-white/10 bg-carbon/95 p-10 shadow-[0_22px_60px_rgba(255,0,127,0.16)] md:p-16">
        <div className="space-y-10">
          <div className="space-y-3 text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Sponsors</p>
            <p className="text-base text-white/60">
              Our sponsors invest in our vision and keep the lights on for every match, bootcamp, and community project.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="flex flex-nowrap justify-center gap-6 overflow-hidden">
              {sponsorTiles.map((sponsor, index) => {
                const sizeClass = sponsor.size === "large" ? "h-16 sm:h-20 md:h-24 xl:h-28" : "h-14 sm:h-16 md:h-20";
                return (
                  <div
                    key={`${sponsor.name}-${index}`}
                    className="flex flex-1 min-w-[8rem] items-center justify-center rounded-[1.35rem] border border-white/10 bg-white/5 px-6 py-6"
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

          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4 rounded-[2.25rem] border border-white/10 bg-carbon/90 p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Partners</p>
              <p className="text-base text-white/60">
                Partners collaborate with us on events and initiatives that enrich our players, supporters, and the
                community around Jinx Esport.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center justify-center rounded-[1.65rem] border border-white/10 bg-white/5 px-4 py-6"
                  >
                    <img src={partner.logo} alt={partner.name} className="h-14 w-auto object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.25rem] border border-white/10 bg-carbon/90 p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Work With Us</p>
              <p className="mt-3 text-sm text-white/60">
                Want to be visible alongside Jinx Esport? Reach out and we will tailor a partnership that matches your
                goals.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center rounded-full bg-fuchsia px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-void transition hover:bg-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;










