import { Link } from "react-router-dom";

const teams = [
  {
    title: "CS2 Main Team",
    description: "Our top Counter-Strike 2 roster competing in national and international leagues.",
    to: "/teams/main",
  },
  {
    title: "CS2 Academy Team",
    description: "Developing future starters with structured practice and coaching.",
    to: "/teams/academy",
  },
  {
    title: "League of Legends",
    description: "League roster in formation, recruitment and trials ongoing.",
    to: "/teams/league",
  },
];

const TeamsOverviewPage = () => (
  <div className="space-y-16">
    <section className="rounded-[2.75rem] border border-white/10 bg-carbon/95 p-10 shadow-[0_22px_60px_rgba(255,0,127,0.16)] md:p-16">
  <p className="text-xs uppercase tracking-[0.4em] text-white/50">jinx esport Teams</p>
      <h1 className="mt-3 font-display text-4xl uppercase tracking-[0.25em] text-snow md:text-5xl">
        Competing Across Titles
      </h1>
      <p className="mt-4 max-w-2xl text-base text-white/65">
  Explore every roster representing jinx esport. From our established Counter-Strike squads to the upcoming League of Legends lineup, each team shares the same ambition: structure, development, and Swedish esports excellence.
      </p>
    </section>

    <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {teams.map((team) => (
        <div
          key={team.title}
          className="group rounded-[2.25rem] border border-white/10 bg-carbon/90 p-8 shadow-[0_22px_60px_rgba(255,0,127,0.16)] transition hover:border-fuchsia/40 hover:bg-carbon"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-white/45">Esport Division</p>
          <h2 className="mt-4 font-display text-2xl uppercase tracking-[0.25em] text-snow">{team.title}</h2>
          <p className="mt-3 text-sm text-white/65">{team.description}</p>
          <Link
            to={team.to}
            className="mt-6 inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-snow transition hover:bg-white/20 hover:text-fuchsia"
          >
            View Team
          </Link>
        </div>
      ))}
    </section>
  </div>
);

export default TeamsOverviewPage;


